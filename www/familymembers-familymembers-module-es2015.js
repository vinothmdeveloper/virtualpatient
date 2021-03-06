(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["familymembers-familymembers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/familymembers/familymembers.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/familymembers/familymembers.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button></ion-menu-button> -->\n      <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle; padding-left: 15px;\">\n      <ion-title>Swasth</ion-title>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"notifications-outline\" style=\"font-size: 26px; padding-right: 20px;\"></ion-icon>\n      <ion-icon name=\"exit-outline\" style=\"font-size: 26px;\" (click)=\"logout()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-row>\n    <ion-col class=\"regis__heading\">\n      <h1>Select Profile</h1>\n    </ion-col>\n  </ion-row> -->\n  <ion-row class=\"family-members\">\n    <!-- <img src=\"https://swasth.online/img_avatar.png\" alt=\"Avatar\" class=\"avatar\">\n    <img src=\"https://swasth.online/img_avatar2.png\" alt=\"Avatar\" class=\"avatar\">\n    <img src=\"https://swasth.online/img_avatar.png\" alt=\"Avatar\" class=\"avatar\">\n    <img src=\"https://swasth.online/img_avatar2.png\" alt=\"Avatar\" class=\"avatar\">\n    <img src=\"https://swasth.online/img_avatar.png\" alt=\"Avatar\" class=\"avatar\"> -->\n    <div class=\"mblk\" (click)=\"switchProfile(userdetail.userID,'Primary')\" *ngIf=\"userdetail!=undefined\">\n      <div class=\"block1\">\n        <ion-icon name=\"man\" class=\"member-icon\"></ion-icon>\n      </div>\n      <ion-label class=\"member-name\">{{userdetail.ptFirstName}} {{userdetail.ptLastName}}</ion-label>\n    </div>\n    \n      <div class=\"mblk\" *ngFor=\"let fm of familyMembers\">\n        <div class=\"block2\" (click)=\"switchProfile(fm.userID,'Secondary')\">\n          <ion-icon name=\"woman\" class=\"member-icon\"></ion-icon>\n        </div>\n        <ion-label class=\"member-name\">{{fm.ptFirstName}} {{fm.ptLastName}}</ion-label>\n      </div>\n    <div class=\"mblk\">\n    <div class=\"block3\" (click)=\"addFamilyMember()\">\n    <ion-icon name=\"add-circle\" class=\"member-icon\"></ion-icon>      \n    </div>\n    </div>\n    <!--<div class=\"mblk\">\n    <div class=\"block4\">\n      <ion-icon name=\"woman\" class=\"member-icon\"></ion-icon>      \n    </div>\n    <ion-label class=\"member-name\">Member4</ion-label>\n    </div>\n    <div class=\"mblk\">\n    <div class=\"block5\">\n      <ion-icon name=\"man\" class=\"member-icon\"></ion-icon>      \n    </div>\n    <ion-label class=\"member-name\">Member5</ion-label>\n    </div> -->\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/familymembers/familymembers-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/familymembers/familymembers-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FamilymembersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilymembersPageRoutingModule", function() { return FamilymembersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _familymembers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./familymembers.page */ "./src/app/familymembers/familymembers.page.ts");




const routes = [
    {
        path: '',
        component: _familymembers_page__WEBPACK_IMPORTED_MODULE_3__["FamilymembersPage"]
    }
];
let FamilymembersPageRoutingModule = class FamilymembersPageRoutingModule {
};
FamilymembersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FamilymembersPageRoutingModule);



/***/ }),

/***/ "./src/app/familymembers/familymembers.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/familymembers/familymembers.module.ts ***!
  \*******************************************************/
/*! exports provided: FamilymembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilymembersPageModule", function() { return FamilymembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _familymembers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./familymembers-routing.module */ "./src/app/familymembers/familymembers-routing.module.ts");
/* harmony import */ var _familymembers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./familymembers.page */ "./src/app/familymembers/familymembers.page.ts");







let FamilymembersPageModule = class FamilymembersPageModule {
};
FamilymembersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _familymembers_routing_module__WEBPACK_IMPORTED_MODULE_5__["FamilymembersPageRoutingModule"]
        ],
        declarations: [_familymembers_page__WEBPACK_IMPORTED_MODULE_6__["FamilymembersPage"]]
    })
], FamilymembersPageModule);



/***/ }),

/***/ "./src/app/familymembers/familymembers.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/familymembers/familymembers.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".regis__heading {\n  height: 130px;\n  padding-top: 40px;\n  background-image: linear-gradient(120deg, #0059b3, #00b395);\n}\n.regis__heading h1 {\n  text-align: start;\n  color: #ffffff;\n  padding-left: 10px;\n  padding-top: 10px;\n  text-shadow: 1px 1px 2px #222222;\n}\n.avatar {\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-left: 20px;\n}\n.family-members {\n  position: absolute;\n  padding-left: 148px;\n  top: 90px;\n}\n.block1 {\n  height: 100px;\n  width: 100%;\n  background-color: #00b3ea;\n  background-image: linear-gradient(to top, #CCFFFF, #00b3ea 50%);\n}\n.mblk {\n  width: 100px;\n  text-align: center;\n  height: 100%;\n  margin-left: 15px;\n}\n.block2 {\n  height: 100px;\n  width: 100%;\n  background-color: #00db89;\n  background-image: linear-gradient(to top, #CCFFCC, #00db89 50%);\n}\n.block3 {\n  height: 100px;\n  width: 100%;\n  background-color: #FFCC33;\n  background-image: linear-gradient(to top, #FFFFCC, #FFCC33 50%);\n}\n.block4 {\n  height: 100px;\n  width: 100%;\n  background-color: #003333;\n  background-image: linear-gradient(to top, #CCCCCC, #003333 50%);\n}\n.block5 {\n  height: 100px;\n  width: 100%;\n  background-color: #FF3333;\n  background-image: linear-gradient(to top, #FFCCCC, #FF3333 50%);\n}\n.member-icon {\n  color: #fff;\n  font-size: 45px;\n  margin-top: 27px;\n  align-content: center;\n}\n.member-name {\n  color: #9c9fa0;\n  font-size: 15px;\n  font-weight: bolder;\n  text-align: center;\n  width: 100%;\n  display: block;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFtaWx5bWVtYmVycy9GOlxcc3dhc3RoXFxzd2FzdGh2aXJ0dWFscGF0aWVudC9zcmNcXGFwcFxcZmFtaWx5bWVtYmVyc1xcZmFtaWx5bWVtYmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZhbWlseW1lbWJlcnMvZmFtaWx5bWVtYmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyREFBQTtBQ0FOO0FEQ007RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNDVjtBREdBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREVBO0VBRUksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNBSjtBREdBO0VBRUksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLCtEQUNBO0FDRko7QURRQTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ05GO0FEU0E7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0RBQ0E7QUNSSjtBRGVBO0VBRUksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLCtEQUNBO0FDZEo7QURxQkE7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0RBQ0E7QUNwQko7QUQyQkE7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0RBQ0E7QUMxQko7QURpQ0E7RUFFRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUMvQkY7QURrQ0E7RUFFRSxjQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDaENKIiwiZmlsZSI6InNyYy9hcHAvZmFtaWx5bWVtYmVycy9mYW1pbHltZW1iZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3tcclxuICAmX19oZWFkaW5nIHtcclxuICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMwMDU5YjMsICMwMGIzOTUpO1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzIyMjIyMjtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4uYXZhdGFyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyAgICBcclxuICB9XHJcbi5mYW1pbHktbWVtYmVyc1xyXG57ICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0OHB4O1xyXG4gICAgdG9wOiA5MHB4O1xyXG59XHJcblxyXG4uYmxvY2sxXHJcbntcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2VhO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byB0b3AsXHJcbiAgICAgICAgI0NDRkZGRixcclxuICAgICAgICAjMDBiM2VhIDUwJVxyXG4gICAgICApO1xyXG59XHJcbi5tYmxrXHJcbntcclxuICB3aWR0aDogMTAwcHg7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5ibG9jazJcclxue1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZGI4OTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gdG9wLFxyXG4gICAgICAgICNDQ0ZGQ0MsXHJcbiAgICAgICAgIzAwZGI4OSA1MCVcclxuICAgICAgKTtcclxufVxyXG5cclxuLmJsb2NrM1xyXG57XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQzMzO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byB0b3AsXHJcbiAgICAgICAgI0ZGRkZDQyxcclxuICAgICAgICAjRkZDQzMzIDUwJVxyXG4gICAgICApO1xyXG59XHJcblxyXG4uYmxvY2s0XHJcbntcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHRvcCxcclxuICAgICAgICAjQ0NDQ0NDLFxyXG4gICAgICAgICMwMDMzMzMgNTAlXHJcbiAgICAgICk7XHJcbn1cclxuXHJcbi5ibG9jazVcclxue1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMzMzMztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gdG9wLFxyXG4gICAgICAgICNGRkNDQ0MsXHJcbiAgICAgICAgI0ZGMzMzMyA1MCVcclxuICAgICAgKTtcclxufVxyXG5cclxuLm1lbWJlci1pY29uXHJcbntcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjdweDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW1iZXItbmFtZVxyXG57XHJcbiAgY29sb3I6ICM5YzlmYTA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgXHJcbn1cclxuXHJcbiIsIi5yZWdpc19faGVhZGluZyB7XG4gIGhlaWdodDogMTMwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMDA1OWIzLCAjMDBiMzk1KTtcbn1cbi5yZWdpc19faGVhZGluZyBoMSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICMyMjIyMjI7XG59XG5cbi5hdmF0YXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZmFtaWx5LW1lbWJlcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctbGVmdDogMTQ4cHg7XG4gIHRvcDogOTBweDtcbn1cblxuLmJsb2NrMSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2VhO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjQ0NGRkZGLCAjMDBiM2VhIDUwJSk7XG59XG5cbi5tYmxrIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5ibG9jazIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZGI4OTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI0NDRkZDQywgIzAwZGI4OSA1MCUpO1xufVxuXG4uYmxvY2szIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNDMzM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNGRkZGQ0MsICNGRkNDMzMgNTAlKTtcbn1cblxuLmJsb2NrNCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMzMzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjQ0NDQ0NDLCAjMDAzMzMzIDUwJSk7XG59XG5cbi5ibG9jazUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMzMzMztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI0ZGQ0NDQywgI0ZGMzMzMyA1MCUpO1xufVxuXG4ubWVtYmVyLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBtYXJnaW4tdG9wOiAyN3B4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tZW1iZXItbmFtZSB7XG4gIGNvbG9yOiAjOWM5ZmEwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/familymembers/familymembers.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/familymembers/familymembers.page.ts ***!
  \*****************************************************/
/*! exports provided: FamilymembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilymembersPage", function() { return FamilymembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage/swasth-storage.service */ "./src/app/storage/swasth-storage.service.ts");
/* harmony import */ var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/login-auth.service */ "./src/app/services/login-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/config */ "./src/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");











const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
let FamilymembersPage = class FamilymembersPage {
    constructor(authService, jwtHelper, datepipe, storage, swasthStorage, loginAuth, router, http) {
        this.authService = authService;
        this.datepipe = datepipe;
        this.storage = storage;
        this.swasthStorage = swasthStorage;
        this.loginAuth = loginAuth;
        this.router = router;
        this.http = http;
        this.patientList = [];
        this.pf_url = "";
        this.ptEmailid = "";
        this.ptMobileno = "";
        this.ptEmergencyEmailid = "";
        this.ptEmergencyContactno = "";
        this.profile = {};
        this.accountBtn = false;
        this.familyMembersDetails = {};
        this.newLogin = "";
        this.userdetail = [];
        this.familyMembers = [];
        this.LOGINUSER_PROFILE = "patient_profile";
    }
    assignValue() {
        this.profile = {
            ptID: this.userdetail.ptID,
            tenantID: this.userdetail.tenantID,
            userID: this.userdetail.userID,
            ptFirstName: this.userdetail.ptFirstName,
            ptLastName: this.userdetail.ptLastName,
            ptAge: this.userdetail.ptAge,
            ptAadharNo: this.userdetail.ptAadharNo,
            ptMobileNo: this.userdetail.ptMobileNo,
            ptBloodGroup: this.userdetail.ptBloodGroup,
            ptDob: this.userdetail.ptDob,
            ptEmailID: this.userdetail.ptEmailID,
            ptGender: this.userdetail.ptGender,
            ptCountry: this.userdetail.ptCountry,
            ptAllergies: this.userdetail.ptAllergies,
            ptMaritalStatus: this.userdetail.ptMaritalStatus,
            ptEmergencyContactName: this.userdetail.ptEmergencyContactName,
            ptEmergencyRelationship: this.userdetail.ptEmergencyRelationship,
            ptEmergencyContactNo: this.userdetail.ptEmergencyContactNo,
            ptEmergencyEmailID: this.userdetail.ptEmergencyEmailID,
            updatedDateTime: new Date(),
            updatedByUserID: this.userdetail.userID,
            status: this.userdetail.status
        };
    }
    getAge(dob) {
        let latest_date = this.datepipe.transform(Date(), 'yyyy-MM-dd');
        //console.log("Current Date=="+latest_date);
        let dobdate = new Date(dob);
        let dobdate1 = new Date(latest_date);
        // console.log("Current Date=="+dobdate);
        //current_date=Date.now();
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds 
        var timeDiff = Math.round(Math.abs((dobdate1.getTime() - dobdate.getTime()) / (oneDay)));
        //var diffDays = Math.round(Math.abs((dobdate.getTime() - current_date.getTime())/(oneDay)));
        var age = (timeDiff / 365);
        this.age1 = Math.floor(age);
    }
    ngOnInit() {
        //alert("test");
    }
    ionViewWillEnter() {
        console.log("Family Members");
        // console.log("Family Members");
        // alert("Test");
        this.decodedToken = this.loginAuth.getUser();
        this.http.get(`${src_config__WEBPACK_IMPORTED_MODULE_9__["LOOKUP_URL"]}/getcirclepatientdetails/` + this.decodedToken.UID, { responseType: "json" }).subscribe(data => {
            // this.swasthStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(data => {
            if (data != null) {
                this.userdetail = data;
                this.swasthStorage.setStorage(this.LOGINUSER_PROFILE, data);
            }
            if (this.userdetail != undefined || this.userdetail != null) {
                this.authService
                    .getFamilyMember(this.userdetail.createdByUserID)
                    .subscribe(data => {
                    this.familyMembers = data;
                    console.log("Family Members==>", this.familyMembers);
                    console.log("Family Members Count", this.familyMembers.length);
                    if (this.userdetail.accountType == "Normal" || this.userdetail.accountType == null) {
                        this.authService
                            .getPrimaryUserProfile(this.userdetail.createdByUserID)
                            .subscribe(data => {
                            console.log("Primary Profile==>", data);
                            if (data != null) {
                                this.swasthStorage.removeStorage(this.LOGINUSER_PROFILE);
                                this.swasthStorage.setStorage(this.LOGINUSER_PROFILE, data);
                                this.router.navigateByUrl('/pt-profile');
                            }
                        });
                    }
                    else {
                        this.authService
                            .getPrimaryUserProfile(this.userdetail.createdByUserID)
                            .subscribe(data => {
                            console.log("Primary Profile==>", data);
                            if (data != null) {
                                this.userdetail = data;
                            }
                        });
                    }
                });
                this.accountBtn = true;
                console.log("Home Page" + this.userdetail);
                console.log("user_detail=====" + JSON.stringify(this.userdetail));
                console.log("user_id====" + this.userdetail.userID);
                this.userFirstLetter = this.userdetail.ptFirstName.charAt(0).toUpperCase();
                this.edit = false;
                this.assignValue();
                if (this.userdetail.ptDob != null) {
                    this.getAge(this.userdetail.ptDob);
                }
                else {
                    this.age1 = this.userdetail.ptAge;
                }
                this.authService
                    .getAddressByUser(this.userdetail.userID)
                    .subscribe(data => {
                    if (data != null) {
                        this.ptAddress = data;
                    }
                });
            }
        });
    }
    switchProfile(userid, accountType) {
        console.log("User id and account type" + userid + "  " + accountType);
        if (accountType == "Primary") {
            this.authService
                .getPrimaryUserProfile(userid)
                .subscribe(data => {
                console.log("Primary Profile==>", data);
                if (data != null) {
                    this.swasthStorage.removeStorage(this.LOGINUSER_PROFILE);
                    this.swasthStorage.setStorage(this.LOGINUSER_PROFILE, data);
                    this.router.navigateByUrl('/pt-profile');
                }
            });
        }
        else {
            console.log("User id and account type" + userid + "  " + accountType);
            this.authService
                .getFamilyMemberProfile(userid)
                .subscribe(data => {
                if (data != null) {
                    let familyProfile = {
                        accountType: null
                    };
                    familyProfile = data;
                    console.log("Secondary Profile==>", data);
                    this.swasthStorage.removeStorage(this.LOGINUSER_PROFILE);
                    this.swasthStorage.setStorage(this.LOGINUSER_PROFILE, data);
                    this.router.navigateByUrl('/pt-profile');
                }
            });
        }
    }
    addFamilyMember() {
        if (this.familyMembers.length >= 3) {
            alert("You can not add more then 3 family member");
        }
        else {
            this.router.navigateByUrl('/addfamilymember');
        }
    }
    logout() {
        this.loginAuth.logout();
    }
};
FamilymembersPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_6__["SwasthStorageService"] },
    { type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_7__["LoginAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }
];
FamilymembersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-familymembers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./familymembers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/familymembers/familymembers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./familymembers.page.scss */ "./src/app/familymembers/familymembers.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_6__["SwasthStorageService"],
        _services_login_auth_service__WEBPACK_IMPORTED_MODULE_7__["LoginAuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])
], FamilymembersPage);



/***/ })

}]);
//# sourceMappingURL=familymembers-familymembers-module-es2015.js.map