(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-assign-assign-module"],{

/***/ "./src/app/component/assign/assign-create/assign-create.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/assign/assign-create/assign-create.component.ts ***!
  \***************************************************************************/
/*! exports provided: AssignCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignCreateComponent", function() { return AssignCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");





class AssignCreateComponent {
    constructor() {
        this.i = 0;
        this.listOfData = [];
    }
    startEdit(id) {
        this.editId = id;
    }
    stopEdit() {
        this.editId = null;
    }
    addRow() {
        this.listOfData = [
            ...this.listOfData,
            {
                id: `${this.i}`,
                name: `Edward King ${this.i}`,
                age: `32 ${this.i}`,
                address: `London, Park Lane no. ${this.i}`
            }
        ];
        this.i++;
    }
    deleteRow(id) {
        this.listOfData = this.listOfData.filter(d => d.id !== id);
    }
    ngOnInit() {
        this.addRow();
        this.addRow();
    }
}
AssignCreateComponent.??fac = function AssignCreateComponent_Factory(t) { return new (t || AssignCreateComponent)(); };
AssignCreateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AssignCreateComponent, selectors: [["app-assign-create"]], decls: 22, vars: 0, consts: [[1, "section"], [1, "card", 2, "opacity", "1 !important"], [1, "row", "row_top"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "row"], [1, "row", "row-top"], [1, "col-sm-12", "col-md-7", "col-lg-9"], ["nz-button", "", "nzType", "primary", 2, "float", "left", "background-color", "#073262 !important", "margin-right", "10px !important", "color", "#fff !important"], ["nz-button", "", "nzType", "primary", 2, "float", "left", "background-color", "#073262 !important", "color", "#fff !important", "margin-right", "10px !important"], [1, "col-sm-12", "col-md-5", "col-lg-3"], [2, "float", "right !important"], ["nz-button", "", "nzType", "primary", 2, "float", "left", "background-color", "#FF4A55 !important", "color", "#fff !important", "margin-right", "10px !important"], ["nz-button", "", "nzType", "primary", 2, "float", "left", "background-color", "#FF4A55 !important", "color", "#fff !important"]], template: function AssignCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Export All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Export Selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Add Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Click History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Assign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["??NzTransitionPatchDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hc3NpZ24vYXNzaWduLWNyZWF0ZS9hc3NpZ24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AssignCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assign-create',
                templateUrl: './assign-create.component.html',
                styleUrls: ['./assign-create.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/assign/assign-history/assign-history.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/assign/assign-history/assign-history.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AssignHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignHistoryComponent", function() { return AssignHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-breadcrumb.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-avatar.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");














function AssignHistoryComponent_nz_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "nz-option", 21);
} if (rf & 2) {
    const o_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzValue", o_r4.value)("nzLabel", o_r4.label);
} }
function AssignHistoryComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("nzSortOrderChange", function AssignHistoryComponent_th_33_Template_th_nzSortOrderChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const column_r5 = ctx.$implicit; return column_r5.sortOrder = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSortOrder", column_r5.sortOrder)("nzSortFn", column_r5.sortFn)("nzFilters", column_r5.listOfFilter)("nzFilterFn", column_r5.filterFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", column_r5.name, "");
} }
function AssignHistoryComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r8.AuditYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r8.AuditType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r8.QRId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r8.VendorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r8.DealNbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r8.DeCurrentQRStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r8.Currentlyassignto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r8.LastModifiedby);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r8.LastModifieddate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r8.LastActionPerform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r8.Remarks);
} }
class AssignHistoryComponent {
    constructor() {
        this.supplier_value = '';
        this.supplier_list = [
            { label: "Audit Type 1", value: "Audit Type 1" },
            { label: "Audit Type 2", value: "Audit Type 2" },
        ];
        this.listOfData = [
            {
                AuditYear: 2020,
                AuditType: 'Volume Rebate',
                QRId: '5678',
                VendorName: 'HUL',
                DealNbr: 'DL3678',
                CurrentQRStatus: 'Under Review',
                Currentlyassignto: 'Cris',
                LastModifiedby: 'Amit',
                LastModifieddate: '12/14/2021',
                LastActionPerform: 'Assign to auditor',
                Remarks: 'Assigning to Cris'
            },
            {
                AuditYear: 2020,
                AuditType: 'Volume Rebate',
                QRId: '5678',
                VendorName: 'HUL',
                DealNbr: 'DL3678',
                CurrentQRStatus: 'QA Review',
                Currentlyassignto: 'David',
                LastModifiedby: 'Cris',
                LastModifieddate: '12/16/2021',
                LastActionPerform: 'Send for QA review',
                Remarks: 'Ready for QA review'
            }
        ];
        this.listOfColumns = [
            {
                name: 'Audit Year',
            },
            {
                name: 'Audit Type',
            },
            {
                name: 'QR Id',
            },
            {
                name: 'Vendor Name',
            },
            {
                name: 'Deal Number',
            },
            {
                name: 'Current QR Status',
            },
            {
                name: 'Currently assign to',
            },
            {
                name: ' Last Modified by',
            },
            {
                name: 'Last Modified Date',
            },
            {
                name: 'Last Action Perform',
            },
            {
                name: 'Remarks',
            },
        ];
    }
    ngOnInit() {
    }
}
AssignHistoryComponent.??fac = function AssignHistoryComponent_Factory(t) { return new (t || AssignHistoryComponent)(); };
AssignHistoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AssignHistoryComponent, selectors: [["app-assign-history"]], decls: 36, vars: 8, consts: [[1, "section"], ["nz-typography", ""], [1, "row", "row_top"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [2, "margin-bottom", "10px"], [1, "breadcrumb_active", 3, "routerLink"], ["nz-icon", "", "nzType", "home", "nzTheme", "fill", 2, "color", "#073262"], [1, "breadcrumb_text"], [1, "col-xs-12", "col-sm-12", "col-md-2", "col-lg-2"], ["nzIcon", "user", "nzSrc", "../../../assets/images/logo/chile.png"], [2, "float", "right !important"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "New Store", 2, "margin-bottom", "5px", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [2, "opacity", "1 !important"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], ["id", "excel-table", 3, "nzData", "nzShowPagination"], ["rowSelectionTable", ""], [2, "font-size", "12px !important"], [3, "nzSortOrder", "nzSortFn", "nzFilters", "nzFilterFn", "nzSortOrderChange", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [3, "nzSortOrder", "nzSortFn", "nzFilters", "nzFilterFn", "nzSortOrderChange"]], template: function AssignHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Check History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nz-breadcrumb", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Assign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "nz-breadcrumb-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "nz-avatar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Chile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Audit Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "nz-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AssignHistoryComponent_Template_nz_select_ngModelChange_23_listener($event) { return ctx.supplier_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, AssignHistoryComponent_nz_option_24_Template, 1, 2, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "nz-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "nz-table", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, AssignHistoryComponent_th_33_Template, 2, 5, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, AssignHistoryComponent_tr_35_Template, 23, 11, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/authentication/landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.supplier_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.supplier_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzData", ctx.listOfData)("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.listOfColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _r1.data);
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["NzBreadCrumbComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["NzBreadCrumbItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["??NzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormLabelComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzTableComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzTheadComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzTrDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzTbodyComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzOptionComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzTableCellDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzThMeasureDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzThAddOnComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AssignHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assign-history',
                templateUrl: './assign-history.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/assign/assign-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/assign/assign-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AssignRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignRoutingModule", function() { return AssignRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _assign_create_assign_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assign-create/assign-create.component */ "./src/app/component/assign/assign-create/assign-create.component.ts");
/* harmony import */ var _assign_history_assign_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assign-history/assign-history.component */ "./src/app/component/assign/assign-history/assign-history.component.ts");






const routes = [
    {
        path: 'assign-create',
        component: _assign_create_assign_create_component__WEBPACK_IMPORTED_MODULE_2__["AssignCreateComponent"],
        data: {
            title: 'Assign',
            headerDisplay: "none"
        }
    },
    {
        path: 'assign-history',
        component: _assign_history_assign_history_component__WEBPACK_IMPORTED_MODULE_3__["AssignHistoryComponent"],
        data: {
            title: 'Assign History',
            headerDisplay: "none"
        }
    },
];
class AssignRoutingModule {
}
AssignRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AssignRoutingModule });
AssignRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AssignRoutingModule_Factory(t) { return new (t || AssignRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AssignRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AssignRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/assign/assign.module.ts":
/*!***************************************************!*\
  !*** ./src/app/component/assign/assign.module.ts ***!
  \***************************************************/
/*! exports provided: AssignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignModule", function() { return AssignModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _assign_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assign-routing.module */ "./src/app/component/assign/assign-routing.module.ts");
/* harmony import */ var _assign_create_assign_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assign-create/assign-create.component */ "./src/app/component/assign/assign-create/assign-create.component.ts");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-popconfirm.js");
/* harmony import */ var _assign_history_assign_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assign-history/assign-history.component */ "./src/app/component/assign/assign-history/assign-history.component.ts");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-descriptions.js");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-avatar.js");












const antdModule = [
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_10__["NzAvatarModule"],
    ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__["NzDescriptionsModule"],
    ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_7__["NzPopconfirmModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDividerModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDatePickerModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzAlertModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSpinModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageServiceModule"],
    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSelectModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzEmptyModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzProgressModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzFormModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzRadioModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputNumberModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzPageHeaderModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSwitchModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzPopoverModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzBadgeModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzBreadCrumbModule"]
];
class AssignModule {
}
AssignModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AssignModule });
AssignModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AssignModule_Factory(t) { return new (t || AssignModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _assign_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssignRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ...antdModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AssignModule, { declarations: [_assign_create_assign_create_component__WEBPACK_IMPORTED_MODULE_3__["AssignCreateComponent"], _assign_history_assign_history_component__WEBPACK_IMPORTED_MODULE_8__["AssignHistoryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _assign_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssignRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_10__["NzAvatarModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__["NzDescriptionsModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_7__["NzPopconfirmModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDividerModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDatePickerModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzAlertModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSpinModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageServiceModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSelectModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzEmptyModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzProgressModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzFormModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzRadioModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputNumberModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzPageHeaderModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSwitchModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzPopoverModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzBadgeModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzBreadCrumbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AssignModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_assign_create_assign_create_component__WEBPACK_IMPORTED_MODULE_3__["AssignCreateComponent"], _assign_history_assign_history_component__WEBPACK_IMPORTED_MODULE_8__["AssignHistoryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _assign_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssignRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    ...antdModule,
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=component-assign-assign-module.js.map