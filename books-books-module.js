(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["books-books-module"],{

/***/ "./node_modules/ngx-take-until-destroy/dist/es5/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-take-until-destroy/dist/es5/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var take_until_destroy_1 = __webpack_require__(/*! ./take-until-destroy */ "./node_modules/ngx-take-until-destroy/dist/es5/take-until-destroy.js");
exports.TakeUntilDestroy = take_until_destroy_1.TakeUntilDestroy;
exports.untilDestroyed = take_until_destroy_1.untilDestroyed;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-take-until-destroy/dist/es5/take-until-destroy.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ngx-take-until-destroy/dist/es5/take-until-destroy.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 *
 * @param value
 * @returns {boolean}
 */
function isFunction(value) {
    return typeof value === 'function';
}
/**
 *
 * @param destroyMethodName
 */
function TakeUntilDestroy(destroyMethodName) {
    if (destroyMethodName === void 0) { destroyMethodName = 'ngOnDestroy'; }
    return function (constructor) {
        var originalDestroy = constructor.prototype[destroyMethodName];
        if (!isFunction(originalDestroy)) {
            console.warn(constructor.name + " is using @TakeUntilDestroy but does not implement " + destroyMethodName);
        }
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /**
                 *
                 * @type {Subject<any>}
                 * @private
                 */
                _this._takeUntilDestroy$ = new rxjs_1.Subject();
                return _this;
            }
            Object.defineProperty(class_1.prototype, "destroyed$", {
                /**
                 *
                 * @returns {Observable<boolean>}
                 */
                get: function () {
                    this._takeUntilDestroy$ = this._takeUntilDestroy$ || new rxjs_1.Subject();
                    return this._takeUntilDestroy$.asObservable();
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Call the super destroyMethodName method and clean the observers
             */
            class_1.prototype[destroyMethodName] = function () {
                isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
                this._takeUntilDestroy$.next(true);
                this._takeUntilDestroy$.complete();
            };
            return class_1;
        }(constructor));
    };
}
exports.TakeUntilDestroy = TakeUntilDestroy;
exports.untilDestroyed = function (that) { return function (source) {
    if (!('destroyed$' in that)) {
        console.warn("'destroyed$' property does not exist on " + that.constructor.name + ". Did you decorate the class with '@TakeUntilDestroy()'?");
        return source;
    }
    return source.pipe(operators_1.takeUntil(that.destroyed$));
}; };
//# sourceMappingURL=take-until-destroy.js.map

/***/ }),

/***/ "./src/app/books/book-exists.guard.ts":
/*!********************************************!*\
  !*** ./src/app/books/book-exists.guard.ts ***!
  \********************************************/
/*! exports provided: BookExistsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookExistsGuard", function() { return BookExistsGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_google_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/google-books.service */ "./src/app/core/services/google-books.service.ts");
/* harmony import */ var _state_books_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/books.query */ "./src/app/books/state/books.query.ts");
/* harmony import */ var _state_books_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/books.service */ "./src/app/books/state/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookExistsGuard = /** @class */ (function () {
    function BookExistsGuard(googleBooks, router, bookQuery, bookSerivce) {
        this.googleBooks = googleBooks;
        this.router = router;
        this.bookQuery = bookQuery;
        this.bookSerivce = bookSerivce;
    }
    BookExistsGuard.prototype.hasBookInApi = function (id) {
        var _this = this;
        return this.googleBooks.retrieveBook(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (book) { return !!book; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            _this.router.navigate(['/404']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    BookExistsGuard.prototype.hasBook = function (id) {
        if (this.bookQuery.hasEntity(id)) {
            this.bookSerivce.setActive(id);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        return this.hasBookInApi(id);
    };
    BookExistsGuard.prototype.canActivate = function (route) {
        return this.hasBook(route.params['id']);
    };
    BookExistsGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_google_books_service__WEBPACK_IMPORTED_MODULE_4__["GoogleBooksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _state_books_query__WEBPACK_IMPORTED_MODULE_5__["BooksQuery"],
            _state_books_service__WEBPACK_IMPORTED_MODULE_6__["BooksService"]])
    ], BookExistsGuard);
    return BookExistsGuard;
}());



/***/ }),

/***/ "./src/app/books/books-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/books/books-routing.module.ts ***!
  \***********************************************/
/*! exports provided: routes, BooksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksRoutingModule", function() { return BooksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_find_book_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/find-book-page.component */ "./src/app/books/containers/find-book-page.component.ts");
/* harmony import */ var _containers_view_book_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/view-book-page.component */ "./src/app/books/containers/view-book-page.component.ts");
/* harmony import */ var _containers_collection_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/collection-page.component */ "./src/app/books/containers/collection-page.component.ts");
/* harmony import */ var _book_exists_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-exists.guard */ "./src/app/books/book-exists.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'find', component: _containers_find_book_page_component__WEBPACK_IMPORTED_MODULE_2__["FindBookPageComponent"] },
    {
        path: ':id',
        component: _containers_view_book_page_component__WEBPACK_IMPORTED_MODULE_3__["ViewBookPageComponent"],
        canActivate: [_book_exists_guard__WEBPACK_IMPORTED_MODULE_5__["BookExistsGuard"]],
    },
    { path: '', component: _containers_collection_page_component__WEBPACK_IMPORTED_MODULE_4__["CollectionPageComponent"] },
];
var BooksRoutingModule = /** @class */ (function () {
    function BooksRoutingModule() {
    }
    BooksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], BooksRoutingModule);
    return BooksRoutingModule;
}());



/***/ }),

/***/ "./src/app/books/books.module.ts":
/*!***************************************!*\
  !*** ./src/app/books/books.module.ts ***!
  \***************************************/
/*! exports provided: BooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/books/components/index.ts");
/* harmony import */ var _book_exists_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-exists.guard */ "./src/app/books/book-exists.guard.ts");
/* harmony import */ var _containers_find_book_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/find-book-page.component */ "./src/app/books/containers/find-book-page.component.ts");
/* harmony import */ var _containers_view_book_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/view-book-page.component */ "./src/app/books/containers/view-book-page.component.ts");
/* harmony import */ var _containers_selected_book_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/selected-book-page.component */ "./src/app/books/containers/selected-book-page.component.ts");
/* harmony import */ var _containers_collection_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/collection-page.component */ "./src/app/books/containers/collection-page.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material */ "./src/app/material/index.ts");
/* harmony import */ var _books_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./books-routing.module */ "./src/app/books/books-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BooksModule = /** @class */ (function () {
    function BooksModule() {
    }
    BooksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _components__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
                _books_routing_module__WEBPACK_IMPORTED_MODULE_9__["BooksRoutingModule"]
            ],
            declarations: [
                _containers_find_book_page_component__WEBPACK_IMPORTED_MODULE_4__["FindBookPageComponent"],
                _containers_view_book_page_component__WEBPACK_IMPORTED_MODULE_5__["ViewBookPageComponent"],
                _containers_selected_book_page_component__WEBPACK_IMPORTED_MODULE_6__["SelectedBookPageComponent"],
                _containers_collection_page_component__WEBPACK_IMPORTED_MODULE_7__["CollectionPageComponent"],
            ],
            providers: [_book_exists_guard__WEBPACK_IMPORTED_MODULE_3__["BookExistsGuard"]],
        })
    ], BooksModule);
    return BooksModule;
}());



/***/ }),

/***/ "./src/app/books/components/book-authors.component.ts":
/*!************************************************************!*\
  !*** ./src/app/books/components/book-authors.component.ts ***!
  \************************************************************/
/*! exports provided: BookAuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookAuthorsComponent", function() { return BookAuthorsComponent; });
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

var BookAuthorsComponent = /** @class */ (function () {
    function BookAuthorsComponent() {
    }
    Object.defineProperty(BookAuthorsComponent.prototype, "authors", {
        get: function () {
            return this.book.volumeInfo.authors;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookAuthorsComponent.prototype, "book", void 0);
    BookAuthorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-book-authors',
            template: "\n    <h5 mat-subheader>Written By:</h5>\n    <span>\n      {{ authors | bcAddCommas }}\n    </span>\n  ",
            styles: [
                "\n      h5 {\n        margin-bottom: 5px;\n      }\n    ",
            ],
        })
    ], BookAuthorsComponent);
    return BookAuthorsComponent;
}());



/***/ }),

/***/ "./src/app/books/components/book-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/books/components/book-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(location) {
        this.location = location;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(BookDetailComponent.prototype, "id", {
        /**
         * Tip: Utilize getters to keep templates clean
         */
        get: function () {
            return this.book.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookDetailComponent.prototype, "title", {
        get: function () {
            return this.book.volumeInfo.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookDetailComponent.prototype, "subtitle", {
        get: function () {
            return this.book.volumeInfo.subtitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookDetailComponent.prototype, "description", {
        get: function () {
            return this.book.volumeInfo.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookDetailComponent.prototype, "thumbnail", {
        get: function () {
            return (this.book.volumeInfo.imageLinks &&
                this.book.volumeInfo.imageLinks.smallThumbnail &&
                this.book.volumeInfo.imageLinks.smallThumbnail.replace('http:', ''));
        },
        enumerable: true,
        configurable: true
    });
    BookDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookDetailComponent.prototype, "book", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BookDetailComponent.prototype, "inCollection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BookDetailComponent.prototype, "add", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BookDetailComponent.prototype, "remove", void 0);
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-book-detail',
            template: "\n    <mat-card *ngIf=\"book\">\n      <mat-card-title-group>\n        <mat-card-title>{{ title }}</mat-card-title>\n        <mat-card-subtitle *ngIf=\"subtitle\">{{ subtitle }}</mat-card-subtitle>\n        <img mat-card-sm-image *ngIf=\"thumbnail\" [src]=\"thumbnail\"/>\n      </mat-card-title-group>\n      <mat-card-content>\n        <p [innerHtml]=\"description\"></p>\n      </mat-card-content>\n      <mat-card-footer class=\"footer\">\n        <bc-book-authors [book]=\"book\"></bc-book-authors>\n        <button mat-raised-button color=\"primary\" (click)='goBack()'>\n        Back\n        </button>\n      </mat-card-footer>\n      <mat-card-actions align=\"start\">\n        <button mat-raised-button color=\"warn\" *ngIf=\"inCollection\" (click)=\"remove.emit(book)\">\n        Remove Book from Collection\n        </button>\n\n        <button mat-raised-button color=\"primary\" *ngIf=\"!inCollection\" (click)=\"add.emit(book)\">\n        Add Book to Collection\n        </button>\n      </mat-card-actions>\n    </mat-card>\n\n  ",
            styles: [
                "\n      :host {\n        display: flex;\n        justify-content: center;\n        margin: 75px 0;\n      }\n      mat-card {\n        max-width: 600px;\n      }\n      mat-card-title-group {\n        margin-left: 0;\n      }\n      img {\n        width: 60px;\n        min-width: 60px;\n        margin-left: 5px;\n      }\n      mat-card-content {\n        margin: 15px 0 50px;\n      }\n      mat-card-actions {\n        margin: 25px 0 0 !important;\n      }\n      mat-card-footer {\n        padding: 0 25px 25px;\n        position: relative;\n      }\n    ",
            ],
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/books/components/book-preview-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/books/components/book-preview-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: BookPreviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPreviewListComponent", function() { return BookPreviewListComponent; });
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

var BookPreviewListComponent = /** @class */ (function () {
    function BookPreviewListComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BookPreviewListComponent.prototype, "books", void 0);
    BookPreviewListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-book-preview-list',
            template: "\n    <bc-book-preview *ngFor=\"let book of books\" [book]=\"book\"></bc-book-preview>\n  ",
            styles: [
                "\n      :host {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n      }\n    ",
            ],
        })
    ], BookPreviewListComponent);
    return BookPreviewListComponent;
}());



/***/ }),

/***/ "./src/app/books/components/book-preview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/books/components/book-preview.component.ts ***!
  \************************************************************/
/*! exports provided: BookPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPreviewComponent", function() { return BookPreviewComponent; });
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

var BookPreviewComponent = /** @class */ (function () {
    function BookPreviewComponent() {
    }
    Object.defineProperty(BookPreviewComponent.prototype, "id", {
        get: function () {
            return this.book.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookPreviewComponent.prototype, "title", {
        get: function () {
            return this.book.volumeInfo.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookPreviewComponent.prototype, "subtitle", {
        get: function () {
            return this.book.volumeInfo.subtitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookPreviewComponent.prototype, "description", {
        get: function () {
            return this.book.volumeInfo.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookPreviewComponent.prototype, "thumbnail", {
        get: function () {
            if (this.book.volumeInfo.imageLinks) {
                return this.book.volumeInfo.imageLinks.smallThumbnail.replace('http:', '');
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookPreviewComponent.prototype, "book", void 0);
    BookPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-book-preview',
            template: "\n    <a [routerLink]=\"['/books', id]\">\n      <mat-card>\n        <mat-card-title-group>\n          <img mat-card-sm-image *ngIf=\"thumbnail\" [src]=\"thumbnail\"/>\n          <mat-card-title>{{ title | bcEllipsis:35 }}</mat-card-title>\n          <mat-card-subtitle *ngIf=\"subtitle\">{{ subtitle | bcEllipsis:40 }}</mat-card-subtitle>\n        </mat-card-title-group>\n        <mat-card-content>\n          <p *ngIf=\"description\">{{ description | bcEllipsis }}</p>\n        </mat-card-content>\n        <mat-card-footer>\n          <bc-book-authors [book]=\"book\"></bc-book-authors>\n        </mat-card-footer>\n      </mat-card>\n    </a>\n  ",
            styles: [
                "\n      :host {\n        display: flex;\n      }\n\n      :host a {\n        display: flex;\n      }\n\n      mat-card {\n        width: 400px;\n        margin: 15px;\n        display: flex;\n        flex-flow: column;\n        justify-content: space-between;\n      }\n\n      @media only screen and (max-width: 768px) {\n        mat-card {\n          margin: 15px 0 !important;\n        }\n      }\n      mat-card:hover {\n        box-shadow: 3px 3px 16px -2px rgba(0, 0, 0, 0.5);\n      }\n      mat-card-title {\n        margin-right: 10px;\n      }\n      mat-card-title-group {\n        margin: 0;\n      }\n      a {\n        color: inherit;\n        text-decoration: none;\n      }\n      img {\n        width: 60px;\n        min-width: 60px;\n        margin-left: 5px;\n      }\n      mat-card-content {\n        margin-top: 15px;\n        margin: 15px 0 0;\n      }\n      span {\n        display: inline-block;\n        font-size: 13px;\n      }\n      mat-card-footer {\n        padding: 0 25px 25px;\n      }\n    ",
            ],
        })
    ], BookPreviewComponent);
    return BookPreviewComponent;
}());



/***/ }),

/***/ "./src/app/books/components/book-search.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/books/components/book-search.component.ts ***!
  \***********************************************************/
/*! exports provided: BookSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookSearchComponent", function() { return BookSearchComponent; });
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

var BookSearchComponent = /** @class */ (function () {
    function BookSearchComponent() {
        this.query = '';
        this.searching = false;
        this.error = '';
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookSearchComponent.prototype, "query", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookSearchComponent.prototype, "searching", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookSearchComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BookSearchComponent.prototype, "search", void 0);
    BookSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-book-search',
            template: "\n    <mat-card>\n      <mat-card-title>Find a Book</mat-card-title>\n      <mat-card-content>\n        <mat-form-field>\n          <input matInput placeholder=\"Search for a book\" [value]=\"query\" (keyup)=\"search.emit($event.target.value)\">\n        </mat-form-field>\n        <mat-spinner [class.show]=\"searching\" [diameter]=\"30\" [strokeWidth]=\"3\"></mat-spinner>\n      </mat-card-content>\n      <mat-card-footer><span *ngIf=\"error\">{{error}}</span></mat-card-footer>\n    </mat-card>\n  ",
            styles: [
                "\n      mat-card-title,\n      mat-card-content,\n      mat-card-footer {\n        display: flex;\n        justify-content: center;\n      }\n\n      mat-card-footer {\n        color: #ff0000;\n        padding: 5px 0;\n      }\n\n      .mat-form-field {\n        min-width: 300px;\n        margin-right: 10px; // Make room for the spinner\n      }\n\n      .mat-spinner {\n        position: relative;\n        top: 10px;\n        left: 10px;\n        visibility: hidden;\n      }\n\n      .mat-spinner.show {\n        visibility: visible;\n      }\n    ",
            ],
        })
    ], BookSearchComponent);
    return BookSearchComponent;
}());



/***/ }),

/***/ "./src/app/books/components/index.ts":
/*!*******************************************!*\
  !*** ./src/app/books/components/index.ts ***!
  \*******************************************/
/*! exports provided: COMPONENTS, ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_authors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-authors.component */ "./src/app/books/components/book-authors.component.ts");
/* harmony import */ var _book_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-detail.component */ "./src/app/books/components/book-detail.component.ts");
/* harmony import */ var _book_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-preview.component */ "./src/app/books/components/book-preview.component.ts");
/* harmony import */ var _book_preview_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-preview-list.component */ "./src/app/books/components/book-preview-list.component.ts");
/* harmony import */ var _book_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-search.component */ "./src/app/books/components/book-search.component.ts");
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pipes */ "./src/app/shared/pipes/index.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../material */ "./src/app/material/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var COMPONENTS = [
    _book_authors_component__WEBPACK_IMPORTED_MODULE_4__["BookAuthorsComponent"],
    _book_detail_component__WEBPACK_IMPORTED_MODULE_5__["BookDetailComponent"],
    _book_preview_component__WEBPACK_IMPORTED_MODULE_6__["BookPreviewComponent"],
    _book_preview_list_component__WEBPACK_IMPORTED_MODULE_7__["BookPreviewListComponent"],
    _book_search_component__WEBPACK_IMPORTED_MODULE_8__["BookSearchComponent"],
];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_pipes__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            ],
            declarations: COMPONENTS,
            exports: COMPONENTS,
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/books/containers/collection-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/books/containers/collection-page.component.ts ***!
  \***************************************************************/
/*! exports provided: CollectionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPageComponent", function() { return CollectionPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_books_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/books.query */ "./src/app/books/state/books.query.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectionPageComponent = /** @class */ (function () {
    function CollectionPageComponent(bookQuery) {
        this.bookQuery = bookQuery;
        this.books$ = this.bookQuery.selectMany(this.bookQuery.collection);
    }
    CollectionPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-collection-page',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <mat-card>\n      <mat-card-title>My Collection</mat-card-title>\n    </mat-card>\n\n    <bc-book-preview-list [books]=\"books$ | async\"></bc-book-preview-list>\n  ",
            styles: [
                "\n      mat-card-title {\n        display: flex;\n        justify-content: center;\n      }\n    ",
            ],
        }),
        __metadata("design:paramtypes", [_state_books_query__WEBPACK_IMPORTED_MODULE_1__["BooksQuery"]])
    ], CollectionPageComponent);
    return CollectionPageComponent;
}());



/***/ }),

/***/ "./src/app/books/containers/find-book-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/books/containers/find-book-page.component.ts ***!
  \**************************************************************/
/*! exports provided: FindBookPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindBookPageComponent", function() { return FindBookPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_books_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/books.query */ "./src/app/books/state/books.query.ts");
/* harmony import */ var _state_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/books.service */ "./src/app/books/state/books.service.ts");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/dist/es5/index.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FindBookPageComponent = /** @class */ (function () {
    function FindBookPageComponent(bookQuery, bookService) {
        var _this = this;
        this.bookQuery = bookQuery;
        this.bookService = bookService;
        this.searchQuery = this.bookQuery.getSearchTerm;
        this.loading$ = this.bookQuery.selectLoading();
        this.bookQuery.selectSearchTerm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function (searchTerm) {
            _this.bookService.searchBooks(searchTerm);
        });
        this.books$ = this.bookQuery.selectResultIds$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (ids) { return _this.bookQuery.selectMany(ids); }));
    }
    FindBookPageComponent.prototype.search = function (query) {
        this.bookService.updateSearchTerm(query);
    };
    FindBookPageComponent.prototype.ngOnDestroy = function () { };
    FindBookPageComponent = __decorate([
        Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["TakeUntilDestroy"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-find-book-page',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <bc-book-search [query]=\"searchQuery\" [searching]=\"loading$ | async\" [error]=\"error$ | async\" (search)=\"search($event)\"></bc-book-search>\n    <bc-book-preview-list [books]=\"books$ | async\"></bc-book-preview-list>\n  ",
        }),
        __metadata("design:paramtypes", [_state_books_query__WEBPACK_IMPORTED_MODULE_2__["BooksQuery"],
            _state_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"]])
    ], FindBookPageComponent);
    return FindBookPageComponent;
}());



/***/ }),

/***/ "./src/app/books/containers/selected-book-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/books/containers/selected-book-page.component.ts ***!
  \******************************************************************/
/*! exports provided: SelectedBookPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedBookPageComponent", function() { return SelectedBookPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_books_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/books.query */ "./src/app/books/state/books.query.ts");
/* harmony import */ var _state_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/books.service */ "./src/app/books/state/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectedBookPageComponent = /** @class */ (function () {
    function SelectedBookPageComponent(booksQuery, booksService) {
        this.booksQuery = booksQuery;
        this.booksService = booksService;
        this.book$ = this.booksQuery.selectActive();
        this.isSelectedBookInCollection$ = this.booksQuery.isInCollection$;
    }
    SelectedBookPageComponent.prototype.updateCollection = function (_a) {
        var id = _a.id;
        this.booksService.updateCollection(id);
    };
    SelectedBookPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-selected-book-page',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <bc-book-detail\n      [book]=\"book$ | async\"\n      [inCollection]=\"isSelectedBookInCollection$ | async\"\n      (add)=\"updateCollection($event)\"\n      (remove)=\"updateCollection($event)\">\n    </bc-book-detail>\n  ",
        }),
        __metadata("design:paramtypes", [_state_books_query__WEBPACK_IMPORTED_MODULE_1__["BooksQuery"],
            _state_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], SelectedBookPageComponent);
    return SelectedBookPageComponent;
}());



/***/ }),

/***/ "./src/app/books/containers/view-book-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/books/containers/view-book-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewBookPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBookPageComponent", function() { return ViewBookPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/books.service */ "./src/app/books/state/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewBookPageComponent = /** @class */ (function () {
    function ViewBookPageComponent(bookService, route) {
        this.bookService = bookService;
        this.route = route;
    }
    ViewBookPageComponent.prototype.ngOnInit = function () {
        var activeBookId = this.route.snapshot.paramMap.get('id');
        this.bookService.setActive(activeBookId);
    };
    ViewBookPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bc-view-book-page',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <bc-selected-book-page></bc-selected-book-page>\n  ",
        }),
        __metadata("design:paramtypes", [_state_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ViewBookPageComponent);
    return ViewBookPageComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/add-commas.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/add-commas.pipe.ts ***!
  \*************************************************/
/*! exports provided: AddCommasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommasPipe", function() { return AddCommasPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddCommasPipe = /** @class */ (function () {
    function AddCommasPipe() {
    }
    AddCommasPipe.prototype.transform = function (authors) {
        if (!authors) {
            return 'Author Unknown';
        }
        switch (authors.length) {
            case 0:
                return 'Author Unknown';
            case 1:
                return authors[0];
            case 2:
                return authors.join(' and ');
            default:
                var last = authors[authors.length - 1];
                var remaining = authors.slice(0, -1);
                return remaining.join(', ') + ", and " + last;
        }
    };
    AddCommasPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'bcAddCommas' })
    ], AddCommasPipe);
    return AddCommasPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/ellipsis.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/ellipsis.pipe.ts ***!
  \***********************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EllipsisPipe = /** @class */ (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (str, strLength) {
        if (strLength === void 0) { strLength = 250; }
        var withoutHtml = str.replace(/(<([^>]+)>)/gi, '');
        if (str.length >= strLength) {
            return withoutHtml.slice(0, strLength) + "...";
        }
        return withoutHtml;
    };
    EllipsisPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'bcEllipsis' })
    ], EllipsisPipe);
    return EllipsisPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pipes/index.ts ***!
  \***************************************/
/*! exports provided: PIPES, PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIPES", function() { return PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_commas_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-commas.pipe */ "./src/app/shared/pipes/add-commas.pipe.ts");
/* harmony import */ var _ellipsis_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ellipsis.pipe */ "./src/app/shared/pipes/ellipsis.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PIPES = [_add_commas_pipe__WEBPACK_IMPORTED_MODULE_1__["AddCommasPipe"], _ellipsis_pipe__WEBPACK_IMPORTED_MODULE_2__["EllipsisPipe"]];
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: PIPES,
            exports: PIPES,
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ })

}]);
//# sourceMappingURL=books-books-module.js.map