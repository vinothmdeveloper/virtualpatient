function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["health-locker-prescription-health-locker-prescription-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/health-locker-prescription/health-locker-prescription.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health-locker-prescription/health-locker-prescription.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHealthLockerPrescriptionHealthLockerPrescriptionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle; padding-left: 15px;\">\r\n      <ion-title>Swasth</ion-title>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"notifications-outline\" style=\"font-size: 26px; padding-right: 20px;\"></ion-icon>\r\n      <ion-icon name=\"exit-outline\" style=\"font-size: 26px;\" (click)=\"logout()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <section class=\"grid-heading\" [ngStyle]=\"{'background-image': 'url('+background+')'}\">\r\n    <ion-grid class=\"grid-heading-container\" fixed>\r\n      <ion-row>\r\n        <ion-col class=\"static\" padding>\r\n          <h2>Prescriptions</h2>\r\n          <div class=\"search\">\r\n            <form #searchform=\"ngForm\" (ngSubmit)=\"PrescriptionSearch(searchform.value)\" novalidate>\r\n              <div class=\"search__form\">\r\n                <div class=\"search__field search__field--input\">\r\n                  <!-- <ion-auto-complete name=\"searchDiagnosis\" class=\"search__input\" #diagsearch  [dataProvider]=\"patdiaglist\" [(ngModel)]=\"searchDiagnosis\" [options]=\"{placeholder:'Diagnosis'}\" (ionAutoInput)=\"onInput($event,'diagnosis')\" (keydown)=\"keyUp($event)\"></ion-auto-complete> -->\r\n                  <input type=\"text\" class=\"search__input\" placeholder=\"Diagnosis Name\">\r\n                </div>\r\n                <div class=\"search__field search__field--select\">\r\n                  <!-- <ion-auto-complete name=\"searchDoctor\" class=\"search__input\" [dataProvider]=\"doclist\" #docsearch [(ngModel)]=\"searchDoctor\" [options]=\"{placeholder:'Doctor name',debounce:0}\" (ionAutoInput)=\"onInput($event,'doctor')\" (itemSelected)=\"getVal($event)\"></ion-auto-complete> -->\r\n                  <input type=\"text\" class=\"search__input\" placeholder=\"Doctor Name\">\r\n                </div>\r\n                <div class=\"search__field search__field--select\">\r\n                  <!-- <ion-auto-complete name=\"searchHospital\" class=\"search__input\" [dataProvider]=\"hospnamelist\" #hospsearch [(ngModel)]=\"searchHospital\" [options]=\"{placeholder:'Hospital name'}\" (ionAutoInput)=\"onInput($event,'hospital')\"></ion-auto-complete> -->\r\n                  <input type=\"text\" class=\"search__input\" placeholder=\"Hospital Name\">\r\n                </div>\r\n                <div class=\"search__field search__field--date\">\r\n                  <label class=\"search__label\">Date</label>\r\n                  <input type=\"date\" class=\"search__date\" placeholder=\"Date\" [(ngModel)]=\"searchDate\" name=\"searchDate\">\r\n                </div>\r\n                <div class=\"search__field search__field--button\">\r\n                  <button class=\"search__button\">Search</button>\r\n                </div>\r\n              </div>\r\n            </form>    \r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </section>\r\n\r\n  <ion-grid fixed>\r\n    <div *ngIf=\"searching\" class=\"spinner-container\">\r\n      <ion-spinner></ion-spinner>\r\n    </div>\r\n\r\n    <ion-row *ngIf=msgblk>\r\n      <ion-col>\r\n        <div style=\"background-color:#e6f2ff;padding:15px;\">\r\n          <h3 style=\"color:#0059b3;\">No Record Found</h3>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"!pendingPaymentStatus\">\r\n      <ion-col size=\"12\" sizeMd=\"4\" *ngFor=\"let p of pagedItems index as i\">\r\n        <ion-card margin-bottom style=\"border-radius: 10px;\">\r\n          <div *ngIf=\"p.documentOnly=='no'\" style=\"height: 5px; width: 100%; background-color:#78909C;\"></div>\r\n          <div *ngIf=\"p.documentOnly=='yes'\" style=\"height: 5px; width: 100%; background-color:#90DFAA;\"></div>\r\n          <div class=\"title\">\r\n            <div>\r\n              <p class=\"title__subtitle\">Diagnosis</p> \r\n              <p class=\"title__text\" *ngIf=\"p.dxFinalDiagnosis!='null' && p.dxFinalDiagnosis!=''\">{{p.dxFinalDiagnosis}}</p>\r\n              <p class=\"title__text1\" *ngIf=\"p.dxFinalDiagnosis=='null' || p.dxFinalDiagnosis=='' || p.dxFinalDiagnosis==null\">-</p>\r\n            </div>\r\n            <div class=\"title__type-content\" *ngIf=\"p.createdByUserID==p.userID\">\r\n              <img class=\"title__img\" src=\"assets/imgs/user.svg\">\r\n              <!-- <ion-icon name=\"person\" class=\"title__img\"></ion-icon> -->\r\n              <!-- <p class=\"title__type\">Self</p> -->\r\n            </div>\r\n          </div>\r\n          <ion-row>\r\n            <ion-col size=\"10\" sizeMd=\"11\">\r\n              <ion-row (click)=\"linkPrescription(p.ptDxID,p.docUserID,p.prescription_type)\">\r\n                <div class=\"prescription\">\r\n                  <div class=\"prescription__detail-left\">\r\n                    <img *ngIf=\"p.documentOnly=='no'\" src=\"assets/imgs/education.svg\" class=\"prescription__img\">\r\n                    <img *ngIf=\"p.documentOnly=='yes'\" src=\"assets/imgs/picture.svg\" class=\"prescription__img\">\r\n                  </div>\r\n                  <div class=\"prescription__detail-right\">\r\n                    <p class=\"title__subtitle\">Doctor's Information</p>\r\n                    <ng-container *ngFor=\"let doc of doctors\">\r\n                      <div *ngIf=\"p.docUserID==doc.docUserID\">\r\n                        <p class=\"prescription__docname\">{{doc.docFirstName}} {{doc.docLastName}}</p>\r\n                        <p class=\"prescription__docdetail\">{{doc.docQualification}}, {{doc.docSpecialization}}</p>\r\n                        <!-- <p class=\"prescription__docdetail\"></p> -->\r\n                      </div>\r\n                    </ng-container>\r\n                    <div *ngIf=\"p.docUserID==null\">\r\n                      <p class=\"prescription__docname\">{{p.doctor_name}}</p>\r\n                      <p class=\"prescription__docdetail\" *ngIf=\"p.doctor_name==''\" style=\"padding-left: 45px;\">-</p>\r\n                      <p class=\"prescription__docdetail\" *ngIf=\"p.createdByUserID==p.userID\" style=\"color: coral;\"><sup>*</sup>(user uploaded)</p>\r\n                    </div>\r\n                    <div *ngIf=\"p.docUserID=='null' && p.doctor_name!=''\">\r\n                      <p class=\"prescription__docdetail\">{{p.doctor_name}}</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-row>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"2\" sizeMd=\"1\" class=\"prescription__select\">\r\n              <div>\r\n                <img src=\"assets/imgs/next.svg\" class=\"prescription__nexticon\">\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"12\" style=\"padding-left: 20px;\" (click)=\"linkPrescription(p.ptDxID,p.docUserID,p.prescription_type)\">\r\n              <div class=\"ptDetail\">\r\n                <div>\r\n                  <img src=\"assets/imgs/hospital.svg\" class=\"ptDetail__icon1\">\r\n                </div>\r\n                <ng-container *ngFor=\"let cl of allCircleList\">\r\n                  <ng-container *ngIf=\"cl.circleCode==p.tenantID\">\r\n                    <p class=\"prescription__dochosp\">{{cl.circleName}}</p>        \r\n                  </ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <div style=\"display: flex; height: 30px;\">\r\n                <div class=\"ptdetailsend\">\r\n                  <div>\r\n                    <img src=\"assets/imgs/calendar.svg\" class=\"ptDetail__icon\" style=\"margin-left: 15px; margin-bottom: 20px;\">\r\n                  </div>\r\n                  <!-- <ion-icon name=\"calendar\" class=\"ptDetail__icon\"></ion-icon> -->\r\n                  <p class=\"prescription__docdetail\">{{ p.dxDateTime | date: 'dd MMM yyyy'}}</p>        \r\n                </div>\r\n                <div class=\"prescription__send\">\r\n                  <div *ngIf=\"platformAndroid\" class=\"prescription__send-left\">\r\n                    <img src=\"assets/imgs/reminder.svg\" class=\"prescription__send-left-icon\" (click)=\"remainderModal(p.medicine)\">\r\n                  </div>\r\n                  <div style=\"margin: auto;\">\r\n                    <!-- <ion-icon name=\"paper-plane\" class=\"prescription__send-left-icon\" style=\"color: #00b395;\" (click)=\"sendPrescription(p)\"></ion-icon> -->\r\n                    <img src=\"assets/imgs/send.svg\" class=\"prescription__send-left-icon\" (click)=\"sendPrescription(p)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- ui for payment pending -->\r\n    <ion-row *ngIf=\"pendingPaymentStatus\">\r\n      <ion-col size=\"12\" sizeMd=\"4\" *ngFor=\"let p of pagedItems index as i\">\r\n        <ion-card margin-bottom style=\"border-radius: 10px;\" (click)=\"consultPayment()\">\r\n          <div *ngIf=\"p.documentOnly=='no'\" style=\"height: 5px; width: 100%; background-color:#78909C;\"></div>\r\n          <div *ngIf=\"p.documentOnly=='yes'\" style=\"height: 5px; width: 100%; background-color:#90DFAA;\"></div>\r\n          <div class=\"title\">\r\n            <div>\r\n              <p class=\"title__subtitle\">Diagnosis</p> \r\n              <p class=\"title__text\" *ngIf=\"p.dxFinalDiagnosis!='null' && p.dxFinalDiagnosis!=''\">{{p.dxFinalDiagnosis}}</p>\r\n              <p class=\"title__text1\" *ngIf=\"p.dxFinalDiagnosis=='null' || p.dxFinalDiagnosis=='' || p.dxFinalDiagnosis==null\">-</p>\r\n            </div>\r\n            <div class=\"title__type-content\" *ngIf=\"p.createdByUserID==p.userID\">\r\n              <img class=\"title__img\" src=\"assets/imgs/user.svg\">\r\n            </div>\r\n          </div>\r\n          <ion-row>\r\n            <ion-col size=\"10\" sizeMd=\"11\">\r\n              <ion-row>\r\n                <div class=\"prescription\">\r\n                  <div class=\"prescription__detail-left\">\r\n                    <img *ngIf=\"p.documentOnly=='no'\" src=\"assets/imgs/education.svg\" class=\"prescription__img\">\r\n                    <img *ngIf=\"p.documentOnly=='yes'\" src=\"assets/imgs/picture.svg\" class=\"prescription__img\">\r\n                  </div>\r\n                  <div class=\"prescription__detail-right\">\r\n                    <p class=\"title__subtitle\">Doctor's Information</p>\r\n                    <ng-container *ngFor=\"let doc of doctors\">\r\n                      <div *ngIf=\"p.docUserID==doc.docUserID\">\r\n                        <p class=\"prescription__docname\">{{doc.docFirstName}} {{doc.docLastName}}</p>\r\n                        <p class=\"prescription__docdetail\">{{doc.docQualification}}, {{doc.docSpecialization}}</p>\r\n                      </div>\r\n                    </ng-container>\r\n                    <div *ngIf=\"p.docUserID==null\">\r\n                      <p class=\"prescription__docname\">{{p.doctor_name}}</p>\r\n                      <p class=\"prescription__docdetail\" *ngIf=\"p.doctor_name==''\" style=\"padding-left: 45px;\">-</p>\r\n                      <p class=\"prescription__docdetail\" *ngIf=\"p.createdByUserID==p.userID\" style=\"color: coral;\"><sup>*</sup>(user uploaded)</p>\r\n                    </div>\r\n                    <div *ngIf=\"p.docUserID=='null' && p.doctor_name!=''\">\r\n                      <p class=\"prescription__docdetail\">{{p.doctor_name}}</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"2\" sizeMd=\"1\" class=\"prescription__select\">\r\n              <div>\r\n                <img src=\"assets/imgs/next.svg\" class=\"prescription__nexticon\">\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\" style=\"padding-left: 20px;\">\r\n              <div class=\"ptDetail\">\r\n                <div>\r\n                  <img src=\"assets/imgs/hospital.svg\" class=\"ptDetail__icon1\">\r\n                </div>\r\n                <ng-container *ngFor=\"let cl of allCircleList\">\r\n                  <ng-container *ngIf=\"cl.circleCode==p.tenantID\">\r\n                    <p class=\"prescription__dochosp\">{{cl.circleName}}</p>        \r\n                  </ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <div style=\"display: flex; height: 30px;\">\r\n                <div class=\"ptdetailsend\">\r\n                  <div>\r\n                    <img src=\"assets/imgs/calendar.svg\" class=\"ptDetail__icon\" style=\"margin-left: 15px; margin-bottom: 20px;\">\r\n                  </div>\r\n                  <p class=\"prescription__docdetail\">{{ p.dxDateTime | date: 'dd MMM yyyy'}}</p>        \r\n                </div>\r\n                <div class=\"prescription__send\">\r\n                  <div *ngIf=\"platformAndroid\" class=\"prescription__send-left\">\r\n                    <img src=\"assets/imgs/reminder.svg\" class=\"prescription__send-left-icon\">\r\n                  </div>\r\n                  <div style=\"margin: auto;\">\r\n                    <img src=\"assets/imgs/send.svg\" class=\"prescription__send-left-icon\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n        \r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"text-center pagination\">    \r\n          <ul *ngIf=\"pager.pages && pager.pages.length\">\r\n            <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n              <a (click)=\"setPage(1)\">First</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n              <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n            </li>\r\n            <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n              <a (click)=\"setPage(page)\">{{page}}</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n              <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n              <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </ion-col>    \r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/health-locker-prescription/health-locker-prescription-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/health-locker-prescription/health-locker-prescription-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: HealthLockerPrescriptionPageRoutingModule */

  /***/
  function srcAppHealthLockerPrescriptionHealthLockerPrescriptionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthLockerPrescriptionPageRoutingModule", function () {
      return HealthLockerPrescriptionPageRoutingModule;
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


    var _health_locker_prescription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./health-locker-prescription.page */
    "./src/app/health-locker-prescription/health-locker-prescription.page.ts");

    var routes = [{
      path: '',
      component: _health_locker_prescription_page__WEBPACK_IMPORTED_MODULE_3__["HealthLockerPrescriptionPage"]
    }];

    var HealthLockerPrescriptionPageRoutingModule = function HealthLockerPrescriptionPageRoutingModule() {
      _classCallCheck(this, HealthLockerPrescriptionPageRoutingModule);
    };

    HealthLockerPrescriptionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HealthLockerPrescriptionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/health-locker-prescription/health-locker-prescription.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/health-locker-prescription/health-locker-prescription.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: HealthLockerPrescriptionPageModule */

  /***/
  function srcAppHealthLockerPrescriptionHealthLockerPrescriptionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthLockerPrescriptionPageModule", function () {
      return HealthLockerPrescriptionPageModule;
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


    var _health_locker_prescription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./health-locker-prescription-routing.module */
    "./src/app/health-locker-prescription/health-locker-prescription-routing.module.ts");
    /* harmony import */


    var _health_locker_prescription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./health-locker-prescription.page */
    "./src/app/health-locker-prescription/health-locker-prescription.page.ts");

    var HealthLockerPrescriptionPageModule = function HealthLockerPrescriptionPageModule() {
      _classCallCheck(this, HealthLockerPrescriptionPageModule);
    };

    HealthLockerPrescriptionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _health_locker_prescription_routing_module__WEBPACK_IMPORTED_MODULE_5__["HealthLockerPrescriptionPageRoutingModule"]],
      declarations: [_health_locker_prescription_page__WEBPACK_IMPORTED_MODULE_6__["HealthLockerPrescriptionPage"]]
    })], HealthLockerPrescriptionPageModule);
    /***/
  },

  /***/
  "./src/app/health-locker-prescription/health-locker-prescription.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/health-locker-prescription/health-locker-prescription.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHealthLockerPrescriptionHealthLockerPrescriptionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid-heading {\n  position: relative;\n  margin-bottom: 30px;\n  padding-top: 48px;\n  padding-bottom: 48px;\n  background-color: #0059b3;\n  background-size: cover;\n  background-position: center;\n}\n.grid-heading:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \" \";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 89, 179, 0.6);\n}\n.grid-heading-container {\n  position: relative;\n  height: 100%;\n}\n.grid-heading h2 {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-family: \"Muli-Regular\", sans-serif;\n  color: #fff;\n  font-weight: 400;\n  font-size: 2rem;\n}\n.grid-heading p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.search {\n  position: absolute;\n  bottom: -69px;\n  left: 0;\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.search__form {\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n}\n.search__field {\n  position: relative;\n  border-right: 1px solid rgba(0, 0, 0, 0.08);\n}\n.search__field--input {\n  width: 20%;\n  padding-left: 7px;\n}\n.search__field--select {\n  position: relative;\n  padding-left: 7px;\n  width: 20%;\n}\n.search__field--date {\n  width: 20%;\n}\n.search__field--button {\n  width: 20%;\n  border-right: none;\n}\n.search__label {\n  position: absolute;\n  top: 9px;\n  left: 17px;\n  font-size: 10px;\n  color: #919191;\n}\n.search__input {\n  border: 0;\n  display: block;\n  background-color: none;\n  width: 100%;\n  font-size: 14px;\n  color: #222;\n  min-height: 48px;\n}\n.search__date {\n  padding: 15px;\n  border: 0;\n  display: block;\n  background-color: none;\n  width: 100%;\n  font-size: 12px;\n  color: #222;\n  min-height: 48px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n}\n.search__button {\n  padding-left: 10px;\n  padding-right: 10px;\n  position: relative;\n  height: 100%;\n  background-color: #00b395;\n  color: #fff;\n  border: none;\n  width: 100%;\n  min-height: 48px;\n  font-size: 14px;\n}\n.search__select {\n  padding: 14px;\n  padding-right: 24px;\n  background-color: #fff;\n  border: none;\n  height: 48px;\n  overflow: hidden;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  color: #222;\n  font-size: 14px;\n  width: 100%;\n  display: block;\n}\n.search__select-arrow {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  transform: translateY(-50%);\n  font-size: 16px;\n}\n.relative {\n  position: relative;\n}\n.searchbar-md .searchbar-input {\n  padding: 6px 10px;\n  border-radius: 2px;\n  background-position: left 8px center;\n  height: auto;\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  font-weight: 400;\n  line-height: 3rem;\n  color: #222;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.searchbar-md .searchbar-input::-moz-placeholder {\n  color: #222;\n}\n.searchbar-md .searchbar-input:-ms-input-placeholder {\n  color: #222;\n}\n.searchbar-md .searchbar-input::-webkit-input-placeholder {\n  text-indent: 0;\n  color: #222;\n}\n.searchbar-md .searchbar-search-icon {\n  display: none;\n}\n.text-center {\n  text-align: center;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.pagination ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\n.pagination ul li {\n  color: #fff;\n  display: flex;\n}\n.pagination ul li a {\n  background-color: #FFFFFF;\n  padding: 5px 10px;\n  border: 1px solid #0059b3;\n  border-right: 0;\n}\n.pagination ul li.active a {\n  background-color: #0059b3;\n  color: #ffffff;\n}\n.pagination ul li:first-child a {\n  border-radius: 5px 0 0 5px;\n}\n.pagination ul li:last-child a {\n  border-radius: 0 5px 5px 0;\n  border-right: 2px solid #0059b3;\n}\n.title {\n  width: 100%;\n  padding: 6px 20px;\n  text-align: left;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  font-family: \"Muli-Regular\", sans-serif;\n  display: flex;\n  justify-content: space-between;\n}\n.title__subtitle {\n  color: #919191;\n  margin: 0 0 2px;\n  font-size: 15.4px;\n  font-weight: normal;\n  line-height: 1.5;\n}\n.title__text {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #222222;\n  padding-right: 20px;\n  margin: 0 0 2px;\n  font-weight: normal;\n  line-height: 1.5;\n}\n.title__text1 {\n  font-size: 12px;\n  color: #222222;\n  padding-left: 25px;\n  margin: 0 0 2px;\n  font-weight: normal;\n  line-height: 1.5;\n}\n.title__img {\n  width: 20px;\n}\n.title__type-content {\n  display: flex;\n}\n.title__type {\n  font-size: 12px;\n  color: #222222;\n  margin: auto;\n  padding-left: 10px;\n}\n.prescription {\n  padding: 0px 10px 5px;\n  display: flex;\n  width: 100%;\n}\n.prescription__detail-left {\n  width: 25%;\n  margin: auto;\n}\n.prescription__detail-right {\n  width: 75%;\n}\n.prescription__img {\n  width: 75%;\n}\n.prescription__docname {\n  margin: 0 0 2px;\n  font-size: 15.4px;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #0059b3;\n}\n.prescription__dochosp {\n  margin: 9px 0 0;\n  font-size: 15.4px;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #222;\n}\n.prescription__docdetail {\n  margin: 0 0 2px;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #222;\n}\n.prescription__send {\n  display: flex;\n  margin-top: -5px;\n  width: 30%;\n}\n.prescription__send-left {\n  margin: auto;\n  padding-right: 15px;\n}\n.prescription__send-left-icon {\n  width: 20px;\n  margin-bottom: 15px;\n  margin-bottom: 15px;\n}\n.prescription__select {\n  margin: auto;\n}\n.prescription__nexticon {\n  margin-right: 10px;\n  padding-left: 7px;\n  width: 13px;\n}\n.ptDetail {\n  display: flex;\n  width: 100%;\n  margin-top: -15px;\n}\n.ptDetail__icon {\n  width: 17px;\n  margin-right: 10px;\n}\n.ptDetail__icon1 {\n  width: 17px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n.ptdetailsend {\n  display: flex;\n  width: 70%;\n}\n.icon__remainder {\n  font-size: 20px;\n  padding-left: 13px;\n}\n.icon__send {\n  font-size: 26px;\n  padding-left: 10px;\n}\n.icon__text {\n  padding-left: 5px;\n  font-size: 13px;\n}\n.content {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 1;\n  display: block;\n  overflow-x: hidden;\n  /* overflow-y: scroll; */\n  -webkit-overflow-scrolling: touch;\n  will-change: scroll-position;\n  contain: size style layout;\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .grid-heading {\n    margin-bottom: 88px;\n    padding-bottom: 80px;\n  }\n\n  .search {\n    bottom: -154px;\n  }\n  .search__field {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  }\n  .search__field--input {\n    width: 50%;\n  }\n  .search__field--select {\n    width: 50%;\n  }\n  .search__field--date {\n    width: 50%;\n  }\n  .search__field--button {\n    width: 100%;\n    border-bottom: none;\n  }\n}\n@media (max-width: 575px) {\n  .grid-heading {\n    margin-bottom: 88px;\n    padding-bottom: 80px;\n  }\n\n  .search {\n    bottom: -154px;\n  }\n  .search__field {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  }\n  .search__field--input {\n    width: 50%;\n  }\n  .search__field--select {\n    width: 50%;\n  }\n  .search__field--date {\n    width: 50%;\n  }\n  .search__field--button {\n    width: 100%;\n    border-bottom: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoLWxvY2tlci1wcmVzY3JpcHRpb24vRjpcXHN3YXN0aFxcc3dhc3RodmlydHVhbHBhdGllbnQvc3JjXFxhcHBcXGhlYWx0aC1sb2NrZXItcHJlc2NyaXB0aW9uXFxoZWFsdGgtbG9ja2VyLXByZXNjcmlwdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2hlYWx0aC1sb2NrZXItcHJlc2NyaXB0aW9uL2hlYWx0aC1sb2NrZXItcHJlc2NyaXB0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDSEo7QURJSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUNGUjtBREtBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDRko7QURJQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQS9CVztFQWdDWCxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRko7QURJQTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FESUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNESjtBREVJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsMkNBQUE7QUNBUjtBRENRO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDQ1o7QURDUTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDQ1o7QURDUTtFQUNJLFVBQUE7QUNDWjtBRENRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDQ1o7QURFSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FSO0FERUk7RUFFSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdJO0VBQ0ksYUFBQTtFQUdBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtBQ0hSO0FES0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKUjtBRE1JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0pSO0FETUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFFQSxlQUFBO0FDTFI7QURTQTtFQUNJLGtCQUFBO0FDTko7QURTQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxpQkFBQTtFQUNBLFdBQUE7RUFHQSwrR0FBQTtBQ1JKO0FEVUE7RUFDSSxXQUFBO0FDUEo7QURVQTtFQUNJLFdBQUE7QUNQSjtBRFVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUNQSjtBRFNBO0VBQ0ksYUFBQTtBQ05KO0FEU0E7RUFDSSxrQkFBQTtBQ05KO0FEU0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDTko7QURPSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDTFI7QURNUTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSlI7QURLWTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNIaEI7QURNUTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtBQ0xaO0FET1E7RUFDSSwwQkFBQTtBQ0xaO0FET1E7RUFDSSwwQkFBQTtFQUNBLCtCQUFBO0FDTFo7QURVQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFHQSx1Q0EvTlc7RUFnT1gsYUFBQTtFQUNBLDhCQUFBO0FDVEo7QURVSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDUlI7QURVSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDUlI7QURVSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1JSO0FEVUk7RUFDSSxXQUFBO0FDUlI7QURVSTtFQUNJLGFBQUE7QUNSUjtBRFVJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNSUjtBRFlBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ1RKO0FEVUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ1JSO0FEVUk7RUFDSSxVQUFBO0FDUlI7QURVSTtFQUNJLFVBQUE7QUNSUjtBRFVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNSUjtBRFVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNSUjtBRFVJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1JSO0FEVUk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDUlI7QURTUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ1BaO0FEUVk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ05oQjtBRFVJO0VBQ0ksWUFBQTtBQ1JSO0FEVUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1JSO0FEWUE7RUFDSSxhQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0FDVko7QURXSTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtBQ1ZSO0FEYUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1hSO0FEY0E7RUFDSSxhQUFBO0VBQ0EsVUFBQTtBQ1hKO0FEZUk7RUFHSSxlQUFBO0VBQ0Esa0JBQUE7QUNkUjtBRGlCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ2ZSO0FEa0JJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDaEJSO0FEb0JBO0VBRUksT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDbEJKO0FEcUJBO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLG9CQUFBO0VDbEJOOztFRG9CRTtJQUNJLGNBQUE7RUNqQk47RURrQk07SUFDSSw0Q0FBQTtFQ2hCVjtFRGlCVTtJQUNJLFVBQUE7RUNmZDtFRGlCVTtJQUNJLFVBQUE7RUNmZDtFRGlCVTtJQUNJLFVBQUE7RUNmZDtFRGlCVTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtFQ2ZkO0FBQ0Y7QURtQkE7RUFDSTtJQUNJLG1CQUFBO0lBQ0Esb0JBQUE7RUNqQk47O0VEbUJFO0lBQ0ksY0FBQTtFQ2hCTjtFRGlCTTtJQUNJLDRDQUFBO0VDZlY7RURnQlU7SUFDSSxVQUFBO0VDZGQ7RURnQlU7SUFDSSxVQUFBO0VDZGQ7RURnQlU7SUFDSSxVQUFBO0VDZGQ7RURnQlU7SUFDSSxXQUFBO0lBQ0EsbUJBQUE7RUNkZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhbHRoLWxvY2tlci1wcmVzY3JpcHRpb24vaGVhbHRoLWxvY2tlci1wcmVzY3JpcHRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtaGVhZGluZzogJ011bGktUmVndWxhcicsIHNhbnMtc2VyaWY7XHJcbiRmb250LWJvZHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuLmdyaWQtaGVhZGluZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDhweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKCRjb2xvcnMsIHByaW1hcnkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTliMztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDg5LCAxNzksIDAuNik7XHJcbiAgICB9XHJcbn1cclxuLmdyaWQtaGVhZGluZy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5ncmlkLWhlYWRpbmcgaDIge1xyXG4gICAgLy8gQGV4dGVuZCAubWQtaGVhZGluZy0zO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtaGVhZGluZztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4uZ3JpZC1oZWFkaW5nIHAge1xyXG4gICAgLy8gQGV4dGVuZCAubWQtYm9keS0xO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnNlYXJjaCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC02OXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgICZfX2ZpZWxkIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICAmLS1pbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLS1zZWxlY3Qge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLS1kYXRlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi0tYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2xhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgbGVmdDogMTdweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICM5MTkxOTE7XHJcbiAgICB9XHJcbiAgICAmX19pbnB1dCB7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMTZweDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDhweDtcclxuICAgIH1cclxuICAgICZfX2RhdGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMjZweDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDhweDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIH1cclxuICAgICZfX2J1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcigkY29sb3JzLCBzZWNvbmRhcnkpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGIzOTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgJl9fc2VsZWN0IHtcclxuICAgICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgJl9fc2VsZWN0LWFycm93IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgLy8gY29sb3I6IGNvbG9yKCRjb2xvcnMsIHByaW1hcnkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLnJlbGF0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNlYXJjaGJhci1tZCAuc2VhcmNoYmFyLWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCA4cHggY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiAkZm9udC1ib2R5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKCRjb2xvcnMsIHByaW1hcnktYmcpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuLnNlYXJjaGJhci1tZCAuc2VhcmNoYmFyLWlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG4uc2VhcmNoYmFyLW1kIC5zZWFyY2hiYXItaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG4uc2VhcmNoYmFyLW1kIC5zZWFyY2hiYXItaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC1pbmRlbnQ6IDA7XHJcbiAgICBjb2xvcjogIzIyMjtcclxufVxyXG4uc2VhcmNoYmFyLW1kIC5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA1OWIzO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpLmFjdGl2ZSBhIHtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGFjdGl2ZS1saXN0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU5YjM7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOmZpcnN0LWNoaWxkIGEge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOmxhc3QtY2hpbGQgYSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDA1OWIzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmMmZmO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgOTAsIDc1KTtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1oZWFkaW5nO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICZfX3N1YnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogIzkxOTE5MTtcclxuICAgICAgICBtYXJnaW46IDAgMCAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNS40cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7ICAgXHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgMCAycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG4gICAgJl9fdGV4dDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjsgICBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIH1cclxuICAgICZfX2ltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAmX190eXBlLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAmX190eXBlIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7ICAgXHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxufSAgIFxyXG5cclxuLnByZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweCA1cHg7IFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICZfX2RldGFpbC1sZWZ0IHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgICZfX2RldGFpbC1yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxuICAgICZfX2ltZyB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxuICAgICZfX2RvY25hbWUge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDJweDtcclxuICAgICAgICBmb250LXNpemU6IDE1LjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgY29sb3I6ICMwMDU5YjM7XHJcbiAgICB9XHJcbiAgICAmX19kb2Nob3NwIHtcclxuICAgICAgICBtYXJnaW46IDlweCAwIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNS40cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgfVxyXG4gICAgJl9fZG9jZGV0YWlsIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgIH1cclxuICAgICZfX3NlbmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICYtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fc2VsZWN0IHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICAmX19uZXh0aWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDsgXHJcbiAgICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICB9XHJcbn0gXHJcblxyXG4ucHREZXRhaWwge1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICZfX2ljb24ge1xyXG4gICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgfVxyXG4gICAgJl9faWNvbjEge1xyXG4gICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbi5wdGRldGFpbHNlbmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgICZfX3JlbWFpbmRlciB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICAgICAgLy8gY29sb3I6IGNvbG9yKCRjb2xvcnMsIGRhbmdlcik7XHJcbiAgICB9XHJcbiAgICAmX19zZW5kIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIC8vIGNvbG9yOiBjb2xvcigkY29sb3JzLCBzZWNvbmRhcnkpO1xyXG4gICAgfVxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcigkY29sb3JzLCBwcmltYXJ5LWJnKTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIHdpbGwtY2hhbmdlOiBzY3JvbGwtcG9zaXRpb247XHJcbiAgICBjb250YWluOiBzaXplIHN0eWxlIGxheW91dDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5ncmlkLWhlYWRpbmcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDg4cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoIHtcclxuICAgICAgICBib3R0b206IC0xNTRweDtcclxuICAgICAgICAmX19maWVsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgICAgICAgICAmLS1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtLXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtLWRhdGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgLmdyaWQtaGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODhweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gge1xyXG4gICAgICAgIGJvdHRvbTogLTE1NHB4O1xyXG4gICAgICAgICZfX2ZpZWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAgICAgICAgICYtLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi0tc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi0tZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmdyaWQtaGVhZGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZy10b3A6IDQ4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1OWIzO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uZ3JpZC1oZWFkaW5nOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgODksIDE3OSwgMC42KTtcbn1cblxuLmdyaWQtaGVhZGluZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZGluZyBoMiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZ3JpZC1oZWFkaW5nIHAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC02OXB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLnNlYXJjaF9fZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5zZWFyY2hfX2ZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuLnNlYXJjaF9fZmllbGQtLWlucHV0IHtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG4uc2VhcmNoX19maWVsZC0tc2VsZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgd2lkdGg6IDIwJTtcbn1cbi5zZWFyY2hfX2ZpZWxkLS1kYXRlIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5zZWFyY2hfX2ZpZWxkLS1idXR0b24ge1xuICB3aWR0aDogMjAlO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uc2VhcmNoX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5cHg7XG4gIGxlZnQ6IDE3cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM5MTkxOTE7XG59XG4uc2VhcmNoX19pbnB1dCB7XG4gIGJvcmRlcjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xufVxuLnNlYXJjaF9fZGF0ZSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjIyO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG4uc2VhcmNoX19idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMzk1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNlYXJjaF9fc2VsZWN0IHtcbiAgcGFkZGluZzogMTRweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNlYXJjaF9fc2VsZWN0LWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDhweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlYXJjaGJhci1tZCAuc2VhcmNoYmFyLWlucHV0IHtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCA4cHggY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgY29sb3I6ICMyMjI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zZWFyY2hiYXItbWQgLnNlYXJjaGJhci1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4uc2VhcmNoYmFyLW1kIC5zZWFyY2hiYXItaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi5zZWFyY2hiYXItbWQgLnNlYXJjaGJhci1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtaW5kZW50OiAwO1xuICBjb2xvcjogIzIyMjtcbn1cblxuLnNlYXJjaGJhci1tZCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnBhZ2luYXRpb24gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGFnaW5hdGlvbiB1bCBsaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnBhZ2luYXRpb24gdWwgbGkgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1OWIzO1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG4ucGFnaW5hdGlvbiB1bCBsaS5hY3RpdmUgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU5YjM7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnBhZ2luYXRpb24gdWwgbGk6Zmlyc3QtY2hpbGQgYSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xufVxuLnBhZ2luYXRpb24gdWwgbGk6bGFzdC1jaGlsZCBhIHtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDU5YjM7XG59XG5cbi50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udGl0bGVfX3N1YnRpdGxlIHtcbiAgY29sb3I6ICM5MTkxOTE7XG4gIG1hcmdpbjogMCAwIDJweDtcbiAgZm9udC1zaXplOiAxNS40cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4udGl0bGVfX3RleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDAgMCAycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4udGl0bGVfX3RleHQxIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBtYXJnaW46IDAgMCAycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4udGl0bGVfX2ltZyB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnRpdGxlX190eXBlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRpdGxlX190eXBlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5wcmVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAwcHggMTBweCA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByZXNjcmlwdGlvbl9fZGV0YWlsLWxlZnQge1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW46IGF1dG87XG59XG4ucHJlc2NyaXB0aW9uX19kZXRhaWwtcmlnaHQge1xuICB3aWR0aDogNzUlO1xufVxuLnByZXNjcmlwdGlvbl9faW1nIHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5wcmVzY3JpcHRpb25fX2RvY25hbWUge1xuICBtYXJnaW46IDAgMCAycHg7XG4gIGZvbnQtc2l6ZTogMTUuNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzAwNTliMztcbn1cbi5wcmVzY3JpcHRpb25fX2RvY2hvc3Age1xuICBtYXJnaW46IDlweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTUuNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzIyMjtcbn1cbi5wcmVzY3JpcHRpb25fX2RvY2RldGFpbCB7XG4gIG1hcmdpbjogMCAwIDJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzIyMjtcbn1cbi5wcmVzY3JpcHRpb25fX3NlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICB3aWR0aDogMzAlO1xufVxuLnByZXNjcmlwdGlvbl9fc2VuZC1sZWZ0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLnByZXNjcmlwdGlvbl9fc2VuZC1sZWZ0LWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5wcmVzY3JpcHRpb25fX3NlbGVjdCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5wcmVzY3JpcHRpb25fX25leHRpY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgd2lkdGg6IDEzcHg7XG59XG5cbi5wdERldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbi5wdERldGFpbF9faWNvbiB7XG4gIHdpZHRoOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucHREZXRhaWxfX2ljb24xIHtcbiAgd2lkdGg6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnB0ZGV0YWlsc2VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5pY29uX19yZW1haW5kZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbn1cbi5pY29uX19zZW5kIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uaWNvbl9fdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jb250ZW50IHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICBjb250YWluOiBzaXplIHN0eWxlIGxheW91dDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmdyaWQtaGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogODhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgfVxuXG4gIC5zZWFyY2gge1xuICAgIGJvdHRvbTogLTE1NHB4O1xuICB9XG4gIC5zZWFyY2hfX2ZpZWxkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgfVxuICAuc2VhcmNoX19maWVsZC0taW5wdXQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnNlYXJjaF9fZmllbGQtLXNlbGVjdCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuc2VhcmNoX19maWVsZC0tZGF0ZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuc2VhcmNoX19maWVsZC0tYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmdyaWQtaGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogODhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgfVxuXG4gIC5zZWFyY2gge1xuICAgIGJvdHRvbTogLTE1NHB4O1xuICB9XG4gIC5zZWFyY2hfX2ZpZWxkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgfVxuICAuc2VhcmNoX19maWVsZC0taW5wdXQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnNlYXJjaF9fZmllbGQtLXNlbGVjdCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuc2VhcmNoX19maWVsZC0tZGF0ZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuc2VhcmNoX19maWVsZC0tYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/health-locker-prescription/health-locker-prescription.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/health-locker-prescription/health-locker-prescription.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: HealthLockerPrescriptionPage */

  /***/
  function srcAppHealthLockerPrescriptionHealthLockerPrescriptionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthLockerPrescriptionPage", function () {
      return HealthLockerPrescriptionPage;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _pagination_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../pagination-service.service */
    "./src/app/pagination-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../storage/swasth-storage.service */
    "./src/app/storage/swasth-storage.service.ts");
    /* harmony import */


    var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/login-auth.service */
    "./src/app/services/login-auth.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _razorpay_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../razorpay.service */
    "./src/app/razorpay.service.ts");
    /* harmony import */


    var Firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! Firebase */
    "./node_modules/Firebase/index.js");
    /* harmony import */


    var Firebase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_13__);

    var HealthLockerPrescriptionPage = /*#__PURE__*/function () {
      function HealthLockerPrescriptionPage(authService, platform, modalCtrl, loadingCtrl, toastCtrl, alertCtrl, popoverCtrl, file, opener, jwtHelper, pagerService, router, swStorage, loginAuth, razorpayService, dataService) {
        _classCallCheck(this, HealthLockerPrescriptionPage);

        this.authService = authService;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.file = file;
        this.opener = opener;
        this.pagerService = pagerService;
        this.router = router;
        this.swStorage = swStorage;
        this.loginAuth = loginAuth;
        this.razorpayService = razorpayService;
        this.dataService = dataService;
        this.autoRefreshPresc = Firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('autorefresh/prescription'); // pager object

        this.pager = {};
        this.tabs = [];
        this.background = "";
        this.doctors = [];
        this.msgblk = false;
        this.autoValue = "yes";
        this.diagAuto = "yes";
        this.docAuto = "yes";
        this.hospAuto = "yes";
        this.docStatus = 0;
        this.prescriptionDocuments = {};
        this.medicineList = [];
        this.labTestList = [];
        this.platformAndroid = false;
        this.platformMobileBrowser = false;
        this.platformWebBrowser = false;
        this.pendingPaymentStatus = false;
        /* this.background = this.authService.site_url+'bg-img-11.jpeg';
        // this.background = '/assets/imgs/bg-img-11.jpeg';
        
        if(this.platform.is('android')) {
          this.platformAndroid=true;
          this.platformWebBrowser=false;
          this.platformMobileBrowser=false;
        }
        if(this.platform.is('mobileweb')) {
         this.platformAndroid=false;
         this.platformMobileBrowser=true;
         this.platformWebBrowser=false;
        }
        if(this.platform.is('desktop')) {
         this.platformAndroid=false;
         this.platformMobileBrowser=false;
         this.platformWebBrowser=true;
        }
              this.authService
        .authUser
        .subscribe(jwt => {
          if (jwt) {
            const decoded = jwtHelper.decodeToken(jwt);
            this.familymemberId=decoded.UID;
            console.log("Family Member Id.."+this.familymemberId);
            this.authService
            .patientdetail(this.familymemberId)
            .subscribe(data => {
              console.log("gggggggggggggggggggg",data);
              if(data!==null){
                this.userdetail=data;
                console.log("Data--->",this.userdetail);
                this.userID = this.userdetail.userID;
                // patdiaglist.userID = this.userID;
                // hospnamelist.userID = this.userID;
                this.myPrescriptions();
                this.doctorsList();
                this.getAllCircleList();
              }
            });
          }
        }); */
      }

      _createClass(HealthLockerPrescriptionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // throw new Error("Method not implemented.");
          this.background = this.authService.site_url + 'bg-img-11.jpeg'; // this.background = '/assets/imgs/bg-img-11.jpeg';     

          if (this.platform.is('android')) {
            this.platformAndroid = true;
            this.platformWebBrowser = false;
            this.platformMobileBrowser = false;
          }

          if (this.platform.is('mobileweb')) {
            this.platformAndroid = false;
            this.platformMobileBrowser = true;
            this.platformWebBrowser = false;
          }

          if (this.platform.is('desktop')) {
            this.platformAndroid = false;
            this.platformMobileBrowser = false;
            this.platformWebBrowser = true;
          }

          this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(function (data) {
            if (data !== null) {
              _this.userdetail = data;
              console.log("Data--->", _this.userdetail);
              _this.userID = _this.userdetail.userID; // patdiaglist.userID = this.userID;
              // hospnamelist.userID = this.userID;

              _this.prescriptionAndPayRestriction();

              _this.doctorsList();
            }
          }); // this.autoRefreshPresc.on('value', resp => {
          //   console.log("auto triage values---->", resp.val());
          //   let res = resp.val();
          //   if(res.trigger) {
          //     //this.myPrescriptions();
          //     this.prescriptionAndPayRestriction();
          //     this.doctorsList();
          //     let pushData = this.autoRefreshPresc.set({
          //       trigger: false
          //     });
          //     //this.autoRefreshPresc.child("trigger").update(false);
          //   }      
          // });
        } //Get Prescriptions list and payment pending restriction

      }, {
        key: "prescriptionAndPayRestriction",
        value: function prescriptionAndPayRestriction() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var tenantID;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    tenantID = [];
                    this.authService.getPtCircleList(this.userdetail.userID).subscribe(function (data) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this3 = this;

                        var _iterator, _step, cd, search, loading, billObj;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log("Circle data", data);
                                this.circleDetail = data;

                                if (!(this.circleDetail != null)) {
                                  _context.next = 16;
                                  break;
                                }

                                _iterator = _createForOfIteratorHelper(this.circleDetail);

                                try {
                                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                    cd = _step.value;
                                    tenantID.push(cd.vhEntity.circleCode);
                                  }
                                } catch (err) {
                                  _iterator.e(err);
                                } finally {
                                  _iterator.f();
                                }

                                search = {
                                  tenantid: tenantID
                                };
                                console.log("search", JSON.stringify(search));
                                _context.next = 9;
                                return this.loadingCtrl.create({
                                  spinner: 'bubbles',
                                  message: ''
                                });

                              case 9:
                                loading = _context.sent;
                                _context.next = 12;
                                return loading.present();

                              case 12:
                                this.authService.singleCirclePrescriptionList(this.userID, search).subscribe(function (data) {
                                  console.log("prescription list", data);
                                  _this3.allItems = data;
                                  loading.dismiss();

                                  _this3.setPage(1);
                                }); // payment restriction

                                billObj = {
                                  circleCodeList: tenantID
                                };
                                console.log("billobj========>", billObj, tenantID);
                                this.authService.getConsultFeeDetailAllCircle(billObj, this.userID).subscribe(function (data) {
                                  console.log("data", data);

                                  if (data != null) {
                                    _this3.feeDetail = data;
                                    _this3.pendingBillDetail = _this3.feeDetail.filter(function (data) {
                                      return data.paymentStatus == "Pending";
                                    });
                                    console.log("fee status======>", _this3.pendingBillDetail);
                                    _this3.paymentStatus = _this3.feeDetail.paymentStatus;

                                    if (_this3.pendingBillDetail.length >= 1) {
                                      console.log("pending payment");
                                      _this3.pendingPaymentStatus = true;

                                      _this3.consultPayment();
                                    }
                                  }
                                });

                              case 16:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "singlePrescription",
        value: function singlePrescription(dxid) {
          var _this4 = this;

          this.authService.uniquePrescription(dxid).subscribe(function (data) {
            console.log(data);
            _this4.uniquePresc = data;
          });
        } //Get doctors list

      }, {
        key: "doctorsList",
        value: function doctorsList() {
          var _this5 = this;

          this.authService.doctorsList().subscribe(function (data) {
            // debugger;
            console.log("doctor list", data);
            _this5.doctors = data;
          });
        } // get all circle list

      }, {
        key: "getAllCircleList",
        value: function getAllCircleList() {
          var _this6 = this;

          this.authService.getAllCircleDetailList().subscribe(function (data) {
            _this6.allCircleList = data;
            console.log("all circleList", _this6.allCircleList);
          });
        }
      }, {
        key: "linkPrescription",
        value: function linkPrescription(dxid, docuid, prescriptionType) {
          var _this7 = this;

          console.log("link prescription", prescriptionType, dxid, docuid);

          if (prescriptionType == 'Doctor' || prescriptionType == null) {
            this.authService.getDocumentsByDxid(dxid).subscribe(function (data) {
              // debugger;
              console.log(data);
              var data1 = data;

              if (data1.length > 0) {
                var _iterator2 = _createForOfIteratorHelper(data1),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var i = _step2.value;
                    _this7.prescriptionDocuments = i;
                    console.log("Data==>", i);
                    break;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                _this7.documentType = _this7.prescriptionDocuments.documentType;
                _this7.documentKey = _this7.prescriptionDocuments.docuemntKey;
                console.log("document type", _this7.documentType);

                if (_this7.documentType == "application/pdf") {
                  _this7.downloadDocument(_this7.prescriptionDocuments.docuemntKey);
                } else if (_this7.documentType == "image/jpeg" || _this7.documentType == "image/png") {// this.navCtrl.push(ViewhealthlockerprescriptionPage,{dxID:dxid});
                }
              } else {
                var doc = _this7.doctors.find(function (item) {
                  return item.docUserID === docuid;
                });

                console.log(JSON.stringify(doc));
                console.log("dxid===" + dxid);
                console.log("docuid===" + docuid);

                _this7.authService.uniquePrescription(dxid).subscribe(function (data) {
                  console.log(data);
                  _this7.uniquePresc = data;

                  _this7.viewPrescription(doc, _this7.uniquePresc);
                });
              }
            });
          } else if (prescriptionType == "Patient") {
            this.viewDocuments(dxid);
          }
        }
      }, {
        key: "viewPrescription",
        value: function viewPrescription(doc, uniquePresc) {
          /* let navigationExtras: NavigationExtras = {
            state: {
              docdetail: doc,
              userdetail: this.userdetail,
              dxid: uniquePresc
            }
          };
          console.log("navig extras",navigationExtras);
          this.router.navigate(['pt-eprescription'], navigationExtras); */
          console.log("doc======>", doc);
          var presc = {
            docdetail: doc,
            dxid: uniquePresc
          };
          this.dataService.setData(24, presc);
          this.router.navigateByUrl('pt-eprescription/24');
        }
      }, {
        key: "PrescriptionSearch",
        value: function PrescriptionSearch(value) {
          var _this8 = this;

          console.log("Form Value", value); // var dxfd = this.diagsearch.getValue();

          var docuid = value.searchDoctor; // var hospname = this.hospsearch.getValue();

          var date = value.searchDate;
          var search = {
            dxfd: "",
            docuid: "",
            hospname: "",
            date: "",
            userid: this.userID
          };

          if (date != undefined) {
            search.date = date;
          } // if(dxfd!=null && dxfd!=undefined) {
          //   search.dxfd = dxfd;
          // }
          // if(docuid!=null && docuid!=undefined) {
          //   if(this.docStatus==1){
          //     search.docuid = docuid.docUserID;
          //   }
          // }
          // if(hospname!=null && hospname!=undefined) {
          //   search.hospname = hospname;
          // }


          if (search.docuid == "") {
            this.docStatus = 0;
          }

          console.log("prescription search 1", search);
          this.pagedItems = [];

          if (this.docStatus == 2) {
            console.log("if of searchAPI");
            this.authService.docUIDSearch(this.docUid).subscribe(function (data) {
              console.log("oninput docuid", data);

              if (data != null) {
                var docObj = data;
                search.docuid = docObj.docUserID;

                _this8.authService.prescriptionSearch(search).subscribe(function (data) {
                  console.log("prescription list", data);

                  if (data != null) {
                    _this8.allItems = data;

                    if (_this8.allItems.length > 0) {
                      _this8.msgblk = false;

                      _this8.setPage(1);
                    } else {
                      _this8.msgblk = true;

                      _this8.setPage(0);
                    }
                  } else {
                    _this8.msgblk = true;
                  }
                });
              } else {
                _this8.msgblk = true;
              }
            });
          } else {
            console.log("else of searchAPI");
            this.authService.prescriptionSearch(search).subscribe(function (data) {
              console.log("prescription list", data);

              if (data != null) {
                _this8.allItems = data;

                if (_this8.allItems.length > 0) {
                  _this8.msgblk = false;

                  _this8.setPage(1);
                } else {
                  _this8.msgblk = true;

                  _this8.setPage(0);
                }
              } else {
                _this8.msgblk = true;
              }
            });
          }
        }
      }, {
        key: "getVal",
        value: function getVal(ev) {
          //this.docsearch.writeValue(ev.docUserID);
          // console.log("doc get val", ev);
          this.docStatus = 1;
        }
      }, {
        key: "keyUp",
        value: function keyUp(event) {
          console.log("keydown event", event.key);
          this.keyCode = event.keyCode;
        }
      }, {
        key: "onInput",
        value: function onInput($event, field) {
          this.autoValue = "no";
          console.log("oninput", $event);

          switch (field) {
            case 'diagnosis':
              // this.diagsearch.writeValue($event);  uncomment  
              // console.log("diagoniput write value", this.diagsearch);
              // this.diagValue = this.diagsearch.getValue().toUpperCase();
              break;

            case 'doctor':
              console.log("event", $event); // this.docUid = $event; uncomment
              // console.log("doconiput write value", this.docsearch);
              // this.docUid = this.docsearch.getValue().toUpperCase();

              this.docStatus = 2;
              break;

            case 'hospital':
              // this.hospsearch.writeValue($event); uncomment
              // this.hospName = this.hospsearch.getValue().toUpperCase();
              break;
          }
        }
      }, {
        key: "viewDocuments",
        value: function viewDocuments(dxid) {
          var _this9 = this;

          this.authService.getDocumentsByDxid(dxid).subscribe(function (data) {
            // debugger;
            console.log(data);
            var data1 = data;

            var _iterator3 = _createForOfIteratorHelper(data1),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var i = _step3.value;
                _this9.prescriptionDocuments = i;
                console.log("Data==>", i);
                break;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            _this9.documentType = _this9.prescriptionDocuments.documentType;

            if (_this9.documentType == "application/pdf") {
              _this9.downloadDocument(_this9.prescriptionDocuments.docuemntKey);
            } else if (_this9.documentType == "image/jpeg" || _this9.documentType == "image/png") {// this.navCtrl.push(ViewhealthlockerprescriptionPage,{dxID:dxid});
            }
          });
        }
      }, {
        key: "downloadDocument",
        value: function downloadDocument(keyname) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this10 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingCtrl.create({
                      spinner: 'bubbles',
                      message: ''
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    this.authService.downloadDocumentByKeyname(keyname).subscribe(function (data) {
                      // debugger;
                      console.log(data);
                      _this10.documentObject = data;
                      loading.dismiss();

                      if (_this10.documentObject != null) {
                        if (_this10.platform.is('android') || _this10.platform.is('mobileweb')) {
                          _this10.viewMobilePdf();
                        } else {
                          _this10.viewPdf();
                        }
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
        key: "viewPdf",
        value: function viewPdf() {
          /* let pdfWindow = window.open('', '_self'); */
          var pdfWindow = window.open();
          var pdf = pdfWindow.document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64, " + this.documentObject + "'></iframe>");
        }
      }, {
        key: "viewMobilePdf",
        value: function viewMobilePdf() {
          var _this11 = this;

          var filename = "prescription.pdf";
          var writeDirectory = this.platform.is('ios') ? this.file.dataDirectory : this.file.externalDataDirectory;
          var blob = new Blob();
          blob = this.convertBase64ToBlob(this.documentObject, 'data:application/pdf;base64');
          this.file.writeFile(writeDirectory, filename, blob, {
            replace: true
          }).then(function () {
            _this11.opener.open(writeDirectory + filename, 'application/pdf')["catch"](function () {
              console.log('Error opening pdf file');
            });
          })["catch"](function () {
            console.error('Error writing pdf file');
          });
        }
      }, {
        key: "convertBase64ToBlob",
        value: function convertBase64ToBlob(b64Data, contentType) {
          contentType = '';
          var sliceSize = 512;
          b64Data = b64Data.replace(/^[^,]+,/, '');
          b64Data = b64Data.replace(/\s/g, '');
          var byteCharacters = window.atob(b64Data);
          var byteArrays = [];

          for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);

            for (var i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
          }

          return new Blob(byteArrays, {
            type: contentType
          });
        }
      }, {
        key: "sendPrescription",
        value: function sendPrescription(prescription) {
          var _this12 = this;

          console.log("prescription", prescription);
          this.authService.getDocumentsByDxid(prescription.ptDxID).subscribe(function (data) {
            // debugger;
            console.log(data);
            var document = data;

            var _iterator4 = _createForOfIteratorHelper(document),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var i = _step4.value;
                _this12.prescriptionDocuments = i;
                break;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            if (document.length > 0) {
              _this12.authService.downloadDocumentByKeyname(_this12.prescriptionDocuments.docuemntKey).subscribe(function (data1) {
                // debugger;
                console.log(data1);
                var imgdata = data1;

                if (imgdata != null) {
                  _this12.documentObject = 'data:image/jpeg;base64,' + imgdata;

                  var doc = _this12.doctors.find(function (item) {
                    return item.docUserID === prescription.docUserID;
                  });

                  console.log("docuser", doc); // let popover = this.modalCtrl.create(SendPharModalPage, {data:"Hello", prescriptionDetail:prescription, docDetail:doc, documentObject:this.documentObject, prescriptionDocuments:this.prescriptionDocuments},{cssClass: 'appointment-popover'});
                  // popover.onDidDismiss(data=>{
                  // });
                  // popover.present({});
                } else {
                  console.log("no");
                }
              });
            } else {
              var doc = _this12.doctors.find(function (item) {
                return item.docUserID === prescription.docUserID;
              });

              console.log("docuser", doc); // let popover = this.modalCtrl.create(SendPharModalPage, {data:"Hello", prescriptionDetail:prescription, docDetail:doc},{cssClass: 'appointment-popover'});
              // popover.onDidDismiss(data=>{});
              // popover.present({});
            }
          });
        }
      }, {
        key: "remainderModal",
        value: function remainderModal(meddata) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (meddata.length > 0) {// alert("kjdbjkdbjd");
                      // const modal = await this.modalCtrl.create(MedRemainderModalPage,{ med: meddata });
                      // return await modal.present();    
                    } else {
                      console.log("no medicine"); // const modal = await this.modalCtrl.create(MedicineRemainderPage,{ data:this.userdetail, medreminder: "presreminder" });
                      // return await modal.present();    
                    }

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "setPage",
        value: function setPage(page) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingCtrl.create({
                      spinner: 'bubbles',
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context5.sent;
                    _context5.next = 5;
                    return loading.present();

                  case 5:
                    // get pager object from service
                    this.pager = this.pagerService.getPager(this.allItems.length, page); // get current page of items

                    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
                    console.log("pageditem", this.pagedItems);
                    loading.dismiss();

                  case 9:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginAuth.logout();
        }
      }, {
        key: "consultPayment",
        value: function consultPayment() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this13 = this;

            var paymentCircle, payDocDetail, alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    console.log("circle detail", this.circleDetail);
                    paymentCircle = this.circleDetail.filter(function (data) {
                      return data.vhEntity.circleCode == _this13.pendingBillDetail[0].circleCode;
                    });
                    console.log("payment circle", paymentCircle);
                    payDocDetail = paymentCircle[0].cdProfileRole.filter(function (data) {
                      return data.docProfile.docUserID == _this13.pendingBillDetail[0].docUserID;
                    });
                    console.log("paydocdetail", payDocDetail);
                    alert = this.alertCtrl.create({
                      header: 'Payment',
                      message: '<strong>Circle: </strong>' + paymentCircle[0].vhEntity.circleName + '<br>' + '<strong>Doctor: </strong>' + payDocDetail[0].docProfile.docFirstName + ' ' + payDocDetail[0].docProfile.docLastName + '<br>' + '<strong>Fee: ₹</strong>' + this.pendingBillDetail[0].transAmount + '<br><br>' + 'Pay your consultation fee to the doctor for further accessing of all swasth features',
                      buttons: [{
                        text: 'Pay',
                        handler: function handler() {
                          console.log('yes');

                          _this13.feePayment();
                        }
                      }, {
                        text: 'Cancel',
                        handler: function handler() {
                          console.log("cancel");
                        }
                      }]
                    });
                    _context6.next = 8;
                    return alert;

                  case 8:
                    _context6.sent.present();

                  case 9:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // payment for consultation fee

      }, {
        key: "feePayment",
        value: function feePayment() {
          console.log("fee detail", this.pendingBillDetail);
          var options = {
            description: 'Credits towards consultation',
            // image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_SeRkqskw09t911',
            amount: this.pendingBillDetail[0].transAmount * 100,
            name: this.userdetail.ptFirstName + " " + this.userdetail.ptLastName,
            'handler': this.paymentCapture.bind(this),
            prefill: {
              email: this.userdetail.ptEmailID,
              contact: this.userdetail.ptMobileNo,
              name: this.userdetail.ptFirstName + " " + this.userdetail.ptLastName,
              patient_uid: this.userdetail.userID,
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

          console.log("payment condition", successCallback);
          Razorpay.open(options, successCallback, cancelCallback);
        }
      }, {
        key: "paymentCapture",
        value: function paymentCapture(response) {
          var _this14 = this;

          this.paymentId = response.razorpay_payment_id;
          console.log("if condition"); // console.log("payment id "+this.paymentId, this.feeDetail);

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
              _this14.paymentDetail = data;
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
      }]);

      return HealthLockerPrescriptionPage;
    }();

    HealthLockerPrescriptionPage.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]
      }, {
        type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]
      }, {
        type: _pagination_service_service__WEBPACK_IMPORTED_MODULE_7__["PaginationServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_9__["SwasthStorageService"]
      }, {
        type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_10__["LoginAuthService"]
      }, {
        type: _razorpay_service__WEBPACK_IMPORTED_MODULE_12__["RazorpayService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"]
      }];
    };

    HealthLockerPrescriptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-health-locker-prescription',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./health-locker-prescription.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/health-locker-prescription/health-locker-prescription.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./health-locker-prescription.page.scss */
      "./src/app/health-locker-prescription/health-locker-prescription.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"], _pagination_service_service__WEBPACK_IMPORTED_MODULE_7__["PaginationServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_9__["SwasthStorageService"], _services_login_auth_service__WEBPACK_IMPORTED_MODULE_10__["LoginAuthService"], _razorpay_service__WEBPACK_IMPORTED_MODULE_12__["RazorpayService"], _services_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"]])], HealthLockerPrescriptionPage);
    /***/
  }
}]);
//# sourceMappingURL=health-locker-prescription-health-locker-prescription-module-es5.js.map