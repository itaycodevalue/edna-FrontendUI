(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_preferences_preferences_shell_preferences_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/preferences/preferences-shell/preferences-shell.component */ "./src/app/components/preferences/preferences-shell/preferences-shell.component.ts");
/* harmony import */ var _components_dashboard_dashboard_shell_dashboard_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard-shell/dashboard-shell.component */ "./src/app/components/dashboard/dashboard-shell/dashboard-shell.component.ts");
/* harmony import */ var _components_classroom_classroom_shell_classroom_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/classroom/classroom-shell/classroom-shell.component */ "./src/app/components/classroom/classroom-shell/classroom-shell.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.guard */ "./src/app/app.guard.ts");
/* harmony import */ var _components_app_body_app_body_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/app-body/app-body.component */ "./src/app/components/app-body/app-body.component.ts");










var routes = [
    { path: "en", component: _components_app_body_app_body_component__WEBPACK_IMPORTED_MODULE_9__["AppBodyComponent"], canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_8__["AppGuard"]] },
    { path: "", component: _components_app_body_app_body_component__WEBPACK_IMPORTED_MODULE_9__["AppBodyComponent"] },
    { path: "Preferences", component: _components_preferences_preferences_shell_preferences_shell_component__WEBPACK_IMPORTED_MODULE_4__["PreferencesShellComponent"] },
    { path: "Dashboard", component: _components_dashboard_dashboard_shell_dashboard_shell_component__WEBPACK_IMPORTED_MODULE_5__["DashboardShellComponent"] },
    { path: "Classroom", component: _components_classroom_classroom_shell_classroom_shell_component__WEBPACK_IMPORTED_MODULE_6__["ClassroomShellComponent"] },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            ///remove enable tracing
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rtl {\r\n  direction: rtl !important;\r\n}\r\n\r\n.ltr {\r\n  direction: ltr !important;\r\n}\r\n\r\n* {\r\n  font-family: Helvetica;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucnRsIHtcclxuICBkaXJlY3Rpb246IHJ0bCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubHRyIHtcclxuICBkaXJlY3Rpb246IGx0ciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4qIHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div i18n-dir dir=\"ltr\">\r\n  <app-app-header></app-app-header>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/translate.service */ "./src/app/services/translate.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(localeId, translate) {
        this.localeId = localeId;
        this.translate = translate;
        this.languageList = [
            { code: "en", label: "English" },
            { code: "he", label: "עברית" }
        ];
        translate.use('en').then(function () {
            console.log(translate.data);
        });
        console.log();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.guard.ts":
/*!******************************!*\
  !*** ./src/app/app.guard.ts ***!
  \******************************/
/*! exports provided: AppGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGuard", function() { return AppGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/translate.service */ "./src/app/services/translate.service.ts");






var AppGuard = /** @class */ (function () {
    function AppGuard(localStorageService, router, translate, store) {
        this.localStorageService = localStorageService;
        this.router = router;
        this.translate = translate;
        this.store = store;
    }
    AppGuard.prototype.canActivate = function (route) {
        if (route.queryParamMap.get("assignmentGuid")) {
            //when we go to production change this to paramMap
            this.translate.use("en");
            this.localStorageService.setItem("assignmentGuid", route.queryParamMap.get("assignmentGuid"));
            this.localStorageService.setItem("memberId", route.queryParamMap.get("userId"));
            this.router.navigateByUrl("");
        }
        // this.store.dispatch(new SetUser(this.localStorageService.getItem("memberId")));
        return true;
    };
    AppGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_translate_service__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AppGuard);
    return AppGuard;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app-header/app-header.component */ "./src/app/components/app-header/app-header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngxs/logger-plugin */ "./node_modules/@ngxs/logger-plugin/fesm5/ngxs-logger-plugin.js");
/* harmony import */ var _components_preferences_preferences_shell_preferences_shell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/preferences/preferences-shell/preferences-shell.component */ "./src/app/components/preferences/preferences-shell/preferences-shell.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_dashboard_dashboard_shell_dashboard_shell_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/dashboard-shell/dashboard-shell.component */ "./src/app/components/dashboard/dashboard-shell/dashboard-shell.component.ts");
/* harmony import */ var _components_classroom_classroom_shell_classroom_shell_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/classroom/classroom-shell/classroom-shell.component */ "./src/app/components/classroom/classroom-shell/classroom-shell.component.ts");
/* harmony import */ var _components_preferences_preferences_general_preferences_general_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/preferences/preferences-general/preferences-general.component */ "./src/app/components/preferences/preferences-general/preferences-general.component.ts");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_preferences_preferences_add_file_preferences_add_file_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/preferences/preferences-add-file/preferences-add-file.component */ "./src/app/components/preferences/preferences-add-file/preferences-add-file.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_preferences_preferences_resources_preferences_resources_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/preferences/preferences-resources/preferences-resources.component */ "./src/app/components/preferences/preferences-resources/preferences-resources.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _components_publish_dialog_publish_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/publish-dialog/publish-dialog.component */ "./src/app/components/publish-dialog/publish-dialog.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_app_body_app_body_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/app-body/app-body.component */ "./src/app/components/app-body/app-body.component.ts");
/* harmony import */ var _components_classroom_classroom_stats_classroom_stats_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/classroom/classroom-stats/classroom-stats.component */ "./src/app/components/classroom/classroom-stats/classroom-stats.component.ts");
/* harmony import */ var _components_classroom_classroom_tools_classroom_tools_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/classroom/classroom-tools/classroom-tools.component */ "./src/app/components/classroom/classroom-tools/classroom-tools.component.ts");
/* harmony import */ var _components_classroom_classroom_students_classroom_students_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/classroom/classroom-students/classroom-students.component */ "./src/app/components/classroom/classroom-students/classroom-students.component.ts");
/* harmony import */ var _components_submission_submission_shell_submission_shell_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/submission/submission-shell/submission-shell.component */ "./src/app/components/submission/submission-shell/submission-shell.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/translate.service */ "./src/app/services/translate.service.ts");
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pipes/translate.pipe */ "./src/app/pipes/translate.pipe.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _components_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/doughnut-chart/doughnut-chart.component */ "./src/app/components/doughnut-chart/doughnut-chart.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _store_store_index__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./store/store-index */ "./src/app/store/store-index.ts");
/* harmony import */ var _services_assigments_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/assigments.service */ "./src/app/services/assigments.service.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _components_preferences_preferences_resources_products_preferences_resources_products_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/preferences/preferences-resources-products/preferences-resources-products.component */ "./src/app/components/preferences/preferences-resources-products/preferences-resources-products.component.ts");
/* harmony import */ var _components_student_shell_student_shell_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/student-shell/student-shell.component */ "./src/app/components/student-shell/student-shell.component.ts");
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./services/member.service */ "./src/app/services/member.service.ts");

















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"],
                _components_preferences_preferences_shell_preferences_shell_component__WEBPACK_IMPORTED_MODULE_10__["PreferencesShellComponent"],
                _components_dashboard_dashboard_shell_dashboard_shell_component__WEBPACK_IMPORTED_MODULE_13__["DashboardShellComponent"],
                _components_classroom_classroom_shell_classroom_shell_component__WEBPACK_IMPORTED_MODULE_14__["ClassroomShellComponent"],
                _components_preferences_preferences_general_preferences_general_component__WEBPACK_IMPORTED_MODULE_15__["PreferencesGeneralComponent"],
                _components_preferences_preferences_add_file_preferences_add_file_component__WEBPACK_IMPORTED_MODULE_18__["PreferencesAddFileComponent"],
                _components_preferences_preferences_resources_preferences_resources_component__WEBPACK_IMPORTED_MODULE_22__["PreferencesResourcesComponent"],
                _components_publish_dialog_publish_dialog_component__WEBPACK_IMPORTED_MODULE_26__["PublishDialogComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_29__["PageNotFoundComponent"],
                _components_app_body_app_body_component__WEBPACK_IMPORTED_MODULE_30__["AppBodyComponent"],
                _components_classroom_classroom_stats_classroom_stats_component__WEBPACK_IMPORTED_MODULE_31__["ClassroomStatsComponent"],
                _components_classroom_classroom_tools_classroom_tools_component__WEBPACK_IMPORTED_MODULE_32__["ClassroomToolsComponent"],
                _components_classroom_classroom_students_classroom_students_component__WEBPACK_IMPORTED_MODULE_33__["ClassroomStudentsComponent"],
                _components_submission_submission_shell_submission_shell_component__WEBPACK_IMPORTED_MODULE_34__["SubmissionShellComponent"],
                _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_37__["TranslatePipe"],
                _components_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_40__["DoughnutChartComponent"],
                _components_preferences_preferences_resources_products_preferences_resources_products_component__WEBPACK_IMPORTED_MODULE_45__["PreferencesResourcesProductsComponent"],
                _components_student_shell_student_shell_component__WEBPACK_IMPORTED_MODULE_46__["StudentShellComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_44__["RoundProgressModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_41__["NgxChartsModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_39__["ChartModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_35__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_38__["DropdownModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_16__["AccordionModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forRoot(_store_store_index__WEBPACK_IMPORTED_MODULE_42__["AppState"]),
                _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_9__["NgxsLoggerPluginModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"]
            ],
            providers: [_services_translate_service__WEBPACK_IMPORTED_MODULE_36__["TranslateService"], _services_assigments_service__WEBPACK_IMPORTED_MODULE_43__["AssignmentsService"], _services_member_service__WEBPACK_IMPORTED_MODULE_47__["MemberService"]],
            entryComponents: [_components_publish_dialog_publish_dialog_component__WEBPACK_IMPORTED_MODULE_26__["PublishDialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app-body/app-body.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/app-body/app-body.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-button {\r\n  width: 15em;\r\n  font-weight: bold;\r\n}\r\n\r\n.publish-button {\r\n  color: white;\r\n  background-color: darkblue;\r\n}\r\n\r\n.preview-button {\r\n  color: black;\r\n  border: 0.1em grey solid;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAtYm9keS9hcHAtYm9keS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHAtYm9keS9hcHAtYm9keS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1idXR0b24ge1xyXG4gIHdpZHRoOiAxNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHVibGlzaC1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxufVxyXG5cclxuLnByZXZpZXctYnV0dG9uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiAwLjFlbSBncmV5IHNvbGlkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/app-body/app-body.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/app-body/app-body.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard\">\n  <mat-tab-group mat-align-tabs=\"start\" *ngIf=\"assignments$ | async as assignments\">\n    <mat-tab>\n      <ng-template mat-tab-label i18n=\"@@PREFERNCES\">Preferences</ng-template>\n      <ng-template matTabContent>\n        <app-preferences-shell></app-preferences-shell>\n      </ng-template>\n    </mat-tab>\n    <mat-tab disabled>\n      <ng-template mat-tab-label i18n=\"@@DASHBOARD\">Dashboard</ng-template>\n      <ng-template matTabContent>\n        <app-dashboard-shell></app-dashboard-shell>\n      </ng-template>\n    </mat-tab>\n    <mat-tab>\n      <ng-template mat-tab-label i18n=\"@@CLASROOM\">Classroom</ng-template>\n      <ng-template matTabContent>\n        <app-classroom-shell></app-classroom-shell>\n      </ng-template>\n    </mat-tab>\n    <mat-tab>\n      <ng-template mat-tab-label i18n=\"@@SUBMISSION\">Submission</ng-template>\n      <ng-template matTabContent>\n        <app-submission-shell [assignments]=\"assignments\"></app-submission-shell>\n      </ng-template>\n    </mat-tab>\n    <mat-tab disabled></mat-tab>\n    <mat-tab disabled></mat-tab>\n\n    <mat-tab disabled>\n      <ng-template mat-tab-label>\n        <button mat-raised-button color=\"primary\" (click)=\"openPublishDialog()\" i18n=\"@@PUBLISH\">\n          Publish\n        </button>\n      </ng-template>\n    </mat-tab>\n    <mat-tab disabled>\n      <ng-template mat-tab-label>\n        <button mat-raised-button color=\"basic\" (click)=\"handlePreviewClick()\" i18n=\"@@PREVIEW\">\n          Preview\n        </button>\n      </ng-template>\n    </mat-tab>\n  </mat-tab-group>\n\n</div>"

/***/ }),

/***/ "./src/app/components/app-body/app-body.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/app-body/app-body.component.ts ***!
  \***********************************************************/
/*! exports provided: AppBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBodyComponent", function() { return AppBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _publish_dialog_publish_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../publish-dialog/publish-dialog.component */ "./src/app/components/publish-dialog/publish-dialog.component.ts");
/* harmony import */ var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/translate.service */ "./src/app/services/translate.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var src_app_store_assignments_assignments_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/assignments/assignments.selectors */ "./src/app/store/assignments/assignments.selectors.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var AppBodyComponent = /** @class */ (function () {
    function AppBodyComponent(dialog, translate) {
        this.dialog = dialog;
        this.translate = translate;
    }
    AppBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assignments$.subscribe(function (data) {
            _this.assignments = data;
        });
    };
    AppBodyComponent.prototype.openPublishDialog = function () {
        this.publishDialogRef = this.dialog.open(_publish_dialog_publish_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PublishDialogComponent"], {
            data: { assignments: this.assignments }
        });
        this.publishDialogRef.afterClosed().subscribe();
    };
    AppBodyComponent.prototype.handlePreviewClick = function () {
        var _this = this;
        this.translate.use('he').then(function () {
            console.log(_this.translate.data);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(src_app_store_assignments_assignments_selectors__WEBPACK_IMPORTED_MODULE_6__["AssignmentsStateSelectors"].getAssignments),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])
    ], AppBodyComponent.prototype, "assignments$", void 0);
    AppBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-app-body",
            template: __webpack_require__(/*! ./app-body.component.html */ "./src/app/components/app-body/app-body.component.html"),
            styles: [__webpack_require__(/*! ./app-body.component.css */ "./src/app/components/app-body/app-body.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], AppBodyComponent);
    return AppBodyComponent;
}());



/***/ }),

/***/ "./src/app/components/app-header/app-header.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/app-header/app-header.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: #4786ed;\r\n  height: 6em;\r\n  color: white;\r\n  display:flex;\r\n  flex-direction: row;\r\n  align-content: center;\r\n  justify-content: space-between;\r\n}\r\n.mat-raised-button{\r\n  widows: 18em;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAtaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHAtaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Nzg2ZWQ7XHJcbiAgaGVpZ2h0OiA2ZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9ue1xyXG4gIHdpZG93czogMThlbTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/app-header/app-header.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-header/app-header.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div style=\"display: inherit;align-items: center\">\r\n    <div style=\"font-size: 5em\">{{courseName$ | async}}</div>\r\n    <div style=\"margin:0 1em;font-size: 2em\">{{courseName$ | async}} <span i18n=\"@@MESSAGES\">Messages</span></div>\r\n  </div>\r\n  <div style=\"display: inherit;align-items: center\">\r\n    <div style=\"margin:0 1em\"><button mat-raised-button color=\"primary\" i18n=\"@@EDUCATION_HUB\">education hub</button>\r\n    </div>\r\n    <div style=\"margin:0 1em\">\r\n      <mat-icon>notifications</mat-icon>\r\n    </div>\r\n    <div style=\"margin:0 1em\">\r\n      <mat-icon>account_circle</mat-icon>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/app-header/app-header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/app-header/app-header.component.ts ***!
  \***************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_store_app_start_app_start_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/app-start/app-start.selectors */ "./src/app/store/app-start/app-start.selectors.ts");
/* harmony import */ var src_app_store_app_start_app_start_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/app-start/app-start.actions */ "./src/app/store/app-start/app-start.actions.ts");
/* harmony import */ var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/member.service */ "./src/app/services/member.service.ts");







var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(store, memberService) {
        this.store = store;
        this.memberService = memberService;
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new src_app_store_app_start_app_start_actions__WEBPACK_IMPORTED_MODULE_5__["GetAssignmentInitialData"]());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(src_app_store_app_start_app_start_selectors__WEBPACK_IMPORTED_MODULE_4__["AppStartStateSelectors"].getCourseName),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AppHeaderComponent.prototype, "courseName$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(src_app_store_app_start_app_start_selectors__WEBPACK_IMPORTED_MODULE_4__["AppStartStateSelectors"].getUsername),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AppHeaderComponent.prototype, "username$", void 0);
    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-app-header",
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/components/app-header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.css */ "./src/app/components/app-header/app-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"], src_app_services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/classroom/classroom-shell/classroom-shell.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/classroom/classroom-shell/classroom-shell.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"classroom-container\">\n  <div class=\"classroom-tools\">\n    <div class=\"tools-item\"><mat-icon>add_circle_outline</mat-icon>Add</div>\n    <div class=\"tools-item\"><mat-icon>replay</mat-icon>Refresh</div>\n    <div class=\"tools-item\"><mat-icon>delete_outline</mat-icon>Trash</div>\n  </div>\n</div> -->\n<div class=\"tab-container\">\n  <app-classroom-tools></app-classroom-tools>\n  <app-classroom-stats [allStudentsCount]=\"allStudentsCount\" [noOfTeachingAssistants]=\"noOfTeachingAssistants\"\n    [noOfProjectGroups]=\"noOfProjectGroups\" [totalSpendings]=\"totalSpendings\"></app-classroom-stats>\n  <app-classroom-students [assignments]=\"assignments$ | async\"></app-classroom-students>\n</div>"

/***/ }),

/***/ "./src/app/components/classroom/classroom-shell/classroom-shell.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/classroom/classroom-shell/classroom-shell.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3Nyb29tL2NsYXNzcm9vbS1zaGVsbC9jbGFzc3Jvb20tc2hlbGwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/classroom/classroom-shell/classroom-shell.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/classroom/classroom-shell/classroom-shell.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClassroomShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomShellComponent", function() { return ClassroomShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var src_app_store_assignments_assignments_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/assignments/assignments.selectors */ "./src/app/store/assignments/assignments.selectors.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_assigments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/assigments.service */ "./src/app/services/assigments.service.ts");






var ClassroomShellComponent = /** @class */ (function () {
    function ClassroomShellComponent(assignmentService) {
        this.assignmentService = assignmentService;
    }
    ClassroomShellComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assignmentService.getAllStudentsCount().subscribe(function (data) { return _this.allStudentsCount = data; });
        this.assignmentService.getNoOfProjectGroups().subscribe(function (data) { return _this.noOfProjectGroups = data; });
        this.assignmentService.getNoOfTeachingAssistants().subscribe(function (data) { return _this.noOfTeachingAssistants = data; });
        this.assignmentService.getTotalSpendings().subscribe(function (data) { return _this.totalSpendings = data; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(src_app_store_assignments_assignments_selectors__WEBPACK_IMPORTED_MODULE_3__["AssignmentsStateSelectors"].getAssignments),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ClassroomShellComponent.prototype, "assignments$", void 0);
    ClassroomShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-classroom-shell",
            template: __webpack_require__(/*! ./classroom-shell.component.html */ "./src/app/components/classroom/classroom-shell/classroom-shell.component.html"),
            styles: [__webpack_require__(/*! ./classroom-shell.component.scss */ "./src/app/components/classroom/classroom-shell/classroom-shell.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_assigments_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentsService"]])
    ], ClassroomShellComponent);
    return ClassroomShellComponent;
}());



/***/ }),

/***/ "./src/app/components/classroom/classroom-stats/classroom-stats.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/classroom/classroom-stats/classroom-stats.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stats-title {\r\n  font-size: 0.8em;\r\n\r\n  color: #babbbc;\r\n}\r\n.stats-data {\r\n  font-size: 2em;\r\n  font-weight: 100;\r\n}\r\n.stat-icon {\r\n  align-self: center;\r\n  margin-left: 1em;\r\n  color: #4fa4f9;\r\n}\r\n.classroom-stats {\r\n  background-color: white;\r\n  margin: 1em;\r\n  height: 5em;\r\n  border-radius: 0.5em;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n.stats-item {\r\n  margin: 2em 7em;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.item-title {\r\n  align-self: center;\r\n  margin-left: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGFzc3Jvb20vY2xhc3Nyb29tLXN0YXRzL2NsYXNzcm9vbS1zdGF0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCOztFQUVoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsYXNzcm9vbS9jbGFzc3Jvb20tc3RhdHMvY2xhc3Nyb29tLXN0YXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHMtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcblxyXG4gIGNvbG9yOiAjYmFiYmJjO1xyXG59XHJcbi5zdGF0cy1kYXRhIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uc3RhdC1pY29uIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBjb2xvcjogIzRmYTRmOTtcclxufVxyXG5cclxuLmNsYXNzcm9vbS1zdGF0cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAxZW07XHJcbiAgaGVpZ2h0OiA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnN0YXRzLWl0ZW0ge1xyXG4gIG1hcmdpbjogMmVtIDdlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5pdGVtLXRpdGxlIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/classroom/classroom-stats/classroom-stats.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/classroom/classroom-stats/classroom-stats.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"classroom-stats\">\n  <div class=\"stats-item\">\n    <div class=\"stat-icon\"><i class=\"fas fa-user-graduate fa-3x\"></i></div>\n    <div class=\"item-title\">\n      <div class=\"stats-data\">{{ allStudentsCount }}</div>\n      <div class=\"stats-title\" i18n=\"@@ALL_STUDENTS\">All Students</div>\n    </div>\n  </div>\n  <div class=\"stats-item\">\n    <div class=\"stat-icon\">\n      <mat-icon>chat_bubble_outline</mat-icon>\n    </div>\n    <div class=\"item-title\">\n      <div class=\"stats-data\">{{ noOfTeachingAssistants }}</div>\n      <div class=\"stats-title\" i18n=\"@@TEACHING_ASSISTANTS\">Teaching Assistants</div>\n    </div>\n  </div>\n  <div class=\"stats-item\">\n    <div class=\"stat-icon\">\n      <mat-icon>people_outline</mat-icon>\n    </div>\n    <div class=\"item-title\">\n      <div class=\"stats-data\">{{ noOfProjectGroups }}</div>\n      <div class=\"stats-title\" i18n=\"@@PROJECT_GROUPS\">Project Groups</div>\n    </div>\n  </div>\n  <div class=\"stats-item\">\n    <div class=\"stat-icon\">\n      <mat-icon>attach_money</mat-icon>\n    </div>\n    <div class=\"item-title\">\n      <div class=\"stats-data\">{{ totalSpendings }}</div>\n      <div class=\"stats-title\" i18n=\"@@SPENDING\">Spendings</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/classroom/classroom-stats/classroom-stats.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/classroom/classroom-stats/classroom-stats.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClassroomStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomStatsComponent", function() { return ClassroomStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClassroomStatsComponent = /** @class */ (function () {
    function ClassroomStatsComponent() {
    }
    ClassroomStatsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ClassroomStatsComponent.prototype, "allStudentsCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ClassroomStatsComponent.prototype, "noOfTeachingAssistants", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ClassroomStatsComponent.prototype, "noOfProjectGroups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ClassroomStatsComponent.prototype, "totalSpendings", void 0);
    ClassroomStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-classroom-stats",
            template: __webpack_require__(/*! ./classroom-stats.component.html */ "./src/app/components/classroom/classroom-stats/classroom-stats.component.html"),
            styles: [__webpack_require__(/*! ./classroom-stats.component.css */ "./src/app/components/classroom/classroom-stats/classroom-stats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClassroomStatsComponent);
    return ClassroomStatsComponent;
}());



/***/ }),

/***/ "./src/app/components/classroom/classroom-students/classroom-students.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/classroom/classroom-students/classroom-students.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-main-content {\r\n  background-color: white;\r\n  margin: 1em;\r\n\r\n  border-radius: 0.5em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGFzc3Jvb20vY2xhc3Nyb29tLXN0dWRlbnRzL2NsYXNzcm9vbS1zdHVkZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7O0VBRVgsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGFzc3Jvb20vY2xhc3Nyb29tLXN0dWRlbnRzL2NsYXNzcm9vbS1zdHVkZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1tYWluLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMWVtO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/classroom/classroom-students/classroom-students.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/classroom/classroom-students/classroom-students.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-main-content\">\n  <mat-table #table [dataSource]=\"dataSource\" style=\"margin:1em\">\n    <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n    <!-- select assignemnt Checkbox Column-->\n    <ng-container matColumnDef=\"select\">\n      <th mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\"\n          [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n        </mat-checkbox>\n      </th>\n      <td mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n          [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef i18n=\"@@NAME\">NAME</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.name }}</mat-cell>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"budget\">\n      <mat-header-cell *matHeaderCellDef i18n=\"@@BUDGET\">BUDGET</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{\n        element.budget | currency: \"USD\"\n      }}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"consumed\">\n      <mat-header-cell *matHeaderCellDef i18n=\"@@CONSUMED\">CONSUMED</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{\n        element.consumed | currency: \"USD\":true:\"2.2-4\"\n      }}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"status\">\n      <mat-header-cell *matHeaderCellDef i18n=\"@@STATUS\">STATUS</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <mat-icon>{{ element.statusIcon }}</mat-icon>{{ element.status }}\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"\n      [ngClass]=\"{ hovered: row.hovered, highlighted: row.highlighted }\" (click)=\"row.highlighted = !row.highlighted\"\n      (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "./src/app/components/classroom/classroom-students/classroom-students.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/classroom/classroom-students/classroom-students.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ClassroomStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomStudentsComponent", function() { return ClassroomStudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var src_app_services_assigments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/assigments.service */ "./src/app/services/assigments.service.ts");






var ClassroomStudentsComponent = /** @class */ (function () {
    function ClassroomStudentsComponent(service, store) {
        this.service = service;
        this.store = store;
        this.displayedColumns = ["select", "name", "budget", "consumed", "status"];
        this.selectedAssignemnts = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, this.selectedAssignemnts);
    }
    ClassroomStudentsComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.assignments);
    };
    /** Whether the number of selected elements matches the total number of rows. */
    ClassroomStudentsComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    ClassroomStudentsComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    /** The label for the checkbox on the passed row */
    ClassroomStudentsComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? "select" : "deselect") + " all";
        }
        return (this.selection.isSelected(row) ? "deselect" : "select") + " row " + (row.id + 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ClassroomStudentsComponent.prototype, "assignments", void 0);
    ClassroomStudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-classroom-students",
            template: __webpack_require__(/*! ./classroom-students.component.html */ "./src/app/components/classroom/classroom-students/classroom-students.component.html"),
            styles: [__webpack_require__(/*! ./classroom-students.component.css */ "./src/app/components/classroom/classroom-students/classroom-students.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_assigments_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentsService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ClassroomStudentsComponent);
    return ClassroomStudentsComponent;
}());



/***/ }),

/***/ "./src/app/components/classroom/classroom-tools/classroom-tools.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/classroom/classroom-tools/classroom-tools.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"classroom-tools\">\n  <div class=\"tools-item\">\n    <div>\n      <mat-icon>add_circle_outline</mat-icon>\n    </div>\n    <div class=\"item-title\" i18n=\"@@ADD\">Add</div>\n  </div>\n  <div class=\"tools-item\">\n    <div>\n      <mat-icon>replay</mat-icon>\n    </div>\n    <div class=\"item-title\" i18n=\"@@REFRESH\">Refresh</div>\n  </div>\n  <div class=\"tools-item\">\n    <div>\n      <mat-icon>delete_outline</mat-icon>\n    </div>\n    <div class=\"item-title\" i18n=\"@@TRASH\">Trash</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/classroom/classroom-tools/classroom-tools.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/classroom/classroom-tools/classroom-tools.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".classroom-tools {\n  display: flex;\n  flex-direction: row;\n  background-color: white;\n  height: em;\n  justify-content: flex-start;\n  color: #77787a; }\n\n.tools-item {\n  margin: 1em;\n  display: flex;\n  flex-direction: row; }\n\n.item-title {\n  align-self: center;\n  margin-left: 1em; }\n\n/deep/.mat-icon {\n  font-size: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGFzc3Jvb20vY2xhc3Nyb29tLXRvb2xzL0M6XFxXb3JrUHJvamVjdHNcXHJlcG9zXFxlZG5hLWZyb250ZW5kVUkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsYXNzcm9vbVxcY2xhc3Nyb29tLXRvb2xzXFxjbGFzc3Jvb20tdG9vbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsYXNzcm9vbS9jbGFzc3Jvb20tdG9vbHMvY2xhc3Nyb29tLXRvb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzcm9vbS10b29scyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGNvbG9yOiAjNzc3ODdhO1xyXG59XHJcblxyXG4udG9vbHMtaXRlbSB7XHJcbiAgbWFyZ2luOiAxZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uaXRlbS10aXRsZSB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbi9kZWVwLy5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/classroom/classroom-tools/classroom-tools.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/classroom/classroom-tools/classroom-tools.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClassroomToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomToolsComponent", function() { return ClassroomToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClassroomToolsComponent = /** @class */ (function () {
    function ClassroomToolsComponent() {
    }
    ClassroomToolsComponent.prototype.ngOnInit = function () { };
    ClassroomToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-classroom-tools",
            template: __webpack_require__(/*! ./classroom-tools.component.html */ "./src/app/components/classroom/classroom-tools/classroom-tools.component.html"),
            styles: [__webpack_require__(/*! ./classroom-tools.component.scss */ "./src/app/components/classroom/classroom-tools/classroom-tools.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClassroomToolsComponent);
    return ClassroomToolsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard-shell/dashboard-shell.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-shell/dashboard-shell.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-container{\r\n\r\n    background-color: #dae1ed;\r\n    min-height: 50em;\r\n}\r\n\r\n.dashboard-item{\r\n     display: flex;\r\n    flex-direction:row;\r\n    margin:2em ;\r\n    flex-basis: 33%;\r\n    background-color: white;\r\n    border-radius: .5em;\r\n    overflow: auto;\r\n\r\n}\r\n\r\n.dashboard-row{\r\n    display: flex;\r\n    flex-direction:row;\r\n    justify-content: space-evenly; \r\n}\r\n\r\n.mat-icon{\r\n    color:white;\r\n    font-size: 4em;\r\n}\r\n\r\n.dashboard-item-title{\r\n    margin:1em;\r\n}\r\n\r\n.dashboard-submission-percentage{\r\n    display: flex;\r\n    flex-direction:column;\r\n    margin:2em ;\r\n    flex-basis: 33%;\r\n    background-color: white;\r\n    border-radius: .5em;\r\n    overflow: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXNoZWxsL2Rhc2hib2FyZC1zaGVsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7S0FDSyxhQUFhO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXNoZWxsL2Rhc2hib2FyZC1zaGVsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1jb250YWluZXJ7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTFlZDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwZW07XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtaXRlbXtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgbWFyZ2luOjJlbSA7XHJcbiAgICBmbGV4LWJhc2lzOiAzMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41ZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyBcclxufVxyXG5cclxuLm1hdC1pY29ue1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1pdGVtLXRpdGxle1xyXG4gICAgbWFyZ2luOjFlbTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1zdWJtaXNzaW9uLXBlcmNlbnRhZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgbWFyZ2luOjJlbSA7XHJcbiAgICBmbGV4LWJhc2lzOiAzMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41ZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard-shell/dashboard-shell.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-shell/dashboard-shell.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-container\">\n  <div class=\"dashboard-row\">\n    <div class=\"dashboard-item\">\n      <div style=\"background-color: #cadcf8;width:20%\">\n        <mat-icon>move_to_inbox</mat-icon>\n      </div>\n      <div style=\"margin:1em;width:100%;\">\n        <div>Total submission</div>\n        <div>{{totalSubmissions}}/{{totalStudents}}</div>\n        <hr style=\"background-color: #cadcf8\">\n        <div>{{submissionPercentage | percent }} from class</div>\n      </div>\n    </div>\n    <div class=\"dashboard-item\">\n      <div style=\"background-color: #eac16f;width:20%\">\n        <mat-icon>attach_money</mat-icon>\n      </div>\n      <div style=\"margin:1em;width:100%;\">\n        <div>Total budget use</div>\n        <div>{{totalConsumed | currency: \"USD\"}}</div>\n        <hr style=\"background-color: #eac16f\">\n        <div>{{consumedPercentage | percent }} from total budget</div>\n      </div>\n    </div>\n    <div class=\"dashboard-item\">\n      <div style=\"background-color: #98e2c8;width:20%\">\n        <mat-icon>people_outline</mat-icon>\n      </div>\n      <div style=\"margin:1em;width:100%;\">\n        <div>Active groups</div>\n        <div>{{noOfActiveGroups}}</div>\n        <hr style=\"background-color: #98e2c8\">\n        <div>{{noOfActiveGroups}} still pending</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"dashboard-row\">\n    <div class=\"dashboard-submission-percentage\">\n      <div class=\"dashboard-item-title\">Submission</div>\n      <hr>\n      <app-doughnut-chart [totalSubmissions]=\"totalSubmissions\" [totalStudents]=\"totalStudents\"\n        [totalStarted]=\"totalStarted\"></app-doughnut-chart>\n    </div>\n\n\n  </div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard-shell/dashboard-shell.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-shell/dashboard-shell.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DashboardShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardShellComponent", function() { return DashboardShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardShellComponent = /** @class */ (function () {
    function DashboardShellComponent() {
    }
    DashboardShellComponent.prototype.ngOnInit = function () {
        this.totalStudents = 35;
        this.totalSubmissions = 12;
        this.submissionPercentage = this.totalSubmissions / this.totalStudents;
        this.totalConsumed = 300;
        this.totalBudget = 1000;
        this.consumedPercentage = this.totalConsumed / this.totalBudget;
        this.noOfActiveGroups = 10;
        this.noOfPendingGroups = 2;
        this.totalStarted = 4;
    };
    DashboardShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-shell',
            template: __webpack_require__(/*! ./dashboard-shell.component.html */ "./src/app/components/dashboard/dashboard-shell/dashboard-shell.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-shell.component.css */ "./src/app/components/dashboard/dashboard-shell/dashboard-shell.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardShellComponent);
    return DashboardShellComponent;
}());



/***/ }),

/***/ "./src/app/components/doughnut-chart/doughnut-chart.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/doughnut-chart/doughnut-chart.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG91Z2hudXQtY2hhcnQvZG91Z2hudXQtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/doughnut-chart/doughnut-chart.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/doughnut-chart/doughnut-chart.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-chart type=\"doughnut\" [data]=\"data\"></p-chart>"

/***/ }),

/***/ "./src/app/components/doughnut-chart/doughnut-chart.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/doughnut-chart/doughnut-chart.component.ts ***!
  \***********************************************************************/
/*! exports provided: DoughnutChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughnutChartComponent", function() { return DoughnutChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DoughnutChartComponent = /** @class */ (function () {
    function DoughnutChartComponent() {
    }
    DoughnutChartComponent.prototype.ngOnInit = function () {
        this.data = {
            labels: ['Submitted', 'Started', 'Not Started'],
            datasets: [
                {
                    data: [this.totalSubmissions, this.totalStarted, this.totalStudents - this.totalSubmissions - this.totalStarted],
                    backgroundColor: [
                        "#cadcf8",
                        "#eac16f",
                        "#98e2c8"
                    ],
                    hoverBackgroundColor: [
                        "#cadcf8",
                        "#eac16f",
                        "#98e2c8"
                    ]
                }
            ]
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DoughnutChartComponent.prototype, "totalSubmissions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DoughnutChartComponent.prototype, "totalStudents", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DoughnutChartComponent.prototype, "totalStarted", void 0);
    DoughnutChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doughnut-chart',
            template: __webpack_require__(/*! ./doughnut-chart.component.html */ "./src/app/components/doughnut-chart/doughnut-chart.component.html"),
            styles: [__webpack_require__(/*! ./doughnut-chart.component.css */ "./src/app/components/doughnut-chart/doughnut-chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DoughnutChartComponent);
    return DoughnutChartComponent;
}());



/***/ }),

/***/ "./src/app/components/preferences/preferences-add-file/preferences-add-file.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-add-file/preferences-add-file.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n  width: 100%;\r\n}\r\nlabel{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.form-filed-title{\r\n    min-width: 6em;\r\n}\r\n.form-field{\r\n    margin:1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1hZGQtZmlsZS9wcmVmZXJlbmNlcy1hZGQtZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByZWZlcmVuY2VzL3ByZWZlcmVuY2VzLWFkZC1maWxlL3ByZWZlcmVuY2VzLWFkZC1maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxubGFiZWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uZm9ybS1maWxlZC10aXRsZXtcclxuICAgIG1pbi13aWR0aDogNmVtO1xyXG59XHJcbi5mb3JtLWZpZWxke1xyXG4gICAgbWFyZ2luOjFlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/preferences/preferences-add-file/preferences-add-file.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-add-file/preferences-add-file.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-field\">\n    <label>\n      <div class=\"form-filed-title\" i18n=\"@@DESCRIPTION\">Description:</div>\n      <input type=\"text\" pInputText formControlName=\"description\">\n    </label>\n  </div>\n  <div class=\"form-field\">\n    <label>\n      <div class=\"form-filed-title\" i18n=\"@@ADD_LINK\">Add Link:</div>\n      <input type=\"url\" pInputText formControlName=\"link\">\n    </label>\n  </div>\n  <div>\n    <button type=\"submit\" mat-raised-button color=\"primary\" I18N=\"@@SUBMIT\">Submit</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/preferences/preferences-add-file/preferences-add-file.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-add-file/preferences-add-file.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PreferencesAddFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesAddFileComponent", function() { return PreferencesAddFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PreferencesAddFileComponent = /** @class */ (function () {
    function PreferencesAddFileComponent(fb) {
        this.fb = fb;
        this.value = 'Clear me';
    }
    PreferencesAddFileComponent.prototype.ngOnInit = function () {
        this.formGroup = this.fb.group({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
    };
    PreferencesAddFileComponent.prototype.onSubmit = function () {
        console.log(this.formGroup.value);
    };
    PreferencesAddFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-preferences-add-file",
            template: __webpack_require__(/*! ./preferences-add-file.component.html */ "./src/app/components/preferences/preferences-add-file/preferences-add-file.component.html"),
            styles: [__webpack_require__(/*! ./preferences-add-file.component.css */ "./src/app/components/preferences/preferences-add-file/preferences-add-file.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PreferencesAddFileComponent);
    return PreferencesAddFileComponent;
}());



/***/ }),

/***/ "./src/app/components/preferences/preferences-general/preferences-general.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-general/preferences-general.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtZ2VuZXJhbC9wcmVmZXJlbmNlcy1nZW5lcmFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/preferences/preferences-general/preferences-general.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-general/preferences-general.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  preferences-general works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/preferences/preferences-general/preferences-general.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-general/preferences-general.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PreferencesGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesGeneralComponent", function() { return PreferencesGeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreferencesGeneralComponent = /** @class */ (function () {
    function PreferencesGeneralComponent() {
    }
    PreferencesGeneralComponent.prototype.ngOnInit = function () {
    };
    PreferencesGeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preferences-general',
            template: __webpack_require__(/*! ./preferences-general.component.html */ "./src/app/components/preferences/preferences-general/preferences-general.component.html"),
            styles: [__webpack_require__(/*! ./preferences-general.component.css */ "./src/app/components/preferences/preferences-general/preferences-general.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreferencesGeneralComponent);
    return PreferencesGeneralComponent;
}());



/***/ }),

/***/ "./src/app/components/preferences/preferences-resources-products/preferences-resources-products.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-resources-products/preferences-resources-products.component.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtcmVzb3VyY2VzLXByb2R1Y3RzL3ByZWZlcmVuY2VzLXJlc291cmNlcy1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/preferences/preferences-resources-products/preferences-resources-products.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-resources-products/preferences-resources-products.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  preferences-resources-products works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/preferences/preferences-resources-products/preferences-resources-products.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-resources-products/preferences-resources-products.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PreferencesResourcesProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesResourcesProductsComponent", function() { return PreferencesResourcesProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreferencesResourcesProductsComponent = /** @class */ (function () {
    function PreferencesResourcesProductsComponent() {
    }
    PreferencesResourcesProductsComponent.prototype.ngOnInit = function () {
    };
    PreferencesResourcesProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preferences-resources-products',
            template: __webpack_require__(/*! ./preferences-resources-products.component.html */ "./src/app/components/preferences/preferences-resources-products/preferences-resources-products.component.html"),
            styles: [__webpack_require__(/*! ./preferences-resources-products.component.css */ "./src/app/components/preferences/preferences-resources-products/preferences-resources-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreferencesResourcesProductsComponent);
    return PreferencesResourcesProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/preferences/preferences-resources/preferences-resources.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-resources/preferences-resources.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtcmVzb3VyY2VzL3ByZWZlcmVuY2VzLXJlc291cmNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/preferences/preferences-resources/preferences-resources.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-resources/preferences-resources.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group [color]=\"'accent'\">\n  <mat-tab>\n    <ng-template mat-tab-label i18n=\"@@PRODUCTS\">Products</ng-template>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label i18n=\"@@ESTIMATE\">Estimate</ng-template>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/components/preferences/preferences-resources/preferences-resources.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-resources/preferences-resources.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PreferencesResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesResourcesComponent", function() { return PreferencesResourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreferencesResourcesComponent = /** @class */ (function () {
    function PreferencesResourcesComponent() {
    }
    PreferencesResourcesComponent.prototype.ngOnInit = function () {
    };
    PreferencesResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preferences-resources',
            template: __webpack_require__(/*! ./preferences-resources.component.html */ "./src/app/components/preferences/preferences-resources/preferences-resources.component.html"),
            styles: [__webpack_require__(/*! ./preferences-resources.component.css */ "./src/app/components/preferences/preferences-resources/preferences-resources.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreferencesResourcesComponent);
    return PreferencesResourcesComponent;
}());



/***/ }),

/***/ "./src/app/components/preferences/preferences-shell/preferences-shell.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-shell/preferences-shell.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-expansion-panel-header {\r\n  background-color: #dedee0;\r\n  margin-top: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1zaGVsbC9wcmVmZXJlbmNlcy1zaGVsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByZWZlcmVuY2VzL3ByZWZlcmVuY2VzLXNoZWxsL3ByZWZlcmVuY2VzLXNoZWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZTA7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/preferences/preferences-shell/preferences-shell.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-shell/preferences-shell.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title i18n=\"@@GENERAL\">\n        General\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-preferences-general></app-preferences-general>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title i18n=\"@@ADD_FILE\">\n        Add File\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-preferences-add-file></app-preferences-add-file>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title i18n=\"@@RESOURCES\">\n        Recources\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-preferences-resources></app-preferences-resources>\n  </mat-expansion-panel>\n</mat-accordion>"

/***/ }),

/***/ "./src/app/components/preferences/preferences-shell/preferences-shell.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/preferences/preferences-shell/preferences-shell.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PreferencesShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesShellComponent", function() { return PreferencesShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PreferencesShellComponent = /** @class */ (function () {
    function PreferencesShellComponent(router) {
        this.router = router;
        this.menuItems = [];
    }
    PreferencesShellComponent.prototype.ngOnInit = function () { };
    PreferencesShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-preferences-shell",
            template: __webpack_require__(/*! ./preferences-shell.component.html */ "./src/app/components/preferences/preferences-shell/preferences-shell.component.html"),
            styles: [__webpack_require__(/*! ./preferences-shell.component.css */ "./src/app/components/preferences/preferences-shell/preferences-shell.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PreferencesShellComponent);
    return PreferencesShellComponent;
}());



/***/ }),

/***/ "./src/app/components/publish-dialog/publish-dialog.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/publish-dialog/publish-dialog.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div i18n-dir dir=\"ltr\">\n  <div mat-dialog-title>\n    <div i18n=\"@@PUBLISH\" class=\"dialog-title\">Publish</div>\n    <div>\n      <button mat-icon-button (click)=\"close()\">\n        <mat-icon>clear</mat-icon>\n      </button>\n    </div>\n  </div>\n  <div *ngIf=\"!isAssignmentsSelected; else steps\">\n    <mat-dialog-content>\n      <mat-table #table [dataSource]=\"dataSource\">\n        <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n        <!-- select assignemnt Checkbox Column-->\n        <ng-container matColumnDef=\"select\">\n          <th mat-header-cell *matHeaderCellDef>\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\"\n              [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n            </mat-checkbox>\n          </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n              [checked]=\"selection.isSelected(row)\">\n            </mat-checkbox>\n          </td>\n        </ng-container>\n        <!-- Name Column -->\n\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef i18n=\"@@NAME\">Name</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{ element.name }}</mat-cell>\n        </ng-container>\n\n        <!-- email Column -->\n        <ng-container matColumnDef=\"email\">\n          <mat-header-cell *matHeaderCellDef i18n=\"@@EMAIL\">email</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{ element.email }}</mat-cell>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"budget\">\n          <mat-header-cell *matHeaderCellDef i18n=\"@@BUDGET\">budget</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{\n            element.budget | currency: \"USD\"\n          }}</mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n      </mat-table>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n      <button mat-raised-button color=\"basic\" (click)=\"close()\" i18n=\"@@CANCEL\">\n        Cancel\n      </button>\n      <button mat-raised-button color=\"primary\" (click)=\"handleAfterSelectStudents(true)\" i18n=\"@@NEXT\">\n        Next\n      </button>\n    </mat-dialog-actions>\n  </div>\n  <ng-template #steps>\n    <mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\n      <mat-step label=\"Overview\">\n        <mat-dialog-content></mat-dialog-content>\n        <mat-dialog-actions>\n          <button mat-raised-button color=\"basic\" (click)=\"handleAfterSelectStudents(false)\" i18n=\"@@CANCEL\">\n            Cancel\n          </button>\n          <button mat-raised-button color=\"primary\" matStepperNext i18n=\"@@DEPLOY\">\n            Deploy\n          </button>\n        </mat-dialog-actions>\n      </mat-step>\n      <mat-step label=\"Deployment\">\n        <mat-dialog-content></mat-dialog-content>\n        <mat-dialog-actions>\n          <button mat-raised-button color=\"basic\" matStepperPrevious i18n=\"@@CANCEL\">\n            Cancel\n          </button>\n        </mat-dialog-actions>\n      </mat-step>\n      <mat-step label=\"Configuration\">\n        3\n      </mat-step>\n    </mat-horizontal-stepper>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/components/publish-dialog/publish-dialog.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/publish-dialog/publish-dialog.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/.mat-dialog-title {\n  background-color: #d9d9db;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 0; }\n\n/deep/.mat-dialog-content {\n  margin: 0; }\n\n/deep/.mat-dialog-container {\n  padding: 0;\n  margin: 0;\n  min-height: 15em; }\n\n/deep/.mat-dialog-actions {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 2em;\n  margin: 0; }\n\n.dialog-title {\n  width: 100%;\n  padding: 0 1em; }\n\n#steps {\n  padding: 0em; }\n\n/deep/.mat-table {\n  min-width: 47em; }\n\n.mat-column-select {\n  overflow: initial; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaXNoLWRpYWxvZy9DOlxcV29ya1Byb2plY3RzXFxyZXBvc1xcZWRuYS1mcm9udGVuZFVJL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwdWJsaXNoLWRpYWxvZ1xccHVibGlzaC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsU0FBUyxFQUFBOztBQUVYO0VBQ0UsU0FBUyxFQUFBOztBQUVYO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osU0FBUyxFQUFBOztBQUdYO0VBQ0UsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3B1Ymxpc2gtZGlhbG9nL3B1Ymxpc2gtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiL2RlZXAvLm1hdC1kaWFsb2ctdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZGI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi9kZWVwLy5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4vZGVlcC8ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDE1ZW07XHJcbn1cclxuL2RlZXAvLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuI3N0ZXBzIHtcclxuICBwYWRkaW5nOiAwZW07XHJcbn1cclxuXHJcbi9kZWVwLy5tYXQtdGFibGUge1xyXG4gIG1pbi13aWR0aDogNDdlbTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc2VsZWN0IHtcclxuICBvdmVyZmxvdzogaW5pdGlhbDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/publish-dialog/publish-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/publish-dialog/publish-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: PublishDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishDialogComponent", function() { return PublishDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");





var PublishDialogComponent = /** @class */ (function () {
    function PublishDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ["select", "name", "email", "budget"];
        this.selectedAssignemnts = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, this.selectedAssignemnts);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.data.assignments);
    }
    PublishDialogComponent.prototype.ngOnInit = function () {
        this.isAssignmentsSelected = false;
    };
    PublishDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    PublishDialogComponent.prototype.handleAfterSelectStudents = function (value) {
        this.isAssignmentsSelected = value;
    };
    PublishDialogComponent.prototype.highlight = function (element) {
        element.highlighted = !element.highlighted;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    PublishDialogComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    PublishDialogComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    PublishDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-publish-dialog",
            template: __webpack_require__(/*! ./publish-dialog.component.html */ "./src/app/components/publish-dialog/publish-dialog.component.html"),
            styles: [__webpack_require__(/*! ./publish-dialog.component.scss */ "./src/app/components/publish-dialog/publish-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], PublishDialogComponent);
    return PublishDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/student-shell/student-shell.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/student-shell/student-shell.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudC1zaGVsbC9zdHVkZW50LXNoZWxsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/student-shell/student-shell.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/student-shell/student-shell.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  student-shell works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/student-shell/student-shell.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/student-shell/student-shell.component.ts ***!
  \*********************************************************************/
/*! exports provided: StudentShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentShellComponent", function() { return StudentShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentShellComponent = /** @class */ (function () {
    function StudentShellComponent() {
    }
    StudentShellComponent.prototype.ngOnInit = function () {
    };
    StudentShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-shell',
            template: __webpack_require__(/*! ./student-shell.component.html */ "./src/app/components/student-shell/student-shell.component.html"),
            styles: [__webpack_require__(/*! ./student-shell.component.css */ "./src/app/components/student-shell/student-shell.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentShellComponent);
    return StudentShellComponent;
}());



/***/ }),

/***/ "./src/app/components/submission/submission-shell/submission-shell.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/submission/submission-shell/submission-shell.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-row{\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 1em;\r\n}\r\n\r\n.tab-content{\r\n    background-color: white;\r\n    border-radius: 0.5em;\r\n    margin:1em;\r\n}\r\n\r\n.filter{\r\n    margin:0 1em;\r\n}\r\n\r\n.progress-percentage-wrapper {\r\n    position: relative;\r\n\r\n}\r\n\r\n.progress-percentage {\r\n    position: absolute;\r\n    color: black;\r\n    width: 100%;\r\n    text-align: center;\r\n     top: 25%;\r\n}\r\n\r\n.Flagged{\r\n    background-color:#3de58e;\r\n}\r\n\r\n.Submission{\r\n    background-color: #4786ed;\r\n}\r\n\r\n.OnGoing{\r\n    color: #4786ed;\r\n    border:.1em #4786ed solid;\r\n    background-color: white\r\n}\r\n\r\n.Pending{\r\n    background-color:#efe053;\r\n}\r\n\r\nbutton{\r\n    width:8em;\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJtaXNzaW9uL3N1Ym1pc3Npb24tc2hlbGwvc3VibWlzc2lvbi1zaGVsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtLQUNqQixRQUFRO0FBQ2I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdWJtaXNzaW9uL3N1Ym1pc3Npb24tc2hlbGwvc3VibWlzc2lvbi1zaGVsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLnRhYi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIG1hcmdpbjoxZW07XHJcbn1cclxuLmZpbHRlcntcclxuICAgIG1hcmdpbjowIDFlbTtcclxufVxyXG5cclxuLnByb2dyZXNzLXBlcmNlbnRhZ2Utd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59XHJcbi5wcm9ncmVzcy1wZXJjZW50YWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIHRvcDogMjUlO1xyXG59XHJcblxyXG4uRmxhZ2dlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzNkZTU4ZTtcclxufVxyXG5cclxuLlN1Ym1pc3Npb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc4NmVkO1xyXG59XHJcblxyXG4uT25Hb2luZ3tcclxuICAgIGNvbG9yOiAjNDc4NmVkO1xyXG4gICAgYm9yZGVyOi4xZW0gIzQ3ODZlZCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi5QZW5kaW5ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWZlMDUzO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOjhlbTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/submission/submission-shell/submission-shell.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/submission/submission-shell/submission-shell.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-container\">\n  <div class=\"tab-content\">\n    <div i18n=\"@@SUBMISSIONS\">Submissions</div>\n    <div class=\"filter-row\">\n      <div class=\"filter\"><input type=\"text\" placeholder=\"{{'SEARCH_STUDENT' | translate}}\"\n          (input)=\"searchStudents($event.target.value)\" pInputText></div>\n      <div class=\"filter\">\n        <p-dropdown [options]=\"statuses\" [(ngModel)]=\"selectedStatusFilter\" optionLabel=\"name\"\n          (onChange)=\"filterByStatus($event)\">\n          <ng-template let-item pTemplate=\"selectedItem\">\n            <div>{{item.label | translate}}</div>\n          </ng-template>\n          <ng-template let-item pTemplate=\"item\">\n            <div>{{item.label | translate}}</div>\n          </ng-template>\n\n\n\n        </p-dropdown>\n      </div>\n    </div>\n    <div>\n\n      <mat-table class=\"lessons-table mat-elevation-z8\" [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef i18n=\"@@STUDENT\">Student</mat-header-cell>\n          <mat-cell *matCellDef=\"let student\"><a href=\"#\">{{student.email}}</a></mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"group\">\n          <mat-header-cell *matHeaderCellDef i18n=\"@@GROUP\">Group</mat-header-cell>\n          <mat-cell class=\"description-cell\" *matCellDef=\"let student\">{{student.group}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"submissionTime\">\n          <mat-header-cell *matHeaderCellDef i18n=\"@@TIMESTAMP\">Timestamp</mat-header-cell>\n          <mat-cell class=\"duration-cell\" *matCellDef=\"let student\">{{student.submissionTime}}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"grade\">\n          <mat-header-cell *matHeaderCellDef i18n=\"@@GRADED\">Graded</mat-header-cell>\n          <mat-cell class=\"duration-cell\" *matCellDef=\"let student\">{{student.grade}}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"progressValue\">\n          <mat-header-cell *matHeaderCellDef i18n=\"@@DONE\">% Done</mat-header-cell>\n          <mat-cell class=\"duration-cell\" *matCellDef=\"let student\">\n            <div class=\"progress-percentage-wrapper\">\n              <div class=\"progress-percentage ng-cloak\">{{student.progressValue}}</div>\n              <round-progress [max]=\"100\" [current]=\"student.progressValue\" [radius]=\"20\" [stroke]=\"3\" [rounded]=\"false\"\n                color=\"#4786ed\" [clockwise]=\"true\" [responsive]=\"false\" [duration]=\"1000\"></round-progress>\n            </div>\n\n          </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"isCheated\">\n          <mat-header-cell *matHeaderCellDef i18n=\"@@CHEATING\">Cheating</mat-header-cell>\n          <mat-cell class=\"duration-cell\" *matCellDef=\"let student\">\n            <mat-icon *ngIf=\"!student.isCheated;else cheated\" style=\"color: lawngreen\">check_circle</mat-icon>\n            <ng-template #cheated>\n              <mat-icon style=\"color: red\">error</mat-icon>\n            </ng-template>\n          </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"status\">\n          <mat-header-cell *matHeaderCellDef i18n=\"@@STATUS\">Status</mat-header-cell>\n          <mat-cell class=\"duration-cell\" *matCellDef=\"let student\">\n            <button mat-button [ngClass]=\"student.status\">{{student.status}}\n            </button>\n          </mat-cell>\n        </ng-container>\n\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n        <mat-row *matRowDef=\"let row; columns: displayedColumns\" (click)=\"onRowClicked(row)\"></mat-row>\n\n      </mat-table>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/submission/submission-shell/submission-shell.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/submission/submission-shell/submission-shell.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SubmissionShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionShellComponent", function() { return SubmissionShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var SubmissionShellComponent = /** @class */ (function () {
    function SubmissionShellComponent() {
        this.nameFilter = "";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.assignments);
        this.displayedColumns = ["name", "group", "submissionTime", "status", "grade", "progressValue", "isCheated"];
        this.statuses = [{ name: "Any Status", code: "" }, { name: "Done", code: "Submission" }, { name: "Pending", code: "Pending" }];
    }
    SubmissionShellComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.assignments);
        // this.statuses.forEach(item => item.name = this.localStorageService.getItem("lang") === "en" ? item.enName : item.heName)
    };
    SubmissionShellComponent.prototype.filterByStatus = function (event) {
        this.dataSource.data.filter(function (item) { return item.status === event.value.code; });
    };
    SubmissionShellComponent.prototype.searchStudents = function (value) {
        this.dataSource.filter = value.trim().toLowerCase();
    };
    SubmissionShellComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SubmissionShellComponent.prototype, "assignments", void 0);
    SubmissionShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submission-shell',
            template: __webpack_require__(/*! ./submission-shell.component.html */ "./src/app/components/submission/submission-shell/submission-shell.component.html"),
            styles: [__webpack_require__(/*! ./submission-shell.component.css */ "./src/app/components/submission/submission-shell/submission-shell.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubmissionShellComponent);
    return SubmissionShellComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pipes/translate.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/translate.pipe.ts ***!
  \*****************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/translate.service */ "./src/app/services/translate.service.ts");



var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
    }
    TranslatePipe.prototype.transform = function (key) {
        return this.translate.data[key] || key;
    };
    TranslatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'translate',
            pure: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "./src/app/services/assigments.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/assigments.service.ts ***!
  \************************************************/
/*! exports provided: AssignmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsService", function() { return AssignmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");





var noOfTeachingAssistants = 0;
var noOfProjectGroups = 0;
var totalSpendings = 0;
var AssignmentsService = /** @class */ (function () {
    function AssignmentsService(http, store) {
        this.http = http;
        this.store = store;
    }
    AssignmentsService.prototype.getAssignmentData = function (assignmentGuid) {
        return this.http.get("https://assignmentsmanager.azurewebsites.net/api/assignments/" + assignmentGuid);
    };
    AssignmentsService.prototype.getAllStudentsCount = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(55);
    };
    AssignmentsService.prototype.getNoOfTeachingAssistants = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(noOfTeachingAssistants);
    };
    AssignmentsService.prototype.getNoOfProjectGroups = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(noOfProjectGroups);
    };
    AssignmentsService.prototype.getTotalSpendings = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(totalSpendings);
    };
    AssignmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], AssignmentsService);
    return AssignmentsService;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageService.prototype.clear = function () {
        localStorage.clear;
    };
    LocalStorageService.prototype.getLength = function () {
        return localStorage.length;
    };
    LocalStorageService.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/member.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/member.service.ts ***!
  \********************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");




var MemberService = /** @class */ (function () {
    function MemberService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
        this.membersUrl = "https://assignmentsmanager.azurewebsites.net/api/assignments/" + this.localStorageService.getItem("assignmentGuid") + "/members/";
    }
    MemberService.prototype.getMembers = function () {
        return this.http.get(this.membersUrl);
    };
    MemberService.prototype.getMember = function () {
        return this.http.get(this.membersUrl + this.localStorageService.getItem("memberId"));
    };
    MemberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "./src/app/services/translate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/translate.service.ts ***!
  \***********************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TranslateService = /** @class */ (function () {
    function TranslateService(http) {
        this.http = http;
        this.data = {};
    }
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        return new Promise(function (resolve) {
            var langPath = "assets/i18n/" + (lang || 'en') + ".json";
            _this.http.get(langPath).subscribe(function (translation) {
                _this.data = Object.assign({}, translation || {});
                resolve(_this.data);
            }, function (error) {
                _this.data = {};
                resolve(_this.data);
            });
        });
    };
    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/app/store/app-start/app-start.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/store/app-start/app-start.actions.ts ***!
  \******************************************************/
/*! exports provided: GetCourseName, SetUsername, GetAssignmentInitialData, SetUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCourseName", function() { return GetCourseName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUsername", function() { return SetUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAssignmentInitialData", function() { return GetAssignmentInitialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUser", function() { return SetUser; });
var GetCourseName = /** @class */ (function () {
    function GetCourseName(payload) {
        this.payload = payload;
    }
    GetCourseName.type = "[App Start] Get Course Name";
    return GetCourseName;
}());

var SetUsername = /** @class */ (function () {
    function SetUsername(payload) {
        this.payload = payload;
    }
    SetUsername.type = "[App Start] Get User Name";
    return SetUsername;
}());

var GetAssignmentInitialData = /** @class */ (function () {
    function GetAssignmentInitialData() {
    }
    GetAssignmentInitialData.type = "[App Start] Get Assignment Initial Data";
    return GetAssignmentInitialData;
}());

var SetUser = /** @class */ (function () {
    function SetUser(payload) {
        this.payload = payload;
    }
    SetUser.type = "[App Start] Set User";
    return SetUser;
}());



/***/ }),

/***/ "./src/app/store/app-start/app-start.model.ts":
/*!****************************************************!*\
  !*** ./src/app/store/app-start/app-start.model.ts ***!
  \****************************************************/
/*! exports provided: AppStartStateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStartStateModel", function() { return AppStartStateModel; });
var AppStartStateModel = /** @class */ (function () {
    function AppStartStateModel() {
    }
    return AppStartStateModel;
}());



/***/ }),

/***/ "./src/app/store/app-start/app-start.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/store/app-start/app-start.selectors.ts ***!
  \********************************************************/
/*! exports provided: AppStartStateSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStartStateSelectors", function() { return AppStartStateSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_start_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-start.model */ "./src/app/store/app-start/app-start.model.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_start_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-start.state */ "./src/app/store/app-start/app-start.state.ts");




var AppStartStateSelectors = /** @class */ (function () {
    function AppStartStateSelectors() {
    }
    AppStartStateSelectors.getUsername = function (state) {
        return state.username;
    };
    AppStartStateSelectors.getCourseName = function (state) {
        return state.courseName;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])([_app_start_state__WEBPACK_IMPORTED_MODULE_3__["AppStartState"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_start_model__WEBPACK_IMPORTED_MODULE_1__["AppStartStateModel"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppStartStateSelectors, "getUsername", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])([_app_start_state__WEBPACK_IMPORTED_MODULE_3__["AppStartState"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_start_model__WEBPACK_IMPORTED_MODULE_1__["AppStartStateModel"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppStartStateSelectors, "getCourseName", null);
    return AppStartStateSelectors;
}());



/***/ }),

/***/ "./src/app/store/app-start/app-start.state.ts":
/*!****************************************************!*\
  !*** ./src/app/store/app-start/app-start.state.ts ***!
  \****************************************************/
/*! exports provided: AppStartState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStartState", function() { return AppStartState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_start_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-start.actions */ "./src/app/store/app-start/app-start.actions.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_app_services_assigments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/assigments.service */ "./src/app/services/assigments.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var AppStartState = /** @class */ (function () {
    function AppStartState(localStorageService, assignmentsService, store) {
        this.localStorageService = localStorageService;
        this.assignmentsService = assignmentsService;
        this.store = store;
    }
    AppStartState.prototype.getAssignmentInitialData = function (ctx) {
        var _this = this;
        return this.assignmentsService.getAssignmentData(this.localStorageService.getItem("assignmentGuid")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            console.log(data);
            _this.store.dispatch(new _app_start_actions__WEBPACK_IMPORTED_MODULE_2__["GetCourseName"](data.courseName));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(ctx.patchState({ error: err }));
        }));
    };
    AppStartState.prototype.getCourseName = function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        patchState({
            courseName: payload
        });
    };
    AppStartState.prototype.getUserName = function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        patchState({
            username: payload
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_app_start_actions__WEBPACK_IMPORTED_MODULE_2__["GetAssignmentInitialData"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppStartState.prototype, "getAssignmentInitialData", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_app_start_actions__WEBPACK_IMPORTED_MODULE_2__["GetCourseName"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _app_start_actions__WEBPACK_IMPORTED_MODULE_2__["GetCourseName"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppStartState.prototype, "getCourseName", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_app_start_actions__WEBPACK_IMPORTED_MODULE_2__["SetUsername"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _app_start_actions__WEBPACK_IMPORTED_MODULE_2__["SetUsername"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppStartState.prototype, "getUserName", null);
    AppStartState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: "AppStart",
            defaults: {
                courseName: "",
                username: "",
                error: "",
                userType: null,
                assignmentData: null
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], src_app_services_assigments_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentsService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AppStartState);
    return AppStartState;
}());



/***/ }),

/***/ "./src/app/store/assignments/assignments.actions.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/assignments/assignments.actions.ts ***!
  \**********************************************************/
/*! exports provided: SetMembers, SetNoOfStudents, SetTotalConsumed, SetNoOfTeachingAssistants, SetNoOfProjectGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMembers", function() { return SetMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNoOfStudents", function() { return SetNoOfStudents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTotalConsumed", function() { return SetTotalConsumed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNoOfTeachingAssistants", function() { return SetNoOfTeachingAssistants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNoOfProjectGroups", function() { return SetNoOfProjectGroups; });
var SetMembers = /** @class */ (function () {
    function SetMembers(payload) {
        this.payload = payload;
    }
    SetMembers.type = "[Assignemtns] Set Members";
    return SetMembers;
}());

var SetNoOfStudents = /** @class */ (function () {
    function SetNoOfStudents(payload) {
        this.payload = payload;
    }
    SetNoOfStudents.type = "[Assigments] Set Number Of Students";
    return SetNoOfStudents;
}());

var SetTotalConsumed = /** @class */ (function () {
    function SetTotalConsumed(payload) {
        this.payload = payload;
    }
    SetTotalConsumed.type = "[Assigments] Set Total Consumed";
    return SetTotalConsumed;
}());

var SetNoOfTeachingAssistants = /** @class */ (function () {
    function SetNoOfTeachingAssistants(payload) {
        this.payload = payload;
    }
    SetNoOfTeachingAssistants.type = "[Assigments] Set Number Of Teaching Assistants";
    return SetNoOfTeachingAssistants;
}());

var SetNoOfProjectGroups = /** @class */ (function () {
    function SetNoOfProjectGroups(payload) {
        this.payload = payload;
    }
    SetNoOfProjectGroups.type = "[Assigments] Set Number Of Project Groups";
    return SetNoOfProjectGroups;
}());



/***/ }),

/***/ "./src/app/store/assignments/assignments.model.ts":
/*!********************************************************!*\
  !*** ./src/app/store/assignments/assignments.model.ts ***!
  \********************************************************/
/*! exports provided: AssignmentsStateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsStateModel", function() { return AssignmentsStateModel; });
var AssignmentsStateModel = /** @class */ (function () {
    function AssignmentsStateModel() {
    }
    return AssignmentsStateModel;
}());



/***/ }),

/***/ "./src/app/store/assignments/assignments.selectors.ts":
/*!************************************************************!*\
  !*** ./src/app/store/assignments/assignments.selectors.ts ***!
  \************************************************************/
/*! exports provided: AssignmentsStateSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsStateSelectors", function() { return AssignmentsStateSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _assignments_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignments.model */ "./src/app/store/assignments/assignments.model.ts");
/* harmony import */ var _assignments_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignments.state */ "./src/app/store/assignments/assignments.state.ts");




var AssignmentsStateSelectors = /** @class */ (function () {
    function AssignmentsStateSelectors() {
    }
    AssignmentsStateSelectors.getAssignments = function (state) {
        return state.assignments;
    };
    AssignmentsStateSelectors.getError = function (state) {
        return state.error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_assignments_state__WEBPACK_IMPORTED_MODULE_3__["AssignmentsState"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_assignments_model__WEBPACK_IMPORTED_MODULE_2__["AssignmentsStateModel"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AssignmentsStateSelectors, "getAssignments", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_assignments_state__WEBPACK_IMPORTED_MODULE_3__["AssignmentsState"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_assignments_model__WEBPACK_IMPORTED_MODULE_2__["AssignmentsStateModel"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AssignmentsStateSelectors, "getError", null);
    return AssignmentsStateSelectors;
}());



/***/ }),

/***/ "./src/app/store/assignments/assignments.state.ts":
/*!********************************************************!*\
  !*** ./src/app/store/assignments/assignments.state.ts ***!
  \********************************************************/
/*! exports provided: AssignmentsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsState", function() { return AssignmentsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _assignments_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignments.actions */ "./src/app/store/assignments/assignments.actions.ts");
/* harmony import */ var src_app_services_assigments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/assigments.service */ "./src/app/services/assigments.service.ts");




var AssignmentsState = /** @class */ (function () {
    function AssignmentsState(service) {
        this.service = service;
    }
    AssignmentsState.prototype.loadAssignments = function (ctx, _a) {
        var payload = _a.payload;
        ctx.patchState({
            assignments: payload
        });
    };
    AssignmentsState.prototype.SetNoOfStudents = function (ctx, _a) {
        var payload = _a.payload;
        ctx.patchState({
            noOfStudents: payload
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_assignments_actions__WEBPACK_IMPORTED_MODULE_2__["SetMembers"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _assignments_actions__WEBPACK_IMPORTED_MODULE_2__["SetMembers"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AssignmentsState.prototype, "loadAssignments", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_assignments_actions__WEBPACK_IMPORTED_MODULE_2__["SetNoOfStudents"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _assignments_actions__WEBPACK_IMPORTED_MODULE_2__["SetNoOfStudents"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AssignmentsState.prototype, "SetNoOfStudents", null);
    AssignmentsState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: "assignments",
            defaults: {
                assignments: [],
                error: "",
                noOfProjectGroups: 0,
                noOfStudents: 0,
                noOfTeachingAssistants: 0,
                totalConsumed: 0
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_assigments_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentsService"]])
    ], AssignmentsState);
    return AssignmentsState;
}());



/***/ }),

/***/ "./src/app/store/store-index.ts":
/*!**************************************!*\
  !*** ./src/app/store/store-index.ts ***!
  \**************************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var _app_start_app_start_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-start/app-start.state */ "./src/app/store/app-start/app-start.state.ts");
/* harmony import */ var _assignments_assignments_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignments/assignments.state */ "./src/app/store/assignments/assignments.state.ts");


var AppState = [
    _app_start_app_start_state__WEBPACK_IMPORTED_MODULE_0__["AppStartState"],
    _assignments_assignments_state__WEBPACK_IMPORTED_MODULE_1__["AssignmentsState"]
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\WorkProjects\repos\edna-frontendUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map