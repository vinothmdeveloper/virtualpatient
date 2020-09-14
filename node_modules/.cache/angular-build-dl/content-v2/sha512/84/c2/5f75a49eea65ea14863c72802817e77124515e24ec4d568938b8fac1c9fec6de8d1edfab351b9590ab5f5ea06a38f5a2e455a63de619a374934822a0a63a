function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pt-eprescription-pt-eprescription-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pt-eprescription/pt-eprescription.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pt-eprescription/pt-eprescription.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPtEprescriptionPtEprescriptionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <img src=\"{{authService.logo_url}}\" height=\"24\" style=\"vertical-align: middle; padding-left: 15px;\">\r\n      <ion-title>Swasth</ion-title>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"notifications-outline\" style=\"font-size: 26px; padding-right: 20px;\"></ion-icon>\r\n      <ion-icon name=\"exit-outline\" style=\"font-size: 26px;\" (click)=\"logout()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <section class=\"grid-heading \" [ngStyle]=\"{'background-image': 'url('+background+')'}\">\r\n    <ion-grid padding fixed relative>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h2 class=\"page__title\">{{label_obj.PAGE_TITLE}}</h2>\r\n          <div class=\"button-tamil\">\r\n            <!-- <ion-item style=\"background: none; border: none;\" class=\"item-inner\"> -->\r\n              <ion-label>English</ion-label>    \r\n              <ion-toggle [(ngModel)]=\"tamil\" (ionChange)=\"tamilOn()\"></ion-toggle>\r\n              <ion-label style=\"margin-top: 6px;\">தமிழ்</ion-label>   \r\n            <!-- </ion-item> -->\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>        \r\n        \r\n      <div class=\"button-print\" *ngIf=\"webPlatform\">\r\n        <ion-icon name=\"print\" title=\"Download Prescription\" (click)=\"createPdf()\"> </ion-icon>\r\n      </div>\r\n      <div class=\"button-download\" *ngIf=\"webPlatform\">\r\n        <ion-icon name=\"cloud-download\" title=\"Print Prescription\" (click)=\"createPdf()\"></ion-icon>\r\n      </div>\r\n      <div class=\"button-print\" *ngIf=\"!webPlatform\">\r\n        <ion-icon name=\"print\" title=\"Download Prescription\"  (click)=\"printPdf()\"> </ion-icon>\r\n      </div>\r\n      <div class=\"button-download\" *ngIf=\"!webPlatform\">\r\n        <ion-icon name=\"cloud-download\" title=\"Print Prescription\" (click)=\"createPdf()\"> </ion-icon>\r\n      </div>           \r\n    </ion-grid>        \r\n  </section>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row *ngIf=\"prescription!=undefined\">\r\n      <ion-col size=12 sizeLg=8>\r\n        <ion-row no-padding>\r\n          <ion-col size=12>\r\n            <div class=\"c-content\">\r\n              <h2>{{label_obj.PRESCRIPTION_TITLE}}</h2>\r\n            </div>                        \r\n            <ng-container *ngIf=\"webPlatform\">\r\n              <ion-card *ngIf=\"vital!==null\">\r\n                <div class=\"c-accordion\">\r\n                  <div class=\"c-accordion__item\">\r\n                    <h3 class=\"c-accordion__link c-list__title text-primary\" (click)=\"vital_tabs_toggle(0)\"><ion-icon name=\"person\" class=\"c-list__title-icon\" style=\"padding-right: 10px;\"></ion-icon>{{ label_obj.VITAL_TITLE }}\r\n                      <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-up\" *ngIf=\"tabs1[0].title.isExpanded\"></ion-icon>\r\n                      <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-down\" *ngIf=\"!tabs1[0].title.isExpanded\"></ion-icon>\r\n                    </h3>\r\n                    <div class=\"c-accordion__content1\" *ngIf=\"tabs1[0].isExpanded\">\r\n                      <div class=\"c-list\">\r\n                        <div class=\"c-list__item\" *ngIf=\"vital.ptVitalHeight!==null && vital.ptVitalHeight!==''\">\r\n                          <ion-row>\r\n                            <ion-col sizeSm=5>\r\n                              <label class=\"c-list__label\">{{label_obj.VITAL_HEIGHT}}:</label>\r\n                            </ion-col>\r\n                            <ion-col sizeSm=7>\r\n                              <label class=\"c-list__content\">{{vital.ptVitalHeight}}cm</label>                                                                                            \r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </div>\r\n                        <div class=\"c-list__item\" *ngIf=\"vital.ptVitalWeight!==null && vital.ptVitalWeight!==''\">\r\n                          <ion-row>\r\n                            <ion-col sizeSm=5>\r\n                              <label class=\"c-list__label\">{{label_obj.VITAL_WEIGHT}}:</label>\r\n                            </ion-col>\r\n                            <ion-col sizeSm=7>\r\n                              <label class=\"c-list__content\">{{vital.ptVitalWeight}}kg</label>                                            \r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </div>\r\n                        <div class=\"c-list__item\" *ngIf=\"vital.ptVitalTemp!==null && vital.ptVitalTemp!==''\">\r\n                          <ion-row>\r\n                            <ion-col sizeSm=5>\r\n                              <label class=\"c-list__label\">{{label_obj.VITAL_TEMPERATURE}}:</label>\r\n                            </ion-col>\r\n                            <ion-col sizeSm=7>\r\n                              <label class=\"c-list__content\">{{vital.ptVitalTemp}}<sup>o</sup>{{vital.ptVitalTempType}}</label>                                            \r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </div>\r\n                        <div class=\"c-list__item\" *ngIf=\"vital.ptVitalBp!==null && vital.ptVitalBp!==''\">\r\n                          <ion-row>\r\n                            <ion-col sizeSm=5>\r\n                              <label class=\"c-list__label\">{{label_obj.VITAL_BLOOD_PRESSURE}}:</label>\r\n                            </ion-col>\r\n                            <ion-col sizeSm=7>\r\n                              <label class=\"c-list__content\">{{vital.ptVitalBp}}mmHg</label>                                            \r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </div>\r\n                        <div class=\"c-list__item\" *ngIf=\"vital.ptVitalPr!==null && vital.ptVitalPr!==''\">\r\n                          <ion-row>\r\n                            <ion-col sizeSm=5>\r\n                              <label class=\"c-list__label\">{{label_obj.VITAL_PULSE_RATE}}:</label>\r\n                            </ion-col>\r\n                            <ion-col sizeSm=7>\r\n                              <label class=\"c-list__content\">{{vital.ptVitalPr}}BPM</label>                                            \r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </div>\r\n                        <div class=\"c-list__item\" *ngIf=\"vital.ptVitalRr!==null && vital.ptVitalRr!==''\">\r\n                          <ion-row>\r\n                            <ion-col sizeSm=5>\r\n                              <label class=\"c-list__label\">{{label_obj.VITAL_RESPIRATORY_RATE}}:</label>\r\n                            </ion-col>\r\n                            <ion-col sizeSm=7>\r\n                              <label class=\"c-list__content\">{{vital.ptVitalRr}}BPM</label>                                            \r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </div>\r\n                        <div class=\"c-list__item\" *ngIf=\"vital.ptVitalSpo!==null && vital.ptVitalSpo!==''\">\r\n                          <ion-row>\r\n                            <ion-col sizeSm=5>\r\n                              <label class=\"c-list__label\">{{label_obj.VITAL_SPO1}}<sub>{{label_obj.VITAL_SPO2}}</sub>:</label>\r\n                            </ion-col>\r\n                            <ion-col sizeSm=7>\r\n                              <label class=\"c-list__content\">{{vital.ptVitalSpo}}%</label>                                            \r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </div>\r\n                        <div class=\"c-list__item\" *ngIf=\"userdetail.ptAllergies!==null\">\r\n                          <ion-row>\r\n                            <ion-col sizeSm=5>\r\n                              <label class=\"c-list__label\">{{label_obj.VITAL_ALLERGIES}}:</label>\r\n                            </ion-col>\r\n                            <ion-col sizeSm=7>\r\n                              <label class=\"c-list__content\">{{userdetail.ptAllergies}}</label>                                            \r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </div>\r\n                        <div class=\"c-list__item\" *ngIf=\"vital.ptVitalNotes!==null && vital.ptVitalNotes!==''\">\r\n                          <ion-row>\r\n                            <ion-col>\r\n                              <label class=\"c-list__label\">{{label_obj.VITAL_NOTES}}:</label>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col>\r\n                              <label class=\"c-list__content\">{{vital.ptVitalNotes}}</label>                                            \r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </div>\r\n                      </div>        \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-card>\r\n            </ng-container>\r\n            <ion-card>\r\n              <div class=\"c-accordion\">\r\n                <div class=\"c-accordion__item\" *ngIf=\"prescription.medicine.length > 0\">\r\n                  <h3 class=\"c-accordion__link\" (click)=\"tabs_toggle(0)\">{{ label_obj.PHARMACY_PRESCRIPTION }}\r\n                    <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-up\" *ngIf=\"tabs[0].title.isExpanded\"></ion-icon>\r\n                    <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-down\" *ngIf=\"!tabs[0].title.isExpanded\"></ion-icon>\r\n                  </h3>\r\n                  <div class=\"c-accordion__content\" *ngIf=\"tabs[0].isExpanded\">\r\n                    <div class=\"prescription_new\">\r\n                      <div class=\"prescription_new__rmblk\" *ngIf=\"cordovaStatus\">\r\n                        <p (click)=\"remainderModal(prescription.medicine)\">Medicine Remainder <ion-icon name=\"alarm\" class=\"remainder_icon\"></ion-icon></p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"prescription_new\" *ngFor=\"let m of prescription.medicine\">\r\n                      <div class=\"prescription_new__row \">                                                \r\n                        <div class=\"prescription_new__title-block\">\r\n                          <h3 *ngIf=\"(m.route == 'tab' || m.route == 'cap') && m.medicineDosage!=null && m.medicineDosage!=''\">{{ m.medicineName }} ({{m.route}})- {{ m.medicineDosage }}</h3>\r\n                          <h3 *ngIf=\"(m.route == 'tab' || m.route == 'cap') && (m.medicineDosage==null || m.medicineDosage=='')\">{{ m.medicineName }} ({{m.route}})</h3>\r\n                          <h3 *ngIf=\"m.route != 'tab' && m.route != 'cap' && m.route == 'syr'\" >{{ m.medicineName }} ({{m.route}}) {{ m.medicineQty }}</h3>\r\n                          <h3 *ngIf=\"m.route != 'tab' && m.route != 'cap' && m.route != 'syr' && m.medicineDosage!=null && m.medicineDosage!=''\" >{{ m.medicineName }} - {{ m.medicineDosage }}</h3>\r\n                          <h3 *ngIf=\"m.route != 'tab' && m.route != 'cap' && m.route != 'syr' && (m.medicineDosage==null || m.medicineDosage=='')\">{{ m.medicineName }} </h3>\r\n                          <p *ngIf=\"m.foodType == 'Before'\">To be taken before meals</p>\r\n                          <p *ngIf=\"m.foodType == 'After'\">To be taken after meals</p>\r\n                          <p *ngIf=\"m.foodType != 'After' && m.foodType != 'Before'\">{{m.foodType}}</p>\r\n                        </div>\r\n                        <div class=\"prescription_new__content\">\r\n                          <div [ngClass]=\"tabletBlk(m)\">\r\n                            <h3>Route</h3>\r\n                            <img src=\"{{halftablet}}\" *ngIf=\"m.medicineQty == 'Half'\">\r\n                            <img src=\"{{fulltablet}}\" *ngIf=\"m.medicineQty == 'One'\">                                                            \r\n                            <div class=\"tablets2\" *ngIf=\"m.medicineQty == 'Two'\">\r\n                              <img src=\"{{fulltablet}}\">\r\n                              <img src=\"{{fulltablet}}\">                                                            \r\n                            </div>\r\n                            <div class=\"tablets3\" *ngIf=\"m.medicineQty == 'Three'\">\r\n                              <img src=\"{{fulltablet}}\">\r\n                              <img src=\"{{fulltablet}}\">                                                            \r\n                              <img src=\"{{fulltablet}}\">                                                            \r\n                            </div>\r\n                            <p *ngIf=\"m.route == 'tab'\">{{m.medicineQty}} Tablet(s)</p>\r\n                            <p *ngIf=\"m.route == 'cap'\">{{m.medicineQty}} Capsule(s)</p>\r\n                            <p *ngIf=\"m.route != 'tab' && m.route != 'cap'\" >{{ m.medicineQty }} Tablet(s)</p>                                                            \r\n                          </div>\r\n                          <div [ngClass]=\"frequencyBlk(m)\">\r\n                            <h3>Frequency</h3>\r\n                            <ul *ngIf=\"m.morning == '1' || m.afternoon == '1' || m.evening == '1' || m.night == '1'\">\r\n                              <li *ngIf=\"m.morning == '1'\"><ion-icon name=\"checkmark-sharp\"></ion-icon>Morning</li>\r\n                              <li *ngIf=\"m.afternoon == '1'\"><ion-icon name=\"checkmark-sharp\"></ion-icon>Afternoon</li>\r\n                              <li *ngIf=\"m.evening == '1'\"><ion-icon name=\"checkmark-sharp\"></ion-icon>Evening</li>\r\n                              <li *ngIf=\"m.night == '1'\"><ion-icon name=\"checkmark-sharp\"></ion-icon>Night</li>\r\n                            </ul>\r\n                            <p *ngIf=\"m.frequencyOther == '1'\" style=\"text-transform: capitalize;\">{{m.otherText}}</p>\r\n                            <p *ngIf=\"m.frequencyOther == '0'\">\r\n                              {{convertInt(m.morning) + convertInt(m.afternoon) + convertInt(m.evening) + convertInt(m.night)}} Time(s)/Day\r\n                            </p>\r\n                          </div>\r\n                          <div [ngClass]=\"daysBlk(m)\" >\r\n                            <h3>Day(s)</h3>\r\n                            <ion-icon class=\"prescription_new__icon\" name=\"calendar-sharp\">\r\n                            </ion-icon>\r\n                            <p>{{ m.days }} day(s)</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>                                            \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"prescription.dxModel.length > 0\">\r\n                  <ng-container *ngFor=\"let mlab of prescription.dxModel | filter : 'Lab' first as isFirst\">\r\n                    <div class=\"c-accordion__item\" *ngIf=\"mlab.ptDxType === 'Lab' \">\r\n                      <div *ngIf=\"isFirst\">\r\n                        <h3 class=\"c-accordion__link\" (click)=\"tabs_toggle(1)\">{{ label_obj.LAB_INVESTIGATIONS }}\r\n                          <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-up\" *ngIf=\"tabs[1].title.isExpanded\"></ion-icon>\r\n                          <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-down\" *ngIf=\"!tabs[1].title.isExpanded\"></ion-icon>\r\n                        </h3>\r\n                        <div class=\"c-accordion__content\" *ngIf=\"tabs[1].isExpanded\">                                            \r\n                          <ng-container *ngFor=\"let lab of prescription.dxModel | filter : 'Lab'\">\r\n                            <ion-card-content>\r\n                              <h3 ion-text color=\"primary\">{{lab.testName}}</h3>\r\n                              <p>{{lab.testDescription}}</p>\r\n                              <div class=\"c-form__field\" *ngIf=\"lab.status=='Uploaded'\">\r\n                                <button type=\"button\" class=\"c-button c-button--primary c-button--fullwidth\" (click)=\"viewReport(lab.documentID)\">View Report</button>\r\n                              </div>\r\n                              <div class=\"c-form__field\" *ngIf=\"lab.status!='Uploaded'\">\r\n                                <button type=\"button\" class=\"c-button c-button--primary c-button--fullwidth\">Report Not Uploaded</button>\r\n                              </div>\r\n                            </ion-card-content>        \r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                  <ng-container *ngFor=\"let rlab of prescription.dxModel | filter : 'Radiology' first as isrFirst\">\r\n                    <div class=\"c-accordion__item\" *ngIf=\"rlab.ptDxType === 'Radiology'\">\r\n                      <div *ngIf=\"isrFirst\">\r\n                        <h3 class=\"c-accordion__link\" (click)=\"tabs_toggle(2)\">{{ label_obj.RADIOLOGY_INVESTIGATIONS }}\r\n                          <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-up\" *ngIf=\"tabs[2].title.isExpanded\"></ion-icon>\r\n                          <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-down\" *ngIf=\"!tabs[2].title.isExpanded\"></ion-icon>\r\n                        </h3>\r\n                        <div class=\"c-accordion__content\" *ngIf=\"tabs[2].isExpanded\">\r\n                          <ng-container *ngFor=\"let lab of prescription.dxModel | filter : 'Radiology'\">\r\n                            <ion-card-content>\r\n                              <h3 ion-text color=\"primary\">{{lab.testName}}</h3>\r\n                              <p>{{lab.testDescription}}</p>\r\n                              <div class=\"c-form__field\" *ngIf=\"lab.status=='Uploaded'\">\r\n                                <button type=\"button\" class=\"c-button c-button--primary c-button--fullwidth\" (click)=\"viewReport(lab.documentID)\">View Report</button>\r\n                              </div>\r\n                              <div class=\"c-form__field\" *ngIf=\"lab.status!='Uploaded'\">\r\n                                <button type=\"button\" class=\"c-button c-button--primary c-button--fullwidth\">Report Not Uploaded</button>\r\n                              </div>\r\n                            </ion-card-content>\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                  <ng-container *ngFor=\"let clab of prescription.dxModel | filter : 'Cardiology' first as iscFirst\">\r\n                    <div class=\"c-accordion__item\" *ngIf=\"clab.ptDxType === 'Cardiology'\">\r\n                      <div *ngIf=\"iscFirst\">\r\n                        <h3 class=\"c-accordion__link\" (click)=\"tabs_toggle(3)\">{{ label_obj.CARDILOGY_INVESTIGATIONS }}\r\n                          <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-up\" *ngIf=\"tabs[3].title.isExpanded\"></ion-icon>\r\n                          <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-down\" *ngIf=\"!tabs[3].title.isExpanded\"></ion-icon>\r\n                        </h3>\r\n                        <div class=\"c-accordion__content\" *ngIf=\"tabs[3].isExpanded\">\r\n                          <ng-container *ngFor=\"let lab of prescription.dxModel | filter : 'Cardiology'\">\r\n                            <ion-card-content>\r\n                              <h3 ion-text color=\"primary\">{{lab.testName}}</h3>\r\n                              <p>{{lab.testDescription}}</p>\r\n                              <div class=\"c-form__field\" *ngIf=\"lab.status=='Uploaded'\">\r\n                                <button type=\"button\" class=\"c-button c-button--primary c-button--fullwidth\" (click)=\"viewReport(lab.documentID)\">View Report</button>\r\n                              </div>\r\n                              <div class=\"c-form__field\" *ngIf=\"lab.status!='Uploaded'\">\r\n                                <button type=\"button\" class=\"c-button c-button--primary c-button--fullwidth\">Report Not Uploaded</button>\r\n                              </div>\r\n                            </ion-card-content>\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                  <ng-container *ngFor=\"let olab of prescription.dxModel | filter : 'Other' first as isoFirst\">\r\n                    <div class=\"c-accordion__item\" *ngIf=\"olab.ptDxType === 'Other'\">\r\n                      <div *ngIf=\"isoFirst\">\r\n                        <h3 class=\"c-accordion__link\" (click)=\"tabs_toggle(4)\">{{ label_obj.OTHER_INVESTIGATIONS }}\r\n                          <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-up\" *ngIf=\"tabs[4].title.isExpanded\"></ion-icon>\r\n                          <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-down\" *ngIf=\"!tabs[4].title.isExpanded\"></ion-icon>\r\n                        </h3>\r\n                        <div class=\"c-accordion__content\" *ngIf=\"tabs[4].isExpanded\">\r\n                          <ng-container *ngFor=\"let lab of prescription.dxModel | filter : 'Other'\">\r\n                            <ion-card-content>                                                \r\n                              <h3 ion-text color=\"primary\">{{lab.testName}}</h3>\r\n                              <p>{{lab.testDescription}}</p>\r\n                              <div class=\"c-form__field\" *ngIf=\"lab.status=='Uploaded'\">\r\n                                <button type=\"button\" class=\"c-button c-button--primary c-button--fullwidth\" (click)=\"viewReport(lab.documentID)\">View Report</button>\r\n                              </div>\r\n                              <div class=\"c-form__field\" *ngIf=\"lab.status!='Uploaded'\">\r\n                                <button type=\"button\" class=\"c-button c-button--primary c-button--fullwidth\">Report Not Uploaded</button>\r\n                              </div>\r\n                            </ion-card-content>\r\n                          </ng-container> \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-card style=\"width: 100%;\">\r\n            <ion-card-content *ngIf=\"(prescription.dxProvisionalDiagnosis!=null && prescription.dxProvisionalDiagnosis!='')||(prescription.dxObservation!=null && prescription.dxObservation!='')||\r\n              (prescription.dxFinalDiagnosis!=null && prescription.dxFinalDiagnosis!= '')||(prescription.dxComplaint!=null && prescription.dxComplaint!='')||\r\n              (prescription.dxTreatmentPlan!=null && prescription.dxTreatmentPlan!='')||(prescription.dxDietAdvise!=null && prescription.dxDietAdvise!='')||\r\n              (prescription.dxNotes!=null && prescription.dxNotes!='')||(prescription.dxFollowup!=null && prescription.dxFollowup!='')\">\r\n              <ion-row class=\"pres-Content\" *ngIf=\"(prescription.dxProvisionalDiagnosis!=null && prescription.dxProvisionalDiagnosis!='')||(prescription.dxFinalDiagnosis!=null && prescription.dxFinalDiagnosis!= '')\">\r\n                <ion-col *ngIf=\"prescription.dxProvisionalDiagnosis!=null && prescription.dxProvisionalDiagnosis!=''\">\r\n                  <h4 class=\"subtitle\" margin-bottom>{{label_obj.PROVISIONAL_DIAGNOSIS}}</h4>\r\n                  <p class=\"text_content1\">{{prescription.dxProvisionalDiagnosis}}</p>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"prescription.dxFinalDiagnosis!=null && prescription.dxFinalDiagnosis!= ''\">\r\n                  <h4 class=\"subtitle\" margin-bottom>{{label_obj.FINAL_DIAGNOSIS}}</h4>\r\n                  <p class=\"text_content1\">{{prescription.dxFinalDiagnosis}}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"pres-Content\" *ngIf=\"prescription.dxComplaint!=null && prescription.dxComplaint!=''\">\r\n                <ion-col>\r\n                  <h4 class=\"subtitle\" margin-bottom>{{label_obj.COMPLAINT}}</h4>\r\n                  <p class=\"text_content\">{{prescription.dxComplaint}}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"pres-Content\" *ngIf=\"prescription.dxObservation!=null && prescription.dxObservation!=''\">\r\n                <ion-col>\r\n                  <h4 class=\"subtitle\" margin-bottom>{{label_obj.OBSERVATION}}</h4>\r\n                  <p class=\"text_content\">{{prescription.dxObservation}}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"pres-Content\" *ngIf=\"prescription.dxTreatmentPlan!=null && prescription.dxTreatmentPlan!=''\">\r\n                <ion-col>\r\n                  <h4 class=\"subtitle\" margin-bottom>{{label_obj.TREATMENT_PLAN}}</h4>\r\n                  <p class=\"text_content\">{{prescription.dxTreatmentPlan}}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"pres-Content\" *ngIf=\"prescription.dxDietAdvise!=null && prescription.dxDietAdvise!=''\">\r\n                <ion-col>\r\n                  <h4 class=\"subtitle\" margin-bottom>{{label_obj.DIET_ADVICE}}</h4>\r\n                  <p class=\"text_content\">{{prescription.dxDietAdvise}}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"pres-Content\" *ngIf=\"prescription.dxNotes!=null && prescription.dxNotes!=''\">\r\n                <ion-col>\r\n                  <h4 class=\"subtitle\" margin-bottom>{{label_obj.NOTES}}</h4>\r\n                  <p class=\"text_content\">{{prescription.dxNotes}}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"pres-Content\" *ngIf=\"prescription.dxFollowup!=null && prescription.dxFollowup!=''\">\r\n                <ion-col>\r\n                  <h4 class=\"subtitle\" margin-bottom>{{label_obj.FOLLOWUP}}</h4>\r\n                  <p class=\"text_content\">{{prescription.dxFollowup}}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col col-12 col-lg-4>\r\n        <ion-card *ngIf=\"vital!==null && !webPlatform\">\r\n          <div class=\"c-accordion\">\r\n            <div class=\"c-accordion__item\">\r\n              <h3 class=\"c-accordion__link c-list__title text-primary\" (click)=\"vital_tabs_toggle(0)\"><ion-icon name=\"person\" class=\"c-list__title-icon\" style=\"padding-right: 10px;\"></ion-icon>{{ label_obj.VITAL_TITLE }}\r\n                <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-up\" *ngIf=\"tabs1[0].title.isExpanded\"></ion-icon>\r\n                <ion-icon class=\"c-accordion__link-icon\" name=\"arrow-down\" *ngIf=\"!tabs1[0].title.isExpanded\"></ion-icon>\r\n              </h3>\r\n              <div class=\"c-accordion__content1\" *ngIf=\"tabs1[0].isExpanded\">\r\n                <div class=\"c-list\" >\r\n                  <div class=\"c-list__item\" *ngIf=\"vital.ptVitalHeight!==null && vital.ptVitalHeight!==''\">\r\n                    <ion-row>\r\n                      <ion-col sizeSm=5>\r\n                        <label class=\"c-list__label\">{{label_obj.VITAL_HEIGHT}}:</label>\r\n                      </ion-col>\r\n                      <ion-col sizeSm=7>\r\n                        <label class=\"c-list__content\">{{vital.ptVitalHeight}}cm</label>                                                                                            \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                  <div class=\"c-list__item\" *ngIf=\"vital.ptVitalWeight!==null && vital.ptVitalWeight!==''\">\r\n                    <ion-row>\r\n                      <ion-col sizeSm=5>\r\n                        <label class=\"c-list__label\">{{label_obj.VITAL_WEIGHT}}:</label>\r\n                      </ion-col>\r\n                      <ion-col sizeSm=7>\r\n                        <label class=\"c-list__content\">{{vital.ptVitalWeight}}kg</label>                                            \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                  <div class=\"c-list__item\" *ngIf=\"vital.ptVitalTemp!==null && vital.ptVitalTemp!==''\">\r\n                    <ion-row>\r\n                      <ion-col sizeSm=5>\r\n                        <label class=\"c-list__label\">{{label_obj.VITAL_TEMPERATURE}}:</label>\r\n                      </ion-col>\r\n                      <ion-col sizeSm=7>\r\n                        <label class=\"c-list__content\">{{vital.ptVitalTemp}}<sup>o</sup>{{vital.ptVitalTempType}}</label>                                            \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                  <div class=\"c-list__item\" *ngIf=\"vital.ptVitalBp!==null && vital.ptVitalBp!==''\">\r\n                    <ion-row>\r\n                      <ion-col sizeSm=5>\r\n                        <label class=\"c-list__label\">{{label_obj.VITAL_BLOOD_PRESSURE}}:</label>\r\n                      </ion-col>\r\n                      <ion-col sizeSm=7>\r\n                        <label class=\"c-list__content\">{{vital.ptVitalBp}}mmHg</label>                                            \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                  <div class=\"c-list__item\" *ngIf=\"vital.ptVitalPr!==null && vital.ptVitalPr!==''\">\r\n                    <ion-row>\r\n                      <ion-col sizeSm=5>\r\n                        <label class=\"c-list__label\">{{label_obj.VITAL_PULSE_RATE}}:</label>\r\n                      </ion-col>\r\n                      <ion-col sizeSm=7>\r\n                        <label class=\"c-list__content\">{{vital.ptVitalPr}}BPM</label>                                            \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                  <div class=\"c-list__item\" *ngIf=\"vital.ptVitalRr!==null && vital.ptVitalRr!==''\">\r\n                    <ion-row>\r\n                      <ion-col sizeSm=5>\r\n                        <label class=\"c-list__label\">{{label_obj.VITAL_RESPIRATORY_RATE}}:</label>\r\n                      </ion-col>\r\n                      <ion-col sizeSm=7>\r\n                        <label class=\"c-list__content\">{{vital.ptVitalRr}}BPM</label>                                            \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                  <div class=\"c-list__item\" *ngIf=\"vital.ptVitalSpo!==null && vital.ptVitalSpo!==''\">\r\n                    <ion-row>\r\n                      <ion-col sizeSm=5>\r\n                        <label class=\"c-list__label\">{{label_obj.VITAL_SPO1}}<sub>{{label_obj.VITAL_SPO2}}</sub>:</label>\r\n                      </ion-col>\r\n                      <ion-col sizeSm=7>\r\n                        <label class=\"c-list__content\">{{vital.ptVitalSpo}}%</label>                                            \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                  <div class=\"c-list__item\" *ngIf=\"userdetail.ptAllergies!==null\">\r\n                    <ion-row>\r\n                      <ion-col sizeSm=5>\r\n                        <label class=\"c-list__label\">{{label_obj.VITAL_ALLERGIES}}:</label>\r\n                      </ion-col>\r\n                      <ion-col sizeSm=7>\r\n                        <label class=\"c-list__content\">{{userdetail.ptAllergies}}</label>                                            \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                  <div class=\"c-list__item\" *ngIf=\"vital.ptVitalNotes!==null && vital.ptVitalNotes!==''\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <label class=\"c-list__label\">{{label_obj.VITAL_NOTES}}:</label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <label class=\"c-list__content\">{{vital.ptVitalNotes}}</label>                                            \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                </div>        \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-card>    \r\n        <ion-card>\r\n          <ion-card-header style=\"border-bottom: 1px solid #e5e5e5; text-align: center;\">\r\n            <img *ngIf=\"networkPictureStatus\" src=\"{{circlePicture}}\" height=\"64\" style=\" margin: 0 auto;width: auto;\">  \r\n            <p style=\"color: #0059b3; font-size: 20px; margin-top: 10px;\">{{circleName}}</p>                        \r\n          </ion-card-header>\r\n          <!-- <ion-card-content style=\"border-bottom: 1px solid #e5e5e5; padding: 13px 16px;\">\r\n            <h2 ion-text style=\"color: #0059b3;\" margin-bottom>{{circleDetail.circleName}}</h2>                        \r\n            <p ion-text>{{hospitalDetails.addressLine1}}{{hospitalDetails.addressLine2}},{{hospitalDetails.city}},{{hospitalDetails.state}},{{hospitalDetails.country}}</p>\r\n            <p ion-text margin-top style=\"color: #00b395; margin-bottom: 8px;\"><ion-icon name=\"call\"></ion-icon>&nbsp;&nbsp;{{hospitalDetails.hosMobile}}</p>\r\n          </ion-card-content> -->\r\n          <ion-card-content style=\"border-bottom: 1px solid #e5e5e5;\">\r\n            <h4 ion-text color=\"text-light\" class=\"subtitle\" margin-bottom>{{label_obj.DOCTOR_TITLE}}</h4>\r\n            <h3 ion-text no-margin style=\"color: #0059b3; font-size: 16px; text-transform: capitalize;\">{{doctor.docFirstName}} {{doctor.docLastName}}</h3>\r\n            <p ion-text class=\"subtitle\" style=\"color: #222222; font-size: 14px;\">{{doctor.docQualification}}, {{doctor.docSpecialization}}.</p>\r\n          </ion-card-content>\r\n          <ion-card-content style=\"border-bottom: 1px solid #e5e5e5;\">\r\n            <h4 ion-text color=\"text-light\" class=\"subtitle\" margin-bottom>{{label_obj.PATIENT_TITLE}}</h4>                        \r\n            <h3 ion-text style=\"color: #0059b3; font-size: 15px; text-transform: capitalize;\" no-margin>Mr. {{userdetail.ptFirstName}} {{userdetail.ptLastName}}</h3>\r\n            <!-- <p ion-text class=\"subtitle\">UID: #{{userdetail.userID}}</p> -->\r\n            <p ion-text class=\"subtitle\" style=\"color: #222222;\">{{userdetail.ptGender}} / {{age}} Years</p>\r\n          </ion-card-content>\r\n          <ion-card-content>\r\n            <h4 ion-text color=\"text-light\" class=\"subtitle\" margin-bottom>{{label_obj.CONSULTED_DATE}}</h4>\r\n            <h3 ion-text no-margin style=\"color: #0059b3;\">{{ prescription.dxDateTime | date: 'MMMM dd, yyyy' }}</h3>\r\n            <p ion-text class=\"subtitle\" *ngIf=\"prescription.updatedDateTime!=null && prescription.updatedDateTime!=undefined\">{{label_obj.LAST_UPDATED_DATE}}:  {{ prescription.updatedDateTime | date: 'MMMM dd, yyyy' }}</p>\r\n          </ion-card-content>\r\n        </ion-card>        \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pt-eprescription/pt-eprescription-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pt-eprescription/pt-eprescription-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: PtEPrescriptionPageRoutingModule */

  /***/
  function srcAppPtEprescriptionPtEprescriptionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PtEPrescriptionPageRoutingModule", function () {
      return PtEPrescriptionPageRoutingModule;
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


    var _pt_eprescription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pt-eprescription.page */
    "./src/app/pt-eprescription/pt-eprescription.page.ts");

    var routes = [{
      path: '',
      component: _pt_eprescription_page__WEBPACK_IMPORTED_MODULE_3__["PtEPrescriptionPage"]
    }];

    var PtEPrescriptionPageRoutingModule = function PtEPrescriptionPageRoutingModule() {
      _classCallCheck(this, PtEPrescriptionPageRoutingModule);
    };

    PtEPrescriptionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PtEPrescriptionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pt-eprescription/pt-eprescription.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pt-eprescription/pt-eprescription.module.ts ***!
    \*************************************************************/

  /*! exports provided: PtEPrescriptionPageModule */

  /***/
  function srcAppPtEprescriptionPtEprescriptionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PtEPrescriptionPageModule", function () {
      return PtEPrescriptionPageModule;
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


    var _pt_eprescription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pt-eprescription-routing.module */
    "./src/app/pt-eprescription/pt-eprescription-routing.module.ts");
    /* harmony import */


    var _pt_eprescription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pt-eprescription.page */
    "./src/app/pt-eprescription/pt-eprescription.page.ts");

    var PtEPrescriptionPageModule = function PtEPrescriptionPageModule() {
      _classCallCheck(this, PtEPrescriptionPageModule);
    };

    PtEPrescriptionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pt_eprescription_routing_module__WEBPACK_IMPORTED_MODULE_5__["PtEPrescriptionPageRoutingModule"]],
      declarations: [_pt_eprescription_page__WEBPACK_IMPORTED_MODULE_6__["PtEPrescriptionPage"]]
    })], PtEPrescriptionPageModule);
    /***/
  },

  /***/
  "./src/app/pt-eprescription/pt-eprescription.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pt-eprescription/pt-eprescription.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPtEprescriptionPtEprescriptionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content p {\n  margin-top: 10px;\n}\n\n.grid-heading {\n  margin-bottom: 30px;\n  position: relative;\n  padding-top: 48px;\n  padding-bottom: 48px;\n  background-size: cover;\n  background-position: center;\n}\n\n.grid-heading:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \" \";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 89, 179, 0.6);\n}\n\n.grid-heading h2 {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\n.grid-heading p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.card h2 {\n  margin-bottom: 15px;\n}\n\n.card h3 {\n  margin-bottom: 15px;\n}\n\n.card p.subtitle {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\n.card p {\n  margin-bottom: 10px;\n}\n\n.card p:last-child {\n  margin-bottom: 0;\n}\n\n.card .link {\n  display: inline-block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.card .c-button {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.card .link:last-child {\n  margin-bottom: 0;\n}\n\n.card hr {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.card hr.spaced {\n  margin-bottom: 0.5rem;\n}\n\n.c-accordion__link {\n  position: relative;\n  padding: 15px;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  margin: 0 !important;\n  cursor: pointer;\n}\n\n.c-accordion__content {\n  padding: 30px;\n}\n\n.c-accordion__content.is-active {\n  display: block;\n}\n\n.c-accordion__content1 {\n  padding: 0px;\n}\n\n.c-accordion__content1.is-active {\n  display: block;\n}\n\n.c-accordion__link-icon {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n}\n\n.c-list {\n  margin-bottom: 20px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n}\n\n.c-list__title {\n  font-size: 16px;\n  font-weight: 400;\n  font-family: \"Muli-Regular\", sans-serif;\n  color: #0059b3;\n}\n\n.subtitle {\n  margin: 5px 0 13px;\n  font-size: 15.4px;\n  color: #919191;\n}\n\n.text_content {\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #222;\n}\n\n.text_content1 {\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #0059b3;\n}\n\n.page__title {\n  font-family: \"Muli-Regular\", sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  color: #fff;\n}\n\n.prescription_new__rmblk {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.prescription_new__rmblk p {\n  color: #ffffff;\n  padding: 7px 40px 7px 10px;\n  border-radius: 10px 50px 50px 10px;\n  position: relative;\n  margin-top: 0;\n}\n\n.prescription_new__title-block {\n  padding: 15px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.prescription_new__title-block h3 {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n\n.prescription_new__title-block p {\n  font-size: 12px;\n}\n\n.prescription_new__content {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: flex;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.prescription_new__column {\n  padding-left: 10px;\n  padding-right: 10px;\n  width: 33.33%;\n  border-right: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.prescription_new__column img {\n  margin: 0 auto 20px auto;\n  display: block;\n  height: 40px;\n  width: auto;\n}\n\n.prescription_new__column h3 {\n  color: #919191;\n  font-size: 14px;\n  text-align: center;\n}\n\n.prescription_new__column ul {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 0;\n  width: 60px;\n  height: 60px;\n  padding-left: 0;\n  list-style: none;\n}\n\n.prescription_new__column ul li {\n  padding-left: 12px;\n  position: relative;\n  margin-bottom: 0.25rem;\n  font-size: 10px;\n}\n\n.prescription_new__column ul li ion-icon {\n  font-size: 12px;\n  color: var(--ion-color-swsecondary);\n  position: absolute;\n  top: -24px;\n  left: 0;\n}\n\n.prescription_new__column p {\n  font-size: 12px;\n  text-align: center;\n}\n\n.prescription_new__column ion-icon {\n  display: block;\n  font-size: 30px;\n  height: 60px;\n  line-height: 38px;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.prescription_new__columnhalf {\n  padding-left: 10px;\n  padding-right: 10px;\n  width: 50%;\n  border-right: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.prescription_new__columnhalf img {\n  margin: 0 auto 20px auto;\n  display: block;\n  height: 40px;\n  width: auto;\n}\n\n.prescription_new__columnhalf h3 {\n  color: #919191;\n  font-size: 14px;\n  text-align: center;\n}\n\n.prescription_new__columnhalf ul {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 0;\n  width: 60px;\n  height: 60px;\n  padding-left: 0;\n  list-style: none;\n}\n\n.prescription_new__columnhalf ul li {\n  padding-left: 12px;\n  position: relative;\n  margin-bottom: 0.25rem;\n  font-size: 10px;\n}\n\n.prescription_new__columnhalf ul li ion-icon {\n  font-size: 12px;\n  color: var(--ion-color-swsecondary);\n  position: absolute;\n  top: -24px;\n  left: 0;\n}\n\n.prescription_new__columnhalf p {\n  font-size: 12px;\n  text-align: center;\n}\n\n.prescription_new__columnhalf ion-icon {\n  display: block;\n  font-size: 30px;\n  height: 60px;\n  line-height: 38px;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.prescription_new__columnfull {\n  padding-left: 10px;\n  padding-right: 10px;\n  width: 100%;\n  border-right: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.prescription_new__columnfull img {\n  margin: 0 auto 20px auto;\n  display: block;\n  height: 40px;\n  width: auto;\n}\n\n.prescription_new__columnfull h3 {\n  color: #919191;\n  font-size: 14px;\n  text-align: center;\n}\n\n.prescription_new__columnfull ul {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 0;\n  width: 60px;\n  height: 60px;\n  padding-left: 0;\n  list-style: none;\n}\n\n.prescription_new__columnfull ul li {\n  padding-left: 12px;\n  position: relative;\n  margin-bottom: 0.25rem;\n  font-size: 10px;\n}\n\n.prescription_new__columnfull ul li ion-icon {\n  font-size: 12px;\n  color: var(--ion-color-swsecondary);\n  position: absolute;\n  top: -24px;\n  left: 0;\n}\n\n.prescription_new__columnfull p {\n  font-size: 12px;\n  text-align: center;\n}\n\n.prescription_new__columnfull ion-icon {\n  display: block;\n  font-size: 30px;\n  height: 60px;\n  line-height: 38px;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.prescription_new__icon {\n  display: block;\n  font-size: 30px;\n  height: 60px;\n  line-height: 38px;\n  text-align: center;\n}\n\n.blknone {\n  display: none;\n}\n\n.pres-Content {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.prescription__row {\n  margin-bottom: 20px;\n  display: flex;\n  flex-grow: 1;\n  flex-wrap: wrap;\n}\n\n.prescription__row:last-child {\n  margin-bottom: 0;\n}\n\n.prescription__col {\n  padding: 15px;\n  width: 33.33%;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n}\n\n.prescription__col p {\n  line-height: 1.5;\n  font-size: 14px;\n  color: #222;\n}\n\n.md_top {\n  margin-top: 10px;\n}\n\n.button-print {\n  width: 10%;\n  right: 10%;\n  position: absolute;\n  color: #fff;\n  cursor: pointer;\n  font-size: 30px;\n}\n\n.button-download {\n  width: 10%;\n  position: absolute;\n  right: 17%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 30px;\n}\n\n.button-tamil {\n  padding: 0 7px 0 7px;\n  bottom: -10px;\n  position: absolute;\n  display: flex;\n  /* right: 20%; */\n  top: 58px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 30px;\n  background-color: #fff;\n  border-radius: 25px;\n  height: 35px;\n  left: 15px;\n}\n\n.button-tamil ion-label {\n  border: none;\n  font-size: 14px;\n  color: #222;\n  margin-top: 10px;\n}\n\n.label-md {\n  margin: 6px 0 0 0;\n}\n\n.remainder_icon {\n  background-color: #ffffff;\n  font-size: 22px;\n  padding-top: 4px;\n  height: 28px;\n  width: 28px;\n  top: 4px;\n  right: 5px;\n  border-radius: 50%;\n  text-align: center;\n  position: absolute;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08);\n}\n\nion-card {\n  display: block;\n  /*overflow: hidden;*/\n}\n\n.tablets2 {\n  width: 75px;\n  margin: 0 auto;\n}\n\n.tablets2 img {\n  width: 30px;\n  height: auto;\n  margin-right: 5px;\n  display: inline;\n}\n\n.tablets3 {\n  width: 115px;\n  margin: 0 auto;\n}\n\n.tablets3 img {\n  width: 30px;\n  height: auto;\n  margin-right: 5px;\n  display: inline;\n}\n\n.item-md.item-block .item-inner {\n  border: none;\n}\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .prescription__col {\n    width: 100%;\n  }\n\n  .button-print {\n    top: 108px;\n  }\n  .button-download {\n    top: 108px;\n    right: 20%;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1024px) {\n  .button-print {\n    top: 70px;\n  }\n  .button-download {\n    top: 70px;\n    right: 20%;\n  }\n}\n\n@media (max-width: 575px) {\n  .grid-heading h2 {\n    font-size: 22px;\n  }\n\n  .prescription__col {\n    width: 100%;\n  }\n\n  .button-print {\n    top: 108px;\n  }\n  .button-download {\n    top: 108px;\n    right: 25%;\n  }\n\n  .prescription_new__column {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .prescription_new__rmblk {\n    display: flex;\n    justify-content: flex-start;\n  }\n}\n\n@media (max-width: 480px) {\n  .tablets2 {\n    width: 65px;\n    margin: 0 auto;\n  }\n  .tablets2 img {\n    width: 25px;\n    height: auto;\n    margin-right: 5px;\n    display: inline;\n  }\n\n  .tablets3 {\n    width: 75px;\n    margin: 0 auto;\n  }\n  .tablets3 img {\n    width: 20px;\n    height: auto;\n    margin-right: 5px;\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHQtZXByZXNjcmlwdGlvbi9GOlxcc3dhc3RoXFxzd2FzdGh2aXJ0dWFscGF0aWVudC9zcmNcXGFwcFxccHQtZXByZXNjcmlwdGlvblxccHQtZXByZXNjcmlwdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3B0LWVwcmVzY3JpcHRpb24vcHQtZXByZXNjcmlwdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFDSSxnQkFBQTtBQ0pSOztBRE9BO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxzQkFBQTtFQUNBLDJCQUFBO0FDTEo7O0FETUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FDSlI7O0FET0E7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7QUNMSjs7QURPQTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRE9BO0VBQ0ksbUJBQUE7QUNKSjs7QURPQTtFQUNJLG1CQUFBO0FDSko7O0FEVUE7RUFFSSxhQUFBO0VBQ0EscUJBQUE7QUNSSjs7QURVQTtFQUNJLG1CQUFBO0FDUEo7O0FEU0E7RUFDSSxnQkFBQTtBQ05KOztBRFFBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FET0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDSko7O0FETUE7RUFDSSxnQkFBQTtBQ0hKOztBREtBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDRko7O0FESUE7RUFDSSxxQkFBQTtBQ0RKOztBREtJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBRElJO0VBQ0ksYUFBQTtBQ0ZSOztBREdRO0VBQ0ksY0FBQTtBQ0RaOztBRElJO0VBQ0ksWUFBQTtBQ0ZSOztBREdRO0VBQ0ksY0FBQTtBQ0RaOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDRlI7O0FETUE7RUFDSSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7QUNISjs7QURJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQXBITztFQXFIUCxjQUFBO0FDRlI7O0FETUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSEo7O0FETUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUNJLHVDQTlJVztFQStJWCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDSEo7O0FET0k7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUNKUjs7QURLUTtFQUVJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDSlo7O0FET0k7RUFDSSxhQUFBO0VBQ0EsNENBQUE7QUNMUjs7QURNUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0paOztBRE9RO0VBQ0ksZUFBQTtBQ0xaOztBRFFJO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtBQ05SOztBRFFJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtBQ05SOztBRE9RO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNMWjs7QURPUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNMWjs7QURPUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTFo7O0FETVk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDSmhCOztBREtnQjtFQUNJLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7QUNIcEI7O0FET1E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNMWjs7QURPUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTFo7O0FEUUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FDTlI7O0FET1E7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0xaOztBRE9RO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0xaOztBRE9RO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMWjs7QURNWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNKaEI7O0FES2dCO0VBQ0ksZUFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtBQ0hwQjs7QURPUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0xaOztBRE9RO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNMWjs7QURRSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QUNOUjs7QURPUTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTFo7O0FET1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTFo7O0FET1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xaOztBRE1ZO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0poQjs7QURLZ0I7RUFDSSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0FDSHBCOztBRE9RO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDTFo7O0FET1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0xaOztBRFFJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05SOztBRFVBO0VBQ0ksYUFBQTtBQ1BKOztBRFVBO0VBQ0ksNENBQUE7QUNQSjs7QURXSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUlI7O0FEU1E7RUFDSSxnQkFBQTtBQ1BaOztBRFVJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDUlI7O0FEU1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDUFo7O0FEWUE7RUFDSSxnQkFBQTtBQ1RKOztBRGFJO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1pSOztBRGNJO0VBQ0ksVUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ2RSOztBRGdCSTtFQUVJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ2ZSOztBRGdCUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDZFo7O0FEbUJBO0VBQ0ksaUJBQUE7QUNoQko7O0FEb0JBO0VBQ0kseUJBQUE7RUFHQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNuQko7O0FEc0JBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FDbkJGOztBRHNCQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDbkJKOztBRG9CSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDbEJSOztBRHFCQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDbEJKOztBRG1CSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDakJSOztBRHFCQTtFQUdJLFlBQUE7QUNwQko7O0FEdUJBO0VBRVE7SUFDSSxXQUFBO0VDckJWOztFRHlCTTtJQUNJLFVBQUE7RUN0QlY7RUR3Qk07SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQ3RCVjtBQUNGOztBRDBCQTtFQUVRO0lBQ0ksU0FBQTtFQ3pCVjtFRDJCTTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VDekJWO0FBQ0Y7O0FENkJBO0VBQ0k7SUFDSSxlQUFBO0VDM0JOOztFRDhCTTtJQUNJLFdBQUE7RUMzQlY7O0VEK0JNO0lBQ0ksVUFBQTtFQzVCVjtFRDhCTTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VDNUJWOztFRGdDTTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUM3QlY7RUQrQk07SUFDSSxhQUFBO0lBQ0EsMkJBQUE7RUM3QlY7QUFDRjs7QURtQ0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxjQUFBO0VDakNOO0VEa0NNO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUNoQ1Y7O0VEbUNFO0lBQ0ksV0FBQTtJQUNBLGNBQUE7RUNoQ047RURpQ007SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQy9CVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHQtZXByZXNjcmlwdGlvbi9wdC1lcHJlc2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LWhlYWRpbmc6ICdNdWxpLVJlZ3VsYXInLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1ib2R5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbi5jb250ZW50IHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKCRjb2xvcnMsIHByaW1hcnktYmcpO1xyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxufVxyXG4uZ3JpZC1oZWFkaW5nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogNDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0OHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogY29sb3IoJGNvbG9ycywgcHJpbWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA4OSwgMTc5LCAwLjYpO1xyXG4gICAgfVxyXG59XHJcbi5ncmlkLWhlYWRpbmcgaDIge1xyXG4gICAgLy8gQGV4dGVuZCAubWQtaGVhZGluZy0zO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLmdyaWQtaGVhZGluZyBwIHtcclxuICAgIC8vIEBleHRlbmQgLm1kLWJvZHktMTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5jYXJkIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAvLyBAZXh0ZW5kIC5tZC1oZWFkaW5nLTQ7XHJcbn1cclxuLmNhcmQgaDMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC8vIEBleHRlbmQgLm1kLWhlYWRpbmctNTtcclxufVxyXG4uY2FyZCBoNC5zdWJ0aXRsZSB7XHJcbiAgICAvLyBAZXh0ZW5kIC5tZC1oZWFkaW5nLTY7XHJcbn1cclxuLmNhcmQgcC5zdWJ0aXRsZSB7XHJcbiAgICAvLyBAZXh0ZW5kIC5tZC1ib2R5LTE7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcbi5jYXJkIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uY2FyZCBwOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uY2FyZCAubGluayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uY2FyZCAuYy1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmNhcmQgLmxpbms6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5jYXJkIGhyIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5jYXJkIGhyLnNwYWNlZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jLWFjY29yZGlvbiB7XHJcbiAgICAmX19saW5rIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgJi5pcy1hY3RpdmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19jb250ZW50MSB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICYuaXMtYWN0aXZlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fbGluay1pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYy1saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtaGVhZGluZztcclxuICAgICAgICBjb2xvcjogIzAwNTliMztcclxuICAgIH1cclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICAgIG1hcmdpbjogNXB4IDAgMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMTUuNHB4O1xyXG4gICAgY29sb3I6ICM5MTkxOTE7XHJcbn1cclxuXHJcbi50ZXh0X2NvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuLnRleHRfY29udGVudDEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzAwNTliMztcclxufVxyXG5cclxuLnBhZ2VfX3RpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1oZWFkaW5nO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucHJlc2NyaXB0aW9uX25ldyB7XHJcbiAgICAmX19ybWJsayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKCRjb2xvcnMsIHByaW1hcnkpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzo3cHggNDBweCA3cHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4IDUwcHggNTBweCAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX190aXRsZS1ibG9jayB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAvLyBjb2xvcjogY29sb3IoJGNvbG9ycywgcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIH1cclxuICAgICZfX2NvbHVtbiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHggYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgY29sb3I6ICM5MTkxOTE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zd3NlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19jb2x1bW5oYWxmIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweCBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBjb2xvcjogIzkxOTE5MTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN3c2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgJl9fY29sdW1uZnVsbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3dzZWNvbmRhcnkgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ibGtub25le1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnByZXMtQ29udGVudHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG59XHJcblxyXG4ucHJlc2NyaXB0aW9uIHtcclxuICAgICZfX3JvdyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19jb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm1kX3RvcHtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLmJ1dHRvbnsgXHJcbiAgICAmLXByaW50e1xyXG4gICAgICAgIHdpZHRoOjEwJTtcclxuICAgICAgICByaWdodDogMTAlO1xyXG4gICAgICAgIC8vIGJvdHRvbTotMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gdG9wOjczcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgICYtZG93bmxvYWR7XHJcbiAgICAgICAgd2lkdGg6MTAlO1xyXG4gICAgICAgIC8vIGJvdHRvbTotMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDE3JTtcclxuICAgICAgICAvLyB0b3A6NzNweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgJi10YW1pbHtcclxuICAgICAgICAvLyB3aWR0aDogMTMlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgN3B4IDAgN3B4O1xyXG4gICAgICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLyogcmlnaHQ6IDIwJTsgKi9cclxuICAgICAgICB0b3A6IDU4cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lOyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sYWJlbC1tZCB7XHJcbiAgICBtYXJnaW46IDZweCAwIDAgMDtcclxufVxyXG5cclxuXHJcbi5yZW1haW5kZXJfaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbiAgICAvLyBjb2xvcjogY29sb3IoJGNvbG9ycywgZGFuZ2VyKTtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHBhZGRpbmctdG9wOjRweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgdG9wOjRweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLypvdmVyZmxvdzogaGlkZGVuOyovXHJcbn1cclxuXHJcbi50YWJsZXRzMntcclxuICAgIHdpZHRoOjc1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDozMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lO1xyXG4gICAgfVxyXG59XHJcbi50YWJsZXRzM3tcclxuICAgIHdpZHRoOjExNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgICAgICBkaXNwbGF5OmlubGluZTtcclxuICAgIH1cclxufVxyXG5cclxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5wcmVzY3JpcHRpb24ge1xyXG4gICAgICAgICZfX2NvbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idXR0b257IFxyXG4gICAgICAgICYtcHJpbnR7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdG9wOjEwOHB4OyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1kb3dubG9hZHtcclxuICAgICAgICAgICAgdG9wOjEwOHB4O1xyXG4gICAgICAgICAgICByaWdodDoyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5idXR0b257IFxyXG4gICAgICAgICYtcHJpbnR7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdG9wOjcwcHg7ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWRvd25sb2Fke1xyXG4gICAgICAgICAgICB0b3A6NzBweDtcclxuICAgICAgICAgICAgcmlnaHQ6MjAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAuZ3JpZC1oZWFkaW5nIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICAucHJlc2NyaXB0aW9uIHtcclxuICAgICAgICAmX19jb2wge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnV0dG9ueyBcclxuICAgICAgICAmLXByaW50eyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRvcDoxMDhweDsgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtZG93bmxvYWR7XHJcbiAgICAgICAgICAgIHRvcDoxMDhweDtcclxuICAgICAgICAgICAgcmlnaHQ6MjUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcmVzY3JpcHRpb25fbmV3IHtcclxuICAgICAgICAmX19jb2x1bW4ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6OHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcm1ibGsge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnRhYmxldHMye1xyXG4gICAgICAgIHdpZHRoOjY1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDoyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWJsZXRzM3tcclxuICAgICAgICB3aWR0aDo3NXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmNvbnRlbnQgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5ncmlkLWhlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiA0OHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDhweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmdyaWQtaGVhZGluZzpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDg5LCAxNzksIDAuNik7XG59XG5cbi5ncmlkLWhlYWRpbmcgaDIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZ3JpZC1oZWFkaW5nIHAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2FyZCBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jYXJkIGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNhcmQgcC5zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmNhcmQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJkIHA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jYXJkIC5saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY2FyZCAuYy1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY2FyZCAubGluazpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNhcmQgaHIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2FyZCBoci5zcGFjZWQge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5jLWFjY29yZGlvbl9fbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmMtYWNjb3JkaW9uX19jb250ZW50IHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5jLWFjY29yZGlvbl9fY29udGVudC5pcy1hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jLWFjY29yZGlvbl9fY29udGVudDEge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uYy1hY2NvcmRpb25fX2NvbnRlbnQxLmlzLWFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmMtYWNjb3JkaW9uX19saW5rLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMTVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uYy1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5jLWxpc3RfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogXCJNdWxpLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDU5YjM7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIG1hcmdpbjogNXB4IDAgMTNweDtcbiAgZm9udC1zaXplOiAxNS40cHg7XG4gIGNvbG9yOiAjOTE5MTkxO1xufVxuXG4udGV4dF9jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzIyMjtcbn1cblxuLnRleHRfY29udGVudDEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMDA1OWIzO1xufVxuXG4ucGFnZV9fdGl0bGUge1xuICBmb250LWZhbWlseTogXCJNdWxpLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnByZXNjcmlwdGlvbl9uZXdfX3JtYmxrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5wcmVzY3JpcHRpb25fbmV3X19ybWJsayBwIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDdweCA0MHB4IDdweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDUwcHggNTBweCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucHJlc2NyaXB0aW9uX25ld19fdGl0bGUtYmxvY2sge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbi5wcmVzY3JpcHRpb25fbmV3X190aXRsZS1ibG9jayBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnByZXNjcmlwdGlvbl9uZXdfX3RpdGxlLWJsb2NrIHAge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJlc2NyaXB0aW9uX25ld19fY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG4ucHJlc2NyaXB0aW9uX25ld19fY29sdW1uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzMuMzMlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuLnByZXNjcmlwdGlvbl9uZXdfX2NvbHVtbiBpbWcge1xuICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLnByZXNjcmlwdGlvbl9uZXdfX2NvbHVtbiBoMyB7XG4gIGNvbG9yOiAjOTE5MTkxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcmVzY3JpcHRpb25fbmV3X19jb2x1bW4gdWwge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucHJlc2NyaXB0aW9uX25ld19fY29sdW1uIHVsIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5wcmVzY3JpcHRpb25fbmV3X19jb2x1bW4gdWwgbGkgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3dzZWNvbmRhcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI0cHg7XG4gIGxlZnQ6IDA7XG59XG4ucHJlc2NyaXB0aW9uX25ld19fY29sdW1uIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcmVzY3JpcHRpb25fbmV3X19jb2x1bW4gaW9uLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnByZXNjcmlwdGlvbl9uZXdfX2NvbHVtbmhhbGYge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG4ucHJlc2NyaXB0aW9uX25ld19fY29sdW1uaGFsZiBpbWcge1xuICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLnByZXNjcmlwdGlvbl9uZXdfX2NvbHVtbmhhbGYgaDMge1xuICBjb2xvcjogIzkxOTE5MTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJlc2NyaXB0aW9uX25ld19fY29sdW1uaGFsZiB1bCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5wcmVzY3JpcHRpb25fbmV3X19jb2x1bW5oYWxmIHVsIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5wcmVzY3JpcHRpb25fbmV3X19jb2x1bW5oYWxmIHVsIGxpIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN3c2Vjb25kYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yNHB4O1xuICBsZWZ0OiAwO1xufVxuLnByZXNjcmlwdGlvbl9uZXdfX2NvbHVtbmhhbGYgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByZXNjcmlwdGlvbl9uZXdfX2NvbHVtbmhhbGYgaW9uLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnByZXNjcmlwdGlvbl9uZXdfX2NvbHVtbmZ1bGwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuLnByZXNjcmlwdGlvbl9uZXdfX2NvbHVtbmZ1bGwgaW1nIHtcbiAgbWFyZ2luOiAwIGF1dG8gMjBweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogYXV0bztcbn1cbi5wcmVzY3JpcHRpb25fbmV3X19jb2x1bW5mdWxsIGgzIHtcbiAgY29sb3I6ICM5MTkxOTE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByZXNjcmlwdGlvbl9uZXdfX2NvbHVtbmZ1bGwgdWwge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucHJlc2NyaXB0aW9uX25ld19fY29sdW1uZnVsbCB1bCBsaSB7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ucHJlc2NyaXB0aW9uX25ld19fY29sdW1uZnVsbCB1bCBsaSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zd3NlY29uZGFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjRweDtcbiAgbGVmdDogMDtcbn1cbi5wcmVzY3JpcHRpb25fbmV3X19jb2x1bW5mdWxsIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcmVzY3JpcHRpb25fbmV3X19jb2x1bW5mdWxsIGlvbi1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5wcmVzY3JpcHRpb25fbmV3X19pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmxrbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcmVzLUNvbnRlbnQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLnByZXNjcmlwdGlvbl9fcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucHJlc2NyaXB0aW9uX19yb3c6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucHJlc2NyaXB0aW9uX19jb2wge1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogMzMuMzMlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByZXNjcmlwdGlvbl9fY29sIHAge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4ubWRfdG9wIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ1dHRvbi1wcmludCB7XG4gIHdpZHRoOiAxMCU7XG4gIHJpZ2h0OiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmJ1dHRvbi1kb3dubG9hZCB7XG4gIHdpZHRoOiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3JTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmJ1dHRvbi10YW1pbCB7XG4gIHBhZGRpbmc6IDAgN3B4IDAgN3B4O1xuICBib3R0b206IC0xMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIHJpZ2h0OiAyMCU7ICovXG4gIHRvcDogNThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxlZnQ6IDE1cHg7XG59XG4uYnV0dG9uLXRhbWlsIGlvbi1sYWJlbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxhYmVsLW1kIHtcbiAgbWFyZ2luOiA2cHggMCAwIDA7XG59XG5cbi5yZW1haW5kZXJfaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG5pb24tY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cbn1cblxuLnRhYmxldHMyIHtcbiAgd2lkdGg6IDc1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRhYmxldHMyIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi50YWJsZXRzMyB7XG4gIHdpZHRoOiAxMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udGFibGV0czMgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnByZXNjcmlwdGlvbl9fY29sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5idXR0b24tcHJpbnQge1xuICAgIHRvcDogMTA4cHg7XG4gIH1cbiAgLmJ1dHRvbi1kb3dubG9hZCB7XG4gICAgdG9wOiAxMDhweDtcbiAgICByaWdodDogMjAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJ1dHRvbi1wcmludCB7XG4gICAgdG9wOiA3MHB4O1xuICB9XG4gIC5idXR0b24tZG93bmxvYWQge1xuICAgIHRvcDogNzBweDtcbiAgICByaWdodDogMjAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmdyaWQtaGVhZGluZyBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgLnByZXNjcmlwdGlvbl9fY29sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5idXR0b24tcHJpbnQge1xuICAgIHRvcDogMTA4cHg7XG4gIH1cbiAgLmJ1dHRvbi1kb3dubG9hZCB7XG4gICAgdG9wOiAxMDhweDtcbiAgICByaWdodDogMjUlO1xuICB9XG5cbiAgLnByZXNjcmlwdGlvbl9uZXdfX2NvbHVtbiB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICB9XG4gIC5wcmVzY3JpcHRpb25fbmV3X19ybWJsayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudGFibGV0czIge1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC50YWJsZXRzMiBpbWcge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cblxuICAudGFibGV0czMge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC50YWJsZXRzMyBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pt-eprescription/pt-eprescription.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pt-eprescription/pt-eprescription.page.ts ***!
    \***********************************************************/

  /*! exports provided: PtEPrescriptionPage */

  /***/
  function srcAppPtEprescriptionPtEprescriptionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PtEPrescriptionPage", function () {
      return PtEPrescriptionPage;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_prescriptionTranslation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/prescriptionTranslation */
    "./src/prescriptionTranslation.ts");
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
    "./src/app/services/login-auth.service.ts"); // import { AndroidPermissions } from '@ionic-native/android-permissions';
    // import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
    // import pdfMake from 'pdfmake/build/pdfmake';
    // import pdfFonts from 'pdfmake/build/vfs_fonts';
    // pdfMake.vfs = pdfFonts.pdfMake.vfs;


    var PtEPrescriptionPage = /*#__PURE__*/function () {
      function PtEPrescriptionPage(authService, datepipe, file, fileOpener, plt, loadingCtrl, modalCtrl, router, route, swStorage, loginAuth) {
        _classCallCheck(this, PtEPrescriptionPage);

        /* this.background = authService.site_url+'bg-img-8.jpg';
        this.halftablet=authService.site_url+'icon-tablet-half.png';
        this.fulltablet=authService.site_url+'icon-tablet-full.png';
        this.label_obj=PRESCRIPTION_TRANSLATION.ENGLISH; */
        this.authService = authService;
        this.datepipe = datepipe;
        this.file = file;
        this.fileOpener = fileOpener;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.route = route;
        this.swStorage = swStorage;
        this.loginAuth = loginAuth;
        this.pdfObj = null;
        this.tabs = [];
        this.tabs1 = [];
        this.background = '';
        this.vital = {};
        this.webPlatform = false;
        this.tamil = false;
        this.qrData = "Swasth";
        this.createdCode = null;
        this.hospitalDetails = {};
        this.cordovaStatus = false;
        this.networkPictureStatus = false; // if (this.plt.is('android') || this.plt.is('mobileweb')) {
        //   this.webPlatform = true;
        //   this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(
        //     result => console.log('Has permission?', result.hasPermission),
        //     err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
        //   );
        //   this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
        //   this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
        //     result => console.log('Has permission?', result.hasPermission),
        //     err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
        //   );
        //   this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
        // }
        // else {
        //   this.webPlatform = false;
        // }

        /* if(plt.is('cordova')) {
          this.cordovaStatus = true;
        }
        this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
            this.prescription = this.router.getCurrentNavigation().extras.state.dxid;
            this.userdetail = this.router.getCurrentNavigation().extras.state.userdetail;
            this.doctor = this.router.getCurrentNavigation().extras.state.docdetail;
            this.getHospitalDetails(this.prescription.tenantID);
            this.getAge(this.userdetail.ptDob);
            this.vital = null;
            this.getDxVital(this.prescription.ptDxID);
            this.getQrCode(this.prescription.ptDxID);
            // this.myPrescriptions(this.dxid);
          }
        });
        this.tabs = [
          {
            title: 'Pharmacy Prescription',
            content: ``,
            isExpanded: true
          },
          {
            title: 'Lab Investigations',
            isExpanded: true
          },
          {
            title: 'Radiology Investigations',
            isExpanded: true
          },
          {
            title: 'Cardiology Investigations',
            isExpanded: true
          },
          {
            title: 'Other Investigations/procedures',
            isExpanded: true
          }
        ]
              this.tabs1 = [
          {
            title: 'Vitals',
            isExpanded: true
          }
        ] */
      }

      _createClass(PtEPrescriptionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.background = this.authService.site_url + 'bg-img-8.jpg';
          this.halftablet = this.authService.site_url + 'icon-tablet-half.png';
          this.fulltablet = this.authService.site_url + 'icon-tablet-full.png';
          this.label_obj = src_prescriptionTranslation__WEBPACK_IMPORTED_MODULE_7__["PRESCRIPTION_TRANSLATION"].ENGLISH;

          if (this.plt.is('cordova')) {
            this.cordovaStatus = true;
          }

          if (this.route.snapshot.data['dxData']) {
            var data = this.route.snapshot.data['dxData'];
            this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(function (ptData) {
              _this.prescription = data.dxid;
              console.log("Prescription Data==>", _this.prescription, data, ptData);
              _this.userdetail = ptData;
              _this.doctor = data.docdetail;

              _this.getHospitalDetails(_this.prescription.tenantID);

              _this.getAge(_this.userdetail.ptDob);

              _this.vital = null;

              _this.getDxVital(_this.prescription.ptDxID);

              _this.getQrCode(_this.prescription.ptDxID); // this.myPrescriptions(this.dxid);

            });
          }

          this.tabs = [{
            title: 'Pharmacy Prescription',
            content: "",
            isExpanded: true
          }, {
            title: 'Lab Investigations',
            isExpanded: true
          }, {
            title: 'Radiology Investigations',
            isExpanded: true
          }, {
            title: 'Cardiology Investigations',
            isExpanded: true
          }, {
            title: 'Other Investigations/procedures',
            isExpanded: true
          }];
          this.tabs1 = [{
            title: 'Vitals',
            isExpanded: true
          }];
        }
      }, {
        key: "tabs_toggle",
        value: function tabs_toggle(index) {
          for (var tab in this.tabs) {
            if (this.tabs[tab] != this.tabs[index]) {
              this.tabs[tab].isExpanded = false;
            }
          }

          this.tabs[index].isExpanded = !this.tabs[index].isExpanded;
        }
      }, {
        key: "vital_tabs_toggle",
        value: function vital_tabs_toggle(index) {
          for (var tab in this.tabs1) {
            if (this.tabs1[tab] != this.tabs1[index]) {
              this.tabs1[tab].isExpanded = false;
            }
          }

          this.tabs1[index].isExpanded = !this.tabs1[index].isExpanded;
        }
      }, {
        key: "getDxVital",
        value: function getDxVital(vitalid) {
          var _this2 = this;

          this.authService.prescriptionVital(vitalid).subscribe(function (data) {
            console.log(data);

            if (data !== null) {
              _this2.vital = data;
              console.log(_this2.vital);
            } else {
              _this2.vital = null;
            }
          });
        }
      }, {
        key: "getAge",
        value: function getAge(dob) {
          var latest_date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
          var dobdate = new Date(dob);
          var dobdate1 = new Date(latest_date);
          var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds 

          var timeDiff = Math.round(Math.abs((dobdate1.getTime() - dobdate.getTime()) / oneDay)); //var diffDays = Math.round(Math.abs((dobdate.getTime() - current_date.getTime())/(oneDay)));

          var a = timeDiff / 365;
          this.age = Math.floor(a);
          console.log("age----" + this.age);
          /*console.log("Age=="+(timeDiff/365));*/
        }
      }, {
        key: "tabletBlk",
        value: function tabletBlk(m) {
          var tabblk = "blknone";
          console.log("daya....", m.days);

          if (m.days == undefined) {
            m.days = "";
          }

          if ((m.medicineQty == 'Half' || m.medicineQty == 'One' || m.medicineQty == 'Two' || m.medicineQty == 'Three') && (m.otherText != '' || m.morning == '1' || m.afternoon == '1' || m.evening == '1' || m.night == '1') && m.days != '') {
            tabblk = 'prescription_new__column';
          } else if ((m.medicineQty == 'Half' || m.medicineQty == 'One' || m.medicineQty == 'Two' || m.medicineQty == 'Three') && (m.otherText != '' || m.morning == '1' || m.afternoon == '1' || m.evening == '1' || m.night == '1')) {
            tabblk = 'prescription_new__columnhalf';
          } else if ((m.medicineQty == 'Half' || m.medicineQty == 'One' || m.medicineQty == 'Two' || m.medicineQty == 'Three') && m.days != '') {
            tabblk = 'prescription_new__columnhalf';
          } else if (m.medicineQty == 'Half' || m.medicineQty == 'One' || m.medicineQty == 'Two' || m.medicineQty == 'Three') {
            tabblk = 'prescription_new__columnfull';
          }

          console.log("tablet blk.......", tabblk);
          return tabblk;
        }
      }, {
        key: "frequencyBlk",
        value: function frequencyBlk(m) {
          var freblk = "blknone";

          if (m.days == undefined) {
            m.days = "";
          }

          if ((m.medicineQty == 'Half' || m.medicineQty == 'One' || m.medicineQty == 'Two' || m.medicineQty == 'Three') && (m.otherText != '' || m.morning == '1' || m.afternoon == '1' || m.evening == '1' || m.night == '1') && m.days != '') {
            freblk = 'prescription_new__column';
          } else if ((m.medicineQty == 'Half' || m.medicineQty == 'One' || m.medicineQty == 'Two' || m.medicineQty == 'Three') && (m.otherText != '' || m.morning == '1' || m.afternoon == '1' || m.evening == '1' || m.night == '1')) {
            freblk = 'prescription_new__columnhalf';
          } else if ((m.otherText != '' || m.morning == '1' || m.afternoon == '1' || m.evening == '1' || m.night == '1') && m.days != '') {
            freblk = 'prescription_new__columnhalf';
          } else if (m.otherText != '' || m.morning == '1' || m.afternoon == '1' || m.evening == '1' || m.night == '1') {
            freblk = 'prescription_new__columnfull';
          }

          console.log("frequency blk.......", freblk);
          return freblk;
        }
      }, {
        key: "daysBlk",
        value: function daysBlk(m) {
          var dayblk = "blknone";

          if (m.days == undefined) {
            m.days = "";
          }

          if ((m.medicineQty == 'Half' || m.medicineQty == 'One' || m.medicineQty == 'Two' || m.medicineQty == 'Three') && (m.otherText != '' || m.morning == '1' || m.afternoon == '1' || m.evening == '1' || m.night == '1') && m.days != '') {
            dayblk = 'prescription_new__column';
          } else if ((m.medicineQty == 'Half' || m.medicineQty == 'One' || m.medicineQty == 'Two' || m.medicineQty == 'Three') && m.days != '') {
            dayblk = 'prescription_new__columnhalf';
          } else if ((m.otherText != '' || m.morning == '1' || m.afternoon == '1' || m.evening == '1' || m.night == '1') && m.days != '') {
            dayblk = 'prescription_new__columnhalf';
          } else if (m.days != '') {
            dayblk = 'prescription_new__columnfull';
          }

          console.log("days blk.......", dayblk);
          return dayblk;
        }
      }, {
        key: "convertInt",
        value: function convertInt(val) {
          return parseInt(val);
        }
      }, {
        key: "contentRow",
        value: function contentRow() {
          var row = {};

          if (this.vital !== null) {
            row = {
              text: 'Vitals',
              style: 'header'
            };
          }

          return row;
        }
      }, {
        key: "showVitals",
        value: function showVitals() {
          var row = [];
          var row1 = [];
          var vitals = {};

          if (this.vital !== null) {
            var vitalData = [];
            row.push({
              text: 'Name',
              style: 'tableHeader',
              alignment: 'left'
            }); // vitalData.push(row);
            //row=[];

            row.push({
              text: 'Value',
              style: 'tableHeader',
              alignment: 'center'
            });
            vitalData.push(row);
            row = [];

            if (this.vital.ptVitalHeight !== null && this.vital.ptVitalHeight !== '') {
              row.push({
                text: 'Height',
                style: 'medicine',
                alignment: 'left'
              }); // vitalData.push(row);
              //row=[];

              row.push({
                text: this.vital.ptVitalHeight + ' cm',
                style: 'medicine',
                alignment: 'center'
              });
              vitalData.push(row);
              row = [];
            }

            if (this.vital.ptVitalWeight !== null && this.vital.ptVitalWeight !== '') {
              row.push({
                text: 'Weight',
                style: 'medicine',
                alignment: 'left'
              }); // vitalData.push(row);
              //row=[];

              row.push({
                text: this.vital.ptVitalWeight + ' kg',
                style: 'medicine',
                alignment: 'center'
              });
              vitalData.push(row);
              row = [];
            }

            if (this.vital.ptVitalTemp !== null && this.vital.ptVitalTemp !== '') {
              row.push({
                text: 'Temprature',
                style: 'medicine',
                alignment: 'left'
              }); // vitalData.push(row);
              //row=[];

              row.push({
                text: this.vital.ptVitalTemp + ' o' + this.vital.ptVitalTempType,
                style: 'medicine',
                alignment: 'center'
              });
              vitalData.push(row);
              row = [];
            }

            if (this.vital.ptVitalBp !== null && this.vital.ptVitalBp !== '') {
              row.push({
                text: 'Blood Pressure(BP)',
                style: 'medicine',
                alignment: 'left'
              }); // vitalData.push(row);
              //row=[];

              row.push({
                text: this.vital.ptVitalBp + ' mmHg',
                style: 'medicine',
                alignment: 'center'
              });
              vitalData.push(row);
              row = [];
            }

            if (this.vital.ptVitalPr !== null && this.vital.ptVitalPr !== '') {
              row.push({
                text: 'Pulse Rate(PR)',
                style: 'medicine',
                alignment: 'left'
              }); // vitalData.push(row);
              //row=[];

              row.push({
                text: this.vital.ptVitalPr + ' BPM',
                style: 'medicine',
                alignment: 'center'
              });
              vitalData.push(row);
              row = [];
            }

            if (this.vital.ptVitalRr !== null && this.vital.ptVitalRr !== '') {
              row.push({
                text: 'Respiratory Rate(RR)',
                style: 'medicine',
                alignment: 'left'
              }); // vitalData.push(row);
              //row=[];

              row.push({
                text: this.vital.ptVitalRr + ' BPM',
                style: 'medicine',
                alignment: 'center'
              });
              vitalData.push(row);
              row = [];
            }

            if (this.vital.ptVitalSpo !== null && this.vital.ptVitalSpo !== '') {
              row.push({
                text: 'SpO2',
                style: 'medicine',
                alignment: 'left'
              }); // vitalData.push(row);
              //row=[];

              row.push({
                text: this.vital.ptVitalSpo + ' BPM',
                style: 'medicine',
                alignment: 'center'
              });
              vitalData.push(row);
              row = [];
            }

            if (this.userdetail.ptAllergies !== null && this.userdetail.ptAllergies !== '') {
              row.push({
                text: 'Allergies',
                style: 'medicine',
                alignment: 'left'
              }); // vitalData.push(row);
              //row=[];

              row.push({
                text: this.userdetail.ptAllergies,
                style: 'medicine',
                alignment: 'center'
              });
              vitalData.push(row);
              row = [];
            }

            console.log(JSON.stringify(vitalData));
            vitals = {
              style: 'tablevital',
              table: {
                widths: [100, 100],
                body: vitalData
              }
            };
            console.log("Vitals Structure==>", JSON.stringify(vitals));
            return vitals;
          } else {
            return "";
          } // vitalData.push([{text: 'Height', style: 'medicine', alignment: 'left'}, {text: '66'+'cm',style: 'medicine', alignment: 'center'}]);
          // vitalData.push(row1);
          //console.log(JSON.stringify(vitalData));

        }
      }, {
        key: "showMedicine",
        value: function showMedicine() {
          var medicineRow = [];
          var medicineData = [];
          var medicineheader = {};
          var i = 1;

          if (this.prescription.medicine.length > 0) {
            medicineData.push([{
              text: 'No',
              style: 'tableHeader',
              alignment: 'center',
              rowSpan: 2
            }, {
              text: 'Medicine',
              style: 'tableHeader',
              alignment: 'center',
              rowSpan: 2
            }, {
              text: 'Strength / Dose (mg/ml)',
              style: 'tableHeader',
              alignment: 'center',
              rowSpan: 2
            }, {
              text: 'Route',
              style: 'tableHeader',
              alignment: 'center',
              rowSpan: 2
            }, {
              text: 'Frequency',
              style: 'tableHeader',
              alignment: 'center',
              colSpan: 4
            }, {}, {}, {}, {
              text: 'Duration',
              style: 'tableHeader',
              alignment: 'center',
              colSpan: 2
            }, {}, {
              text: 'Days',
              style: 'tableHeader',
              alignment: 'center',
              rowSpan: 2
            }]);
            medicineData.push([{
              text: '',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: '',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: '',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: '',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'M',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'A',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'E',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'N',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'After Food',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'Before Food',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: '',
              style: 'tableHeader',
              alignment: 'center'
            }]);

            var _iterator = _createForOfIteratorHelper(this.prescription.medicine),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var m = _step.value;
                medicineRow.push({
                  text: i,
                  style: 'medicine',
                  alignment: 'center'
                });
                medicineRow.push({
                  text: m.medicineName,
                  style: 'medicine',
                  alignment: 'center'
                });
                medicineRow.push({
                  text: m.medicineDosage,
                  style: 'medicine',
                  alignment: 'center'
                });
                medicineRow.push({
                  text: m.route,
                  style: 'medicine',
                  alignment: 'center'
                });
                medicineRow.push({
                  text: m.morning,
                  style: 'medicine',
                  alignment: 'center'
                });
                medicineRow.push({
                  text: m.afternoon,
                  style: 'medicine',
                  alignment: 'center'
                });
                medicineRow.push({
                  text: m.evening,
                  style: 'medicine',
                  alignment: 'center'
                });
                medicineRow.push({
                  text: m.night,
                  style: 'medicine',
                  alignment: 'center'
                });

                if (m.foodType == 'Before') {
                  medicineRow.push({
                    text: 'No',
                    style: 'medicine',
                    alignment: 'center'
                  });
                  medicineRow.push({
                    text: 'Yes',
                    style: 'medicine',
                    alignment: 'center'
                  });
                } else if (m.foodType == 'After') {
                  medicineRow.push({
                    text: 'Yes',
                    style: 'medicine',
                    alignment: 'center'
                  });
                  medicineRow.push({
                    text: 'No',
                    style: 'medicine',
                    alignment: 'center'
                  });
                } else {
                  medicineRow.push({
                    text: m.foodType,
                    style: 'medicine',
                    alignment: 'center',
                    colSpan: 2
                  }, {});
                }

                medicineRow.push({
                  text: m.days,
                  style: 'medicine',
                  alignment: 'center'
                });
                medicineData.push(medicineRow);
                medicineRow = [];
                i++;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            medicineheader = [{
              text: 'Pharmacy Prescription',
              style: 'header'
            }, {
              style: 'tableExample',
              table: {
                widths: [20, 125, 50, 40, 15, 15, 15, 15, 40, 40, 40],
                headerRows: 2,
                body: medicineData
              }
            }];
          }

          console.log(JSON.stringify(medicineRow));
          return medicineheader;
        }
      }, {
        key: "showLab",
        value: function showLab() {
          var labRow = [];
          var labData = [];
          var labHeader = {};
          var i = 1;

          if (this.prescription.dxModel.length > 0) {
            labData.push([{
              text: 'No',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'Name',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'Description',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'Type',
              style: 'tableHeader',
              alignment: 'center'
            }]);

            var _iterator2 = _createForOfIteratorHelper(this.prescription.dxModel),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var l = _step2.value;
                labRow.push({
                  text: i,
                  style: 'medicine',
                  alignment: 'center'
                });
                labRow.push({
                  text: l.testName,
                  style: 'medicine',
                  alignment: 'center'
                });
                labRow.push({
                  text: l.testDescription,
                  style: 'medicine',
                  alignment: 'center'
                });
                labRow.push({
                  text: l.ptDxType,
                  style: 'medicine',
                  alignment: 'center'
                });
                labData.push(labRow);
                labRow = [];
                i++;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            labHeader = {
              style: 'tableLab',
              table: {
                widths: [20, 160, 100, 200],
                body: labData
              }
            };
          }

          return labHeader;
        }
      }, {
        key: "showTreatmentplan",
        value: function showTreatmentplan() {
          var treatmentRow = [];

          if (this.prescription.dxTreatmentPlan != '' && this.prescription.dxTreatmentPlan != null) {
            treatmentRow.push({
              style: 'labtitle',
              alignment: 'left',
              columns: [{
                text: 'Treatmetn Plan'
              }]
            });
            treatmentRow.push({
              style: 'medicine',
              alignment: 'justify',
              columns: [{
                text: this.prescription.dxTreatmentPlan
              }]
            });
          }

          return treatmentRow;
        }
      }, {
        key: "showDiet",
        value: function showDiet() {
          var dietRow = [];

          if (this.prescription.dxDietAdvise != '' && this.prescription.dxDietAdvise != null) {
            dietRow.push({
              style: 'labtitle',
              alignment: 'left',
              columns: [{
                text: 'Diet Advice / Type'
              }]
            });
            dietRow.push({
              style: 'medicine',
              alignment: 'justify',
              columns: [{
                text: this.prescription.dxDietAdvise
              }]
            });
          }

          return dietRow;
        }
      }, {
        key: "showNotes",
        value: function showNotes() {
          var notesRow = [];

          if (this.prescription.dxNotes != '' && this.prescription.dxNotes != null) {
            notesRow.push({
              style: 'labtitle',
              alignment: 'left',
              columns: [{
                text: 'Notes'
              }]
            });
            notesRow.push({
              style: 'medicine',
              alignment: 'justify',
              columns: [{
                text: this.prescription.dxNotes
              }]
            });
          }

          return notesRow;
        }
      }, {
        key: "showPastHistory",
        value: function showPastHistory() {
          var pastHistoryRow = [];

          if (this.prescription.pastHistory != '' && this.prescription.pastHistory != null) {
            pastHistoryRow.push({
              style: 'labtitle',
              alignment: 'left',
              columns: [{
                text: 'Past History'
              }]
            });
            pastHistoryRow.push({
              style: 'medicine',
              alignment: 'justify',
              columns: [{
                text: this.prescription.pastHistory
              }]
            });
          }

          return pastHistoryRow;
        }
      }, {
        key: "showComplaint",
        value: function showComplaint() {
          var complaintRow = [];

          if (this.prescription.dxComplaint != '' && this.prescription.dxComplaint != null) {
            complaintRow.push({
              style: 'labtitle',
              alignment: 'left',
              columns: [{
                text: 'Complaint'
              }]
            });
            complaintRow.push({
              style: 'medicine',
              alignment: 'justify',
              columns: [{
                text: this.prescription.dxComplaint
              }]
            });
          }

          return complaintRow;
        }
      }, {
        key: "showObservation",
        value: function showObservation() {
          var observationRow = [];

          if (this.prescription.dxObservation != '' && this.prescription.dxObservation != null) {
            observationRow.push({
              style: 'labtitle',
              alignment: 'left',
              columns: [{
                text: 'Observation'
              }]
            });
            observationRow.push({
              style: 'medicine',
              alignment: 'justify',
              columns: [{
                text: this.prescription.dxObservation
              }]
            });
          }

          return observationRow;
        }
      }, {
        key: "showFollowup",
        value: function showFollowup() {
          var followupRow = [];

          if (this.prescription.dxFollowup != '' && this.prescription.dxFollowup != null) {
            followupRow.push({
              style: 'labtitle',
              alignment: 'left',
              columns: [{
                text: 'Follow Up'
              }]
            });
            followupRow.push({
              style: 'medicine',
              alignment: 'justify',
              columns: [{
                text: this.prescription.dxFollowup
              }]
            });
          }

          return followupRow;
        }
      }, {
        key: "showProvisional",
        value: function showProvisional() {
          var provisionalRow = [];

          if (this.prescription.dxProvisionalDiagnosis != '' && this.prescription.dxProvisionalDiagnosis != null) {
            provisionalRow.push({
              style: 'labtitle',
              alignment: 'left',
              columns: [{
                text: 'Provisional Diagnosis'
              }]
            });
            provisionalRow.push({
              style: 'medicine',
              alignment: 'justify',
              columns: [{
                text: this.prescription.dxProvisionalDiagnosis
              }]
            });
          }

          return provisionalRow;
        }
      }, {
        key: "showFinal",
        value: function showFinal() {
          var finalRow = [];

          if (this.prescription.dxFinalDiagnosis != '' && this.prescription.dxFinalDiagnosis != null) {
            finalRow.push({
              style: 'labtitle',
              alignment: 'left',
              columns: [{
                text: 'Final Diagnosis'
              }]
            });
            finalRow.push({
              style: 'medicine',
              alignment: 'justify',
              columns: [{
                text: this.prescription.dxFinalDiagnosis
              }]
            });
          }

          return finalRow;
        }
      }, {
        key: "getQrCode",
        value: function getQrCode(ptDxID) {
          var _this3 = this;

          var qr_code;
          this.authService.getQrCode(ptDxID).subscribe(function (data) {
            console.log("Qr Code-->", data);
            qr_code = "data:image/png;base64," + data.qr_code;
            console.log("Qr Code-->", qr_code);
            _this3.generateQrcode = qr_code;
            console.log("Qr Code-->", _this3.generateQrcode);
            _this3.prescriptionId = data.prescription_id;
          });
        }
      }, {
        key: "createCode",
        value: function createCode() {
          //this.createdCode = this.qrData;
          console.log("QR Code==>", this.generateQrcode);
          var qrcode = [[{
            text: this.prescriptionId,
            style: 'prescription_code',
            border: [false, false, false, false]
          }], [{
            image: this.generateQrcode,
            width: 100,
            height: 100,
            border: [false, false, false, false]
          }]];
          return qrcode;
        }
      }, {
        key: "createPdf",
        value: function createPdf() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loading, prescription_date, docDefinition;
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
                    prescription_date = this.datepipe.transform(this.prescription.dxDateTime, 'dd/MMM/yyyy');
                    console.log("Vitals==>" + this.vital);
                    console.log("Create PDF");
                    docDefinition = {
                      // a string or { width: number, height: number }
                      pageSize: 'A4',
                      // by default we use portrait, you can change it to landscape if you wish
                      pageOrientation: 'portrate',
                      // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
                      pageMargins: [40, 60, 40, 60],
                      content: [// Header Part1 Start
                      {
                        style: 'tableExample',
                        table: {
                          widths: [75, '*'],
                          body: [[{
                            image: '' + this.hospitalDetails.logoData,
                            width: 75,
                            height: 75
                          }, {
                            table: {
                              body: [[{
                                border: [false, false, false, false],
                                text: '' + this.hospitalDetails.hospitalName,
                                style: 'hospitalname'
                              }], [{
                                border: [false, false, false, false],
                                text: '' + this.hospitalDetails.addressLine1 + this.hospitalDetails.addressLine2 + this.hospitalDetails.city + ',' + this.hospitalDetails.state + ',' + this.hospitalDetails.country,
                                style: 'hospitaladdress'
                              }], [{
                                border: [false, false, false, false],
                                text: 'Phone #: ' + this.hospitalDetails.hosMobile,
                                style: 'hospitaladdress'
                              }]]
                            }
                          }]]
                        } // Header Part1 End

                      }, //Header Part2 Start
                      {
                        style: 'tableExample',
                        table: {
                          widths: ['*'],
                          body: [[{
                            text: 'PRESCRIPTION',
                            style: 'prescription'
                          }]]
                        }
                      }, //Header Part2 End
                      //Header Part3 Start
                      {
                        style: 'tableExample',
                        table: {
                          widths: ['*'],
                          body: [[{
                            text: 'DATE:' + prescription_date,
                            style: 'date'
                          }]]
                        }
                      }, //Header Part3 End
                      //Doctor Information Start
                      {
                        style: 'doctorfirstline',
                        alignment: 'justify',
                        columns: [{
                          text: 'Doctor’s Name    :    Dr ' + this.doctor.docFirstName + ' ' + this.doctor.docLastName
                        }, {
                          text: 'Qualification    :    ' + this.doctor.docQualification + ' / ' + this.doctor.docSpecialization
                        }]
                      }, //Doctor Information End
                      //Border Start
                      {
                        style: 'hrborder',
                        table: {
                          widths: ['*'],
                          body: [[{
                            border: [false, true, false, false],
                            text: ''
                          }]]
                        }
                      }, //Border End 
                      //Patient Information Start
                      {
                        style: 'doctorfirstline',
                        alignment: 'justify',
                        columns: [{
                          text: 'Name of the Patient    :' + 'Mr. ' + this.userdetail.ptFirstName + ' ' + this.userdetail.ptLastName
                        }, {
                          text: 'Age & Gender    :    ' + this.age + ' Years & ' + this.userdetail.ptGender
                        }]
                      }, {
                        style: 'doctorsecondline',
                        alignment: 'justify',
                        columns: [{
                          text: 'Patient UID                    : ' + this.userdetail.userID
                        }, {
                          text: 'Mobile                : ' + this.userdetail.ptMobileNo
                        }]
                      }, //Patient Information End
                      //Border Start
                      {
                        style: 'hrborder',
                        table: {
                          widths: ['*'],
                          body: [[{
                            border: [false, true, false, false],
                            text: ''
                          }]]
                        }
                      }, //Border End
                      //Vitals Start

                      /*{
                      text: 'Vitals',
                      style: 'header'
                      },*/
                      this.contentRow(), this.showVitals(),
                      /*{
                      style: 'tablevital',
                        table: {
                          widths: [100,100],
                          body:[
                          this.showVitals()
                          ]
                        }
                      },*/
                      //Vitals End
                      //Pharmacy Prescription Title Start
                      //Pharmacy Prescription Title End 
                      //Pharmacy Prescription Table Start
                      this.showMedicine(), //Pharmacy Prescription Table End  
                      //Lab Investigations Table Start
                      this.showLab(), //Lab Investigations Table End
                      //Treatment Section Start
                      this.showTreatmentplan(), //Treatment Section End
                      //Diet Section Start
                      this.showDiet(), //Diet Section End
                      //Notes Section Start
                      this.showNotes(), //Notes Section End
                      //Past History Section Start
                      this.showPastHistory(), //Past History Section End
                      //Complaint Section Start
                      this.showComplaint(), //Complaint Section End
                      //Observation Section Start
                      this.showObservation(), //Observation Section End
                      //Follow Up Section Start
                      this.showFollowup(), //Follow Up Section End
                      //Provisional Section Start
                      this.showProvisional(), //Provisional Section End
                      //Final Section Start
                      this.showFinal(), //Final Section End
                      //Doctor Signature Start
                      {
                        style: 'doctorsignature',
                        text: 'Doctor’s Sign'
                      }, //Doctor Signature End
                      //Doctor Name Start
                      {
                        style: 'doctorsignature',
                        text: 'Dr ' + this.doctor.docFirstName + ' ' + this.doctor.docLastName
                      }],
                      styles: {
                        header: {
                          fontSize: 14,
                          bold: true
                        },
                        subheader: {
                          fontSize: 14,
                          bold: true,
                          margin: [0, 15, 0, 0]
                        },
                        story: {
                          italic: true,
                          alignment: 'center',
                          width: '50%'
                        },
                        tableExample: {
                          margin: [0, 5, 0, 0]
                        },
                        tableHeader: {
                          bold: true,
                          fontSize: 12,
                          color: 'black'
                        },
                        hospitalname: {
                          alignment: 'center',
                          bold: true,
                          fontSize: 18
                        },
                        hospitaladdress: {
                          alignment: 'center',
                          italic: true,
                          fontSize: 12
                        },
                        date: {
                          alignment: 'right',
                          italic: true,
                          fontSize: 12
                        },
                        prescription: {
                          alignment: 'center',
                          bold: true,
                          fontSize: 14
                        },
                        defaultStyle: {
                          columnGap: 20
                        },
                        doctorfirstline: {
                          margin: [0, 25, 0, 0]
                        },
                        doctorsecondline: {
                          margin: [0, 5, 0, 0]
                        },
                        hrborder: {
                          margin: [0, 20, 0, 0]
                        },
                        medicine: {
                          fontSize: 10,
                          color: 'black'
                        },
                        labtitle: {
                          fontSize: 14,
                          bold: true,
                          margin: [0, 25, 0, 0]
                        },
                        tableLab: {
                          margin: [0, 25, 0, 0]
                        },
                        doctorsignature: {
                          fontSize: 12,
                          bold: true,
                          alignment: 'right',
                          margin: [0, 45, 0, 0]
                        },
                        tablevital: {
                          margin: [0, 25, 25, 25]
                        },
                        prescription_code: {
                          fontSize: 12,
                          bold: true,
                          margin: [30, 5, 30, 0]
                        }
                      }
                    }; // this.pdfObj = pdfMake.createPdf(docDefinition); uncomment

                    loading.dismiss(); //alert("PDF Create");

                    this.downloadPdf(); //pdfMake.createPdf(docDefinition).open();

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "downloadPdf",
        value: function downloadPdf() {
          //alert("Download PDF Call");
          if (this.plt.is('cordova')) {
            //alert("Download PDF Android");
            //alert(this.userdetail.ptFirstName);
            this.pdfObj.getBuffer(function (buffer) {
              var blob = new Blob([buffer], {
                type: 'application/pdf'
              }); // Save the PDF to the data Directory of our App
              // uncomment this.file.writeFile(this.file.dataDirectory, 'prescription.pdf', blob, { replace: true }).then(fileEntry => {
              //   // Open the PDf with the correct OS tools
              //   this.fileOpener.open(this.file.dataDirectory + 'prescription.pdf', 'application/pdf');
              // })uncomment
            });
          } else {
            // On a browser simply use download!
            this.pdfObj.download();
          }
        }
      }, {
        key: "printPdf",
        value: function printPdf() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var loading, prescription_date, docDefinition;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      spinner: 'bubbles',
                      message: ''
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    prescription_date = this.datepipe.transform(this.prescription.dxDateTime, 'dd/MMM/yyyy');
                    console.log("Vitals==>" + this.vital);
                    console.log("Create PDF");
                    docDefinition = {
                      // a string or { width: number, height: number }
                      pageSize: 'A4',
                      // by default we use portrait, you can change it to landscape if you wish
                      pageOrientation: 'portrate',
                      // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
                      pageMargins: [40, 60, 40, 60],
                      content: [// Header Part1 Start
                      {
                        style: 'tableExample',
                        table: {
                          widths: [75, '*'],
                          body: [[{
                            image: '' + this.hospitalDetails.logoData,
                            width: 75,
                            height: 75
                          }, {
                            table: {
                              body: [[{
                                border: [false, false, false, false],
                                text: '' + this.hospitalDetails.hospitalName,
                                style: 'hospitalname'
                              }], [{
                                border: [false, false, false, false],
                                text: '' + this.hospitalDetails.addressLine1 + this.hospitalDetails.addressLine2 + this.hospitalDetails.city + ',' + this.hospitalDetails.state + ',' + this.hospitalDetails.country,
                                style: 'hospitaladdress'
                              }], [{
                                border: [false, false, false, false],
                                text: 'Phone #: ' + this.hospitalDetails.hosMobile,
                                style: 'hospitaladdress'
                              }]]
                            }
                          }]]
                        } // Header Part1 End

                      }, //Header Part2 Start
                      {
                        style: 'tableExample',
                        table: {
                          widths: ['*'],
                          body: [[{
                            text: 'PRESCRIPTION',
                            style: 'prescription'
                          }]]
                        }
                      }, //Header Part2 End
                      //Header Part3 Start
                      {
                        style: 'tableExample',
                        table: {
                          widths: ['*'],
                          body: [[{
                            text: 'DATE:' + prescription_date,
                            style: 'date'
                          }]]
                        }
                      }, //Header Part3 End
                      //Doctor Information Start
                      {
                        style: 'doctorfirstline',
                        alignment: 'justify',
                        columns: [{
                          text: 'Doctor’s Name    :    Dr ' + this.doctor.docFirstName + ' ' + this.doctor.docLastName
                        }, {
                          text: 'Qualification    :    ' + this.doctor.docQualification + ' / ' + this.doctor.docSpecialization
                        }]
                      }, //Doctor Information End
                      //Border Start
                      {
                        style: 'hrborder',
                        table: {
                          widths: ['*'],
                          body: [[{
                            border: [false, true, false, false],
                            text: ''
                          }]]
                        }
                      }, //Border End 
                      //Patient Information Start
                      {
                        style: 'doctorfirstline',
                        alignment: 'justify',
                        columns: [{
                          text: 'Name of the Patient    :' + 'Mr. ' + this.userdetail.ptFirstName + ' ' + this.userdetail.ptLastName
                        }, {
                          text: 'Age & Gender    :    ' + this.age + ' Years & ' + this.userdetail.ptGender
                        }]
                      }, {
                        style: 'doctorsecondline',
                        alignment: 'justify',
                        columns: [{
                          text: 'Patient UID                    : ' + this.userdetail.userID
                        }, {
                          text: 'Mobile                : ' + this.userdetail.ptMobileNo
                        }]
                      }, //Patient Information End
                      //Border Start
                      {
                        style: 'hrborder',
                        table: {
                          widths: ['*'],
                          body: [[{
                            border: [false, true, false, false],
                            text: ''
                          }]]
                        }
                      }, //Border End
                      //Vitals Start

                      /*{
                      text: 'Vitals',
                      style: 'header'
                      },*/
                      this.contentRow(), this.showVitals(),
                      /*{
                      style: 'tablevital',
                        table: {
                          widths: [100,100],
                          body:[
                          this.showVitals()
                          ]
                        }
                      },*/
                      //Vitals End
                      //Pharmacy Prescription Title Start
                      //Pharmacy Prescription Title End 
                      //Pharmacy Prescription Table Start
                      this.showMedicine(), //Pharmacy Prescription Table End  
                      //Lab Investigations Table Start
                      this.showLab(), //Lab Investigations Table End
                      //Treatment Section Start
                      this.showTreatmentplan(), //Treatment Section End
                      //Diet Section Start
                      this.showDiet(), //Diet Section End
                      //Notes Section Start
                      this.showNotes(), //Notes Section End
                      //Past History Section Start
                      this.showPastHistory(), //Past History Section End
                      //Complaint Section Start
                      this.showComplaint(), //Complaint Section End
                      //Observation Section Start
                      this.showObservation(), //Observation Section End
                      //Follow Up Section Start
                      this.showFollowup(), //Follow Up Section End
                      //Provisional Section Start
                      this.showProvisional(), //Provisional Section End
                      //Final Section Start
                      this.showFinal(), //Final Section End
                      //Doctor Signature Start
                      {
                        style: 'doctorsignature',
                        text: 'Doctor’s Sign'
                      }, //Doctor Signature End
                      //Doctor Name Start
                      {
                        style: 'doctorsignature',
                        text: 'Dr ' + this.doctor.docFirstName + ' ' + this.doctor.docLastName
                      }],
                      styles: {
                        header: {
                          fontSize: 14,
                          bold: true
                        },
                        subheader: {
                          fontSize: 14,
                          bold: true,
                          margin: [0, 15, 0, 0]
                        },
                        story: {
                          italic: true,
                          alignment: 'center',
                          width: '50%'
                        },
                        tableExample: {
                          margin: [0, 5, 0, 0]
                        },
                        tableHeader: {
                          bold: true,
                          fontSize: 12,
                          color: 'black'
                        },
                        hospitalname: {
                          alignment: 'center',
                          bold: true,
                          fontSize: 18
                        },
                        hospitaladdress: {
                          alignment: 'center',
                          italic: true,
                          fontSize: 12
                        },
                        date: {
                          alignment: 'right',
                          italic: true,
                          fontSize: 12
                        },
                        prescription: {
                          alignment: 'center',
                          bold: true,
                          fontSize: 14
                        },
                        defaultStyle: {
                          columnGap: 20
                        },
                        doctorfirstline: {
                          margin: [0, 25, 0, 0]
                        },
                        doctorsecondline: {
                          margin: [0, 5, 0, 0]
                        },
                        hrborder: {
                          margin: [0, 20, 0, 0]
                        },
                        medicine: {
                          fontSize: 10,
                          color: 'black'
                        },
                        labtitle: {
                          fontSize: 14,
                          bold: true,
                          margin: [0, 25, 0, 0]
                        },
                        tableLab: {
                          margin: [0, 25, 0, 0]
                        },
                        doctorsignature: {
                          fontSize: 12,
                          bold: true,
                          alignment: 'right',
                          margin: [0, 45, 0, 0]
                        },
                        tablevital: {
                          margin: [0, 25, 25, 25]
                        },
                        prescription_code: {
                          fontSize: 12,
                          bold: true,
                          margin: [30, 5, 30, 0]
                        }
                      }
                    }; //this.pdfObj = pdfMake.createPdf(docDefinition);
                    //this.downloadPdf();

                    loading.dismiss(); // pdfMake.createPdf(docDefinition).print(); uncomment

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "viewReport",
        value: function viewReport(documentID) {
          var _this4 = this;

          this.authService.getDocumentKeyName(documentID).subscribe(function (data) {
            _this4.documentKey = data;

            _this4.downloadDocument(_this4.documentKey);
          });
        }
      }, {
        key: "downloadDocument",
        value: function downloadDocument(keyname) {
          var _this5 = this;

          this.authService.downloadDocumentByKeyname(keyname).subscribe(function (data) {
            // debugger;
            console.log(data);
            _this5.documentObject = data;

            if (_this5.plt.is('android')) {
              _this5.viewMobilePdf(_this5.documentObject);
            } else {
              _this5.viewPdf(_this5.documentObject);
            }
          });
        }
      }, {
        key: "viewPdf",
        value: function viewPdf(document) {
          /* let pdfWindow = window.open('', '_self'); */
          console.log(document);
          var pdfWindow = window.open();
          var pdf = pdfWindow.document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64, " + document + "'></iframe>");
        }
      }, {
        key: "viewMobilePdf",
        value: function viewMobilePdf(document) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var loading, filename;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingCtrl.create({
                      spinner: 'bubbles',
                      message: 'Saving Prescription...'
                    });

                  case 2:
                    loading = _context3.sent;
                    filename = "test.pdf"; // const writeDirectory = this.plt.is('ios') ? this.file.dataDirectory : this.file.externalDataDirectory; uncomment
                    // this.file.writeFile(writeDirectory, filename, this.convertBase64ToBlob(document, 'data:application/pdf;base64'), { replace: true }) uncomment
                    // .then(async () => {
                    //   await loading.dismiss();
                    //   this.fileOpener.open(writeDirectory + filename, 'application/pdf')
                    //     .catch(async () => {
                    //       console.log('Error opening pdf file');
                    //       await loading.dismiss();
                    //     });
                    // })
                    // .catch(async () => {
                    //   console.error('Error writing pdf file');
                    //   await loading.dismiss();
                    // }); uncomment

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "convertBase64ToBlob",
        value: function convertBase64ToBlob(b64Data, contentType) {
          contentType = contentType || '';
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
        } // Get Hospital Details

      }, {
        key: "getHospitalDetails",
        value: function getHospitalDetails(tenantid) {
          var _this6 = this;

          // this.authService
          // .getHospitalDetailsByTenantid(tenantid)
          // .subscribe(data => {
          //   console.log("Hospital Details==>", data);
          //   this.hospitalDetails = data;
          // });
          this.authService.getCircleDetailByCode(tenantid).subscribe(function (data) {
            _this6.circleDetail = data;
            console.log("circle detail", _this6.circleDetail);
            _this6.circleName = _this6.circleDetail.circleName;

            _this6.authService.downloadDocumentByKeyname(_this6.circleDetail.circlePicture).subscribe(function (data) {
              // debugger;
              // console.log(data);
              // console.log("network image data---",data);  
              _this6.circlePicture = 'data:image/jpeg;base64,' + data;
              _this6.networkPictureStatus = true;
            });
          });
        } // Remainder functions

      }, {
        key: "remainderModal",
        value: function remainderModal(meddata) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log("meddata", meddata); // alert("kjdbjkdbjd");
                    // const modal = await this.modalCtrl.create(MedRemainderModalPage,{ med: meddata }); uncomment
                    // return await modal.present(); uncomment

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "tamilOn",
        value: function tamilOn() {
          console.log("Language Button", this.tamil);

          if (this.tamil) {
            this.label_obj = src_prescriptionTranslation__WEBPACK_IMPORTED_MODULE_7__["PRESCRIPTION_TRANSLATION"].TAMIL;
          } else {
            this.label_obj = src_prescriptionTranslation__WEBPACK_IMPORTED_MODULE_7__["PRESCRIPTION_TRANSLATION"].ENGLISH;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginAuth.logout();
        }
      }]);

      return PtEPrescriptionPage;
    }();

    PtEPrescriptionPage.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]
      }, {
        type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_9__["SwasthStorageService"]
      }, {
        type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_10__["LoginAuthService"]
      }];
    };

    PtEPrescriptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pt-eprescription',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pt-eprescription.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pt-eprescription/pt-eprescription.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pt-eprescription.page.scss */
      "./src/app/pt-eprescription/pt-eprescription.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_9__["SwasthStorageService"], _services_login_auth_service__WEBPACK_IMPORTED_MODULE_10__["LoginAuthService"]])], PtEPrescriptionPage);
    /***/
  },

  /***/
  "./src/prescriptionTranslation.ts":
  /*!****************************************!*\
    !*** ./src/prescriptionTranslation.ts ***!
    \****************************************/

  /*! exports provided: PRESCRIPTION_TRANSLATION */

  /***/
  function srcPrescriptionTranslationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PRESCRIPTION_TRANSLATION", function () {
      return PRESCRIPTION_TRANSLATION;
    });

    var PRESCRIPTION_TRANSLATION = {
      ENGLISH: {
        PAGE_TITLE: "Your Prescription",
        PRESCRIPTION_TITLE: "Consultant Prescription/Initial Assessment",
        VITAL_TITLE: "Vitals",
        VITAL_HEIGHT: "Height",
        VITAL_WEIGHT: "Weight",
        VITAL_TEMPERATURE: "Temperature",
        VITAL_BLOOD_PRESSURE: "Blood Pressure(BP)",
        VITAL_PULSE_RATE: "Pulse Rate(PR)",
        VITAL_RESPIRATORY_RATE: "Respiratory Rate(RR)",
        VITAL_SPO1: "SpO",
        VITAL_SPO2: "2",
        VITAL_ALLERGIES: "Allergies",
        VITAL_NOTES: "Notes",
        PHARMACY_PRESCRIPTION: "Pharmacy Prescription",
        LAB_INVESTIGATIONS: "Lab Investigations",
        RADIOLOGY_INVESTIGATIONS: "Radiology Investigations",
        CARDILOGY_INVESTIGATIONS: "Cardiology Investigations",
        OTHER_INVESTIGATIONS: "Other Investigations/procedures",
        PROVISIONAL_DIAGNOSIS: "Provisional Diagnosis",
        FINAL_DIAGNOSIS: "Final Diagnosis",
        COMPLAINT: "Complaint",
        OBSERVATION: "Observation",
        TREATMENT_PLAN: "Treatment Plan",
        DIET_ADVICE: "Diet Advice",
        NOTES: "Notes",
        FOLLOWUP: "Follow Up",
        DOCTOR_TITLE: "Doctor's Information",
        PATIENT_TITLE: "Patient's Information",
        CONSULTED_DATE: "Consulted Date",
        LAST_UPDATED_DATE: "Last Updated Date"
      },
      TAMIL: {
        PAGE_TITLE: "மருத்துவர் பரிந்துரை பதிவு",
        PRESCRIPTION_TITLE: "ஆலோசனை பரிந்துரை / முதல் நிலை பரிசோதனை",
        VITAL_TITLE: "ஜீவாதாரமான",
        VITAL_HEIGHT: "உயரம்",
        VITAL_WEIGHT: "எடை",
        VITAL_TEMPERATURE: "வெப்பநிலை",
        VITAL_BLOOD_PRESSURE: "இரத்த அழுத்தம்",
        VITAL_PULSE_RATE: "துடிப்பு வீதம்",
        VITAL_RESPIRATORY_RATE: "சுவாச விகிதம்",
        VITAL_SPO1: "புற தந்துகி ஆக்ஸிஜன் செறிவு",
        VITAL_SPO2: "",
        VITAL_ALLERGIES: "ஒவ்வாமைகள்",
        VITAL_NOTES: "குறிப்புகள்",
        PHARMACY_PRESCRIPTION: "மருந்துகள்",
        LAB_INVESTIGATIONS: "ஆய்வக விசாரணைகள்",
        RADIOLOGY_INVESTIGATIONS: "கதிரியக்கவியல் விசாரணைகள்",
        CARDILOGY_INVESTIGATIONS: "இருதயவியல் விசாரணைகள்",
        OTHER_INVESTIGATIONS: "பிற விசாரணைகள்",
        PROVISIONAL_DIAGNOSIS: "தற்காலிக நோயறிதல்",
        FINAL_DIAGNOSIS: "இறுதி நோய் கண்டறிதல்",
        COMPLAINT: "புகார்",
        OBSERVATION: "கவனிப்பு",
        TREATMENT_PLAN: "சிகிச்சை திட்டம்",
        DIET_ADVICE: "உணவு ஆலோசனை",
        NOTES: "குறிப்புகள்",
        FOLLOWUP: "பின்தொடர்",
        DOCTOR_TITLE: "மருத்துவர் தகவல்",
        PATIENT_TITLE: "நோயாளியின் தகவல்",
        CONSULTED_DATE: "ஆலோசிக்கப்பட்ட தேதி",
        LAST_UPDATED_DATE: "கடைசியாக மாற்றியமைக்கப்பட்ட தேதி"
      }
    };
    /***/
  }
}]);
//# sourceMappingURL=pt-eprescription-pt-eprescription-module-es5.js.map