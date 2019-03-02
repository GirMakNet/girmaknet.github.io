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

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container \n  *ngSubscribe=\" lessonConfig.shouldUseStandardStyles as isUseStandardStyles\">\n  <mat-sidenav-container class=\"lesson-list-container\">\n    <mat-sidenav [mode]=\"sidenavMode\"\n                [opened]=\"!isSmallScreen\"\n                [fixedInViewport]=\"true\"\n                class=\"lesson-list-sidenav\"\n                #lessonSidenav>\n      <mat-toolbar color=\"primary\">Egghead Material</mat-toolbar>\n      <mat-nav-list>\n        <a mat-list-item\n          *ngFor=\"let lesson of lessons; let i = index\"\n          [routerLink]=\"lesson.path\"\n          routerLinkActive=\"active-lesson\">\n          {{i + 1}} - {{ lesson.data.shortName }}\n        </a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-toolbar color=\"accent\"\n                *ngIf=\"isUseStandardStyles\"> {{ header$ | async }} </mat-toolbar>\n    <div class=\"mat-typography\"\n        [class.lesson-wrapper]=\"isUseStandardStyles\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-container>\n  <button *ngIf=\"isSmallScreen\"\n          mat-mini-fab\n          color=\"primary\"\n          class=\"sidenav-toggle\"\n          [@growInOut]=\"'in'\"\n          (click)=\"lessonSidenav.toggle()\">\n    <mat-icon>view_list</mat-icon>\n  </button>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-nav-list {\n  padding-top: 0; }\n  mat-nav-list a {\n    border-bottom: 1px solid #f3f3f3; }\n  mat-nav-list a.active-lesson {\n      background: rgba(255, 64, 129, 0.6);\n      color: white; }\n  mat-sidenav-container {\n  flex: 1 1 auto;\n  height: 100%; }\n  .lesson-wrapper {\n  padding: 0 16px; }\n  .lesson-list-sidenav {\n  width: 300px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24); }\n  .sidenav-toggle {\n  position: fixed;\n  right: 20px;\n  bottom: 10px;\n  z-index: 4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZTpcXFRlc3RfQW5ndWxhcl82XFwuLm1lXFxlZ2hlYWQtY29tcHNfTmV0ZXNhXzIwMTktMDEtMzExL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjLEVBUWY7RUFURDtJQUdJLGlDQUFnQyxFQUtqQztFQVJIO01BS00sb0NBQXdCO01BQ3hCLGFBQVksRUFDYjtFQUlMO0VBQ0UsZUFBYztFQUNkLGFBQVksRUFDYjtFQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7RUFFRDtFQUNFLGFBQVk7RUFDWiwwQ0FBeUMsRUFDMUM7RUFFRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVk7RUFDWixXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbmF2LWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgJi5hY3RpdmUtbGVzc29uIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoI2ZmNDA4MSwgMC42KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi13cmFwcGVyIHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4ubGVzc29uLWxpc3Qtc2lkZW5hdiB7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbi5zaWRlbmF2LXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgei1pbmRleDogNDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, createRouteMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRouteMap", function() { return createRouteMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_lesson_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/lesson-config.service */ "./src/app/shared/lesson-config.service.ts");
/* harmony import */ var _lessons_lessons_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lessons/lessons.routes */ "./src/app/lessons/lessons.routes.ts");








var AppComponent = /** @class */ (function () {
    function AppComponent(lessonConfig, _router, _activatedRoute, _breakpointObserver) {
        var _this = this;
        this.lessonConfig = lessonConfig;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._breakpointObserver = _breakpointObserver;
        this.lessons = _lessons_lessons_routes__WEBPACK_IMPORTED_MODULE_7__["LESSON_ROUTES"];
        this.routeMap = createRouteMap(_lessons_lessons_routes__WEBPACK_IMPORTED_MODULE_7__["LESSON_ROUTES"]);
        this.header$ = _router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_) { return _this.routeMap[_router.url.replace('/', '')] || 'Unknown Lesson'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ENTER AppComponent ngOnInit()');
        this._breakpointObserver
            .observe(['(max-width: 901px)'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (vvv) { return console.log('AppComponent ngOnInit() : %O', vvv); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["pluck"])('matches'))
            .subscribe(function (m) {
            console.log('AppComponent ngOnInit() (max-width: 901px): %s', m);
            _this.isSmallScreen = m;
        }, function (err) { console.log('AppComponent ngOnInit() error -> %O', err); }, function () { console.log('AppComponent ngOnInit() onComplite'); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('AppComponent  ngOnDestroy() isSmallScreen: %s', this.isSmallScreen);
    };
    Object.defineProperty(AppComponent.prototype, "sidenavMode", {
        get: function () {
            return this.isSmallScreen ? 'over' : 'side';
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-app',
            /* template: `<!-- WRONG use *ngSubscribe or *ngIf in the mat- elements! -->
            <mat-sidenav-container class="lesson-list-container"
                  *ngSubscribe=" lessonConfig.shouldUseStandardStyles as isUseStandardStyles">
          
              <mat-sidenav [mode]="sidenavMode"
                          [opened]="!isSmallScreen"
                          [fixedInViewport]="true"
                          class="lesson-list-sidenav"
                          #lessonSidenav>
          
                <mat-toolbar color="primary">Egghead Material</mat-toolbar>
          
                <mat-nav-list>
                  <a mat-list-item
                    *ngFor="let lesson of lessons; let i = index"
                    [routerLink]="lesson.path"
                    routerLinkActive="active-lesson">
                    {{i + 1}} - {{ lesson.data.shortName }}
                  </a>
                </mat-nav-list>
          
              </mat-sidenav>
          
              <mat-toolbar color="accent"
                          *ngIf="isUseStandardStyles"> {{ header$ | async }} </mat-toolbar>
          
              <div class="mat-typography"
                  [class.lesson-wrapper]="isUseStandardStyles">
          
                <router-outlet></router-outlet>
          
              </div>
          
            </mat-sidenav-container>
          
            <button *ngIf="isSmallScreen"
                    mat-mini-fab
                    color="primary"
                    class="sidenav-toggle"
                    [@growInOut]="'in'"
                    (click)="lessonSidenav.toggle()">
          
              <mat-icon>view_list</mat-icon>
          
            </button>
            `, */
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('growInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            transform: 'scale3d(.3, .3, .3)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("150ms ease-in")
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("150ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            transform: 'scale3d(.3, .3, .3)'
                        }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_lesson_config_service__WEBPACK_IMPORTED_MODULE_6__["LessonConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
    ], AppComponent);
    return AppComponent;
}());

function createRouteMap(routes) {
    return routes.reduce(function (acc, route) {
        var _a;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, acc, (_a = {}, _a[route.path] = route.data.lessonName, _a));
    }, {});
}


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _shared_lesson_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/lesson-config.service */ "./src/app/shared/lesson-config.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lessons_lists_list_lesson_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lessons/lists/list-lesson.module */ "./src/app/lessons/lists/list-lesson.module.ts");
/* harmony import */ var _lessons_icons_icons_lesson_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lessons/icons/icons-lesson.module */ "./src/app/lessons/icons/icons-lesson.module.ts");
/* harmony import */ var _lessons_inputs_inputs_lesson_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lessons/inputs/inputs-lesson.module */ "./src/app/lessons/inputs/inputs-lesson.module.ts");
/* harmony import */ var _lessons_toolbars_toolbar_lesson_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lessons/toolbars/toolbar-lesson.module */ "./src/app/lessons/toolbars/toolbar-lesson.module.ts");
/* harmony import */ var _lessons_loading_loading_lesson_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lessons/loading/loading-lesson.module */ "./src/app/lessons/loading/loading-lesson.module.ts");
/* harmony import */ var _lessons_tabs_tabs_lesson_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lessons/tabs/tabs-lesson.module */ "./src/app/lessons/tabs/tabs-lesson.module.ts");
/* harmony import */ var _lessons_snackbar_snackbar_lesson_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lessons/snackbar/snackbar-lesson.module */ "./src/app/lessons/snackbar/snackbar-lesson.module.ts");
/* harmony import */ var _lessons_datatable_datatable_lesson_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lessons/datatable/datatable-lesson.module */ "./src/app/lessons/datatable/datatable-lesson.module.ts");
/* harmony import */ var _lessons_datepicker_datepicker_lesson_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lessons/datepicker/datepicker-lesson.module */ "./src/app/lessons/datepicker/datepicker-lesson.module.ts");
/* harmony import */ var _lessons_dialogs_dialog_lesson_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lessons/dialogs/dialog-lesson.module */ "./src/app/lessons/dialogs/dialog-lesson.module.ts");
/* harmony import */ var _lessons_theming_theming_lesson_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lessons/theming/theming-lesson.module */ "./src/app/lessons/theming/theming-lesson.module.ts");
/* harmony import */ var _lessons_dialogs_dialog_lesson_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lessons/dialogs/dialog-lesson.component */ "./src/app/lessons/dialogs/dialog-lesson.component.ts");
/* harmony import */ var _forms_template_driven_template_driven_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./forms/template-driven/template-driven.module */ "./src/app/forms/template-driven/template-driven.module.ts");
/* harmony import */ var _forms_model_driven_model_driven_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./forms/model-driven/model-driven.module */ "./src/app/forms/model-driven/model-driven.module.ts");
/* harmony import */ var _ng_subscribe_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ng-subscribe.directive */ "./src/app/ng-subscribe.directive.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _ng_subscribe_directive__WEBPACK_IMPORTED_MODULE_25__["NgSubscribeDirective"],
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["EGGHEAD_MATERIAL_ROUTES"]),
                _app_material_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModule"],
                _lessons_icons_icons_lesson_module__WEBPACK_IMPORTED_MODULE_12__["IconsLessonModule"],
                _lessons_lists_list_lesson_module__WEBPACK_IMPORTED_MODULE_11__["ListLessonModule"],
                _lessons_inputs_inputs_lesson_module__WEBPACK_IMPORTED_MODULE_13__["InputsLessonModule"],
                _lessons_toolbars_toolbar_lesson_module__WEBPACK_IMPORTED_MODULE_14__["ToolbarLessonModule"],
                _lessons_loading_loading_lesson_module__WEBPACK_IMPORTED_MODULE_15__["LoadingLessonModule"],
                _lessons_tabs_tabs_lesson_module__WEBPACK_IMPORTED_MODULE_16__["TabsLessonModule"],
                _lessons_snackbar_snackbar_lesson_module__WEBPACK_IMPORTED_MODULE_17__["SnackbarLessonModule"],
                _lessons_datatable_datatable_lesson_module__WEBPACK_IMPORTED_MODULE_18__["DataTableLessonModule"],
                _lessons_datepicker_datepicker_lesson_module__WEBPACK_IMPORTED_MODULE_19__["DatepickerLessonModule"],
                _lessons_dialogs_dialog_lesson_module__WEBPACK_IMPORTED_MODULE_20__["DialogLessonModule"],
                _lessons_theming_theming_lesson_module__WEBPACK_IMPORTED_MODULE_21__["ThemingLessonModule"],
                _forms_template_driven_template_driven_module__WEBPACK_IMPORTED_MODULE_23__["TemplateDrivenModule"],
                _forms_model_driven_model_driven_module__WEBPACK_IMPORTED_MODULE_24__["ModelDrivenModule"],
            ],
            entryComponents: [_lessons_dialogs_dialog_lesson_component__WEBPACK_IMPORTED_MODULE_22__["DialogComponent"]],
            providers: [_shared_lesson_config_service__WEBPACK_IMPORTED_MODULE_9__["LessonConfigService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: EGGHEAD_MATERIAL_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGGHEAD_MATERIAL_ROUTES", function() { return EGGHEAD_MATERIAL_ROUTES; });
/* harmony import */ var _lessons_lessons_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lessons/lessons.routes */ "./src/app/lessons/lessons.routes.ts");

var EGGHEAD_MATERIAL_ROUTES = _lessons_lessons_routes__WEBPACK_IMPORTED_MODULE_0__["LESSON_ROUTES"].concat([
    { path: '**', redirectTo: _lessons_lessons_routes__WEBPACK_IMPORTED_MODULE_0__["LESSON_ROUTES"][0].path }
]);


/***/ }),

/***/ "./src/app/forms/custom-validators.ts":
/*!********************************************!*\
  !*** ./src/app/forms/custom-validators.ts ***!
  \********************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.forbiddenNameValidator = function (nameRe) {
        return function (control) {
            var forbidden = nameRe.test(control.value);
            return forbidden ? { 'forbiddenName': { value: control.value } } : null;
        };
    };
    CustomValidators.passwordMatchValidator = function (pwdName, confirmName) {
        return function (pwdGroup) {
            var pwdCtrl = pwdGroup.get(pwdName);
            var confirmCtrl = pwdGroup.get(confirmName);
            var isPwdMatch = (pwdCtrl != null && confirmCtrl != null
                && pwdCtrl.value === confirmCtrl.value) ? true : false;
            return (isPwdMatch == false) ?
                { 'passwordMatch': { message: pwdName + " value dismatch " + confirmName + " value" } } : null;
        };
    };
    return CustomValidators;
}());



/***/ }),

/***/ "./src/app/forms/error-state-matcher.ts":
/*!**********************************************!*\
  !*** ./src/app/forms/error-state-matcher.ts ***!
  \**********************************************/
/*! exports provided: ParentErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentErrorStateMatcher", function() { return ParentErrorStateMatcher; });
var ParentErrorStateMatcher = /** @class */ (function () {
    function ParentErrorStateMatcher() {
    }
    ParentErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = !!(form && form.submitted);
        var controlTouched = !!(control && (control.dirty || control.touched));
        var controlInvalid = !!(control && control.invalid);
        var parentInvalid = !!(control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched));
        return isSubmitted || (controlTouched && (controlInvalid || parentInvalid));
    };
    return ParentErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/forms/model-driven/model-driven.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forms/model-driven/model-driven.module.ts ***!
  \***********************************************************/
/*! exports provided: ModelDrivenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelDrivenModule", function() { return ModelDrivenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _signup_form_matcher_signup_form_matcher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-form-matcher/signup-form-matcher.component */ "./src/app/forms/model-driven/signup-form-matcher/signup-form-matcher.component.ts");






var ModelDrivenModule = /** @class */ (function () {
    function ModelDrivenModule() {
    }
    ModelDrivenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_signup_form_matcher_signup_form_matcher_component__WEBPACK_IMPORTED_MODULE_5__["SignupFormMatcherComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"]
            ]
        })
    ], ModelDrivenModule);
    return ModelDrivenModule;
}());



/***/ }),

/***/ "./src/app/forms/model-driven/signup-form-matcher/signup-form-matcher.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/forms/model-driven/signup-form-matcher/signup-form-matcher.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(userFG)\" [formGroup]=\"userFG\">\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>Signup Information</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\" floatLabel=\"auto\">\n            <input  matInput \n                    placeholder=\"Your username\"\n                    formControlName=\"username\"\n            >\n            <mat-error *ngIf=\"username?.hasError('required')\">\n              Username is <strong>required</strong>\n            </mat-error>\n            <mat-error *ngIf=\"username?.hasError('minlength')\">\n              Username must has <strong>3</strong> character minimum!\n            </mat-error>                     \n            <mat-error *ngIf=\"username?.hasError('forbiddenName')\">\n              Username <strong>'{{username?.value}}'</strong> has been forbidden!\n            </mat-error>                     \n          </mat-form-field>\n        </div>\n      </div> \n      <div class=\"row\">\n        <div class=\"col\" formGroupName=\"password\">\n          <mat-form-field class=\"full-width\" floatLabel=\"auto\">\n            <input matInput \n              type=\"password\"\n              placeholder=\"Your password\"\n              formControlName=\"pwd\"\n            >\n            <mat-error *ngIf=\"userFG.get('pwd')?.hasError('required')\">\n              Password is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width\" floatLabel=\"auto\">\n            <input matInput \n              type=\"password\"\n              placeholder=\"Confirm your password\"\n              formControlName=\"confirmPwd\"\n              [errorStateMatcher]=\"parentErrorStateMatcher\"\n            >\n            <mat-error *ngIf=\"confirmPwd?.hasError('required')\">\n              Confirm Password is <strong>required</strong>\n            </mat-error>\n            <mat-error *ngIf=\"!confirmPwd?.hasError('required') && password.hasError('passwordMatch')\">\n              Password <strong>mismatch</strong><br>{{password.value | json}}\n            </mat-error>            \n          </mat-form-field>                    \n        </div>\n      </div>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-flat-button color=\"primary\" [disabled]=\"userFG.invalid\">Submit</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n  <div>\n    <!-- <h5>user: {{ userFG | json }}</h5> -->\n    <h5>form value: {{ userFG.value | json  }}</h5>    \n    <!-- <h5>form valueChanges: {{ f. valueChanges | async | json  }}</h5> -->\n    <h5>userPassword value: {{ password.value | json  }}</h5>\n    <h5>userPassword errors: {{ password.errors | json  }}</h5>\n  </div>\n"

/***/ }),

/***/ "./src/app/forms/model-driven/signup-form-matcher/signup-form-matcher.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/forms/model-driven/signup-form-matcher/signup-form-matcher.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto; }\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0; }\n\n.row {\n  display: flex;\n  flex-direction: row; }\n\n.col {\n  flex: 1;\n  margin-right: 20px; }\n\n.col:last-child {\n  margin-right: 0; }\n\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvbW9kZWwtZHJpdmVuL3NpZ251cC1mb3JtLW1hdGNoZXIvZTpcXFRlc3RfQW5ndWxhcl82XFwuLm1lXFxlZ2hlYWQtY29tcHNfTmV0ZXNhXzIwMTktMDEtMzExL3NyY1xcYXBwXFxmb3Jtc1xcbW9kZWwtZHJpdmVuXFxzaWdudXAtZm9ybS1tYXRjaGVyXFxzaWdudXAtZm9ybS1tYXRjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVyxFQUNaOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGVBQWM7RUFDZCxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsUUFBTztFQUNQLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVIOztFQUVFLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL21vZGVsLWRyaXZlbi9zaWdudXAtZm9ybS1tYXRjaGVyL3NpZ251cC1mb3JtLW1hdGNoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnNoaXBwaW5nLWNhcmQge1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/forms/model-driven/signup-form-matcher/signup-form-matcher.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/forms/model-driven/signup-form-matcher/signup-form-matcher.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SignupFormMatcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormMatcherComponent", function() { return SignupFormMatcherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _error_state_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../error-state-matcher */ "./src/app/forms/error-state-matcher.ts");
/* harmony import */ var _custom_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../custom-validators */ "./src/app/forms/custom-validators.ts");



// import { ErrorStateMatcher } from '@angular/material';


// function pwdMatchValidator(passwordFG: FormGroup) {
//   const pwdFC = passwordFG.get('pwd') as FormControl;
//   const confirmPwdFC = passwordFG.get('confirmPwd') as FormControl;
//   const isPwdMatch = (pwdFC != null && confirmPwdFC != null 
//                         && pwdFC.value === confirmPwdFC.value) ? true : false;
//   return (isPwdMatch == false) ? 
//                         {'passwordMatch': {message: ` [pwd] value dismatch [confirmPwd] value`}} : null;
// }
var SignupFormMatcherComponent = /** @class */ (function () {
    function SignupFormMatcherComponent(fb) {
        this.fb = fb;
        this.parentErrorStateMatcher = new _error_state_matcher__WEBPACK_IMPORTED_MODULE_3__["ParentErrorStateMatcher"]();
    }
    Object.defineProperty(SignupFormMatcherComponent.prototype, "username", {
        // Accessors
        get: function () { return this.userFG.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupFormMatcherComponent.prototype, "password", {
        get: function () { return this.userFG.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupFormMatcherComponent.prototype, "pwd", {
        get: function () { return this.password.get('pwd'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupFormMatcherComponent.prototype, "confirmPwd", {
        get: function () { return this.password.get('confirmPwd'); },
        enumerable: true,
        configurable: true
    });
    SignupFormMatcherComponent.prototype.ngOnInit = function () {
        this.userFG = this.fb.group({
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _custom_validators__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].forbiddenNameValidator(/^bob$/i)
                ]],
            password: this.fb.group({
                pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                confirmPwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }, 
            // { validators: pwdMatchValidator }
            { validators: _custom_validators__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].passwordMatchValidator('pwd', 'confirmPwd') })
        }, { updateOn: 'blur' });
    };
    SignupFormMatcherComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log("form.value: %O form.valid: %s", value, valid);
    };
    SignupFormMatcherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-signup-form-matcher',
            template: __webpack_require__(/*! ./signup-form-matcher.component.html */ "./src/app/forms/model-driven/signup-form-matcher/signup-form-matcher.component.html"),
            styles: [__webpack_require__(/*! ./signup-form-matcher.component.scss */ "./src/app/forms/model-driven/signup-form-matcher/signup-form-matcher.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SignupFormMatcherComponent);
    return SignupFormMatcherComponent;
}());



/***/ }),

/***/ "./src/app/forms/template-driven/forbidden-name.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/forms/template-driven/forbidden-name.directive.ts ***!
  \*******************************************************************/
/*! exports provided: ForbiddenNameDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenNameDirective", function() { return ForbiddenNameDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-validators */ "./src/app/forms/custom-validators.ts");



// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): {[key: string]: any} | null => {
//     const forbidden = nameRe.test(control.value);
//     return forbidden ? {'forbiddenName': {value: control.value}} : null;
//   };
// }

var ForbiddenNameDirective = /** @class */ (function () {
    // 2. @Attribute  <input type="text" ... egmForbiddenName="bob">
    // @Attribute('egmForbiddenName') private forbiddenName: string;       // WRONG --> forbiddenName=undefined in constructor() and ngOnInit() !!!
    // 1. @Input 
    function ForbiddenNameDirective() {
        console.log("ForbiddenNameDirective constructor() [egmForbiddenName]=%O", this.forbiddenName); // forbiddenName=undefined !!!
    }
    ForbiddenNameDirective_1 = ForbiddenNameDirective;
    // 2. @Attribute  <input type="text" ... egmForbiddenName="bob"> --> ok! ONLY
    // constructor(@Attribute('egmForbiddenName') private forbiddenName: string) { 
    //   console.log("ForbiddenNameDirective constructor() [egmForbiddenName]=%O", this.forbiddenName); // OK --> forbiddenName=bob
    // }
    ForbiddenNameDirective.prototype.ngOnInit = function () {
        console.log("ForbiddenNameDirective ngOnInit() [egmForbiddenName]=%O", this.forbiddenName); // OK --> forbiddenName=bob
    };
    ForbiddenNameDirective.prototype.validate = function (control) {
        return this.forbiddenName ? _custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].forbiddenNameValidator(new RegExp("^" + this.forbiddenName + "$", 'i'))(control)
            : null;
    };
    var ForbiddenNameDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('egmForbiddenName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ForbiddenNameDirective.prototype, "forbiddenName", void 0);
    ForbiddenNameDirective = ForbiddenNameDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[egmForbiddenName]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: ForbiddenNameDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForbiddenNameDirective);
    return ForbiddenNameDirective;
}());



/***/ }),

/***/ "./src/app/forms/template-driven/mat-signup-form-matcher/mat-signup-form-matcher.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/forms/template-driven/mat-signup-form-matcher/mat-signup-form-matcher.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto; }\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0; }\n\n.row {\n  display: flex;\n  flex-direction: row; }\n\n.col {\n  flex: 1;\n  margin-right: 20px; }\n\n.col:last-child {\n  margin-right: 0; }\n\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvdGVtcGxhdGUtZHJpdmVuL21hdC1zaWdudXAtZm9ybS1tYXRjaGVyL2U6XFxUZXN0X0FuZ3VsYXJfNlxcLi5tZVxcZWdoZWFkLWNvbXBzX05ldGVzYV8yMDE5LTAxLTMxMS9zcmNcXGFwcFxcZm9ybXNcXHRlbXBsYXRlLWRyaXZlblxcbWF0LXNpZ251cC1mb3JtLW1hdGNoZXJcXG1hdC1zaWdudXAtZm9ybS1tYXRjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVyxFQUNaOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGVBQWM7RUFDZCxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsUUFBTztFQUNQLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVIOztFQUVFLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3RlbXBsYXRlLWRyaXZlbi9tYXQtc2lnbnVwLWZvcm0tbWF0Y2hlci9tYXQtc2lnbnVwLWZvcm0tbWF0Y2hlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuc2hpcHBpbmctY2FyZCB7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgXHJcbiAgLmNvbCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29sOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/forms/template-driven/mat-signup-form-matcher/mat-signup-form-matcher.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/forms/template-driven/mat-signup-form-matcher/mat-signup-form-matcher.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: MatSignupFormMatcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSignupFormMatcherComponent", function() { return MatSignupFormMatcherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_state_matcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error-state-matcher */ "./src/app/forms/error-state-matcher.ts");


// import { ErrorStateMatcher } from '@angular/material';
// export class ParentErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//       const isSubmitted = !!(form && form.submitted);
//       const controlTouched = !!(control && (control.dirty || control.touched));
//       const controlInvalid = !!(control && control.invalid);
//       const parentInvalid = !!(control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched));
//       return isSubmitted || (controlTouched && (controlInvalid || parentInvalid));
//   }
// }

var MatSignupFormMatcherComponent = /** @class */ (function () {
    function MatSignupFormMatcherComponent() {
        this.user = {
            username: '',
            password: {
                pwd: '',
                confirmPwd: ''
            }
        };
        this.parentErrorStateMatcher = new _error_state_matcher__WEBPACK_IMPORTED_MODULE_2__["ParentErrorStateMatcher"]();
    }
    MatSignupFormMatcherComponent.prototype.ngOnInit = function () {
    };
    MatSignupFormMatcherComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log("form.value: %O form.valid: %s", value, valid);
    };
    MatSignupFormMatcherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-mat-signup-form-matcher',
            template: "\n  <form novalidate  #f=\"ngForm\" [ngFormOptions]=\"{updateOn: 'blur'}\" (ngSubmit)=\"onSubmit(f)\">\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>Signup Information</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\" floatLabel=\"auto\">\n            <input  matInput \n                    placeholder=\"Your user name\"\n                    name=\"username\"\n                    ngModel\n                    required\n                    minlength=\"3\" \n                    #userNameCtrl=\"ngModel\"\n                    [egmForbiddenName]=\"'bob'\"\n                    >\n            <!-- <mat-hint align=\"end\">{{userNameCtrl.value?.length}} / 3</mat-hint> -->\n            <mat-error *ngIf=\"userNameCtrl.hasError('required')\">\n              Username is <strong>required</strong>\n            </mat-error>\n            <mat-error *ngIf=\"userNameCtrl.hasError('minlength')\">\n              Username must has <strong>3</strong> character minimum!\n            </mat-error>                     \n            <mat-error *ngIf=\"userNameCtrl.hasError('forbiddenName')\">\n              Username <strong>'{{userNameCtrl.value}}'</strong> has been forbidden!\n            </mat-error>                     \n          </mat-form-field>\n        </div>\n      </div> \n      <div class=\"row\">\n        <div class=\"col\" ngModelGroup=\"password\" #userPassword=\"ngModelGroup\" egmPasswordMatch=\"pwd confirmPwd\">\n          <mat-form-field class=\"full-width\" floatLabel=\"auto\">\n            <input matInput \n              type=\"password\"\n              placeholder=\"Your password\"\n              name=\"pwd\"\n              ngModel\n              required\n              #pwdCtrl=\"ngModel\"\n            >\n            <mat-error *ngIf=\"pwdCtrl.hasError('required')\">\n              Password is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width\" floatLabel=\"auto\">\n            <input matInput \n              type=\"password\"\n              placeholder=\"Confirm your password\"\n              name=\"confirmPwd\"\n              ngModel\n              required\n              #confirmCtrl=\"ngModel\"\n              [errorStateMatcher]=\"parentErrorStateMatcher\"\n            >\n            <mat-error *ngIf=\"confirmCtrl.hasError('required')\">\n              Confirm Password is <strong>required</strong>\n            </mat-error>\n            <mat-error *ngIf=\"!confirmCtrl.hasError('required') && userPassword.hasError('passwordMatch')\">\n              Password <strong>mismatch</strong><br>{{userPassword.value | json}}\n            </mat-error>            \n          </mat-form-field>                    \n        </div>\n      </div>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-flat-button color=\"primary\" [disabled]=\"f.invalid\">Submit</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n  <div>\n    <h5>user: {{ user | json }}</h5>\n    <h5>form value: {{ f.value | json  }}</h5>    \n    <!-- <h5>form valueChanges: {{ f. valueChanges | async | json  }}</h5> -->\n    <h5>userPassword value: {{ userPassword.value | json  }}</h5>\n    <h5>userPassword errors: {{ userPassword.errors | json  }}</h5>\n  </div>  \n  ",
            styles: [__webpack_require__(/*! ./mat-signup-form-matcher.component.scss */ "./src/app/forms/template-driven/mat-signup-form-matcher/mat-signup-form-matcher.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatSignupFormMatcherComponent);
    return MatSignupFormMatcherComponent;
}());



/***/ }),

/***/ "./src/app/forms/template-driven/mat-signup-form/mat-signup-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/forms/template-driven/mat-signup-form/mat-signup-form.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto; }\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0; }\n\n.row {\n  display: flex;\n  flex-direction: row; }\n\n.col {\n  flex: 1;\n  margin-right: 20px; }\n\n.col:last-child {\n  margin-right: 0; }\n\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvdGVtcGxhdGUtZHJpdmVuL21hdC1zaWdudXAtZm9ybS9lOlxcVGVzdF9Bbmd1bGFyXzZcXC4ubWVcXGVnaGVhZC1jb21wc19OZXRlc2FfMjAxOS0wMS0zMTEvc3JjXFxhcHBcXGZvcm1zXFx0ZW1wbGF0ZS1kcml2ZW5cXG1hdC1zaWdudXAtZm9ybVxcbWF0LXNpZ251cC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVyxFQUNaOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGVBQWM7RUFDZCxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsUUFBTztFQUNQLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVIOztFQUVFLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3RlbXBsYXRlLWRyaXZlbi9tYXQtc2lnbnVwLWZvcm0vbWF0LXNpZ251cC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaGlwcGluZy1jYXJkIHtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gIH1cclxuICBcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuICBcclxuICAuY29sIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2w6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbixcclxuLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/forms/template-driven/mat-signup-form/mat-signup-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/forms/template-driven/mat-signup-form/mat-signup-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: MatSignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSignupFormComponent", function() { return MatSignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatSignupFormComponent = /** @class */ (function () {
    function MatSignupFormComponent() {
        this.user = {
            username: '',
            password: {
                pwd: '',
                confirmPwd: ''
            }
        };
    }
    MatSignupFormComponent.prototype.ngOnInit = function () {
    };
    MatSignupFormComponent.prototype.ngAfterViewInit = function () {
        // console.log("form.value: %O", this.form);
        // const fg = this.form.form;
        // const ac = fg.controls['username'];
        // if (ac) {
        //   this.userNameFormCtrl = ac as FormControl;
        // }
        // console.log("userNameFormCtrl: %O", this.userNameFormCtrl);
    };
    MatSignupFormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log("form.value: %O form.valid: %s", value, valid);
    };
    MatSignupFormComponent.prototype.identity = function (in_value) {
        return in_value;
    };
    MatSignupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-mat-signup-form',
            template: "\n  <form novalidate  #f=\"ngForm\" [ngFormOptions]=\"{updateOn: 'blur'}\" (ngSubmit)=\"onSubmit(f)\">\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>Signup Information</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\" floatLabel=\"auto\">\n            <input  matInput \n                    placeholder=\"Your user name\"\n                    name=\"username\"\n                    ngModel\n                    required\n                    minlength=\"3\" \n                    #userNameCtrl=\"ngModel\"\n                    [egmForbiddenName]=\"'bob'\"\n                    >\n            <!-- <mat-hint align=\"end\">{{userNameCtrl.value?.length}} / 3</mat-hint> -->\n            <mat-error *ngIf=\"userNameCtrl.hasError('required')\">\n              Username is <strong>required</strong>\n            </mat-error>\n            <mat-error *ngIf=\"userNameCtrl.hasError('minlength')\">\n              Username must has <strong>3</strong> character minimum!\n            </mat-error>                     \n            <mat-error *ngIf=\"userNameCtrl.hasError('forbiddenName')\">\n              Username <strong>'{{userNameCtrl.value}}'</strong> has been forbidden!\n            </mat-error>                     \n          </mat-form-field>\n        </div>\n      </div> \n      <div class=\"row\">\n        <div class=\"col\" ngModelGroup=\"password\" #userPassword=\"ngModelGroup\" egmPasswordMatch=\"pwd confirmPwd\">\n          <mat-form-field class=\"full-width\" floatLabel=\"auto\">\n            <input matInput \n              type=\"password\"\n              placeholder=\"Your password\"\n              name=\"pwd\"\n              ngModel\n              required\n              #pwdCtrl=\"ngModel\"\n            >\n            <mat-error *ngIf=\"pwdCtrl.hasError('required')\">\n              Password is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width\" floatLabel=\"auto\">\n            <input matInput \n              type=\"password\"\n              placeholder=\"Confirm your password\"\n              name=\"confirmPwd\"\n              ngModel\n              required\n              #confirmCtrl=\"ngModel\"\n            >\n            <mat-error *ngIf=\"confirmCtrl.hasError('required')\">\n              Confirm Password is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <div style=\"font-size: 75%;\" *ngIf=\"!confirmCtrl.hasError('required')\">\n          <mat-error *ngIf=\"userPassword.hasError('passwordMatch') && (pwdCtrl.touched || pwdCtrl.dirty) && (confirmCtrl.touched || confirmCtrl.dirty)\">\n            Password mismatch {{userPassword.errors | json}}<br>\n            Password: '{{pwdCtrl.value}}'<br>\n            Confirm: '{{confirmCtrl.value}}'\n          </mat-error>\n          </div>\n        </div>\n      </div>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-flat-button color=\"primary\" [disabled]=\"f.invalid\">Submit</button>\n      </mat-card-actions>\n      <mat-card-footer>\n        <div class=\"row\">\n          <div class=\"col\">\n            Footer\n          </div>\n        </div>\n      </mat-card-footer>\n    </mat-card>\n  </form>\n  <div>\n    <h5>user: {{ user | json }}</h5>\n    <h5>form value: {{ f.value | json  }}</h5>    \n    <!-- <h5>form valueChanges: {{ f. valueChanges | async | json  }}</h5> -->\n    <h5>userPassword value: {{ userPassword.value | json  }}</h5>\n    <h5>userPassword errors: {{ userPassword.errors | json  }}</h5>\n  </div>  \n  ",
            styles: [__webpack_require__(/*! ./mat-signup-form.component.scss */ "./src/app/forms/template-driven/mat-signup-form/mat-signup-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatSignupFormComponent);
    return MatSignupFormComponent;
}());



/***/ }),

/***/ "./src/app/forms/template-driven/my-addr-form/my-addr-form.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/forms/template-driven/my-addr-form/my-addr-form.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvdGVtcGxhdGUtZHJpdmVuL215LWFkZHItZm9ybS9teS1hZGRyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsY0FBYztDQUNmOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLFFBQVE7RUFDUixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy90ZW1wbGF0ZS1kcml2ZW4vbXktYWRkci1mb3JtL215LWFkZHItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNoaXBwaW5nLWNhcmQge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jb2wge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/forms/template-driven/my-addr-form/my-addr-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/forms/template-driven/my-addr-form/my-addr-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: MyAddrFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAddrFormComponent", function() { return MyAddrFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MyAddrFormComponent = /** @class */ (function () {
    function MyAddrFormComponent(fb) {
        this.fb = fb;
        this.addressForm = this.fb.group({
            company: null,
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address2: null,
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)
                ])
            ],
            shipping: ['free', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.hasUnitNumber = false;
        this.states = [
            { name: 'Alabama', abbreviation: 'AL' },
            { name: 'Alaska', abbreviation: 'AK' },
            { name: 'American Samoa', abbreviation: 'AS' },
            { name: 'Arizona', abbreviation: 'AZ' },
            { name: 'Arkansas', abbreviation: 'AR' },
            { name: 'California', abbreviation: 'CA' },
            { name: 'Colorado', abbreviation: 'CO' },
            { name: 'Connecticut', abbreviation: 'CT' },
            { name: 'Delaware', abbreviation: 'DE' },
            { name: 'District Of Columbia', abbreviation: 'DC' },
            { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
            { name: 'Florida', abbreviation: 'FL' },
            { name: 'Georgia', abbreviation: 'GA' },
            { name: 'Guam', abbreviation: 'GU' },
            { name: 'Hawaii', abbreviation: 'HI' },
            { name: 'Idaho', abbreviation: 'ID' },
            { name: 'Illinois', abbreviation: 'IL' },
            { name: 'Indiana', abbreviation: 'IN' },
            { name: 'Iowa', abbreviation: 'IA' },
            { name: 'Kansas', abbreviation: 'KS' },
            { name: 'Kentucky', abbreviation: 'KY' },
            { name: 'Louisiana', abbreviation: 'LA' },
            { name: 'Maine', abbreviation: 'ME' },
            { name: 'Marshall Islands', abbreviation: 'MH' },
            { name: 'Maryland', abbreviation: 'MD' },
            { name: 'Massachusetts', abbreviation: 'MA' },
            { name: 'Michigan', abbreviation: 'MI' },
            { name: 'Minnesota', abbreviation: 'MN' },
            { name: 'Mississippi', abbreviation: 'MS' },
            { name: 'Missouri', abbreviation: 'MO' },
            { name: 'Montana', abbreviation: 'MT' },
            { name: 'Nebraska', abbreviation: 'NE' },
            { name: 'Nevada', abbreviation: 'NV' },
            { name: 'New Hampshire', abbreviation: 'NH' },
            { name: 'New Jersey', abbreviation: 'NJ' },
            { name: 'New Mexico', abbreviation: 'NM' },
            { name: 'New York', abbreviation: 'NY' },
            { name: 'North Carolina', abbreviation: 'NC' },
            { name: 'North Dakota', abbreviation: 'ND' },
            { name: 'Northern Mariana Islands', abbreviation: 'MP' },
            { name: 'Ohio', abbreviation: 'OH' },
            { name: 'Oklahoma', abbreviation: 'OK' },
            { name: 'Oregon', abbreviation: 'OR' },
            { name: 'Palau', abbreviation: 'PW' },
            { name: 'Pennsylvania', abbreviation: 'PA' },
            { name: 'Puerto Rico', abbreviation: 'PR' },
            { name: 'Rhode Island', abbreviation: 'RI' },
            { name: 'South Carolina', abbreviation: 'SC' },
            { name: 'South Dakota', abbreviation: 'SD' },
            { name: 'Tennessee', abbreviation: 'TN' },
            { name: 'Texas', abbreviation: 'TX' },
            { name: 'Utah', abbreviation: 'UT' },
            { name: 'Vermont', abbreviation: 'VT' },
            { name: 'Virgin Islands', abbreviation: 'VI' },
            { name: 'Virginia', abbreviation: 'VA' },
            { name: 'Washington', abbreviation: 'WA' },
            { name: 'West Virginia', abbreviation: 'WV' },
            { name: 'Wisconsin', abbreviation: 'WI' },
            { name: 'Wyoming', abbreviation: 'WY' }
        ];
    }
    MyAddrFormComponent.prototype.onSubmit = function () {
        alert('Thanks!');
    };
    MyAddrFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-addr-form',
            template: "\n  <form [formGroup]=\"addressForm\" novalidate (ngSubmit)=\"onSubmit()\">\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>Shipping Information</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Company\" formControlName=\"company\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"First name\" formControlName=\"firstName\">\n            <mat-error *ngIf=\"addressForm.controls['firstName'].hasError('required')\">\n              First name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Last name\" formControlName=\"lastName\">\n            <mat-error *ngIf=\"addressForm.controls['lastName'].hasError('required')\">\n              Last name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Address\" formControlName=\"address\"></textarea>\n            <mat-error *ngIf=\"addressForm.controls['address'].hasError('required')\">\n              Address is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"!hasUnitNumber\">\n        <div class=\"col\">\n          <button mat-button type=\"button\" (click)=\"hasUnitNumber = !hasUnitNumber\">\n            + Add C/O, Apt, Suite, Unit\n          </button>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"hasUnitNumber\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"City\" formControlName=\"city\">\n            <mat-error *ngIf=\"addressForm.controls['city'].hasError('required')\">\n              City is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-select placeholder=\"State\" formControlName=\"state\">\n              <mat-option *ngFor=\"let state of states\" [value]=\"state.abbreviation\">\n                {{ state.name }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"addressForm.controls['state'].hasError('required')\">\n              State is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" type=\"number\" formControlName=\"postalCode\">\n            <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-radio-group formControlName=\"shipping\">\n            <mat-radio-button value=\"free\">Free Shipping</mat-radio-button>\n            <mat-radio-button value=\"priority\">Priority Shipping</mat-radio-button>\n            <mat-radio-button value=\"nextday\">Next Day Shipping</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n    </mat-card-actions>\n  </mat-card>\n</form>\n  ",
            styles: [__webpack_require__(/*! ./my-addr-form.component.css */ "./src/app/forms/template-driven/my-addr-form/my-addr-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], MyAddrFormComponent);
    return MyAddrFormComponent;
}());



/***/ }),

/***/ "./src/app/forms/template-driven/password-match.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/forms/template-driven/password-match.directive.ts ***!
  \*******************************************************************/
/*! exports provided: PasswordMatchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordMatchDirective", function() { return PasswordMatchDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-validators */ "./src/app/forms/custom-validators.ts");



// export function passwordMatchValidator(pwdName: string, confirmName: string): ValidatorFn {
//   return (pwdGroup: FormGroup): {[key: string]: any} | null => {
//     const pwdCtrl = pwdGroup.get(pwdName) as FormControl;
//     const confirmCtrl = pwdGroup.get(confirmName) as FormControl;
//     const isPwdMatch = (pwdCtrl != null && confirmCtrl != null 
//                           && pwdCtrl.value === confirmCtrl.value) ? true : false;
//     return (isPwdMatch == false) ? 
//             {'passwordMatch': {message: `${pwdName} value dismatch ${confirmName} value`}} : null;
//   };
// }

var PasswordMatchDirective = /** @class */ (function () {
    function PasswordMatchDirective(pwdAndConfirmNames) {
        this.pwdAndConfirmNames = pwdAndConfirmNames;
        this.validator = null;
        console.log("PasswordMatchDirective constructor() [egmPasswordMatch]=%O", pwdAndConfirmNames);
        var arrPwdAndConfirmNames = pwdAndConfirmNames ? pwdAndConfirmNames.split(' ') : [];
        if (arrPwdAndConfirmNames.length !== 2) {
            return;
        }
        this.validator = _custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].passwordMatchValidator(arrPwdAndConfirmNames[0], arrPwdAndConfirmNames[1]);
    }
    PasswordMatchDirective_1 = PasswordMatchDirective;
    PasswordMatchDirective.prototype.ngOnInit = function () {
        console.log("PasswordMatchDirective ngOnInit() [egmPasswordMatch]=%O", this.pwdAndConfirmNames);
    };
    PasswordMatchDirective.prototype.validate = function (control) {
        if (this.validator != null) {
            return this.validator(control);
        }
        else {
            return { 'passwordMatch': { message: 'ERROR in [egmPasswordMatch] Directive' } };
        }
    };
    var PasswordMatchDirective_1;
    PasswordMatchDirective = PasswordMatchDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[egmPasswordMatch]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: PasswordMatchDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('egmPasswordMatch')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], PasswordMatchDirective);
    return PasswordMatchDirective;
}());



/***/ }),

/***/ "./src/app/forms/template-driven/signup-form/signup-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/forms/template-driven/signup-form/signup-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent() {
        this.user = {
            username: '',
            password: {
                pwd: 'sergey.netesa@gmail.com',
                confirmPwd: ''
            }
        };
    }
    SignupFormComponent.prototype.ngOnInit = function () {
    };
    SignupFormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log("form.value: %O form.valid: %s", value, valid);
    };
    SignupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-form',
            template: "\n<form novalidate (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" [ngFormOptions]=\"{updateOn: 'blur'}\">\n  <label>\n    <span>User name: </span>\n    <input\n      type=\"text\"\n      placeholder=\"Your user name\"\n      name=\"username\"\n      ngModel\n      required\n      minlength=\"3\"\n      #userNameCtrl=\"ngModel\"\n      [egmForbiddenName]=\"'bob'\"\n      >    \n     <div class=\"error\"> \n      Username: {{userNameCtrl.value}} Valid: {{userNameCtrl.valid}}\n    </div> \n    <div *ngIf=\"f.controls.username?.errors?.required && f.controls.username?.touched\" class=\"error\">\n      Username is required!\n    </div>    \n    <div *ngIf=\"userNameCtrl.errors?.minlength && userNameCtrl.touched\" class=\"error\">\n      Username must has 3 character minimum!\n    </div>\n    <div *ngIf=\"userNameCtrl.errors?.forbiddenName && userNameCtrl.touched\" class=\"error\">\n      Username '{{userNameCtrl.value}}' has been forbidden!\n    </div>\n    \n  </label>\n  <div ngModelGroup=\"password\" #userPassword=\"ngModelGroup\" egmPasswordMatch=\"pwd confirmPwd\">\n    <label>\n      <span>Password: </span>\n      <input\n        type=\"password\"\n        placeholder=\"Your password\"\n        name=\"pwd\"\n        ngModel\n        required\n        minlength=\"3\"\n        #pwdCtrl=\"ngModel\"\n        >\n    </label>\n    <label>\n      <span>Confirm password: </span>\n      <input\n        type=\"password\"\n        placeholder=\"Confirm your password\"\n        name=\"confirmPwd\"\n        ngModel\n        required\n        minlength=\"3\"\n        #confirmCtrl=\"ngModel\"\n        >\n    </label>\n    <!-- Password error block WRONG by Indus     \n    <div *ngIf=\"(userPassword.invalid || userPassword.value?.pwd !== userPassword.value?.confirmPwd) && (userPassword.touched)\">       \n      <div *ngIf = \"userPassword.invalid; else nomatch\">\n        Password needs to be more than 8 characters\n      </div>\n      <ng-template #nomatch >\n        Passwords don't match\n      </ng-template>  \n    </div> \n    <h5>userPassword value: {{ userPassword.path | json  }}</h5>  -->\n    <div *ngIf=\"userPassword.errors?.passwordMatch && (pwdCtrl.touched || pwdCtrl.dirty) && (confirmCtrl.touched || confirmCtrl.dirty)\" class=\"error\">\n      Password mismatch {{userPassword.errors | json}}<br>\n      Password: '{{pwdCtrl.value}}'<br>\n      Confirm: '{{confirmCtrl.value}}' \n    </div>\n\n  </div>\n\n  <button type=\"submit\" [disabled]=\"f.invalid\">Sign up</button>\n</form>\n<div>\n  <h5>user: {{ user | json }}</h5>\n  <h5>form value: {{ f.value | json  }}</h5>\n  <!-- <h5>usernameCtrl value: {{ f.controls.username?.errors | json  }}</h5> -->\n  <h5>usernameCtrl value: {{ userNameCtrl.errors | json  }}</h5>\n</div>\n  ",
            styles: ["\n  html, body {\n  margin: 0;\n  padding: 0;\n}\n\nmain { display: block; }\n\nform {margin: 25px;padding: 25px;}\n\nhtml,\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font: 400 16px/1.4 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  color: #444;\n  letter-spacing: 0.5px;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody {\n  background: #f1f2f1;\n  margin: 50px 0 0;\n}\n\n.root {}\n.root h1 {\n  text-align: center;\n}\n\nbutton[type=submit] {\n  width: 100%;\n  height: 54px;\n  padding: 0;\n  font-size: 22px;\n  color: white;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n  background: green;\n  border: 0;\n  border-bottom: 2px solid #d76b60;\n  border-radius: 5px;\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 -2px #d76b60;\n  box-shadow: inset 0 -2px #d76b60;\n}\nbutton[type=submit][disabled] {\n  background: #f0776c;\n}\n* {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.error {\n  font-size: 13px;\n  color: #c7254e;\n  background: #f9f2f4;\n  border-radius: 3px;\n  padding: 15px;\n  margin: -26px 0 15px;\n}\nlabel {\n  display: block;\n}\nspan {\n  display: block;\n  margin: 0 0 10px;\n}\ninput {\n  outline: 0;\n  width: 100%;\n  height: 50px;\n  margin-bottom: 25px;\n  padding: 0 15px 2px;\n  font-size: 17px;\n  background: #fff;\n  border: 2px solid #ebebeb;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 -2px #ebebeb;\n  box-shadow: inset 0 -2px #ebebeb;\n  &:focus {\n    border-color: #62c2e4;\n    outline: none;\n    -webkit-box-shadow: inset 0 -2px #62c2e4;\n    box-shadow: inset 0 -2px #62c2e4;\n  }\n}\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/app/forms/template-driven/template-driven.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/forms/template-driven/template-driven.module.ts ***!
  \*****************************************************************/
/*! exports provided: TemplateDrivenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDrivenModule", function() { return TemplateDrivenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/forms/template-driven/signup-form/signup-form.component.ts");
/* harmony import */ var _forbidden_name_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forbidden-name.directive */ "./src/app/forms/template-driven/forbidden-name.directive.ts");
/* harmony import */ var _password_match_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-match.directive */ "./src/app/forms/template-driven/password-match.directive.ts");
/* harmony import */ var _mat_signup_form_mat_signup_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mat-signup-form/mat-signup-form.component */ "./src/app/forms/template-driven/mat-signup-form/mat-signup-form.component.ts");
/* harmony import */ var _my_addr_form_my_addr_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-addr-form/my-addr-form.component */ "./src/app/forms/template-driven/my-addr-form/my-addr-form.component.ts");
/* harmony import */ var _mat_signup_form_matcher_mat_signup_form_matcher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mat-signup-form-matcher/mat-signup-form-matcher.component */ "./src/app/forms/template-driven/mat-signup-form-matcher/mat-signup-form-matcher.component.ts");











var TemplateDrivenModule = /** @class */ (function () {
    function TemplateDrivenModule() {
    }
    TemplateDrivenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_5__["SignupFormComponent"],
                _forbidden_name_directive__WEBPACK_IMPORTED_MODULE_6__["ForbiddenNameDirective"],
                _password_match_directive__WEBPACK_IMPORTED_MODULE_7__["PasswordMatchDirective"],
                _mat_signup_form_mat_signup_form_component__WEBPACK_IMPORTED_MODULE_8__["MatSignupFormComponent"],
                _my_addr_form_my_addr_form_component__WEBPACK_IMPORTED_MODULE_9__["MyAddrFormComponent"],
                _mat_signup_form_matcher_mat_signup_form_matcher_component__WEBPACK_IMPORTED_MODULE_10__["MatSignupFormMatcherComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"]
            ],
            providers: [
            // { provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true } //WRONG
            ],
            exports: [
                _forbidden_name_directive__WEBPACK_IMPORTED_MODULE_6__["ForbiddenNameDirective"],
                _password_match_directive__WEBPACK_IMPORTED_MODULE_7__["PasswordMatchDirective"]
            ]
        })
    ], TemplateDrivenModule);
    return TemplateDrivenModule;
}());



/***/ }),

/***/ "./src/app/lessons/datatable/datatable-lesson.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/lessons/datatable/datatable-lesson.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4 m-t-24\">\n  <mat-table [dataSource]=\"dataSource\"\n             matSort>\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef\n                       mat-sort-header>\n        Name\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let operator\">\n        {{operator.name}}\n      </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"category\">\n      <mat-header-cell *matHeaderCellDef\n                       mat-sort-header>\n        Category\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let operator\">\n        {{operator.category}}\n      </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"views\">\n      <mat-header-cell *matHeaderCellDef\n                       mat-sort-header>\n        Views\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let operator\">\n        {{operator.views}}\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"['name', 'category', 'views']\">\n\n    </mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: ['name', 'category', 'views']\">\n\n    </mat-row>\n\n  </mat-table>\n  <mat-paginator [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[5,10,25]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/lessons/datatable/datatable-lesson.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/lessons/datatable/datatable-lesson.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlc3NvbnMvZGF0YXRhYmxlL2RhdGF0YWJsZS1sZXNzb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/lessons/datatable/datatable-lesson.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/lessons/datatable/datatable-lesson.component.ts ***!
  \*****************************************************************/
/*! exports provided: DataTableLessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableLessonComponent", function() { return DataTableLessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fake_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-data */ "./src/app/lessons/datatable/fake-data.ts");




var DataTableLessonComponent = /** @class */ (function () {
    function DataTableLessonComponent() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_fake_data__WEBPACK_IMPORTED_MODULE_3__["OPERATOR_INFO"]);
    }
    DataTableLessonComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DataTableLessonComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DataTableLessonComponent.prototype, "sort", void 0);
    DataTableLessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-datatable-lesson',
            template: __webpack_require__(/*! ./datatable-lesson.component.html */ "./src/app/lessons/datatable/datatable-lesson.component.html"),
            styles: [__webpack_require__(/*! ./datatable-lesson.component.scss */ "./src/app/lessons/datatable/datatable-lesson.component.scss")]
        })
    ], DataTableLessonComponent);
    return DataTableLessonComponent;
}());



/***/ }),

/***/ "./src/app/lessons/datatable/datatable-lesson.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/lessons/datatable/datatable-lesson.module.ts ***!
  \**************************************************************/
/*! exports provided: DataTableLessonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableLessonModule", function() { return DataTableLessonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _datatable_lesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datatable-lesson.component */ "./src/app/lessons/datatable/datatable-lesson.component.ts");





var DataTableLessonModule = /** @class */ (function () {
    function DataTableLessonModule() {
    }
    DataTableLessonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_datatable_lesson_component__WEBPACK_IMPORTED_MODULE_4__["DataTableLessonComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"]]
        })
    ], DataTableLessonModule);
    return DataTableLessonModule;
}());



/***/ }),

/***/ "./src/app/lessons/datatable/fake-data.ts":
/*!************************************************!*\
  !*** ./src/app/lessons/datatable/fake-data.ts ***!
  \************************************************/
/*! exports provided: OPERATOR_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_INFO", function() { return OPERATOR_INFO; });
var OPERATOR_INFO = [
    { name: 'combineAll', category: 'combination', views: 233245 },
    { name: 'combineLatest', category: 'combination', views: 422142 },
    { name: 'concat', category: 'combination', views: 965335 },
    { name: 'concatAll', category: 'combination', views: 222112 },
    { name: 'forkJoin', category: 'combination', views: 1232688 },
    { name: 'filter', category: 'filtering', views: 743368 },
    { name: 'take', category: 'filtering', views: 544323 },
    { name: 'skip', category: 'filtering', views: 233799 },
    { name: 'distinctUntilChanged', category: 'filtering', views: 134345 },
    { name: 'takeUntil', category: 'filtering', views: 433579 },
    { name: 'catch', category: 'error handling', views: 766433 },
    { name: 'retryWhen', category: 'error handling', views: 322567 },
    { name: 'interval', category: 'creation', views: 467785 },
    { name: 'of', category: 'creation', views: 774533 },
    { name: 'empty', category: 'creation', views: 646435 },
    { name: 'throw', category: 'creation', views: 233245 },
    { name: 'publish', category: 'multicasting', views: 76543 },
    { name: 'share', category: 'multicasting', views: 43321 },
    { name: 'concatMap', category: 'transformation', views: 32232 },
    { name: 'map', category: 'transformation', views: 2987657 },
    { name: 'mapTo', category: 'transformation', views: 1346754 },
    { name: 'mergeMap', category: 'transformation', views: 855434 },
    { name: 'scan', category: 'transformation', views: 223456 },
    { name: 'switchMap', category: 'transformation', views: 553359 },
    { name: 'pluck', category: 'transformation', views: 985642 },
    { name: 'buffer', category: 'transformation', views: 985324 },
    { name: 'do', category: 'utility', views: 422357 },
    { name: 'delay', category: 'utility', views: 653280 },
    { name: 'let', category: 'utility', views: 874324 },
    { name: 'timeout', category: 'utility', views: 643256 }
];


/***/ }),

/***/ "./src/app/lessons/datepicker/datepicker-lesson.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/lessons/datepicker/datepicker-lesson.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Basic Datepicker</h2>\n\n<mat-form-field>\n  <input matInput\n         [matDatepicker]=\"myDatepicker\">\n  <mat-datepicker-toggle matSuffix\n                         [for]=\"myDatepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #myDatepicker></mat-datepicker>\n</mat-form-field>\n\n<h2>Start Date</h2>\n\n<mat-form-field>\n  <input matInput\n         [matDatepicker]=\"startDateDatepicker\">\n  <mat-datepicker-toggle matSuffix\n                         [for]=\"startDateDatepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #startDateDatepicker\n                  [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n\n<h2>Starting View</h2>\n\n<mat-form-field>\n  <input matInput\n         [matDatepicker]=\"startViewDatepicker\">\n  <mat-datepicker-toggle matSuffix\n                         [for]=\"startViewDatepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #startViewDatepicker\n                  startView=\"year\"\n                  [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n\n\n<h2>Touch UI</h2>\n\n<mat-form-field>\n  <input matInput\n         [matDatepicker]=\"touchUIDatepicker\">\n  <mat-datepicker-toggle matSuffix\n                         [for]=\"touchUIDatepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #touchUIDatepicker\n                  [touchUi]=\"true\"\n                  [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n\n\n<h2>Min / Max</h2>\n\n<mat-form-field>\n  <input matInput\n         [matDatepicker]=\"validationDatepicker\"\n         [min]=\"minDate\"\n         [max]=\"maxDate\">\n  <mat-datepicker-toggle matSuffix\n                         [for]=\"validationDatepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #validationDatepicker\n                  [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/lessons/datepicker/datepicker-lesson.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/lessons/datepicker/datepicker-lesson.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-top: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29ucy9kYXRlcGlja2VyL2U6XFxUZXN0X0FuZ3VsYXJfNlxcLi5tZVxcZWdoZWFkLWNvbXBzX05ldGVzYV8yMDE5LTAxLTMxMS9zcmNcXGFwcFxcbGVzc29uc1xcZGF0ZXBpY2tlclxcZGF0ZXBpY2tlci1sZXNzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9sZXNzb25zL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sZXNzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/lessons/datepicker/datepicker-lesson.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/lessons/datepicker/datepicker-lesson.component.ts ***!
  \*******************************************************************/
/*! exports provided: DatepickerLessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerLessonComponent", function() { return DatepickerLessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");



// import * as moment from 'moment';
var DatepickerLessonComponent = /** @class */ (function () {
    function DatepickerLessonComponent(_platform) {
        this._platform = _platform;
        this.startDate = new Date(2017, 10, 26);
        this.minDate = new Date(2017, 9, 1);
        this.maxDate = new Date(2017, 11, 24);
    }
    Object.defineProperty(DatepickerLessonComponent.prototype, "isMobile", {
        get: function () {
            return this._platform.ANDROID || this._platform.IOS;
        },
        enumerable: true,
        configurable: true
    });
    DatepickerLessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-datepicker-lesson',
            template: __webpack_require__(/*! ./datepicker-lesson.component.html */ "./src/app/lessons/datepicker/datepicker-lesson.component.html"),
            styles: [__webpack_require__(/*! ./datepicker-lesson.component.scss */ "./src/app/lessons/datepicker/datepicker-lesson.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], DatepickerLessonComponent);
    return DatepickerLessonComponent;
}());



/***/ }),

/***/ "./src/app/lessons/datepicker/datepicker-lesson.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/lessons/datepicker/datepicker-lesson.module.ts ***!
  \****************************************************************/
/*! exports provided: DatepickerLessonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerLessonModule", function() { return DatepickerLessonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _datepicker_lesson_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker-lesson.component */ "./src/app/lessons/datepicker/datepicker-lesson.component.ts");




// import { MatMomentDateModule } from '@angular/material-moment-adapter';


var DatepickerLessonModule = /** @class */ (function () {
    function DatepickerLessonModule() {
    }
    DatepickerLessonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_datepicker_lesson_component__WEBPACK_IMPORTED_MODULE_5__["DatepickerLessonComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
                /*
                 * If you wish to use momentjs dates rather than native JS dates
                 * include the below module:
                 */
                // MatMomentDateModule
            ]
        })
    ], DatepickerLessonModule);
    return DatepickerLessonModule;
}());



/***/ }),

/***/ "./src/app/lessons/dialogs/dialog-lesson.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/lessons/dialogs/dialog-lesson.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-top: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29ucy9kaWFsb2dzL2U6XFxUZXN0X0FuZ3VsYXJfNlxcLi5tZVxcZWdoZWFkLWNvbXBzX05ldGVzYV8yMDE5LTAxLTMxMS9zcmNcXGFwcFxcbGVzc29uc1xcZGlhbG9nc1xcZGlhbG9nLWxlc3Nvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xlc3NvbnMvZGlhbG9ncy9kaWFsb2ctbGVzc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/lessons/dialogs/dialog-lesson.component.ts":
/*!************************************************************!*\
  !*** ./src/app/lessons/dialogs/dialog-lesson.component.ts ***!
  \************************************************************/
/*! exports provided: DialogLessonComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogLessonComponent", function() { return DialogLessonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators/mergeMap */ "./node_modules/rxjs-compat/_esm5/operators/mergeMap.js");
/* harmony import */ var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators/filter */ "./node_modules/rxjs-compat/_esm5/operators/filter.js");






var DialogLessonComponent = /** @class */ (function () {
    function DialogLessonComponent(dialog) {
        this.dialog = dialog;
    }
    DialogLessonComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogComponent, {
            data: 'email'
        });
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (r) { return !!r; }), Object(rxjs_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (_) { return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])('network request here'); }))
            .subscribe(console.log);
    };
    DialogLessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-dialog-lesson',
            template: "\n    <button mat-button (click)=\"openDialog()\"> Open Dialog </button>\n  ",
            styles: [__webpack_require__(/*! ./dialog-lesson.component.scss */ "./src/app/lessons/dialogs/dialog-lesson.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DialogLessonComponent);
    return DialogLessonComponent;
}());

// Basic example of dynamic dialog
var DialogComponent = /** @class */ (function () {
    function DialogComponent(itemType) {
        this.itemType = itemType;
    }
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-dialog',
            template: "\n    <h2 mat-dialog-title> Delete {{itemType}} </h2>\n    <mat-dialog-content>\n      Are you sure you want to delete this {{itemType}}?\n    </mat-dialog-content>\n    <mat-dialog-actions>\n      <button mat-button mat-dialog-close> Cancel </button>\n      <button mat-button [mat-dialog-close]=\"true\"> Yes </button>\n    </mat-dialog-actions>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/lessons/dialogs/dialog-lesson.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/lessons/dialogs/dialog-lesson.module.ts ***!
  \*********************************************************/
/*! exports provided: DialogLessonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogLessonModule", function() { return DialogLessonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_dialog_lesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/dialog-lesson.component */ "./src/app/lessons/dialogs/dialog-lesson.component.ts");





var DialogLessonModule = /** @class */ (function () {
    function DialogLessonModule() {
    }
    DialogLessonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_dialogs_dialog_lesson_component__WEBPACK_IMPORTED_MODULE_4__["DialogLessonComponent"], _dialogs_dialog_lesson_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]]
        })
    ], DialogLessonModule);
    return DialogLessonModule;
}());



/***/ }),

/***/ "./src/app/lessons/icons/icons-lesson.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/lessons/icons/icons-lesson.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-top: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29ucy9pY29ucy9lOlxcVGVzdF9Bbmd1bGFyXzZcXC4ubWVcXGVnaGVhZC1jb21wc19OZXRlc2FfMjAxOS0wMS0zMTEvc3JjXFxhcHBcXGxlc3NvbnNcXGljb25zXFxpY29ucy1sZXNzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9sZXNzb25zL2ljb25zL2ljb25zLWxlc3Nvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/lessons/icons/icons-lesson.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/lessons/icons/icons-lesson.component.ts ***!
  \*********************************************************/
/*! exports provided: IconsLessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsLessonComponent", function() { return IconsLessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var IconsLessonComponent = /** @class */ (function () {
    function IconsLessonComponent(_iconRegistry, _sanitizer) {
        this._iconRegistry = _iconRegistry;
        this._sanitizer = _sanitizer;
        _iconRegistry.addSvgIcon('custom-camera', _sanitizer.bypassSecurityTrustResourceUrl('assets/custom-icons/custom-camera.svg'));
    }
    IconsLessonComponent.prototype.ngOnInit = function () { };
    IconsLessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-icons-lesson',
            template: "\n  <h2>Basic Icons</h2>\n  <mat-icon>check_circle</mat-icon>\n  <mat-icon>list</mat-icon>\n  <mat-icon>close</mat-icon>\n\n  <h2>Icon Color</h2>\n  <mat-icon color=\"primary\">check_circle</mat-icon>\n  <mat-icon color=\"accent\">list</mat-icon>\n  <mat-icon color=\"warn\">close</mat-icon>\n\n  <h2>Icon Buttons</h2>\n  <button mat-icon-button>\n    <mat-icon color=\"primary\">check_circle</mat-icon>\n  </button>\n  <button mat-icon-button>\n    <mat-icon color=\"accent\">list</mat-icon>\n  </button>\n  <button mat-icon-button>\n    <mat-icon color=\"warn\">close</mat-icon>\n  </button>\n\n  <h2>Icon FAB</h2>\n  <button mat-fab color=\"primary\">\n    <mat-icon>check_circle</mat-icon>\n  </button>\n  <button mat-fab color=\"accent\">\n    <mat-icon>list</mat-icon>\n  </button>\n  <button mat-fab color=\"warn\">\n    <mat-icon>close</mat-icon>\n  </button>\n\n  <h2>Custom Icons</h2>\n  <button mat-fab color=\"primary\">\n    <mat-icon svgIcon=\"custom-camera\"></mat-icon>\n  </button>\n  ",
            styles: [__webpack_require__(/*! ./icons-lesson.component.scss */ "./src/app/lessons/icons/icons-lesson.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], IconsLessonComponent);
    return IconsLessonComponent;
}());



/***/ }),

/***/ "./src/app/lessons/icons/icons-lesson.module.ts":
/*!******************************************************!*\
  !*** ./src/app/lessons/icons/icons-lesson.module.ts ***!
  \******************************************************/
/*! exports provided: IconsLessonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsLessonModule", function() { return IconsLessonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _icons_lesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons-lesson.component */ "./src/app/lessons/icons/icons-lesson.component.ts");





var IconsLessonModule = /** @class */ (function () {
    function IconsLessonModule() {
    }
    IconsLessonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_icons_lesson_component__WEBPACK_IMPORTED_MODULE_4__["IconsLessonComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
            ]
        })
    ], IconsLessonModule);
    return IconsLessonModule;
}());



/***/ }),

/***/ "./src/app/lessons/inputs/inputs-lesson.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/lessons/inputs/inputs-lesson.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-top: 12px; }\n\nmat-form-field {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29ucy9pbnB1dHMvZTpcXFRlc3RfQW5ndWxhcl82XFwuLm1lXFxlZ2hlYWQtY29tcHNfTmV0ZXNhXzIwMTktMDEtMzExL3NyY1xcYXBwXFxsZXNzb25zXFxpbnB1dHNcXGlucHV0cy1sZXNzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9sZXNzb25zL2lucHV0cy9pbnB1dHMtbGVzc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/lessons/inputs/inputs-lesson.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/lessons/inputs/inputs-lesson.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomErrorStateMatcher, InputsLessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomErrorStateMatcher", function() { return CustomErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsLessonComponent", function() { return InputsLessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomErrorStateMatcher = /** @class */ (function () {
    function CustomErrorStateMatcher() {
    }
    CustomErrorStateMatcher.prototype.isErrorState = function (control, form) {
        // console.log("CustomErrorStateMatcher isErrorState() control: %O form: %O", control, form);
        return !!(control && control.invalid && control.dirty);
    };
    return CustomErrorStateMatcher;
}());

var InputsLessonComponent = /** @class */ (function () {
    function InputsLessonComponent(customErrorStateMatcher) {
        this.customErrorStateMatcher = customErrorStateMatcher;
        this.password = '';
        this.name = '';
    }
    InputsLessonComponent.prototype.ngOnInit = function () { };
    InputsLessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-inputs-lesson',
            template: "\n  <h2>HTML Input</h2>\n  <input type=\"text\" placeholder=\"HTML Input\">\n  \n  <h2>Basic Input Auto</h2>\n  <mat-form-field floatLabel=\"auto\">\n    <input matInput\n          placeholder=\"Hello World\">\n  </mat-form-field>\n\n  <h2>FloatPlaceholder Always</h2><!-- floatPlaceholder=\"never\" \u0443\u0441\u0442\u0430\u0440\u0435\u043B!-->\n  <mat-form-field floatLabel=\"always\">\n    <input matInput\n          placeholder=\"Hello World\">\n  </mat-form-field>\n\n  <h2>FloatPlaceholder Never</h2>\n  <mat-form-field floatLabel=\"never\">\n    <input matInput\n          type=\"email\"\n          placeholder=\"Hello World\">\n  </mat-form-field>\n\n  <h2>With TextArea float label from Module (never)</h2>\n  <mat-form-field>\n    <textarea matInput\n              placeholder=\"Hello World\"></textarea>\n  </mat-form-field>\n\n  <h2>Inputs with hints</h2>\n  <mat-form-field>\n    <input matInput\n          ngModel\n          #demoInput=\"ngModel\"\n          placeholder=\"Hello World\">\n    <mat-hint>{{demoInput.value?.length}}/30</mat-hint>\n  </mat-form-field>\n\n  <h2>Inputs with multiple hints</h2>\n  <mat-form-field>\n    <input matInput\n          placeholder=\"Hello World\">\n    <mat-hint align=\"start\">No special characters allowed.</mat-hint>\n    <mat-hint align=\"end\">{{demoInput.value?.length}}/30</mat-hint>\n  </mat-form-field>\n\n  <h2>Password Input with errors</h2>\n  <mat-form-field hideRequiredMarker>\n    <input matInput\n          [(ngModel)]=\"password\"\n          #passwordInput=\"ngModel\"\n          placeholder=\"Password\"\n          minlength=\"3\"\n          maxlength=\"5\"\n          required>\n    <mat-hint align=\"start\">Password must be atleast 3 characters</mat-hint>\n    <mat-hint align=\"end\">{{password.length}}/16</mat-hint>\n    <mat-error *ngIf=\"passwordInput.errors?.required\">Password is required.</mat-error>\n    <mat-error *ngIf=\"passwordInput.errors?.minlength\">3 characters minimum.</mat-error>\n    <mat-error *ngIf=\"passwordInput.errors?.maxlength\">5 characters minimum.</mat-error> <!-- \u043D\u0435 \u043D\u0443\u0436\u0435\u043D ! -->\n  </mat-form-field>\n  \n  <!-- <h3>Password: {{passwordInput.errors}}</h3> -->\n\n  <h2>Custom Error Strategies</h2>\n  <mat-form-field>\n    <input matInput\n          [(ngModel)]=\"name\"\n          [errorStateMatcher]=\"customErrorStateMatcher\"\n          #nameInput=\"ngModel\"\n          placeholder=\"User name\"\n          minlength=\"6\"\n          maxlength=\"16\"\n          required>\n    <mat-hint align=\"start\">Name must be atleast 6 characters</mat-hint>\n    <mat-hint align=\"end\">{{name.length}}/16</mat-hint>\n    <mat-error *ngIf=\"nameInput.errors?.required\">Name is required.</mat-error>\n    <mat-error *ngIf=\"nameInput.errors?.minlength\">6 characters minimum.</mat-error>\n  </mat-form-field>\n  ",
            providers: [CustomErrorStateMatcher],
            styles: [__webpack_require__(/*! ./inputs-lesson.component.scss */ "./src/app/lessons/inputs/inputs-lesson.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CustomErrorStateMatcher])
    ], InputsLessonComponent);
    return InputsLessonComponent;
}());



/***/ }),

/***/ "./src/app/lessons/inputs/inputs-lesson.module.ts":
/*!********************************************************!*\
  !*** ./src/app/lessons/inputs/inputs-lesson.module.ts ***!
  \********************************************************/
/*! exports provided: InputsLessonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsLessonModule", function() { return InputsLessonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _inputs_lesson_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputs-lesson.component */ "./src/app/lessons/inputs/inputs-lesson.component.ts");






var InputsLessonModule = /** @class */ (function () {
    function InputsLessonModule() {
    }
    InputsLessonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_inputs_lesson_component__WEBPACK_IMPORTED_MODULE_5__["InputsLessonComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"]
            ],
            // If you wish to globally configure placeholder options
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"], useValue: { float: 'never' } }
            ]
        })
    ], InputsLessonModule);
    return InputsLessonModule;
}());



/***/ }),

/***/ "./src/app/lessons/lessons.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/lessons/lessons.routes.ts ***!
  \*******************************************/
/*! exports provided: LESSON_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON_ROUTES", function() { return LESSON_ROUTES; });
/* harmony import */ var _lists_list_lesson_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists/list-lesson.component */ "./src/app/lessons/lists/list-lesson.component.ts");
/* harmony import */ var _icons_icons_lesson_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/icons-lesson.component */ "./src/app/lessons/icons/icons-lesson.component.ts");
/* harmony import */ var _inputs_inputs_lesson_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputs/inputs-lesson.component */ "./src/app/lessons/inputs/inputs-lesson.component.ts");
/* harmony import */ var _toolbars_toolbar_lesson_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbars/toolbar-lesson.component */ "./src/app/lessons/toolbars/toolbar-lesson.component.ts");
/* harmony import */ var _loading_loading_lesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading/loading-lesson.component */ "./src/app/lessons/loading/loading-lesson.component.ts");
/* harmony import */ var _theming_theming_lesson_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theming/theming-lesson.component */ "./src/app/lessons/theming/theming-lesson.component.ts");
/* harmony import */ var _snackbar_snackbar_lesson_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snackbar/snackbar-lesson.component */ "./src/app/lessons/snackbar/snackbar-lesson.component.ts");
/* harmony import */ var _datatable_datatable_lesson_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datatable/datatable-lesson.component */ "./src/app/lessons/datatable/datatable-lesson.component.ts");
/* harmony import */ var _dialogs_dialog_lesson_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialogs/dialog-lesson.component */ "./src/app/lessons/dialogs/dialog-lesson.component.ts");
/* harmony import */ var _datepicker_datepicker_lesson_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datepicker/datepicker-lesson.component */ "./src/app/lessons/datepicker/datepicker-lesson.component.ts");
/* harmony import */ var _tabs_tabs_lesson_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/tabs-lesson.component */ "./src/app/lessons/tabs/tabs-lesson.component.ts");
/* harmony import */ var _tabs_tab_routes_tab_route_one_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tabs/tab-routes/tab-route-one.component */ "./src/app/lessons/tabs/tab-routes/tab-route-one.component.ts");
/* harmony import */ var _tabs_tab_routes_tab_route_two_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs/tab-routes/tab-route-two.component */ "./src/app/lessons/tabs/tab-routes/tab-route-two.component.ts");
/* harmony import */ var _forms_template_driven_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../forms/template-driven/signup-form/signup-form.component */ "./src/app/forms/template-driven/signup-form/signup-form.component.ts");
/* harmony import */ var _forms_template_driven_mat_signup_form_mat_signup_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../forms/template-driven/mat-signup-form/mat-signup-form.component */ "./src/app/forms/template-driven/mat-signup-form/mat-signup-form.component.ts");
/* harmony import */ var _forms_template_driven_my_addr_form_my_addr_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../forms/template-driven/my-addr-form/my-addr-form.component */ "./src/app/forms/template-driven/my-addr-form/my-addr-form.component.ts");
/* harmony import */ var _forms_template_driven_mat_signup_form_matcher_mat_signup_form_matcher_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../forms/template-driven/mat-signup-form-matcher/mat-signup-form-matcher.component */ "./src/app/forms/template-driven/mat-signup-form-matcher/mat-signup-form-matcher.component.ts");
/* harmony import */ var _forms_model_driven_signup_form_matcher_signup_form_matcher_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../forms/model-driven/signup-form-matcher/signup-form-matcher.component */ "./src/app/forms/model-driven/signup-form-matcher/signup-form-matcher.component.ts");


















var LESSON_ROUTES = [
    {
        path: 'icons',
        component: _icons_icons_lesson_component__WEBPACK_IMPORTED_MODULE_1__["IconsLessonComponent"],
        data: {
            shortName: 'Icons',
            lessonName: 'Utilize Material Design Icons for App Icons and Buttons'
        }
    },
    {
        path: 'toolbars',
        component: _toolbars_toolbar_lesson_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarLessonComponent"],
        data: {
            shortName: 'Toolbars',
            lessonName: 'Utilize Material Design Toolbars for Application Headers'
        }
    },
    {
        path: 'inputs',
        component: _inputs_inputs_lesson_component__WEBPACK_IMPORTED_MODULE_2__["InputsLessonComponent"],
        data: {
            shortName: 'Inputs',
            lessonName: 'Manage User Input with Material Design Inputs and AutoComplete'
        }
    },
    {
        path: 'lists',
        component: _lists_list_lesson_component__WEBPACK_IMPORTED_MODULE_0__["ListLessonComponent"],
        data: {
            shortName: 'Lists',
            lessonName: 'Lists'
        }
    },
    {
        path: 'loading',
        component: _loading_loading_lesson_component__WEBPACK_IMPORTED_MODULE_4__["LoadingLessonComponent"],
        data: {
            shortName: 'Loading',
            lessonName: 'Loading Lesson'
        }
    },
    {
        path: 'snackbar',
        component: _snackbar_snackbar_lesson_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarLessonComponent"],
        data: {
            shortName: 'Snackbar',
            lessonName: 'Snackbar Lesson'
        }
    },
    {
        path: 'dialog',
        component: _dialogs_dialog_lesson_component__WEBPACK_IMPORTED_MODULE_8__["DialogLessonComponent"],
        data: {
            shortName: 'Dialog',
            lessonName: 'Dialog Lesson'
        }
    },
    {
        path: 'datepicker',
        component: _datepicker_datepicker_lesson_component__WEBPACK_IMPORTED_MODULE_9__["DatepickerLessonComponent"],
        data: {
            shortName: 'Datepicker',
            lessonName: 'Datepicker Lesson'
        }
    },
    {
        path: 'datatable',
        component: _datatable_datatable_lesson_component__WEBPACK_IMPORTED_MODULE_7__["DataTableLessonComponent"],
        data: {
            shortName: 'Data Table',
            lessonName: 'Data Table Lesson'
        }
    },
    {
        path: 'theming',
        component: _theming_theming_lesson_component__WEBPACK_IMPORTED_MODULE_5__["ThemingLessonComponent"],
        data: {
            shortName: 'Theming',
            lessonName: 'Theming Lesson'
        }
    },
    {
        path: 'tabs',
        component: _tabs_tabs_lesson_component__WEBPACK_IMPORTED_MODULE_10__["TabsLessonComponent"],
        data: {
            shortName: 'Tabs',
            lessonName: 'Tabs Lesson'
        },
        children: [
            {
                path: 'tab-route-one',
                component: _tabs_tab_routes_tab_route_one_component__WEBPACK_IMPORTED_MODULE_11__["TabRouteOneComponent"]
            },
            {
                path: 'tab-route-two',
                component: _tabs_tab_routes_tab_route_two_component__WEBPACK_IMPORTED_MODULE_12__["TabRouteTwoComponent"]
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'tab-route-one'
            }
        ]
    },
    {
        path: 'template-form',
        component: _forms_template_driven_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_13__["SignupFormComponent"],
        data: {
            shortName: 'Template-driven form',
            lessonName: 'Netesa template-driven form'
        }
    },
    {
        path: 'mat-template-form',
        component: _forms_template_driven_mat_signup_form_mat_signup_form_component__WEBPACK_IMPORTED_MODULE_14__["MatSignupFormComponent"],
        data: {
            shortName: 'Material template-driven form',
            lessonName: 'Netesa material template-driven form'
        }
    },
    {
        path: 'mat-template-form-matcher',
        component: _forms_template_driven_mat_signup_form_matcher_mat_signup_form_matcher_component__WEBPACK_IMPORTED_MODULE_16__["MatSignupFormMatcherComponent"],
        data: {
            shortName: 'Material template-driven form with ErrorStateMatcher',
            lessonName: 'Netesa material template-driven form'
        }
    },
    {
        path: 'mat-model-form-matcher',
        component: _forms_model_driven_signup_form_matcher_signup_form_matcher_component__WEBPACK_IMPORTED_MODULE_17__["SignupFormMatcherComponent"],
        data: {
            shortName: 'Model-driven form with ErrorStateMatcher',
            lessonName: 'model-driven form'
        }
    },
    {
        path: 'my-addr-form',
        component: _forms_template_driven_my_addr_form_my_addr_form_component__WEBPACK_IMPORTED_MODULE_15__["MyAddrFormComponent"],
        data: {
            shortName: 'Material MyAddrForm',
            lessonName: 'material MyAddrFormComponent form'
        }
    }
];


/***/ }),

/***/ "./src/app/lessons/lists/list-lesson.component.ts":
/*!********************************************************!*\
  !*** ./src/app/lessons/lists/list-lesson.component.ts ***!
  \********************************************************/
/*! exports provided: ListLessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLessonComponent", function() { return ListLessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListLessonComponent = /** @class */ (function () {
    function ListLessonComponent() {
        this.items = [
            { name: 'Item 1', description: 'This is a description' },
            { name: 'Item 2', description: 'Another description!' }
        ];
    }
    ListLessonComponent.prototype.logChange = function (event) {
        console.log(event);
    };
    ListLessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-list-lesson',
            template: "\n  <mat-list>\n    <h4 matSubheader> List 1 </h4>\n\n    <mat-list-item *ngFor=\"let item of items\">\n      <h4 matLine> {{ item.name }} </h4>\n      <p matLine> {{ item.description }} </p>\n    </mat-list-item>\n\n    <mat-divider> </mat-divider>\n\n    <h4 matSubheader> List 2 </h4>\n\n    <mat-list-item *ngFor=\"let item of items\">\n      <h4 matLine> {{ item.name }} </h4>\n      <p matLine> {{ item.description }} </p>\n    </mat-list-item>\n  </mat-list>\n  \n  <mat-selection-list #selectList>\n    <mat-list-option *ngFor=\"let item of items\"\n                    checkboxPosition=\"left\"\n                    (click)=\"logChange(selectList.selectedOptions.selected)\">\n      {{ item.name }}\n    </mat-list-option>\n  </mat-selection-list>\n  "
        })
    ], ListLessonComponent);
    return ListLessonComponent;
}());



/***/ }),

/***/ "./src/app/lessons/lists/list-lesson.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/lessons/lists/list-lesson.module.ts ***!
  \*****************************************************/
/*! exports provided: ListLessonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLessonModule", function() { return ListLessonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _list_lesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-lesson.component */ "./src/app/lessons/lists/list-lesson.component.ts");





var ListLessonModule = /** @class */ (function () {
    function ListLessonModule() {
    }
    ListLessonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_list_lesson_component__WEBPACK_IMPORTED_MODULE_4__["ListLessonComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]]
        })
    ], ListLessonModule);
    return ListLessonModule;
}());



/***/ }),

/***/ "./src/app/lessons/loading/loading-lesson.component.html":
/*!***************************************************************!*\
  !*** ./src/app/lessons/loading/loading-lesson.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Progress Bars</h2>\n\n<h3>Determinate (Default)</h3>\n<mat-progress-bar [value]=\"loadingPercent\"></mat-progress-bar>\n<mat-progress-bar [value]=\"loadingPercent\"\n                  color=\"accent\">\n</mat-progress-bar>\n<mat-progress-bar [value]=\"loadingPercent\"\n                  color=\"warn\">\n</mat-progress-bar>\n\n<h3>Indeterminate</h3>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\n<h3>Query</h3>\n<mat-progress-bar [mode]=\"queryMode\"\n                  [value]=\"queryValue\"></mat-progress-bar>\n\n<h3>Buffer</h3>\n<mat-progress-bar mode=\"buffer\"\n                  [value]=\"loadingPercent\"\n                  [bufferValue]=\"currentPlayback\">\n</mat-progress-bar>\n\n<h2>Spinners</h2>\n\n<h3>Indeterminate (Default)</h3>\n<mat-spinner></mat-spinner>\n<mat-spinner color=\"accent\"></mat-spinner>\n<mat-spinner color=\"warn\"></mat-spinner>\n\n<h3>Determinate</h3>\n<mat-progress-spinner [value]=\"loadingPercent\">\n</mat-progress-spinner>\n\n<h3>Determinate (fade out)</h3>\n<mat-progress-spinner *ngIf=\"loadingPercent < 100\"\n                      [@fadeOut]=\"'in'\"\n                      [value]=\"loadingPercent\">\n</mat-progress-spinner>\n"

/***/ }),

/***/ "./src/app/lessons/loading/loading-lesson.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/lessons/loading/loading-lesson.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-top: 12px; }\n\nmat-progress-bar {\n  margin-bottom: 20px; }\n\nmat-spinner {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29ucy9sb2FkaW5nL2U6XFxUZXN0X0FuZ3VsYXJfNlxcLi5tZVxcZWdoZWFkLWNvbXBzX05ldGVzYV8yMDE5LTAxLTMxMS9zcmNcXGFwcFxcbGVzc29uc1xcbG9hZGluZ1xcbG9hZGluZy1sZXNzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sZXNzb25zL2xvYWRpbmcvbG9hZGluZy1sZXNzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbm1hdC1wcm9ncmVzcy1iYXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/lessons/loading/loading-lesson.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/lessons/loading/loading-lesson.component.ts ***!
  \*************************************************************/
/*! exports provided: LoadingLessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingLessonComponent", function() { return LoadingLessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs_observable_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/interval */ "./node_modules/rxjs-compat/_esm5/observable/interval.js");
/* harmony import */ var rxjs_observable_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/observable/concat */ "./node_modules/rxjs-compat/_esm5/observable/concat.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LoadingLessonComponent = /** @class */ (function () {
    function LoadingLessonComponent() {
        this.loadingPercent = 0;
        this.currentPlayback = 0;
        this.queryValue = 0;
        this.queryMode = 'query';
    }
    LoadingLessonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingProgress(500).subscribe(function (i) { return (_this.loadingPercent = i); });
        this.loadingProgress(250).subscribe(function (i) { return (_this.currentPlayback = i); });
        // wait 5 seconds then switch mode to determinate, simulating waiting for response then download
        Object(rxjs_observable_concat__WEBPACK_IMPORTED_MODULE_4__["concat"])(Object(rxjs_observable_interval__WEBPACK_IMPORTED_MODULE_3__["interval"])(5000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return (_this.queryMode = 'determinate'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["ignoreElements"])()), this.loadingProgress(500)).subscribe(function (i) { return (_this.queryValue = i); });
    };
    LoadingLessonComponent.prototype.loadingProgress = function (speed) {
        return Object(rxjs_observable_interval__WEBPACK_IMPORTED_MODULE_3__["interval"])(speed).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (i) { return i * 10; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function (i) { return i <= 100; }));
    };
    LoadingLessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-loading-lesson',
            template: __webpack_require__(/*! ./loading-lesson.component.html */ "./src/app/lessons/loading/loading-lesson.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("1s .5s ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0
                        }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./loading-lesson.component.scss */ "./src/app/lessons/loading/loading-lesson.component.scss")]
        })
    ], LoadingLessonComponent);
    return LoadingLessonComponent;
}());



/***/ }),

/***/ "./src/app/lessons/loading/loading-lesson.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/lessons/loading/loading-lesson.module.ts ***!
  \**********************************************************/
/*! exports provided: LoadingLessonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingLessonModule", function() { return LoadingLessonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _loading_lesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-lesson.component */ "./src/app/lessons/loading/loading-lesson.component.ts");





var LoadingLessonModule = /** @class */ (function () {
    function LoadingLessonModule() {
    }
    LoadingLessonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_loading_lesson_component__WEBPACK_IMPORTED_MODULE_4__["LoadingLessonComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]]
        })
    ], LoadingLessonModule);
    return LoadingLessonModule;
}());



/***/ }),

/***/ "./src/app/lessons/snackbar/custom-snackbar-element.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/lessons/snackbar/custom-snackbar-element.component.ts ***!
  \***********************************************************************/
/*! exports provided: CustomSnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSnackBarComponent", function() { return CustomSnackBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var CustomSnackBarComponent = /** @class */ (function () {
    function CustomSnackBarComponent(message) {
        this.message = message;
    }
    CustomSnackBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-custom-snackbar',
            template: "<span>{{message}}</span>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], CustomSnackBarComponent);
    return CustomSnackBarComponent;
}());



/***/ }),

/***/ "./src/app/lessons/snackbar/snackbar-lesson.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/lessons/snackbar/snackbar-lesson.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input #messageInput\n         placeholder=\"Enter Message\"\n         matInput>\n</mat-form-field>\n\n<button mat-raised-button color=\"primary\"\n        (click)=\"openSnackbar(messageInput.value)\">\n  Open Snackbar\n</button>\n"

/***/ }),

/***/ "./src/app/lessons/snackbar/snackbar-lesson.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/lessons/snackbar/snackbar-lesson.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-top: 12px; }\n\nmat-form-field {\n  margin-top: 12px;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29ucy9zbmFja2Jhci9lOlxcVGVzdF9Bbmd1bGFyXzZcXC4ubWVcXGVnaGVhZC1jb21wc19OZXRlc2FfMjAxOS0wMS0zMTEvc3JjXFxhcHBcXGxlc3NvbnNcXHNuYWNrYmFyXFxzbmFja2Jhci1sZXNzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbGVzc29ucy9zbmFja2Jhci9zbmFja2Jhci1sZXNzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/lessons/snackbar/snackbar-lesson.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/lessons/snackbar/snackbar-lesson.component.ts ***!
  \***************************************************************/
/*! exports provided: SnackbarLessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarLessonComponent", function() { return SnackbarLessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custom_snackbar_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-snackbar-element.component */ "./src/app/lessons/snackbar/custom-snackbar-element.component.ts");




var SnackbarLessonComponent = /** @class */ (function () {
    function SnackbarLessonComponent(_snackBar) {
        this._snackBar = _snackBar;
    }
    SnackbarLessonComponent.prototype.openSnackbar = function (message) {
        var snackBar = this._snackBar.openFromComponent(_custom_snackbar_element_component__WEBPACK_IMPORTED_MODULE_3__["CustomSnackBarComponent"], {
            data: message,
            duration: 3000
        });
        snackBar.afterDismissed().subscribe(function (_) {
            console.log('AFTER DISMISS!');
        });
        snackBar.onAction().subscribe(function (_) {
            console.log('AFTER ACTION!');
        });
    };
    SnackbarLessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-snackbar-lesson',
            template: __webpack_require__(/*! ./snackbar-lesson.component.html */ "./src/app/lessons/snackbar/snackbar-lesson.component.html"),
            styles: [__webpack_require__(/*! ./snackbar-lesson.component.scss */ "./src/app/lessons/snackbar/snackbar-lesson.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], SnackbarLessonComponent);
    return SnackbarLessonComponent;
}());



/***/ }),

/***/ "./src/app/lessons/snackbar/snackbar-lesson.module.ts":
/*!************************************************************!*\
  !*** ./src/app/lessons/snackbar/snackbar-lesson.module.ts ***!
  \************************************************************/
/*! exports provided: SnackbarLessonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarLessonModule", function() { return SnackbarLessonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _snackbar_lesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snackbar-lesson.component */ "./src/app/lessons/snackbar/snackbar-lesson.component.ts");
/* harmony import */ var _custom_snackbar_element_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-snackbar-element.component */ "./src/app/lessons/snackbar/custom-snackbar-element.component.ts");






var SnackbarLessonModule = /** @class */ (function () {
    function SnackbarLessonModule() {
    }
    SnackbarLessonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_snackbar_lesson_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarLessonComponent"], _custom_snackbar_element_component__WEBPACK_IMPORTED_MODULE_5__["CustomSnackBarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"]],
            bootstrap: [_custom_snackbar_element_component__WEBPACK_IMPORTED_MODULE_5__["CustomSnackBarComponent"]]
        })
    ], SnackbarLessonModule);
    return SnackbarLessonModule;
}());



/***/ }),

/***/ "./src/app/lessons/tabs/tab-routes/tab-route-one.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/lessons/tabs/tab-routes/tab-route-one.component.ts ***!
  \********************************************************************/
/*! exports provided: TabRouteOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabRouteOneComponent", function() { return TabRouteOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabRouteOneComponent = /** @class */ (function () {
    function TabRouteOneComponent() {
    }
    TabRouteOneComponent.prototype.ngOnInit = function () { };
    TabRouteOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-tab-route-one',
            template: "\n    <h2> First Tab Content </h2>\n    <p>\n    Lorem ipsum dolor sit amet,\n    consectetur adipiscing elit.\n    Donec erat elit, hendrerit quis ex sed, tincidunt imperdiet purus.\n    Ut quis lacinia urna. Nam et ex vitae metus tincidunt tempus.\n    </p>\n "
        })
    ], TabRouteOneComponent);
    return TabRouteOneComponent;
}());



/***/ }),

/***/ "./src/app/lessons/tabs/tab-routes/tab-route-two.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/lessons/tabs/tab-routes/tab-route-two.component.ts ***!
  \********************************************************************/
/*! exports provided: TabRouteTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabRouteTwoComponent", function() { return TabRouteTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabRouteTwoComponent = /** @class */ (function () {
    function TabRouteTwoComponent() {
    }
    TabRouteTwoComponent.prototype.ngOnInit = function () { };
    TabRouteTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-tab-route-two',
            template: "\n    <h2> Second Tab Content </h2>\n    <p>\n    Nam sit amet tempor magna, quis rhoncus erat.\n    Aenean varius risus aliquam risus ullamcorper faucibus ac imperdiet ante.\n    </p>\n  "
        })
    ], TabRouteTwoComponent);
    return TabRouteTwoComponent;
}());



/***/ }),

/***/ "./src/app/lessons/tabs/tabs-lesson.component.html":
/*!*********************************************************!*\
  !*** ./src/app/lessons/tabs/tabs-lesson.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Tabs with routes -->\n<nav mat-tab-nav-bar>\n  <a *ngFor=\"let tab of tabRoutes; let i = index;\"\n     mat-tab-link\n     [routerLink]=\"tab.path\"\n     routerLinkActive\n     #rla=\"routerLinkActive\"\n     [active]=\"rla.isActive\">\n    Tab {{ i + 1 }}\n  </a>\n</nav>\n\n<router-outlet></router-outlet>\n\n<!-- <h2>Basic Tabs</h2>\n<mat-tab-group>\n  <mat-tab label=\"First Tab\"> Some Content </mat-tab>\n  <mat-tab label=\"Second Tab\"> More Content </mat-tab>\n</mat-tab-group>\n\n<h2>Tabs with Templates</h2>\n<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      Custom\n      <strong>Tab</strong>\n    </ng-template>\n    <p> Some Content </p>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon>check_circle</mat-icon>\n    </ng-template>\n    <p> More Content </p>\n  </mat-tab>\n</mat-tab-group> -->\n"

/***/ }),

/***/ "./src/app/lessons/tabs/tabs-lesson.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/lessons/tabs/tabs-lesson.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlc3NvbnMvdGFicy90YWJzLWxlc3Nvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/lessons/tabs/tabs-lesson.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/lessons/tabs/tabs-lesson.component.ts ***!
  \*******************************************************/
/*! exports provided: TabsLessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsLessonComponent", function() { return TabsLessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lessons_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lessons.routes */ "./src/app/lessons/lessons.routes.ts");



var TabsLessonComponent = /** @class */ (function () {
    function TabsLessonComponent() {
        this.tabRoutes = _lessons_routes__WEBPACK_IMPORTED_MODULE_2__["LESSON_ROUTES"].filter(function (r) { return r.path === 'tabs'; })
            .map(function (_a) {
            var children = _a.children;
            return children;
        })
            .reduce(function (acc, curr) { return acc.concat(curr); }, [])
            .filter(function (_a) {
            var path = _a.path;
            return !!path;
        });
    }
    TabsLessonComponent.prototype.ngOnInit = function () { };
    TabsLessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-tabs-lesson',
            template: __webpack_require__(/*! ./tabs-lesson.component.html */ "./src/app/lessons/tabs/tabs-lesson.component.html"),
            styles: [__webpack_require__(/*! ./tabs-lesson.component.scss */ "./src/app/lessons/tabs/tabs-lesson.component.scss")]
        })
    ], TabsLessonComponent);
    return TabsLessonComponent;
}());



/***/ }),

/***/ "./src/app/lessons/tabs/tabs-lesson.module.ts":
/*!****************************************************!*\
  !*** ./src/app/lessons/tabs/tabs-lesson.module.ts ***!
  \****************************************************/
/*! exports provided: TabsLessonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsLessonModule", function() { return TabsLessonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tabs_lesson_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-lesson.component */ "./src/app/lessons/tabs/tabs-lesson.component.ts");
/* harmony import */ var _tab_routes_tab_route_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-routes/tab-route-one.component */ "./src/app/lessons/tabs/tab-routes/tab-route-one.component.ts");
/* harmony import */ var _tab_routes_tab_route_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab-routes/tab-route-two.component */ "./src/app/lessons/tabs/tab-routes/tab-route-two.component.ts");








var TabsLessonModule = /** @class */ (function () {
    function TabsLessonModule() {
    }
    TabsLessonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _tabs_lesson_component__WEBPACK_IMPORTED_MODULE_5__["TabsLessonComponent"],
                _tab_routes_tab_route_one_component__WEBPACK_IMPORTED_MODULE_6__["TabRouteOneComponent"],
                _tab_routes_tab_route_two_component__WEBPACK_IMPORTED_MODULE_7__["TabRouteTwoComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]]
        })
    ], TabsLessonModule);
    return TabsLessonModule;
}());



/***/ }),

/***/ "./src/app/lessons/theming/theming-lesson.component.html":
/*!***************************************************************!*\
  !*** ./src/app/lessons/theming/theming-lesson.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Themable components accept an input of 'primary', 'accent', or 'warn'.\n  These colors correspond to those chosen when you created your app theme.\n  See 'styles.scss' for more details.\n-->\n<mat-toolbar color=\"primary\">\n  Primary\n</mat-toolbar>\n\n<mat-toolbar color=\"accent\">Accent</mat-toolbar>\n<mat-toolbar color=\"warn\">Warn</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/lessons/theming/theming-lesson.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/lessons/theming/theming-lesson.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  margin-top: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29ucy90aGVtaW5nL2U6XFxUZXN0X0FuZ3VsYXJfNlxcLi5tZVxcZWdoZWFkLWNvbXBzX05ldGVzYV8yMDE5LTAxLTMxMS9zcmNcXGFwcFxcbGVzc29uc1xcdGhlbWluZ1xcdGhlbWluZy1sZXNzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9sZXNzb25zL3RoZW1pbmcvdGhlbWluZy1sZXNzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/lessons/theming/theming-lesson.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/lessons/theming/theming-lesson.component.ts ***!
  \*************************************************************/
/*! exports provided: ThemingLessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingLessonComponent", function() { return ThemingLessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThemingLessonComponent = /** @class */ (function () {
    function ThemingLessonComponent() {
    }
    ThemingLessonComponent.prototype.ngOnInit = function () { };
    ThemingLessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-theming-lesson',
            template: __webpack_require__(/*! ./theming-lesson.component.html */ "./src/app/lessons/theming/theming-lesson.component.html"),
            styles: [__webpack_require__(/*! ./theming-lesson.component.scss */ "./src/app/lessons/theming/theming-lesson.component.scss")]
        })
    ], ThemingLessonComponent);
    return ThemingLessonComponent;
}());



/***/ }),

/***/ "./src/app/lessons/theming/theming-lesson.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/lessons/theming/theming-lesson.module.ts ***!
  \**********************************************************/
/*! exports provided: ThemingLessonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingLessonModule", function() { return ThemingLessonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _theming_lesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theming-lesson.component */ "./src/app/lessons/theming/theming-lesson.component.ts");





var ThemingLessonModule = /** @class */ (function () {
    function ThemingLessonModule() {
    }
    ThemingLessonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_theming_lesson_component__WEBPACK_IMPORTED_MODULE_4__["ThemingLessonComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]]
        })
    ], ThemingLessonModule);
    return ThemingLessonModule;
}());



/***/ }),

/***/ "./src/app/lessons/toolbars/toolbar-lesson.component.html":
/*!****************************************************************!*\
  !*** ./src/app/lessons/toolbars/toolbar-lesson.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Angular material offers elevation helper classes within a range of 0-24,\n  corresponding to the projected height. These can also be applied through\n  the mat-elevation(z) mixin, exposed through '~@angular/material/theming'.\n  This also includes transition mixins should you wish to animate interactions\n  like hover, or mouse clicks on custom components.\n\n  For more: https://material.angular.io/guide/elevation\n  Elevation guide: https://material.io/guidelines/material-design/elevation-shadows.html\n-->\n<mat-toolbar color=\"accent\"\n             class=\"primary-header\"\n             [class.mat-elevation-z4]=\"applyShadow\">\n  <span *ngIf=\"popText\">\n    Structuring Angular Apps with Angular Material Components\n  </span>\n</mat-toolbar>\n<mat-toolbar color=\"accent\"\n             class=\"extended-header\">\n  <span *ngIf=\"!popText\">Material Design Toolbars</span>\n</mat-toolbar>\n<div class=\"lesson-content\">\n  <h2>Toolbar Color Options</h2>\n  <mat-toolbar>No Setting</mat-toolbar>\n  <mat-toolbar color=\"primary\">Primary</mat-toolbar>\n  <mat-toolbar color=\"accent\">Accent</mat-toolbar>\n  <mat-toolbar color=\"warn\">Warn</mat-toolbar>\n\n  <h2>Toolbar Rows</h2>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row color=\"primary\">Primary</mat-toolbar-row>\n    <mat-toolbar-row color=\"accent\">Accent</mat-toolbar-row>\n    <mat-toolbar-row color=\"warn\">Warn</mat-toolbar-row>\n  </mat-toolbar>\n</div>\n"

/***/ }),

/***/ "./src/app/lessons/toolbars/toolbar-lesson.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/lessons/toolbars/toolbar-lesson.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lesson-content {\n  min-height: 1000px;\n  padding: 32px; }\n  .lesson-content h2 {\n    margin-top: 26px; }\n  .primary-header {\n  position: fixed;\n  top: 0; }\n  .extended-header {\n  font-size: 34px;\n  padding: 100px 0 48px 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29ucy90b29sYmFycy9lOlxcVGVzdF9Bbmd1bGFyXzZcXC4ubWVcXGVnaGVhZC1jb21wc19OZXRlc2FfMjAxOS0wMS0zMTEvc3JjXFxhcHBcXGxlc3NvbnNcXHRvb2xiYXJzXFx0b29sYmFyLWxlc3Nvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFrQjtFQUNsQixjQUFhLEVBS2Q7RUFQRDtJQUtJLGlCQUFnQixFQUNqQjtFQUdIO0VBQ0UsZ0JBQWU7RUFDZixPQUFNLEVBQ1A7RUFFRDtFQUNFLGdCQUFlO0VBQ2YsMkJBQTBCLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvbGVzc29ucy90b29sYmFycy90b29sYmFyLWxlc3Nvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluIG9yZGVyIHRvIHRlc3Qgc2Nyb2xsaW5nXG4ubGVzc29uLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAxMDAwcHg7XG4gIHBhZGRpbmc6IDMycHg7XG5cbiAgaDIge1xuICAgIG1hcmdpbi10b3A6IDI2cHg7XG4gIH1cbn1cblxuLnByaW1hcnktaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG59XG5cbi5leHRlbmRlZC1oZWFkZXIge1xuICBmb250LXNpemU6IDM0cHg7XG4gIHBhZGRpbmc6IDEwMHB4IDAgNDhweCAzMnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/lessons/toolbars/toolbar-lesson.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/lessons/toolbars/toolbar-lesson.component.ts ***!
  \**************************************************************/
/*! exports provided: SCROLL_CONTAINER, PRIMARY_TEXT_THRESHOLD, PRIMARY_SHADOW_THRESHOLD, ToolbarLessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_CONTAINER", function() { return SCROLL_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_TEXT_THRESHOLD", function() { return PRIMARY_TEXT_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_SHADOW_THRESHOLD", function() { return PRIMARY_SHADOW_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarLessonComponent", function() { return ToolbarLessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _shared_lesson_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/lesson-config.service */ "./src/app/shared/lesson-config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var SCROLL_CONTAINER = '.mat-drawer-content';
var PRIMARY_TEXT_THRESHOLD = 22;
var PRIMARY_SHADOW_THRESHOLD = 78;
var ToolbarLessonComponent = /** @class */ (function () {
    function ToolbarLessonComponent(_lessonConfigService) {
        this._lessonConfigService = _lessonConfigService;
        this._onDestroy = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._lessonConfigService.removeStandardRecordingStyles();
    }
    ToolbarLessonComponent.prototype.ngOnInit = function () {
        var _this = this;
        var container = document.querySelector(SCROLL_CONTAINER);
        Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(container, 'scroll')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
            .subscribe(function (_) { return _this.determineHeader(container.scrollTop); });
    };
    ToolbarLessonComponent.prototype.determineHeader = function (top) {
        if (top >= PRIMARY_TEXT_THRESHOLD) {
            this.popText = true;
        }
        else {
            this.popText = false;
        }
        if (top >= PRIMARY_SHADOW_THRESHOLD) {
            this.applyShadow = true;
        }
        else {
            this.applyShadow = false;
        }
    };
    ToolbarLessonComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._lessonConfigService.addStandardRecordingStyles();
    };
    ToolbarLessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'egm-toolbar-lesson',
            template: __webpack_require__(/*! ./toolbar-lesson.component.html */ "./src/app/lessons/toolbars/toolbar-lesson.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-lesson.component.scss */ "./src/app/lessons/toolbars/toolbar-lesson.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_lesson_config_service__WEBPACK_IMPORTED_MODULE_4__["LessonConfigService"]])
    ], ToolbarLessonComponent);
    return ToolbarLessonComponent;
}());



/***/ }),

/***/ "./src/app/lessons/toolbars/toolbar-lesson.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/lessons/toolbars/toolbar-lesson.module.ts ***!
  \***********************************************************/
/*! exports provided: ToolbarLessonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarLessonModule", function() { return ToolbarLessonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _toolbar_lesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar-lesson.component */ "./src/app/lessons/toolbars/toolbar-lesson.component.ts");





var ToolbarLessonModule = /** @class */ (function () {
    function ToolbarLessonModule() {
    }
    ToolbarLessonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_toolbar_lesson_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarLessonComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]]
        })
    ], ToolbarLessonModule);
    return ToolbarLessonModule;
}());



/***/ }),

/***/ "./src/app/ng-subscribe.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/ng-subscribe.directive.ts ***!
  \*******************************************/
/*! exports provided: NgSubscribeContext, NgSubscribeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSubscribeContext", function() { return NgSubscribeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSubscribeDirective", function() { return NgSubscribeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var NgSubscribeContext = /** @class */ (function () {
    function NgSubscribeContext() {
        this.$implicit = null;
        this.ngSubscribe = null;
    }
    return NgSubscribeContext;
}());

var NgSubscribeDirective = /** @class */ (function () {
    function NgSubscribeDirective(viewContainer, cdr, templateRef) {
        this.viewContainer = viewContainer;
        this.cdr = cdr;
        this.templateRef = templateRef;
        this.context = new NgSubscribeContext();
    }
    Object.defineProperty(NgSubscribeDirective.prototype, "ngSubscribe", {
        set: function (inputObservable) {
            var _this = this;
            if (this.observable !== inputObservable) {
                this.observable = inputObservable;
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
                this.subscription = this.observable.subscribe(function (value) {
                    // this.context.$implicit = value;
                    _this.context.ngSubscribe = value;
                    _this.cdr.markForCheck();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    NgSubscribeDirective.prototype.ngOnInit = function () {
        this.viewContainer.createEmbeddedView(this.templateRef, this.context);
    };
    NgSubscribeDirective.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]])
    ], NgSubscribeDirective.prototype, "ngSubscribe", null);
    NgSubscribeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[ngSubscribe]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], NgSubscribeDirective);
    return NgSubscribeDirective;
}());



/***/ }),

/***/ "./src/app/shared/lesson-config.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/lesson-config.service.ts ***!
  \*************************************************/
/*! exports provided: LessonConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonConfigService", function() { return LessonConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var LessonConfigService = /** @class */ (function () {
    function LessonConfigService() {
        this.useStandardRecordingStyles = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
    }
    LessonConfigService.prototype.removeStandardRecordingStyles = function () {
        this.useStandardRecordingStyles.next(false);
    };
    LessonConfigService.prototype.addStandardRecordingStyles = function () {
        this.useStandardRecordingStyles.next(true);
    };
    Object.defineProperty(LessonConfigService.prototype, "shouldUseStandardStyles", {
        get: function () {
            return this.useStandardRecordingStyles.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LessonConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LessonConfigService);
    return LessonConfigService;
}());



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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\Test_Angular_6\..me\eghead-comps_Netesa_2019-01-311\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map