(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forget-password/forget-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forget-password/forget-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row class=\"login-grid\">\n  <ion-col size=\"12\" sizeMd=\"6\" sizeLg=\"5\" sizeXl=\"4\">\n    <div class=\"c-card\">\n      <div class=\"login-logo\">\n        <img src=\"{{authService.logo_url}}\" class=\"login-logo__img\">\n        <h1 class=\"login-logo__text\">To Reset Your Password</h1>\n      </div>\n      <form #form=\"ngForm\" (ngSubmit)=\"forgot(form.value)\" novalidate>\n        <div class=\"c-form__field\">\n          <input type=\"text\" class=\"c-form__input\" placeholder=\"Enter UID / Mobile No\" type=\"text\" name=\"user_id\" ngModel required #user_id=\"ngModel\"\n            [class.invalid]=\"user_id.errors && user_id.dirty\">\n          <ion-item class=\"error-message\" *ngIf=\"user_id.errors?.required && user_id.dirty\">UID is required</ion-item>\n        </div>\n        <div class=\"c-form__field\">\n          <button type=\"submit\" class=\"c-button c-button--primary c-button--fullwidth\" [disabled]=\"!form.valid\">Submit</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"login-paragraph\">\n      <div class=\"login-paragraph__text\">\n        You Know Password <a (click)=\"login()\" class=\"login-paragraph__link\">Login</a>\n      </div>\n    </div>\n  </ion-col>\n</ion-row>\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid fixed>\n    <ion-row class=\"login-grid\" *ngIf=\"!signUpStatus && !forgetPasswordStatus && welcomePageStatus\">\n      <ion-col size=\"12\">\n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide>\n            <div class=\"welcome\">\n              <div class=\"welcome-logo\">\n                <img src=\"{{authService.logo_url}}\" class=\"welcome-logo__img\">\n              </div>\n              <h1>Welcome to Swasth</h1>\n              <h5>Always have a network of doctors at the comfort of your home</h5>\n            </div>    \n          </ion-slide>\n          <ion-slide>\n            <h1>Slide 2</h1>\n          </ion-slide>\n          <ion-slide>\n            <h1>Slide 3</h1>\n          </ion-slide>\n        </ion-slides>\n        <ion-row>\n          <ion-col size=\"12\" sizeMd=\"6\" offsetMd=\"3\">\n            <div style=\"margin-top: 45px;\">\n              <div class=\"c-form__field\">\n                <button type=\"submit\" class=\"c-button c-button--fullwidth\" style=\"border-radius: 20px;font-size: 17px;\" (click)=\"signup()\">Join Now</button>\n              </div>\n              <div class=\"login-paragraph\">\n                <div class=\"login-paragraph__text\">\n                  Already have an account? <a (click)=\"linkLogin()\" class=\"login-paragraph__link\">Login</a>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"login-grid\" *ngIf=\"signUpStatus\">\n      <ion-col size=\"12\">\n        <app-sign-up [signUpStatus]=\"signUpStatus\" (childStatus)=\"signUpToLogin($event)\"></app-sign-up>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"login-grid\" *ngIf=\"!signUpStatus && !forgetPasswordStatus && !welcomePageStatus\">\n      <ion-col size=\"12\" sizeMd=\"6\" sizeLg=\"5\" sizeXl=\"4\">\n        <div class=\"login-c-card\">\n          <div class=\"login-logo\">\n            <img src=\"{{authService.logo_url}}\" class=\"login-logo__img\">\n            <h1 class=\"login-logo__text\">Login to Swasth</h1>\n          </div>\n          <form #form=\"ngForm\" (ngSubmit)=\"login(form.value)\" novalidate>\n            <div class=\"c-form__field\">\n              <input type=\"text\" class=\"c-form__input\" placeholder=\"Mobile\" type=\"text\" name=\"mobileNumber\" ngModel required #user_id=\"ngModel\" [class.invalid]=\"user_id.errors && user_id.dirty\">\n              <ion-item class=\"error-message\" *ngIf=\"user_id.errors?.required && user_id.dirty\"> Mobile Number is required</ion-item>\n            </div>\n            <div class=\"c-form__field\">\n              <input type=\"password\" class=\"c-form__input\" placeholder=\"Password\" name=\"password\" ngModel required #password=\"ngModel\" [class.invalid]=\"password.errors && password.dirty\">\n              <ion-item class=\"error-message\" *ngIf=\"password.errors?.required && password.dirty\">Password is required</ion-item>\n            </div>\n            <div class=\"login-paragraph\">\n              <div class=\"login-paragraph__remember\">\n                <input type=\"checkbox\" name=\"rememberMe\" #rememberme=\"ngModel\" [(ngModel)]=\"rememberMe\"> Remember Me\n              </div>\n            </div>  \n            <div class=\"c-form__field\">\n              <button type=\"submit\" class=\"c-button c-button--primary c-button--fullwidth\">Login</button>\n            </div>\n            <div class=\"c-form__field\">\n              <div class=\"login-paragraph\">\n                <a class=\"login-paragraph__link\" (click)=\"forgot()\">Can't access account? Contact us at hello@swasth.tech</a>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"login-paragraph\">\n          <div class=\"login-paragraph__text\">\n            Don't have an account <a (click)=\"signup()\" class=\"login-paragraph__link\">Sign Up</a>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"forgetPasswordStatus\">\n      <ion-col size=\"12\">\n        <app-forget-password [forgetPasswordStatus]=\"forgetPasswordStatus\" (childStatus)=\"forgetPassToLogin($event)\"></app-forget-password>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-137257123-1\"></script>\n<script>\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'UA-137257123-1');\n</script>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row class=\"login-grid\">\n  <ion-col size=\"12\" sizeLg=\"8\">\n    <div class=\"c-card\">\n      <div class=\"login-logo\">\n        <img src=\"{{authService.logo_url}}\" class=\"login-logo__img\">\n        <h1 class=\"login-logo__text\">Sign Up to Swasth</h1>\n      </div>\n      <form #form=\"ngForm\" (ngSubmit)=\"signup(form.value)\" novalidate>\n        <ion-row>\n          <ion-col>\n            <label class=\"c-form__label\" >Key: <span style=\"color:#f53d3d;\">* Fields are mandatory</span></label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"first_name\">First Name<sup>*</sup></label>\n              <input type=\"text\" class=\"c-form__input\" name=\"ptFirstName\" ngModel required #ptFirstName=\"ngModel\"\n                [class.invalid]=\"ptFirstName.errors && ptFirstName.dirty\">\n              <ion-item class=\"error-message\" *ngIf=\"ptFirstName.errors?.required && ptFirstName.dirty\">\n                First Name is required\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"last_name\">Last Name<sup>*</sup></label>\n              <input type=\"text\" class=\"c-form__input\" name=\"ptLastName\" ngModel required #ptLastName=\"ngModel\"\n                [class.invalid]=\"ptLastName.errors && ptLastName.dirty\">\n              <ion-item class=\"error-message\" *ngIf=\"ptLastName.errors?.required && ptLastName.dirty\">\n                Last Name is required\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"dob\">DOB<sup>*</sup></label>\n              <input type=\"date\" class=\"c-form__input\" name=\"ptDob\" displayFormat=\"DD/MM/YYYY\" ngModel required #ptDob=\"ngModel\"\n                [class.invalid]=\"ptDob.errors && ptDob.dirty\" (change)=\"getAge(ptDob.value)\">\n              <ion-item class=\"error-message\" *ngIf=\"ptDob.errors?.required && ptDob.dirty\">\n                Date of birth is required\n              </ion-item>   \n            </div>\n          </ion-col>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"last_name\">Email<sup>*</sup></label>\n              <input type=\"text\" class=\"c-form__input\" name=\"ptEmailID\" ngModel required #ptEmailID=\"ngModel\"\n                [class.invalid]=\"ptEmailID.errors && ptEmailID.dirty\">\n              <ion-item class=\"error-message\" *ngIf=\"ptEmailID.errors?.required && ptEmailID.dirty\">\n                Email Id is required\n              </ion-item>\n            </div>\n          </ion-col>\n          <!-- <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"blood_group\">Blood Group</label>\n              <select class=\"c-form__select\" name=\"ptBloodGroup\" ngModel #ptBloodGroup=\"ngModel\" [class.invalid]=\"ptBloodGroup.errors?.required && ptBloodGroup.dirty\">\n                <option disabled>--Select--</option>\n                <option>O+</option>\n                <option>O-</option>\n                <option>A+</option>\n                <option>A-</option>\n                <option>B+</option>\n                <option>B-</option>\n                <option>AB+</option>\n                <option>AB-</option>\n              </select>\n              <ion-item class=\"error-message\" *ngIf=\"ptBloodGroup.errors?.required && ptBloodGroup.dirty\">\n                Blood Group is required\n              </ion-item>\n            </div>\n          </ion-col> -->\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\">Sex<sup>*</sup></label>\n            </div>\n            <ion-list radio-group class=\"gender-list\">\n              <ion-row>\n                <ion-col size size-md padding-right>\n                  <div class=\"c-form__field\">\n                    <label class=\"c-form__label\"><input type=\"radio\" name=\"ptGender\" ngModel required #ptGender=\"ngModel\" class=\"c-form__radio\" value=\"Male\"> Male</label>\n                  </div>\n                </ion-col>\n                <ion-col size size-md padding-right>\n                  <div class=\"c-form__field\">\n                    <label class=\"c-form__label\"><input type=\"radio\" name=\"ptGender\" ngModel required #ptGender=\"ngModel\" class=\"c-form__radio\" value=\"Female\"> Female</label>\n                  </div>\n                </ion-col>\n                <ion-col size size-md  padding-right>\n                  <div class=\"c-form__field\">\n                    <label class=\"c-form__label\"><input type=\"radio\" name=\"ptGender\" ngModel required #ptGender=\"ngModel\" class=\"c-form__radio\" value=\"Others\"> Others</label>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n            <ion-item class=\"error-message\" *ngIf=\"ptGender.errors?.required && ptGender.dirty\">\n              Gender is required\n            </ion-item>\n          </ion-col>\n        \n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"pt_mobile_no\">Mobile<sup>*</sup></label>\n              <input type=\"number\" class=\"c-form__input\" class=\"c-form__input\"  name=\"ptMobileNo\" ngModel required=\"\" #ptMobileNo=\"ngModel\" [class.invalid]=\"ptMobileNo.errors && ptMobileNo.dirty\" [pattern]=\"mobnumPattern\">\n              <ion-item class=\"error-message\" *ngIf=\"ptMobileNo.errors?.required && ptMobileNo.dirty\">\n                Mobile Number is required\n              </ion-item>\n              <div *ngIf=\"ptMobileNo.errors && !isValidFormSubmitted\" [ngClass] = \"'error'\"> \n                <ion-item *ngIf=\"ptMobileNo.errors.pattern\" class=\"error-message\"> \n                Mobile number not valid.\n                </ion-item>  \n              </div>\n            </div>\n          </ion-col>\n\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"password\" >Password<sup>*</sup></label>\n              <input type=\"password\" class=\"c-form__input\" name=\"password\" ngModel required #password=\"ngModel\"\n                [class.invalid]=\"password.errors && password.dirty\" (blur)=\"checkPassword(pt_confirm_password.value,password.value)\">\n              <ion-item class=\"error-message\" *ngIf=\"password.errors?.required && password.dirty\">\n                Password is required\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"pt_confirm_password\">Confirm Password<sup>*</sup></label>\n              <input type=\"password\" class=\"c-form__input\" class=\"c-form__input\" name=\"pt_confirm_password\" \n                ngModel required #pt_confirm_password=\"ngModel\" [class.invalid]=\"pt_confirm_password.errors && pt_confirm_password.dirty\" (blur)=\"checkPassword(pt_confirm_password.value,password.value)\">\n              <ion-item class=\"error-message\" *ngIf=\"pt_confirm_password.errors?.required && pt_confirm_password.dirty\">\n                Confirm Password is required\n              </ion-item>\n              <ion-item class=\"error-message\" *ngIf=\"!ConfirmPassword\">\n                Password Mismatch \n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"c-form__field\">\n              <ion-button type=\"submit\" [disabled]=\"!form.valid\">Create an Account</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n    <div class=\"login-paragraph\">\n      <div class=\"login-paragraph__text\">\n        Already have an account? <a (click)=\"linkLogin()\" class=\"login-paragraph__link\">Login</a>\n      </div>\n    </div>\n  </ion-col>\n</ion-row>\n\n\n");

/***/ }),

/***/ "./src/app/forget-password/forget-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forget-password/forget-password.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".c-card {\n  margin-top: 150px;\n  margin-bottom: 20px;\n  padding: 15px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  border-radius: 15px;\n}\n.c-card > *:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0LXBhc3N3b3JkL0Y6XFxzd2FzdGhcXHN3YXN0aHZpcnR1YWxwYXRpZW50L3NyY1xcYXBwXFxmb3JnZXQtcGFzc3dvcmRcXGZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmMtY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgPiAqOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLmMtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLmMtY2FyZCA+ICo6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/forget-password/forget-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forget-password/forget-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





let ForgetPasswordComponent = class ForgetPasswordComponent {
    constructor(authService, loadingController, toastCtrl) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.forgetPasswordStatus = true;
        this.childStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    // to login page
    login() {
        this.childStatus.emit(false);
        this.forgetPasswordStatus = false;
    }
    forgot(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create({
                spinner: 'bubbles',
                message: 'Validating UID ...'
            });
            yield loading.present();
            this.authService
                .forgotUidCheck(value.user_id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => loading.dismiss()))
                .subscribe(data => {
                if (data != null) {
                    console.log(data);
                }
                else {
                    this.showSuccesToast();
                }
            });
        });
    }
    showSuccesToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log("Response Message======"+data);      
            const toast = yield this.toastCtrl.create({
                message: 'Invalid User ID',
                duration: 3000,
                position: 'bottom'
            });
            yield toast.present();
        });
    }
    logout() {
        this.authService.logout();
    }
};
ForgetPasswordComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ForgetPasswordComponent.prototype, "forgetPasswordStatus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ForgetPasswordComponent.prototype, "childStatus", void 0);
ForgetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forget-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forget-password/forget-password.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forget-password.component.scss */ "./src/app/forget-password/forget-password.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ForgetPasswordComponent);



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../forget-password/forget-password.component */ "./src/app/forget-password/forget-password.component.ts");









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
            _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgetPasswordComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: linear-gradient(120deg, #00b3ea, #00db89);\n}\n\n.welcome {\n  margin-top: 130px;\n  margin-bottom: 100px;\n  text-align: center;\n}\n\n.welcome h1 {\n  text-align: center;\n  color: #fff;\n  text-shadow: 1px 1px 3px #000000;\n}\n\n.welcome h5 {\n  padding: 15px;\n  color: #222222;\n}\n\n.welcome-logo {\n  display: inline-block;\n}\n\n.welcome-logo__img {\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRjpcXHN3YXN0aFxcc3dhc3RodmlydHVhbHBhdGllbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVJLGlFQUFBO0FDSEo7O0FES0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDRFI7O0FER0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ0RSOztBREdJO0VBQ0kscUJBQUE7QUNEUjs7QURFUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LWhlYWRpbmc6ICdNdWxpJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtYm9keTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWJnKTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMwMGIzZWEsICMwMGRiODkpO1xyXG59XHJcbi53ZWxjb21lIHtcclxuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoMXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICBoNSB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIH1cclxuICAgICYtbG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICZfX2ltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMDBiM2VhLCAjMDBkYjg5KTtcbn1cblxuLndlbGNvbWUge1xuICBtYXJnaW4tdG9wOiAxMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53ZWxjb21lIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4ICMwMDAwMDA7XG59XG4ud2VsY29tZSBoNSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLndlbGNvbWUtbG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi53ZWxjb21lLWxvZ29fX2ltZyB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/login-auth.service */ "./src/app/services/login-auth.service.ts");
/* harmony import */ var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storage/swasth-storage.service */ "./src/app/storage/swasth-storage.service.ts");









let LoginPage = class LoginPage {
    //ref = firebase.database().ref('autorefresh/chatupdate');
    constructor(loadingController, authService, toastCtrl, jwtHelper, router, loginAuth, swasthStorage) {
        this.loadingController = loadingController;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.jwtHelper = jwtHelper;
        this.router = router;
        this.loginAuth = loginAuth;
        this.swasthStorage = swasthStorage;
        this.rememberMe = true;
        this.userType = "";
        this.signUpStatus = false;
        this.forgetPasswordStatus = false;
        this.welcomePageStatus = true;
        this.familyMembers = [];
        this.LOGINUSER_PROFILE = "patient_profile";
    }
    ngOnInit() {
        // this.ref.on('value', resp => {
        //   console.log("values---->", resp.val());
        //   this.fncheck();
        // });
    }
    fncheck() {
        this.authService.getPtCircleList('cvinoth03')
            .subscribe(data => {
            console.log("res--", data);
        });
    }
    // to signup component
    signup() {
        this.welcomePageStatus = false;
        this.signUpStatus = true;
    }
    // signup component to login page
    signUpToLogin(event) {
        this.signUpStatus = event;
    }
    // to forget password component
    forgot() {
        this.forgetPasswordStatus = true;
    }
    // forgetpassword component to login page
    forgetPassToLogin(event) {
        this.forgetPasswordStatus = event;
    }
    // welcome page to login page
    linkLogin() {
        this.welcomePageStatus = false;
    }
    // for user login
    login(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.userType);
            let loading = yield this.loadingController.create({
                spinner: 'bubbles',
                message: 'Logging in ...'
            });
            let rememberValue = 0;
            if (value.rememberMe) {
                rememberValue = 1;
            }
            yield loading.present();
            console.log(value, rememberValue);
            this.loginAuth
                .login(value, rememberValue)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => loading.dismiss()))
                .subscribe((data) => {
                // console.log("login data",data);
                if (data == 'NOTEXISTS') {
                    this.showSuccesToast(data);
                }
                else {
                    this.checkAccountType(data);
                    //this.checkPatientCircleStatus(data);
                    //this.router.navigateByUrl('/pt-profile');
                    //this.router.navigateByUrl('/familymembers');
                }
            }, err => {
                console.log(err);
                this.handleError(err);
            });
        });
    }
    checkAccountType(tokendata) {
        const authDetail = this.jwtHelper.decodeToken(tokendata);
        console.log("token data--", authDetail);
        this.authService
            .getPrimaryUserProfile(authDetail.UID)
            .subscribe(data => {
            this.patientDetails = data;
            console.log("Patient Details==>", data);
            let accountType = this.patientDetails.accountType;
            if (accountType == "Family") {
                this.authService
                    .getFamilyMember(this.patientDetails.userID)
                    .subscribe(data => {
                    this.familyMembers = data;
                    if (this.familyMembers.length > 0) {
                        this.router.navigateByUrl('/familymembers');
                    }
                    else {
                        this.swasthStorage.setStorage(this.LOGINUSER_PROFILE, this.patientDetails);
                        this.router.navigateByUrl('/pt-profile');
                    }
                });
            }
            else if (accountType == "Normal") {
                this.swasthStorage.setStorage(this.LOGINUSER_PROFILE, this.patientDetails);
                this.router.navigateByUrl('/pt-profile');
                this.router.navigateByUrl('/pt-profile');
            }
            else {
                this.swasthStorage.setStorage(this.LOGINUSER_PROFILE, this.patientDetails);
                this.router.navigateByUrl('/pt-profile');
                this.router.navigateByUrl('/pt-profile');
            }
        });
    }
    checkPatientCircleStatus(tokendata) {
        const authDetail = this.jwtHelper.decodeToken(tokendata);
        console.log("token data--", authDetail);
        this.authService.getPtCircleList(authDetail.UID)
            .subscribe(data => {
            console.log("res--", data);
            if (data != null) {
                let response = data;
                this.router.navigateByUrl('/subscribed-doctor-circle');
            }
            else {
                this.router.navigateByUrl('/select-virtual-hospital');
            }
        });
    }
    showSuccesToast(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log("Response Message======"+data);      
            const toast = yield this.toastCtrl.create({
                message: 'Invalid User ID',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    handleError(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let message;
            if (error.status && error.status === 401) {
                message = 'Invalid password';
            }
            else {
                message = `Unexpected error: ${error.statusText}`;
            }
            const toast = yield this.toastCtrl.create({
                message,
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_7__["LoginAuthService"] },
    { type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__["SwasthStorageService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_login_auth_service__WEBPACK_IMPORTED_MODULE_7__["LoginAuthService"],
        _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__["SwasthStorageService"]])
], LoginPage);



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.scss":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".c-card {\n  margin-top: 120px;\n  margin-bottom: 20px;\n  padding: 15px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  border-radius: 15px;\n}\n.c-card > *:last-child {\n  margin-bottom: 0;\n}\n.gender-list {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  background: inherit;\n}\nion-button {\n  width: 100%;\n  --ion-background-color:#0059b3;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9GOlxcc3dhc3RoXFxzd2FzdGh2aXJ0dWFscGF0aWVudC9zcmNcXGFwcFxcc2lnbi11cFxcc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksZ0JBQUE7QUNFUjtBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYy1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICA+ICo6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmdlbmRlci1saXN0IHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAwNTliMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iLCIuYy1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4uYy1jYXJkID4gKjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmdlbmRlci1saXN0IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMwMDU5YjM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






let SignUpComponent = class SignUpComponent {
    constructor(authService, loadingController, toastCtrl, alertCtrl, platform, datepipe) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.datepipe = datepipe;
        this.pt = {
            circlePatientProfile: {},
            circlePatientLogin: {}
        };
        this.ConfirmPassword = [];
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.signUpStatus = true;
        this.childStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ConfirmPassword = true;
        this.CurrentDate = new Date();
    }
    ngOnInit() { }
    // signup component to login page
    linkLogin() {
        this.childStatus.emit(false);
        this.signUpStatus = false;
    }
    // new user sign up
    signup(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create({
                spinner: 'bubbles',
                message: 'Signing up ...'
            });
            yield loading.present();
            // console.log(value);
            value.tenantID = "1";
            value.createdDateTime = new Date();
            this.pt.circlePatientProfile = {
                tenantID: "1",
                ptFirstName: value.ptFirstName,
                ptLastName: value.ptLastName,
                ptAadharNo: value.ptAadharNo,
                ptMaritalStatus: value.ptMaritalStatus,
                ptDob: value.ptDob,
                ptAge: this.age1,
                ptMobileNo: value.ptMobileNo,
                ptEmailID: value.ptEmailID,
                ptBloodGroup: value.ptBloodGroup,
                ptGender: value.ptGender,
                ptCountry: value.ptCountry,
                ptAllergies: value.ptAllergies,
                ptEmergencyContactName: value.ptEmergencyContactName,
                ptEmergencyContactNo: value.ptEmergencyContactNo,
                ptEmergencyEmailID: value.ptEmergencyEmailID,
                ptEmergencyRelationship: value.ptEmergencyRelationship,
                createdDateTime: new Date(),
                status: "Active"
            };
            console.log("circle patient", this.pt.circlePatientProfile);
            this.pt.circlePatientLogin = {
                tenant_id: "1",
                role_id: "1",
                user_type: "Patient",
                userPassword: value.password,
                created_date_time: new Date()
            };
            // this.pt.addressEntity = {
            //   addressLine1:value.addressline1,
            //   addressLine2:value.addressline2,
            //   city:value.city,
            //   state:value.state,
            //   country:value.ptCountry,
            //   postalCode:value.postalCode,
            //   createdDateTime: new Date(),
            //   status:'Active'
            // }
            // console.log("post value ......"+JSON.stringify(this.pt));
            this.authService
                .circlesignup(this.pt)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => loading.dismiss()))
                .subscribe((jwt) => this.showSuccesToast(jwt), err => this.handleError(err));
        });
    }
    // toast controller alert
    showSuccesToast(jwt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log("Response Message======"+jwt);
            if (jwt !== 'EXISTS') {
                let alert = yield this.alertCtrl.create({
                    header: 'You have successfully registered',
                    message: 'You can log in using your registered mobile number',
                    buttons: [{
                            text: 'OK',
                            handler: () => {
                                this.childStatus.emit(false);
                            }
                        }]
                });
                yield alert.present();
                /*const toast = this.toastCtrl.create({
                  message: 'Sign up successful',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();*/
            }
            else {
                const toast = yield this.toastCtrl.create({
                    message: 'Username already registered',
                    duration: 3000,
                    position: 'bottom'
                });
                yield toast.present();
                // this.usernameModel.control.setErrors({'usernameTaken': true});
            }
        });
    }
    handleError(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let message = `Unexpected error occurred`;
            const toast = yield this.toastCtrl.create({
                message,
                duration: 5000,
                position: 'bottom'
            });
            yield toast.present();
        });
    }
    // check confirm password match
    checkPassword(value, value1) {
        if (value != value1) {
            this.ConfirmPassword = false;
        }
        else {
            this.ConfirmPassword = true;
        }
    }
    // calculate age of patient
    getAge(dob) {
        //console.log(dob);
        let latest_date = this.datepipe.transform(this.CurrentDate, 'yyyy-MM-dd');
        //console.log("Current Date=="+latest_date);
        let dobdate = new Date(dob);
        let dobdate1 = new Date(latest_date);
        // console.log("Current Date=="+dobdate);
        //current_date=Date.now();
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds 
        var timeDiff = Math.round(Math.abs((dobdate1.getTime() - dobdate.getTime()) / (oneDay)));
        //var diffDays = Math.round(Math.abs((dobdate.getTime() - current_date.getTime())/(oneDay)));
        var age = (timeDiff / 365);
        this.age1 = Math.floor(age);
        /*console.log("Age=="+(timeDiff/365));*/
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SignUpComponent.prototype, "signUpStatus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SignUpComponent.prototype, "childStatus", void 0);
SignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sign-up/sign-up.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
], SignUpComponent);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map