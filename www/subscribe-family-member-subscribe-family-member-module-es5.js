function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscribe-family-member-subscribe-family-member-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe-family-member/subscribe-family-member.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe-family-member/subscribe-family-member.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubscribeFamilyMemberSubscribeFamilyMemberPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle; padding-left: 15px;\">\n      <ion-title>Swasth</ion-title>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"exit-outline\" style=\"font-size: 26px;\" (click)=\"logout()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"c-form__field\">\n        <ion-button (click)=\"goFamilyMembers()\">Switch Profile</ion-button>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"login-grid\">\n    <ion-col size=\"12\" sizeLg=\"8\">\n      <div class=\"c-card\">\n        <form #form=\"ngForm\" (ngSubmit)=\"addFamilyMember(form.value)\" novalidate>\n\n          <!-- Family Member 1-->          \n            <ion-row>\n              <ion-col size=\"12\">\n                <h1 class=\"login-logo__text\">Family Member 1</h1>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <label class=\"c-form__label\">Key: <span style=\"color:#f53d3d;\">* Fields are mandatory</span></label>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"border: 1px solid #000000\">\n              <ion-col size=\"12\" sizeMd=\"6\">\n                <div class=\"c-form__field\">\n                  <label class=\"c-form__label\" for=\"first_name\">First Name<sup>*</sup></label>\n                  <input type=\"text\" class=\"c-form__input\" name=\"fmlist.member1.ptFirstName\" [(ngModel)]=fmlist.member1.ptFirstName\n                    [class.invalid]=\"fmlist.member1.ptFirstName.errors && fmlist.member1.ptFirstName.dirty\">\n                  <ion-item class=\"error-message\" *ngIf=\"fmlist.member1.ptFirstName.errors?.required && fmlist.member1.ptFirstName.dirty\">\n                    First Name is required\n                  </ion-item>                  \n                </div>\n              </ion-col>\n              <ion-col size=\"12\" sizeMd=\"6\">\n                <div class=\"c-form__field\">\n                  <label class=\"c-form__label\" for=\"last_name\">Last Name<sup>*</sup></label>\n                  <input type=\"text\" class=\"c-form__input\" name=\"fmlist.member1.ptLastName\" [(ngModel)]=fmlist.member1.ptLastName\n                    [class.invalid]=\"fmlist.member1.ptLastName.errors && fmlist.member1.ptLastName.dirty\">\n                  <ion-item class=\"error-message\" *ngIf=\"fmlist.member1.ptLastName.errors?.required && fmlist.member1.ptLastName.dirty\">\n                    Last Name is required\n                  </ion-item>                  \n                </div>\n              </ion-col>\n              <ion-col size=\"12\" sizeMd=\"6\">\n                <div class=\"c-form__field\">\n                  <label class=\"c-form__label\" for=\"dob\">DOB<sup>*</sup></label>\n                  <input type=\"date\" class=\"c-form__input\" name=\"fmlist.member1.ptDob\" displayFormat=\"DD/MM/YYYY\" [(ngModel)]=fmlist.member1.ptDob [class.invalid]=\"fmlist.member1.ptDob.errors && ptDob.dirty\">\n                  <ion-item class=\"error-message\" *ngIf=\"fmlist.member1.ptDob.errors?.required && fmlist.member1.ptDob.dirty\">\n                    Date of birth is required\n                  </ion-item>\n                  \n                </div>\n              </ion-col>\n              <ion-col size=\"12\" sizeMd=\"6\">\n                <div class=\"c-form__field\">\n                  <label class=\"c-form__label\">Sex<sup>*</sup></label>\n                </div>\n                <ion-list radio-group class=\"gender-list\">\n                  <ion-row>\n                    <ion-col size size-md padding-right>\n                      <div class=\"c-form__field\">\n                        <label class=\"c-form__label\">\n                          <input type=\"radio\" name=\"fmlist.member1.ptGender\" [(ngModel)]=fmlist.member1.ptGender\n                            class=\"c-form__radio\" value=\"Male\"> Male</label>                            \n                      </div>\n                    </ion-col>\n                    <ion-col size size-md padding-right>\n                      <div class=\"c-form__field\">\n                        <label class=\"c-form__label\">\n                          <input type=\"radio\" name=\"fmlist.member1.ptGender\" [(ngModel)]=fmlist.member1.ptGender\n                            class=\"c-form__radio\" value=\"Female\"> Female</label>                            \n                      </div>\n                    </ion-col>\n                    <ion-col size size-md padding-right>\n                      <div class=\"c-form__field\">\n                        <label class=\"c-form__label\">\n                          <input type=\"radio\" name=\"fmlist.member1.ptGender\" [(ngModel)]=fmlist.member1.ptGender\n                            class=\"c-form__radio\" value=\"Others\"> Others</label>                            \n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-list>\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member1.ptGender.errors?.required && fmlist.member1.ptGender.dirty\">\n                  Gender is required\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          <!-- Family Member 1-->\n          <!-- Family Member 2-->\n          <ion-row>\n            <ion-col size=\"12\">\n              <h1 class=\"login-logo__text\">Family Member 2</h1>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"border: 1px solid #000000\">\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"first_name\">First Name<sup>*</sup></label>\n                <input type=\"text\" class=\"c-form__input\" name=\"fmlist.member2.ptFirstName\" [(ngModel)]=fmlist.member2.ptFirstName\n                  [class.invalid]=\"fmlist.member2.ptFirstName.errors && fmlist.member2.ptFirstName.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member2.ptFirstName.errors?.required && fmlist.member2.ptFirstName.dirty\">\n                  First Name is required\n                </ion-item>                  \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"last_name\">Last Name<sup>*</sup></label>\n                <input type=\"text\" class=\"c-form__input\" name=\"fmlist.member2.ptLastName\" [(ngModel)]=fmlist.member2.ptLastName\n                  [class.invalid]=\"fmlist.member2.ptLastName.errors && fmlist.member2.ptLastName.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member2.ptLastName.errors?.required && fmlist.member2.ptLastName.dirty\">\n                  Last Name is required\n                </ion-item>                  \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"dob\">DOB<sup>*</sup></label>\n                <input type=\"date\" class=\"c-form__input\" name=\"fmlist.member2.ptDob\" displayFormat=\"DD/MM/YYYY\" [(ngModel)]=fmlist.member2.ptDob [class.invalid]=\"fmlist.member1.ptDob.errors && ptDob.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member2.ptDob.errors?.required && fmlist.member2.ptDob.dirty\">\n                  Date of birth is required\n                </ion-item>\n                \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\">Sex<sup>*</sup></label>\n              </div>\n              <ion-list radio-group class=\"gender-list\">\n                <ion-row>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\">\n                        <input type=\"radio\" name=\"fmlist.member2.ptGender\" [(ngModel)]=fmlist.member2.ptGender\n                          class=\"c-form__radio\" value=\"Male\"> Male</label>                            \n                    </div>\n                  </ion-col>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\">\n                        <input type=\"radio\" name=\"fmlist.member2.ptGender\" [(ngModel)]=fmlist.member2.ptGender\n                          class=\"c-form__radio\" value=\"Female\"> Female</label>                            \n                    </div>\n                  </ion-col>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\">\n                        <input type=\"radio\" name=\"fmlist.member2.ptGender\" [(ngModel)]=fmlist.member2.ptGender\n                          class=\"c-form__radio\" value=\"Others\"> Others</label>                            \n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n              <ion-item class=\"error-message\" *ngIf=\"fmlist.member2.ptGender.errors?.required && fmlist.member2.ptGender.dirty\">\n                Gender is required\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Family Member 2-->\n          <!-- Family Member 3-->\n          <ion-row>\n            <ion-col size=\"12\">\n              <h1 class=\"login-logo__text\">Family Member 3</h1>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <label class=\"c-form__label\" >Key: <span style=\"color:#f53d3d;\">* Fields are mandatory</span></label>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"border: 1px solid #000000\">\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"first_name\">First Name<sup>*</sup></label>\n                <input type=\"text\" class=\"c-form__input\" name=\"fmlist.member3.ptFirstName\" [(ngModel)]=fmlist.member3.ptFirstName\n                  [class.invalid]=\"fmlist.member3.ptFirstName.errors && fmlist.member1.ptFirstName.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member3.ptFirstName.errors?.required && fmlist.member3.ptFirstName.dirty\">\n                  First Name is required\n                </ion-item>                  \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"last_name\">Last Name<sup>*</sup></label>\n                <input type=\"text\" class=\"c-form__input\" name=\"fmlist.member3.ptLastName\" [(ngModel)]=fmlist.member3.ptLastName\n                  [class.invalid]=\"fmlist.member3.ptLastName.errors && fmlist.member3.ptLastName.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member3.ptLastName.errors?.required && fmlist.member3.ptLastName.dirty\">\n                  Last Name is required\n                </ion-item>                  \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"dob\">DOB<sup>*</sup></label>\n                <input type=\"date\" class=\"c-form__input\" name=\"fmlist.member3.ptDob\" displayFormat=\"DD/MM/YYYY\" [(ngModel)]=fmlist.member3.ptDob [class.invalid]=\"fmlist.member1.ptDob.errors && ptDob.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member3.ptDob.errors?.required && fmlist.member3.ptDob.dirty\">\n                  Date of birth is required\n                </ion-item>\n                \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\">Sex<sup>*</sup></label>\n              </div>\n              <ion-list radio-group class=\"gender-list\">\n                <ion-row>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\">\n                        <input type=\"radio\" name=\"fmlist.member3.ptGender\" [(ngModel)]=fmlist.member3.ptGender\n                          class=\"c-form__radio\" value=\"Male\"> Male</label>                            \n                    </div>\n                  </ion-col>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\">\n                        <input type=\"radio\" name=\"fmlist.member3.ptGender\" [(ngModel)]=fmlist.member3.ptGender\n                          class=\"c-form__radio\" value=\"Female\"> Female</label>                            \n                    </div>\n                  </ion-col>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\">\n                        <input type=\"radio\" name=\"fmlist.member3.ptGender\" [(ngModel)]=fmlist.member3.ptGender\n                          class=\"c-form__radio\" value=\"Others\"> Others</label>                            \n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n              <ion-item class=\"error-message\" *ngIf=\"fmlist.member3.ptGender.errors?.required && fmlist.member3.ptGender.dirty\">\n                Gender is required\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row>\n            <ion-col>\n              <label class=\"c-form__label\" >Key: <span style=\"color:#f53d3d;\">* Fields are mandatory</span></label>\n            </ion-col>\n          </ion-row>-->\n          <!--Family Member 3-->\n          <ion-row>\n            <ion-col size=\"12\">\n              <div class=\"c-form__field\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">Save</ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </form>\n      </div>\n      <div class=\"login-paragraph\">\n        <div class=\"login-paragraph__text\">\n          Skip now? <a (click)=\"goSubscribedNetwork()\" class=\"login-paragraph__link\">Skip</a> Add Later!\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/subscribe-family-member/subscribe-family-member-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/subscribe-family-member/subscribe-family-member-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: SubscribeFamilyMemberPageRoutingModule */

  /***/
  function srcAppSubscribeFamilyMemberSubscribeFamilyMemberRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribeFamilyMemberPageRoutingModule", function () {
      return SubscribeFamilyMemberPageRoutingModule;
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


    var _subscribe_family_member_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./subscribe-family-member.page */
    "./src/app/subscribe-family-member/subscribe-family-member.page.ts");

    var routes = [{
      path: '',
      component: _subscribe_family_member_page__WEBPACK_IMPORTED_MODULE_3__["SubscribeFamilyMemberPage"]
    }];

    var SubscribeFamilyMemberPageRoutingModule = function SubscribeFamilyMemberPageRoutingModule() {
      _classCallCheck(this, SubscribeFamilyMemberPageRoutingModule);
    };

    SubscribeFamilyMemberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SubscribeFamilyMemberPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/subscribe-family-member/subscribe-family-member.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/subscribe-family-member/subscribe-family-member.module.ts ***!
    \***************************************************************************/

  /*! exports provided: SubscribeFamilyMemberPageModule */

  /***/
  function srcAppSubscribeFamilyMemberSubscribeFamilyMemberModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribeFamilyMemberPageModule", function () {
      return SubscribeFamilyMemberPageModule;
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


    var _subscribe_family_member_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./subscribe-family-member-routing.module */
    "./src/app/subscribe-family-member/subscribe-family-member-routing.module.ts");
    /* harmony import */


    var _subscribe_family_member_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./subscribe-family-member.page */
    "./src/app/subscribe-family-member/subscribe-family-member.page.ts");

    var SubscribeFamilyMemberPageModule = function SubscribeFamilyMemberPageModule() {
      _classCallCheck(this, SubscribeFamilyMemberPageModule);
    };

    SubscribeFamilyMemberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _subscribe_family_member_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscribeFamilyMemberPageRoutingModule"]],
      declarations: [_subscribe_family_member_page__WEBPACK_IMPORTED_MODULE_6__["SubscribeFamilyMemberPage"]]
    })], SubscribeFamilyMemberPageModule);
    /***/
  },

  /***/
  "./src/app/subscribe-family-member/subscribe-family-member.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/subscribe-family-member/subscribe-family-member.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSubscribeFamilyMemberSubscribeFamilyMemberPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZS1mYW1pbHktbWVtYmVyL3N1YnNjcmliZS1mYW1pbHktbWVtYmVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/subscribe-family-member/subscribe-family-member.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/subscribe-family-member/subscribe-family-member.page.ts ***!
    \*************************************************************************/

  /*! exports provided: SubscribeFamilyMemberPage */

  /***/
  function srcAppSubscribeFamilyMemberSubscribeFamilyMemberPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribeFamilyMemberPage", function () {
      return SubscribeFamilyMemberPage;
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
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SubscribeFamilyMemberPage = /*#__PURE__*/function () {
      function SubscribeFamilyMemberPage(authService, loadingController, toastCtrl, alertCtrl, platform, datepipe, jwtHelper, swStorage, loginAuth, storage, router, http) {
        _classCallCheck(this, SubscribeFamilyMemberPage);

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
        this.http = http;
        this.ConfirmPassword = [];
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.familyMemberObj = {};
        this.familyMembersDetails = {};
        this.newLogin = "";
        this.ref = Firebase__WEBPACK_IMPORTED_MODULE_11__["database"]().ref('chatrooms/');
        this.data = {
          roomname: ''
        };
        this.familyMemberCount = 0;
        this.resultCount = 0;
        this.fmlist = {
          member1: {
            ptFirstName: "",
            ptLastName: "",
            ptDob: "",
            ptGender: ""
          },
          member2: {
            ptFirstName: "",
            ptLastName: "",
            ptDob: "",
            ptGender: ""
          },
          member3: {
            ptFirstName: "",
            ptLastName: "",
            ptDob: "",
            ptGender: ""
          }
        };
        this.familyMemberLst = [];
        this.ConfirmPassword = true;
        this.CurrentDate = new Date(); // this.randomString = Math.random().toString(36).substring(7);
        // console.log("Random String==>", this.randomString);
        // this.url = "https://meet.jit.si/" + this.randomString;

        this.myRand = this.random();
      }

      _createClass(SubscribeFamilyMemberPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addFamilyMember",
        value: function addFamilyMember(value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading, fmObject, newData, _fmObject, _newData, _fmObject2, _newData2;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("Form Value", value);
                    console.log("Object Value", this.fmlist);
                    _context.next = 4;
                    return this.loadingController.create({
                      spinner: 'bubbles',
                      message: 'Signing up ...'
                    });

                  case 4:
                    loading = _context.sent;
                    _context.next = 7;
                    return loading.present();

                  case 7:
                    if (this.fmlist.member1.ptFirstName != "") {
                      fmObject = {
                        familyMemberobj: {},
                        addCircleObj: {},
                        createPtChatObj: {},
                        chatRestriction: {}
                      };
                      this.randomString = Math.random().toString(36).substring(7);
                      console.log("Random String==>", this.randomString);
                      this.url1 = "https://meet.jit.si/" + this.randomString;
                      fmObject.familyMemberobj.ptFirstName = this.fmlist.member1.ptFirstName;
                      fmObject.familyMemberobj.ptLastName = this.fmlist.member1.ptLastName;
                      fmObject.familyMemberobj.ptDob = this.fmlist.member1.ptDob;
                      fmObject.familyMemberobj.ptGender = this.fmlist.member1.ptGender;
                      fmObject.familyMemberobj.createdByUserID = this.userdetail.userID;
                      fmObject.familyMemberobj.createdDateTime = new Date();
                      fmObject.familyMemberobj.status = "Active";
                      fmObject.addCircleObj.userID = "memberuserid";
                      fmObject.addCircleObj.circleCode = this.familyMemberCircleCode;
                      fmObject.addCircleObj.createdDateTime = new Date();
                      fmObject.addCircleObj.subscribePlanId = "1";
                      fmObject.addCircleObj.status = "Active";
                      fmObject.addCircleObj.subscriptionType = this.userdetail.accountType;
                      fmObject.addCircleObj.userType = "Secondary";
                      this.chatRoomName = this.circleAdminDocDetails.docFirstName + " " + this.circleAdminDocDetails.docLastName + "-" + this.familyMemberFullName + " " + this.myRand;
                      newData = this.ref.push();
                      newData.set({
                        roomname: this.chatRoomName
                      });
                      this.currentroomKey = newData.key;
                      fmObject.createPtChatObj.circleCode = this.familyMemberCircleCode;
                      fmObject.createPtChatObj.circleName = this.familyPrimaryMemberCircleDetails.circleName;
                      fmObject.createPtChatObj.docUserID = this.circleAdminDocDetails.docUserID;
                      fmObject.createPtChatObj.patientUserID = "memberuserid";
                      fmObject.createPtChatObj.patientName = this.fmlist.member1.ptFirstName + " " + this.fmlist.member1.ptLastName;
                      fmObject.createPtChatObj.createdByDateTime = new Date();
                      fmObject.createPtChatObj.videoCallLink = this.url1;
                      fmObject.createPtChatObj.status = "Deactive";
                      fmObject.createPtChatObj.doctorName = this.circleAdminDocDetails.docFirstName + " " + this.circleAdminDocDetails.docLastName;
                      fmObject.createPtChatObj.chatRoomName = this.chatRoomName;
                      fmObject.createPtChatObj.chatRoomKey = this.currentroomKey;
                      fmObject.chatRestriction.userID = "userid";
                      fmObject.chatRestriction.subscriptionId = this.chatRestictionDetails.subscriptionId;
                      fmObject.chatRestriction.subscriptionFromDate = this.chatRestictionDetails.subscriptionFromDate;
                      fmObject.chatRestriction.subscriptionToDate = this.chatRestictionDetails.subscriptionToDate;
                      fmObject.chatRestriction.paymentId = this.chatRestictionDetails.paymentId;
                      fmObject.chatRestriction.circleCode = this.chatRestictionDetails.circleCode;
                      fmObject.chatRestriction.createdByUserId = this.chatRestictionDetails.createdByUserId;
                      fmObject.chatRestriction.createdDateTime = new Date();
                      fmObject.chatRestriction.status = "Deactive";
                      fmObject.chatRestriction.chatCount = 0;
                      fmObject.chatRestriction.subscriptionType = this.chatRestictionDetails.subscriptionType;
                      fmObject.chatRestriction.chatRequestCount = 0;
                      this.familyMemberLst.push(fmObject);
                    }

                    if (this.fmlist.member2.ptFirstName != "") {
                      _fmObject = {
                        familyMemberobj: {},
                        addCircleObj: {},
                        createPtChatObj: {},
                        chatRestriction: {}
                      };
                      this.randomString = Math.random().toString(36).substring(7);
                      console.log("Random String==>", this.randomString);
                      this.url1 = "https://meet.jit.si/" + this.randomString;
                      _fmObject.familyMemberobj.ptFirstName = this.fmlist.member2.ptFirstName;
                      _fmObject.familyMemberobj.ptLastName = this.fmlist.member2.ptLastName;
                      _fmObject.familyMemberobj.ptDob = this.fmlist.member2.ptDob;
                      _fmObject.familyMemberobj.ptGender = this.fmlist.member2.ptGender;
                      _fmObject.familyMemberobj.createdByUserID = this.userdetail.userID;
                      _fmObject.familyMemberobj.createdDateTime = new Date();
                      _fmObject.familyMemberobj.status = "Active";
                      _fmObject.addCircleObj.userID = "memberuserid";
                      _fmObject.addCircleObj.circleCode = this.familyMemberCircleCode;
                      _fmObject.addCircleObj.createdDateTime = new Date();
                      _fmObject.addCircleObj.subscribePlanId = "1";
                      _fmObject.addCircleObj.status = "Active";
                      _fmObject.addCircleObj.subscriptionType = this.userdetail.accountType;
                      _fmObject.addCircleObj.userType = "Secondary";
                      this.chatRoomName = this.circleAdminDocDetails.docFirstName + " " + this.circleAdminDocDetails.docLastName + "-" + this.familyMemberFullName + " " + this.myRand;
                      _newData = this.ref.push();

                      _newData.set({
                        roomname: this.chatRoomName
                      });

                      this.currentroomKey = _newData.key;
                      _fmObject.createPtChatObj.circleCode = this.familyMemberCircleCode;
                      _fmObject.createPtChatObj.circleName = this.familyPrimaryMemberCircleDetails.circleName;
                      _fmObject.createPtChatObj.docUserID = this.circleAdminDocDetails.docUserID;
                      _fmObject.createPtChatObj.patientUserID = "memberuserid";
                      _fmObject.createPtChatObj.patientName = this.fmlist.member2.ptFirstName + " " + this.fmlist.member2.ptLastName;
                      _fmObject.createPtChatObj.createdByDateTime = new Date();
                      _fmObject.createPtChatObj.videoCallLink = this.url1;
                      _fmObject.createPtChatObj.status = "Deactive";
                      _fmObject.createPtChatObj.doctorName = this.circleAdminDocDetails.docFirstName + " " + this.circleAdminDocDetails.docLastName;
                      _fmObject.createPtChatObj.chatRoomName = this.chatRoomName;
                      _fmObject.createPtChatObj.chatRoomKey = this.currentroomKey;
                      _fmObject.chatRestriction.userID = "userid";
                      _fmObject.chatRestriction.subscriptionId = this.chatRestictionDetails.subscriptionId;
                      _fmObject.chatRestriction.subscriptionFromDate = this.chatRestictionDetails.subscriptionFromDate;
                      _fmObject.chatRestriction.subscriptionToDate = this.chatRestictionDetails.subscriptionToDate;
                      _fmObject.chatRestriction.paymentId = this.chatRestictionDetails.paymentId;
                      _fmObject.chatRestriction.circleCode = this.chatRestictionDetails.circleCode;
                      _fmObject.chatRestriction.createdByUserId = this.chatRestictionDetails.createdByUserId;
                      _fmObject.chatRestriction.createdDateTime = new Date();
                      _fmObject.chatRestriction.status = "Deactive";
                      _fmObject.chatRestriction.chatCount = 0;
                      _fmObject.chatRestriction.subscriptionType = this.chatRestictionDetails.subscriptionType;
                      _fmObject.chatRestriction.chatRequestCount = 0;
                      this.familyMemberLst.push(_fmObject);
                    }

                    if (this.fmlist.member3.ptFirstName != "") {
                      _fmObject2 = {
                        familyMemberobj: {},
                        addCircleObj: {},
                        createPtChatObj: {},
                        chatRestriction: {}
                      };
                      this.randomString = Math.random().toString(36).substring(7);
                      console.log("Random String==>", this.randomString);
                      this.url1 = "https://meet.jit.si/" + this.randomString;
                      _fmObject2.familyMemberobj.ptFirstName = this.fmlist.member3.ptFirstName;
                      _fmObject2.familyMemberobj.ptLastName = this.fmlist.member3.ptLastName;
                      _fmObject2.familyMemberobj.ptDob = this.fmlist.member3.ptDob;
                      _fmObject2.familyMemberobj.ptGender = this.fmlist.member3.ptGender;
                      _fmObject2.familyMemberobj.createdByUserID = this.userdetail.userID;
                      _fmObject2.familyMemberobj.createdDateTime = new Date();
                      _fmObject2.familyMemberobj.status = "Active";
                      _fmObject2.addCircleObj.userID = "memberuserid";
                      _fmObject2.addCircleObj.circleCode = this.familyMemberCircleCode;
                      _fmObject2.addCircleObj.createdDateTime = new Date();
                      _fmObject2.addCircleObj.subscribePlanId = "1";
                      _fmObject2.addCircleObj.status = "Active";
                      _fmObject2.addCircleObj.subscriptionType = this.userdetail.accountType;
                      _fmObject2.addCircleObj.userType = "Secondary";
                      this.chatRoomName = this.circleAdminDocDetails.docFirstName + " " + this.circleAdminDocDetails.docLastName + "-" + this.familyMemberFullName + " " + this.myRand;
                      _newData2 = this.ref.push();

                      _newData2.set({
                        roomname: this.chatRoomName
                      });

                      this.currentroomKey = _newData2.key;
                      _fmObject2.createPtChatObj.circleCode = this.familyMemberCircleCode;
                      _fmObject2.createPtChatObj.circleName = this.familyPrimaryMemberCircleDetails.circleName;
                      _fmObject2.createPtChatObj.docUserID = this.circleAdminDocDetails.docUserID;
                      _fmObject2.createPtChatObj.patientUserID = "memberuserid";
                      _fmObject2.createPtChatObj.patientName = this.fmlist.member3.ptFirstName + " " + this.fmlist.member3.ptLastName;
                      _fmObject2.createPtChatObj.createdByDateTime = new Date();
                      _fmObject2.createPtChatObj.videoCallLink = this.url1;
                      _fmObject2.createPtChatObj.status = "Deactive";
                      _fmObject2.createPtChatObj.doctorName = this.circleAdminDocDetails.docFirstName + " " + this.circleAdminDocDetails.docLastName;
                      _fmObject2.createPtChatObj.chatRoomName = this.chatRoomName;
                      _fmObject2.createPtChatObj.chatRoomKey = this.currentroomKey;
                      _fmObject2.chatRestriction.userID = "userid";
                      _fmObject2.chatRestriction.subscriptionId = this.chatRestictionDetails.subscriptionId;
                      _fmObject2.chatRestriction.subscriptionFromDate = this.chatRestictionDetails.subscriptionFromDate;
                      _fmObject2.chatRestriction.subscriptionToDate = this.chatRestictionDetails.subscriptionToDate;
                      _fmObject2.chatRestriction.paymentId = this.chatRestictionDetails.paymentId;
                      _fmObject2.chatRestriction.circleCode = this.chatRestictionDetails.circleCode;
                      _fmObject2.chatRestriction.createdByUserId = this.chatRestictionDetails.createdByUserId;
                      _fmObject2.chatRestriction.createdDateTime = new Date();
                      _fmObject2.chatRestriction.status = "Deactive";
                      _fmObject2.chatRestriction.chatCount = 0;
                      _fmObject2.chatRestriction.subscriptionType = this.chatRestictionDetails.subscriptionType;
                      _fmObject2.chatRestriction.chatRequestCount = 0;
                      this.familyMemberLst.push(_fmObject2);
                    }

                    if (this.familyMemberLst != undefined) {
                      console.log("Family Member Whole Object", this.familyMemberLst);
                      this.authService.addAllFamilyMember(this.familyMemberLst).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                        return loading.dismiss();
                      })).subscribe(function (data) {
                        console.log("Add All Family Members Response", data);
                        alert("Family Members Added!");

                        _this.router.navigateByUrl('/familymembers');
                      });
                    } // if(value.ptFirstName!="")
                    // {
                    // this.familyMemberCount=this.familyMemberCount+1;
                    // this.randomString = Math.random().toString(36).substring(7);
                    // console.log("Random String==>", this.randomString);
                    // this.url1 = "https://meet.jit.si/" + this.randomString;
                    // this.familyMemberFullName = value.ptFirstName + " " + value.ptLastName;
                    // this.familyMemberObj.ptFirstName = value.ptFirstName;
                    // this.familyMemberObj.ptLastName = value.ptLastName;
                    // this.familyMemberObj.ptDob = value.ptDob;
                    // this.familyMemberObj.ptGender = value.ptGender;
                    // this.familyMemberObj.createdByUserID = this.userdetail.userID;
                    // this.familyMemberObj.createdDateTime = new Date();
                    // this.familyMemberObj.status = "Active";
                    // console.log("Add Family Member Object==>", this.familyMemberObj);
                    // this.authService
                    //   .addFamilyMember(this.familyMemberObj)
                    //   .pipe(finalize(() => loading.dismiss()))
                    //   .subscribe(
                    //     (fmuserid1) =>{this.showSuccesToast(fmuserid1,this.url1,this.familyMemberFullName);
                    //     this.resultCount=this.resultCount+1;
                    //     },
                    //     err => this.handleError(err)
                    //   );
                    // }
                    // if(value.ptFirstName1!="")
                    // {
                    // this.familyMemberCount=this.familyMemberCount+1;
                    // this.resultCount=0;
                    // this.randomString = Math.random().toString(36).substring(7);
                    // console.log("Random String==>", this.randomString);
                    // this.url2 = "https://meet.jit.si/" + this.randomString;
                    // this.familyMemberFullName = value.ptFirstName1 + " " + value.ptLastName1;
                    // this.familyMemberObj.ptFirstName = value.ptFirstName1;
                    // this.familyMemberObj.ptLastName = value.ptLastName1;
                    // this.familyMemberObj.ptDob = value.ptDob1;
                    // this.familyMemberObj.ptGender = value.ptGender1;
                    // this.familyMemberObj.createdByUserID = this.userdetail.userID;
                    // this.familyMemberObj.createdDateTime = new Date();
                    // this.familyMemberObj.status = "Active";
                    // console.log("Add Family Member Object==>", this.familyMemberObj);
                    // this.authService
                    //   .addFamilyMember(this.familyMemberObj)
                    //   .pipe(finalize(() => loading.dismiss()))
                    //   .subscribe(
                    //     (fmuserid2) => {this.showSuccesToast(fmuserid2,this.url2,this.familyMemberFullName);
                    //       this.resultCount=this.resultCount+1;
                    //     },
                    //     err => this.handleError(err)
                    //   );
                    // }
                    // if(value.ptFirstName2!="")
                    // {
                    // this.familyMemberCount=this.familyMemberCount+1;
                    // this.resultCount=0;
                    // this.randomString = Math.random().toString(36).substring(7);
                    // console.log("Random String==>", this.randomString);
                    // this.url3 = "https://meet.jit.si/" + this.randomString;
                    // this.familyMemberFullName = value.ptFirstName2 + " " + value.ptLastName2;
                    // this.familyMemberObj.ptFirstName = value.ptFirstName2;
                    // this.familyMemberObj.ptLastName = value.ptLastName2;
                    // this.familyMemberObj.ptDob = value.ptDob2;
                    // this.familyMemberObj.ptGender = value.ptGender2;
                    // this.familyMemberObj.createdByUserID = this.userdetail.userID;
                    // this.familyMemberObj.createdDateTime = new Date();
                    // this.familyMemberObj.status = "Active";
                    // console.log("Add Family Member Object==>", this.familyMemberObj);
                    // this.authService
                    //   .addFamilyMember(this.familyMemberObj)
                    //   .pipe(finalize(() => loading.dismiss()))
                    //   .subscribe(
                    //     (fmuserid3) => {this.showSuccesToast(fmuserid3,this.url3,this.familyMemberFullName);
                    //       this.resultCount=this.resultCount+1;
                    //     },
                    //     err => this.handleError(err)
                    //   );
                    // }


                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // toast controller alert

      }, {
        key: "showSuccesToast",
        value: function showSuccesToast(memberuserid, url, membername) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var newData, addCircleObj, createPtChatObj;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (memberuserid != null) {
                      this.chatRoomName = this.circleAdminDocDetails.docFirstName + " " + this.circleAdminDocDetails.docLastName + "-" + this.familyMemberFullName + " " + this.myRand;
                      newData = this.ref.push();
                      newData.set({
                        roomname: this.chatRoomName
                      });
                      this.currentroomKey = newData.key;
                      addCircleObj = {
                        userID: memberuserid,
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
                        patientUserID: memberuserid,
                        patientName: membername,
                        createdByDateTime: new Date(),
                        videoCallLink: url,
                        status: "Deactive",
                        doctorName: this.circleAdminDocDetails.docFirstName + " " + this.circleAdminDocDetails.docLastName,
                        chatRoomName: this.chatRoomName,
                        chatRoomKey: this.currentroomKey
                      };
                      console.log("addcircle", addCircleObj);
                      console.log("createchat", createPtChatObj);
                      this.authService.addPtToCircle(addCircleObj).subscribe(function (data) {
                        console.log("data", data);

                        if (data != null) {
                          createPtChatObj.chatRoomKey = _this2.currentroomKey;

                          _this2.authService.createPtChat(createPtChatObj).subscribe(function (data1) {
                            console.log("data1", data1);
                          });
                        }
                      });
                    }

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
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this3 = this;

          this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(function (data) {
            // this.decodedToken=this.loginAuth.getUser();
            // this.http.get(`${LOOKUP_URL}/getcirclepatientdetails/`+this.decodedToken.UID, {responseType: "json"}).subscribe(data=>{
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
      }, {
        key: "goFamilyMembers",
        value: function goFamilyMembers() {
          this.router.navigateByUrl('/familymembers');
        } // addFamilyMember()
        // {
        //   this.router.navigateByUrl('/addfamilymember');
        // }

      }, {
        key: "goSubscribedNetwork",
        value: function goSubscribedNetwork() {
          this.router.navigateByUrl('/subscribed-doctor-circle');
        }
      }]);

      return SubscribeFamilyMemberPage;
    }();

    SubscribeFamilyMemberPage.ctorParameters = function () {
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
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]
      }];
    };

    SubscribeFamilyMemberPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subscribe-family-member',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./subscribe-family-member.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe-family-member/subscribe-family-member.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./subscribe-family-member.page.scss */
      "./src/app/subscribe-family-member/subscribe-family-member.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"], _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__["SwasthStorageService"], _services_login_auth_service__WEBPACK_IMPORTED_MODULE_9__["LoginAuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]])], SubscribeFamilyMemberPage);
    /***/
  }
}]);
//# sourceMappingURL=subscribe-family-member-subscribe-family-member-module-es5.js.map