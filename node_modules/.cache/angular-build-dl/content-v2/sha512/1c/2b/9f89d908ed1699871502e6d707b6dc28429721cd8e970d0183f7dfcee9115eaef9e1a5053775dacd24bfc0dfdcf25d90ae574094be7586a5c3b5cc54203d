function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pt-profile-pt-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pt-profile/pt-profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pt-profile/pt-profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPtProfilePtProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle; padding-left: 15px;\">\r\n      <ion-title>Swasth</ion-title>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"notifications-outline\" style=\"font-size: 26px; padding-right: 20px;\"></ion-icon>\r\n      <ion-icon name=\"exit-outline\" style=\"font-size: 26px;\" (click)=\"logout()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"alert alert--warning\" *ngIf=\"edit\">\r\n    <ion-grid fixed>\r\n      <ion-row align-items-center>\r\n        <ion-col size=\"12\">\r\n          <p class=\"alert__content\"><strong>Editing Mode is Activated</strong> - Now you can edit fields by tapping.</p>          \r\n        </ion-col>        \r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  \r\n  <section class=\"grid-heading\" [ngStyle]=\"{'background-image': 'url('+background+')'}\">\r\n    <ion-grid padding fixed class=\"grid-heading-container\">      \r\n      <ion-row align-items-center>\r\n        <ion-col size=\"12\" sizeMd=\"6\" class=\"static\">\r\n          <div class=\"profile\">\r\n            <div class=\"profile__pic\">\r\n              <div class=\"profile__block\">\r\n                <h3 class=\"profile__letter\">{{userFirstLetter}}</h3>\r\n                <ion-icon name=\"checkmark\" class=\"profile__verified-icon\"></ion-icon>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size=\"6\" class=\"static\">                    \r\n          <div class=\"edit\">\r\n            <!-- <p class=\"edit__button\" (click)=\"addFamilyMember()\" *ngIf=\"userdetail.accountType=='Family'\"><ion-icon name=\"person-add\" class=\"edit__icon\"></ion-icon>Add Family Member</p> -->\r\n            <p class=\"edit__button\" (click)=\"toggleEdit()\" *ngIf=\"!edit\"><ion-icon name=\"create\" class=\"edit__icon\"></ion-icon> Edit Profile</p>\r\n            <p class=\"edit__button\" (click)=\"toggleEdit()\" *ngIf=\"edit\"><ion-icon name=\"close\" class=\"edit__icon\"></ion-icon> Cancel Editing</p>            \r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </section>\r\n  <ion-grid class=\"profile-grid\" fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" sizeMd=\"4\" sizeLg=\"3\" padding>\r\n        <div class=\"profile\">\r\n          <h2 class=\"profile__title\" *ngIf=\"profile.ptLastName!=null\">{{profile.ptFirstName}} {{profile.ptLastName}}</h2>\r\n          <h2 class=\"profile__title\" *ngIf=\"profile.ptLastName==null\">{{profile.ptFirstName}}</h2>\r\n          <p class=\"profile__meta\">UID: {{profile.userID}}<br>{{age1}} years / {{profile.ptGender}}</p>\r\n        </div>\r\n        <div class=\"mobile-edit\">\r\n          <a href=\"#\" class=\"mobile-edit__button\" (click)=\"toggleEdit()\" *ngIf=\"!edit\"><ion-icon name=\"create\" class=\"mobile-edit__icon\"></ion-icon> Edit Profile</a>\r\n          <a href=\"#\" class=\"mobile-edit__button\" (click)=\"toggleEdit()\" *ngIf=\"edit\"><ion-icon name=\"close\" class=\"mobile-edit__icon\"></ion-icon> Cancel Editing</a>\r\n        </div>\r\n      </ion-col>\r\n        <ion-col size=\"12\" sizeMd=\"8\" sizeLg=\"9\" padding>\r\n          <form #updateForm=\"ngForm\" (ngSubmit)=\"update(updateForm.value)\" validate>\r\n            <ion-row justify-content-center>\r\n              <ion-col col-12>\r\n                <div class=\"c-list\" style=\"border-radius: 15px;\">\r\n                <div class=\"c-list__title-item c-list__title-item--primary\" style=\" border-top-left-radius: 15px; border-top-right-radius: 15px;\">\r\n                  <ion-row>\r\n                    <ion-col col-12>\r\n                      <h3 class=\"c-list__title text-primary\" style=\"margin: 0px;\"><ion-icon name=\"person\" class=\"c-list__title-icon\"></ion-icon> Personal Info</h3>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">DOB:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\"> {{ profile.ptDob | date: 'dd/MM/yyyy' }}</label>\r\n                      <ion-icon name=\"md-calendar\" class=\"c-list__field-icon\" *ngIf=\"!edit\"></ion-icon>\r\n                      <!-- <input type=\"date\" name=\"profile.ptDob\" class=\"c-list__date\" *ngIf=\"edit\" [(ngModel)]=\"profile.ptDob\" #profile.ptDob=\"ngModel\" required [class.invalid]=\"profile.ptDob.errors && profile.ptDob.dirty\" (change)=\"getAge(profile.ptDob)\">\r\n                      <ion-item class=\"error-message\" *ngIf=\"profile.ptDob.errors?.required && profile.ptDob.dirty\">\r\n                        Date of birth is required\r\n                      </ion-item>  -->\r\n                    </ion-col>\r\n                  </ion-row>  \r\n                </div>                                \r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">Mobile No:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ profile.ptMobileNo }}</label>\r\n                      <input type=\"number\" name=\"ptMobileno\" class=\"c-list__input\" [(ngModel)]=\"profile.ptMobileNo\" #ptMobileno=\"ngModel\" *ngIf=\"edit\" [class.invalid]=\"ptMobileno.errors && ptMobileno.dirty\" [pattern]=\"mobnumPattern\" required>\r\n                      <!-- <ion-item class=\"error-message\" *ngIf=\"ptMobileno.errors?.required && ptMobileno.dirty\">\r\n                        Mobile Number is required\r\n                      </ion-item>\r\n                      <div *ngIf=\"ptMobileno.errors && !isValidFormSubmitted\" [ngClass] = \"'error'\"> \r\n                        <ion-item *ngIf=\"ptMobileno.errors.pattern\" class=\"error-message\"> \r\n                          Mobile number not valid.\r\n                        </ion-item>  \r\n                      </div> -->\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">Email:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ profile.ptEmailID }}</label>\r\n                      <input type=\"email\" name=\"ptEmailid\" class=\"c-list__input\"   [(ngModel)]=\"profile.ptEmailID\" #ptEmailid=\"ngModel\" [class.invalid]=\"ptEmailid.errors && ptEmailid.dirty\" email *ngIf=\"edit\">\r\n                      <!-- <ion-item class=\"error-message\" *ngIf=\"ptEmailid.errors?.required && ptEmailid.dirty\">\r\n                        Email Id is required\r\n                      </ion-item> -->\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">Blood Group:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ profile.ptBloodGroup }}</label>\r\n                      <ion-icon name=\"ios-arrow-down\" class=\"c-list__field-icon\" *ngIf=\"edit\"></ion-icon>\r\n                      <select class=\"c-list__select\" name=\"profile.ptBloodGroup\" [(ngModel)]=\"profile.ptBloodGroup\" #profile.ptBloodGroup=\"ngModel\" *ngIf=\"edit\">\r\n                        <option disabled>--Select--</option>\r\n                        <option value=\"O+\">O+</option>\r\n                        <option value=\"O-\">O-</option>\r\n                        <option value=\"A+\">A+</option>\r\n                        <option value=\"A-\">A-</option>\r\n                        <option value=\"B+\">B+</option>\r\n                        <option value=\"B-\">B-</option>\r\n                        <option value=\"AB+\">AB+</option>\r\n                        <option value=\"AB-\">AB-</option>\r\n                      </select>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                \r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">Country:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ profile.ptCountry }}</label>\r\n                      <!--<input type=\"text\" name=\"profile.ptCountry\" class=\"c-list__input\" [(ngModel)]=\"profile.ptCountry\" #profile.ptCountry=\"ngModel\" *ngIf=\"edit\"> -->\r\n                      <ion-icon name=\"ios-arrow-down\" class=\"c-list__field-icon\" *ngIf=\"edit\"></ion-icon>\r\n                      <select class=\"c-list__select\" name=\"profile.ptCountry\" [(ngModel)]=\"profile.ptCountry\" #profile.ptCountry=\"ngModel\" *ngIf=\"edit\">\r\n                        <option disabled>--Select--</option>\r\n                        <option>India</option>\r\n                        <option>Bangladesh</option>\r\n                        <option>Brazil</option>\r\n                        <option>China</option>\r\n                        <option>France</option>\r\n                        <option>Japan</option>\r\n                        <option>Kuwait</option>\r\n                        <option>United Kingdom</option>\r\n                        <option>United States</option>\r\n                      </select>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">Allergies:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ profile.ptAllergies }}</label>\r\n                      <input type=\"text\" name=\"profile.ptAllergies\" class=\"c-list__input\" [(ngModel)]=\"profile.ptAllergies\" #profile.ptAllergies=\"ngModel\" *ngIf=\"edit\">\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n              <div class=\"c-list\" *ngIf=\"ptAddress!=undefined && ptAddress!=null\">\r\n                <div class=\"c-list__title-item c-list__title-item--primary\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <h3 class=\"c-list__title text-primary\"><ion-icon name=\"pin\" class=\"c-list__title-icon\"></ion-icon> Address</h3>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">Address Line1:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ ptAddress.addressLine1 }}</label>\r\n                      <input type=\"text\" class=\"c-list__input\" name=\"ptAddress.addressLine1\" [(ngModel)]=\"ptAddress.addressLine1\" #ptAddress.addressLine1=\"ngModel\" *ngIf=\"edit\" >\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">Address Line2:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ ptAddress.addressLine2 }}</label>\r\n                      <input type=\"text\" class=\"c-list__input\" name=\"ptAddress.addressLine2\" [(ngModel)]=\"ptAddress.addressLine2\" #ptAddress.addressLine2=\"ngModel\" *ngIf=\"edit\" >\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">City:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ ptAddress.City }}</label>\r\n                      <input type=\"text\" class=\"c-list__input\" name=\"ptAddress.City\" [(ngModel)]=\"ptAddress.City\" #ptAddress.City=\"ngModel\" *ngIf=\"edit\" >\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">State:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ ptAddress.state }}</label>\r\n                      <input type=\"text\" class=\"c-list__input\" name=\"ptAddress.state\" [(ngModel)]=\"ptAddress.state\" #ptAddress.state=\"ngModel\" *ngIf=\"edit\" >\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">Postal Code:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ ptAddress.postalCode }}</label>\r\n                      <input type=\"text\" class=\"c-list__input\" name=\"ptAddress.postalCode\" [(ngModel)]=\"ptAddress.postalCode\" #ptAddress.postalCode=\"ngModel\" *ngIf=\"edit\" >\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"c-list\" style=\"border-radius: 15px;\">\r\n                <div class=\"c-list__title-item c-list__title-item--danger\" style=\" border-top-left-radius: 15px; border-top-right-radius: 15px;\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <h3 class=\"c-list__title text-danger\" style=\"margin: 0px;\"><ion-icon name=\"call\" class=\"c-list__title-icon\"></ion-icon> Emergency Contact</h3>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">Name:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ profile.ptEmergencyContactName }}</label>\r\n                      <input type=\"text\" class=\"c-list__input\" name=\"profile.ptEmergencyContactName\" [(ngModel)]=\"profile.ptEmergencyContactName\" #profile.ptEmergencyContactName=\"ngModel\" *ngIf=\"edit\" required>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                \r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">Relationship:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ profile.ptEmergencyRelationship }}</label>\r\n                      <input type=\"text\" class=\"c-list__input\" name=\"profile.ptEmergencyRelationship\" [(ngModel)]=\"profile.ptEmergencyRelationship\" #profile.ptEmergencyRelationship=\"ngModel\" *ngIf=\"edit\">\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">Mobile No.:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ profile.ptEmergencyContactNo }}</label>\r\n                      <input type=\"text\" class=\"c-list__input\" name=\"ptEmergencyContactno\" [(ngModel)]=\"profile.ptEmergencyContactNo\" #ptEmergencyContactno=\"ngModel\" *ngIf=\"edit\" [class.invalid]=\"ptEmergencyContactno.errors && ptEmergencyContactno.dirty\" [pattern]=\"mobnumPattern\">\r\n                      <!-- <ion-item class=\"error-message\" *ngIf=\"ptEmergencyContactno.errors?.required && ptEmergencyContactno.dirty\">\r\n                        Mobile Number is required\r\n                      </ion-item>\r\n                      <div *ngIf=\"ptEmergencyContactno.errors && !isValidFormSubmitted\" [ngClass] = \"'error'\"> \r\n                        <ion-item *ngIf=\"ptEmergencyContactno.errors.pattern\" class=\"error-message\"> \r\n                          Mobile number not valid.\r\n                        </ion-item>  \r\n                      </div> -->\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                <div class=\"c-list__item\">\r\n                  <ion-row>\r\n                    <ion-col sizeSm=\"3\">\r\n                      <label class=\"c-list__label\">Email ID:</label>\r\n                    </ion-col>\r\n                    <ion-col sizeSm=\"9\">\r\n                      <label class=\"c-list__content\" *ngIf=\"!edit\">{{ profile.ptEmergencyEmailID }}</label>\r\n                      <input type=\"email\" class=\"c-list__input\" name=\"ptEmergencyEmailid\" [(ngModel)]=\"profile.ptEmergencyEmailID\" #ptEmergencyEmailid=\"ngModel\" [class.invalid]=\"ptEmergencyEmailid.errors && ptEmergencyEmailid.dirty\" email *ngIf=\"edit\">\r\n                      <!-- <ion-item class=\"error-message\" *ngIf=\"ptEmergencyEmailid.errors?.required && ptEmergencyEmailid.dirty\">\r\n                        Email Id is required\r\n                      </ion-item> -->\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col sizeSm=\"12\" *ngIf=\"this.edit\">\r\n              <button type=\"submit\" class=\"c-button c-button--primary c-button--fullwidth\" [disabled]=\"!updateForm.valid\">Update Profile</button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row justify-content-end>\r\n            <ion-col sizeMd=\"3\" *ngIf=\"accountBtn && !edit\">\r\n              <p class=\"c-button c-button--primary\" style=\"margin-right:10px;\" (click)=\"changePass()\">Change Password</p>\r\n            </ion-col>\r\n            <ion-col sizeMd=\"3\" *ngIf=\"!accountBtn && !edit\">\r\n              <p class=\"c-button c-button--primary\" style=\"margin-right:7px;\" (click)=\"separateAccount()\">Separate Account</p>\r\n            </ion-col>\r\n            <ion-col sizeMd=\"3\" *ngIf=\"!edit\">\r\n              <p class=\"c-button c-button--primary\" style=\"margin-right:7px;\" (click)=\"DeactivateAccount()\">Deactivate Account</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pt-profile/pt-profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pt-profile/pt-profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PtProfilePageRoutingModule */

  /***/
  function srcAppPtProfilePtProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PtProfilePageRoutingModule", function () {
      return PtProfilePageRoutingModule;
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


    var _pt_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pt-profile.page */
    "./src/app/pt-profile/pt-profile.page.ts");

    var routes = [{
      path: '',
      component: _pt_profile_page__WEBPACK_IMPORTED_MODULE_3__["PtProfilePage"]
    }];

    var PtProfilePageRoutingModule = function PtProfilePageRoutingModule() {
      _classCallCheck(this, PtProfilePageRoutingModule);
    };

    PtProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PtProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pt-profile/pt-profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pt-profile/pt-profile.module.ts ***!
    \*************************************************/

  /*! exports provided: PtProfilePageModule */

  /***/
  function srcAppPtProfilePtProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PtProfilePageModule", function () {
      return PtProfilePageModule;
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


    var _pt_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pt-profile-routing.module */
    "./src/app/pt-profile/pt-profile-routing.module.ts");
    /* harmony import */


    var _pt_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pt-profile.page */
    "./src/app/pt-profile/pt-profile.page.ts");

    var PtProfilePageModule = function PtProfilePageModule() {
      _classCallCheck(this, PtProfilePageModule);
    };

    PtProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pt_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["PtProfilePageRoutingModule"]],
      declarations: [_pt_profile_page__WEBPACK_IMPORTED_MODULE_6__["PtProfilePage"]]
    })], PtProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pt-profile/pt-profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pt-profile/pt-profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPtProfilePtProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid-heading {\n  position: relative;\n  height: 180px;\n  margin-bottom: 60px;\n  background-color: #0059b3;\n  background-size: cover;\n  background-position: center;\n}\n.grid-heading:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \" \";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 89, 179, 0.6);\n}\n.grid-heading-container {\n  position: relative;\n  height: 100%;\n}\n.grid-heading h2 {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.grid-heading p {\n  margin-top: 0;\n  margin-bottom: 0;\n  text-align: center;\n}\n.edit {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  display: flex;\n  justify-content: flex-end;\n  font-family: \"Roboto\", sans-serif;\n}\n.edit__button {\n  color: #fff;\n  display: block;\n  border: 1px solid #fff;\n  padding: 10px 15px;\n  border-radius: 4px;\n}\n.edit :first-child {\n  margin-right: 10px;\n}\n.edit__icon {\n  margin-right: 5px;\n  font-size: 14px;\n}\n.alert {\n  padding: 5px;\n  text-align: center;\n}\n.alert--warning {\n  background-color: #FFDC00;\n}\n.alert--warning .alert__content {\n  color: #5f5200;\n  margin: 0px;\n}\n.notifCount {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  text-align: center;\n  top: -6px;\n  right: 15px;\n  font-size: 15px;\n  padding-top: 4px;\n  padding-right: 2px;\n}\n.notifCountColor {\n  color: #fff;\n}\n.header_top {\n  padding-bottom: 56px;\n}\n.profile-card {\n  margin-top: 55px;\n}\n.profile__pic {\n  position: absolute;\n  bottom: -60px;\n  display: flex;\n}\n.profile__content {\n  margin-bottom: -96px;\n}\n.profile__block {\n  position: relative;\n  border-radius: 999px;\n  width: 120px;\n  height: 120px;\n  display: block;\n  background-color: #00b395;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.profile__letter {\n  margin-top: 0 !important;\n  line-height: 120px;\n  text-align: center;\n  font-size: 32px;\n  color: #fff;\n}\n.profile__title {\n  margin-bottom: 15px;\n  font-size: 36px;\n  font-family: \"Muli-Regular\", sans-serif;\n  color: #222;\n}\n.profile__meta {\n  margin-bottom: 20px;\n  font-size: 18px;\n  font-family: \"Roboto\", sans-serif;\n  color: #919191;\n  line-height: 1.5;\n}\n.profile__verified-icon {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  font-size: 24px;\n  display: block;\n  color: #fff;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  line-height: 30px;\n  background-color: #0059b3;\n  border-radius: 999px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.avatar {\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-left: 20px;\n}\n.family-members {\n  position: absolute;\n  padding-left: 148px;\n  top: 90px;\n}\n.mobile-edit {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  text-align: center;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  display: none;\n}\n.mobile-edit__button {\n  display: inline-block;\n  font-size: 14px;\n}\n.mobile-edit__icon {\n  margin-right: 10px;\n  font-size: 14px;\n}\n@media (max-width: 575px) {\n  .mobile-edit {\n    display: block;\n  }\n\n  .edit {\n    display: none;\n  }\n\n  .profile__pic {\n    justify-content: center;\n    left: 0;\n    width: 100%;\n  }\n  .profile__title {\n    text-align: center;\n    font-size: 28px;\n  }\n  .profile__meta {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHQtcHJvZmlsZS9GOlxcc3dhc3RoXFxzd2FzdGh2aXJ0dWFscGF0aWVudC9zcmNcXGFwcFxccHQtcHJvZmlsZVxccHQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3B0LXByb2ZpbGUvcHQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0hKO0FESUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FDRlI7QURLQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUE7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBM0NRO0FDMENaO0FERUk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ0s7RUFBYSxrQkFBQTtBQ0VsQjtBRERJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDR1I7QURBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0dKO0FERkk7RUFDSSx5QkFBQTtBQ0lSO0FESFE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ0taO0FEQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0ksV0FBQTtBQ0NKO0FERUE7RUFDSSxvQkFBQTtBQ0NKO0FER0E7RUFDSSxnQkFBQTtBQ0FKO0FER0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDQVI7QURFSTtFQUNJLG9CQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtFQUNBLHdDQUFBO0FDRFI7QURHSTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRFI7QURHSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQTdITztFQThIUCxXQUFBO0FDRFI7QURHSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQWxJSTtFQW1JSixjQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtBQ0ZSO0FETUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0hKO0FES0E7RUFFSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0hKO0FES0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7QUNGSjtBREdJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FESUE7RUFDSTtJQUNJLGNBQUE7RUNETjs7RURHRTtJQUNJLGFBQUE7RUNBTjs7RURHTTtJQUNJLHVCQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7RUNBVjtFREVNO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VDQVY7RURFTTtJQUNJLGtCQUFBO0VDQVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3B0LXByb2ZpbGUvcHQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1oZWFkaW5nOiAnTXVsaS1SZWd1bGFyJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtYm9keTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG4uZ3JpZC1oZWFkaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogY29sb3IoJGNvbG9ycywgcHJpbWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1OWIzO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgODksIDE3OSwgMC42KTtcclxuICAgIH1cclxufVxyXG4uZ3JpZC1oZWFkaW5nLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmdyaWQtaGVhZGluZyBoMiB7XHJcbiAgICAvLyBAZXh0ZW5kIC5tZC1oZWFkaW5nLTM7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZ3JpZC1oZWFkaW5nIHAge1xyXG4gICAgLy8gQGV4dGVuZCAubWQtYm9keS0xO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmVkaXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNnB4O1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1ib2R5O1xyXG4gICAgJl9fYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9OmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDogMTBweDt9XHJcbiAgICAmX19pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuLmFsZXJ0IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICYtLXdhcm5pbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRDMDA7XHJcbiAgICAgICAgLmFsZXJ0X19jb250ZW50IHtcclxuICAgICAgICAgICAgY29sb3I6ICM1ZjUyMDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5vdGlmQ291bnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIC8vcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAtNnB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7ICAgICAgIFxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjpjb2xvcigkY29sb3JzLCBkYW5nZXIpO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxufVxyXG5cclxuLm5vdGlmQ291bnRDb2xvciB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcblxyXG4uaGVhZGVyX3RvcCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTZweDtcclxufVxyXG5cclxuXHJcbi5wcm9maWxlLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNTVweDtcclxufVxyXG4ucHJvZmlsZSB7XHJcbiAgICAmX19waWMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC02MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtOTZweDtcclxuICAgIH1cclxuICAgICZfX2Jsb2NrIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogY29sb3IoJGNvbG9ycywgc2Vjb25kYXJ5KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMzk1O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB9XHJcbiAgICAmX19sZXR0ZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1oZWFkaW5nO1xyXG4gICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgfVxyXG4gICAgJl9fbWV0YSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWJvZHk7XHJcbiAgICAgICAgY29sb3I6ICM5MTkxOTE7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIH1cclxuICAgICZfX3ZlcmlmaWVkLWljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogY29sb3IoJGNvbG9ycywgcHJpbWFyeSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTliMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyAgICBcclxuICB9XHJcbi5mYW1pbHktbWVtYmVyc1xyXG57ICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0OHB4O1xyXG4gICAgdG9wOiA5MHB4O1xyXG59XHJcbi5tb2JpbGUtZWRpdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgICZfX2J1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgICZfX2ljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAubW9iaWxlLWVkaXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmVkaXQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgJl9fcGljIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19tZXRhIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuZ3JpZC1oZWFkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1OWIzO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uZ3JpZC1oZWFkaW5nOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgODksIDE3OSwgMC42KTtcbn1cblxuLmdyaWQtaGVhZGluZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZGluZyBoMiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyaWQtaGVhZGluZyBwIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZWRpdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNnB4O1xuICByaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG4uZWRpdF9fYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5lZGl0IDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5lZGl0X19pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmFsZXJ0IHtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWxlcnQtLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQzAwO1xufVxuLmFsZXJ0LS13YXJuaW5nIC5hbGVydF9fY29udGVudCB7XG4gIGNvbG9yOiAjNWY1MjAwO1xuICBtYXJnaW46IDBweDtcbn1cblxuLm5vdGlmQ291bnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IC02cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbn1cblxuLm5vdGlmQ291bnRDb2xvciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVhZGVyX3RvcCB7XG4gIHBhZGRpbmctYm90dG9tOiA1NnB4O1xufVxuXG4ucHJvZmlsZS1jYXJkIHtcbiAgbWFyZ2luLXRvcDogNTVweDtcbn1cblxuLnByb2ZpbGVfX3BpYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9maWxlX19jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogLTk2cHg7XG59XG4ucHJvZmlsZV9fYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMzk1O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLnByb2ZpbGVfX2xldHRlciB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucHJvZmlsZV9fdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzIyMjtcbn1cbi5wcm9maWxlX19tZXRhIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM5MTkxOTE7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4ucHJvZmlsZV9fdmVyaWZpZWQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU5YjM7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uYXZhdGFyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmZhbWlseS1tZW1iZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWxlZnQ6IDE0OHB4O1xuICB0b3A6IDkwcHg7XG59XG5cbi5tb2JpbGUtZWRpdCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubW9iaWxlLWVkaXRfX2J1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1vYmlsZS1lZGl0X19pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAubW9iaWxlLWVkaXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmVkaXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucHJvZmlsZV9fcGljIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9maWxlX190aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuICAucHJvZmlsZV9fbWV0YSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pt-profile/pt-profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pt-profile/pt-profile.page.ts ***!
    \***********************************************/

  /*! exports provided: PtProfilePage */

  /***/
  function srcAppPtProfilePtProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PtProfilePage", function () {
      return PtProfilePage;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
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

    var PtProfilePage = /*#__PURE__*/function () {
      function PtProfilePage(authService, modalCtrl, jwtHelper, loadingCtrl, toastCtrl, httpClient, datepipe, alertCtrl, popoverCtrl, swStorage, loginAuth, router) {
        _classCallCheck(this, PtProfilePage);

        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.httpClient = httpClient;
        this.datepipe = datepipe;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.swStorage = swStorage;
        this.loginAuth = loginAuth;
        this.router = router;
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.aadharPattern = "^((\\+91-?)|0)?[0-9]{13}$";
        this.userdetail = [];
        this.healthAlertList = [];
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
        this.background = authService.site_url + "bg-img-8.jpg";
        this.notificationStatus = true; //this.viewHealthAlert();

        /* this.authService
        .authUser
        .subscribe(jwt => {
          if (jwt) {
            const decoded = jwtHelper.decodeToken(jwt);
            this.user = decoded;
            this.userType=decoded.type;
            this.tenantID=decoded.TenantID;
            console.log(this.user);
            this.primaryUser=decoded.UID;
            this.familymemberId=decoded.UID;
            console.log("Family Member Id.."+this.familymemberId);
            this.primaryAccountUID = this.primaryUser;
            if(this.primaryUser==this.userdetail.userID){
              this.accountBtn=true;
            }
            console.log("gggggggggggggggggggg");
            this.authService
            .patientdetail(this.familymemberId)
            .subscribe(data => {
              console.log("gggggggggggggggggggg",data);
              if(data!==null){
                this.userdetail=data;
                console.log("Home Page"+ this.userdetail);
                console.log("user_detail====="+JSON.stringify(this.userdetail));
                console.log("user_id===="+this.userdetail.userID);
                      this.userFirstLetter=this.userdetail.ptFirstName.charAt(0).toUpperCase();
                this.edit = false;
                this.assignValue();
                if(this.userdetail.ptDob!=null)
                {
                  this.getAge(this.userdetail.ptDob);
                }
                else{
                  this.age1=this.userdetail.ptAge;
                }
                this.authService
                .getAddressByUser(this.userdetail.userID)
                .subscribe(data=>{
                  if(data!=null){
                    this.ptAddress=data;
                  }
                });
              }
            });
          }
          else {
            this.user = null;
          }
        }); */
      }

      _createClass(PtProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// console.log("Pt Profile");
          // this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(data=>{
          //   this.userdetail=data;
          //   this.accountBtn=true;
          //   console.log("Home Page"+ this.userdetail);
          //   console.log("user_detail====="+JSON.stringify(this.userdetail));
          //   console.log("user_id===="+this.userdetail.userID);
          //   this.userFirstLetter=this.userdetail.ptFirstName.charAt(0).toUpperCase();
          //   this.edit = false;
          //   this.assignValue();
          //   if(this.userdetail.ptDob!=null)
          //   {
          //     this.getAge(this.userdetail.ptDob);
          //   }
          //   else{
          //     this.age1=this.userdetail.ptAge;
          //   }
          //   this.authService
          //   .getAddressByUser(this.userdetail.userID)
          //   .subscribe(data=>{
          //     if(data!=null){
          //       this.ptAddress=data;
          //     }
          //   });
          // });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          console.log("Pt Profile");
          this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(function (data) {
            _this.userdetail = data;
            _this.accountBtn = true;
            console.log("Home Page" + _this.userdetail);
            console.log("user_detail=====" + JSON.stringify(_this.userdetail));
            console.log("user_id====" + _this.userdetail.userID);
            _this.userFirstLetter = _this.userdetail.ptFirstName.charAt(0).toUpperCase();
            _this.edit = false;

            _this.assignValue();

            if (_this.userdetail.ptDob != null) {
              _this.getAge(_this.userdetail.ptDob);
            } else {
              _this.age1 = _this.userdetail.ptAge;
            }

            _this.authService.getAddressByUser(_this.userdetail.userID).subscribe(function (data) {
              if (data != null) {
                _this.ptAddress = data;
              }
            });
          });
        }
      }, {
        key: "toggleEdit",
        value: function toggleEdit() {
          this.edit = !this.edit;
          this.assignValue();
          this.getAge(this.userdetail.ptDob);
        }
      }, {
        key: "assignValue",
        value: function assignValue() {
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
      }, {
        key: "getAge",
        value: function getAge(dob) {
          var latest_date = this.datepipe.transform(Date(), 'yyyy-MM-dd'); //console.log("Current Date=="+latest_date);

          var dobdate = new Date(dob);
          var dobdate1 = new Date(latest_date); // console.log("Current Date=="+dobdate);
          //current_date=Date.now();

          var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds 

          var timeDiff = Math.round(Math.abs((dobdate1.getTime() - dobdate.getTime()) / oneDay)); //var diffDays = Math.round(Math.abs((dobdate.getTime() - current_date.getTime())/(oneDay)));

          var age = timeDiff / 365;
          this.age1 = Math.floor(age);
        }
      }, {
        key: "update",
        value: function update(value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      spinner: 'bubbles',
                      message: ''
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    console.log(this.profile);
                    this.authService.update(this.profile, this.userdetail.userID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                      return loading.dismiss();
                    })).subscribe(function (jwt) {
                      return _this2.showSuccesToast(jwt);
                    }, function (err) {
                      return _this2.handleError(err);
                    });
                    this.authService.addAddress(this.ptAddress).subscribe(function (data) {
                      if (data != "success") {
                        _this2.authService.getAddressByUser(_this2.userdetail.userID).subscribe(function (data) {
                          if (data != null) {
                            _this2.ptAddress = data;
                          }
                        });
                      }
                    });

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // separateAccount(){
        //   console.log("separate account",this.primaryAccountUID);
        //   const split = this.alertCtrl.create({
        //     title: 'Separate Account',
        //     message: 'Are you sure want to separate the account?',
        //     buttons: [
        //       {
        //         text: 'Disagree',
        //         handler: () => {
        //           console.log('Disagree clicked');
        //         }
        //       },
        //       {
        //         text: 'Agree',
        //         handler: () => {
        //           console.log('Agree clicked');
        //           let popover = this.modalCtrl.create('SeparateAccountPage', {cssClass: 'recp-popover'});
        //           popover.onDidDismiss(data=>{
        //             console.log("data", data);
        //             if(data!=undefined){
        //             let splitaccount:any = data;
        //             let separateAccountObj:any;
        //             separateAccountObj ={
        //               userID: this.profile.userID,
        //               tenant_id: "1",
        //               role_id: "1",
        //               user_type: "Patient",
        //               userPassword:splitaccount.splitAcctPassword,
        //               created_date_time: new Date(),
        //               status:'Active'
        //             }
        //             this.authService
        //             .separateAccount(separateAccountObj,splitaccount.splitAcctMobileNo)
        //             .subscribe(data=>{
        //               console.log("split status", data);
        //               if(data=="success"){
        //                 this.authService
        //                 .patientdetail(this.primaryAccountUID)      
        //                 .subscribe(data => {
        //                   console.log("data",data);
        //                   this.userdetail=data;
        //                   this.userFirstLetter=this.userdetail.ptFirstName;
        //                   this.assignValue();
        //                   if(this.userdetail.ptDob!=null)
        //                   {
        //                     this.getAge(this.userdetail.ptDob);
        //                   }
        //                   else{
        //                     this.age1=this.userdetail.ptAge;
        //                   }
        //                 });
        //                 this.accountBtn=true;
        //                 this.showSuccesToast("split");
        //                 this.authService
        //                 .checkLogin();
        //               }
        //               else {
        //                 this.showSuccesToast("notsplit");
        //               }
        //             });
        //             }
        //           });
        //           popover.present();
        //         }
        //       }
        //     ]
        //   });
        //   split.present();
        // }
        // viewNotifications(myEvent:any) {
        //   //alert("Notifications");
        //   this.alertCount=0;
        //   this.notificationStatus=false;
        //   let popover = this.popoverCtrl.create('ViewhealthalertPage', {data:"Hello"},{ cssClass: 'noti-popover'});
        //   popover.present({
        //     ev: myEvent
        //   });
        //   //this.getNotificationCount(this.userid);
        // }

      }, {
        key: "viewHealthAlert",
        value: function viewHealthAlert() {
          var _this3 = this;

          this.authService.viewHealthAlert().subscribe(function (data) {
            _this3.healthAlertList = data;
            _this3.alertCount = _this3.healthAlertList.length;
          });
        } // getNotificationCount(userid:any) {
        //   this.authProvider
        //   .getNotifications(userid)
        //   .subscribe(data=>{
        //     console.log("Notifications",data);
        //     this.notifications=data;
        //     if(this.notifications.length!=0)
        //     {
        //       this.notificationStatus=true;
        //     }
        //     else
        //     {
        //       this.notificationStatus=false;
        //     }
        //   });
        // }

      }, {
        key: "showSuccesToast",
        value: function showSuccesToast(jwt) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast, _toast, _toast2, _toast3;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log("Response Message======" + jwt);

                    if (!(jwt === 'Success')) {
                      _context2.next = 9;
                      break;
                    }

                    //change to view mode
                    this.edit = false;
                    _context2.next = 5;
                    return this.toastCtrl.create({
                      message: 'Update successful',
                      duration: 3000,
                      position: 'bottom'
                    });

                  case 5:
                    toast = _context2.sent;
                    toast.present();
                    _context2.next = 27;
                    break;

                  case 9:
                    if (!(jwt === 'split')) {
                      _context2.next = 16;
                      break;
                    }

                    _context2.next = 12;
                    return this.toastCtrl.create({
                      message: 'Account separated successfully',
                      duration: 3000,
                      position: 'bottom'
                    });

                  case 12:
                    _toast = _context2.sent;

                    _toast.present();

                    _context2.next = 27;
                    break;

                  case 16:
                    if (!(jwt === "notsplit")) {
                      _context2.next = 23;
                      break;
                    }

                    _context2.next = 19;
                    return this.toastCtrl.create({
                      message: 'Account not separated',
                      duration: 3000,
                      position: 'bottom'
                    });

                  case 19:
                    _toast2 = _context2.sent;

                    _toast2.present();

                    _context2.next = 27;
                    break;

                  case 23:
                    _context2.next = 25;
                    return this.toastCtrl.create({
                      message: 'Update failed',
                      duration: 3000,
                      position: 'bottom'
                    });

                  case 25:
                    _toast3 = _context2.sent;

                    _toast3.present(); // this.usernameModel.control.setErrors({'usernameTaken': true});


                  case 27:
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
                    toast.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "addFamilyMember",
        value: function addFamilyMember() {
          this.router.navigateByUrl('/addfamilymember');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginAuth.logout();
        }
      }]);

      return PtProfilePage;
    }();

    PtProfilePage.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__["SwasthStorageService"]
      }, {
        type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_9__["LoginAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }];
    };

    PtProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pt-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pt-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pt-profile/pt-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pt-profile.page.scss */
      "./src/app/pt-profile/pt-profile.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_8__["SwasthStorageService"], _services_login_auth_service__WEBPACK_IMPORTED_MODULE_9__["LoginAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])], PtProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pt-profile-pt-profile-module-es5.js.map