function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chatroom-chatroom-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chatroom/chatroom.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatroom/chatroom.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatroomChatroomPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-title>\r\n        <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle;\"> Swasth\r\n      </ion-title>      \r\n    </ion-buttons>\r\n    <div class=\"chatRoom\"><ion-label>{{roomName}}</ion-label></div>\r\n    <ion-buttons slot=\"end\">\r\n      <a target=\"blank\" (click)=\"openVideoCall()\">\r\n        <ion-icon name=\"videocam\" class=\"whatsapp_call\"></ion-icon>\r\n      </a>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col *ngFor=\"let chat of chats\" lines=\"none\" size=12>\r\n      <div class=\"chat-status\" text-center *ngIf=\"chat.type==='join'||chat.type==='exit';else message\">\r\n        <span class=\"chat-date\">{{chat.sendDate | date:'short'}}</span>\r\n        <span class=\"chat-content-center\">{{chat.message}}</span>\r\n      </div>\r\n      <ng-template #message>\r\n        <div *ngIf=\"chat.type==='message';else complaint\">\r\n          <div class=\"chat-message-r\" *ngIf=\"chat.user === nickname\">\r\n            <div class=\"right-bubble\">\r\n              <p text-wrap>{{chat.message}}</p>\r\n            </div>\r\n            <!-- <div style=\"display: block; text-align: end; position: relative; left: 61%;\">\r\n              <span style=\"font-size: 10px;\">{{chat.sendDate | date:'short'}}</span>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"chat-message-l\" *ngIf=\"chat.user !== nickname\">\r\n            <div class=\"left-bubble\">\r\n              <p text-wrap>{{chat.message}}</p>\r\n            </div>\r\n            <!-- <div style=\"display: block; text-align: start; position: relative; left: 2%;\">\r\n              <span style=\"font-size: 10px;\">{{chat.sendDate | date:'short'}}</span>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template #complaint>\r\n        <div *ngIf=\"chat.type==='complaint';else prescription\">\r\n          <div class=\"chat-message-r\" *ngIf=\"chat.user == nickname\">\r\n            <div class=\"right-bubble-complaint\">\r\n              <p text-wrap>{{chat.message}}</p>\r\n            </div>\r\n            <!-- <div style=\"display: block; text-align: end; position: relative; left: 61%;\">\r\n              <span style=\"font-size: 10px;\">{{chat.sendDate | date:'short'}}</span>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"chat-message-r\" *ngIf=\"chat.user != nickname\">\r\n            <div class=\"right-bubble-complaint\">\r\n              <p text-wrap>{{chat.message}}</p>\r\n            </div>\r\n            <!-- <div style=\"display: block; text-align: end; position: relative; left: 61%;\">\r\n              <span style=\"font-size: 10px;\">{{chat.sendDate | date:'short'}}</span>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template  #prescription>\r\n        <div *ngIf=\"chat.type==='prescription';else audio\">\r\n          <div class=\"chat-message-l\" *ngIf=\"chat.user !== nickname\">\r\n            <div class=\"left-bubble-prescription\">\r\n              <div style=\"display: flex;\">\r\n                <p>To view the prescription</p>\r\n                <button (click)=\"openEPrescription(chat)\">View</button>\r\n              </div>\r\n              <div style=\"display: block; text-align: start; position: relative; left: 60%;\">\r\n                <span style=\"font-size: 10px;\">{{chat.sendDate | date:'short'}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template  #audio >\r\n        <div *ngIf=\"chat.type==='audio';else image\">\r\n          <div class=\"chat-message\" *ngIf=\"chat.user === nickname\">\r\n            <div class=\"right-bubble-media\">\r\n              <audio controls>\r\n                <source src=\"{{chat.message}}\" type='audio/webm;codecs=\"opus\"'>\r\n              </audio>\r\n            </div>\r\n          </div>\r\n          <div class=\"chat-message\" *ngIf=\"chat.user !== nickname\">\r\n            <div class=\"left-bubble-media\">\r\n              <audio controls>\r\n                <source src={{chat.message}} type=\"audio/wav\">\r\n              </audio>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template #image >\r\n        <div class=\"chat-message\" text-right *ngIf=\"chat.user === nickname\">\r\n          <div class=\"right-bubble-media\">\r\n            <img src=\"{{chat.message}}\" style=\"width: 50%;height: 10%;\" >\r\n          </div>\r\n        </div>\r\n        <div class=\"chat-message\" text-left *ngIf=\"chat.user !== nickname\">\r\n          <div class=\"left-bubble-media\">\r\n            <img src=\"{{chat.message}}\" style=\"width: 100%\" [hidden]=\"lastImage === null\">\r\n            <h3 [hidden]=\"lastImage !== null\"></h3>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"chatRestrictDetail!=undefined\">\r\n      <div class=\"foot\" *ngIf=\"role=='Admin' && status=='Active' && chatRestrictDetail.status=='Active'\">\r\n        <div class=\"foot-l\">\r\n          <ion-input *ngIf=\"!isRecording && !blobUrl\" type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"data.message\" name=\"message\" (keyup.enter)=\"sendMessage()\"></ion-input>\r\n          <!-- <ion-input *ngIf=\"!isRecording && !blobUrl && pendingPaymentStatus\" type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"data.message\" name=\"message\" (click)=\"consultPayment()\"></ion-input> -->\r\n        </div>\r\n        <div class=\"foot-r\" style=\"width:15%\">\r\n          <ion-icon *ngIf=\"!isRecording && !blobUrl\" color=\"primary\" name=\"image\" (click)=\"presentActionSheet()\"></ion-icon>\r\n          <ion-icon color=\"primary\" *ngIf=\"!isRecording && !blobUrl\" (click)=\"startRecording()\" name=\"mic\"></ion-icon>\r\n          <ion-icon *ngIf=\"isRecording && !blobUrl\" (click)=\"stopRecording()\" color=\"secondary\" name=\"mic-off\"> {{recordedTime}} </ion-icon>\r\n          <!-- <ion-icon *ngIf=\"!isRecording && !blobUrl && (data.message).length===0\" name=\"send\" color=\"fav\"  (click)=\"empty()\" (keyup.enter)=\"empty()\"></ion-icon> -->\r\n          <ion-icon color=\"primary\" *ngIf=\"!isRecording && !blobUrl && (data.message).length>0\" name=\"send\" (click)=\"sendMessage()\" (keyup.enter)=\"sendMessage()\" ></ion-icon>\r\n        </div>\r\n      </div>\r\n      <div class=\"foot\" *ngIf=\"role=='Admin' && status=='Active' && familyRestrictDetails.status=='Active'\">\r\n        <div class=\"foot-l\">\r\n          <ion-input *ngIf=\"!isRecording && !blobUrl\" type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"data.message\" name=\"message\" (keyup.enter)=\"sendMessage()\"></ion-input>\r\n          <!-- <ion-input *ngIf=\"!isRecording && !blobUrl && pendingPaymentStatus\" type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"data.message\" name=\"message\" (click)=\"consultPayment()\"></ion-input> -->\r\n        </div>\r\n        <div class=\"foot-r\" style=\"width:15%\">\r\n          <ion-icon *ngIf=\"!isRecording && !blobUrl\" color=\"primary\" name=\"image\" (click)=\"presentActionSheet()\"></ion-icon>\r\n          <ion-icon color=\"primary\" *ngIf=\"!isRecording && !blobUrl\" (click)=\"startRecording()\" name=\"mic\"></ion-icon>\r\n          <ion-icon *ngIf=\"isRecording && !blobUrl\" (click)=\"stopRecording()\" color=\"secondary\" name=\"mic-off\"> {{recordedTime}} </ion-icon>\r\n          <!-- <ion-icon *ngIf=\"!isRecording && !blobUrl && (data.message).length===0\" name=\"send\" color=\"fav\"  (click)=\"empty()\" (keyup.enter)=\"empty()\"></ion-icon> -->\r\n          <ion-icon color=\"primary\" *ngIf=\"!isRecording && !blobUrl && (data.message).length>0\" name=\"send\" (click)=\"sendMessage()\" (keyup.enter)=\"sendMessage()\" ></ion-icon>\r\n        </div>\r\n      </div>\r\n      <div class=\"foot\" *ngIf=\"role=='Admin' && status=='Deactive' && chatRestrictDetail.status=='Deactive'\">\r\n        <div class=\"foot-l\">\r\n          <ion-input *ngIf=\"!isRecording && !blobUrl && !pendingPaymentStatus\" type=\"text\" placeholder=\"Type a message\" (click)=\"getComplaints()\" name=\"message\"></ion-input>\r\n          <ion-input *ngIf=\"!isRecording && !blobUrl && pendingPaymentStatus\" type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"data.message\" name=\"message\" (click)=\"consultPayment()\"></ion-input>\r\n        </div>\r\n        <div class=\"foot-r\" style=\"width:15%\">\r\n          <ion-icon *ngIf=\"!isRecording && !blobUrl\" color=\"primary\" name=\"image\" (click)=\"getComplaints()\"></ion-icon>\r\n          <ion-icon color=\"primary\" (click)=\"getComplaints()\" name=\"mic\"></ion-icon>\r\n        </div>\r\n      </div>\r\n      <div class=\"foot\" *ngIf=\"role=='Admin' && status=='Deactive' && chatRestrictDetail.status=='Active'\">\r\n        <div class=\"foot-l\">\r\n          <ion-input *ngIf=\"!isRecording && !blobUrl\" type=\"text\" placeholder=\"Type a message\" (click)=\"complaintCheck()\" name=\"message\"></ion-input>\r\n          <!-- <ion-input *ngIf=\"!isRecording && !blobUrl && pendingPaymentStatus\" type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"data.message\" name=\"message\" (click)=\"consultPayment()\"></ion-input> -->\r\n        </div>\r\n        <div class=\"foot-r\" style=\"width:15%\">\r\n          <ion-icon *ngIf=\"!isRecording && !blobUrl\" color=\"primary\" name=\"image\" (click)=\"complaintCheck()\"></ion-icon>\r\n          <ion-icon color=\"primary\" (click)=\"complaintCheck()\" name=\"mic\"></ion-icon>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"foot\" *ngIf=\"role=='Member' && status=='Active'\">\r\n        <div class=\"foot-l\">\r\n          <ion-input *ngIf=\"!isRecording && !blobUrl && !sendComplaintToTriageStatus && !pendingPaymentStatus\" type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"data.message\" name=\"message\" (keyup.enter)=\"sendMessage()\"></ion-input>\r\n          <ion-input *ngIf=\"!isRecording && !blobUrl && sendComplaintToTriageStatus && !pendingPaymentStatus\" type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"data.message\" name=\"message\" (click)=\"sendComplaintToTriageDoc()\"></ion-input>\r\n          <ion-input *ngIf=\"!isRecording && !blobUrl && pendingPaymentStatus\" type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"data.message\" name=\"message\" (click)=\"consultPayment()\"></ion-input>\r\n        </div>\r\n        <div class=\"foot-r\" style=\"width:15%\">\r\n          <ion-icon *ngIf=\"!isRecording && !blobUrl\" color=\"primary\" name=\"image\" (click)=\"presentActionSheet()\"></ion-icon>\r\n          <ion-icon color=\"primary\" *ngIf=\"!isRecording && !blobUrl\" (click)=\"startRecording()\" name=\"mic\"></ion-icon>\r\n          <ion-icon *ngIf=\"isRecording && !blobUrl\" (click)=\"stopRecording()\" color=\"secondary\" name=\"mic-off\"> {{recordedTime}} </ion-icon>\r\n          <!-- <ion-icon *ngIf=\"!isRecording && !blobUrl && (data.message).length===0\" name=\"send\" color=\"fav\"  (click)=\"empty()\" (keyup.enter)=\"empty()\"></ion-icon> -->\r\n          <ion-icon color=\"primary\" *ngIf=\"!isRecording && !blobUrl && (data.message).length>0\" name=\"send\" (click)=\"sendMessage()\" (keyup.enter)=\"sendMessage()\" ></ion-icon>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"status=='Deactive' && role=='Member'\" style=\"width: 100%;\">\r\n        <p style=\"width: 100%; text-align: center; background: #e5e5e5; margin: 0px; padding: 6px; color: #0059b3; border-radius: 5px;\">\r\n          *You can start chat only with the Family Physician\r\n        </p>\r\n      </div>\r\n\r\n      <div style=\"width: 100%; text-align: end;\">\r\n        <audio *ngIf=\"!isRecording && blobUrl\"  controls> <source [src]=\"blobUrl\" type=\"audio/wav\"> </audio>\r\n        <ion-icon *ngIf=\"!isRecording && blobUrl\" color=\"danger\"(click)=\"clearRecordedData()\" name=\"close-circle\"></ion-icon>\r\n        <ion-icon *ngIf=\"!isRecording && blobUrl\" color=\"secondary\"(click)=\"storeAudio()\" name=\"send\"></ion-icon>\r\n      </div>\r\n    </ion-row>\r\n  \r\n  </ion-grid>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/send-chat-complaints/send-chat-complaints.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/send-chat-complaints/send-chat-complaints.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSendChatComplaintsSendChatComplaintsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Send Health Complaint</ion-title>\r\n    <ion-icon slot=\"end\" name=\"close-circle\" title=\"close\" class=\"close-button\" (click)=\"closeModal()\"></ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"background-color: #FFDC00; display: flex; justify-content: center; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; padding-top: 6px; font-size: 14px;\">\r\n    <!-- <ion-icon name=\"alert-circle-outline\" style=\"color: coral; padding-right: 8px;\"></ion-icon> -->\r\n    You have <p style=\"color: red; font-size: 16px; margin: 0px; padding-left: 5px; padding-right: 5px; padding-bottom: 5px;\">{{chatCount}}</p> Free Chats remaining for this Month.\r\n  </div>\r\n  <div style=\"padding: 16px;\">\r\n    <ion-row>\r\n      <ion-col size=12>\r\n        <p style=\"margin: 0px; color: #919191;\">Circle Detail</p>\r\n        <div style=\"display: flex;\">\r\n          <p style=\"margin: 6px 0 0 0; font-size: 13px;\">Family Physician:</p>\r\n          <p style=\"padding-left:6px; margin:6px 0 0 0; color: #0059b3; font-size: 13px;\">{{docName}}</p>\r\n        </div>\r\n        <div style=\"display: flex;\">\r\n          <p style=\"margin:6px 0 0 0; font-size: 13px;\">Specilization:</p>\r\n          <p style=\"padding-left:6px; color: #0059b3;margin: 6px 0 0 0; font-size: 13px;\">{{docSpec}}</p>\r\n        </div>\r\n        <div style=\"display: flex;\">\r\n          <p style=\"margin:6px 0 0 0; font-size: 13px;\">Circle Name:</p>\r\n          <p style=\"padding-left:6px; color: #0059b3;margin: 6px 0 0 0; font-size: 13px;\">{{circleName}}</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=12>\r\n        <p class=\"c-form__label document_for\">General Health Complaint<sup>*</sup></p>\r\n        <textarea type=\"text\" class=\"c-form__input\" name=\"complaint\" (keyup)=\"ptHealthComplaint($event,'complaint')\" [(ngModel)]=\"complaint\"></textarea>\r\n      </ion-col>\r\n      <ion-col size=12>\r\n        <p class=\"c-form__label document_for\">How long have you been experiencing said complaint?</p>\r\n        <textarea type=\"text\" class=\"c-form__input\" name=\"time\" (keyup)=\"ptHealthComplaint($event,'howlong')\" [(ngModel)]=\"howLong\"></textarea>\r\n      </ion-col>\r\n      <ion-col size=12>\r\n        <p class=\"c-form__label document_for\">Pre-existing illness,Current medication, Drug allergy</p>\r\n        <textarea type=\"text\" class=\"c-form__input\" name=\"notes\" (keyup)=\"ptHealthComplaint($event,'preill')\" [(ngModel)]=\"preIllness\"></textarea>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n    <ion-row>\r\n      <ion-col class=\"send\">\r\n        <ion-button [disabled]=\"complaint==''\" (click)=\"sendMessage()\">Send</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/chatroom/chatroom-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/chatroom/chatroom-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ChatroomPageRoutingModule */

  /***/
  function srcAppChatroomChatroomRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatroomPageRoutingModule", function () {
      return ChatroomPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _chatroom_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chatroom.page */
    "./src/app/chatroom/chatroom.page.ts");

    var routes = [{
      path: '',
      component: _chatroom_page__WEBPACK_IMPORTED_MODULE_3__["ChatroomPage"]
    }];

    var ChatroomPageRoutingModule = function ChatroomPageRoutingModule() {
      _classCallCheck(this, ChatroomPageRoutingModule);
    };

    ChatroomPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatroomPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chatroom/chatroom.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/chatroom/chatroom.module.ts ***!
    \*********************************************/

  /*! exports provided: ChatroomPageModule */

  /***/
  function srcAppChatroomChatroomModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatroomPageModule", function () {
      return ChatroomPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _chatroom_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chatroom-routing.module */
    "./src/app/chatroom/chatroom-routing.module.ts");
    /* harmony import */


    var _chatroom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chatroom.page */
    "./src/app/chatroom/chatroom.page.ts");

    var ChatroomPageModule = function ChatroomPageModule() {
      _classCallCheck(this, ChatroomPageModule);
    };

    ChatroomPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chatroom_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatroomPageRoutingModule"]],
      declarations: [_chatroom_page__WEBPACK_IMPORTED_MODULE_6__["ChatroomPage"]]
    })], ChatroomPageModule);
    /***/
  },

  /***/
  "./src/app/chatroom/chatroom.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/chatroom/chatroom.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatroomChatroomPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  background: white;\n}\n\n.ion-icon {\n  font-size: 12px;\n  color: #0064b9;\n}\n\nion-content {\n  background-size: cover;\n  height: 100%;\n  overflow: hidden;\n}\n\nion-content .item-md, ion-content .item-ios {\n  background: none;\n}\n\nion-footer {\n  background: white;\n}\n\nion-footer ion-icon {\n  padding: 10px;\n  font-size: 20px;\n  color: #0064b9;\n}\n\n.bar-button-md[icon-only] ion-icon {\n  padding: 0 0.1em;\n  min-width: 28px;\n  font-size: 1.5em;\n  line-height: 0.67;\n  pointer-events: none;\n}\n\n.bar-button-md[icon-only1] ion-icon {\n  margin-top: 17px;\n  margin-left: -20px;\n  min-width: 28px;\n  font-size: 1.5em;\n  line-height: 0.67;\n  pointer-events: none;\n}\n\n.title {\n  display: flex;\n  padding-top: 4px;\n}\n\n.chat-status {\n  min-height: 49px;\n}\n\n.chat-status .chat-date {\n  display: block;\n  font-size: 10px;\n  color: #222222;\n  height: 15px;\n  left: 10%;\n  right: 10%;\n}\n\n.chat-status .chat-content-center {\n  padding: 5px 10px;\n  background-color: #e1e1f7;\n  border-radius: 6px;\n  font-size: 12px;\n  color: #555;\n  height: 34px;\n  left: 10%;\n  right: 10%;\n}\n\n.chat-message {\n  width: 60%;\n  min-height: 40px;\n  border-bottom: none;\n}\n\n.chat-message .right-bubble {\n  position: relative;\n  background: #0089d0;\n  border-top-left-radius: 0.4em;\n  border-bottom-left-radius: 0.4em;\n  border-bottom-right-radius: 0.4em;\n  padding: 6px 12px;\n  left: 61%;\n  text-align: left;\n  white-space: pre-wrap;\n}\n\n.chat-message .right-bubble span.msg-name {\n  font-size: 12px;\n  font-weight: bold;\n  color: green;\n}\n\n.chat-message .right-bubble span.msg-date {\n  font-size: 10px;\n}\n\n.chat-message .right-bubble p {\n  color: #fff;\n  margin: 0 0 3px;\n}\n\n.chat-message .right-bubble:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: 25px solid transparent;\n  border-left-color: #0089d0;\n  border-right: 0;\n  border-top: 0;\n  margin-top: -13.5px;\n  margin-right: -20px;\n}\n\n.chat-message .right-bubble-complaint {\n  position: relative;\n  background: #F7D3DB;\n  border-top-left-radius: 0.4em;\n  border-bottom-left-radius: 0.4em;\n  border-bottom-right-radius: 0.4em;\n  padding: 6px 12px;\n  left: 61%;\n  text-align: left;\n  white-space: pre-wrap;\n}\n\n.chat-message .right-bubble-complaint span.msg-name {\n  font-size: 12px;\n  font-weight: bold;\n  color: green;\n}\n\n.chat-message .right-bubble-complaint span.msg-date {\n  font-size: 10px;\n}\n\n.chat-message .right-bubble-complaint p {\n  color: #222;\n  margin: 3px 0 5px;\n}\n\n.chat-message .right-bubble-complaint:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: 25px solid transparent;\n  border-left-color: #F7D3DB;\n  border-right: 0;\n  border-top: 0;\n  margin-top: -13.5px;\n  margin-right: -20px;\n}\n\n.chat-message .left-bubble {\n  position: relative;\n  background-color: #b8f1ff;\n  border-top-right-radius: 0.4em;\n  border-bottom-left-radius: 0.4em;\n  border-bottom-right-radius: 0.4em;\n  padding: 6px 12px;\n  left: 2%;\n}\n\n.chat-message .left-bubble span.msg-name {\n  font-size: 12px;\n  font-weight: bold;\n  color: blue;\n}\n\n.chat-message .left-bubble span.msg-date {\n  font-size: 10px;\n}\n\n.chat-message .left-bubble:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: 27px solid transparent;\n  border-right-color: #b8f1ff;\n  border-left: 0;\n  border-top: 0;\n  margin-top: -13.5px;\n  margin-left: -27px;\n}\n\n.chat-title {\n  text-align: center;\n  display: flex;\n  padding-left: 500px;\n  color: darkblue;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.chat-whatsapp {\n  padding-left: 25px;\n  padding-top: 13px;\n  color: #21b842;\n}\n\n.chat-call {\n  padding-left: 25px;\n  padding-top: 13px;\n  color: #21b842;\n}\n\n.chat-send {\n  padding-left: 25px;\n  padding-top: 13px;\n  color: #21b842;\n}\n\n.whatsapp_call {\n  font-size: 20px;\n  font-weight: 500;\n  top: 8px;\n  padding-right: 25px;\n  position: relative;\n}\n\n.voice_call {\n  font-size: 1.9rem;\n  font-weight: 500;\n  top: 8px;\n  padding-right: 10px;\n  position: relative;\n}\n\n.chatRoom {\n  display: flex;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.foot {\n  width: 100%;\n  display: flex;\n}\n\n.foot ion-icon {\n  font-size: 20px;\n  padding: 6px 0 6px 8px;\n}\n\n.foot-l {\n  width: 95%;\n}\n\n.foot-l ion-input {\n  position: relative;\n  display: block;\n  flex: 1;\n  width: 100%;\n  background-color: #e5e5e5;\n  border-radius: 10px;\n}\n\n.foot-r {\n  width: 5%;\n  display: flex;\n}\n\n.chat-message {\n  width: 50%;\n  min-height: 40px;\n}\n\n.chat-message .right-bubble-media {\n  position: relative;\n  border-top-left-radius: 0.4em;\n  border-bottom-left-radius: 0.4em;\n  border-bottom-right-radius: 0.4em;\n  padding: 5px 10px 10px;\n  left: 90%;\n  text-align: right;\n}\n\n.chat-message .left-bubble-media {\n  position: relative;\n  border-top-right-radius: 0.4em;\n  border-bottom-left-radius: 0.4em;\n  border-bottom-right-radius: 0.4em;\n  padding: 5px 10px 10px;\n  right: 90%;\n  text-align: left;\n}\n\n.chat-message .right-bubble-media:after {\n  content: \"\";\n  position: absolute;\n}\n\n.chat-message .left-bubble-media:after {\n  content: \"\";\n  position: absolute;\n}\n\n.chat-message-l {\n  display: flex;\n  width: 100%;\n}\n\n.chat-message-l .left-bubble {\n  max-width: 80%;\n  left: 5%;\n}\n\n.chat-message-l .left-bubble p {\n  background: #dddddd;\n  font-size: 16px;\n  padding: 10px 10px 10px 12px;\n  border-radius: 20px;\n  margin: 0 0 5px 0;\n}\n\n.chat-message-l .left-bubble-prescription {\n  max-width: 75%;\n  background: #F7D3DB;\n  right: 5%;\n  border-radius: 20px;\n  white-space: pre-wrap;\n}\n\n.chat-message-l .left-bubble-prescription span.msg-name {\n  font-size: 12px;\n  font-weight: bold;\n  color: green;\n}\n\n.chat-message-l .left-bubble-prescription span.msg-date {\n  font-size: 10px;\n}\n\n.chat-message-l .left-bubble-prescription p {\n  color: #222;\n  font-size: 13px;\n  padding: 10px 10px 10px 12px;\n  text-align: left;\n  margin: 0 0 5px 0;\n}\n\n.chat-message-l .left-bubble-prescription button {\n  width: 80px;\n  border-radius: 20px;\n  margin: 6px;\n  color: #fff;\n  background: #0059b3;\n}\n\n.chat-message-r {\n  display: flex;\n  width: 100%;\n  flex-direction: row-reverse;\n}\n\n.chat-message-r .right-bubble {\n  max-width: 75%;\n  right: 5%;\n}\n\n.chat-message-r .right-bubble p {\n  background: #2293fd;\n  color: white;\n  font-size: 16px;\n  padding: 10px 10px 10px 12px;\n  border-radius: 20px;\n  text-align: right;\n  margin: 0 0 5px 0;\n}\n\n.chat-message-r .right-bubble-complaint {\n  max-width: 75%;\n  background: #F7D3DB;\n  right: 5%;\n  border-radius: 20px;\n  white-space: pre-wrap;\n}\n\n.chat-message-r .right-bubble-complaint span.msg-name {\n  font-size: 12px;\n  font-weight: bold;\n  color: green;\n}\n\n.chat-message-r .right-bubble-complaint span.msg-date {\n  font-size: 10px;\n}\n\n.chat-message-r .right-bubble-complaint p {\n  color: #222;\n  font-size: 16px;\n  padding: 10px 10px 10px 12px;\n  text-align: left;\n  margin: 0 0 5px 0;\n}\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .foot {\n    width: 100%;\n    display: flex;\n  }\n  .foot-l {\n    width: 80%;\n  }\n  .foot-l ion-input {\n    position: relative;\n    display: block;\n    flex: 1;\n    width: 100%;\n    background-color: #e5e5e5;\n    border-radius: 10px;\n  }\n  .foot-r {\n    width: 20%;\n    display: flex;\n  }\n}\n\n@media (max-width: 575px) {\n  .foot {\n    width: 100%;\n    display: flex;\n  }\n  .foot-l {\n    width: 80%;\n  }\n  .foot-l ion-input {\n    position: relative;\n    display: block;\n    flex: 1;\n    width: 100%;\n    background-color: #e5e5e5;\n    border-radius: 10px;\n  }\n  .foot-r {\n    width: 20%;\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHJvb20vRjpcXHN3YXN0aFxcc3dhc3RodmlydHVhbHBhdGllbnQvc3JjXFxhcHBcXGNoYXRyb29tXFxjaGF0cm9vbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXRyb29tL2NoYXRyb29tLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0U7RUFFRSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBRUksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURDSTtFQUNFLGdCQUFBO0FDQ047O0FERUU7RUFDRSxpQkFBQTtBQ0NKOztBREFJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRU47O0FERUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFRTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0U7RUFHRSxhQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLGdCQUFBO0FDRko7O0FER0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFFQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNITjs7QURLSTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSE47O0FETUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRElJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNGTjs7QURHTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNEUjs7QURHTTtFQUNFLGVBQUE7QUNEUjs7QURHTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDRFI7O0FES0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0hOOztBRE1JO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNKTjs7QURLTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNIUjs7QURLTTtFQUNFLGVBQUE7QUNIUjs7QURLTTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0hSOztBRE9JO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNMTjs7QURRSTtFQU1FLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7QUNYTjs7QURZTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNWUjs7QURZTTtFQUNFLGVBQUE7QUNWUjs7QURjSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDWk47O0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDYko7O0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNiSjs7QURlRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDWko7O0FEZUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1pKOztBRGVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNaSjs7QURjRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1hKOztBRGNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDWEo7O0FEY0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ1hKOztBRFlJO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FDVk47O0FEWUk7RUFDRSxVQUFBO0FDVk47O0FEV007RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNUUjs7QURZSTtFQUNFLFNBQUE7RUFDQSxhQUFBO0FDVk47O0FEY0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNYSjs7QURZSTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNWTjs7QURZSTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNWTjs7QURZSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ1ZOOztBRFlJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDVk47O0FEY0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ1hKOztBRFlJO0VBQ0UsY0FBQTtFQU1FLFFBQUE7QUNmUjs7QURnQk07RUFDRSxtQkFBQTtFQUdBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNoQlI7O0FEbUJJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNqQk47O0FEa0JNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ2hCUjs7QURrQk07RUFDRSxlQUFBO0FDaEJSOztBRGtCTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDaEJSOztBRGtCTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNoQlI7O0FEcUJFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ2xCSjs7QURvQkk7RUFDRSxjQUFBO0VBTUUsU0FBQTtBQ3ZCUjs7QUR3Qk07RUFDRSxtQkFBQTtFQUdBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUN4QlI7O0FEMkJJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUN6Qk47O0FEMEJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ3hCUjs7QUQwQk07RUFDRSxlQUFBO0FDeEJSOztBRDBCTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDeEJSOztBRDhCRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUMzQko7RUQ0Qkk7SUFDRSxVQUFBO0VDMUJOO0VEMkJNO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0lBRUEsT0FBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0VDekJSO0VENEJJO0lBQ0UsVUFBQTtJQUNBLGFBQUE7RUMxQk47QUFDRjs7QUQ4QkU7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VDNUJKO0VENkJJO0lBQ0UsVUFBQTtFQzNCTjtFRDRCTTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUVBLE9BQUE7SUFDQSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtFQzFCUjtFRDZCSTtJQUNFLFVBQUE7SUFDQSxhQUFBO0VDM0JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGF0cm9vbS9jaGF0cm9vbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlOyAgICBcclxuICB9XHJcbiAgLmlvbi1pY29uIHtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzAwNjRiOTtcclxuICB9XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAvL2JhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1ncy9jaGF0LWJhY2sucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLml0ZW0tbWQsIC5pdGVtLWlvcyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICMwMDY0Yjk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmFyLWJ1dHRvbi1tZFtpY29uLW9ubHldIGlvbi1pY29uIHtcclxuICAgIHBhZGRpbmc6IDAgMC4xZW07XHJcbiAgICBtaW4td2lkdGg6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IC42NztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmJhci1idXR0b24tbWRbaWNvbi1vbmx5MV0gaW9uLWljb24ge1xyXG4gICAgLy8gcGFkZGluZzogMCAwLjFlbTtcclxuICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IC42NztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcblxyXG4gIC5jaGF0LXN0YXR1cyB7XHJcbiAgICBtaW4taGVpZ2h0OiA0OXB4O1xyXG4gICAgLmNoYXQtZGF0ZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIC8vIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgIC8vIHRleHQtc2hhZG93OiAwcHggLTFweCAwcHggIzIyMiwgMHB4IDFweCAwcHggI2FhYTtcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgIHJpZ2h0OjEwJTtcclxuICAgIH1cclxuICAgIC5jaGF0LWNvbnRlbnQtY2VudGVyIHtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZjc7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgIHJpZ2h0OjEwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNoYXQtbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAucmlnaHQtYnViYmxlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDA4OWQwO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNGVtO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNGVtO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjRlbTtcclxuICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgIGxlZnQ6IDYxJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICBzcGFuLm1zZy1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ubXNnLWRhdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW46IDAgMCAzcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQtYnViYmxlOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgYm9yZGVyOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwODlkMDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTMuNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1idWJibGUtY29tcGxhaW50IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRjdEM0RCO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNGVtO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNGVtO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjRlbTtcclxuICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgIGxlZnQ6IDYxJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICBzcGFuLm1zZy1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ubXNnLWRhdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICBtYXJnaW46IDNweCAwIDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1idWJibGUtY29tcGxhaW50OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgYm9yZGVyOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogI0Y3RDNEQjtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTMuNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sZWZ0LWJ1YmJsZSB7XHJcbiAgICAgIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAvLyAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIC8vIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNGVtO1xyXG4gICAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNGVtO1xyXG4gICAgICAvLyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjRlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgxOTIsIDEwMCUsIDg2JSk7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNGVtO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNGVtO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjRlbTtcclxuICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgIGxlZnQ6IDIlO1xyXG4gICAgICBzcGFuLm1zZy1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgIH1cclxuICAgICAgc3Bhbi5tc2ctZGF0ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxlZnQtYnViYmxlOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBib3JkZXI6IDI3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogaHNsKDE5MiwgMTAwJSwgODYlKTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMy41cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjdweDsgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNoYXQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogNTAwcHg7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLmNoYXQtd2hhdHNhcHAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBjb2xvcjogcmdiKDMzLCAxODQsIDY2KTtcclxuICB9XHJcbiAgLmNoYXQtY2FsbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcclxuICAgIGNvbG9yOiByZ2IoMzMsIDE4NCwgNjYpO1xyXG4gIH1cclxuXHJcbiAgLmNoYXQtc2VuZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcclxuICAgIGNvbG9yOiByZ2IoMzMsIDE4NCwgNjYpO1xyXG4gIH1cclxuXHJcbiAgLndoYXRzYXBwX2NhbGwge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnZvaWNlX2NhbGwge1xyXG4gICAgZm9udC1zaXplOiAxLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNoYXRSb29tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7ICBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAuZm9vdHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgcGFkZGluZzogNnB4IDAgNnB4IDhweDtcclxuICAgIH1cclxuICAgICYtbCB7XHJcbiAgICAgIHdpZHRoOiA5NSU7ICAgICAgXHJcbiAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtciB7XHJcbiAgICAgIHdpZHRoOiA1JTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jaGF0LW1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAucmlnaHQtYnViYmxlLW1lZGlheyBcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNGVtO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNGVtO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjRlbTtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHggMTBweDtcclxuICAgICAgbGVmdDogOTAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5sZWZ0LWJ1YmJsZS1tZWRpYXtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjRlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjRlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC40ZW07XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHg7XHJcbiAgICAgIHJpZ2h0OiA5MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtYnViYmxlLW1lZGlhOmFmdGVye1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLmxlZnQtYnViYmxlLW1lZGlhOmFmdGVye1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2hhdC1tZXNzYWdlLWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgLmxlZnQtYnViYmxlIHtcclxuICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAvLyAuYnViYmxlIHtcclxuICAgICAgICBsZWZ0OjUlO1xyXG4gICAgICBwe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oI2FhYSwyMCUpO1xyXG4gICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxlZnQtYnViYmxlLXByZXNjcmlwdGlvbiB7XHJcbiAgICAgIG1heC13aWR0aDogNzUlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRjdEM0RCO1xyXG4gICAgICByaWdodDo1JTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICBzcGFuLm1zZy1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ubXNnLWRhdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1OWIzO1xyXG4gICAgICB9XHJcbiAgICB9ICAgIFxyXG4gIH1cclxuXHJcbiAgLmNoYXQtbWVzc2FnZS1ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgLy8gaGVpZ2h0OjEwMCU7XHJcbiAgICAucmlnaHQtYnViYmxlIHtcclxuICAgICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAvLyAuYnViYmxlIHtcclxuICAgICAgICByaWdodDo1JTtcclxuICAgICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzQsIDE0NywgMjUzKTtcclxuICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodC1idWJibGUtY29tcGxhaW50IHtcclxuICAgICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGN0QzREI7XHJcbiAgICAgIHJpZ2h0OjUlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgIHNwYW4ubXNnLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgIH1cclxuICAgICAgc3Bhbi5tc2ctZGF0ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgIFxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpICB7ICAgICAgIFxyXG4gICAgLmZvb3R7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgJi1sIHtcclxuICAgICAgICB3aWR0aDogODAlOyAgICAgIFxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi1yIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgLmZvb3R7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgJi1sIHtcclxuICAgICAgICB3aWR0aDogODAlOyAgICAgIFxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi1yIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uaW9uLWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDA2NGI5O1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1jb250ZW50IC5pdGVtLW1kLCBpb24tY29udGVudCAuaXRlbS1pb3Mge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tZm9vdGVyIGlvbi1pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwNjRiOTtcbn1cblxuLmJhci1idXR0b24tbWRbaWNvbi1vbmx5XSBpb24taWNvbiB7XG4gIHBhZGRpbmc6IDAgMC4xZW07XG4gIG1pbi13aWR0aDogMjhweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDAuNjc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFyLWJ1dHRvbi1tZFtpY29uLW9ubHkxXSBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgbWluLXdpZHRoOiAyOHB4O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBsaW5lLWhlaWdodDogMC42NztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5jaGF0LXN0YXR1cyB7XG4gIG1pbi1oZWlnaHQ6IDQ5cHg7XG59XG4uY2hhdC1zdGF0dXMgLmNoYXQtZGF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBoZWlnaHQ6IDE1cHg7XG4gIGxlZnQ6IDEwJTtcbiAgcmlnaHQ6IDEwJTtcbn1cbi5jaGF0LXN0YXR1cyAuY2hhdC1jb250ZW50LWNlbnRlciB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWY3O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NTU7XG4gIGhlaWdodDogMzRweDtcbiAgbGVmdDogMTAlO1xuICByaWdodDogMTAlO1xufVxuXG4uY2hhdC1tZXNzYWdlIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jaGF0LW1lc3NhZ2UgLnJpZ2h0LWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzAwODlkMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC40ZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNGVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC40ZW07XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBsZWZ0OiA2MSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5jaGF0LW1lc3NhZ2UgLnJpZ2h0LWJ1YmJsZSBzcGFuLm1zZy1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmNoYXQtbWVzc2FnZSAucmlnaHQtYnViYmxlIHNwYW4ubXNnLWRhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAgMCAzcHg7XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDg5ZDA7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgbWFyZ2luLXRvcDogLTEzLjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbn1cbi5jaGF0LW1lc3NhZ2UgLnJpZ2h0LWJ1YmJsZS1jb21wbGFpbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNGN0QzREI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNGVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjRlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNGVtO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgbGVmdDogNjElO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUtY29tcGxhaW50IHNwYW4ubXNnLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JlZW47XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUtY29tcGxhaW50IHNwYW4ubXNnLWRhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUtY29tcGxhaW50IHAge1xuICBjb2xvcjogIzIyMjtcbiAgbWFyZ2luOiAzcHggMCA1cHg7XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUtY29tcGxhaW50OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRjdEM0RCO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIG1hcmdpbi10b3A6IC0xMy41cHg7XG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XG59XG4uY2hhdC1tZXNzYWdlIC5sZWZ0LWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZjFmZjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNGVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjRlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNGVtO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgbGVmdDogMiU7XG59XG4uY2hhdC1tZXNzYWdlIC5sZWZ0LWJ1YmJsZSBzcGFuLm1zZy1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsdWU7XG59XG4uY2hhdC1tZXNzYWdlIC5sZWZ0LWJ1YmJsZSBzcGFuLm1zZy1kYXRlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmNoYXQtbWVzc2FnZSAubGVmdC1idWJibGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiAyN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQtY29sb3I6ICNiOGYxZmY7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAtMTMuNXB4O1xuICBtYXJnaW4tbGVmdDogLTI3cHg7XG59XG5cbi5jaGF0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDUwMHB4O1xuICBjb2xvcjogZGFya2JsdWU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNoYXQtd2hhdHNhcHAge1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xuICBjb2xvcjogIzIxYjg0Mjtcbn1cblxuLmNoYXQtY2FsbCB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG4gIGNvbG9yOiAjMjFiODQyO1xufVxuXG4uY2hhdC1zZW5kIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgY29sb3I6ICMyMWI4NDI7XG59XG5cbi53aGF0c2FwcF9jYWxsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0b3A6IDhweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udm9pY2VfY2FsbCB7XG4gIGZvbnQtc2l6ZTogMS45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0b3A6IDhweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hhdFJvb20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvb3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mb290IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiA2cHggMCA2cHggOHB4O1xufVxuLmZvb3QtbCB7XG4gIHdpZHRoOiA5NSU7XG59XG4uZm9vdC1sIGlvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmZvb3QtciB7XG4gIHdpZHRoOiA1JTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNoYXQtbWVzc2FnZSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUtbWVkaWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNGVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjRlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNGVtO1xuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4O1xuICBsZWZ0OiA5MCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNoYXQtbWVzc2FnZSAubGVmdC1idWJibGUtbWVkaWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjRlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC40ZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjRlbTtcbiAgcGFkZGluZzogNXB4IDEwcHggMTBweDtcbiAgcmlnaHQ6IDkwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jaGF0LW1lc3NhZ2UgLnJpZ2h0LWJ1YmJsZS1tZWRpYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jaGF0LW1lc3NhZ2UgLmxlZnQtYnViYmxlLW1lZGlhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2hhdC1tZXNzYWdlLWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jaGF0LW1lc3NhZ2UtbCAubGVmdC1idWJibGUge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbGVmdDogNSU7XG59XG4uY2hhdC1tZXNzYWdlLWwgLmxlZnQtYnViYmxlIHAge1xuICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbjogMCAwIDVweCAwO1xufVxuLmNoYXQtbWVzc2FnZS1sIC5sZWZ0LWJ1YmJsZS1wcmVzY3JpcHRpb24ge1xuICBtYXgtd2lkdGg6IDc1JTtcbiAgYmFja2dyb3VuZDogI0Y3RDNEQjtcbiAgcmlnaHQ6IDUlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4uY2hhdC1tZXNzYWdlLWwgLmxlZnQtYnViYmxlLXByZXNjcmlwdGlvbiBzcGFuLm1zZy1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmNoYXQtbWVzc2FnZS1sIC5sZWZ0LWJ1YmJsZS1wcmVzY3JpcHRpb24gc3Bhbi5tc2ctZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5jaGF0LW1lc3NhZ2UtbCAubGVmdC1idWJibGUtcHJlc2NyaXB0aW9uIHAge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDAgMCA1cHggMDtcbn1cbi5jaGF0LW1lc3NhZ2UtbCAubGVmdC1idWJibGUtcHJlc2NyaXB0aW9uIGJ1dHRvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IDZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDU5YjM7XG59XG5cbi5jaGF0LW1lc3NhZ2UtciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4uY2hhdC1tZXNzYWdlLXIgLnJpZ2h0LWJ1YmJsZSB7XG4gIG1heC13aWR0aDogNzUlO1xuICByaWdodDogNSU7XG59XG4uY2hhdC1tZXNzYWdlLXIgLnJpZ2h0LWJ1YmJsZSBwIHtcbiAgYmFja2dyb3VuZDogIzIyOTNmZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDAgMCA1cHggMDtcbn1cbi5jaGF0LW1lc3NhZ2UtciAucmlnaHQtYnViYmxlLWNvbXBsYWludCB7XG4gIG1heC13aWR0aDogNzUlO1xuICBiYWNrZ3JvdW5kOiAjRjdEM0RCO1xuICByaWdodDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5jaGF0LW1lc3NhZ2UtciAucmlnaHQtYnViYmxlLWNvbXBsYWludCBzcGFuLm1zZy1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmNoYXQtbWVzc2FnZS1yIC5yaWdodC1idWJibGUtY29tcGxhaW50IHNwYW4ubXNnLWRhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uY2hhdC1tZXNzYWdlLXIgLnJpZ2h0LWJ1YmJsZS1jb21wbGFpbnQgcCB7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCAwIDVweCAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9vdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuZm9vdC1sIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC5mb290LWwgaW9uLWlucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAuZm9vdC1yIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuZm9vdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuZm9vdC1sIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC5mb290LWwgaW9uLWlucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAuZm9vdC1yIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chatroom/chatroom.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/chatroom/chatroom.page.ts ***!
    \*******************************************/

  /*! exports provided: ChatroomPage, snapshotToArray */

  /***/
  function srcAppChatroomChatroomPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatroomPage", function () {
      return ChatroomPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "snapshotToArray", function () {
      return snapshotToArray;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _send_chat_complaints_send_chat_complaints_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../send-chat-complaints/send-chat-complaints.page */
    "./src/app/send-chat-complaints/send-chat-complaints.page.ts");
    /* harmony import */


    var _send_triage_doc_complaint_send_triage_doc_complaint_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../send-triage-doc-complaint/send-triage-doc-complaint.page */
    "./src/app/send-triage-doc-complaint/send-triage-doc-complaint.page.ts");
    /* harmony import */


    var _chatAudioRecording_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../chatAudioRecording.service */
    "./src/app/chatAudioRecording.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/config */
    "./src/config.ts");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../services/login-auth.service */
    "./src/app/services/login-auth.service.ts");
    /* harmony import */


    var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../storage/swasth-storage.service */
    "./src/app/storage/swasth-storage.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _razorpay_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../razorpay.service */
    "./src/app/razorpay.service.ts");

    var ChatroomPage = /*#__PURE__*/function () {
      function ChatroomPage(authService, activetedRoute, router, loadingCtrl, toastCtrl, modalCtrl, audioRecordingService, sanitizer, http, actionSheetCtrl, platform, camera, file, filePath, loginAuth, swStorage, razorpayService, dataService, alertCtrl) {
        var _this = this;

        _classCallCheck(this, ChatroomPage);

        this.authService = authService;
        this.activetedRoute = activetedRoute;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.audioRecordingService = audioRecordingService;
        this.sanitizer = sanitizer;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.loginAuth = loginAuth;
        this.swStorage = swStorage;
        this.razorpayService = razorpayService;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.data = {
          type: '',
          nickname: '',
          message: ''
        };
        this.chats = [];
        this.offStatus = false;
        this.isRecording = false;
        this.myRand = this.random();
        this.lastImage = null; //autoRefreshChat = firebase.database().ref('autorefresh/chatupdate');
        // activate chat
        //autoRefreshActivateChat = firebase.database().ref('autorefresh/confirmchat');

        this.pendingPaymentStatus = false;
        this.sendComplaintToTriageStatus = false; //autoRefreshChat = firebase.database().ref('autorefresh/chatupdate');

        this.postcomplaint = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('postpatientcomplaint/');
        this.audioRecordingService.recordingFailed().subscribe(function () {
          _this.isRecording = false;
        });
        this.audioRecordingService.getRecordedTime().subscribe(function (time) {
          _this.recordedTime = time;
        });
        this.audioRecordingService.getRecordedBlob().subscribe(function (data) {
          _this.blobUrl = _this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
          _this.blobData = data.blob;
          console.log("Data", data.blob); // this.storeAudio(data.blob);
        });
      }

      _createClass(ChatroomPage, [{
        key: "random",
        value: function random() {
          var rand = Math.floor(Math.random() * 20000000) + 1;
          return rand;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (this.activetedRoute.snapshot.data['ctData']) {
            var data = this.activetedRoute.snapshot.data['ctData'];
            console.log("Chat Data==>", data);
            this.roomkey = data.roomKey;
            this.nickname = data.name;
            this.roomName = data.roomName;
            this.docDetail = data.docDetail;
            this.ptDetail = data.ptDetail;
            this.circleCode = data.circleCode;
            this.circleDetail = data.circleDetail;
            this.role = data.role;
            this.status = data.status;
            this.videocalllink = data.videocalllink;
            this.triageChatDetail = data.triageChat;
            this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(function (data) {
              _this2.loginUserDetail = data;
              console.log("Login User Details===>", _this2.loginUserDetail);
            });
          }

          console.log("Room Name=>", this.circleDetail, this.docDetail, this.role, this.status, this.circleCode);
          this.data.type = 'message';
          this.data.nickname = this.nickname;
          this.data.message = '';

          if (this.ptDetail.accountType == null) {
            var chatObj = {
              userID: this.ptDetail.createdByUserID,
              circleCode: this.circleCode
            };
            var chatFamilyObj = {
              userID: this.ptDetail.userID,
              circleCode: this.circleCode
            };
            this.authService.getChatRestrictDetail(chatFamilyObj).subscribe(function (data) {
              _this2.familyRestrictDetails = data;
            });
            this.authService.getChatRestrictDetail(chatObj).subscribe(function (data) {
              console.log("data", data);
              var chatDetail = data;
              _this2.chatRestrictDetail = data;

              if (_this2.ptDetail.accountType == null) {
                _this2.chatCount = 15 - chatDetail.chatCount; //alert(this.chatCount);
              } else {
                _this2.chatCount = 5 - chatDetail.chatCount; //alert(this.chatCount);
              }

              var billObj = {
                patientUserID: _this2.ptDetail.userID,
                docUserID: _this2.docDetail.docUserID,
                circleCode: _this2.circleCode
              };
              console.log("bill obj payment", billObj);

              _this2.authService.getConsultFeeDetailSingleCircle(billObj).subscribe(function (data) {
                console.log("data", data);
                var billData = data;

                if (billData != null && billData.length >= 1) {
                  _this2.feeDetail = data;
                  _this2.pendingBillDetail = _this2.feeDetail.filter(function (data) {
                    return data.paymentStatus == "Pending";
                  });
                  console.log("fee status======>", _this2.pendingBillDetail);
                  _this2.paymentStatus = _this2.feeDetail.paymentStatus;

                  if (_this2.pendingBillDetail.length >= 1) {
                    console.log("pending payment");
                    _this2.pendingPaymentStatus = true;

                    _this2.consultPayment();
                  }

                  if (_this2.role != "Admin" && _this2.triageChatDetail != undefined && !_this2.pendingPaymentStatus) {
                    if (_this2.triageChatDetail.complaintStatus == "Yes") {
                      _this2.sendComplaintToTriageStatus = true;

                      _this2.sendComplaintToTriageDoc();
                    }
                  } //  else if( ){
                  //   console.log("paid payment");
                  //   this.complaintCheck();
                  // }

                }

                console.log("no payment", _this2.status, _this2.chatRestrictDetail, _this2.triageChatDetail);

                if (_this2.role != "Admin" && _this2.triageChatDetail != undefined) {
                  if (_this2.triageChatDetail.complaintStatus == "Yes") {
                    _this2.sendComplaintToTriageStatus = true;

                    _this2.sendComplaintToTriageDoc();
                  }
                }

                if (_this2.chatRestrictDetail.chatRequestCount < 15) {
                  if (_this2.role == "Admin" && _this2.status == "Deactive" && _this2.familyRestrictDetails.status == "Deactive") {
                    _this2.getComplaints();
                  } else if (_this2.role == "Admin" && _this2.status == "Deactive" && _this2.familyRestrictDetails.status == "Active") {
                    _this2.complaintCheck();
                  }
                } else {
                  alert("You have reached your maximum free chat for this month");
                }
              });
            });
            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('chatrooms/' + this.roomkey + '/chats').on('value', function (resp) {
              _this2.chats = [];
              _this2.chats = snapshotToArray(resp);
              console.log("chats", _this2.chats);
              setTimeout(function () {
                if (_this2.offStatus === false) {
                  _this2.content.scrollToBottom(300);
                }
              }, 1000);
            }); // this.autoRefreshActivateChat.on('value', resp => {
            //   console.log("auto refresh activate chat---->", resp.val());
            //   let res = resp.val();
            //   if (res.trigger) {
            //     this.autoRefreshApicall();
            //     // Auto Refresh Call while patient post complaint
            //     let pushData = this.autoRefreshActivateChat.set({
            //       trigger: false
            //     });
            //     // this.autoRefreshChat.child("trigger").update(false);
            //   }
            // });
            // this.autoRefreshChat.on('value', resp => {
            //   console.log("auto triage values---->", resp.val());
            //   let res = resp.val();
            //   if (res.trigger) {
            //     this.autoRefreshApicall();
            //     // Auto Refresh Call while patient post complaint
            //     let pushData = this.autoRefreshChat.set({
            //       trigger: false
            //     });
            //     // this.autoRefreshChat.child("trigger").update(false);
            //   }
            // });
          } else {
            var _chatObj = {
              userID: this.ptDetail.userID,
              circleCode: this.circleCode
            };
            this.authService.getChatRestrictDetail(_chatObj).subscribe(function (data) {
              console.log("data", data);
              var chatDetail = data;
              _this2.chatRestrictDetail = data;

              if (_this2.ptDetail.accountType == 'Family') {
                _this2.chatCount = 15 - chatDetail.chatCount;
                _this2.chatRequestCount = 15 - chatDetail.chatRequestCount; //alert(this.chatCount);
              } else {
                _this2.chatCount = 5 - chatDetail.chatCount;
                _this2.chatRequestCount = 5 - chatDetail.chatRequestCount; //alert(this.chatCount);
              }

              var billObj = {
                patientUserID: _this2.ptDetail.userID,
                docUserID: _this2.docDetail.docUserID,
                circleCode: _this2.circleCode
              };

              _this2.authService.getConsultFeeDetailSingleCircle(billObj).subscribe(function (data) {
                console.log("data", data);
                var billData = data;

                if (billData != null && billData.length >= 1) {
                  _this2.feeDetail = data;
                  _this2.pendingBillDetail = _this2.feeDetail.filter(function (data) {
                    return data.paymentStatus == "Pending";
                  });
                  console.log("fee status======>", _this2.pendingBillDetail);
                  _this2.paymentStatus = _this2.feeDetail.paymentStatus;

                  if (_this2.pendingBillDetail.length >= 1) {
                    console.log("pending payment");
                    _this2.pendingPaymentStatus = true;

                    _this2.consultPayment();
                  } // this.paymentStatus = this.feeDetail.paymentStatus;
                  // if (this.feeDetail.paymentStatus == "Pending") {
                  //   console.log("pending payment");
                  //   this.pendingPaymentStatus = true;
                  //   this.consultPayment();
                  // }
                  //  else if( ){
                  //   console.log("paid payment");
                  //   this.complaintCheck();
                  // }

                }

                console.log("no payment", _this2.status, _this2.chatRestrictDetail, _this2.triageChatDetail);

                if (_this2.role != "Admin" && _this2.triageChatDetail != undefined) {
                  if (_this2.triageChatDetail.complaintStatus == "Yes") {
                    _this2.sendComplaintToTriageDoc();
                  }
                }

                if (_this2.chatRequestCount >= 1) {
                  if (_this2.role == "Admin" && _this2.status == "Deactive" && _this2.chatRestrictDetail.status == "Deactive") {
                    _this2.getComplaints();
                  } else if (_this2.role == "Admin" && _this2.status == "Deactive" && _this2.chatRestrictDetail.status == "Active") {
                    _this2.complaintCheck();
                  }
                } else {
                  alert("You have reached your maximum free chat for this month");
                }
              });
            });
            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('chatrooms/' + this.roomkey + '/chats').on('value', function (resp) {
              _this2.chats = [];
              _this2.chats = snapshotToArray(resp);
              console.log("chats", _this2.chats);
              setTimeout(function () {
                if (_this2.offStatus === false) {
                  _this2.content.scrollToBottom(300);
                }
              }, 1000);
            }); // this.autoRefreshActivateChat.on('value', resp => {
            //   console.log("auto triage values---->", resp.val());
            //   let res = resp.val();
            //   if (res.trigger) {
            //     this.autoRefreshApicall();
            //     // Auto Refresh Call while patient post complaint
            //     let pushData = this.autoRefreshActivateChat.set({
            //       trigger: false
            //     });
            //     // this.autoRefreshChat.child("trigger").update(false);
            //   }
            // });
            // this.autoRefreshChat.on('value', resp => {
            //   console.log("auto triage values---->", resp.val());
            //   let res = resp.val();
            //   if (res.trigger) {
            //     this.autoRefreshApicall();
            //     // Auto Refresh Call while patient post complaint
            //     let pushData = this.autoRefreshChat.set({
            //       trigger: false
            //     });
            //     // this.autoRefreshChat.child("trigger").update(false);
            //   }
            // });
          }
        }
      }, {
        key: "autoRefreshApicall",
        value: function autoRefreshApicall() {
          var _this3 = this;

          if (this.role == "Admin") {
            this.authService.getPatientChatByPatientUserid(this.ptDetail.userID, this.circleCode).subscribe(function (data) {
              _this3.ptChatDetail = data;
              console.log("ptchat detail", _this3.ptChatDetail);
              _this3.status = _this3.ptChatDetail.status;
            });
          } else {
            this.authService.getPtTriageDocChatDetail(this.ptDetail.userID, this.docDetail.docUserID, this.circleCode).subscribe(function (data) {
              _this3.ptChatDetail = data;
              console.log("ptchat detail", _this3.ptChatDetail);
              _this3.status = _this3.ptChatDetail.status;
            });
          }

          if (this.ptChatDetail != undefined) {
            var chatObj = {
              userID: this.ptDetail.userID,
              circleCode: this.circleCode
            };
            this.authService.getChatRestrictDetail(chatObj).subscribe(function (data) {
              console.log("data", data);
              var chatDetail = data;
              _this3.chatRestrictDetail = data;
              _this3.chatCount = 5 - chatDetail.chatCount;
              var billObj = {
                patientUserID: _this3.ptDetail.userID,
                docUserID: _this3.docDetail.docUserID,
                circleCode: _this3.circleCode
              };

              _this3.authService.getConsultFeeDetailSingleCircle(billObj).subscribe(function (data) {
                console.log("data", data);

                if (data != null) {
                  _this3.feeDetail = data;
                  _this3.paymentStatus = _this3.feeDetail.paymentStatus;

                  if (_this3.feeDetail.paymentStatus == "Pending") {
                    console.log("pending payment");

                    _this3.consultPayment();
                  }
                } else {
                  console.log("no payment", _this3.status, _this3.chatRestrictDetail);

                  if (_this3.chatCount >= 1) {
                    if (_this3.role == "Admin" && _this3.status == "Deactive" && _this3.chatRestrictDetail.status == "Deactive") {
                      _this3.getComplaints();
                    } else if (_this3.role == "Admin" && _this3.status == "Deactive" && _this3.chatRestrictDetail.status == "Active") {
                      _this3.complaintCheck();
                    }
                  } else {
                    alert("You have reached your maximum free chat for this month");
                  }
                }
              });
            });
          }
        } // send complaint to triage doctor

      }, {
        key: "sendComplaintToTriageDoc",
        value: function sendComplaintToTriageDoc() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var adminDoc, chatformatobj;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    adminDoc = this.circleDetail.cdProfileRole.filter(function (data) {
                      return data.role == "Admin";
                    });
                    console.log("join admin", adminDoc);
                    chatformatobj = {
                      userId: this.ptDetail.userID,
                      docUserId: adminDoc[0].docProfile.docUserID,
                      circleCode: this.circleCode
                    };
                    console.log("data", chatformatobj);
                    this.authService.getChatFormatDetailPt(chatformatobj).subscribe(function (data) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var ptChatFormat, modal;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                ptChatFormat = data;
                                console.log("chat format", ptChatFormat);

                                if (!(ptChatFormat != null)) {
                                  _context.next = 8;
                                  break;
                                }

                                _context.next = 5;
                                return this.modalCtrl.create({
                                  component: _send_triage_doc_complaint_send_triage_doc_complaint_page__WEBPACK_IMPORTED_MODULE_7__["SendTriageDocComplaintPage"],
                                  componentProps: {
                                    circleName: this.circleDetail.vhEntity.circleName,
                                    docDetail: this.docDetail,
                                    docName: this.roomName,
                                    circleCode: this.circleCode,
                                    ptDetail: this.ptDetail,
                                    ptChatFormatDetail: ptChatFormat[0],
                                    triageChatDetail: this.triageChatDetail,
                                    adminDocDetail: adminDoc
                                  }
                                });

                              case 5:
                                modal = _context.sent;
                                _context.next = 8;
                                return modal.present();

                              case 8:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // get health complaints from patient modal box

      }, {
        key: "getComplaints",
        value: function getComplaints() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _send_chat_complaints_send_chat_complaints_page__WEBPACK_IMPORTED_MODULE_6__["SendChatComplaintsPage"],
                      componentProps: {
                        circleName: this.circleDetail.vhEntity.circleName,
                        docDetail: this.docDetail,
                        docName: this.roomName,
                        circleCode: this.circleCode,
                        ptDetail: this.ptDetail,
                        chatCount: this.chatCount
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    modal.onDidDismiss().then(function (data) {
                      _this5.sendComplaint = data;
                      var newData = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('chatrooms/' + _this5.roomkey + '/chats').push();
                      newData.set({
                        type: "complaint",
                        user: _this5.data.nickname,
                        message: _this5.complaintMessage(),
                        sendDate: Date(),
                        userID: _this5.loginUserDetail.userID,
                        viewStatus: 'No'
                      });
                      var chatcomplaintobj = {
                        subscriptionId: _this5.chatRestrictDetail.subscriptionId,
                        userId: _this5.ptDetail.userID,
                        docUserId: _this5.docDetail.docUserID,
                        circleCode: _this5.circleCode,
                        chatKey: _this5.roomkey,
                        createdDateTime: new Date(),
                        complaint: _this5.sendComplaint.data.complaint,
                        howLong: _this5.sendComplaint.data.howlong,
                        preExistingIllness: _this5.sendComplaint.data.preillness
                      };
                      console.log("chatresctrict", chatcomplaintobj); // update while patient post complaint
                      // let postPtComplaint = this.postcomplaint.push();
                      // newData.set({
                      //   complaintstatus: true
                      // });
                      // console.log("complaint post==>",postPtComplaint.key);

                      _this5.authService.addChatComplaint(chatcomplaintobj).subscribe(function (data) {
                        console.log("data", data);
                      });

                      _this5.data.message = '';

                      if (_this5.ptDetail.accountType != null) {
                        // update chat request count for primary patient
                        _this5.authService.updateChatRequestCount(_this5.ptDetail.userID, _this5.circleCode, "Yes").subscribe(function (data) {
                          console.log(data);
                        });
                      } else {
                        // update chat request count for primary patient for family member
                        _this5.authService.updateChatRequestCount(_this5.ptDetail.createdByUserID, _this5.circleCode, "Yes").subscribe(function (data) {
                          console.log(data);
                        });

                        _this5.authService.updateChatRequestCount(_this5.ptDetail.userID, _this5.circleCode, "Yes").subscribe(function (data) {
                          console.log(data);
                        });
                      }
                    });

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "complaintCheck",
        value: function complaintCheck() {
          alert("Please wait till doctor accept your chat");
        } // send message to doctor

      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var newData = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
          newData.set({
            type: this.data.type,
            user: this.data.nickname,
            message: this.data.message,
            sendDate: Date(),
            userID: this.loginUserDetail.userID,
            viewStatus: 'No'
          });
          this.data.message = '';
        } // view prescription from chat

      }, {
        key: "openEPrescription",
        value: function openEPrescription(chat) {
          var _this6 = this;

          console.log("prescription", this.docDetail);
          this.authService.uniquePrescription(chat.prescID).subscribe(function (data) {
            console.log(data);
            _this6.uniquePresc = data;
            var presc = {
              docdetail: _this6.docDetail,
              dxid: _this6.uniquePresc
            };

            _this6.dataService.setData(24, presc);

            _this6.router.navigateByUrl('pt-eprescription/24');
          });
        } //Add  health complaints to family doc chat

      }, {
        key: "complaintMessage",
        value: function complaintMessage() {
          var chatComplaint = "";

          if (this.sendComplaint.data.howlong != "" && this.sendComplaint.data.preillness != "") {
            chatComplaint = "General Health Complaint :" + "\n" + this.sendComplaint.data.complaint + '\n\n' + "How long have you been experiencing said complaint ?" + '\n' + this.sendComplaint.data.howlong + '\n\n' + "Pre-existing illness,Current medication, Drug allergy :" + '\n' + this.sendComplaint.data.preillness;
          } else if (this.sendComplaint.data.howlong != "" && this.sendComplaint.data.preillness == "") {
            chatComplaint = "General Health Complaint :" + "\n" + this.sendComplaint.data.complaint + '\n\n' + "How long have you been experiencing said complaint ?" + '\n' + this.sendComplaint.data.howlong;
          } else if (this.sendComplaint.data.howlong == "" && this.sendComplaint.data.preillness != "") {
            chatComplaint = "General Health Complaint :" + "\n" + this.sendComplaint.data.complaint + '\n\n' + "Pre-existing illness,Current medication, Drug allergy :" + '\n' + this.sendComplaint.data.preillness;
          } else if (this.sendComplaint.data.howlong == "" && this.sendComplaint.data.preillness == "") {
            chatComplaint = "General Health Complaint :" + "\n" + this.sendComplaint.data.complaint;
          }

          console.log("complaint", chatComplaint);
          return chatComplaint;
        } // for recording audio

      }, {
        key: "startRecording",
        value: function startRecording() {
          if (!this.isRecording) {
            this.isRecording = true;
            this.audioRecordingService.startRecording();
          }
        }
      }, {
        key: "stopRecording",
        value: function stopRecording() {
          // add s3 link
          if (this.isRecording) {
            this.audioRecordingService.stopRecording();
            this.isRecording = false;
          }

          this.presentToast('Verify to send');
        }
      }, {
        key: "abortRecording",
        value: function abortRecording() {
          if (this.isRecording) {
            this.isRecording = false;
            this.audioRecordingService.abortRecording();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.abortRecording();
        }
      }, {
        key: "clearRecordedData",
        value: function clearRecordedData() {
          this.blobUrl = null;
        }
      }, {
        key: "storeAudio",
        value: function storeAudio() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this7 = this;

            var loading, body;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Uploading...'
                    });

                  case 2:
                    loading = _context5.sent;
                    _context5.next = 5;
                    return loading.present();

                  case 5:
                    body = new FormData();
                    this.keyname = "ChatTestRecordFile" + this.myRand + ".wav"; // Add file content to prepare the request    

                    body.append('uploadfile', this.blobData);
                    body.append('keyname', this.keyname); // Launch post request

                    this.http.post(src_config__WEBPACK_IMPORTED_MODULE_11__["UPLOAD_URL"] + '/api/file/lockdownupload', body).subscribe( // Admire results
                    function (data) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                console.log(data);
                                _context4.next = 3;
                                return loading.dismiss();

                              case 3:
                                //this.blobdata=null; 
                                this.clearRecordedData();

                              case 4:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    }, function () {
                      _this7.clearRecordedData();

                      var newData = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('chatrooms/' + _this7.roomkey + '/chats').push();
                      newData.set({
                        type: "audio",
                        user: _this7.data.nickname,
                        message: "https://swasthprescription.s3-ap-southeast-1.amazonaws.com/" + _this7.keyname,
                        sendDate: Date(),
                        userID: _this7.loginUserDetail.userID,
                        viewStatus: 'No'
                      });
                      console.log("Ouput", _this7.data.type, _this7.blobData);
                      _this7.data.message = '';

                      _this7.presentToast('Voice note sent');

                      console.log("completed");
                    });

                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this8 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    actionSheet = this.actionSheetCtrl.create({
                      buttons: [{
                        text: 'Load from Library',
                        handler: function handler() {
                          _this8.takePicture(_this8.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Use Camera',
                        handler: function handler() {
                          _this8.takePicture(_this8.camera.PictureSourceType.CAMERA);
                        }
                      }]
                    });
                    _context6.next = 3;
                    return actionSheet;

                  case 3:
                    _context6.sent.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "takePicture",
        value: function takePicture(sourceType) {
          var _this9 = this;

          // Create options for the Camera Dialog
          var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
          }; // Get the data of an image

          this.camera.getPicture(options).then(function (imagePath) {
            _this9.imgPath = imagePath; // Special handling for Android library

            if (_this9.platform.is('android') && sourceType === _this9.camera.PictureSourceType.PHOTOLIBRARY) {
              _this9.filePath.resolveNativePath(imagePath).then(function (filePath) {
                var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));

                _this9.copyFileToLocalDir(correctPath, currentName, _this9.createFileName());
              });

              _this9.uploadImage(_this9.imgPath);
            } else {
              var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
              var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);

              _this9.copyFileToLocalDir(correctPath, currentName, _this9.createFileName());

              _this9.uploadImage(_this9.imgPath);
            }
          }, function (err) {
            _this9.presentToast('Error while selecting image.');
          });
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(img) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this10 = this;

            var loading, body;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Uploading...'
                    });

                  case 2:
                    loading = _context10.sent;
                    _context10.next = 5;
                    return loading.present();

                  case 5:
                    this.keyname = "ChatImage" + this.myRand + '.jpg';
                    body = new FormData(); // Add file content to prepare the request

                    body.append('uploadfile', img);
                    body.append('keyname', this.keyname); // Launch post request

                    this.http.post(src_config__WEBPACK_IMPORTED_MODULE_11__["UPLOAD_URL"] + '/api/file/lockdownupload', body).subscribe( // Admire results
                    function (data) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                console.log(data);
                                _context7.next = 3;
                                return loading.dismiss();

                              case 3:
                                this.presentToast('Image succesful uploaded.');

                              case 4:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    }, // Or errors :-(
                    function (error) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                console.log(error);
                                _context8.next = 3;
                                return loading.dismiss();

                              case 3:
                                this.presentToast('Error while uploading file.');

                              case 4:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    }, // tell us if it's finished
                    function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                console.log("completed");
                                _context9.next = 3;
                                return loading.dismiss();

                              case 3:
                                this.presentToast('Image succesful uploaded.');

                              case 4:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this);
                      }));
                    }); // Destination URL
                    // console.log("Upload strated");
                    // var url = "http://yoururl/upload.php";
                    // // File for Upload
                    // var targetPath = this.pathForImage(this.lastImage);
                    // // File name only
                    // var filename = this.lastImage;
                    // var options = {
                    //   fileKey: "file",
                    //   fileName: filename,
                    //   chunkedMode: false,
                    //   mimeType: "multipart/form-data",
                    //   params : {'fileName': filename}
                    // };
                    // const fileTransfer: TransferObject = this.transfer.create();
                    // this.loading = this.loadingCtrl.create({
                    //   content: 'Uploading...',
                    // });
                    // this.loading.present(); 
                    // // Use the FileTransfer to upload the image
                    // fileTransfer.upload(targetPath, url, options).then(data => {
                    //   this.loading.dismissAll()
                    //   this.presentToast('Image succesful uploaded.');
                    // }, err => {
                    //   this.loading.dismissAll()
                    //   this.presentToast('Error while uploading file.');
                    // });

                  case 10:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        } // Copy the image to a local folder

      }, {
        key: "copyFileToLocalDir",
        value: function copyFileToLocalDir(namePath, currentName, newFileName) {
          var _this11 = this;

          this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this11.lastImage = newFileName;
          }, function (error) {
            _this11.presentToast('Error while storing file.');
          });
        }
      }, {
        key: "createFileName",
        value: function createFileName() {
          var d = new Date(),
              n = d.getTime(),
              newFileName = n + ".jpg";
          return newFileName;
        } // exit chat room 

      }, {
        key: "exitChat",
        value: function exitChat() {
          var exitData = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
          exitData.set({
            type: 'exit',
            user: this.nickname,
            message: this.nickname + ' has exited this room.',
            sendDate: Date()
          });
          this.offStatus = true;
        } // alert for empty message send

      }, {
        key: "empty",
        value: function empty() {
          this.presentToast("Empty message");
        }
      }, {
        key: "presentToast",
        value: function presentToast(text) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var toast;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    toast = this.toastCtrl.create({
                      message: text,
                      duration: 3000,
                      position: 'top'
                    });
                    _context11.next = 3;
                    return toast;

                  case 3:
                    _context11.sent.present();

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "consultPayment",
        value: function consultPayment() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this12 = this;

            var payDocDetail, alert;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    payDocDetail = this.circleDetail.cdProfileRole.filter(function (data) {
                      return data.docProfile.docUserID == _this12.pendingBillDetail[0].docUserID;
                    });
                    alert = this.alertCtrl.create({
                      header: 'Payment',
                      message: '<strong>Doctor: </strong>' + payDocDetail[0].docProfile.docFirstName + ' ' + payDocDetail[0].docProfile.docLastName + '<br>' + '<strong>Fee: ₹</strong>' + this.pendingBillDetail[0].transAmount + '<br><br>' + 'Pay your consultation fee to the doctor for further accessing of all swasth features',
                      buttons: [{
                        text: 'Pay',
                        handler: function handler() {
                          console.log('yes');

                          _this12.feePayment();
                        }
                      }, {
                        text: 'Cancel',
                        handler: function handler() {
                          console.log("cancel");
                        }
                      }]
                    });
                    _context12.next = 4;
                    return alert;

                  case 4:
                    _context12.sent.present();

                  case 5:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        } // payment for consultation fee

      }, {
        key: "feePayment",
        value: function feePayment() {
          var options = {
            description: 'Credits towards consultation',
            // image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_SeRkqskw09t911',
            amount: this.pendingBillDetail[0].transAmount * 100,
            name: this.ptDetail.ptFirstName + " " + this.ptDetail.ptLastName,
            'handler': this.paymentCapture.bind(this),
            prefill: {
              email: this.ptDetail.ptEmailID,
              contact: this.ptDetail.ptMobileNo,
              name: this.ptDetail.ptFirstName + " " + this.ptDetail.ptLastName,
              patient_uid: this.ptDetail.userID,
              doctor_uid: this.pendingBillDetail[0].docUserID
            },
            theme: {
              color: '#F37254'
            },
            modal: {
              ondismiss: function ondismiss() {//alert('dismissed')
              }
            }
          };

          var successCallback = function successCallback(payment_id) {
            alert('payment_id: ' + payment_id); // this.navCtrl.push("ThankyouPage",{
            //         status: this.status
            //     });
          };

          var cancelCallback = function cancelCallback(error) {
            alert(error.description + ' (Error ' + error.code + ')');
          };

          Razorpay.open(options, successCallback, cancelCallback);
        }
      }, {
        key: "paymentCapture",
        value: function paymentCapture(response) {
          var _this13 = this;

          this.paymentId = response.razorpay_payment_id; //alert(this.paymentId);

          console.log("payment id " + this.paymentId, this.feeDetail);

          if (this.paymentId) {
            this.paymentTransaction = {
              transactionID: this.pendingBillDetail[0].transactionID,
              paymentID: this.paymentId,
              paymentStatus: "Paid",
              transactionDateTime: new Date(),
              transAmount: this.pendingBillDetail[0].transAmount,
              circleCode: this.pendingBillDetail[0].circleCode,
              circleAdminUserID: this.pendingBillDetail[0].circleAdminUserID,
              docUserID: this.pendingBillDetail[0].docUserID,
              patientUserID: this.pendingBillDetail[0].patientUserID,
              createdByUserID: this.pendingBillDetail[0].createdByUserID,
              createdDateTime: this.pendingBillDetail[0].createdDateTime,
              ptDxId: this.pendingBillDetail[0].ptDxId
            };
            console.log("if condition", this.paymentTransaction);
            this.authService.updateConsultFee(this.paymentTransaction).subscribe(function (data) {
              console.log("Payment Details", data);
              _this13.paymentDetail = data;
              alert("payment success");
            });
          } else {
            this.paymentTransaction = {
              transactionID: this.pendingBillDetail[0].transactionId,
              paymentID: this.paymentId,
              paymentStatus: "Pending",
              transactionDateTime: new Date(),
              transAmount: this.pendingBillDetail[0].transAmount,
              circleCode: this.pendingBillDetail[0].circleCode,
              circleAdminUserID: this.pendingBillDetail[0].circleAdminUserID,
              docUserID: this.pendingBillDetail[0].docUserID,
              patientUserID: this.pendingBillDetail[0].patientUserID,
              createdByUserID: this.pendingBillDetail[0].createdByUserID,
              createdDateTime: this.pendingBillDetail[0].createdDateTime,
              ptDxId: this.pendingBillDetail[0].ptDxId
            };
            this.authService.updateConsultFee(this.paymentTransaction).subscribe(function (data) {
              console.log("Payment Details", data);
            });
            alert("payment failed");
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginAuth.logout();
        }
      }, {
        key: "openVideoCall",
        value: function openVideoCall() {
          var video = {
            videocalllink: this.videocalllink
          };
          this.dataService.setData(10, video);
          this.router.navigateByUrl('/videocall/10');
        }
      }]);

      return ChatroomPage;
    }();

    ChatroomPage.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _chatAudioRecording_service__WEBPACK_IMPORTED_MODULE_8__["ChatAudioRecordingService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"]
      }, {
        type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_15__["LoginAuthService"]
      }, {
        type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_16__["SwasthStorageService"]
      }, {
        type: _razorpay_service__WEBPACK_IMPORTED_MODULE_18__["RazorpayService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], ChatroomPage.prototype, "content", void 0);
    ChatroomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chatroom',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chatroom.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chatroom/chatroom.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chatroom.page.scss */
      "./src/app/chatroom/chatroom.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _chatAudioRecording_service__WEBPACK_IMPORTED_MODULE_8__["ChatAudioRecordingService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"], _services_login_auth_service__WEBPACK_IMPORTED_MODULE_15__["LoginAuthService"], _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_16__["SwasthStorageService"], _razorpay_service__WEBPACK_IMPORTED_MODULE_18__["RazorpayService"], _services_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], ChatroomPage);

    var snapshotToArray = function snapshotToArray(snapshot) {
      var returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      return returnArr;
    };
    /***/

  },

  /***/
  "./src/app/send-chat-complaints/send-chat-complaints.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/send-chat-complaints/send-chat-complaints.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSendChatComplaintsSendChatComplaintsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".close-button {\n  position: absolute;\n  font-size: 20px;\n  right: 10px;\n  color: #f53d3d;\n  z-index: 1;\n}\n\n.header {\n  color: #919191;\n  text-align: center;\n}\n\n.send {\n  text-align: center;\n}\n\n.send ion-button {\n  --background: #00b395;\n  --border-radius: 10px;\n  margin-top: 50px;\n  width: 100px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC1jaGF0LWNvbXBsYWludHMvRjpcXHN3YXN0aFxcc3dhc3RodmlydHVhbHBhdGllbnQvc3JjXFxhcHBcXHNlbmQtY2hhdC1jb21wbGFpbnRzXFxzZW5kLWNoYXQtY29tcGxhaW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbmQtY2hhdC1jb21wbGFpbnRzL3NlbmQtY2hhdC1jb21wbGFpbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRERJO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL3NlbmQtY2hhdC1jb21wbGFpbnRzL3NlbmQtY2hhdC1jb21wbGFpbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZS1idXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGNvbG9yOiAjZjUzZDNkO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjOTE5MTkxOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlbmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiMzk1O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufVxyXG4iLCIuY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjb2xvcjogI2Y1M2QzZDtcbiAgei1pbmRleDogMTtcbn1cblxuLmhlYWRlciB7XG4gIGNvbG9yOiAjOTE5MTkxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlbmQgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzAwYjM5NTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/send-chat-complaints/send-chat-complaints.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/send-chat-complaints/send-chat-complaints.page.ts ***!
    \*******************************************************************/

  /*! exports provided: SendChatComplaintsPage */

  /***/
  function srcAppSendChatComplaintsSendChatComplaintsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendChatComplaintsPage", function () {
      return SendChatComplaintsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    var SendChatComplaintsPage = /*#__PURE__*/function () {
      function SendChatComplaintsPage(modalCtrl, authService) {
        _classCallCheck(this, SendChatComplaintsPage);

        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.complaint = "";
        this.howLong = "";
        this.preIllness = "";
      }

      _createClass(SendChatComplaintsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.docSpec = this.docDetail.docSpecialization;
          console.log("send chat complaint", this.chatCount, this.docDetail);
        }
      }, {
        key: "ptHealthComplaint",
        value: function ptHealthComplaint(ev, field) {
          console.log("complaint", ev);

          if (field == "complaint") {
            this.complaint = ev.target.value;
          } else if (field == "howlong") {
            this.howLong = ev.target.value;
          } else if (field == "preill") {
            this.preIllness = ev.target.value;
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var complaintObj = {
            complaint: this.complaint,
            howlong: this.howLong,
            preillness: this.preIllness
          };
          this.modalCtrl.dismiss(complaintObj);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCtrl.dismiss();
        }
      }]);

      return SendChatComplaintsPage;
    }();

    SendChatComplaintsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SendChatComplaintsPage.prototype, "circleName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SendChatComplaintsPage.prototype, "docDetail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SendChatComplaintsPage.prototype, "docName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SendChatComplaintsPage.prototype, "circleCode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SendChatComplaintsPage.prototype, "ptDetail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SendChatComplaintsPage.prototype, "chatCount", void 0);
    SendChatComplaintsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-send-chat-complaints',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./send-chat-complaints.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/send-chat-complaints/send-chat-complaints.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./send-chat-complaints.page.scss */
      "./src/app/send-chat-complaints/send-chat-complaints.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], SendChatComplaintsPage);
    /***/
  }
}]);
//# sourceMappingURL=chatroom-chatroom-module-es5.js.map