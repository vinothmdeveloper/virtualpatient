(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscribe-family-member-subscribe-family-member-module"],{

/***/ "./node_modules/Firebase/app/index.js":
/*!********************************************!*\
  !*** ./node_modules/Firebase/app/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

__webpack_require__(/*! @firebase/polyfill */ "./node_modules/@firebase/polyfill/dist/esm/index.js");
module.exports = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.js").default;


/***/ }),

/***/ "./node_modules/Firebase/auth/index.js":
/*!*********************************************!*\
  !*** ./node_modules/Firebase/auth/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

__webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/auth.js");


/***/ }),

/***/ "./node_modules/Firebase/database/index.js":
/*!*************************************************!*\
  !*** ./node_modules/Firebase/database/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

module.exports = __webpack_require__(/*! @firebase/database */ "./node_modules/@firebase/database/dist/cjs/index.js");


/***/ }),

/***/ "./node_modules/Firebase/index.js":
/*!****************************************!*\
  !*** ./node_modules/Firebase/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var firebase = __webpack_require__(/*! ./app */ "./node_modules/Firebase/app/index.js");
__webpack_require__(/*! ./auth */ "./node_modules/Firebase/auth/index.js");
__webpack_require__(/*! ./database */ "./node_modules/Firebase/database/index.js");
__webpack_require__(/*! ./messaging */ "./node_modules/Firebase/messaging/index.js");
__webpack_require__(/*! ./storage */ "./node_modules/Firebase/storage/index.js");

module.exports = firebase;


/***/ }),

/***/ "./node_modules/Firebase/messaging/index.js":
/*!**************************************************!*\
  !*** ./node_modules/Firebase/messaging/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

__webpack_require__(/*! @firebase/messaging */ "./node_modules/@firebase/messaging/dist/esm/index.js");


/***/ }),

/***/ "./node_modules/Firebase/storage/index.js":
/*!************************************************!*\
  !*** ./node_modules/Firebase/storage/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

__webpack_require__(/*! @firebase/storage */ "./node_modules/@firebase/storage/dist/esm/index.js");


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe-family-member/subscribe-family-member.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe-family-member/subscribe-family-member.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle; padding-left: 15px;\">\n      <ion-title>Swasth</ion-title>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"exit-outline\" style=\"font-size: 26px;\" (click)=\"logout()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"c-form__field\">\n        <ion-button (click)=\"goFamilyMembers()\">Switch Profile</ion-button>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"login-grid\">\n    <ion-col size=\"12\" sizeLg=\"8\">\n      <div class=\"c-card\">\n        <form #form=\"ngForm\" (ngSubmit)=\"addFamilyMember(form.value)\" novalidate>\n\n          <!-- Family Member 1-->          \n            <ion-row>\n              <ion-col size=\"12\">\n                <h1 class=\"login-logo__text\">Family Member 1</h1>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <label class=\"c-form__label\">Key: <span style=\"color:#f53d3d;\">* Fields are mandatory</span></label>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"border: 1px solid #000000\">\n              <ion-col size=\"12\" sizeMd=\"6\">\n                <div class=\"c-form__field\">\n                  <label class=\"c-form__label\" for=\"first_name\">First Name<sup>*</sup></label>\n                  <input type=\"text\" class=\"c-form__input\" name=\"fmlist.member1.ptFirstName\" [(ngModel)]=fmlist.member1.ptFirstName\n                    [class.invalid]=\"fmlist.member1.ptFirstName.errors && fmlist.member1.ptFirstName.dirty\">\n                  <ion-item class=\"error-message\" *ngIf=\"fmlist.member1.ptFirstName.errors?.required && fmlist.member1.ptFirstName.dirty\">\n                    First Name is required\n                  </ion-item>                  \n                </div>\n              </ion-col>\n              <ion-col size=\"12\" sizeMd=\"6\">\n                <div class=\"c-form__field\">\n                  <label class=\"c-form__label\" for=\"last_name\">Last Name<sup>*</sup></label>\n                  <input type=\"text\" class=\"c-form__input\" name=\"fmlist.member1.ptLastName\" [(ngModel)]=fmlist.member1.ptLastName\n                    [class.invalid]=\"fmlist.member1.ptLastName.errors && fmlist.member1.ptLastName.dirty\">\n                  <ion-item class=\"error-message\" *ngIf=\"fmlist.member1.ptLastName.errors?.required && fmlist.member1.ptLastName.dirty\">\n                    Last Name is required\n                  </ion-item>                  \n                </div>\n              </ion-col>\n              <ion-col size=\"12\" sizeMd=\"6\">\n                <div class=\"c-form__field\">\n                  <label class=\"c-form__label\" for=\"dob\">DOB<sup>*</sup></label>\n                  <input type=\"date\" class=\"c-form__input\" name=\"fmlist.member1.ptDob\" displayFormat=\"DD/MM/YYYY\" [(ngModel)]=fmlist.member1.ptDob [class.invalid]=\"fmlist.member1.ptDob.errors && ptDob.dirty\">\n                  <ion-item class=\"error-message\" *ngIf=\"fmlist.member1.ptDob.errors?.required && fmlist.member1.ptDob.dirty\">\n                    Date of birth is required\n                  </ion-item>\n                  \n                </div>\n              </ion-col>\n              <ion-col size=\"12\" sizeMd=\"6\">\n                <div class=\"c-form__field\">\n                  <label class=\"c-form__label\">Sex<sup>*</sup></label>\n                </div>\n                <ion-list radio-group class=\"gender-list\">\n                  <ion-row>\n                    <ion-col size size-md padding-right>\n                      <div class=\"c-form__field\">\n                        <label class=\"c-form__label\">\n                          <input type=\"radio\" name=\"fmlist.member1.ptGender\" [(ngModel)]=fmlist.member1.ptGender\n                            class=\"c-form__radio\" value=\"Male\"> Male</label>                            \n                      </div>\n                    </ion-col>\n                    <ion-col size size-md padding-right>\n                      <div class=\"c-form__field\">\n                        <label class=\"c-form__label\">\n                          <input type=\"radio\" name=\"fmlist.member1.ptGender\" [(ngModel)]=fmlist.member1.ptGender\n                            class=\"c-form__radio\" value=\"Female\"> Female</label>                            \n                      </div>\n                    </ion-col>\n                    <ion-col size size-md padding-right>\n                      <div class=\"c-form__field\">\n                        <label class=\"c-form__label\">\n                          <input type=\"radio\" name=\"fmlist.member1.ptGender\" [(ngModel)]=fmlist.member1.ptGender\n                            class=\"c-form__radio\" value=\"Others\"> Others</label>                            \n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-list>\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member1.ptGender.errors?.required && fmlist.member1.ptGender.dirty\">\n                  Gender is required\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          <!-- Family Member 1-->\n          <!-- Family Member 2-->\n          <ion-row>\n            <ion-col size=\"12\">\n              <h1 class=\"login-logo__text\">Family Member 2</h1>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"border: 1px solid #000000\">\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"first_name\">First Name<sup>*</sup></label>\n                <input type=\"text\" class=\"c-form__input\" name=\"fmlist.member2.ptFirstName\" [(ngModel)]=fmlist.member2.ptFirstName\n                  [class.invalid]=\"fmlist.member2.ptFirstName.errors && fmlist.member2.ptFirstName.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member2.ptFirstName.errors?.required && fmlist.member2.ptFirstName.dirty\">\n                  First Name is required\n                </ion-item>                  \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"last_name\">Last Name<sup>*</sup></label>\n                <input type=\"text\" class=\"c-form__input\" name=\"fmlist.member2.ptLastName\" [(ngModel)]=fmlist.member2.ptLastName\n                  [class.invalid]=\"fmlist.member2.ptLastName.errors && fmlist.member2.ptLastName.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member2.ptLastName.errors?.required && fmlist.member2.ptLastName.dirty\">\n                  Last Name is required\n                </ion-item>                  \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"dob\">DOB<sup>*</sup></label>\n                <input type=\"date\" class=\"c-form__input\" name=\"fmlist.member2.ptDob\" displayFormat=\"DD/MM/YYYY\" [(ngModel)]=fmlist.member2.ptDob [class.invalid]=\"fmlist.member1.ptDob.errors && ptDob.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member2.ptDob.errors?.required && fmlist.member2.ptDob.dirty\">\n                  Date of birth is required\n                </ion-item>\n                \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\">Sex<sup>*</sup></label>\n              </div>\n              <ion-list radio-group class=\"gender-list\">\n                <ion-row>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\">\n                        <input type=\"radio\" name=\"fmlist.member2.ptGender\" [(ngModel)]=fmlist.member2.ptGender\n                          class=\"c-form__radio\" value=\"Male\"> Male</label>                            \n                    </div>\n                  </ion-col>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\">\n                        <input type=\"radio\" name=\"fmlist.member2.ptGender\" [(ngModel)]=fmlist.member2.ptGender\n                          class=\"c-form__radio\" value=\"Female\"> Female</label>                            \n                    </div>\n                  </ion-col>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\">\n                        <input type=\"radio\" name=\"fmlist.member2.ptGender\" [(ngModel)]=fmlist.member2.ptGender\n                          class=\"c-form__radio\" value=\"Others\"> Others</label>                            \n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n              <ion-item class=\"error-message\" *ngIf=\"fmlist.member2.ptGender.errors?.required && fmlist.member2.ptGender.dirty\">\n                Gender is required\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Family Member 2-->\n          <!-- Family Member 3-->\n          <ion-row>\n            <ion-col size=\"12\">\n              <h1 class=\"login-logo__text\">Family Member 3</h1>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <label class=\"c-form__label\" >Key: <span style=\"color:#f53d3d;\">* Fields are mandatory</span></label>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"border: 1px solid #000000\">\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"first_name\">First Name<sup>*</sup></label>\n                <input type=\"text\" class=\"c-form__input\" name=\"fmlist.member3.ptFirstName\" [(ngModel)]=fmlist.member3.ptFirstName\n                  [class.invalid]=\"fmlist.member3.ptFirstName.errors && fmlist.member1.ptFirstName.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member3.ptFirstName.errors?.required && fmlist.member3.ptFirstName.dirty\">\n                  First Name is required\n                </ion-item>                  \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"last_name\">Last Name<sup>*</sup></label>\n                <input type=\"text\" class=\"c-form__input\" name=\"fmlist.member3.ptLastName\" [(ngModel)]=fmlist.member3.ptLastName\n                  [class.invalid]=\"fmlist.member3.ptLastName.errors && fmlist.member3.ptLastName.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member3.ptLastName.errors?.required && fmlist.member3.ptLastName.dirty\">\n                  Last Name is required\n                </ion-item>                  \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\" for=\"dob\">DOB<sup>*</sup></label>\n                <input type=\"date\" class=\"c-form__input\" name=\"fmlist.member3.ptDob\" displayFormat=\"DD/MM/YYYY\" [(ngModel)]=fmlist.member3.ptDob [class.invalid]=\"fmlist.member1.ptDob.errors && ptDob.dirty\">\n                <ion-item class=\"error-message\" *ngIf=\"fmlist.member3.ptDob.errors?.required && fmlist.member3.ptDob.dirty\">\n                  Date of birth is required\n                </ion-item>\n                \n              </div>\n            </ion-col>\n            <ion-col size=\"12\" sizeMd=\"6\">\n              <div class=\"c-form__field\">\n                <label class=\"c-form__label\">Sex<sup>*</sup></label>\n              </div>\n              <ion-list radio-group class=\"gender-list\">\n                <ion-row>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\">\n                        <input type=\"radio\" name=\"fmlist.member3.ptGender\" [(ngModel)]=fmlist.member3.ptGender\n                          class=\"c-form__radio\" value=\"Male\"> Male</label>                            \n                    </div>\n                  </ion-col>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\">\n                        <input type=\"radio\" name=\"fmlist.member3.ptGender\" [(ngModel)]=fmlist.member3.ptGender\n                          class=\"c-form__radio\" value=\"Female\"> Female</label>                            \n                    </div>\n                  </ion-col>\n                  <ion-col size size-md padding-right>\n                    <div class=\"c-form__field\">\n                      <label class=\"c-form__label\">\n                        <input type=\"radio\" name=\"fmlist.member3.ptGender\" [(ngModel)]=fmlist.member3.ptGender\n                          class=\"c-form__radio\" value=\"Others\"> Others</label>                            \n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n              <ion-item class=\"error-message\" *ngIf=\"fmlist.member3.ptGender.errors?.required && fmlist.member3.ptGender.dirty\">\n                Gender is required\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row>\n            <ion-col>\n              <label class=\"c-form__label\" >Key: <span style=\"color:#f53d3d;\">* Fields are mandatory</span></label>\n            </ion-col>\n          </ion-row>-->\n          <!--Family Member 3-->\n          <ion-row>\n            <ion-col size=\"12\">\n              <div class=\"c-form__field\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">Save</ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </form>\n      </div>\n      <div class=\"login-paragraph\">\n        <div class=\"login-paragraph__text\">\n          Skip now? <a (click)=\"goSubscribedNetwork()\" class=\"login-paragraph__link\">Skip</a> Add Later!\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/subscribe-family-member/subscribe-family-member-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/subscribe-family-member/subscribe-family-member-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SubscribeFamilyMemberPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeFamilyMemberPageRoutingModule", function() { return SubscribeFamilyMemberPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _subscribe_family_member_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribe-family-member.page */ "./src/app/subscribe-family-member/subscribe-family-member.page.ts");




const routes = [
    {
        path: '',
        component: _subscribe_family_member_page__WEBPACK_IMPORTED_MODULE_3__["SubscribeFamilyMemberPage"]
    }
];
let SubscribeFamilyMemberPageRoutingModule = class SubscribeFamilyMemberPageRoutingModule {
};
SubscribeFamilyMemberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscribeFamilyMemberPageRoutingModule);



/***/ }),

/***/ "./src/app/subscribe-family-member/subscribe-family-member.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/subscribe-family-member/subscribe-family-member.module.ts ***!
  \***************************************************************************/
/*! exports provided: SubscribeFamilyMemberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeFamilyMemberPageModule", function() { return SubscribeFamilyMemberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _subscribe_family_member_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribe-family-member-routing.module */ "./src/app/subscribe-family-member/subscribe-family-member-routing.module.ts");
/* harmony import */ var _subscribe_family_member_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscribe-family-member.page */ "./src/app/subscribe-family-member/subscribe-family-member.page.ts");







let SubscribeFamilyMemberPageModule = class SubscribeFamilyMemberPageModule {
};
SubscribeFamilyMemberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subscribe_family_member_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscribeFamilyMemberPageRoutingModule"]
        ],
        declarations: [_subscribe_family_member_page__WEBPACK_IMPORTED_MODULE_6__["SubscribeFamilyMemberPage"]]
    })
], SubscribeFamilyMemberPageModule);



/***/ }),

/***/ "./src/app/subscribe-family-member/subscribe-family-member.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/subscribe-family-member/subscribe-family-member.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZS1mYW1pbHktbWVtYmVyL3N1YnNjcmliZS1mYW1pbHktbWVtYmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/subscribe-family-member/subscribe-family-member.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/subscribe-family-member/subscribe-family-member.page.ts ***!
  \*************************************************************************/
/*! exports provided: SubscribeFamilyMemberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeFamilyMemberPage", function() { return SubscribeFamilyMemberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storage/swasth-storage.service */ "./src/app/storage/swasth-storage.service.ts");
/* harmony import */ var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/login-auth.service */ "./src/app/services/login-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/index.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");













let SubscribeFamilyMemberPage = class SubscribeFamilyMemberPage {
    constructor(authService, loadingController, toastCtrl, alertCtrl, platform, datepipe, jwtHelper, swStorage, loginAuth, storage, router, http) {
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
        this.data = { roomname: '' };
        this.familyMemberCount = 0;
        this.resultCount = 0;
        this.fmlist = {
            member1: { ptFirstName: "",
                ptLastName: "",
                ptDob: "",
                ptGender: ""
            },
            member2: { ptFirstName: "",
                ptLastName: "",
                ptDob: "",
                ptGender: ""
            },
            member3: { ptFirstName: "",
                ptLastName: "",
                ptDob: "",
                ptGender: ""
            },
        };
        this.familyMemberLst = [];
        this.ConfirmPassword = true;
        this.CurrentDate = new Date();
        // this.randomString = Math.random().toString(36).substring(7);
        // console.log("Random String==>", this.randomString);
        // this.url = "https://meet.jit.si/" + this.randomString;
        this.myRand = this.random();
    }
    ngOnInit() {
    }
    addFamilyMember(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Form Value", value);
            console.log("Object Value", this.fmlist);
            let loading = yield this.loadingController.create({
                spinner: 'bubbles',
                message: 'Signing up ...'
            });
            yield loading.present();
            if (this.fmlist.member1.ptFirstName != "") {
                let fmObject = {
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
                let newData = this.ref.push();
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
                let fmObject = {
                    familyMemberobj: {},
                    addCircleObj: {},
                    createPtChatObj: {},
                    chatRestriction: {}
                };
                this.randomString = Math.random().toString(36).substring(7);
                console.log("Random String==>", this.randomString);
                this.url1 = "https://meet.jit.si/" + this.randomString;
                fmObject.familyMemberobj.ptFirstName = this.fmlist.member2.ptFirstName;
                fmObject.familyMemberobj.ptLastName = this.fmlist.member2.ptLastName;
                fmObject.familyMemberobj.ptDob = this.fmlist.member2.ptDob;
                fmObject.familyMemberobj.ptGender = this.fmlist.member2.ptGender;
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
                let newData = this.ref.push();
                newData.set({
                    roomname: this.chatRoomName
                });
                this.currentroomKey = newData.key;
                fmObject.createPtChatObj.circleCode = this.familyMemberCircleCode;
                fmObject.createPtChatObj.circleName = this.familyPrimaryMemberCircleDetails.circleName;
                fmObject.createPtChatObj.docUserID = this.circleAdminDocDetails.docUserID;
                fmObject.createPtChatObj.patientUserID = "memberuserid";
                fmObject.createPtChatObj.patientName = this.fmlist.member2.ptFirstName + " " + this.fmlist.member2.ptLastName;
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
            if (this.fmlist.member3.ptFirstName != "") {
                let fmObject = {
                    familyMemberobj: {},
                    addCircleObj: {},
                    createPtChatObj: {},
                    chatRestriction: {}
                };
                this.randomString = Math.random().toString(36).substring(7);
                console.log("Random String==>", this.randomString);
                this.url1 = "https://meet.jit.si/" + this.randomString;
                fmObject.familyMemberobj.ptFirstName = this.fmlist.member3.ptFirstName;
                fmObject.familyMemberobj.ptLastName = this.fmlist.member3.ptLastName;
                fmObject.familyMemberobj.ptDob = this.fmlist.member3.ptDob;
                fmObject.familyMemberobj.ptGender = this.fmlist.member3.ptGender;
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
                let newData = this.ref.push();
                newData.set({
                    roomname: this.chatRoomName
                });
                this.currentroomKey = newData.key;
                fmObject.createPtChatObj.circleCode = this.familyMemberCircleCode;
                fmObject.createPtChatObj.circleName = this.familyPrimaryMemberCircleDetails.circleName;
                fmObject.createPtChatObj.docUserID = this.circleAdminDocDetails.docUserID;
                fmObject.createPtChatObj.patientUserID = "memberuserid";
                fmObject.createPtChatObj.patientName = this.fmlist.member3.ptFirstName + " " + this.fmlist.member3.ptLastName;
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
            if (this.familyMemberLst != undefined) {
                console.log("Family Member Whole Object", this.familyMemberLst);
                this.authService
                    .addAllFamilyMember(this.familyMemberLst)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => loading.dismiss()))
                    .subscribe(data => {
                    console.log("Add All Family Members Response", data);
                    alert("Family Members Added!");
                    this.router.navigateByUrl('/familymembers');
                });
            }
            // if(value.ptFirstName!="")
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
        });
    }
    // toast controller alert
    showSuccesToast(memberuserid, url, membername) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (memberuserid != null) {
                this.chatRoomName = this.circleAdminDocDetails.docFirstName + " " + this.circleAdminDocDetails.docLastName + "-" + this.familyMemberFullName + " " + this.myRand;
                let newData = this.ref.push();
                newData.set({
                    roomname: this.chatRoomName
                });
                this.currentroomKey = newData.key;
                let addCircleObj = {
                    userID: memberuserid,
                    circleCode: this.familyMemberCircleCode,
                    createdDateTime: new Date(),
                    subscribePlanId: "1",
                    status: "Active",
                    subscriptionType: this.userdetail.accountType,
                    userType: "Secondary"
                };
                let createPtChatObj = {
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
                this.authService
                    .addPtToCircle(addCircleObj)
                    .subscribe(data => {
                    console.log("data", data);
                    if (data != null) {
                        createPtChatObj.chatRoomKey = this.currentroomKey;
                        this.authService
                            .createPtChat(createPtChatObj)
                            .subscribe(data1 => {
                            console.log("data1", data1);
                        });
                    }
                });
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
    ionViewWillEnter() {
        this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(data => {
            // this.decodedToken=this.loginAuth.getUser();
            // this.http.get(`${LOOKUP_URL}/getcirclepatientdetails/`+this.decodedToken.UID, {responseType: "json"}).subscribe(data=>{
            this.userdetail = data;
            if (this.userdetail != undefined || this.userdetail != null) {
                this.authService
                    .getCircleCode(this.userdetail.userID, this.userdetail.accountType)
                    .subscribe(data => {
                    if (data != null) {
                        this.familyMemberCircleCode = data;
                        console.log("Circle Code==>", this.familyMemberCircleCode);
                        this.authService
                            .getCircleEntity(this.familyMemberCircleCode)
                            .subscribe(data => {
                            this.familyPrimaryMemberCircleDetails = data;
                            console.log("Circle Details==>", this.familyPrimaryMemberCircleDetails);
                            this.authService
                                .getDoctorProfile(this.familyPrimaryMemberCircleDetails.createdByUserId)
                                .subscribe(data => {
                                this.circleAdminDocDetails = data;
                                console.log("Circle Admin Doctor Details==>", this.circleAdminDocDetails);
                            });
                        });
                    }
                    let chatObj = {
                        userID: this.userdetail.userID,
                        circleCode: this.familyMemberCircleCode
                    };
                    console.log("Chattttt Obj==>", chatObj);
                    this.authService
                        .getChatRestrictDetail(chatObj)
                        .subscribe(data => {
                        this.chatRestictionDetails = data;
                        console.log("Chat Restriction Details==>", this.chatRestictionDetails);
                    });
                });
            }
        });
    }
    random() {
        let rand = Math.floor(Math.random() * 20000) + 1;
        return rand;
    }
    logout() {
        this.loginAuth.logout();
    }
    goFamilyMembers() {
        this.router.navigateByUrl('/familymembers');
    }
    // addFamilyMember()
    // {
    //   this.router.navigateByUrl('/addfamilymember');
    // }
    goSubscribedNetwork() {
        this.router.navigateByUrl('/subscribed-doctor-circle');
    }
};
SubscribeFamilyMemberPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"] },
    { type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__["SwasthStorageService"] },
    { type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_9__["LoginAuthService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }
];
SubscribeFamilyMemberPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscribe-family-member',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./subscribe-family-member.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe-family-member/subscribe-family-member.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./subscribe-family-member.page.scss */ "./src/app/subscribe-family-member/subscribe-family-member.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"],
        _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__["SwasthStorageService"],
        _services_login_auth_service__WEBPACK_IMPORTED_MODULE_9__["LoginAuthService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]])
], SubscribeFamilyMemberPage);



/***/ })

}]);
//# sourceMappingURL=subscribe-family-member-subscribe-family-member-module-es2015.js.map