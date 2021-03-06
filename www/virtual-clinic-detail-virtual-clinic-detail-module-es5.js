function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["virtual-clinic-detail-virtual-clinic-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/virtual-clinic-detail/virtual-clinic-detail.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/virtual-clinic-detail/virtual-clinic-detail.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVirtualClinicDetailVirtualClinicDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle; padding-left: 15px;\">\r\n      <ion-title>Swasth</ion-title>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"notifications-outline\" style=\"font-size: 26px; padding-right: 20px;\"></ion-icon>\r\n      <ion-icon name=\"exit-outline\" style=\"font-size: 26px;\" (click)=\"logout()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col class=\"regis__heading\">\r\n      <h1>Virtual Hospital Circle</h1>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-grid fixed>\r\n    <ion-card style=\"background-color: darkcyan; border-radius: 10px;\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" style=\"text-align: center;\">\r\n          <ion-label style=\"font-size: 21px;color: #fff;text-shadow: 1px 1px 1px #222\">Clinic Name</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ng-container *ngFor=\"let cd of circleDocList\">\r\n            <ng-container *ngFor=\"let dp of docProfileList\">\r\n              <ion-card class=\"doc-card\" *ngIf=\"cd.docUserId==dp.docUserID\">\r\n                <div class=\"doc-card__full\">\r\n                  <!-- <div class=\"doc-card__full-logo\"> -->\r\n                    <div style=\"width: 50px;height: 50px;background: #fff;border-radius: 50%; margin: auto;box-shadow: 1px 5px 10px #222\">\r\n                      <ion-icon style=\"margin-left: 13px;font-size: 25px;margin-top: 11px;\" name=\"person-outline\"></ion-icon>\r\n                    </div>\r\n                  <!-- </div> -->\r\n                  <div class=\"doc-card__full-detail\">\r\n                    <div class=\"doc-card__full-detail-content\">\r\n                      <p>{{dp.docFirstName}} {{dp.docLastName}} {{dp.docQualification}}</p>\r\n                      <p style=\"padding-left: 15px;\">{{dp.docSpecialization}}</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-card>\r\n            </ng-container>\r\n          </ng-container>\r\n        </ion-col>\r\n      </ion-row>      \r\n      <ion-row>\r\n        <ion-col style=\"text-align: center;\">\r\n          <ion-button (click)=\"joinCircle()\">Join Circle</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/virtual-clinic-detail/virtual-clinic-detail-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/virtual-clinic-detail/virtual-clinic-detail-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: VirtualClinicDetailPageRoutingModule */

  /***/
  function srcAppVirtualClinicDetailVirtualClinicDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualClinicDetailPageRoutingModule", function () {
      return VirtualClinicDetailPageRoutingModule;
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


    var _virtual_clinic_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./virtual-clinic-detail.page */
    "./src/app/virtual-clinic-detail/virtual-clinic-detail.page.ts");

    var routes = [{
      path: '',
      component: _virtual_clinic_detail_page__WEBPACK_IMPORTED_MODULE_3__["VirtualClinicDetailPage"]
    }];

    var VirtualClinicDetailPageRoutingModule = function VirtualClinicDetailPageRoutingModule() {
      _classCallCheck(this, VirtualClinicDetailPageRoutingModule);
    };

    VirtualClinicDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VirtualClinicDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/virtual-clinic-detail/virtual-clinic-detail.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/virtual-clinic-detail/virtual-clinic-detail.module.ts ***!
    \***********************************************************************/

  /*! exports provided: VirtualClinicDetailPageModule */

  /***/
  function srcAppVirtualClinicDetailVirtualClinicDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualClinicDetailPageModule", function () {
      return VirtualClinicDetailPageModule;
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


    var _virtual_clinic_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./virtual-clinic-detail-routing.module */
    "./src/app/virtual-clinic-detail/virtual-clinic-detail-routing.module.ts");
    /* harmony import */


    var _virtual_clinic_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./virtual-clinic-detail.page */
    "./src/app/virtual-clinic-detail/virtual-clinic-detail.page.ts");

    var VirtualClinicDetailPageModule = function VirtualClinicDetailPageModule() {
      _classCallCheck(this, VirtualClinicDetailPageModule);
    };

    VirtualClinicDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _virtual_clinic_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["VirtualClinicDetailPageRoutingModule"]],
      declarations: [_virtual_clinic_detail_page__WEBPACK_IMPORTED_MODULE_6__["VirtualClinicDetailPage"]]
    })], VirtualClinicDetailPageModule);
    /***/
  },

  /***/
  "./src/app/virtual-clinic-detail/virtual-clinic-detail.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/virtual-clinic-detail/virtual-clinic-detail.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVirtualClinicDetailVirtualClinicDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".regis__heading {\n  height: 160px;\n  padding-top: 50px;\n  background-image: linear-gradient(120deg, #0059b3, #00b395);\n}\n.regis__heading h1 {\n  text-align: start;\n  color: #ffffff;\n  padding-left: 10px;\n  padding-top: 10px;\n  text-shadow: 1px 1px #222222;\n}\n.doc-card {\n  border-radius: 10px;\n  background-color: aliceblue;\n}\n.doc-card__full {\n  width: 100%;\n  display: flex;\n}\n.doc-card__full-logo {\n  width: 20%;\n  text-align: center;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 52px;\n  background: darkcyan;\n}\n.doc-card__full-logo ion-icon {\n  color: #fff;\n  font-size: 28px;\n  position: absolute;\n  top: 23px;\n  left: 20px;\n}\n.doc-card__full-detail {\n  width: 80%;\n  display: flex;\n  padding: 15px 5px 10px 5px;\n}\n.doc-card__full-detail-content {\n  width: 80%;\n}\n.doc-card__full-detail-content__title {\n  color: #0059b3;\n  padding-left: 5px;\n}\n.doc-card__full-detail-content__spec {\n  display: flex;\n  flex-wrap: wrap;\n}\n.doc-card__full-detail-content__spec ion-label {\n  padding-left: 5px;\n  color: coral;\n}\n.doc-card__full-detail-content p {\n  margin: auto;\n  padding-left: 5px;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlydHVhbC1jbGluaWMtZGV0YWlsL0Y6XFxzd2FzdGhcXHN3YXN0aHZpcnR1YWxwYXRpZW50L3NyY1xcYXBwXFx2aXJ0dWFsLWNsaW5pYy1kZXRhaWxcXHZpcnR1YWwtY2xpbmljLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpcnR1YWwtY2xpbmljLWRldGFpbC92aXJ0dWFsLWNsaW5pYy1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkRBQUE7QUNBUjtBRENRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDQ1o7QURJQTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7QUNESjtBREVJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNBUjtBRENRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDQ1o7QURBWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VoQjtBRENRO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQ0NaO0FEQVk7RUFDSSxVQUFBO0FDRWhCO0FERGdCO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDR3BCO0FERGdCO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNHcEI7QUREb0I7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNHeEI7QURBZ0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VwQiIsImZpbGUiOiJzcmMvYXBwL3ZpcnR1YWwtY2xpbmljLWRldGFpbC92aXJ0dWFsLWNsaW5pYy1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lze1xyXG4gICAgJl9faGVhZGluZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMDA1OWIzLCAjMDBiMzk1KTtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzIyMjIyMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kb2MtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICZfX2Z1bGwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICYtbG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7IFxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2N5YW47XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWRldGFpbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7IFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgICAgICAgcGFkZGluZzoxNXB4IDVweCAxMHB4IDVweDtcclxuICAgICAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDU5YjM7IFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fc3BlYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwOyBcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29yYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIucmVnaXNfX2hlYWRpbmcge1xuICBoZWlnaHQ6IDE2MHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzAwNTliMywgIzAwYjM5NSk7XG59XG4ucmVnaXNfX2hlYWRpbmcgaDEge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4ICMyMjIyMjI7XG59XG5cbi5kb2MtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbn1cbi5kb2MtY2FyZF9fZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRvYy1jYXJkX19mdWxsLWxvZ28ge1xuICB3aWR0aDogMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTJweDtcbiAgYmFja2dyb3VuZDogZGFya2N5YW47XG59XG4uZG9jLWNhcmRfX2Z1bGwtbG9nbyBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyM3B4O1xuICBsZWZ0OiAyMHB4O1xufVxuLmRvYy1jYXJkX19mdWxsLWRldGFpbCB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE1cHggNXB4IDEwcHggNXB4O1xufVxuLmRvYy1jYXJkX19mdWxsLWRldGFpbC1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5kb2MtY2FyZF9fZnVsbC1kZXRhaWwtY29udGVudF9fdGl0bGUge1xuICBjb2xvcjogIzAwNTliMztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uZG9jLWNhcmRfX2Z1bGwtZGV0YWlsLWNvbnRlbnRfX3NwZWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZG9jLWNhcmRfX2Z1bGwtZGV0YWlsLWNvbnRlbnRfX3NwZWMgaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGNvbG9yOiBjb3JhbDtcbn1cbi5kb2MtY2FyZF9fZnVsbC1kZXRhaWwtY29udGVudCBwIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/virtual-clinic-detail/virtual-clinic-detail.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/virtual-clinic-detail/virtual-clinic-detail.page.ts ***!
    \*********************************************************************/

  /*! exports provided: VirtualClinicDetailPage */

  /***/
  function srcAppVirtualClinicDetailVirtualClinicDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualClinicDetailPage", function () {
      return VirtualClinicDetailPage;
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


    var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../storage/swasth-storage.service */
    "./src/app/storage/swasth-storage.service.ts");
    /* harmony import */


    var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/login-auth.service */
    "./src/app/services/login-auth.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var VirtualClinicDetailPage = /*#__PURE__*/function () {
      function VirtualClinicDetailPage(route, router, authService, swStorage, loginAuth, dataService) {
        _classCallCheck(this, VirtualClinicDetailPage);

        this.route = route;
        this.router = router;
        this.authService = authService;
        this.swStorage = swStorage;
        this.loginAuth = loginAuth;
        this.dataService = dataService;
        /* this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
            this.circleDocList = this.router.getCurrentNavigation().extras.state.circleDocList;
            this.circleDetail = this.router.getCurrentNavigation().extras.state.circledetail;
            this.ptDetail = this.router.getCurrentNavigation().extras.state.ptdetail;
            let vCircleDocUidList:any=[];
            console.log("vcircle",this.circleDocList);
            for (let cd of this.circleDocList) {
              vCircleDocUidList.push(cd.docUserId);
            }
            let vCircleDocUidListObj = {
              docuidlist: vCircleDocUidList
            }
            console.log("vcircle",vCircleDocUidListObj);
            this.authService
            .getCircleDocProfile(vCircleDocUidListObj)
            .subscribe(data=>{
              console.log("data",data);
              this.docProfileList=data;
            });
          }
        }); */
      }

      _createClass(VirtualClinicDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.route.snapshot.data['vcData']) {
            var data = this.route.snapshot.data['vcData'];
            this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(function (stdata) {
              _this.ptDetail = stdata;
              _this.circleDocList = data.circleDocList;
              _this.circleDetail = data.circledetail;
              var vCircleDocUidList = [];

              var _iterator = _createForOfIteratorHelper(_this.circleDocList),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var cd = _step.value;
                  vCircleDocUidList.push(cd.docUserId);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var vCircleDocUidListObj = {
                docuidlist: vCircleDocUidList
              };
              console.log("vcircle", vCircleDocUidListObj);

              _this.authService.getCircleDocProfile(vCircleDocUidListObj).subscribe(function (data) {
                console.log("data", data);
                _this.docProfileList = data;
              });
            });
          }
        }
      }, {
        key: "joinCircle",
        value: function joinCircle() {
          /* let navigationExtras: NavigationExtras = {
            state: {
              circledetail: this.circleDetail,
              docProfileList: this.docProfileList,
              ptdetail: this.ptDetail
            }
          };
          this.router.navigate(['/subscription-page'], navigationExtras); */
          var pt = {
            circledetail: this.circleDetail,
            docProfileList: this.docProfileList
          };
          console.log("Subscribe Obj==>", pt);
          this.dataService.setData(24, pt);
          this.router.navigateByUrl("subscription-page/24");
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginAuth.logout();
        }
      }]);

      return VirtualClinicDetailPage;
    }();

    VirtualClinicDetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_4__["SwasthStorageService"]
      }, {
        type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoginAuthService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }];
    };

    VirtualClinicDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-virtual-clinic-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./virtual-clinic-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/virtual-clinic-detail/virtual-clinic-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./virtual-clinic-detail.page.scss */
      "./src/app/virtual-clinic-detail/virtual-clinic-detail.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_4__["SwasthStorageService"], _services_login_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoginAuthService"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])], VirtualClinicDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=virtual-clinic-detail-virtual-clinic-detail-module-es5.js.map