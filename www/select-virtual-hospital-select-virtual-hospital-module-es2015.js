(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-virtual-hospital-select-virtual-hospital-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-virtual-hospital/select-virtual-hospital.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-virtual-hospital/select-virtual-hospital.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle; padding-left: 15px;\">\r\n      <ion-title>Swasth</ion-title>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"notifications-outline\" style=\"font-size: 26px; padding-right: 20px;\"></ion-icon>\r\n      <ion-icon name=\"exit-outline\" style=\"font-size: 26px;\" (click)=\"logout()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col class=\"regis__heading\">\r\n      <div style=\"position: absolute;right: 15px;top: 13px;width: 50px;height: 50px;background: #fff;border-radius: 50%;box-shadow: 1px 5px 10px #222\">\r\n        <h3>{{ptFirstLetter}}</h3>\r\n        <!-- <h3>J</h3> -->\r\n      </div>\r\n      <h5>Find a personalised network of doctors you can contact at any time and anywhere.</h5>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row style=\"margin-top: 40px;\">\r\n    <ion-col size=\"12\" sizeMd=\"8\" offsetMd=\"2\">\r\n      <div class=\"plan\">\r\n        <ion-card class=\"plan__card\" (click)=\"selectDocList()\">\r\n          <ion-card-content>\r\n            <ion-card-title>Choose 3-5 specialities you would like to have as your personalised network of doctors.</ion-card-title>\r\n            <ion-card-subtitle>Select a Family Physician (compulsory) and other specialities you would like to have as part of your network.</ion-card-subtitle>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <div class=\"spec\" *ngIf=\"docSelectionStatus\">\r\n          <div class=\"spec__selected\">\r\n            <ion-label class=\"spec__subtitle\">Specialization:</ion-label>\r\n            <ng-container *ngIf=\"selectedSpecListArray.length>=1\">\r\n              <div class=\"spec__selected-list\">\r\n                <ng-container *ngFor=\"let ssa of selectedSpecListArray\">\r\n                  <ion-chip (click)=\"removeSpec\">\r\n                    <ion-label>{{ssa}}</ion-label>\r\n                    <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n                  </ion-chip>\r\n                </ng-container>\r\n              </div>       \r\n            </ng-container>\r\n          </div>\r\n              \r\n          <ion-card>\r\n            <ion-card-content>              \r\n              <div class=\"spec__list\">\r\n                <div class=\"spec__list-left\">\r\n                  <ng-container *ngFor=\"let sp of docSpecialization.slice(0,13); let i=index\">\r\n                    <ion-list>\r\n                      <div style=\"display: flex;\">\r\n                        <ion-checkbox color=\"primary\" value=\"{{sp.specialisationName}}\" (ionChange)=\"selectSpec($event)\"></ion-checkbox>\r\n                        <ion-label>{{sp.specialisationName}}</ion-label>\r\n                      </div>\r\n                    </ion-list>\r\n                  </ng-container>\r\n                </div>\r\n                <div class=\"spec__list-right\">\r\n                  <ng-container *ngFor=\"let sp of docSpecialization.slice(13, docSpecialization.length); let i=index\">\r\n                    <ion-list>\r\n                      <div style=\"display: flex;\">\r\n                        <ion-checkbox color=\"primary\" value=\"{{sp.specialisationName}}\" (ionChange)=\"selectSpec($event)\"></ion-checkbox>\r\n                        <ion-label>{{sp.specialisationName}}</ion-label>\r\n                      </div>\r\n                    </ion-list>\r\n                  </ng-container>                  \r\n                </div>\r\n              </div>\r\n              <div class=\"spec__search\">\r\n                <!-- <ion-chip> -->\r\n                  <ion-label>+ View More</ion-label>\r\n                <!-- </ion-chip> -->\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <div class=\"spec__search\">\r\n            <ion-button (click)=\"specArraySearch()\">Find Clinics</ion-button>\r\n          </div> \r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"plan\">\r\n        <ion-card class=\"plan__card\" style=\"background-color: #00b395;\" (click)=\"docSuggestion()\">\r\n          <ion-card-content>\r\n            <ion-card-title>Need help selecting your network of doctors?</ion-card-title>\r\n            <ion-card-subtitle style=\"color: #fff;\">Don’t know who you want in your network? Don’t worry Swasth will help you pick your own personalised network. Just fill in your problems.</ion-card-subtitle>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <div class=\"doc-suggestion\" *ngIf=\"docSuggestionStatus\">\r\n          <div class=\"doc-suggestion__vital\">\r\n            <div class=\"doc-suggestion__vital-left\">\r\n              <ion-label>Age:</ion-label>\r\n              <ion-input class=\"c-form__input\"></ion-input>\r\n            </div>\r\n            <div class=\"doc-suggestion__vital-right\">\r\n              <ion-label>Gender:</ion-label>\r\n              <select class=\"c-form__select\">\r\n                <option disabled>--Select--</option>\r\n                <option>Male</option>\r\n                <option>Female</option>\r\n                <option>Transgender</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <ion-label>Pre Existing Illness:</ion-label>\r\n          <ion-input class=\"c-form__input\"></ion-input>\r\n          <div class=\"spec__search\">\r\n            <ion-button>Get Suggestion</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"plan\">\r\n        <ion-card class=\"plan__card\" style=\"background-color: #919191;\" (click)=\"docCode()\">\r\n          <ion-card-content>\r\n            <ion-card-title style=\"color: #fff;\">Have a code to join an existing network of doctors?</ion-card-title>\r\n            <ion-card-subtitle style=\"color: #fff;\">Did your doctor give you a code to join their network? Enter it here and join their network NOW!</ion-card-subtitle>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <div class=\"code\" *ngIf=\"docCodeSelectStatus\">\r\n          <div class=\"code__input\">\r\n            <ion-label>Enter the Clinic code</ion-label>\r\n            <ion-input class=\"c-form__input\" name=\"cliniccode\" [(ngModel)]=\"cliniccode\"></ion-input>\r\n          </div>\r\n          <div class=\"spec__search\">\r\n            <ion-button (click)=\"searchCircleDocListByCcode()\">Find Clinics</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-col>  \r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/select-virtual-hospital/select-virtual-hospital-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/select-virtual-hospital/select-virtual-hospital-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SelectVirtualHospitalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVirtualHospitalPageRoutingModule", function() { return SelectVirtualHospitalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_virtual_hospital_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-virtual-hospital.page */ "./src/app/select-virtual-hospital/select-virtual-hospital.page.ts");




const routes = [
    {
        path: '',
        component: _select_virtual_hospital_page__WEBPACK_IMPORTED_MODULE_3__["SelectVirtualHospitalPage"]
    }
];
let SelectVirtualHospitalPageRoutingModule = class SelectVirtualHospitalPageRoutingModule {
};
SelectVirtualHospitalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectVirtualHospitalPageRoutingModule);



/***/ }),

/***/ "./src/app/select-virtual-hospital/select-virtual-hospital.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/select-virtual-hospital/select-virtual-hospital.module.ts ***!
  \***************************************************************************/
/*! exports provided: SelectVirtualHospitalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVirtualHospitalPageModule", function() { return SelectVirtualHospitalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_virtual_hospital_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-virtual-hospital-routing.module */ "./src/app/select-virtual-hospital/select-virtual-hospital-routing.module.ts");
/* harmony import */ var _select_virtual_hospital_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-virtual-hospital.page */ "./src/app/select-virtual-hospital/select-virtual-hospital.page.ts");







let SelectVirtualHospitalPageModule = class SelectVirtualHospitalPageModule {
};
SelectVirtualHospitalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_virtual_hospital_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectVirtualHospitalPageRoutingModule"]
        ],
        declarations: [_select_virtual_hospital_page__WEBPACK_IMPORTED_MODULE_6__["SelectVirtualHospitalPage"]]
    })
], SelectVirtualHospitalPageModule);



/***/ }),

/***/ "./src/app/select-virtual-hospital/select-virtual-hospital.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/select-virtual-hospital/select-virtual-hospital.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #fafafa;\n}\n\n.regis__heading {\n  height: 150px;\n  padding-top: 50px;\n  background-image: linear-gradient(120deg, #0059b3, #00b395);\n}\n\n.regis__heading h5 {\n  text-align: start;\n  color: #fff;\n  padding-left: 10px;\n  padding-top: 10px;\n  text-shadow: 1px 1px #222222;\n}\n\n.regis__heading h3 {\n  color: #00b395;\n  position: absolute;\n  left: 15px;\n  top: -5px;\n  font-weight: bold;\n  text-shadow: 2px 2px 2px #444;\n  font-size: 26px;\n}\n\n.plan__card {\n  --ion-background-color:#fff;\n  border-radius: 20px;\n  min-height: 130px;\n}\n\n.spec {\n  margin: -8px 30px -8px 30px;\n  background-color: #e5e5e5;\n}\n\n.spec__selected {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.spec__selected-list {\n  padding-left: 10px;\n}\n\n.spec__selected-list ion-chip {\n  height: auto;\n  color: #737373;\n}\n\n.spec__subtitle {\n  padding: 10px 0px 3px 15px;\n  color: #0064b9;\n}\n\n.spec__list {\n  display: flex;\n  width: 100%;\n}\n\n.spec__list-left {\n  width: 50%;\n}\n\n.spec__list-right {\n  width: 50%;\n}\n\n.spec__list ion-label {\n  padding-left: 4px;\n  color: #222;\n}\n\n.spec__search {\n  text-align: center;\n  width: 100%;\n}\n\n.spec__search ion-button {\n  --background: #0059b3;\n}\n\n.doc-suggestion {\n  margin: -8px 30px -8px 30px;\n  padding: 10px;\n  background-color: #e5e5e5;\n}\n\n.doc-suggestion__vital {\n  display: flex;\n  width: 100%;\n}\n\n.doc-suggestion__vital-left {\n  width: 50%;\n  margin-right: 8px;\n}\n\n.doc-suggestion__vital-right {\n  width: 50%;\n  margin-left: 8px;\n}\n\n.doc-suggestion ion-label {\n  margin-bottom: 5px;\n  font-family: \"Roboto\", sans-serif;\n  color: #222;\n  font-size: 15px;\n  padding: 9px 0px 6px 5px;\n}\n\n.code {\n  margin: -8px 30px -8px 30px;\n  padding: 10px;\n  background-color: #e5e5e5;\n}\n\n.code__input {\n  width: 100%;\n  display: flex;\n}\n\n.code ion-label {\n  margin-bottom: 5px;\n  font-family: \"Roboto\", sans-serif;\n  color: #222;\n  font-size: 15px;\n  padding: 9px 8px 6px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LXZpcnR1YWwtaG9zcGl0YWwvRjpcXHN3YXN0aFxcc3dhc3RodmlydHVhbHBhdGllbnQvc3JjXFxhcHBcXHNlbGVjdC12aXJ0dWFsLWhvc3BpdGFsXFxzZWxlY3QtdmlydHVhbC1ob3NwaXRhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbGVjdC12aXJ0dWFsLWhvc3BpdGFsL3NlbGVjdC12aXJ0dWFsLWhvc3BpdGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtCQUFBO0FDQUo7O0FESUk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyREFBQTtBQ0RSOztBREVRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDQVo7O0FERVE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDQVo7O0FES0k7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNGUjs7QURLQTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7QUNGSjs7QURHSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDRFI7O0FERVE7RUFDSSxrQkFBQTtBQ0FaOztBRENZO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNDaEI7O0FER0k7RUFDSSwwQkFBQTtFQUNBLGNBQUE7QUNEUjs7QURHSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDRFI7O0FERVE7RUFDSSxVQUFBO0FDQVo7O0FERVE7RUFDSSxVQUFBO0FDQVo7O0FERVE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNBWjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0RSOztBREVRO0VBQ0kscUJBQUE7QUNBWjs7QURJQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDREo7O0FERUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0FSOztBRENRO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDQ1o7O0FEQ1E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNDWjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDQVI7O0FESUE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0RKOztBREdJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNEUjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3QtdmlydHVhbC1ob3NwaXRhbC9zZWxlY3QtdmlydHVhbC1ob3NwaXRhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMDA1OWIzLCAjMDBiMzk1KTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi5yZWdpc3tcclxuICAgICZfX2hlYWRpbmcge1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzAwNTliMywgIzAwYjM5NSk7XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4ICMyMjIyMjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMGIzOTU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICM0NDQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnBsYW4ge1xyXG4gICAgJl9fY2FyZCB7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbn1cclxuLnNwZWMge1xyXG4gICAgbWFyZ2luOiAtOHB4IDMwcHggLThweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTVlNWU1O1xyXG4gICAgJl9fc2VsZWN0ZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAmLWxpc3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGlvbi1jaGlwIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzM3MzczO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fc3VidGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6MTBweCAwcHggM3B4IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDY0Yjk7XHJcbiAgICB9XHJcbiAgICAmX19saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3NlYXJjaCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMDU5YjM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5kb2Mtc3VnZ2VzdGlvbiB7XHJcbiAgICBtYXJnaW46IC04cHggMzBweCAtOHB4IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTVlNWU1O1xyXG4gICAgJl9fdml0YWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICYtbGVmdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogOXB4IDBweCA2cHggNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLmNvZGUge1xyXG4gICAgbWFyZ2luOiAtOHB4IDMwcHggLThweCAzMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2U1ZTVlNTtcclxuXHJcbiAgICAmX19pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiA5cHggOHB4IDZweCA1cHg7XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbi5yZWdpc19faGVhZGluZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMDA1OWIzLCAjMDBiMzk1KTtcbn1cbi5yZWdpc19faGVhZGluZyBoNSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzIyMjIyMjtcbn1cbi5yZWdpc19faGVhZGluZyBoMyB7XG4gIGNvbG9yOiAjMDBiMzk1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1cHg7XG4gIHRvcDogLTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjNDQ0O1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5wbGFuX19jYXJkIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMzBweDtcbn1cblxuLnNwZWMge1xuICBtYXJnaW46IC04cHggMzBweCAtOHB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG59XG4uc3BlY19fc2VsZWN0ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uc3BlY19fc2VsZWN0ZWQtbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5zcGVjX19zZWxlY3RlZC1saXN0IGlvbi1jaGlwIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzczNzM3Mztcbn1cbi5zcGVjX19zdWJ0aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDNweCAxNXB4O1xuICBjb2xvcjogIzAwNjRiOTtcbn1cbi5zcGVjX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3BlY19fbGlzdC1sZWZ0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zcGVjX19saXN0LXJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zcGVjX19saXN0IGlvbi1sYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBjb2xvcjogIzIyMjtcbn1cbi5zcGVjX19zZWFyY2gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNwZWNfX3NlYXJjaCBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1OWIzO1xufVxuXG4uZG9jLXN1Z2dlc3Rpb24ge1xuICBtYXJnaW46IC04cHggMzBweCAtOHB4IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG59XG4uZG9jLXN1Z2dlc3Rpb25fX3ZpdGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZG9jLXN1Z2dlc3Rpb25fX3ZpdGFsLWxlZnQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5kb2Mtc3VnZ2VzdGlvbl9fdml0YWwtcmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmRvYy1zdWdnZXN0aW9uIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDlweCAwcHggNnB4IDVweDtcbn1cblxuLmNvZGUge1xuICBtYXJnaW46IC04cHggMzBweCAtOHB4IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG59XG4uY29kZV9faW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb2RlIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDlweCA4cHggNnB4IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/select-virtual-hospital/select-virtual-hospital.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/select-virtual-hospital/select-virtual-hospital.page.ts ***!
  \*************************************************************************/
/*! exports provided: SelectVirtualHospitalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVirtualHospitalPage", function() { return SelectVirtualHospitalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login-auth.service */ "./src/app/services/login-auth.service.ts");
/* harmony import */ var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/swasth-storage.service */ "./src/app/storage/swasth-storage.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");







let SelectVirtualHospitalPage = class SelectVirtualHospitalPage {
    constructor(route, authService, router, loginAuth, swStorage, dataService) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.loginAuth = loginAuth;
        this.swStorage = swStorage;
        this.dataService = dataService;
        this.docSelectionStatus = false;
        this.docSuggestionStatus = false;
        this.docCodeSelectStatus = false;
        this.selectedSpecListArray = [];
        /* this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
            this.ptDecodedLogin = this.router.getCurrentNavigation().extras.state.user;
            this.authService
            .patientdetail(this.ptDecodedLogin.UID)
            .subscribe(data=>{
              this.ptDetail=data;
              this.ptFirstLetter = this.ptDetail.ptFirstName.charAt(0).toUpperCase();
              console.log("ptdetail",this.ptDetail);
            });
          }
        }); */
    }
    ngOnInit() {
        this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(data => {
            this.ptDetail = data;
            console.log("ptdetail", this.ptDetail);
            this.ptFirstLetter = this.ptDetail.ptFirstName.charAt(0).toUpperCase();
        });
        this.getDocSpecialization();
    }
    selectDocList() {
        this.selectedSpecListArray = [];
        this.docSelectionStatus = !this.docSelectionStatus;
        this.docSuggestionStatus = false;
        this.docCodeSelectStatus = false;
    }
    docSuggestion() {
        this.selectedSpecListArray = [];
        this.docSuggestionStatus = !this.docSuggestionStatus;
        this.docSelectionStatus = false;
        this.docCodeSelectStatus = false;
    }
    docCode() {
        this.selectedSpecListArray = [];
        this.docCodeSelectStatus = !this.docCodeSelectStatus;
        this.docSelectionStatus = false;
        this.docSuggestionStatus = false;
    }
    selectSpec(event) {
        console.log("select spec", event);
        if (event.detail.checked) {
            if (this.selectedSpecListArray.length >= 5) {
                console.log("case >5");
                event.detail.checked = !event.detail.checked;
                alert("You have already selected 5 specialization of doctors");
            }
            else {
                this.selectedSpecListArray.push(event.detail.value);
            }
        }
        else {
            const index = this.selectedSpecListArray.indexOf(event.detail.value);
            if (index > -1) {
                this.selectedSpecListArray.splice(index, 1);
            }
        }
    }
    specArraySearch() {
        if (this.selectedSpecListArray.length < 1) {
            alert("Please select atleast 3 specialization of doctors");
        }
        else if (3 - this.selectedSpecListArray.length >= 1) {
            alert("Please select " + (3 - this.selectedSpecListArray.length) + " more specialization of doctors");
        }
        else {
            let specObj = {
                spec: this.selectedSpecListArray
            };
            console.log("case>3 and <5", specObj);
            this.authService
                .getVirtualCircleBySpec(specObj)
                .subscribe(data => {
                console.log("data", data);
                let circleList = data;
                if (circleList.length > 0) {
                    /* let navigationExtras: NavigationExtras = {
                      state: {
                        searchCircleList: circleList,
                        ptDetail:this.ptDetail
                      }
                    }; */
                    console.log("clist===>", circleList);
                    let sd = {
                        searchCircleList: circleList,
                    };
                    this.dataService.setData(22, sd);
                    this.router.navigateByUrl('search-virtual-hospital/22');
                }
                else {
                    alert("there is no circle in this specialization");
                }
            });
        }
    }
    getCircleByCode() {
        if (this.cliniccode != "" && this.cliniccode != undefined) {
            console.log("circle", this.cliniccode);
            this.authService
                .getCircleDetailByCode(this.cliniccode)
                .subscribe(data => {
                let circleDetail = [];
                circleDetail = data;
                if (circleDetail.length >= 1) {
                    console.log("data", data);
                    let circleDetail = data;
                    let navigationExtras = {
                        state: {
                            circleDocList: circleDetail
                        }
                    };
                    this.router.navigate(['virtual-clinic-detail'], navigationExtras);
                }
                else {
                    alert("Enter valid circle code");
                }
            });
        }
        else {
            alert("Please enter the circle code");
        }
    }
    getDocSpecialization() {
        console.log("get");
        this.authService.getDoctorSpecialization()
            .subscribe(data => {
            console.log("doc spec", data);
            this.docSpecialization = data;
        });
    }
    // search by circle code
    searchCircleDocListByCcode() {
        if (this.cliniccode != "") {
            this.authService.getCircleDocListByCcode(this.cliniccode)
                .subscribe(data => {
                console.log("response res--", data);
                if (data != null) {
                    let responseRes = data;
                    // alert("success");
                    this.cliniccode = "";
                    let cd = {
                        circleDocList: responseRes.circleSpecList,
                        circledetail: responseRes,
                    };
                    this.dataService.setData(23, cd);
                    this.router.navigateByUrl('virtual-clinic-detail/23');
                }
                else {
                    alert("Enter valid circle code");
                }
            });
        }
        else {
            alert("Please enter the circle code");
        }
    }
    // Logout
    logout() {
        this.loginAuth.logout();
    }
};
SelectVirtualHospitalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_4__["LoginAuthService"] },
    { type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_5__["SwasthStorageService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }
];
SelectVirtualHospitalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-virtual-hospital',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-virtual-hospital.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-virtual-hospital/select-virtual-hospital.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-virtual-hospital.page.scss */ "./src/app/select-virtual-hospital/select-virtual-hospital.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_login_auth_service__WEBPACK_IMPORTED_MODULE_4__["LoginAuthService"],
        _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_5__["SwasthStorageService"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
], SelectVirtualHospitalPage);



/***/ })

}]);
//# sourceMappingURL=select-virtual-hospital-select-virtual-hospital-module-es2015.js.map