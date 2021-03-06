function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forget-password/forget-password.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forget-password/forget-password.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgetPasswordForgetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-row class=\"login-grid\">\n  <ion-col size=\"12\" sizeMd=\"6\" sizeLg=\"5\" sizeXl=\"4\">\n    <div class=\"c-card\">\n      <div class=\"login-logo\">\n        <img src=\"{{authService.logo_url}}\" class=\"login-logo__img\">\n        <h1 class=\"login-logo__text\">To Reset Your Password</h1>\n      </div>\n      <form #form=\"ngForm\" (ngSubmit)=\"forgot(form.value)\" novalidate>\n        <div class=\"c-form__field\">\n          <input type=\"text\" class=\"c-form__input\" placeholder=\"Enter UID / Mobile No\" type=\"text\" name=\"user_id\" ngModel required #user_id=\"ngModel\"\n            [class.invalid]=\"user_id.errors && user_id.dirty\">\n          <ion-item class=\"error-message\" *ngIf=\"user_id.errors?.required && user_id.dirty\">UID is required</ion-item>\n        </div>\n        <div class=\"c-form__field\">\n          <button type=\"submit\" class=\"c-button c-button--primary c-button--fullwidth\" [disabled]=\"!form.valid\">Submit</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"login-paragraph\">\n      <div class=\"login-paragraph__text\">\n        You Know Password <a (click)=\"login()\" class=\"login-paragraph__link\">Login</a>\n      </div>\n    </div>\n  </ion-col>\n</ion-row>\n  \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid fixed>\n    <ion-row class=\"login-grid\" *ngIf=\"!signUpStatus && !forgetPasswordStatus && welcomePageStatus\">\n      <ion-col size=\"12\">\n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide>\n            <div class=\"welcome\">\n              <div class=\"welcome-logo\">\n                <img src=\"{{authService.logo_url}}\" class=\"welcome-logo__img\">\n              </div>\n              <h1>Welcome to Swasth</h1>\n              <h5>Always have a network of doctors at the comfort of your home</h5>\n            </div>    \n          </ion-slide>\n          <ion-slide>\n            <h1>Slide 2</h1>\n          </ion-slide>\n          <ion-slide>\n            <h1>Slide 3</h1>\n          </ion-slide>\n        </ion-slides>\n        <ion-row>\n          <ion-col size=\"12\" sizeMd=\"6\" offsetMd=\"3\">\n            <div style=\"margin-top: 45px;\">\n              <div class=\"c-form__field\">\n                <button type=\"submit\" class=\"c-button c-button--fullwidth\" style=\"border-radius: 20px;font-size: 17px;\" (click)=\"signup()\">Join Now</button>\n              </div>\n              <div class=\"login-paragraph\">\n                <div class=\"login-paragraph__text\">\n                  Already have an account? <a (click)=\"linkLogin()\" class=\"login-paragraph__link\">Login</a>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"login-grid\" *ngIf=\"signUpStatus\">\n      <ion-col size=\"12\">\n        <app-sign-up [signUpStatus]=\"signUpStatus\" (childStatus)=\"signUpToLogin($event)\"></app-sign-up>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"login-grid\" *ngIf=\"!signUpStatus && !forgetPasswordStatus && !welcomePageStatus\">\n      <ion-col size=\"12\" sizeMd=\"6\" sizeLg=\"5\" sizeXl=\"4\">\n        <div class=\"login-c-card\">\n          <div class=\"login-logo\">\n            <img src=\"{{authService.logo_url}}\" class=\"login-logo__img\">\n            <h1 class=\"login-logo__text\">Login to Swasth</h1>\n          </div>\n          <form #form=\"ngForm\" (ngSubmit)=\"login(form.value)\" novalidate>\n            <div class=\"c-form__field\">\n              <input type=\"text\" class=\"c-form__input\" placeholder=\"Mobile\" type=\"text\" name=\"mobileNumber\" ngModel required #user_id=\"ngModel\" [class.invalid]=\"user_id.errors && user_id.dirty\">\n              <ion-item class=\"error-message\" *ngIf=\"user_id.errors?.required && user_id.dirty\"> Mobile Number is required</ion-item>\n            </div>\n            <div class=\"c-form__field\">\n              <input type=\"password\" class=\"c-form__input\" placeholder=\"Password\" name=\"password\" ngModel required #password=\"ngModel\" [class.invalid]=\"password.errors && password.dirty\">\n              <ion-item class=\"error-message\" *ngIf=\"password.errors?.required && password.dirty\">Password is required</ion-item>\n            </div>\n            <div class=\"login-paragraph\">\n              <div class=\"login-paragraph__remember\">\n                <input type=\"checkbox\" name=\"rememberMe\" #rememberme=\"ngModel\" [(ngModel)]=\"rememberMe\"> Remember Me\n              </div>\n            </div>  \n            <div class=\"c-form__field\">\n              <button type=\"submit\" class=\"c-button c-button--primary c-button--fullwidth\">Login</button>\n            </div>\n            <div class=\"c-form__field\">\n              <div class=\"login-paragraph\">\n                <a class=\"login-paragraph__link\" (click)=\"forgot()\">Can't access account? Contact us at hello@swasth.tech</a>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"login-paragraph\">\n          <div class=\"login-paragraph__text\">\n            Don't have an account <a (click)=\"signup()\" class=\"login-paragraph__link\">Sign Up</a>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"forgetPasswordStatus\">\n      <ion-col size=\"12\">\n        <app-forget-password [forgetPasswordStatus]=\"forgetPasswordStatus\" (childStatus)=\"forgetPassToLogin($event)\"></app-forget-password>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-137257123-1\"></script>\n<script>\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'UA-137257123-1');\n</script>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-row class=\"login-grid\">\n  <ion-col size=\"12\" sizeLg=\"8\">\n    <div class=\"c-card\">\n      <div class=\"login-logo\">\n        <img src=\"{{authService.logo_url}}\" class=\"login-logo__img\">\n        <h1 class=\"login-logo__text\">Sign Up to Swasth</h1>\n      </div>\n      <form #form=\"ngForm\" (ngSubmit)=\"signup(form.value)\" novalidate>\n        <ion-row>\n          <ion-col>\n            <label class=\"c-form__label\" >Key: <span style=\"color:#f53d3d;\">* Fields are mandatory</span></label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"first_name\">First Name<sup>*</sup></label>\n              <input type=\"text\" class=\"c-form__input\" name=\"ptFirstName\" ngModel required #ptFirstName=\"ngModel\"\n                [class.invalid]=\"ptFirstName.errors && ptFirstName.dirty\">\n              <ion-item class=\"error-message\" *ngIf=\"ptFirstName.errors?.required && ptFirstName.dirty\">\n                First Name is required\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"last_name\">Last Name<sup>*</sup></label>\n              <input type=\"text\" class=\"c-form__input\" name=\"ptLastName\" ngModel required #ptLastName=\"ngModel\"\n                [class.invalid]=\"ptLastName.errors && ptLastName.dirty\">\n              <ion-item class=\"error-message\" *ngIf=\"ptLastName.errors?.required && ptLastName.dirty\">\n                Last Name is required\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"dob\">DOB<sup>*</sup></label>\n              <input type=\"date\" class=\"c-form__input\" name=\"ptDob\" displayFormat=\"DD/MM/YYYY\" ngModel required #ptDob=\"ngModel\"\n                [class.invalid]=\"ptDob.errors && ptDob.dirty\" (change)=\"getAge(ptDob.value)\">\n              <ion-item class=\"error-message\" *ngIf=\"ptDob.errors?.required && ptDob.dirty\">\n                Date of birth is required\n              </ion-item>   \n            </div>\n          </ion-col>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"last_name\">Email<sup>*</sup></label>\n              <input type=\"text\" class=\"c-form__input\" name=\"ptEmailID\" ngModel required #ptEmailID=\"ngModel\"\n                [class.invalid]=\"ptEmailID.errors && ptEmailID.dirty\">\n              <ion-item class=\"error-message\" *ngIf=\"ptEmailID.errors?.required && ptEmailID.dirty\">\n                Email Id is required\n              </ion-item>\n            </div>\n          </ion-col>\n          <!-- <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"blood_group\">Blood Group</label>\n              <select class=\"c-form__select\" name=\"ptBloodGroup\" ngModel #ptBloodGroup=\"ngModel\" [class.invalid]=\"ptBloodGroup.errors?.required && ptBloodGroup.dirty\">\n                <option disabled>--Select--</option>\n                <option>O+</option>\n                <option>O-</option>\n                <option>A+</option>\n                <option>A-</option>\n                <option>B+</option>\n                <option>B-</option>\n                <option>AB+</option>\n                <option>AB-</option>\n              </select>\n              <ion-item class=\"error-message\" *ngIf=\"ptBloodGroup.errors?.required && ptBloodGroup.dirty\">\n                Blood Group is required\n              </ion-item>\n            </div>\n          </ion-col> -->\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\">Sex<sup>*</sup></label>\n            </div>\n            <ion-list radio-group class=\"gender-list\">\n              <ion-row>\n                <ion-col size size-md padding-right>\n                  <div class=\"c-form__field\">\n                    <label class=\"c-form__label\"><input type=\"radio\" name=\"ptGender\" ngModel required #ptGender=\"ngModel\" class=\"c-form__radio\" value=\"Male\"> Male</label>\n                  </div>\n                </ion-col>\n                <ion-col size size-md padding-right>\n                  <div class=\"c-form__field\">\n                    <label class=\"c-form__label\"><input type=\"radio\" name=\"ptGender\" ngModel required #ptGender=\"ngModel\" class=\"c-form__radio\" value=\"Female\"> Female</label>\n                  </div>\n                </ion-col>\n                <ion-col size size-md  padding-right>\n                  <div class=\"c-form__field\">\n                    <label class=\"c-form__label\"><input type=\"radio\" name=\"ptGender\" ngModel required #ptGender=\"ngModel\" class=\"c-form__radio\" value=\"Others\"> Others</label>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n            <ion-item class=\"error-message\" *ngIf=\"ptGender.errors?.required && ptGender.dirty\">\n              Gender is required\n            </ion-item>\n          </ion-col>\n        \n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"pt_mobile_no\">Mobile<sup>*</sup></label>\n              <input type=\"number\" class=\"c-form__input\" class=\"c-form__input\"  name=\"ptMobileNo\" ngModel required=\"\" #ptMobileNo=\"ngModel\" [class.invalid]=\"ptMobileNo.errors && ptMobileNo.dirty\" [pattern]=\"mobnumPattern\">\n              <ion-item class=\"error-message\" *ngIf=\"ptMobileNo.errors?.required && ptMobileNo.dirty\">\n                Mobile Number is required\n              </ion-item>\n              <div *ngIf=\"ptMobileNo.errors && !isValidFormSubmitted\" [ngClass] = \"'error'\"> \n                <ion-item *ngIf=\"ptMobileNo.errors.pattern\" class=\"error-message\"> \n                Mobile number not valid.\n                </ion-item>  \n              </div>\n            </div>\n          </ion-col>\n\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"password\" >Password<sup>*</sup></label>\n              <input type=\"password\" class=\"c-form__input\" name=\"password\" ngModel required #password=\"ngModel\"\n                [class.invalid]=\"password.errors && password.dirty\" (blur)=\"checkPassword(pt_confirm_password.value,password.value)\">\n              <ion-item class=\"error-message\" *ngIf=\"password.errors?.required && password.dirty\">\n                Password is required\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"c-form__field\">\n              <label class=\"c-form__label\" for=\"pt_confirm_password\">Confirm Password<sup>*</sup></label>\n              <input type=\"password\" class=\"c-form__input\" class=\"c-form__input\" name=\"pt_confirm_password\" \n                ngModel required #pt_confirm_password=\"ngModel\" [class.invalid]=\"pt_confirm_password.errors && pt_confirm_password.dirty\" (blur)=\"checkPassword(pt_confirm_password.value,password.value)\">\n              <ion-item class=\"error-message\" *ngIf=\"pt_confirm_password.errors?.required && pt_confirm_password.dirty\">\n                Confirm Password is required\n              </ion-item>\n              <ion-item class=\"error-message\" *ngIf=\"!ConfirmPassword\">\n                Password Mismatch \n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"c-form__field\">\n              <ion-button type=\"submit\" [disabled]=\"!form.valid\">Create an Account</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n    <div class=\"login-paragraph\">\n      <div class=\"login-paragraph__text\">\n        Already have an account? <a (click)=\"linkLogin()\" class=\"login-paragraph__link\">Login</a>\n      </div>\n    </div>\n  </ion-col>\n</ion-row>\n\n\n";
    /***/
  },

  /***/
  "./src/app/forget-password/forget-password.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/forget-password/forget-password.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgetPasswordForgetPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".c-card {\n  margin-top: 150px;\n  margin-bottom: 20px;\n  padding: 15px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  border-radius: 15px;\n}\n.c-card > *:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0LXBhc3N3b3JkL0Y6XFxzd2FzdGhcXHN3YXN0aHZpcnR1YWxwYXRpZW50L3NyY1xcYXBwXFxmb3JnZXQtcGFzc3dvcmRcXGZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmMtY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgPiAqOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLmMtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLmMtY2FyZCA+ICo6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/forget-password/forget-password.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/forget-password/forget-password.component.ts ***!
    \**************************************************************/

  /*! exports provided: ForgetPasswordComponent */

  /***/
  function srcAppForgetPasswordForgetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
      return ForgetPasswordComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    var ForgetPasswordComponent = /*#__PURE__*/function () {
      function ForgetPasswordComponent(authService, loadingController, toastCtrl) {
        _classCallCheck(this, ForgetPasswordComponent);

        this.authService = authService;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.forgetPasswordStatus = true;
        this.childStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ForgetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // to login page

      }, {
        key: "login",
        value: function login() {
          this.childStatus.emit(false);
          this.forgetPasswordStatus = false;
        }
      }, {
        key: "forgot",
        value: function forgot(value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      spinner: 'bubbles',
                      message: 'Validating UID ...'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    this.authService.forgotUidCheck(value.user_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                      return loading.dismiss();
                    })).subscribe(function (data) {
                      if (data != null) {
                        console.log(data);
                      } else {
                        _this.showSuccesToast();
                      }
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showSuccesToast",
        value: function showSuccesToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: 'Invalid User ID',
                      duration: 3000,
                      position: 'bottom'
                    });

                  case 2:
                    toast = _context2.sent;
                    _context2.next = 5;
                    return toast.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
        }
      }]);

      return ForgetPasswordComponent;
    }();

    ForgetPasswordComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ForgetPasswordComponent.prototype, "forgetPasswordStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ForgetPasswordComponent.prototype, "childStatus", void 0);
    ForgetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forget-password',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forget-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forget-password/forget-password.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forget-password.component.scss */
      "./src/app/forget-password/forget-password.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], ForgetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../forget-password/forget-password.component */
    "./src/app/forget-password/forget-password.component.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"], _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgetPasswordComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: linear-gradient(120deg, #00b3ea, #00db89);\n}\n\n.welcome {\n  margin-top: 130px;\n  margin-bottom: 100px;\n  text-align: center;\n}\n\n.welcome h1 {\n  text-align: center;\n  color: #fff;\n  text-shadow: 1px 1px 3px #000000;\n}\n\n.welcome h5 {\n  padding: 15px;\n  color: #222222;\n}\n\n.welcome-logo {\n  display: inline-block;\n}\n\n.welcome-logo__img {\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRjpcXHN3YXN0aFxcc3dhc3RodmlydHVhbHBhdGllbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVJLGlFQUFBO0FDSEo7O0FES0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDRFI7O0FER0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ0RSOztBREdJO0VBQ0kscUJBQUE7QUNEUjs7QURFUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LWhlYWRpbmc6ICdNdWxpJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtYm9keTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWJnKTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMwMGIzZWEsICMwMGRiODkpO1xyXG59XHJcbi53ZWxjb21lIHtcclxuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoMXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICBoNSB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIH1cclxuICAgICYtbG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICZfX2ltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMDBiM2VhLCAjMDBkYjg5KTtcbn1cblxuLndlbGNvbWUge1xuICBtYXJnaW4tdG9wOiAxMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53ZWxjb21lIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4ICMwMDAwMDA7XG59XG4ud2VsY29tZSBoNSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLndlbGNvbWUtbG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi53ZWxjb21lLWxvZ29fX2ltZyB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/login-auth.service */
    "./src/app/services/login-auth.service.ts");
    /* harmony import */


    var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../storage/swasth-storage.service */
    "./src/app/storage/swasth-storage.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      //ref = firebase.database().ref('autorefresh/chatupdate');
      function LoginPage(loadingController, authService, toastCtrl, jwtHelper, router, loginAuth, swasthStorage) {
        _classCallCheck(this, LoginPage);

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

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.ref.on('value', resp => {
          //   console.log("values---->", resp.val());
          //   this.fncheck();
          // });
        }
      }, {
        key: "fncheck",
        value: function fncheck() {
          this.authService.getPtCircleList('cvinoth03').subscribe(function (data) {
            console.log("res--", data);
          });
        } // to signup component

      }, {
        key: "signup",
        value: function signup() {
          this.welcomePageStatus = false;
          this.signUpStatus = true;
        } // signup component to login page

      }, {
        key: "signUpToLogin",
        value: function signUpToLogin(event) {
          this.signUpStatus = event;
        } // to forget password component

      }, {
        key: "forgot",
        value: function forgot() {
          this.forgetPasswordStatus = true;
        } // forgetpassword component to login page

      }, {
        key: "forgetPassToLogin",
        value: function forgetPassToLogin(event) {
          this.forgetPasswordStatus = event;
        } // welcome page to login page

      }, {
        key: "linkLogin",
        value: function linkLogin() {
          this.welcomePageStatus = false;
        } // for user login

      }, {
        key: "login",
        value: function login(value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var loading, rememberValue;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log(this.userType);
                    _context3.next = 3;
                    return this.loadingController.create({
                      spinner: 'bubbles',
                      message: 'Logging in ...'
                    });

                  case 3:
                    loading = _context3.sent;
                    rememberValue = 0;

                    if (value.rememberMe) {
                      rememberValue = 1;
                    }

                    _context3.next = 8;
                    return loading.present();

                  case 8:
                    console.log(value, rememberValue);
                    this.loginAuth.login(value, rememberValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                      return loading.dismiss();
                    })).subscribe(function (data) {
                      // console.log("login data",data);
                      if (data == 'NOTEXISTS') {
                        _this2.showSuccesToast(data);
                      } else {
                        _this2.checkAccountType(data); //this.checkPatientCircleStatus(data);
                        //this.router.navigateByUrl('/pt-profile');
                        //this.router.navigateByUrl('/familymembers');

                      }
                    }, function (err) {
                      console.log(err);

                      _this2.handleError(err);
                    });

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "checkAccountType",
        value: function checkAccountType(tokendata) {
          var _this3 = this;

          var authDetail = this.jwtHelper.decodeToken(tokendata);
          console.log("token data--", authDetail);
          this.authService.getPrimaryUserProfile(authDetail.UID).subscribe(function (data) {
            _this3.patientDetails = data;
            console.log("Patient Details==>", data);
            var accountType = _this3.patientDetails.accountType;

            if (accountType == "Family") {
              _this3.authService.getFamilyMember(_this3.patientDetails.userID).subscribe(function (data) {
                _this3.familyMembers = data;

                if (_this3.familyMembers.length > 0) {
                  _this3.router.navigateByUrl('/familymembers');
                } else {
                  _this3.swasthStorage.setStorage(_this3.LOGINUSER_PROFILE, _this3.patientDetails);

                  _this3.router.navigateByUrl('/pt-profile');
                }
              });
            } else if (accountType == "Normal") {
              _this3.swasthStorage.setStorage(_this3.LOGINUSER_PROFILE, _this3.patientDetails);

              _this3.router.navigateByUrl('/pt-profile');

              _this3.router.navigateByUrl('/pt-profile');
            } else {
              _this3.swasthStorage.setStorage(_this3.LOGINUSER_PROFILE, _this3.patientDetails);

              _this3.router.navigateByUrl('/pt-profile');

              _this3.router.navigateByUrl('/pt-profile');
            }
          });
        }
      }, {
        key: "checkPatientCircleStatus",
        value: function checkPatientCircleStatus(tokendata) {
          var _this4 = this;

          var authDetail = this.jwtHelper.decodeToken(tokendata);
          console.log("token data--", authDetail);
          this.authService.getPtCircleList(authDetail.UID).subscribe(function (data) {
            console.log("res--", data);

            if (data != null) {
              var response = data;

              _this4.router.navigateByUrl('/subscribed-doctor-circle');
            } else {
              _this4.router.navigateByUrl('/select-virtual-hospital');
            }
          });
        }
      }, {
        key: "showSuccesToast",
        value: function showSuccesToast(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastCtrl.create({
                      message: 'Invalid User ID',
                      duration: 3000,
                      position: 'bottom'
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (error.status && error.status === 401) {
                      message = 'Invalid password';
                    } else {
                      message = "Unexpected error: ".concat(error.statusText);
                    }

                    _context5.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 5000,
                      position: 'bottom'
                    });

                  case 3:
                    toast = _context5.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_7__["LoginAuthService"]
      }, {
        type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__["SwasthStorageService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_login_auth_service__WEBPACK_IMPORTED_MODULE_7__["LoginAuthService"], _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__["SwasthStorageService"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.component.scss":
  /*!************************************************!*\
    !*** ./src/app/sign-up/sign-up.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignUpSignUpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".c-card {\n  margin-top: 120px;\n  margin-bottom: 20px;\n  padding: 15px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  border-radius: 15px;\n}\n.c-card > *:last-child {\n  margin-bottom: 0;\n}\n.gender-list {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  background: inherit;\n}\nion-button {\n  width: 100%;\n  --ion-background-color:#0059b3;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9GOlxcc3dhc3RoXFxzd2FzdGh2aXJ0dWFscGF0aWVudC9zcmNcXGFwcFxcc2lnbi11cFxcc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksZ0JBQUE7QUNFUjtBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYy1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICA+ICo6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmdlbmRlci1saXN0IHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAwNTliMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iLCIuYy1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4uYy1jYXJkID4gKjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmdlbmRlci1saXN0IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMwMDU5YjM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sign-up/sign-up.component.ts ***!
    \**********************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(authService, loadingController, toastCtrl, alertCtrl, platform, datepipe) {
        _classCallCheck(this, SignUpComponent);

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

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // signup component to login page

      }, {
        key: "linkLogin",
        value: function linkLogin() {
          this.childStatus.emit(false);
          this.signUpStatus = false;
        } // new user sign up

      }, {
        key: "signup",
        value: function signup(value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this5 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingController.create({
                      spinner: 'bubbles',
                      message: 'Signing up ...'
                    });

                  case 2:
                    loading = _context6.sent;
                    _context6.next = 5;
                    return loading.present();

                  case 5:
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
                    }; // this.pt.addressEntity = {
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

                    this.authService.circlesignup(this.pt).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                      return loading.dismiss();
                    })).subscribe(function (jwt) {
                      return _this5.showSuccesToast(jwt);
                    }, function (err) {
                      return _this5.handleError(err);
                    });

                  case 11:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // toast controller alert

      }, {
        key: "showSuccesToast",
        value: function showSuccesToast(jwt) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this6 = this;

            var alert, toast;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!(jwt !== 'EXISTS')) {
                      _context7.next = 8;
                      break;
                    }

                    _context7.next = 3;
                    return this.alertCtrl.create({
                      header: 'You have successfully registered',
                      message: 'You can log in using your registered mobile number',
                      buttons: [{
                        text: 'OK',
                        handler: function handler() {
                          _this6.childStatus.emit(false);
                        }
                      }]
                    });

                  case 3:
                    alert = _context7.sent;
                    _context7.next = 6;
                    return alert.present();

                  case 6:
                    _context7.next = 13;
                    break;

                  case 8:
                    _context7.next = 10;
                    return this.toastCtrl.create({
                      message: 'Username already registered',
                      duration: 3000,
                      position: 'bottom'
                    });

                  case 10:
                    toast = _context7.sent;
                    _context7.next = 13;
                    return toast.present();

                  case 13:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    message = "Unexpected error occurred";
                    _context8.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 5000,
                      position: 'bottom'
                    });

                  case 3:
                    toast = _context8.sent;
                    _context8.next = 6;
                    return toast.present();

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        } // check confirm password match

      }, {
        key: "checkPassword",
        value: function checkPassword(value, value1) {
          if (value != value1) {
            this.ConfirmPassword = false;
          } else {
            this.ConfirmPassword = true;
          }
        } // calculate age of patient

      }, {
        key: "getAge",
        value: function getAge(dob) {
          //console.log(dob);
          var latest_date = this.datepipe.transform(this.CurrentDate, 'yyyy-MM-dd'); //console.log("Current Date=="+latest_date);

          var dobdate = new Date(dob);
          var dobdate1 = new Date(latest_date); // console.log("Current Date=="+dobdate);
          //current_date=Date.now();

          var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds 

          var timeDiff = Math.round(Math.abs((dobdate1.getTime() - dobdate.getTime()) / oneDay)); //var diffDays = Math.round(Math.abs((dobdate.getTime() - current_date.getTime())/(oneDay)));

          var age = timeDiff / 365;
          this.age1 = Math.floor(age);
          /*console.log("Age=="+(timeDiff/365));*/
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SignUpComponent.prototype, "signUpStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SignUpComponent.prototype, "childStatus", void 0);
    SignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html"))["default"],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sign-up.component.scss */
      "./src/app/sign-up/sign-up.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])], SignUpComponent);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map