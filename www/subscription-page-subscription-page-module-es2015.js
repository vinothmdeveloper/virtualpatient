(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-page-subscription-page-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subscription-page/subscription-page.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscription-page/subscription-page.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle; padding-left: 15px;\">\r\n      <ion-title>Swasth</ion-title>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"exit-outline\" style=\"font-size: 26px;\" (click)=\"logout()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col class=\"regis__heading\">\r\n      <h1>Become a Premium</h1>\r\n      <p>Get access to health locker and other swasth features with premium subscription</p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-grid fixed *ngIf=\"ptDetail!=undefined\">\r\n    <ion-row style=\"margin-top: 10px;\" *ngIf=\"ptDetail.accountType=='Family'\">\r\n      <ion-col size=\"12\" sizeMd=\"6\" offsetMd=\"3\" *ngIf=\"rzPlanList!=undefined\">\r\n        <ion-card *ngFor=\"let pl of rzPlanList.items index as i\">\r\n          <ng-container *ngIf=\"i<2\">\r\n            <ion-card-content *ngIf=\"ptDetail.accountType=='Family' && pl.item.name=='Plan A'\">\r\n              <div style=\"width: 100%; display: flex;\">\r\n                <div style=\"width: 65%;\">\r\n                  <ion-card-subtitle>{{pl.item.name}}</ion-card-subtitle>\r\n                  <ion-card-title>₹ {{showAmount(pl.item.amount)}}/ {{pl.period}}</ion-card-title>\r\n                  <p>{{pl.item.description}}</p>\r\n                </div>\r\n                <div style=\"width: 35%; margin: auto;\">\r\n                  <ion-button (click)=\"createSubscripe(pl.id,pl.item)\">Subscribe</ion-button>\r\n                </div>\r\n              </div>\r\n            </ion-card-content>\r\n          </ng-container>\r\n        </ion-card>\r\n        <!-- <ion-card>\r\n          <ion-card-content>\r\n            <div style=\"width: 100%; display: flex;\">\r\n              <div style=\"width: 65%;\">\r\n                <ion-card-subtitle>Yearly</ion-card-subtitle>\r\n                <ion-card-title>₹ 80/ month</ion-card-title>\r\n                <p>Subscription Charged yearly - ₹960</p>\r\n              </div>\r\n              <div style=\"width: 35%; margin: auto;\">\r\n                <ion-button>Subscribe</ion-button>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card> -->\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"margin-top: 10px;\" *ngIf=\"familyMember==true\">\r\n      <ion-col size=\"12\" sizeMd=\"6\" offsetMd=\"3\" *ngIf=\"rzPlanList!=undefined\">\r\n        <ion-card *ngFor=\"let pl of rzPlanList.items index as i\">\r\n          <ng-container *ngIf=\"i<2\">\r\n            <ion-card-content *ngIf=\"pl.item.name=='Plan A'\">\r\n              <div style=\"width: 100%; display: flex;\">\r\n                <div style=\"width: 65%;\">\r\n                  <ion-card-subtitle>{{pl.item.name}}</ion-card-subtitle>\r\n                  <ion-card-title>₹ {{showAmount(pl.item.amount)}}/ {{pl.period}}</ion-card-title>\r\n                  <p>{{pl.item.description}}</p>\r\n                </div>\r\n                <div style=\"width: 35%; margin: auto;\">\r\n                  <ion-button (click)=\"createSubscripe(pl.id,pl.item)\">Subscribe</ion-button>\r\n                </div>\r\n              </div>\r\n            </ion-card-content>\r\n          </ng-container>\r\n        </ion-card>\r\n        <!-- <ion-card>\r\n          <ion-card-content>\r\n            <div style=\"width: 100%; display: flex;\">\r\n              <div style=\"width: 65%;\">\r\n                <ion-card-subtitle>Yearly</ion-card-subtitle>\r\n                <ion-card-title>₹ 80/ month</ion-card-title>\r\n                <p>Subscription Charged yearly - ₹960</p>\r\n              </div>\r\n              <div style=\"width: 35%; margin: auto;\">\r\n                <ion-button>Subscribe</ion-button>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card> -->\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"margin-top: 10px;\" *ngIf=\"ptDetail.accountType!='Family' && familyMember!=true\">\r\n      <ion-col size=\"12\" sizeMd=\"6\" offsetMd=\"3\" *ngIf=\"rzPlanList!=undefined\">\r\n        <ion-card *ngFor=\"let pl of rzPlanList.items index as i\">\r\n          <ng-container *ngIf=\"i<2\">\r\n            <ion-card-content>\r\n              <div style=\"width: 100%; display: flex;\">\r\n                <div style=\"width: 65%;\">\r\n                  <ion-card-subtitle>{{pl.item.name}}</ion-card-subtitle>\r\n                  <ion-card-title>₹ {{showAmount(pl.item.amount)}}/ {{pl.period}}</ion-card-title>\r\n                  <p>{{pl.item.description}}</p>\r\n                </div>\r\n                <div style=\"width: 35%; margin: auto;\">\r\n                  <ion-button (click)=\"createSubscripe(pl.id,pl.item)\">Subscribe</ion-button>\r\n                </div>\r\n              </div>\r\n            </ion-card-content>\r\n          </ng-container>\r\n        </ion-card>\r\n        <!-- <ion-card>\r\n          <ion-card-content>\r\n            <div style=\"width: 100%; display: flex;\">\r\n              <div style=\"width: 65%;\">\r\n                <ion-card-subtitle>Yearly</ion-card-subtitle>\r\n                <ion-card-title>₹ 80/ month</ion-card-title>\r\n                <p>Subscription Charged yearly - ₹960</p>\r\n              </div>\r\n              <div style=\"width: 35%; margin: auto;\">\r\n                <ion-button>Subscribe</ion-button>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card> -->\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <p style=\"font-weight: bold; padding-left: 10px; text-decoration: underline; color: #222222;\">Terms &\r\n          Conditions:</p>\r\n        <p\r\n          style=\"color: #737373;font-weight: 100; text-indent: 40px; padding-left: 10px; padding-right: 10px; word-break: break-all; font-size: 14px;\">\r\n          ddada dada da da da da da da d dsa das da d ad ad sad sad ad ad ad ad sadas da da da da da dada dsada.</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/subscription-page/subscription-page-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/subscription-page/subscription-page-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SubscriptionPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPagePageRoutingModule", function() { return SubscriptionPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _subscription_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription-page.page */ "./src/app/subscription-page/subscription-page.page.ts");




const routes = [
    {
        path: '',
        component: _subscription_page_page__WEBPACK_IMPORTED_MODULE_3__["SubscriptionPagePage"]
    }
];
let SubscriptionPagePageRoutingModule = class SubscriptionPagePageRoutingModule {
};
SubscriptionPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscriptionPagePageRoutingModule);



/***/ }),

/***/ "./src/app/subscription-page/subscription-page.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/subscription-page/subscription-page.module.ts ***!
  \***************************************************************/
/*! exports provided: SubscriptionPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPagePageModule", function() { return SubscriptionPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _subscription_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription-page-routing.module */ "./src/app/subscription-page/subscription-page-routing.module.ts");
/* harmony import */ var _subscription_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription-page.page */ "./src/app/subscription-page/subscription-page.page.ts");







let SubscriptionPagePageModule = class SubscriptionPagePageModule {
};
SubscriptionPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subscription_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionPagePageRoutingModule"]
        ],
        declarations: [_subscription_page_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionPagePage"]]
    })
], SubscriptionPagePageModule);



/***/ }),

/***/ "./src/app/subscription-page/subscription-page.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/subscription-page/subscription-page.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".regis__heading {\n  height: 180px;\n  padding-top: 50px;\n  background-image: linear-gradient(120deg, #0059b3, #00b395);\n}\n.regis__heading h1 {\n  text-align: center;\n  color: #fff;\n  text-shadow: 1px 1px 5px #222222;\n}\n.regis__heading p {\n  text-align: center;\n  color: #fff;\n}\nion-button {\n  --border-radius: 30px;\n  --background: #00b395;\n}\nion-card {\n  --background:aliceblue;\n  border-radius: 10px;\n}\nion-card ion-card-title {\n  color: #0059b3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NyaXB0aW9uLXBhZ2UvRjpcXHN3YXN0aFxcc3dhc3RodmlydHVhbHBhdGllbnQvc3JjXFxhcHBcXHN1YnNjcmlwdGlvbi1wYWdlXFxzdWJzY3JpcHRpb24tcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1YnNjcmlwdGlvbi1wYWdlL3N1YnNjcmlwdGlvbi1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDJEQUFBO0FDQVI7QURDUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDQ1o7QURDUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0NaO0FER0E7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0FDQUo7QURFQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksY0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvc3Vic2NyaXB0aW9uLXBhZ2Uvc3Vic2NyaXB0aW9uLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lze1xyXG4gICAgJl9faGVhZGluZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMDA1OWIzLCAjMDBiMzk1KTtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCAjMjIyMjIyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMGIzOTU7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOmFsaWNlYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDU5YjM7XHJcbiAgICB9XHJcbn0iLCIucmVnaXNfX2hlYWRpbmcge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzAwNTliMywgIzAwYjM5NSk7XG59XG4ucmVnaXNfX2hlYWRpbmcgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggIzIyMjIyMjtcbn1cbi5yZWdpc19faGVhZGluZyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBiMzk1O1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDphbGljZWJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjMDA1OWIzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/subscription-page/subscription-page.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/subscription-page/subscription-page.page.ts ***!
  \*************************************************************/
/*! exports provided: SubscriptionPagePage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPagePage", function() { return SubscriptionPagePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _razorpay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../razorpay.service */ "./src/app/razorpay.service.ts");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/index.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../storage/swasth-storage.service */ "./src/app/storage/swasth-storage.service.ts");
/* harmony import */ var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/login-auth.service */ "./src/app/services/login-auth.service.ts");









let SubscriptionPagePage = class SubscriptionPagePage {
    constructor(route, router, authService, iab, razorpayService, swStorage, loginAuth) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.iab = iab;
        this.razorpayService = razorpayService;
        this.swStorage = swStorage;
        this.loginAuth = loginAuth;
        this.planList = [];
        this.subscriptionObj = {
            addons: [],
            notes: {}
        };
        this.data = { roomname: '' };
        this.rooms = [];
        this.ref = Firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('chatrooms/');
        this.familyMember = false;
        this.LOGINUSER_PROFILE = "patient_profile";
        this.autoRefreshFire = Firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('autorefresh/circlepatient');
        /* if (this.router.getCurrentNavigation().extras.state) {
          this.docProfileList = this.router.getCurrentNavigation().extras.state.docProfileList;
          this.circleDetail = this.router.getCurrentNavigation().extras.state.circledetail;
          this.ptDetail = this.router.getCurrentNavigation().extras.state.ptdetail;
        } */
    }
    ngOnInit() {
        this.randomString = Math.random().toString(36).substring(7);
        console.log("Random String==>", this.randomString);
        this.url = "https://meet.jit.si/" + this.randomString;
        //this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        this.myRand = this.random();
        /* this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
            this.circleObj = this.router.getCurrentNavigation().extras.state.circleObj;
          }
        }); */
        if (this.route.snapshot.data['sbData']) {
            let data = this.route.snapshot.data['sbData'];
            this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(ptdata => {
                this.ptDetail = ptdata;
                console.log("Patient Details===>", this.ptDetail);
                this.verifyfamilymember(this.ptDetail.userID);
                this.docProfileList = data.docProfileList;
                this.circleDetail = data.circledetail;
            });
        }
        this.getRazorpayPlanList();
    }
    // verify family member
    verifyfamilymember(userid) {
        this.authService
            .checkFamilyMember(userid)
            .subscribe(data => {
            console.log("Family Verify==>", data);
            if (data == "1") {
                //alert("true");
                this.familyMember = true;
                console.log("Family Member Status==>", this.familyMember);
            }
            else {
                //alert("false");
                this.familyMember = false;
            }
        });
    }
    // get swasth subscribe plan list
    getPlanList() {
        this.authService.getSubscribPlanList()
            .subscribe(data => {
            console.log("response res--", data);
            this.planList = data;
        });
    }
    // get razorpay subscribe plan list
    getRazorpayPlanList() {
        this.authService.getRazorpaySubscribPlanList()
            .subscribe(data => {
            console.log("response res--", data);
            this.rzPlanList = data;
        });
    }
    showAmount(amount) {
        console.log("amount", amount);
        let amt = amount.toString();
        return amt.substr(0, 3);
    }
    circlepage() {
        console.log("asdada");
        // this.router.navigate(['/login']);
    }
    createSubscripe(plan_id, planDetails) {
        console.log("Circle Pay Object", this.circleDetail);
        this.authService
            .checkPatientSubscribedInCircle(this.ptDetail.userID, this.circleDetail.circleObj.circleCode)
            .subscribe(data => {
            if (data == "1") {
                alert("Already you joined this circle");
                this.router.navigateByUrl('subscribed-doctor-circle');
            }
            else {
                console.log("Current Time==>", new Date().getTime());
                console.log("Plan ID==>", plan_id);
                this.planName = planDetails.name;
                //alert(this.planName);
                // let dateObj=new Date();
                // dateObj.setTime(dateObj.getDate()+30);
                let expireDate = new Date((new Date()).getTime() + 30 * 24 * 60 * 60 * 1000);
                console.log("Expire Time==>", expireDate.getTime());
                let addonItem = {
                    item: {
                        name: planDetails.name,
                        amount: planDetails.amount,
                        currency: "INR"
                    }
                };
                this.subscriptionPlanDetails = {
                    plandetails: planDetails,
                    subscriptionfromdate: new Date(),
                    subscriptionexpirydate: expireDate,
                };
                console.log("Plan Details==>", planDetails);
                this.subscriptionObj.plan_id = plan_id;
                this.subscriptionObj.total_count = 1;
                this.subscriptionObj.quantity = 1;
                // this.subscriptionObj.start_at=new Date().getTime();
                // this.subscriptionObj.expire_by=expireDate.getTime();
                this.subscriptionObj.customer_notify = 1;
                //this.subscriptionObj.addons.push(addonItem);
                this.subscriptionObj.notes.notes_key_1 = "";
                this.subscriptionObj.notes.notes_key_2 = "";
                console.log("Subscription Object==>", this.subscriptionObj);
                this.authService
                    .createRazorpaySubscribe(this.subscriptionObj)
                    .subscribe(data => {
                    console.log("data", data);
                    if (data != null) {
                        this.pay(data);
                    }
                });
            }
        });
    }
    subscribe() {
        console.log("circle detail", this.circleDetail, this.docProfileList, this.ptDetail);
        //console.log("plan name==>",plan_name);
        //Auto Refresh Call for Subscribe Circle
        let pushData = this.autoRefreshFire.set({
            trigger: true
        });
        if (this.planName == "Plan A") {
            //alert("Normal");  
            this.subscriptionType = "Normal";
            this.userType = "Secondary";
            this.authService
                .updateCirclePatientAccountType(this.ptDetail.userID, "Normal")
                .subscribe(data => {
                console.log("Upadte Status==>", data);
                this.authService
                    .patientdetail(this.ptDetail.userID)
                    .subscribe(data => {
                    this.swStorage.removeStorage(this.LOGINUSER_PROFILE);
                    this.swStorage.setStorage(this.LOGINUSER_PROFILE, data);
                });
            });
        }
        else {
            //alert("Family");
            this.subscriptionType = "Family";
            this.userType = "Primary";
            this.authService
                .updateCirclePatientAccountType(this.ptDetail.userID, "Family")
                .subscribe(data => {
                console.log("Upadte Status==>", data);
                this.authService
                    .patientdetail(this.ptDetail.userID)
                    .subscribe(data => {
                    this.swStorage.removeStorage(this.LOGINUSER_PROFILE);
                    this.swStorage.setStorage(this.LOGINUSER_PROFILE, data);
                });
            });
        }
        let addCircleObj = {
            userID: this.ptDetail.userID,
            circleCode: this.circleDetail.circleObj.circleCode,
            createdDateTime: new Date(),
            subscribePlanId: "1",
            status: "Active",
            subscriptionType: this.subscriptionType,
            userType: this.userType
        };
        let createPtChatObj = {
            circleCode: this.circleDetail.circleObj.circleCode,
            circleName: this.circleDetail.circleObj.circleName,
            docUserID: this.circleDetail.circleObj.createdByUserId,
            patientUserID: this.ptDetail.userID,
            patientName: this.ptDetail.ptFirstName + " " + this.ptDetail.ptLastName,
            createdByDateTime: new Date(),
            videoCallLink: this.url,
            status: "Deactive",
            userType: "New"
        };
        for (let dl of this.docProfileList) {
            if (dl.docUserID == this.circleDetail.circleObj.createdByUserId) {
                createPtChatObj.doctorName = dl.docFirstName + " " + dl.docLastName;
                this.chatRoomName = dl.docFirstName + " " + dl.docLastName + "-" + this.ptDetail.ptFirstName + " " + this.ptDetail.ptLastName + " " + this.myRand;
            }
        }
        createPtChatObj.chatRoomName = this.chatRoomName;
        let newData = this.ref.push();
        newData.set({
            roomname: this.chatRoomName
        });
        this.currentroomKey = newData.key;
        // this.ref.on('value', resp => {
        //   this.rooms = [];
        //   this.rooms = snapshotToArray(resp);
        //   console.log("Rooms==>", this.rooms);
        //   for (let r of this.rooms) {
        //     if (r.roomname == this.chatRoomName) {
        //       this.currentroomKey = r.key;
        //     }
        //   }
        // });  
        console.log("addcircle", addCircleObj);
        console.log("createchat", createPtChatObj);
        console.log("Room Key", this.currentroomKey);
        setTimeout(() => {
            if (this.currentroomKey != undefined) {
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
                        let chatRestrictSubscribeObj = {
                            userID: this.ptDetail.userID,
                            subscriptionId: this.subscriptionPlanDetails.plandetails.id,
                            subscriptionFromDate: this.subscriptionPlanDetails.subscriptionfromdate,
                            subscriptionToDate: this.subscriptionPlanDetails.subscriptionexpirydate,
                            paymentId: this.paymentId,
                            circleCode: this.circleDetail.circleObj.circleCode,
                            createdByUserId: this.ptDetail.userID,
                            createdDateTime: new Date(),
                            status: "Deactive",
                            chatCount: 0,
                            subscriptionType: this.subscriptionType,
                            chatRequestCount: 0
                        };
                        console.log("subscription detail", this.subscriptionPlanDetails);
                        console.log("subscription detail obj", chatRestrictSubscribeObj);
                        this.authService
                            .createChatRestriction(chatRestrictSubscribeObj)
                            .subscribe(data => {
                            console.log("success restriction", data);
                        });
                        alert("You have been subscribed to virtual Hospital " + this.circleDetail.circleObj.circleName);
                        // this.router.navigate(['/subscribed-doctor-circle']);
                        if (this.planName == "Plan B") {
                            this.router.navigateByUrl('subscribe-family-member');
                        }
                        else {
                            this.router.navigateByUrl('subscribed-doctor-circle');
                        }
                    }
                });
            }
        }, 3000);
    }
    pay(subscriptionData) {
        var options = {
            description: 'Credits towards consultation',
            // image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_SeRkqskw09t911',
            subscription_id: subscriptionData.id,
            name: this.ptDetail.ptFirstName + " " + this.ptDetail.ptLastName,
            'handler': this.paymentCapture.bind(this),
            prefill: {
                email: 'varadhan@swasth.tech',
                contact: '9884396427'
            },
            theme: {
                color: '#F37254'
            },
            modal: {
                ondismiss: () => {
                    //alert('dismissed')
                }
            }
        };
        var successCallback = (payment_id) => {
            //alert('payment_id: ' + payment_id);
            // this.navCtrl.push("ThankyouPage",{
            //         status: this.status
            //     });
        };
        var cancelCallback = (error) => {
            alert(error.description + ' (Error ' + error.code + ')');
        };
        Razorpay.open(options, successCallback, cancelCallback);
    }
    paymentCapture(response) {
        this.paymentId = response.razorpay_payment_id;
        //alert(this.paymentId);
        console.log("payment id " + this.paymentId);
        this.subscribe();
    }
    random() {
        let rand = Math.floor(Math.random() * 20000) + 1;
        return rand;
    }
    logout() {
        this.loginAuth.logout();
    }
};
SubscriptionPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] },
    { type: _razorpay_service__WEBPACK_IMPORTED_MODULE_5__["RazorpayService"] },
    { type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_7__["SwasthStorageService"] },
    { type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_8__["LoginAuthService"] }
];
SubscriptionPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscription-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./subscription-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subscription-page/subscription-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./subscription-page.page.scss */ "./src/app/subscription-page/subscription-page.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"], _razorpay_service__WEBPACK_IMPORTED_MODULE_5__["RazorpayService"], _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_7__["SwasthStorageService"],
        _services_login_auth_service__WEBPACK_IMPORTED_MODULE_8__["LoginAuthService"]])
], SubscriptionPagePage);

const snapshotToArray = snapshot => {
    let returnArr = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};


/***/ })

}]);
//# sourceMappingURL=subscription-page-subscription-page-module-es2015.js.map