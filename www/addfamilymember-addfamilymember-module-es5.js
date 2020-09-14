function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addfamilymember-addfamilymember-module"], {
  /***/
  "./node_modules/Firebase/app/index.js":
  /*!********************************************!*\
    !*** ./node_modules/Firebase/app/index.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseAppIndexJs(module, exports, __webpack_require__) {
    /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    __webpack_require__(
    /*! @firebase/polyfill */
    "./node_modules/@firebase/polyfill/dist/esm/index.js");

    module.exports = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/esm/index.js")["default"];
    /***/
  },

  /***/
  "./node_modules/Firebase/auth/index.js":
  /*!*********************************************!*\
    !*** ./node_modules/Firebase/auth/index.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseAuthIndexJs(module, exports, __webpack_require__) {
    /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    __webpack_require__(
    /*! @firebase/auth */
    "./node_modules/@firebase/auth/dist/auth.js");
    /***/

  },

  /***/
  "./node_modules/Firebase/database/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/Firebase/database/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseDatabaseIndexJs(module, exports, __webpack_require__) {
    /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    module.exports = __webpack_require__(
    /*! @firebase/database */
    "./node_modules/@firebase/database/dist/cjs/index.js");
    /***/
  },

  /***/
  "./node_modules/Firebase/index.js":
  /*!****************************************!*\
    !*** ./node_modules/Firebase/index.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseIndexJs(module, exports, __webpack_require__) {
    /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var firebase = __webpack_require__(
    /*! ./app */
    "./node_modules/Firebase/app/index.js");

    __webpack_require__(
    /*! ./auth */
    "./node_modules/Firebase/auth/index.js");

    __webpack_require__(
    /*! ./database */
    "./node_modules/Firebase/database/index.js");

    __webpack_require__(
    /*! ./messaging */
    "./node_modules/Firebase/messaging/index.js");

    __webpack_require__(
    /*! ./storage */
    "./node_modules/Firebase/storage/index.js");

    module.exports = firebase;
    /***/
  },

  /***/
  "./node_modules/Firebase/messaging/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/Firebase/messaging/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseMessagingIndexJs(module, exports, __webpack_require__) {
    /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    __webpack_require__(
    /*! @firebase/messaging */
    "./node_modules/@firebase/messaging/dist/esm/index.js");
    /***/

  },

  /***/
  "./node_modules/Firebase/storage/index.js":
  /*!************************************************!*\
    !*** ./node_modules/Firebase/storage/index.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseStorageIndexJs(module, exports, __webpack_require__) {
    /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    __webpack_require__(
    /*! @firebase/storage */
    "./node_modules/@firebase/storage/dist/esm/index.js");
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/addfamilymember/addfamilymember.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addfamilymember/addfamilymember.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddfamilymemberAddfamilymemberPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle; padding-left: 15px;\">\n      <ion-title>Swasth</ion-title>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"notifications-outline\" style=\"font-size: 26px; padding-right: 20px;\"></ion-icon>\n      <ion-icon name=\"exit-outline\" style=\"font-size: 26px;\" (click)=\"logout()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"login-grid\">\n    <ion-col size=\"12\" sizeLg=\"8\">\n      <div class=\"c-card\">\n        <h1 class=\"login-logo__text\">Add Family Member</h1>\n        <form #form=\"ngForm\" (ngSubmit)=\"addFamilyMember(form.value)\">\n          <ion-row>\n            <ion-col>\n              <label class=\"c-form__label\" >Key: <span style=\"color:#f53d3d;\">* Fields are mandatory</span></label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"first_name\">First Name<sup>*</sup></label>\n                <input type=\"text\" class=\"c-form__input\" name=\"ptFirstName\" ngModel required #ptFirstName=\"ngModel\"\n                  [class.invalid]=\"ptFirstName.errors && ptFirstName.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"ptFirstName.errors?.required && ptFirstName.dirty\">\n                  First Name is required\n                </ion-item>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"last_name\">Last Name<sup>*</sup></label>\n                <input type=\"text\" class=\"c-form__input\" name=\"ptLastName\" ngModel required #ptLastName=\"ngModel\"\n                  [class.invalid]=\"ptLastName.errors && ptLastName.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"ptLastName.errors?.required && ptLastName.dirty\">\n                  Last Name is required\n                </ion-item>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"dob\">DOB<sup>*</sup></label>\n                <input type=\"date\" class=\"c-form__input\" name=\"ptDob\" displayFormat=\"DD/MM/YYYY\" ngModel required #ptDob=\"ngModel\"\n                  [class.invalid]=\"ptDob.errors && ptDob.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"ptDob.errors?.required && ptDob.dirty\">\n                  Date of birth is required\n                </ion-item>   \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\">Sex<sup>*</sup></label>\n              </div>\n              <ion-list radio-group class=\"gender-list\">\n                <ion-row>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\"><input type=\"radio\" name=\"ptGender\" ngModel required #ptGender=\"ngModel\" class=\"c-form__radio\" value=\"Male\"> Male</label>\n                    </div>\n                  </ion-col>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\"><input type=\"radio\" name=\"ptGender\" ngModel required #ptGender=\"ngModel\" class=\"c-form__radio\" value=\"Female\"> Female</label>\n                    </div>\n                  </ion-col>\n                  <ion-col size size-md  padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\"><input type=\"radio\" name=\"ptGender\" ngModel required #ptGender=\"ngModel\" class=\"c-form__radio\" value=\"Others\"> Others</label>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n              <ion-item class=\"error-message\" *ngIf=\"ptGender.errors?.required && ptGender.dirty\">\n                Gender is required\n              </ion-item>\n            </ion-col>            \n            <ion-col size=\"12\">\n              <div class=\"c-form__field\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">Create an Account</ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </form>\n      </div>\n      <!-- <div class=\"login-paragraph\">\n        <div class=\"login-paragraph__text\">\n          Already have an account? <a (click)=\"linkLogin()\" class=\"login-paragraph__link\">Login</a>\n        </div>\n      </div> -->\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/addfamilymember/addfamilymember-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/addfamilymember/addfamilymember-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AddfamilymemberPageRoutingModule */

  /***/
  function srcAppAddfamilymemberAddfamilymemberRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddfamilymemberPageRoutingModule", function () {
      return AddfamilymemberPageRoutingModule;
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


    var _addfamilymember_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addfamilymember.page */
    "./src/app/addfamilymember/addfamilymember.page.ts");

    var routes = [{
      path: '',
      component: _addfamilymember_page__WEBPACK_IMPORTED_MODULE_3__["AddfamilymemberPage"]
    }];

    var AddfamilymemberPageRoutingModule = function AddfamilymemberPageRoutingModule() {
      _classCallCheck(this, AddfamilymemberPageRoutingModule);
    };

    AddfamilymemberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddfamilymemberPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/addfamilymember/addfamilymember.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/addfamilymember/addfamilymember.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddfamilymemberPageModule */

  /***/
  function srcAppAddfamilymemberAddfamilymemberModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddfamilymemberPageModule", function () {
      return AddfamilymemberPageModule;
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


    var _addfamilymember_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addfamilymember-routing.module */
    "./src/app/addfamilymember/addfamilymember-routing.module.ts");
    /* harmony import */


    var _addfamilymember_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addfamilymember.page */
    "./src/app/addfamilymember/addfamilymember.page.ts");

    var AddfamilymemberPageModule = function AddfamilymemberPageModule() {
      _classCallCheck(this, AddfamilymemberPageModule);
    };

    AddfamilymemberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addfamilymember_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddfamilymemberPageRoutingModule"]],
      declarations: [_addfamilymember_page__WEBPACK_IMPORTED_MODULE_6__["AddfamilymemberPage"]]
    })], AddfamilymemberPageModule);
    /***/
  },

  /***/
  "./src/app/addfamilymember/addfamilymember.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/addfamilymember/addfamilymember.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddfamilymemberAddfamilymemberPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".c-card {\n  margin-top: 120px;\n  margin-bottom: 20px;\n  padding: 15px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  border-radius: 15px;\n}\n.c-card > *:last-child {\n  margin-bottom: 0;\n}\n.gender-list {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  background: inherit;\n}\nion-button {\n  width: 100%;\n  --ion-background-color:#0059b3;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkZmFtaWx5bWVtYmVyL0Y6XFxzd2FzdGhcXHN3YXN0aHZpcnR1YWxwYXRpZW50L3NyY1xcYXBwXFxhZGRmYW1pbHltZW1iZXJcXGFkZGZhbWlseW1lbWJlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGZhbWlseW1lbWJlci9hZGRmYW1pbHltZW1iZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksZ0JBQUE7QUNFUjtBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGRmYW1pbHltZW1iZXIvYWRkZmFtaWx5bWVtYmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgID4gKjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZ2VuZGVyLWxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMDA1OWIzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSIsIi5jLWNhcmQge1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5jLWNhcmQgPiAqOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZ2VuZGVyLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAwNTliMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/addfamilymember/addfamilymember.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/addfamilymember/addfamilymember.page.ts ***!
    \*********************************************************/

  /*! exports provided: AddfamilymemberPage */

  /***/
  function srcAppAddfamilymemberAddfamilymemberPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddfamilymemberPage", function () {
      return AddfamilymemberPage;
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
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../storage/swasth-storage.service */
    "./src/app/storage/swasth-storage.service.ts");
    /* harmony import */


    var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/login-auth.service */
    "./src/app/services/login-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var Firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! Firebase */
    "./node_modules/Firebase/index.js");
    /* harmony import */


    var Firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_11__);

    var AddfamilymemberPage = /*#__PURE__*/function () {
      function AddfamilymemberPage(authService, loadingController, toastCtrl, alertCtrl, platform, datepipe, jwtHelper, swStorage, loginAuth, storage, router) {
        _classCallCheck(this, AddfamilymemberPage);

        this.authService = authService;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.datepipe = datepipe;
        this.swStorage = swStorage;
        this.loginAuth = loginAuth;
        this.storage = storage;
        this.router = router;
        this.ConfirmPassword = [];
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.familyMemberObj = {};
        this.familyMembersDetails = {};
        this.newLogin = "";
        this.ref = Firebase__WEBPACK_IMPORTED_MODULE_11__["database"]().ref('chatrooms/');
        this.data = {
          roomname: ''
        };
        this.signUpStatus = true;
        this.childStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ConfirmPassword = true;
        this.CurrentDate = new Date(); // this.authService
        // .authUser
        // .subscribe(jwt => {
        //   if (jwt) {
        //     const decoded = jwtHelper.decodeToken(jwt);
        //     this.user = decoded;
        //     this.userType=decoded.type;
        //     this.tenantID=decoded.TenantID;
        //     console.log(this.user); 
        //     this.primaryUser=decoded.UID;        
        //     this.familymemberId=decoded.UID;   
        //   }
        //   else {
        //     this.user = null;
        //   }
        // }); 
      }

      _createClass(AddfamilymemberPage, [{
        key: "addFamilyMember",
        value: function addFamilyMember(value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(value);
                    _context.next = 3;
                    return this.loadingController.create({
                      spinner: 'bubbles',
                      message: 'Signing up ...'
                    });

                  case 3:
                    loading = _context.sent;
                    _context.next = 6;
                    return loading.present();

                  case 6:
                    this.familyMemberFullName = value.ptFirstName + " " + value.ptLastName;
                    this.familyMemberObj.ptFirstName = value.ptFirstName;
                    this.familyMemberObj.ptLastName = value.ptLastName;
                    this.familyMemberObj.ptDob = value.ptDob;
                    this.familyMemberObj.ptGender = value.ptGender;
                    this.familyMemberObj.createdByUserID = this.userdetail.userID;
                    this.familyMemberObj.createdDateTime = new Date();
                    this.familyMemberObj.status = "Active";
                    console.log("Add Family Member Object==>", this.familyMemberObj);
                    this.authService.addFamilyMember(this.familyMemberObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                      return loading.dismiss();
                    })).subscribe(function (jwt) {
                      return _this.showSuccesToast(jwt);
                    }, function (err) {
                      return _this.handleError(err);
                    });

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // toast controller alert

      }, {
        key: "showSuccesToast",
        value: function showSuccesToast(jwt) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var newData, addCircleObj, createPtChatObj, chatRestrictSubscribeObj;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (jwt != null) {
                      this.chatRoomName = this.circleAdminDocDetails.docFirstName + " " + this.circleAdminDocDetails.docLastName + "-" + this.familyMemberFullName + " " + this.myRand;
                      newData = this.ref.push();
                      newData.set({
                        roomname: this.chatRoomName
                      });
                      this.currentroomKey = newData.key;
                      addCircleObj = {
                        userID: jwt,
                        circleCode: this.familyMemberCircleCode,
                        createdDateTime: new Date(),
                        subscribePlanId: "1",
                        status: "Active",
                        subscriptionType: this.userdetail.accountType,
                        userType: "Secondary"
                      };
                      createPtChatObj = {
                        circleCode: this.familyMemberCircleCode,
                        circleName: this.familyPrimaryMemberCircleDetails.circleName,
                        docUserID: this.circleAdminDocDetails.docUserID,
                        patientUserID: jwt,
                        patientName: this.familyMemberFullName,
                        createdByDateTime: new Date(),
                        videoCallLink: this.url,
                        status: "Deactive",
                        doctorName: this.circleAdminDocDetails.docFirstName + " " + this.circleAdminDocDetails.docLastName,
                        chatRoomName: this.chatRoomName,
                        chatRoomKey: this.currentroomKey
                      };
                      chatRestrictSubscribeObj = {
                        userID: jwt,
                        subscriptionId: this.chatRestictionDetails.subscriptionId,
                        subscriptionFromDate: this.chatRestictionDetails.subscriptionFromDate,
                        subscriptionToDate: this.chatRestictionDetails.subscriptionToDate,
                        paymentId: this.chatRestictionDetails.paymentId,
                        circleCode: this.chatRestictionDetails.circleCode,
                        createdByUserId: this.userdetail.userID,
                        createdDateTime: new Date(),
                        status: "Deactive",
                        chatCount: 0,
                        subscriptionType: this.chatRestictionDetails.subscriptionType,
                        chatRequestCount: 0
                      };
                      console.log("addcircle", addCircleObj);
                      console.log("createchat", createPtChatObj);
                      console.log("createchatrestriction", chatRestrictSubscribeObj);
                      this.authService.createChatRestriction(chatRestrictSubscribeObj).subscribe(function (data) {
                        console.log("success restriction", data);
                      });
                      this.authService.addPtToCircle(addCircleObj).subscribe(function (data) {
                        console.log("data", data);

                        if (data != null) {
                          createPtChatObj.chatRoomKey = _this2.currentroomKey;

                          _this2.authService.createPtChat(createPtChatObj).subscribe(function (data1) {
                            console.log("data1", data1);

                            if (data1 != null) {
                              _this2.router.navigateByUrl('familymembers');
                            }
                          });
                        }
                      });
                    } // console.log("Response Message======"+jwt);
                    // if (jwt !== 'EXISTS') {      
                    //   let alert = await this.alertCtrl.create({
                    //     header: 'You have successfully registered',
                    //     message: 'This is your UID <b>'+jwt+'<b><br/><br/> Please make a note of this or else you will not be able to log in.',
                    //     buttons: [{
                    //       text: 'OK', 
                    //       handler: () => {              
                    //         this.childStatus.emit(false);
                    //       }
                    //     }]
                    //   });
                    //await alert.present();

                    /*const toast = this.toastCtrl.create({
                      message: 'Sign up successful',
                      duration: 3000,
                      position: 'bottom'
                    });
                    toast.present();*/
                    // }    
                    // else {
                    //   const toast = await this.toastCtrl.create({
                    //     message: 'Username already registered',
                    //     duration: 3000,
                    //     position: 'bottom'
                    //   });
                    //   await toast.present();
                    //   // this.usernameModel.control.setErrors({'usernameTaken': true});
                    // }


                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    message = "Unexpected error occurred";
                    _context3.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 5000,
                      position: 'bottom'
                    });

                  case 3:
                    toast = _context3.sent;
                    _context3.next = 6;
                    return toast.present();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(function (data) {
            _this3.userdetail = data;

            if (_this3.userdetail != undefined || _this3.userdetail != null) {
              _this3.authService.getCircleCode(_this3.userdetail.userID, _this3.userdetail.accountType).subscribe(function (data) {
                if (data != null) {
                  _this3.familyMemberCircleCode = data;
                  console.log("Circle Code==>", _this3.familyMemberCircleCode);

                  _this3.authService.getCircleEntity(_this3.familyMemberCircleCode).subscribe(function (data) {
                    _this3.familyPrimaryMemberCircleDetails = data;
                    console.log("Circle Details==>", _this3.familyPrimaryMemberCircleDetails);

                    _this3.authService.getDoctorProfile(_this3.familyPrimaryMemberCircleDetails.createdByUserId).subscribe(function (data) {
                      _this3.circleAdminDocDetails = data;
                      console.log("Circle Admin Doctor Details==>", _this3.circleAdminDocDetails);
                    });
                  });
                }

                var chatObj = {
                  userID: _this3.userdetail.userID,
                  circleCode: _this3.familyMemberCircleCode
                };
                console.log("Chattttt Obj==>", chatObj);

                _this3.authService.getChatRestrictDetail(chatObj).subscribe(function (data) {
                  _this3.chatRestictionDetails = data;
                  console.log("Chat Restriction Details==>", _this3.chatRestictionDetails);
                });
              });
            }
          });
          this.randomString = Math.random().toString(36).substring(7);
          console.log("Random String==>", this.randomString);
          this.url = "https://meet.jit.si/" + this.randomString;
          this.myRand = this.random();
        } // check confirm password match

      }, {
        key: "checkPassword",
        value: function checkPassword(value, value1) {
          if (value != value1) {
            this.ConfirmPassword = false;
          } else {
            this.ConfirmPassword = true;
          }
        }
      }, {
        key: "random",
        value: function random() {
          var rand = Math.floor(Math.random() * 20000) + 1;
          return rand;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginAuth.logout();
        }
      }]);

      return AddfamilymemberPage;
    }();

    AddfamilymemberPage.ctorParameters = function () {
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
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]
      }, {
        type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__["SwasthStorageService"]
      }, {
        type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_9__["LoginAuthService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddfamilymemberPage.prototype, "signUpStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddfamilymemberPage.prototype, "childStatus", void 0);
    AddfamilymemberPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addfamilymember',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addfamilymember.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/addfamilymember/addfamilymember.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addfamilymember.page.scss */
      "./src/app/addfamilymember/addfamilymember.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"], _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__["SwasthStorageService"], _services_login_auth_service__WEBPACK_IMPORTED_MODULE_9__["LoginAuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])], AddfamilymemberPage);
    /***/
  }
}]);
//# sourceMappingURL=addfamilymember-addfamilymember-module-es5.js.map