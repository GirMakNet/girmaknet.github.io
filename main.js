(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./books/books.module": [
		"./src/app/books/books.module.ts",
		"books-books-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _core_containers_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/containers/not-found-page.component */ "./src/app/core/containers/not-found-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    {
        path: 'books',
        loadChildren: './books/books.module#BooksModule',
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
    { path: '**', component: _core_containers_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _core_containers_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/containers/app.component */ "./src/app/core/containers/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @datorama/akita-ngdevtools */ "./node_modules/@datorama/akita-ngdevtools/fesm5/datorama-akita-ngdevtools.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_9__["AkitaNgDevtools"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot()
            ],
            bootstrap: [_core_containers_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_auth_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/auth.query */ "./src/app/auth/state/auth.query.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authQuery, router) {
        this.authQuery = authQuery;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authQuery.isLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate(['/login']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(isLoggedIn);
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_state_auth_query__WEBPACK_IMPORTED_MODULE_4__["AuthQuery"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/login-page.component */ "./src/app/auth/containers/login-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{ path: 'login', component: _containers_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] }];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: COMPONENTS, AuthModule, RootAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootAuthModule", function() { return RootAuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _containers_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/login-page.component */ "./src/app/auth/containers/login-page.component.ts");
/* harmony import */ var _components_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login-form.component */ "./src/app/auth/components/login-form.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material */ "./src/app/material/index.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _state_auth_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/auth.query */ "./src/app/auth/state/auth.query.ts");
/* harmony import */ var _state_auth_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state/auth.store */ "./src/app/auth/state/auth.store.ts");
/* harmony import */ var _state_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state/auth.service */ "./src/app/auth/state/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var COMPONENTS = [_containers_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"], _components_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"]];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.forRoot = function () {
        return {
            ngModule: RootAuthModule,
            providers: [
                _state_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                _state_auth_query__WEBPACK_IMPORTED_MODULE_8__["AuthQuery"],
                _state_auth_store__WEBPACK_IMPORTED_MODULE_9__["AuthStore"]
            ]
        };
    };
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: COMPONENTS,
            exports: COMPONENTS
        })
    ], AuthModule);
    return AuthModule;
}());

var RootAuthModule = /** @class */ (function () {
    function RootAuthModule() {
    }
    RootAuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [AuthModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"]]
        })
    ], RootAuthModule);
    return RootAuthModule;
}());



/***/ }),

/***/ "./src/app/auth/components/login-form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/components/login-form.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent() {
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    Object.defineProperty(LoginFormComponent.prototype, "pending", {
        set: function (isPending) {
            if (isPending) {
                this.form.disable();
            }
            else {
                this.form.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.submitted.emit(this.form.value);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LoginFormComponent.prototype, "pending", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoginFormComponent.prototype, "errorMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "submitted", void 0);
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-login-form',
            template: "\n    <mat-card>\n      <mat-card-title>Login</mat-card-title>\n      <mat-card-content>\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n          <p>\n            <mat-form-field>\n              <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"username\">\n            </mat-form-field>\n          </p>\n\n          <p>\n            <mat-form-field>\n              <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n            </mat-form-field>\n          </p>\n\n          <p *ngIf=\"errorMessage\" class=\"loginError\">\n            {{ errorMessage }}\n          </p>\n\n          <p class=\"loginButtons\">\n            <button type=\"submit\" mat-button>Login</button>\n          </p>\n\n        </form>\n      </mat-card-content>\n    </mat-card>\n  ",
            styles: [
                "\n      :host {\n        display: flex;\n        justify-content: center;\n        margin: 72px 0;\n      }\n\n      .mat-form-field {\n        width: 100%;\n        min-width: 300px;\n      }\n\n      mat-card-title,\n      mat-card-content {\n        display: flex;\n        justify-content: center;\n      }\n\n      .loginError {\n        padding: 16px;\n        width: 300px;\n        color: white;\n        background-color: red;\n      }\n\n      .loginButtons {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-end;\n      }\n    ",
            ],
        }),
        __metadata("design:paramtypes", [])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/login-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/containers/login-page.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/auth.service */ "./src/app/auth/state/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authService) {
        this.authService = authService;
    }
    LoginPageComponent.prototype.onSubmit = function (creds) {
        this.authService.login(creds).subscribe();
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-login-page',
            template: "\n    <bc-login-form\n      (submitted)=\"onSubmit($event)\">\n    </bc-login-form>\n  "
        }),
        __metadata("design:paramtypes", [_state_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/auth/state/auth.query.ts":
/*!******************************************!*\
  !*** ./src/app/auth/state/auth.query.ts ***!
  \******************************************/
/*! exports provided: AuthQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthQuery", function() { return AuthQuery; });
/* harmony import */ var _auth_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.store */ "./src/app/auth/state/auth.store.ts");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthQuery = /** @class */ (function (_super) {
    __extends(AuthQuery, _super);
    function AuthQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.isLoggedIn$ = _this.select(function (state) { return Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(state.user); });
        return _this;
    }
    AuthQuery = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_store__WEBPACK_IMPORTED_MODULE_0__["AuthStore"]])
    ], AuthQuery);
    return AuthQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Query"]));



/***/ }),

/***/ "./src/app/auth/state/auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/state/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.store */ "./src/app/auth/state/auth.store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(authStore, router) {
        this.authStore = authStore;
        this.router = router;
    }
    AuthService.prototype.login = function (creds) {
        var _this = this;
        return this.callServer(creds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            _this.authStore.login(user);
            _this.router.navigate(['/']);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error); }));
    };
    AuthService.prototype.logout = function () {
        this.authStore.logout();
        this.router.navigate(['/login']);
    };
    /**
     *
     *
     * Simulate server call
     */
    AuthService.prototype.callServer = function (_a) {
        var username = _a.username, password = _a.password;
        if (username !== 'test') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Invalid username or password');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ name: 'User' });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/state/auth.store.ts":
/*!******************************************!*\
  !*** ./src/app/auth/state/auth.store.ts ***!
  \******************************************/
/*! exports provided: initialState, AuthStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStore", function() { return AuthStore; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null
};
var AuthStore = /** @class */ (function (_super) {
    __extends(AuthStore, _super);
    function AuthStore() {
        return _super.call(this, initialState) || this;
    }
    AuthStore.prototype.login = function (user) {
        this.update({ user: user });
        /** In real life, you will abstract this to service. */
        localStorage.setItem('user', JSON.stringify(user));
    };
    AuthStore.prototype.logout = function () {
        /** In real life, you will abstract this to service. */
        localStorage.removeItem('user');
        this.update(initialState);
    };
    AuthStore = __decorate([
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["StoreConfig"])({ name: 'auth' }),
        __metadata("design:paramtypes", [])
    ], AuthStore);
    return AuthStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["Store"]));



/***/ }),

/***/ "./src/app/books/state/books.query.ts":
/*!********************************************!*\
  !*** ./src/app/books/state/books.query.ts ***!
  \********************************************/
/*! exports provided: BooksQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksQuery", function() { return BooksQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _books_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.store */ "./src/app/books/state/books.store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksQuery = /** @class */ (function (_super) {
    __extends(BooksQuery, _super);
    function BooksQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.selectSearchTerm$ = _this.select(function (state) { return state.searchTerm; });
        _this.selectResultIds$ = _this.select(function (state) { return state.resultIds; });
        _this.selectCollection$ = _this.select(function (state) { return state.collection; });
        _this.isInCollection$ = _this.selectCollection$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ids) { return ids.includes(_this.getActiveId()) === true; }));
        return _this;
    }
    Object.defineProperty(BooksQuery.prototype, "getSearchTerm", {
        get: function () {
            return this.getSnapshot().searchTerm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BooksQuery.prototype, "collection", {
        get: function () {
            return this.getSnapshot().collection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BooksQuery.prototype, "nonCollectionBooks", {
        get: function () {
            var _this = this;
            return this.getAll({
                filterBy: function (_a) {
                    var id = _a.id;
                    return _this.collection.includes(id) === false;
                }
            }).map(function (_a) {
                var id = _a.id;
                return id;
            });
        },
        enumerable: true,
        configurable: true
    });
    BooksQuery = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_books_store__WEBPACK_IMPORTED_MODULE_2__["BooksStore"]])
    ], BooksQuery);
    return BooksQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["QueryEntity"]));



/***/ }),

/***/ "./src/app/books/state/books.service.ts":
/*!**********************************************!*\
  !*** ./src/app/books/state/books.service.ts ***!
  \**********************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _books_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.store */ "./src/app/books/state/books.store.ts");
/* harmony import */ var _core_services_google_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/google-books.service */ "./src/app/core/services/google-books.service.ts");
/* harmony import */ var _books_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books.query */ "./src/app/books/state/books.query.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BooksService = /** @class */ (function () {
    function BooksService(bookStore, bookQuery, googleService) {
        this.bookStore = bookStore;
        this.bookQuery = bookQuery;
        this.googleService = googleService;
    }
    BooksService.prototype.searchBooks = function (searchTerm) {
        var _this = this;
        this.bookStore.setLoading(true);
        this.googleService.searchBooks(searchTerm).subscribe(function (books) {
            _this.updateBooks(books);
        });
    };
    BooksService.prototype.updateBooks = function (books) {
        var nonCollection = this.bookQuery.nonCollectionBooks;
        this.bookStore.remove(nonCollection.slice());
        this.add(books);
        this.bookStore.updateResultIds(books.map(function (_a) {
            var id = _a.id;
            return id;
        }));
        this.bookStore.setLoading(false);
    };
    BooksService.prototype.updateSearchTerm = function (searchTerm) {
        this.bookStore.updateSearchTerm(searchTerm);
    };
    BooksService.prototype.setActive = function (id) {
        this.bookStore.setActive(id);
    };
    BooksService.prototype.add = function (books) {
        this.bookStore.add(books);
    };
    BooksService.prototype.loadBooksToStore = function () {
        var _this = this;
        var books$ = this.bookQuery.collection.map(function (id) { return _this.googleService.retrieveBook(id); });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(books$).subscribe(function (books) { return _this.add(books); });
    };
    BooksService.prototype.updateCollection = function (bookId) {
        this.bookStore.updateCollection(bookId);
        /** In real life, you will abstract this to service. */
        localStorage.setItem('collection', JSON.stringify(this.bookQuery.collection));
    };
    __decorate([
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["transaction"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BooksService.prototype, "updateBooks", null);
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_books_store__WEBPACK_IMPORTED_MODULE_2__["BooksStore"],
            _books_query__WEBPACK_IMPORTED_MODULE_4__["BooksQuery"],
            _core_services_google_books_service__WEBPACK_IMPORTED_MODULE_3__["GoogleBooksService"]])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/app/books/state/books.store.ts":
/*!********************************************!*\
  !*** ./src/app/books/state/books.store.ts ***!
  \********************************************/
/*! exports provided: BooksStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksStore", function() { return BooksStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var initialState = {
    searchTerm: '',
    resultIds: [],
    loading: false,
    collection: JSON.parse(localStorage.getItem('collection')) || []
};
var BooksStore = /** @class */ (function (_super) {
    __extends(BooksStore, _super);
    function BooksStore() {
        return _super.call(this, initialState) || this;
    }
    BooksStore.prototype.updateSearchTerm = function (searchTerm) {
        this.updateRoot({ searchTerm: searchTerm });
    };
    BooksStore.prototype.updateResultIds = function (resultIds) {
        this.updateRoot({ resultIds: resultIds });
    };
    BooksStore.prototype.updateCollection = function (id) {
        this.updateRoot(function (state) { return ({ collection: Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["toggle"])(state.collection, id) }); });
    };
    BooksStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({ name: 'books' }),
        __metadata("design:paramtypes", [])
    ], BooksStore);
    return BooksStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityStore"]));



/***/ }),

/***/ "./src/app/core/components/layout.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/components/layout.component.ts ***!
  \*****************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-layout',
            template: "\n    <mat-sidenav-container fullscreen>\n\n      <ng-content></ng-content>\n\n    </mat-sidenav-container>\n  ",
            styles: [
                "\n      mat-sidenav-container {\n        background: rgba(0, 0, 0, 0.03);\n      }\n\n      *,\n      /deep/ * {\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n    ",
            ],
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/components/nav-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/components/nav-item.component.ts ***!
  \*******************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavItemComponent = /** @class */ (function () {
    function NavItemComponent() {
        this.icon = '';
        this.hint = '';
        this.routerLink = '/';
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "hint", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "routerLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "navigate", void 0);
    NavItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-nav-item',
            template: "\n    <a mat-list-item [routerLink]=\"routerLink\" (click)=\"navigate.emit()\">\n      <mat-icon mat-list-icon>{{ icon }}</mat-icon>\n      <span mat-line><ng-content></ng-content></span>\n      <span mat-line class=\"secondary\">{{ hint }}</span>\n    </a>\n  ",
            styles: [
                "\n      .secondary {\n        color: rgba(0, 0, 0, 0.54);\n      }\n    ",
            ],
        })
    ], NavItemComponent);
    return NavItemComponent;
}());



/***/ }),

/***/ "./src/app/core/components/sidenav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/core/components/sidenav.component.ts ***!
  \******************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.open = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "open", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-sidenav',
            template: "\n    <mat-sidenav [opened]=\"open\">\n      <mat-nav-list>\n        <ng-content></ng-content>\n      </mat-nav-list>\n    </mat-sidenav>\n  ",
            styles: [
                "\n      mat-sidenav {\n        width: 300px;\n      }\n    ",
            ],
        })
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/core/components/toolbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/core/components/toolbar.component.ts ***!
  \******************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.openMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "openMenu", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-toolbar',
            template: "\n    <mat-toolbar color=\"primary\">\n      <button mat-icon-button (click)=\"openMenu.emit()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <ng-content></ng-content>\n    </mat-toolbar>\n  ",
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/core/containers/app.component.ts":
/*!**************************************************!*\
  !*** ./src/app/core/containers/app.component.ts ***!
  \**************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_state_auth_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/state/auth.query */ "./src/app/auth/state/auth.query.ts");
/* harmony import */ var _auth_state_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/state/auth.service */ "./src/app/auth/state/auth.service.ts");
/* harmony import */ var _state_layout_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/layout.query */ "./src/app/core/state/layout.query.ts");
/* harmony import */ var _state_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/layout.service */ "./src/app/core/state/layout.service.ts");
/* harmony import */ var _books_state_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../books/state/books.service */ "./src/app/books/state/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(authQuery, authService, bookService, layoutQuery, layoutService) {
        this.authQuery = authQuery;
        this.authService = authService;
        this.bookService = bookService;
        this.layoutQuery = layoutQuery;
        this.layoutService = layoutService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.showSidenav$ = this.layoutQuery.sideNavOpen$;
        this.loggedIn$ = this.authQuery.isLoggedIn$;
        this.bookService.loadBooksToStore();
    };
    AppComponent.prototype.closeSidenav = function () {
        this.layoutService.setSideNavState(false);
    };
    AppComponent.prototype.openSidenav = function () {
        this.layoutService.setSideNavState(true);
    };
    AppComponent.prototype.logout = function () {
        this.closeSidenav();
        this.authService.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-app',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <bc-layout>\n      <bc-sidenav [open]=\"showSidenav$ | async\">\n        <bc-nav-item (navigate)=\"closeSidenav()\" *ngIf=\"loggedIn$ | async\" routerLink=\"/\" icon=\"book\" hint=\"View your book collection\">\n          My Collection\n        </bc-nav-item>\n        <bc-nav-item (navigate)=\"closeSidenav()\" *ngIf=\"loggedIn$ | async\" routerLink=\"/books/find\" icon=\"search\" hint=\"Find your next book!\">\n          Browse Books\n        </bc-nav-item>\n        <bc-nav-item (navigate)=\"closeSidenav()\" *ngIf=\"!(loggedIn$ | async)\">\n          Sign In\n        </bc-nav-item>\n        <bc-nav-item (navigate)=\"logout()\" *ngIf=\"loggedIn$ | async\">\n          Sign Out\n        </bc-nav-item>\n      </bc-sidenav>\n      <bc-toolbar (openMenu)=\"openSidenav()\">\n        Book Collection\n      </bc-toolbar>\n\n      <router-outlet></router-outlet>\n    </bc-layout>\n  ",
        }),
        __metadata("design:paramtypes", [_auth_state_auth_query__WEBPACK_IMPORTED_MODULE_1__["AuthQuery"],
            _auth_state_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _books_state_books_service__WEBPACK_IMPORTED_MODULE_5__["BooksService"],
            _state_layout_query__WEBPACK_IMPORTED_MODULE_3__["LayoutQuery"],
            _state_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/core/containers/not-found-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/containers/not-found-page.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-not-found-page',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <mat-card>\n      <mat-card-title>404: Not Found</mat-card-title>\n      <mat-card-content>\n        <p>Hey! It looks like this page doesn't exist yet.</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-raised-button color=\"primary\" routerLink=\"/\">Take Me Home</button>\n      </mat-card-actions>\n    </mat-card>\n  ",
            styles: [
                "\n      :host {\n        text-align: center;\n      }\n    ",
            ],
        })
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: COMPONENTS, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/app.component */ "./src/app/core/containers/app.component.ts");
/* harmony import */ var _containers_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/not-found-page.component */ "./src/app/core/containers/not-found-page.component.ts");
/* harmony import */ var _components_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout.component */ "./src/app/core/components/layout.component.ts");
/* harmony import */ var _components_nav_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-item.component */ "./src/app/core/components/nav-item.component.ts");
/* harmony import */ var _components_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidenav.component */ "./src/app/core/components/sidenav.component.ts");
/* harmony import */ var _components_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/toolbar.component */ "./src/app/core/components/toolbar.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../material */ "./src/app/material/index.ts");
/* harmony import */ var _services_google_books_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/google-books.service */ "./src/app/core/services/google-books.service.ts");
/* harmony import */ var _books_state_books_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../books/state/books.service */ "./src/app/books/state/books.service.ts");
/* harmony import */ var _books_state_books_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../books/state/books.store */ "./src/app/books/state/books.store.ts");
/* harmony import */ var _books_state_books_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../books/state/books.query */ "./src/app/books/state/books.query.ts");
/* harmony import */ var _state_layout_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/layout.service */ "./src/app/core/state/layout.service.ts");
/* harmony import */ var _state_layout_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/layout.store */ "./src/app/core/state/layout.store.ts");
/* harmony import */ var _state_layout_query__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./state/layout.query */ "./src/app/core/state/layout.query.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var COMPONENTS = [
    _containers_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
    _containers_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"],
    _components_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
    _components_nav_item_component__WEBPACK_IMPORTED_MODULE_6__["NavItemComponent"],
    _components_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"],
    _components_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"]
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [_services_google_books_service__WEBPACK_IMPORTED_MODULE_10__["GoogleBooksService"], _books_state_books_service__WEBPACK_IMPORTED_MODULE_11__["BooksService"], _books_state_books_store__WEBPACK_IMPORTED_MODULE_12__["BooksStore"], _books_state_books_query__WEBPACK_IMPORTED_MODULE_13__["BooksQuery"], _state_layout_service__WEBPACK_IMPORTED_MODULE_14__["LayoutService"], _state_layout_store__WEBPACK_IMPORTED_MODULE_15__["LayoutStore"], _state_layout_query__WEBPACK_IMPORTED_MODULE_16__["LayoutQuery"]],
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]],
            declarations: COMPONENTS,
            exports: COMPONENTS,
        })
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/core/services/google-books.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/google-books.service.ts ***!
  \*******************************************************/
/*! exports provided: GoogleBooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleBooksService", function() { return GoogleBooksService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleBooksService = /** @class */ (function () {
    function GoogleBooksService(http) {
        this.http = http;
        this.API_PATH = 'https://www.googleapis.com/books/v1/volumes';
    }
    GoogleBooksService.prototype.searchBooks = function (queryTitle) {
        return this.http
            .get(this.API_PATH + "?q=" + queryTitle)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (books) { return books.items || []; }));
    };
    GoogleBooksService.prototype.retrieveBook = function (volumeId) {
        return this.http.get(this.API_PATH + "/" + volumeId);
    };
    GoogleBooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], GoogleBooksService);
    return GoogleBooksService;
}());



/***/ }),

/***/ "./src/app/core/state/layout.query.ts":
/*!********************************************!*\
  !*** ./src/app/core/state/layout.query.ts ***!
  \********************************************/
/*! exports provided: LayoutQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutQuery", function() { return LayoutQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _layout_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.store */ "./src/app/core/state/layout.store.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutQuery = /** @class */ (function (_super) {
    __extends(LayoutQuery, _super);
    function LayoutQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.sideNavOpen$ = _this.select(function (state) { return state.sideNavOpen; });
        return _this;
    }
    LayoutQuery = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_layout_store__WEBPACK_IMPORTED_MODULE_2__["LayoutStore"]])
    ], LayoutQuery);
    return LayoutQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Query"]));



/***/ }),

/***/ "./src/app/core/state/layout.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/state/layout.service.ts ***!
  \**********************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.store */ "./src/app/core/state/layout.store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutService = /** @class */ (function () {
    function LayoutService(layoutStore) {
        this.layoutStore = layoutStore;
    }
    LayoutService.prototype.setSideNavState = function (status) {
        this.layoutStore.updateSideNavState(status);
    };
    LayoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_layout_store__WEBPACK_IMPORTED_MODULE_1__["LayoutStore"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/core/state/layout.store.ts":
/*!********************************************!*\
  !*** ./src/app/core/state/layout.store.ts ***!
  \********************************************/
/*! exports provided: LayoutStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutStore", function() { return LayoutStore; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var initialState = {
    sideNavOpen: false
};
var LayoutStore = /** @class */ (function (_super) {
    __extends(LayoutStore, _super);
    function LayoutStore() {
        return _super.call(this, initialState) || this;
    }
    LayoutStore.prototype.updateSideNavState = function (status) {
        this.update({ sideNavOpen: status });
    };
    LayoutStore = __decorate([
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["StoreConfig"])({ name: 'layout' }),
        __metadata("design:paramtypes", [])
    ], LayoutStore);
    return LayoutStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["Store"]));



/***/ }),

/***/ "./src/app/material/index.ts":
/*!***********************************!*\
  !*** ./src/app/material/index.ts ***!
  \***********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ "./src/app/material/material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]; });




/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\Test_Angular_6\..me\ng6-example-app_netesa_2018-11-121\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map