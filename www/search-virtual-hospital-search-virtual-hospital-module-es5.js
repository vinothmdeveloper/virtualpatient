function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-virtual-hospital-search-virtual-hospital-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search-virtual-hospital/search-virtual-hospital.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-virtual-hospital/search-virtual-hospital.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchVirtualHospitalSearchVirtualHospitalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle; padding-left: 15px;\">\r\n      <ion-title>Swasth</ion-title>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"notifications-outline\" style=\"font-size: 26px; padding-right: 20px;\"></ion-icon>\r\n      <ion-icon name=\"exit-outline\" style=\"font-size: 26px;\" (click)=\"logout()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col class=\"regis__heading\">\r\n      <h1 *ngIf=\"ptDetail != undefined\">Hi {{ptDetail.ptFirstName}}!</h1>\r\n      <h6>We found you some personalised networks of doctors you may like. Click on each network to learn more about the doctors in the network.</h6>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-grid fixed>\r\n    <ion-row style=\"margin-top: 10px;\" *ngIf=\"circleList != undefined\">\r\n      <ion-col size=\"12\" sizeMd=\"4\" *ngFor=\"let cl of circleList\">\r\n        <ion-card class=\"doc-card\" (click)=\"showCircleDetail(cl)\">\r\n          <div class=\"doc-card__full\">\r\n            <div class=\"doc-card__full-logo\">\r\n              <!-- <div style=\"width: 50px;height: 50px;background: #fff;border-radius: 50%; margin: auto;box-shadow: 1px 5px 10px #222\"> -->\r\n                <ion-icon name=\"person-outline\"></ion-icon>\r\n              <!-- </div> -->\r\n            </div>\r\n            <div class=\"doc-card__full-detail\">\r\n              <div class=\"doc-card__full-detail-content\">\r\n                <div>\r\n                  <ion-label class=\"doc-card__full-detail-content__title\">{{cl.circleObj.circleName}}</ion-label>\r\n                </div>\r\n                <p>List of Specialities:</p>\r\n                <div class=\"doc-card__full-detail-content__spec\">\r\n                  <ng-container *ngFor=\"let s of cl.circleSpecList\">\r\n                    <ion-label>{{s.docSpec}}</ion-label>   \r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n              <div class=\"doc-card__full-detail-like\">\r\n                <ion-icon name=\"thumbs-up-outline\"></ion-icon>\r\n                <p>27</p>\r\n              </div>              \r\n            </div>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"position: static;bottom: 0px;width: 100%;\">\r\n      <ion-col size=\"12\" style=\"text-align: center;\">\r\n        <ion-chip>\r\n          <p style=\"color: #0059b3;\">Want more clinics</p>\r\n          <ion-icon name=\"refresh-outline\" style=\"color: #0059b3;\"></ion-icon>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/search-virtual-hospital/search-virtual-hospital-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/search-virtual-hospital/search-virtual-hospital-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: SearchVirtualHospitalPageRoutingModule */

  /***/
  function srcAppSearchVirtualHospitalSearchVirtualHospitalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchVirtualHospitalPageRoutingModule", function () {
      return SearchVirtualHospitalPageRoutingModule;
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


    var _search_virtual_hospital_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-virtual-hospital.page */
    "./src/app/search-virtual-hospital/search-virtual-hospital.page.ts");

    var routes = [{
      path: '',
      component: _search_virtual_hospital_page__WEBPACK_IMPORTED_MODULE_3__["SearchVirtualHospitalPage"]
    }];

    var SearchVirtualHospitalPageRoutingModule = function SearchVirtualHospitalPageRoutingModule() {
      _classCallCheck(this, SearchVirtualHospitalPageRoutingModule);
    };

    SearchVirtualHospitalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchVirtualHospitalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/search-virtual-hospital/search-virtual-hospital.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/search-virtual-hospital/search-virtual-hospital.module.ts ***!
    \***************************************************************************/

  /*! exports provided: SearchVirtualHospitalPageModule */

  /***/
  function srcAppSearchVirtualHospitalSearchVirtualHospitalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchVirtualHospitalPageModule", function () {
      return SearchVirtualHospitalPageModule;
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


    var _search_virtual_hospital_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-virtual-hospital-routing.module */
    "./src/app/search-virtual-hospital/search-virtual-hospital-routing.module.ts");
    /* harmony import */


    var _search_virtual_hospital_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-virtual-hospital.page */
    "./src/app/search-virtual-hospital/search-virtual-hospital.page.ts");

    var SearchVirtualHospitalPageModule = function SearchVirtualHospitalPageModule() {
      _classCallCheck(this, SearchVirtualHospitalPageModule);
    };

    SearchVirtualHospitalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_virtual_hospital_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchVirtualHospitalPageRoutingModule"]],
      declarations: [_search_virtual_hospital_page__WEBPACK_IMPORTED_MODULE_6__["SearchVirtualHospitalPage"]]
    })], SearchVirtualHospitalPageModule);
    /***/
  },

  /***/
  "./src/app/search-virtual-hospital/search-virtual-hospital.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/search-virtual-hospital/search-virtual-hospital.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchVirtualHospitalSearchVirtualHospitalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".regis__heading {\n  height: 180px;\n  padding-top: 20px;\n  background-image: linear-gradient(120deg, #0059b3, #00b395);\n}\n.regis__heading h1 {\n  text-align: start;\n  color: #fff;\n  padding-left: 10px;\n  padding-top: 10px;\n  text-shadow: 1px 1px 5px #222222;\n}\n.regis__heading h6 {\n  text-align: start;\n  color: #fff;\n  padding-left: 10px;\n  padding-top: 10px;\n  text-shadow: 1px 1px 2px #333333;\n}\n.doc-card {\n  border-radius: 10px;\n  background-color: aliceblue;\n  margin: 5px;\n}\n.doc-card__full {\n  width: 100%;\n  display: flex;\n}\n.doc-card__full-logo {\n  width: 20%;\n  text-align: center;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 52px;\n  background: darkcyan;\n}\n.doc-card__full-logo ion-icon {\n  color: #fff;\n  font-size: 28px;\n  position: absolute;\n  top: 28px;\n  left: 20px;\n}\n.doc-card__full-detail {\n  width: 80%;\n  display: flex;\n  padding: 15px 5px 10px 5px;\n}\n.doc-card__full-detail-content {\n  width: 80%;\n}\n.doc-card__full-detail-content__title {\n  color: #0059b3;\n  padding-left: 5px;\n}\n.doc-card__full-detail-content__spec {\n  display: flex;\n  flex-wrap: wrap;\n}\n.doc-card__full-detail-content__spec ion-label {\n  padding-left: 5px;\n  color: coral;\n}\n.doc-card__full-detail-content p {\n  margin: auto;\n  padding-left: 5px;\n  padding-top: 5px;\n}\n.doc-card__full-detail-like {\n  width: 20%;\n  text-align: center;\n}\n.doc-card__full-detail-like p {\n  margin-top: 0px;\n}\n.doc-card__full-detail-like ion-icon {\n  color: #0059b3;\n  padding-top: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXZpcnR1YWwtaG9zcGl0YWwvRjpcXHN3YXN0aFxcc3dhc3RodmlydHVhbHBhdGllbnQvc3JjXFxhcHBcXHNlYXJjaC12aXJ0dWFsLWhvc3BpdGFsXFxzZWFyY2gtdmlydHVhbC1ob3NwaXRhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlYXJjaC12aXJ0dWFsLWhvc3BpdGFsL3NlYXJjaC12aXJ0dWFsLWhvc3BpdGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDJEQUFBO0FDQVI7QURDUTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ0NaO0FEQ1E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNDWjtBREdBO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNBSjtBRENJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDUjtBREFRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDRVo7QUREWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0doQjtBREFRO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQ0VaO0FERFk7RUFDSSxVQUFBO0FDR2hCO0FERmdCO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDSXBCO0FERmdCO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNJcEI7QURGb0I7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNJeEI7QUREZ0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0dwQjtBREFZO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDRWhCO0FERGdCO0VBQ0ksZUFBQTtBQ0dwQjtBRERnQjtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0dwQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC12aXJ0dWFsLWhvc3BpdGFsL3NlYXJjaC12aXJ0dWFsLWhvc3BpdGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3tcclxuICAgICZfX2hlYWRpbmcge1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzAwNTliMywgIzAwYjM5NSk7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCAjMjIyMjIyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICMzMzMzMzM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5kb2MtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgJl9fZnVsbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgJi1sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTsgXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrY3lhbjtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtZGV0YWlsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTsgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOjE1cHggNXB4IDEwcHggNXB4O1xyXG4gICAgICAgICAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNTliMzsgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19zcGVjIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb3JhbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWxpa2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwJTsgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IzAwNTliMztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMThweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5yZWdpc19faGVhZGluZyB7XG4gIGhlaWdodDogMTgwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMDA1OWIzLCAjMDBiMzk1KTtcbn1cbi5yZWdpc19faGVhZGluZyBoMSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4ICMyMjIyMjI7XG59XG4ucmVnaXNfX2hlYWRpbmcgaDYge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjMzMzMzMzO1xufVxuXG4uZG9jLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIG1hcmdpbjogNXB4O1xufVxuLmRvYy1jYXJkX19mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZG9jLWNhcmRfX2Z1bGwtbG9nbyB7XG4gIHdpZHRoOiAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MnB4O1xuICBiYWNrZ3JvdW5kOiBkYXJrY3lhbjtcbn1cbi5kb2MtY2FyZF9fZnVsbC1sb2dvIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI4cHg7XG4gIGxlZnQ6IDIwcHg7XG59XG4uZG9jLWNhcmRfX2Z1bGwtZGV0YWlsIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTVweCA1cHggMTBweCA1cHg7XG59XG4uZG9jLWNhcmRfX2Z1bGwtZGV0YWlsLWNvbnRlbnQge1xuICB3aWR0aDogODAlO1xufVxuLmRvYy1jYXJkX19mdWxsLWRldGFpbC1jb250ZW50X190aXRsZSB7XG4gIGNvbG9yOiAjMDA1OWIzO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5kb2MtY2FyZF9fZnVsbC1kZXRhaWwtY29udGVudF9fc3BlYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5kb2MtY2FyZF9fZnVsbC1kZXRhaWwtY29udGVudF9fc3BlYyBpb24tbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgY29sb3I6IGNvcmFsO1xufVxuLmRvYy1jYXJkX19mdWxsLWRldGFpbC1jb250ZW50IHAge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmRvYy1jYXJkX19mdWxsLWRldGFpbC1saWtlIHtcbiAgd2lkdGg6IDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRvYy1jYXJkX19mdWxsLWRldGFpbC1saWtlIHAge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uZG9jLWNhcmRfX2Z1bGwtZGV0YWlsLWxpa2UgaW9uLWljb24ge1xuICBjb2xvcjogIzAwNTliMztcbiAgcGFkZGluZy10b3A6IDE4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/search-virtual-hospital/search-virtual-hospital.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/search-virtual-hospital/search-virtual-hospital.page.ts ***!
    \*************************************************************************/

  /*! exports provided: SearchVirtualHospitalPage */

  /***/
  function srcAppSearchVirtualHospitalSearchVirtualHospitalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchVirtualHospitalPage", function () {
      return SearchVirtualHospitalPage;
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


    var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/login-auth.service */
    "./src/app/services/login-auth.service.ts");
    /* harmony import */


    var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../storage/swasth-storage.service */
    "./src/app/storage/swasth-storage.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var SearchVirtualHospitalPage = /*#__PURE__*/function () {
      function SearchVirtualHospitalPage(route, router, authService, loginAuth, swStorage, dataService) {
        _classCallCheck(this, SearchVirtualHospitalPage);

        /* this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
            this.circleList = this.router.getCurrentNavigation().extras.state.searchCircleList;
            this.router.getCurrentNavigation().extras.state.ptDetail;
            console.log("circlelist", this.circleList);
            console.log("PtDetails", this.ptDetail);
            if (this.circleList.length<1) {
              // this.noCircleStatus=true;
            }
          }
        }); */
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loginAuth = loginAuth;
        this.swStorage = swStorage;
        this.dataService = dataService;
      }

      _createClass(SearchVirtualHospitalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.route.snapshot.data['svData']) {
            var data = this.route.snapshot.data['svData'];
            this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(function (stdata) {
              _this.ptDetail = stdata;
              _this.circleList = data.searchCircleList;
              console.log("patient detail==>", _this.ptDetail);
              console.log("Circle list==>", _this.circleList);
            });
          }
        }
      }, {
        key: "showCircleDetail",
        value: function showCircleDetail(circledetail) {
          console.log("circledetails", circledetail);
          var cd = {
            circleDocList: circledetail.circleSpecList,
            circledetail: circledetail
          };
          this.dataService.setData(23, cd);
          this.router.navigateByUrl('virtual-clinic-detail/23');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginAuth.logout();
        }
      }]);

      return SearchVirtualHospitalPage;
    }();

    SearchVirtualHospitalPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_4__["LoginAuthService"]
      }, {
        type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_5__["SwasthStorageService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }];
    };

    SearchVirtualHospitalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-virtual-hospital',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search-virtual-hospital.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search-virtual-hospital/search-virtual-hospital.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search-virtual-hospital.page.scss */
      "./src/app/search-virtual-hospital/search-virtual-hospital.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_login_auth_service__WEBPACK_IMPORTED_MODULE_4__["LoginAuthService"], _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_5__["SwasthStorageService"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])], SearchVirtualHospitalPage);
    /***/
  }
}]);
//# sourceMappingURL=search-virtual-hospital-search-virtual-hospital-module-es5.js.map