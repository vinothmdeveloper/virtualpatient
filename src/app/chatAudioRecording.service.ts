import { Injectable} from '@angular/core';
import * as RecordRTC from 'recordrtc';
import * as moment from 'moment';
import { Observable, Subject } from 'rxjs';
import * as firebase from 'firebase';
// import {firebase} from '@firebase/app';
// import '@firebase/messaging';
interface RecordedAudioOutput {
    blob: Blob;
    title: string;
}

@Injectable()
export class ChatAudioRecordingService {
    init(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            navigator.serviceWorker.ready.then((registration) => {
                // Don't crash an error if messaging not supported
                if (!firebase.messaging.isSupported()) {
                    console.log("Not supported");
                    resolve();
                    return;
                }
                const messaging = firebase.messaging();
                // Register the Service Worker
                messaging.useServiceWorker(registration);
                console.log("registration done");
                // Initialize your VAPI key
                messaging.usePublicVapidKey(
                    "BBAbx1PxBXXmOwey2bgwtni8a4a4f1ICkxlKasRj1JyYCJPfnTeP8GbmAKN8g3WnlbkyR1kGLE8Hn2okxv2bwaI"
                );
                // Optional and not covered in the article
                // Listen to messages when your app is in the foreground
                messaging.onMessage((payload) => {
                    console.log("payload",payload);
                });
                // Optional and not covered in the article
                // Handle token refresh
                messaging.onTokenRefresh(() => {
                    messaging.getToken().then(
                    (refreshedToken: string) => {
                        console.log("Refreshed token",refreshedToken);
                    }).catch((err) => {
                        console.error(err);
                    });
                });
                resolve();
            }, (err) => {
                reject(err);
            });
        });
    }
  
    requestPermission(): Promise<void> {
        return new Promise<void>(async (resolve) => {
            if (!Notification) {
                resolve();
                return;
            }
            if (!firebase.messaging.isSupported()) {
                resolve();
                return;
            }    
        try {
            Notification.requestPermission(status => {
            console.log('Notification permission status: ', status);
            if(status==="granted"){
                navigator.serviceWorker.getRegistration().then(function(reg) {
                    reg.getNotifications();     
                // var options = {
                //   body: 'Here is a notification body!',
                //   // icon: 'images/example.png',
                //   vibrate: [100, 50, 100],
                //   data: {
                //     dateOfArrival: Date.now(),
                //     primaryKey: 1
                //   }
                // };
                // reg.showNotification('Hello world!', options);
                });
            }
            });
        } 
        catch (err) {
            // No notifications granted
        }
        resolve();
        });
    }

    private stream;
    private recorder;
    private interval;
    private startTime;
    private _recorded = new Subject<RecordedAudioOutput>();
    private _recordingTime = new Subject<string>();
    private _recordingFailed = new Subject<string>();


    getRecordedBlob(): Observable<RecordedAudioOutput> {
        return this._recorded.asObservable();
    }

    getRecordedTime(): Observable<string> {
        return this._recordingTime.asObservable();
    }

    recordingFailed(): Observable<string> {
        return this._recordingFailed.asObservable();
    }


    startRecording() {
        if (this.recorder) {
        // It means recording is already started or it is already recording something
        return;
        }
        this._recordingTime.next('00:00');
        navigator.mediaDevices.getUserMedia({ audio: true }).then(s => {
        this.stream = s;
        this.record();
        }).catch(error => {
        this._recordingFailed.next();
        });
    }

    abortRecording() {
        this.stopMedia();
    }

    private record() {
        this.recorder = new RecordRTC.MediaStreamRecorder(this.stream, {
        type: 'audio',
        mimetype:'audio/webm',
            numberOfAudioChannels: 1,
            bufferSize: 16384,        
            // recorderType: 'MediaStreamRecorder',
            disableLogs: true,
            // timeSlice: 1000,
            audioBitsPerSecond: 256 * 8 * 1024
        });

        this.recorder.record();
        this.startTime = moment();
        this.interval = setInterval(
        () => {
            const currentTime = moment();
            const diffTime = moment.duration(currentTime.diff(this.startTime));
            const time = this.toString(diffTime.minutes()) + ':' + this.toString(diffTime.seconds());
            this._recordingTime.next(time);
        },
        100
        );
    }

    private toString(value) {
        let val = value;
        if (!value) {
        val = '00';
        }
        if (value < 10) {
        val = '0' + value;
        }
        return val;
    }

    stopRecording() {
        if (this.recorder) {
        this.recorder.stop((blob) => {
            if (this.startTime) {
            const mp3Name = encodeURIComponent('audio_' + new Date().getTime() + '.wav');
            console.log("Type",blob.type);
            this.stopMedia();
            this._recorded.next({ blob: blob, title: mp3Name });
            }
        }, () => {
            this.stopMedia();
            this._recordingFailed.next();
        });
        }
    }

    private stopMedia() {
        if (this.recorder) {
        this.recorder = null;
        clearInterval(this.interval);
        this.startTime = null;
        if (this.stream) {
            this.stream.getAudioTracks().forEach(track => track.stop());
            this.stream = null;
        }
        }
    }

}