function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscribed-doctor-circle-subscribed-doctor-circle-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/subscribed-doctor-circle/subscribed-doctor-circle.page.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscribed-doctor-circle/subscribed-doctor-circle.page.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubscribedDoctorCircleSubscribedDoctorCirclePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle; padding-left: 15px;\">\r\n      <ion-title>Swasth</ion-title>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"notifications-outline\" style=\"font-size: 26px; padding-right: 20px;\"></ion-icon>\r\n      <ion-icon name=\"exit-outline\" style=\"font-size: 26px;\" (click)=\"logout()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col class=\"regis__heading\">\r\n      <h1>Virtual Hospitals</h1>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-grid fixed>\r\n    <ion-row *ngIf=\"!cdStatus\">\r\n      <ion-col sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"6\" sizeXs=\"12\" *ngFor=\"let cl of circleDetail\">\r\n        <div class=\"circle\">\r\n          <div class=\"circle-row\">\r\n            <div class=\"circle-row-head\">\r\n              <div class=\"circle-row-head-title\">\r\n                <div style=\"width: 15%;\">\r\n                  <div class=\"circle-row-head-title-pic\" *ngIf=\"networkPictureStatus\">\r\n                    <img src=\"{{circlePicture}}\" alt=\"network picture\">\r\n                  </div>\r\n                </div>\r\n                <div style=\"width: 85%;\">\r\n                  <div class=\"circle-row-head-title-txt\">\r\n                    {{cl.vhEntity.circleName}}\r\n                  </div>\r\n                  <div class=\"circle-row-head-col\">\r\n                    <div class=\"circle-row-head-col-label\">Family Doctor:</div>\r\n                    <ng-container *ngFor=\"let d of cl.cdProfileRole\">\r\n                      <div class=\"circle-row-head-col-value\" *ngIf=\"d.role == 'Admin'\">{{d.docProfile.docFirstName}} {{d.docProfile.docLastName}}</div>\r\n                    </ng-container>              \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n              <!-- <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n                <ion-fab-button>\r\n                  <ion-icon name=\"list-circle\" class=\"circle-row-body-mc-pt-icon\"></ion-icon>\r\n                </ion-fab-button>\r\n                <ion-fab-list side=\"bottom\">\r\n                  <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n                  <ion-fab-button><ion-icon name=\"logo-facebook\"></ion-icon></ion-fab-button>\r\n                  <ion-fab-button><ion-icon name=\"logo-instagram\"></ion-icon></ion-fab-button>\r\n                  <ion-fab-button><ion-icon name=\"logo-twitter\"></ion-icon></ion-fab-button>\r\n                </ion-fab-list>\r\n              </ion-fab>\r\n              <div class=\"circle-row-body-mc-pt-noti\">1</div> -->\r\n            </div>\r\n          </div>        \r\n          <div class=\"circle-row\">\r\n            <div class=\"circle-row-body\">\r\n              <div class=\"circle-row-body-mc\">\r\n                <!-- <div class=\"circle-row-body-mc-pt\">\r\n                  <ion-icon name=\"list-circle\" class=\"circle-row-body-mc-pt-icon\"></ion-icon>\r\n                  <div class=\"circle-row-body-mc-pt-noti\">1</div>\r\n                </div> -->\r\n                <ng-container *ngFor=\"let d of cl.cdProfileRole index as i\">                  \r\n                  <div class=\"circle-row-body-mc-c1\" *ngIf=\"d.role == 'Admin'\">                  \r\n                    <img src=\"../../assets/imgs/user_icon.png\" alt=\"\" title=\"user\" *ngIf=\"d.docProfile.profilePicture == null\"  (click)=\"openChat(cl)\"/>\r\n                    <img src=\"{{authService.S3BASE_URL}}{{d.docProfile.profilePicture}}\" alt=\"\" title=\"user\" *ngIf=\"d.docProfile.profilePicture != null\"  (click)=\"openChat(cl)\"/>\r\n                  </div>\r\n                  <div class=\"circle-row-body-mc-c2\" *ngIf=\"cl.cdProfileRole.length-i==1 && d.role != 'Admin'\">\r\n                    <img src=\"../../assets/imgs/user_icon.png\" alt=\"\" title=\"user\" (click)=\"chatDoctor(d,cl)\" *ngIf=\"d.docProfile.profilePicture == null\"/>\r\n                    <img src=\"{{authService.S3BASE_URL}}{{d.docProfile.profilePicture}}\" alt=\"\" title=\"user\" *ngIf=\"d.docProfile.profilePicture != null\" (click)=\"chatDoctor(d,cl)\"/>                    \r\n                  </div>\r\n                  <div class=\"circle-row-body-mc-c3\" *ngIf=\"cl.cdProfileRole.length-i==2 && d.role != 'Admin'\">\r\n                    <img src=\"../../assets/imgs/user_icon.png\" alt=\"\" title=\"user\" (click)=\"chatDoctor(d,cl)\" *ngIf=\"d.docProfile.profilePicture == null\"/>\r\n                    <img src=\"{{authService.S3BASE_URL}}{{d.docProfile.profilePicture}}\" alt=\"\" title=\"user\" *ngIf=\"d.docProfile.profilePicture != null\" (click)=\"chatDoctor(d,cl)\"/>\r\n                  </div>\r\n                  <div class=\"circle-row-body-mc-c4\" *ngIf=\"cl.cdProfileRole.length-i==3 && d.role != 'Admin'\">\r\n                    <img src=\"../../assets/imgs/user_icon.png\" alt=\"\" title=\"user\" (click)=\"chatDoctor(d,cl)\" *ngIf=\"d.docProfile.profilePicture == null\"/>\r\n                    <img src=\"{{authService.S3BASE_URL}}{{d.docProfile.profilePicture}}\" alt=\"\" title=\"user\" *ngIf=\"d.docProfile.profilePicture != null\" (click)=\"chatDoctor(d,cl)\"/>\r\n                  </div>\r\n                  <div class=\"circle-row-body-mc-c5\" *ngIf=\"cl.cdProfileRole.length-i==4 && d.role != 'Admin'\">\r\n                    <img src=\"../../assets/imgs/user_icon.png\" alt=\"\" title=\"user\" (click)=\"chatDoctor(d,cl)\" *ngIf=\"d.docProfile.profilePicture == null\"/>\r\n                    <img src=\"{{authService.S3BASE_URL}}{{d.docProfile.profilePicture}}\" alt=\"\" title=\"user\" *ngIf=\"d.docProfile.profilePicture != null\" (click)=\"chatDoctor(d,cl)\"/>\r\n                  </div>\r\n                </ng-container>              \r\n              \r\n                <!-- <div class=\"circle-row-body-mc-c1\">                  \r\n                  <img src=\"../../assets/imgs/user_icon.png\" alt=\"\" title=\"user\"/>\r\n                </div>\r\n                <div class=\"circle-row-body-mc-c2\">\r\n                  <img src=\"../../assets/imgs/user_icon.png\" alt=\"\" title=\"user\"/>\r\n                </div>\r\n                <div class=\"circle-row-body-mc-c3\">\r\n                  <img src=\"../../assets/imgs/user_icon.png\" alt=\"\" title=\"user\"/>\r\n                </div>\r\n                <div class=\"circle-row-body-mc-c4\">\r\n                  <img src=\"../../assets/imgs/user_icon.png\" alt=\"\" title=\"user\"/>\r\n                </div>\r\n                <div class=\"circle-row-body-mc-c5\">\r\n                  <img src=\"../../assets/imgs/user_icon.png\" alt=\"\" title=\"user\"/>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"circle-row\">\r\n            <div class=\"circle-row-footer\">\r\n              <div class=\"circle-row-footer-btn\" style=\"display: flex;\">\r\n                <ion-button (click)=\"openChat(cl)\">Chat</ion-button>\r\n                <ion-button (click)=\"viewCirclePrescription(cl)\">Prescriptions</ion-button>\r\n              </div>\r\n              <div class=\"circle-row-footer-al\">\r\n                <a href=\"javascript:;\">Leave Circle</a>\r\n              </div>\r\n              <div class=\"circle-row-footer-al\">\r\n                Like this circle? Recommend it to a friend <a href=\"javascript:;\" (click)=\"sharePopover($event, cl.vhEntity)\">NOW!</a>\r\n              </div>\r\n            </div>            \r\n          </div>\r\n        </div>\r\n      </ion-col>      \r\n    </ion-row>\r\n\r\n    <!-- patient list -->\r\n    <ion-row *ngIf=\"cdStatus\">\r\n      <app-pt-list [cdStatus]=\"cdStatus\" (ptListStatus)=\"ptlistFn($event)\"></app-pt-list>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/subscribed-doctor-circle/subscribed-doctor-circle-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/subscribed-doctor-circle/subscribed-doctor-circle-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: SubscribedDoctorCirclePageRoutingModule */

  /***/
  function srcAppSubscribedDoctorCircleSubscribedDoctorCircleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribedDoctorCirclePageRoutingModule", function () {
      return SubscribedDoctorCirclePageRoutingModule;
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


    var _subscribed_doctor_circle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./subscribed-doctor-circle.page */
    "./src/app/subscribed-doctor-circle/subscribed-doctor-circle.page.ts");

    var routes = [{
      path: '',
      component: _subscribed_doctor_circle_page__WEBPACK_IMPORTED_MODULE_3__["SubscribedDoctorCirclePage"]
    }];

    var SubscribedDoctorCirclePageRoutingModule = function SubscribedDoctorCirclePageRoutingModule() {
      _classCallCheck(this, SubscribedDoctorCirclePageRoutingModule);
    };

    SubscribedDoctorCirclePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SubscribedDoctorCirclePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/subscribed-doctor-circle/subscribed-doctor-circle.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/subscribed-doctor-circle/subscribed-doctor-circle.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: SubscribedDoctorCirclePageModule */

  /***/
  function srcAppSubscribedDoctorCircleSubscribedDoctorCircleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribedDoctorCirclePageModule", function () {
      return SubscribedDoctorCirclePageModule;
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


    var _subscribed_doctor_circle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./subscribed-doctor-circle-routing.module */
    "./src/app/subscribed-doctor-circle/subscribed-doctor-circle-routing.module.ts");
    /* harmony import */


    var _subscribed_doctor_circle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./subscribed-doctor-circle.page */
    "./src/app/subscribed-doctor-circle/subscribed-doctor-circle.page.ts");

    var SubscribedDoctorCirclePageModule = function SubscribedDoctorCirclePageModule() {
      _classCallCheck(this, SubscribedDoctorCirclePageModule);
    };

    SubscribedDoctorCirclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _subscribed_doctor_circle_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscribedDoctorCirclePageRoutingModule"]],
      declarations: [_subscribed_doctor_circle_page__WEBPACK_IMPORTED_MODULE_6__["SubscribedDoctorCirclePage"]]
    })], SubscribedDoctorCirclePageModule);
    /***/
  },

  /***/
  "./src/app/subscribed-doctor-circle/subscribed-doctor-circle.page.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/subscribed-doctor-circle/subscribed-doctor-circle.page.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSubscribedDoctorCircleSubscribedDoctorCirclePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".regis__heading {\n  height: 130px;\n  padding-top: 40px;\n  background-image: linear-gradient(120deg, #0059b3, #00b395);\n}\n.regis__heading h1 {\n  text-align: start;\n  color: #ffffff;\n  padding-left: 10px;\n  padding-top: 10px;\n  text-shadow: 1px 1px 2px #222222;\n}\n.circle {\n  width: 100%;\n  border-radius: 10px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.circle-row {\n  width: 100%;\n  margin: 10px 0;\n}\n.circle-row-head {\n  width: 100%;\n  padding: 10px;\n  background-color: #045169;\n}\n.circle-row-head-title {\n  display: flex;\n  width: 100%;\n}\n.circle-row-head-title-pic {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.circle-row-head-title-pic img {\n  width: 50px;\n  height: 50px;\n}\n.circle-row-head-title-txt {\n  font-size: 20px;\n  font-family: var(--ion-font-head);\n  font-weight: 600;\n  color: #ffffff;\n  align-self: center;\n  margin-left: 10px;\n}\n.circle-row-head-col {\n  display: flex;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.circle-row-head-col-label {\n  color: #919191;\n  font-family: var(--ion-font-body);\n  margin-left: 10px;\n  white-space: nowrap;\n}\n.circle-row-head-col-value {\n  font-family: var(--ion-font-body);\n  margin-left: 5px;\n  color: #ffffff;\n}\n.circle-row-body {\n  justify-content: center;\n  width: 100%;\n  margin: 50px 0;\n}\n.circle-row-body-mc {\n  width: 240px;\n  height: 240px;\n  margin: 0 auto;\n  border-radius: 50%;\n  border: 5px solid #045169;\n  position: relative;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  font-family: var(--ion-font-body);\n  color: #C21B66;\n  font-size: 35px;\n  text-align: center;\n}\n.circle-row-body-mc-pt {\n  text-align: center;\n  position: relative;\n  width: 50px;\n  height: 50px;\n  margin: 0 auto;\n  margin-top: 40%;\n  color: #045169;\n  cursor: pointer;\n}\n.circle-row-body-mc-pt-icon {\n  width: 100%;\n  height: 100%;\n}\n.circle-row-body-mc-pt-noti {\n  height: 20px;\n  width: 20px;\n  background-color: var(--ion-color-danger);\n  color: #ffffff;\n  position: absolute;\n  font-size: 12px;\n  padding: 3px;\n  top: 6px;\n  right: -1px;\n  border-radius: 5px;\n  z-index: 999;\n}\n.circle-row-body-mc-c1 {\n  border-radius: 50%;\n  overflow: hidden;\n  position: absolute;\n  background-color: #C21B66;\n  color: #ffffff;\n  top: -30px;\n  left: 37%;\n  width: 60px;\n  height: 60px;\n  align-self: center;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  /* img {\n      width: 60px;\n      height: auto;\n  } */\n}\n.circle-row-body-mc-c2 {\n  overflow: hidden;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #C21B66;\n  color: #ffffff;\n  top: 20%;\n  right: -25px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.circle-row-body-mc-c3 {\n  overflow: hidden;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #C21B66;\n  color: #ffffff;\n  bottom: 3%;\n  right: -5px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.circle-row-body-mc-c4 {\n  overflow: hidden;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #C21B66;\n  color: #ffffff;\n  bottom: 3%;\n  left: -5px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.circle-row-body-mc-c5 {\n  overflow: hidden;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #C21B66;\n  color: #ffffff;\n  top: 20%;\n  left: -25px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.circle-row-footer {\n  width: 100%;\n  padding: 0 10px 10px 10px;\n}\n.circle-row-footer-btn {\n  display: flex;\n  justify-content: center;\n}\n.circle-row-footer-al {\n  text-align: center;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NyaWJlZC1kb2N0b3ItY2lyY2xlL0Y6XFxzd2FzdGhcXHN3YXN0aHZpcnR1YWxwYXRpZW50L3NyY1xcYXBwXFxzdWJzY3JpYmVkLWRvY3Rvci1jaXJjbGVcXHN1YnNjcmliZWQtZG9jdG9yLWNpcmNsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1YnNjcmliZWQtZG9jdG9yLWNpcmNsZS9zdWJzY3JpYmVkLWRvY3Rvci1jaXJjbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkRBQUE7QUNBUjtBRENRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FDQ1o7QURJQTtFQUNJLFdBQUE7RUFFQSxtQkFBQTtFQUVZLCtHQUFBO0FDRmhCO0FER0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0RSO0FERVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUVBLHlCQUFBO0FDRFo7QURFWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDQWhCO0FEQ2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ3BCO0FEQW9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNFeEI7QURDZ0I7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ3BCO0FERVk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQWhCO0FEQ2dCO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NwQjtBRENnQjtFQUNJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ3BCO0FER1E7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDRFo7QURFWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLCtHQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQWhCO0FEQ2dCO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NwQjtBREFvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRXhCO0FEQW9CO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNFeEI7QURDZ0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFFQSwrR0FBQTtFQUNBOzs7S0FBQTtBQ0dwQjtBREVnQjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFFQSwrR0FBQTtBQ0FwQjtBREVnQjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFQSwrR0FBQTtBQ0FwQjtBREVnQjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFFQSwrR0FBQTtBQ0FwQjtBREVnQjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFQSwrR0FBQTtBQ0FwQjtBRElRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FDRlo7QURHWTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0RoQjtBREdZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0RoQiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZWQtZG9jdG9yLWNpcmNsZS9zdWJzY3JpYmVkLWRvY3Rvci1jaXJjbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lze1xyXG4gICAgJl9faGVhZGluZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMDA1OWIzLCAjMDBiMzk1KTtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICMyMjIyMjI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdFM0Y4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgJi1yb3cge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICYtaGVhZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMDA1OWIzLCAjMDBiMzk1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA0NTE2OTtcclxuICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAmLXBpYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6NTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXR4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1oZWFkKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWNvbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICYtbGFiZWwgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5MTkxOTE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtYm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJvZHkge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCAwO1xyXG4gICAgICAgICAgICAmLW1jIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMwNDUxNjk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWJvZHkpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNDMjFCNjY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAmLXB0IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDo1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MCU7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDQ1MTY5O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAmLWljb24geyAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYtbm90aSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1jMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMjFCNjY7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOi0zMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDM3JTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiA1cHggMTBweDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtYzIge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0MyMUI2NjsgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0yNXB4OyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtYzMge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0MyMUI2NjsgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAzJTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWM0IHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMjFCNjY7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWM1IHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMjFCNjY7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWZvb3RlciB7IFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgJi1idG57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmLWFse1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxufSIsIi5yZWdpc19faGVhZGluZyB7XG4gIGhlaWdodDogMTMwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMDA1OWIzLCAjMDBiMzk1KTtcbn1cbi5yZWdpc19faGVhZGluZyBoMSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICMyMjIyMjI7XG59XG5cbi5jaXJjbGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jaXJjbGUtcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLmNpcmNsZS1yb3ctaGVhZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ1MTY5O1xufVxuLmNpcmNsZS1yb3ctaGVhZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNpcmNsZS1yb3ctaGVhZC10aXRsZS1waWMge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2lyY2xlLXJvdy1oZWFkLXRpdGxlLXBpYyBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmNpcmNsZS1yb3ctaGVhZC10aXRsZS10eHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1oZWFkKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uY2lyY2xlLXJvdy1oZWFkLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jaXJjbGUtcm93LWhlYWQtY29sLWxhYmVsIHtcbiAgY29sb3I6ICM5MTkxOTE7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1ib2R5KTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY2lyY2xlLXJvdy1oZWFkLWNvbC12YWx1ZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1ib2R5KTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY2lyY2xlLXJvdy1ib2R5IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUwcHggMDtcbn1cbi5jaXJjbGUtcm93LWJvZHktbWMge1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMwNDUxNjk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWJvZHkpO1xuICBjb2xvcjogI0MyMUI2NjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2lyY2xlLXJvdy1ib2R5LW1jLXB0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MCU7XG4gIGNvbG9yOiAjMDQ1MTY5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2lyY2xlLXJvdy1ib2R5LW1jLXB0LWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNpcmNsZS1yb3ctYm9keS1tYy1wdC1ub3RpIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4O1xuICB0b3A6IDZweDtcbiAgcmlnaHQ6IC0xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgei1pbmRleDogOTk5O1xufVxuLmNpcmNsZS1yb3ctYm9keS1tYy1jMSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzIxQjY2O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdG9wOiAtMzBweDtcbiAgbGVmdDogMzclO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC8qIGltZyB7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgfSAqL1xufVxuLmNpcmNsZS1yb3ctYm9keS1tYy1jMiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzIxQjY2O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdG9wOiAyMCU7XG4gIHJpZ2h0OiAtMjVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jaXJjbGUtcm93LWJvZHktbWMtYzMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MyMUI2NjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvdHRvbTogMyU7XG4gIHJpZ2h0OiAtNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmNpcmNsZS1yb3ctYm9keS1tYy1jNCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzIxQjY2O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm90dG9tOiAzJTtcbiAgbGVmdDogLTVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jaXJjbGUtcm93LWJvZHktbWMtYzUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MyMUI2NjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiAtMjVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jaXJjbGUtcm93LWZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xufVxuLmNpcmNsZS1yb3ctZm9vdGVyLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNpcmNsZS1yb3ctZm9vdGVyLWFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/subscribed-doctor-circle/subscribed-doctor-circle.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/subscribed-doctor-circle/subscribed-doctor-circle.page.ts ***!
    \***************************************************************************/

  /*! exports provided: SubscribedDoctorCirclePage */

  /***/
  function srcAppSubscribedDoctorCircleSubscribedDoctorCirclePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribedDoctorCirclePage", function () {
      return SubscribedDoctorCirclePage;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../storage/swasth-storage.service */
    "./src/app/storage/swasth-storage.service.ts");
    /* harmony import */


    var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/login-auth.service */
    "./src/app/services/login-auth.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _share_circle_share_circle_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../share-circle/share-circle.page */
    "./src/app/share-circle/share-circle.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SubscribedDoctorCirclePage = /*#__PURE__*/function () {
      // autoRefreshChat = firebase.database().ref('autorefresh/chatupdate');
      // autoRefreshCircle = firebase.database().ref('autorefresh/circlelist');
      // autoRefreshTriage = firebase.database().ref('autorefresh/triage');
      function SubscribedDoctorCirclePage(router, authService, jwtHelper, swStorage, loginAuth, dataService, popoverCtrl, http) {
        _classCallCheck(this, SubscribedDoctorCirclePage);

        this.router = router;
        this.authService = authService;
        this.jwtHelper = jwtHelper;
        this.swStorage = swStorage;
        this.loginAuth = loginAuth;
        this.dataService = dataService;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.cdStatus = false;
        this.ptCircleList = [];
        this.circleListDetail = [];
        this.networkPictureStatus = false;
      }

      _createClass(SubscribedDoctorCirclePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(data=>{
          //   this.userdetail=data;
          //   console.log("subcribed user data--->", data);
          //   // this.getPatientChat(this.userdetail.userID,"2020BM15");
          //   this.authService
          //   .getPtCircleList(this.userdetail.userID)
          //   .subscribe(data=>{
          //     console.log("Circle data", data);
          //     if(data != null) {
          //       this.circleDetail = data;
          //       if(this.circleDetail.length > 0)
          //       { 
          //         this.downloadDocument(this.circleDetail[0].vhEntity.circlePicture);
          //       } else {
          //         this.router.navigateByUrl('/select-virtual-hospital');
          //       }
          //     } else {
          //       this.router.navigateByUrl('/select-virtual-hospital');
          //     }     
          //   });
          // });
          // this.autoRefreshCircle.on('value', resp => {
          //   console.log("auto circle values---->", resp.val());
          //   let res = resp.val();
          //   if(res.trigger) {
          //     this.autoRefreshFnCall();
          //     this.autoRefreshCircle.child("trigger").update(false);
          //   }      
          // });
          // this.autoRefreshTriage.on('value', resp => {
          //   console.log("auto triage values---->", resp.val());
          //   let res = resp.val();
          //   if(res.trigger) {
          //     this.autoRefreshFnCall();
          //     this.autoRefreshTriage.child("trigger").update(false);
          //   }      
          // });
          // this.autoRefreshChat.on('value', resp => {
          //   console.log("auto triage values---->", resp.val());
          //   let res = resp.val();
          //   if(res.trigger) {
          //     this.autoRefreshFnCall();
          //     this.autoRefreshChat.child("trigger").update(false);
          //   }      
          // });
        }
      }, {
        key: "autoRefreshFnCall",
        value: function autoRefreshFnCall() {
          var _this = this;

          this.authService.getPtCircleList(this.userdetail.userID).subscribe(function (data) {
            console.log("Circle data", data);

            if (data != null) {
              _this.circleDetail = data;

              if (_this.circleDetail.length > 0) {
                _this.downloadDocument(_this.circleDetail[0].vhEntity.circlePicture);
              }
            }
          });
        }
      }, {
        key: "downloadDocument",
        value: function downloadDocument(keyname) {
          var _this2 = this;

          this.authService.downloadDocumentByKeyname(keyname).subscribe(function (data) {
            // debugger;
            // console.log(data);
            // console.log("network image data---",data);  
            _this2.circlePicture = 'data:image/jpeg;base64,' + data;
            _this2.networkPictureStatus = true;
          });
          return this.circlePicture;
        }
      }, {
        key: "viewCirclePrescription",
        value: function viewCirclePrescription(circledetail) {
          console.log("view circle prescription");
          var navigationExtras = {
            state: {
              circleDetail: circledetail
            }
          };
          this.router.navigate(['/single-circle-prescription-list'], navigationExtras);
        }
      }, {
        key: "getPatientChat",
        value: function getPatientChat(userid, circleCode) {
          var _this3 = this;

          this.authService.getPatientChatByPatientUserid(userid, circleCode).subscribe(function (data) {
            _this3.ptChatDetail = data;
          });
        }
      }, {
        key: "chatDoctor",
        value: function chatDoctor(docdetail, circledetail) {
          this.circleDetail = circledetail;
          console.log("circledetail", circledetail, docdetail);
          var chatRoomKey;
          var ptName;
          var triageDocName;
          var videoCallLink;
          var triageStatus = circledetail.ptRefDocChat.filter(function (data) {
            return data.triageDocUserID == docdetail.docProfile.docUserID;
          });
          console.log("Triage Status==>", triageStatus);

          if (triageStatus.length > 0) {
            console.log("triage doc", triageStatus);
            this.role = "Member";
            this.status = triageStatus[0].status;
            this.docDetail = docdetail.docProfile;
            chatRoomKey = triageStatus[0].chatRoomKey;
            ptName = triageStatus[0].ptName;
            triageDocName = triageStatus[0].triageDocName;
            videoCallLink = triageStatus[0].videoCallLink;
            this.triageChatDetail = triageStatus[0];
            /* let navigationExtras: NavigationExtras = {
              state: {
                roomKey: tc.chatRoomKey,
                roomName: tc.triageDocName,
                name: tc.ptName,
              }
            };
            this.router.navigate(['chatroom'],navigationExtras); */

            this.chatRoomFn(chatRoomKey, triageDocName, ptName, videoCallLink);
          } else {
            alert("Chat with " + docdetail.docProfile.docFirstName + " " + docdetail.docProfile.docLastName + " has not created. It will be created once Admin triage you the chat with him");
          }
        }
      }, {
        key: "openChat",
        value: function openChat(circle) {
          var _this4 = this;

          this.circleDetail = circle;

          var _iterator = _createForOfIteratorHelper(circle.cdProfileRole),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var cl = _step.value;

              if (cl.role == "Admin") {
                this.docDetail = cl.docProfile;
                this.role = cl.role;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.authService.getPatientChatByPatientUserid(this.userdetail.userID, circle.vhEntity.circleCode).subscribe(function (data) {
            _this4.ptChatDetail = data;
            console.log("ptchat detail", _this4.ptChatDetail);
            _this4.status = _this4.ptChatDetail.status;

            _this4.chatRoomFn(_this4.ptChatDetail.chatRoomKey, _this4.ptChatDetail.doctorName, _this4.ptChatDetail.patientName, _this4.ptChatDetail.videoCallLink);
            /* let navigationExtras: NavigationExtras = {
              state: {
                roomKey: this.ptChatDetail.chatRoomKey,
                roomName:this.ptChatDetail.doctorName,
                name:this.ptChatDetail.patientName
              }
            };
            this.router.navigate(['chatroom'],navigationExtras); */

          });
        }
      }, {
        key: "chatRoomFn",
        value: function chatRoomFn(chRoomKey, docName, ptName, videocalllink) {
          var ctRoom = {
            roomKey: chRoomKey,
            roomName: docName,
            name: ptName,
            circleCode: this.circleDetail.vhEntity.circleCode,
            ptDetail: this.userdetail,
            docDetail: this.docDetail,
            role: this.role,
            status: this.status,
            circleDetail: this.circleDetail,
            videocalllink: videocalllink,
            triageChat: this.triageChatDetail
          };
          console.log("ct room", ctRoom);
          this.dataService.setData(29, ctRoom);
          this.router.navigateByUrl('chatroom/29');
        }
      }, {
        key: "ptlistFn",
        value: function ptlistFn(event) {
          this.cdStatus = event;
        }
      }, {
        key: "sharePopover",
        value: function sharePopover(ev, cobj) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // this.router.navigateByUrl('/circle');
                    console.log("share doc", this.userdetail);
                    console.log("share circleobj", cobj);
                    _context.next = 4;
                    return this.popoverCtrl.create({
                      component: _share_circle_share_circle_page__WEBPACK_IMPORTED_MODULE_8__["ShareCirclePage"],
                      componentProps: {
                        circleObj: cobj,
                        ptDetail: this.userdetail
                      },
                      backdropDismiss: false,
                      animated: true
                    });

                  case 4:
                    popover = _context.sent;
                    popover.onDidDismiss().then(function (data) {
                      console.log("data--", data);

                      if (data == "Cancel") {
                        console.log("popover cancelled");
                      } else {
                        var res = data;
                        console.log("popover dismiss else", res);

                        if (res.data.result == "Success") {
                          console.log("popover dismiss else circle code ", res.data.circleCode);
                        }
                      }
                    });
                    popover.present(); // this.router.navigate(['circle']);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this5 = this;

          this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(function (data) {
            // this.decodedToken=this.loginAuth.getUser();
            // this.http.get(`${LOOKUP_URL}/getcirclepatientdetails/`+this.decodedToken.UID, {responseType: "json"}).subscribe(data=>{
            _this5.userdetail = data;
            console.log("subcribed user data--->", data); // this.getPatientChat(this.userdetail.userID,"2020BM15");

            _this5.authService.getPtCircleList(_this5.userdetail.userID).subscribe(function (data) {
              console.log("Circle data", data);

              if (data != null) {
                _this5.circleDetail = data;

                if (_this5.circleDetail.length > 0) {
                  _this5.downloadDocument(_this5.circleDetail[0].vhEntity.circlePicture);
                } else {
                  _this5.router.navigateByUrl('/select-virtual-hospital');
                }
              } else {
                _this5.router.navigateByUrl('/select-virtual-hospital');
              }
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginAuth.logout();
        }
      }]);

      return SubscribedDoctorCirclePage;
    }();

    SubscribedDoctorCirclePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]
      }, {
        type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_5__["SwasthStorageService"]
      }, {
        type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoginAuthService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
      }];
    };

    SubscribedDoctorCirclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subscribed-doctor-circle',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./subscribed-doctor-circle.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/subscribed-doctor-circle/subscribed-doctor-circle.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./subscribed-doctor-circle.page.scss */
      "./src/app/subscribed-doctor-circle/subscribed-doctor-circle.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"], _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_5__["SwasthStorageService"], _services_login_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoginAuthService"], _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])], SubscribedDoctorCirclePage);
    /***/
  }
}]);
//# sourceMappingURL=subscribed-doctor-circle-subscribed-doctor-circle-module-es5.js.map