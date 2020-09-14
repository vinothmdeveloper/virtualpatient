(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~share-circle-share-circle-module~subscribed-doctor-circle-subscribed-doctor-circle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/share-circle/share-circle.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share-circle/share-circle.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  \r\n  <div class=\"mblk create-bg\">\r\n    <ion-icon name=\"close-circle-sharp\" class=\"close\" (click)=\"close()\"></ion-icon>\r\n    <h3>Share Circle To Patient</h3>\r\n    <div class=\"mblk-row\">\r\n      <div class=\"c-form__field\" style=\"padding-right: 0; font-size: 16px;text-align: center;\">\r\n        <label class=\"c-form__label\" for=\"circleName\">{{sendTxt}}</label>\r\n        <div class=\"copy\">\r\n          <ion-icon name=\"copy\" title=\"Copy circle Code and Password\" (click)=\"copyCodePass()\" ></ion-icon>\r\n        </div>        \r\n      </div>\r\n      <div class=\"c-form__field\" style=\"padding-right: 0;\">\r\n        <label class=\"c-form__label\" for=\"circleName\">Enter the Doctor mobile number to share cirlce name via WhatsApp</label>\r\n        <select class=\"c-form__input\" style=\"margin-top: 10px;\"  name=\"countryCode\" [(ngModel)]=\"countryCode\" (change)=\"countryCodeChange()\">\r\n          <option>--select country code--</option>\r\n          <option *ngFor=\"let c of countryCodeList\" [value]=\"c.countryCode\">{{c.countryCode}} ({{c.countryName}})</option>\r\n        </select> \r\n        <input type=\"text\" class=\"c-form__input\" style=\"margin-top: 10px;\" name=\"docNumber\" [(ngModel)]=\"docNumber\" (change)=\"mobileNoChange($event)\" (keypress)=\"codeShareLink($event)\" (keyup)=\"numberOnly($event)\" placeholder=\"Enter the mobile number\">      \r\n        <span *ngIf=\"mobileNumber.invalid\" class=\"errorclass\">{{mobileNumber.msg}}</span>\r\n      </div>\r\n      <div class=\"mblk-row\">\r\n        <a href=\"{{whatsappLink}}\" *ngIf=\"sendStatus && countryCodeStatus\"class=\"btn btn-full\" target=\"blank\" title=\"code share via whatsapp\">Send To WhatsApp <ion-icon name=\"logo-whatsapp\"></ion-icon></a>\r\n        <button type=\"button\" class=\"btn btn-full\" style=\"background-color: #c2c2c2;color: #666666;\" title=\"code share via whatsapp\" *ngIf=\"!sendStatus\"> Send To WhatsApp <ion-icon name=\"logo-whatsapp\"></ion-icon></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/share-circle/share-circle.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/share-circle/share-circle.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mblk {\n  width: 100%;\n  padding: 15px;\n  height: auto;\n}\n.mblk-row {\n  width: 100%;\n  margin-top: 20px;\n}\n.mblk-row .copy {\n  font-size: 30px;\n  color: var(--ion-color-swprimary);\n  background-color: var(--ion-color-swwhite);\n  display: block;\n  margin: 10px auto;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 2px -2px rgba(0, 0, 0, 0.2);\n}\n.mblk-row .copy ion-icon {\n  margin-top: 10px;\n}\n.mblk-row a {\n  padding: 10px;\n  text-decoration: none;\n  text-align: center;\n  background-color: #25D366;\n  display: block;\n}\n.mblk-row a ion-icon {\n  font-weight: bolder;\n}\n.create-bg {\n  background-color: #C7E3F8;\n}\nh3 {\n  text-align: center;\n}\n.close {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #ffffff;\n  color: var(--ion-color-danger);\n  top: 5px;\n  right: 5px;\n}\n.errorclass {\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmUtY2lyY2xlL0Y6XFxzd2FzdGhcXHN3YXN0aHZpcnR1YWxwYXRpZW50L3NyY1xcYXBwXFxzaGFyZS1jaXJjbGVcXHNoYXJlLWNpcmNsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlLWNpcmNsZS9zaGFyZS1jaXJjbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0o7QURFSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0FSO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLHVDQUFBO0FDQVo7QURDWTtFQUNJLGdCQUFBO0FDQ2hCO0FERVE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0FaO0FERVk7RUFDSSxtQkFBQTtBQ0FoQjtBRE1BO0VBQ0kseUJBQUE7QUNISjtBRE1BO0VBQ0ksa0JBQUE7QUNISjtBRE9BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDSko7QURPQTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmUtY2lyY2xlL3NoYXJlLWNpcmNsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWJsayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwNDUxNjk7XHJcbiAgICAmLXJvdyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAuY29weSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zd3ByaW1hcnkpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3d3aGl0ZSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVEMzY2O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jcmVhdGUtYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M3RTNGODtcclxufVxyXG5cclxuaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmVycm9yY2xhc3Mge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59IiwiLm1ibGsge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLm1ibGstcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWJsay1yb3cgLmNvcHkge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3dwcmltYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN3d2hpdGUpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubWJsay1yb3cgLmNvcHkgaW9uLWljb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1ibGstcm93IGEge1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1RDM2NjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWJsay1yb3cgYSBpb24taWNvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5jcmVhdGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdFM0Y4O1xufVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5lcnJvcmNsYXNzIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/share-circle/share-circle.page.ts":
/*!***************************************************!*\
  !*** ./src/app/share-circle/share-circle.page.ts ***!
  \***************************************************/
/*! exports provided: ShareCirclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareCirclePage", function() { return ShareCirclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





let ShareCirclePage = class ShareCirclePage {
    constructor(navParams, popoverCtrl, clipBoard, authService) {
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.clipBoard = clipBoard;
        this.authService = authService;
        this.sendTxt = "";
        this.docNumber = "";
        this.whatsappLink = "";
        this.mobileNumber = {
            invalid: false,
            Msg: "",
        };
        this.sendStatus = false;
        this.countryCode = "";
        this.countryCodeStatus = false;
    }
    ngOnInit() {
        this.circleObj = this.navParams.get('circleObj');
        this.ptDetail = this.navParams.get('ptDetail');
        console.log("share doc detail", this.ptDetail);
        console.log("share circle obj", this.circleObj);
        if (this.ptDetail != undefined) {
            // this.sendTxt = this.ptDetail.ptFirstName+" "+this.ptDetail.ptLastName+" is inviting you to join their Swasth Circle! Join Name: "+this.circleObj.circleName;
            this.sendTxt = "Get 24/7 care from 5 doctors for your entire family by subscribing (to " + this.circleObj.circleName + ") at just Rs 150 per month on Swasth";
            console.log("after check doc detail", this.ptDetail);
        }
    }
    copyCodePass() {
        console.log("Circle object--->", this.circleObj);
        // let copyText = "Circle Code :"+this.circleObj.circleCode+" "+"Circle Password :"+this.circleObj.circlePassword;
        alert(this.sendTxt);
        this.clipBoard.copy(this.sendTxt).then(data => {
            alert("code copied");
        });
    }
    codeShareLink(e) {
        console.log("sxsxsx iff-----", e);
        if (e.which < 48 || e.which > 57) {
            // alert("enter the digits only");      
            e.target.value = "";
            e.key = "";
            this.mobileNumber.invalid = true;
            this.mobileNumber.msg = "Please enter only digits";
            console.log("sxsxsx iff-----", e);
        }
        else {
            if (e.target.value.length < 10) {
                console.log("mobile length", e.target.value.length);
                this.mobileNumber.invalid = false;
                this.whatsappLink = "https://wa.me/" + this.countryCode + this.docNumber + "?text=" + this.sendTxt;
                console.log("link--->", this.whatsappLink);
            }
            else {
                if (e.target.value.length == 10) {
                    this.sendStatus = true;
                }
                else {
                    this.sendStatus = false;
                }
                return false;
            }
        }
    }
    numberOnly(e) {
        if (e.keyCode == 8) {
            if (e.target.value.length < 10) {
                console.log("number reduce");
                this.sendStatus = false;
            }
        }
        else if (e.target.value.length == 10) {
            this.sendStatus = true;
        }
    }
    // get mobile country code 
    getCountryCode() {
        this.authService
            .getCountryCodes()
            .subscribe(data => {
            console.log("country codes--", data);
            this.countryCodeList = data;
        });
    }
    mobileNoChange(e) {
        console.log("sdsdsd", e);
        this.docNumber = e.target.value;
        if (e.target.value.length == 10 && this.countryCode != "") {
            this.whatsappLink = "https://wa.me/" + this.countryCode + this.docNumber + "?text=" + this.sendTxt;
            console.log("link--->", this.whatsappLink);
        }
    }
    countryCodeChange() {
        if (this.countryCode != "") {
            this.countryCodeStatus = true;
            if (this.countryCode != "" && this.docNumber != "") {
                this.whatsappLink = "https://wa.me/" + this.countryCode + this.docNumber + "?text=" + this.sendTxt;
                console.log("link--->", this.whatsappLink);
            }
        }
        else {
            this.countryCodeStatus = false;
        }
    }
    // close popover
    close() {
        this.popoverCtrl.dismiss("Cancel");
    }
};
ShareCirclePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ShareCirclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-share-circle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./share-circle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/share-circle/share-circle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./share-circle.page.scss */ "./src/app/share-circle/share-circle.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"],
        _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], ShareCirclePage);



/***/ })

}]);
//# sourceMappingURL=default~share-circle-share-circle-module~subscribed-doctor-circle-subscribed-doctor-circle-module-es2015.js.map