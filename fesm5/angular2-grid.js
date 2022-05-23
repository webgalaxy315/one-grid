import { __values } from 'tslib';
import { Component, ElementRef, Renderer2, EventEmitter, Directive, KeyValueDiffers, ComponentFactoryResolver, Output, ViewContainerRef, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * Generated from: helpers/NgGridHelpers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (/**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var r = Math.random() * 16 | 0;
        /** @type {?} */
        var v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }));
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function sortItemsByPositionHorizontal(a, b) {
    if (a.col === b.col) {
        return a.row - b.row;
    }
    return a.col - b.col;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function sortItemsByPositionVertical(a, b) {
    if (a.row === b.row) {
        return a.col - b.col;
    }
    return a.row - b.row;
}

/**
 * @fileoverview added by tsickle
 * Generated from: components/NgGridPlaceholder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgGridPlaceholder = /** @class */ (function () {
    function NgGridPlaceholder(_ngEl, _renderer) {
        this._ngEl = _ngEl;
        this._renderer = _renderer;
    }
    /**
     * @param {?} ngGrid
     * @return {?}
     */
    NgGridPlaceholder.prototype.registerGrid = /**
     * @param {?} ngGrid
     * @return {?}
     */
    function (ngGrid) {
        this._ngGrid = ngGrid;
    };
    /**
     * @return {?}
     */
    NgGridPlaceholder.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._ngEl.nativeElement, 'grid-placeholder');
        if (this._ngGrid.autoStyle)
            this._renderer.setStyle(this._ngEl.nativeElement, 'position', 'absolute');
    };
    /**
     * @param {?} newSize
     * @return {?}
     */
    NgGridPlaceholder.prototype.setSize = /**
     * @param {?} newSize
     * @return {?}
     */
    function (newSize) {
        this._size = newSize;
        this._recalculateDimensions();
    };
    /**
     * @param {?} newPosition
     * @return {?}
     */
    NgGridPlaceholder.prototype.setGridPosition = /**
     * @param {?} newPosition
     * @return {?}
     */
    function (newPosition) {
        this._position = newPosition;
        this._recalculatePosition();
    };
    /**
     * @param {?} cascade
     * @return {?}
     */
    NgGridPlaceholder.prototype.setCascadeMode = /**
     * @param {?} cascade
     * @return {?}
     */
    function (cascade) {
        this._cascadeMode = cascade;
        switch (cascade) {
            case 'up':
            case 'left':
            default:
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', '0px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', '0px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'right', null);
                this._renderer.setStyle(this._ngEl.nativeElement, 'bottom', null);
                break;
            case 'right':
                this._renderer.setStyle(this._ngEl.nativeElement, 'right', '0px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', '0px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', null);
                this._renderer.setStyle(this._ngEl.nativeElement, 'bottom', null);
                break;
            case 'down':
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', '0px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'bottom', '0px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'right', null);
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', null);
                break;
        }
    };
    // Private methods
    // Private methods
    /**
     * @private
     * @param {?} w
     * @param {?} h
     * @return {?}
     */
    NgGridPlaceholder.prototype._setDimensions = 
    // Private methods
    /**
     * @private
     * @param {?} w
     * @param {?} h
     * @return {?}
     */
    function (w, h) {
        this._renderer.setStyle(this._ngEl.nativeElement, 'width', w + 'px');
        this._renderer.setStyle(this._ngEl.nativeElement, 'height', h + 'px');
    };
    /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    NgGridPlaceholder.prototype._setPosition = /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        switch (this._cascadeMode) {
            case 'up':
            case 'left':
            default:
                this._renderer.setStyle(this._ngEl.nativeElement, 'transform', 'translate(' + x + 'px, ' + y + 'px)');
                break;
            case 'right':
                this._renderer.setStyle(this._ngEl.nativeElement, 'transform', 'translate(' + -x + 'px, ' + y + 'px)');
                break;
            case 'down':
                this._renderer.setStyle(this._ngEl.nativeElement, 'transform', 'translate(' + x + 'px, ' + -y + 'px)');
                break;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgGridPlaceholder.prototype._recalculatePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x = (this._ngGrid.colWidth + this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._position.col - 1) + this._ngGrid.marginLeft + this._ngGrid.screenMargin;
        /** @type {?} */
        var y = (this._ngGrid.rowHeight + this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._position.row - 1) + this._ngGrid.marginTop;
        this._setPosition(x, y);
    };
    /**
     * @private
     * @return {?}
     */
    NgGridPlaceholder.prototype._recalculateDimensions = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var w = (this._ngGrid.colWidth * this._size.x) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._size.x - 1));
        /** @type {?} */
        var h = (this._ngGrid.rowHeight * this._size.y) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._size.y - 1));
        this._setDimensions(w, h);
    };
    NgGridPlaceholder.decorators = [
        { type: Component, args: [{
                    selector: 'ng-grid-placeholder',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    NgGridPlaceholder.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return NgGridPlaceholder;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgGridPlaceholder.prototype._size;
    /**
     * @type {?}
     * @private
     */
    NgGridPlaceholder.prototype._position;
    /**
     * @type {?}
     * @private
     */
    NgGridPlaceholder.prototype._ngGrid;
    /**
     * @type {?}
     * @private
     */
    NgGridPlaceholder.prototype._cascadeMode;
    /**
     * @type {?}
     * @private
     */
    NgGridPlaceholder.prototype._ngEl;
    /**
     * @type {?}
     * @private
     */
    NgGridPlaceholder.prototype._renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: directives/NgGrid.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgGrid = /** @class */ (function () {
    // Constructor
    function NgGrid(_differs, _ngEl, _renderer, componentFactoryResolver) {
        this._differs = _differs;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this.componentFactoryResolver = componentFactoryResolver;
        // Event Emitters
        this.onDragStart = new EventEmitter();
        this.onDrag = new EventEmitter();
        this.onDragStop = new EventEmitter();
        this.onResizeStart = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onResizeStop = new EventEmitter();
        this.onItemChange = new EventEmitter();
        // Public variables
        this.colWidth = 250;
        this.rowHeight = 250;
        this.minCols = 1;
        this.minRows = 1;
        this.marginTop = 10;
        this.marginRight = 10;
        this.marginBottom = 10;
        this.marginLeft = 10;
        this.screenMargin = 0;
        this.isDragging = false;
        this.isResizing = false;
        this.autoStyle = true;
        this.resizeEnable = true;
        this.dragEnable = true;
        this.cascade = 'up';
        this.minWidth = 100;
        this.minHeight = 100;
        this.resizeDirections = NgGrid.CONST_DEFAULT_RESIZE_DIRECTIONS;
        // Private variables
        this._items = new Map();
        this._draggingItem = null;
        this._resizingItem = null;
        this._resizeDirection = null;
        this._itemsInGrid = new Set();
        this._maxCols = 0;
        this._maxRows = 0;
        this._visibleCols = 0;
        this._visibleRows = 0;
        this._setWidth = 250;
        this._setHeight = 250;
        this._posOffset = null;
        this._adding = false;
        this._placeholderRef = null;
        this._fixToGrid = false;
        this._autoResize = false;
        this._destroyed = false;
        this._maintainRatio = false;
        this._preferNew = false;
        this._zoomOnDrag = false;
        this._limitToScreen = false;
        this._centerToScreen = false;
        this._curMaxRow = 0;
        this._curMaxCol = 0;
        this._dragReady = false;
        this._resizeReady = false;
        this._elementBasedDynamicRowHeight = false;
        this._itemFixDirection = 'cascade';
        this._collisionFixDirection = 'cascade';
        this._allowOverlap = false;
        this._lastZValue = 1;
        this._subscriptions = [];
        this._enabledListener = false;
        this._config = NgGrid.CONST_DEFAULT_CONFIG;
        this._defineListeners();
    }
    Object.defineProperty(NgGrid.prototype, "config", {
        // [ng-grid] attribute handler
        set: 
        // [ng-grid] attribute handler
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v == null || typeof v !== 'object') {
                return;
            }
            this.setConfig(v);
            if (this._differ == null && v != null) {
                this._differ = this._differs.find(this._config).create();
            }
            this._differ.diff(this._config);
        },
        enumerable: true,
        configurable: true
    });
    // Public methods
    // Public methods
    /**
     * @return {?}
     */
    NgGrid.prototype.ngOnInit = 
    // Public methods
    /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._ngEl.nativeElement, 'grid');
        if (this.autoStyle)
            this._renderer.setStyle(this._ngEl.nativeElement, 'position', 'relative');
        this.setConfig(this._config);
    };
    /**
     * @return {?}
     */
    NgGrid.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed = true;
        this._disableListeners();
    };
    /**
     * @return {?}
     */
    NgGrid.prototype.generateItemUid = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var uid = generateUuid();
        if (this._items.has(uid)) {
            return this.generateItemUid();
        }
        return uid;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NgGrid.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        this._config = config;
        /** @type {?} */
        var maxColRowChanged = false;
        for (var x in config) {
            /** @type {?} */
            var val = config[x];
            /** @type {?} */
            var intVal = !val ? 0 : parseInt(val);
            switch (x) {
                case 'margins':
                    this.setMargins(val);
                    break;
                case 'col_width':
                    this.colWidth = Math.max(intVal, 1);
                    break;
                case 'row_height':
                    this.rowHeight = Math.max(intVal, 1);
                    break;
                case 'auto_style':
                    this.autoStyle = val ? true : false;
                    break;
                case 'auto_resize':
                    this._autoResize = val ? true : false;
                    break;
                case 'draggable':
                    this.dragEnable = val ? true : false;
                    break;
                case 'resizable':
                    this.resizeEnable = val ? true : false;
                    break;
                case 'max_rows':
                    maxColRowChanged = maxColRowChanged || this._maxRows != intVal;
                    this._maxRows = intVal < 0 ? 0 : intVal;
                    break;
                case 'max_cols':
                    maxColRowChanged = maxColRowChanged || this._maxCols != intVal;
                    this._maxCols = intVal < 0 ? 0 : intVal;
                    break;
                case 'visible_rows':
                    this._visibleRows = Math.max(intVal, 0);
                    break;
                case 'visible_cols':
                    this._visibleCols = Math.max(intVal, 0);
                    break;
                case 'min_rows':
                    this.minRows = Math.max(intVal, 1);
                    break;
                case 'min_cols':
                    this.minCols = Math.max(intVal, 1);
                    break;
                case 'min_height':
                    this.minHeight = Math.max(intVal, 1);
                    break;
                case 'min_width':
                    this.minWidth = Math.max(intVal, 1);
                    break;
                case 'zoom_on_drag':
                    this._zoomOnDrag = val ? true : false;
                    break;
                case 'cascade':
                    if (this.cascade != val) {
                        this.cascade = val;
                        this._cascadeGrid();
                    }
                    break;
                case 'fix_to_grid':
                    this._fixToGrid = val ? true : false;
                    break;
                case 'maintain_ratio':
                    this._maintainRatio = val ? true : false;
                    break;
                case 'prefer_new':
                    this._preferNew = val ? true : false;
                    break;
                case 'limit_to_screen':
                    this._limitToScreen = !this._autoResize && !!val;
                    break;
                case 'center_to_screen':
                    this._centerToScreen = val ? true : false;
                    break;
                case 'resize_directions':
                    this.resizeDirections = val || ['bottomright', 'bottomleft', 'topright', 'topleft', 'right', 'left', 'bottom', 'top'];
                    break;
                case 'element_based_row_height':
                    this._elementBasedDynamicRowHeight = !!val;
                    break;
                case 'fix_item_position_direction':
                    this._itemFixDirection = val;
                    break;
                case 'fix_collision_position_direction':
                    this._collisionFixDirection = val;
                    break;
                case 'allow_overlap':
                    this._allowOverlap = !!val;
                    break;
            }
        }
        if (this._allowOverlap && this.cascade !== 'off' && this.cascade !== '') {
            console.warn('Unable to overlap items when a cascade direction is set.');
            this._allowOverlap = false;
        }
        if (this.dragEnable || this.resizeEnable) {
            this._enableListeners();
        }
        else {
            this._disableListeners();
        }
        if (this._itemFixDirection === 'cascade') {
            this._itemFixDirection = this._getFixDirectionFromCascade();
        }
        if (this._collisionFixDirection === 'cascade') {
            this._collisionFixDirection = this._getFixDirectionFromCascade();
        }
        if (this._limitToScreen) {
            /** @type {?} */
            var newMaxCols = this._getContainerColumns();
            if (this._maxCols != newMaxCols) {
                this._maxCols = newMaxCols;
                maxColRowChanged = true;
            }
        }
        if (this._limitToScreen && this._centerToScreen) {
            this.screenMargin = this._getScreenMargin();
        }
        else {
            this.screenMargin = 0;
        }
        if (this._maintainRatio) {
            if (this.colWidth && this.rowHeight) {
                this._aspectRatio = this.colWidth / this.rowHeight;
            }
            else {
                this._maintainRatio = false;
            }
        }
        if (maxColRowChanged) {
            if (this._maxCols > 0 && this._maxRows > 0) { //    Can't have both, prioritise on cascade
                switch (this.cascade) {
                    case 'left':
                    case 'right':
                        this._maxCols = 0;
                        break;
                    case 'up':
                    case 'down':
                    default:
                        this._maxRows = 0;
                        break;
                }
            }
            this._updatePositionsAfterMaxChange();
        }
        this._calculateColWidth();
        this._calculateRowHeight();
        /** @type {?} */
        var maxWidth = this._maxCols * this.colWidth;
        /** @type {?} */
        var maxHeight = this._maxRows * this.rowHeight;
        if (maxWidth > 0 && this.minWidth > maxWidth)
            this.minWidth = 0.75 * this.colWidth;
        if (maxHeight > 0 && this.minHeight > maxHeight)
            this.minHeight = 0.75 * this.rowHeight;
        if (this.minWidth > this.colWidth)
            this.minCols = Math.max(this.minCols, Math.ceil(this.minWidth / this.colWidth));
        if (this.minHeight > this.rowHeight)
            this.minRows = Math.max(this.minRows, Math.ceil(this.minHeight / this.rowHeight));
        if (this._maxCols > 0 && this.minCols > this._maxCols)
            this.minCols = 1;
        if (this._maxRows > 0 && this.minRows > this._maxRows)
            this.minRows = 1;
        this._updateRatio();
        this._items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            _this._removeFromGrid(item);
            item.setCascadeMode(_this.cascade);
        }));
        this._items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.recalculateSelf();
            _this._addToGrid(item);
        }));
        this._cascadeGrid();
        this._updateSize();
    };
    /**
     * @param {?} itemId
     * @return {?}
     */
    NgGrid.prototype.getItemPosition = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return this._items.has(itemId) ? this._items.get(itemId).getGridPosition() : null;
    };
    /**
     * @param {?} itemId
     * @return {?}
     */
    NgGrid.prototype.getItemSize = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return this._items.has(itemId) ? this._items.get(itemId).getSize() : null;
    };
    /**
     * @return {?}
     */
    NgGrid.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._differ != null) {
            /** @type {?} */
            var changes = this._differ.diff(this._config);
            if (changes != null) {
                this._applyChanges(changes);
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} margins
     * @return {?}
     */
    NgGrid.prototype.setMargins = /**
     * @param {?} margins
     * @return {?}
     */
    function (margins) {
        this.marginTop = Math.max(parseInt(margins[0]), 0);
        this.marginRight = margins.length >= 2 ? Math.max(parseInt(margins[1]), 0) : this.marginTop;
        this.marginBottom = margins.length >= 3 ? Math.max(parseInt(margins[2]), 0) : this.marginTop;
        this.marginLeft = margins.length >= 4 ? Math.max(parseInt(margins[3]), 0) : this.marginRight;
    };
    /**
     * @return {?}
     */
    NgGrid.prototype.enableDrag = /**
     * @return {?}
     */
    function () {
        this.dragEnable = true;
    };
    /**
     * @return {?}
     */
    NgGrid.prototype.disableDrag = /**
     * @return {?}
     */
    function () {
        this.dragEnable = false;
    };
    /**
     * @return {?}
     */
    NgGrid.prototype.enableResize = /**
     * @return {?}
     */
    function () {
        this.resizeEnable = true;
    };
    /**
     * @return {?}
     */
    NgGrid.prototype.disableResize = /**
     * @return {?}
     */
    function () {
        this.resizeEnable = false;
    };
    /**
     * @param {?} ngItem
     * @return {?}
     */
    NgGrid.prototype.addItem = /**
     * @param {?} ngItem
     * @return {?}
     */
    function (ngItem) {
        var _this = this;
        ngItem.setCascadeMode(this.cascade);
        if (!this._preferNew) {
            /** @type {?} */
            var newPos = this._fixGridPosition(ngItem.getGridPosition(), ngItem.getSize());
            ngItem.setGridPosition(newPos);
        }
        if (ngItem.uid === null || this._items.has(ngItem.uid)) {
            ngItem.uid = this.generateItemUid();
        }
        this._items.set(ngItem.uid, ngItem);
        this._addToGrid(ngItem);
        this._updateSize();
        this.triggerCascade().then((/**
         * @return {?}
         */
        function () {
            ngItem.recalculateSelf();
            ngItem.onCascadeEvent();
            _this._emitOnItemChange();
        }));
    };
    /**
     * @param {?} ngItem
     * @return {?}
     */
    NgGrid.prototype.removeItem = /**
     * @param {?} ngItem
     * @return {?}
     */
    function (ngItem) {
        var _this = this;
        this._removeFromGrid(ngItem);
        this._items.delete(ngItem.uid);
        if (this._destroyed)
            return;
        this.triggerCascade().then((/**
         * @return {?}
         */
        function () {
            _this._updateSize();
            _this._items.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.recalculateSelf(); }));
            _this._emitOnItemChange();
        }));
    };
    /**
     * @param {?} ngItem
     * @return {?}
     */
    NgGrid.prototype.updateItem = /**
     * @param {?} ngItem
     * @return {?}
     */
    function (ngItem) {
        var _this = this;
        this._removeFromGrid(ngItem);
        this._addToGrid(ngItem);
        this.triggerCascade().then((/**
         * @return {?}
         */
        function () {
            _this._updateSize();
            ngItem.onCascadeEvent();
        }));
    };
    /**
     * @return {?}
     */
    NgGrid.prototype.triggerCascade = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._cascadePromise) {
            this._cascadePromise = new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this._cascadePromise = null;
                    _this._cascadeGrid(null, null);
                    resolve();
                }), 0);
            }));
        }
        return this._cascadePromise;
    };
    /**
     * @return {?}
     */
    NgGrid.prototype.triggerResize = /**
     * @return {?}
     */
    function () {
        this.resizeEventHandler(null);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgGrid.prototype.resizeEventHandler = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // this._calculateColWidth();
        // this._calculateRowHeight();
        // this._updateRatio();
        if (this._limitToScreen) {
            /** @type {?} */
            var newMaxColumns = this._getContainerColumns();
            if (this._maxCols !== newMaxColumns) {
                this._maxCols = newMaxColumns;
                // this._updatePositionsAfterMaxChange();
                // this._cascadeGrid();
            }
            if (this._centerToScreen) {
                this.screenMargin = this._getScreenMargin();
                this._items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    item.recalculateSelf();
                }));
            }
        }
        else if (this._autoResize) {
            this._items.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.recalculateSelf();
            }));
        }
        // this._updateSize();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgGrid.prototype.mouseDownEventHandler = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var mousePos = this._getMousePosition(e);
        /** @type {?} */
        var item = this._getItemFromPosition(mousePos, e);
        if (item == null)
            return;
        /** @type {?} */
        var resizeDirection = item.canResize(e);
        if (this.resizeEnable && resizeDirection) {
            this._resizeReady = true;
            this._resizingItem = item;
            this._resizeDirection = resizeDirection;
            e.preventDefault();
        }
        else if (this.dragEnable && item.canDrag(e)) {
            this._dragReady = true;
            this._draggingItem = item;
            /** @type {?} */
            var itemPos = item.getPosition();
            this._posOffset = { 'left': (mousePos.left - itemPos.left), 'top': (mousePos.top - itemPos.top) };
            e.preventDefault();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgGrid.prototype.mouseUpEventHandler = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.isDragging) {
            this._dragStop(e);
        }
        else if (this.isResizing) {
            this._resizeStop(e);
        }
        else if (this._dragReady || this._resizeReady) {
            this._cleanDrag();
            this._cleanResize();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgGrid.prototype.mouseMoveEventHandler = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this._resizeReady) {
            this._resizeStart(e);
            e.preventDefault();
            return;
        }
        else if (this._dragReady) {
            this._dragStart(e);
            e.preventDefault();
            return;
        }
        if (this.isDragging) {
            this._drag(e);
        }
        else if (this.isResizing) {
            this._resize(e);
        }
        else {
            /** @type {?} */
            var mousePos = this._getMousePosition(e);
            /** @type {?} */
            var item = this._getItemFromPosition(mousePos);
            if (item) {
                item.onMouseMove(e);
            }
        }
    };
    //    Private methods
    //    Private methods
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._getFixDirectionFromCascade = 
    //    Private methods
    /**
     * @private
     * @return {?}
     */
    function () {
        switch (this.cascade) {
            case 'up':
            case 'down':
            default:
                return 'vertical';
            case 'left':
            case 'right':
                return 'horizontal';
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._updatePositionsAfterMaxChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var pos = item.getGridPosition();
            /** @type {?} */
            var dims = item.getSize();
            if (!_this._hasGridCollision(pos, dims) && _this._isWithinBounds(pos, dims) && dims.x <= _this._maxCols && dims.y <= _this._maxRows) {
                return;
            }
            _this._removeFromGrid(item);
            if (_this._maxCols > 0 && dims.x > _this._maxCols) {
                dims.x = _this._maxCols;
                item.setSize(dims);
            }
            else if (_this._maxRows > 0 && dims.y > _this._maxRows) {
                dims.y = _this._maxRows;
                item.setSize(dims);
            }
            if (_this._hasGridCollision(pos, dims) || !_this._isWithinBounds(pos, dims, true)) {
                /** @type {?} */
                var newPosition = _this._fixGridPosition(pos, dims);
                item.setGridPosition(newPosition);
            }
            _this._addToGrid(item);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._calculateColWidth = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._autoResize) {
            if (this._maxCols > 0 || this._visibleCols > 0) {
                /** @type {?} */
                var maxCols = this._maxCols > 0 ? this._maxCols : this._visibleCols;
                /** @type {?} */
                var maxWidth = this._ngEl.nativeElement.getBoundingClientRect().width;
                /** @type {?} */
                var colWidth = Math.floor(maxWidth / maxCols);
                colWidth -= (this.marginLeft + this.marginRight);
                if (colWidth > 0)
                    this.colWidth = colWidth;
            }
        }
        if (this.colWidth < this.minWidth || this.minCols > this._config.min_cols) {
            this.minCols = Math.max(this._config.min_cols, Math.ceil(this.minWidth / this.colWidth));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._calculateRowHeight = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._autoResize) {
            if (this._maxRows > 0 || this._visibleRows > 0) {
                /** @type {?} */
                var maxRows = this._maxRows > 0 ? this._maxRows : this._visibleRows;
                /** @type {?} */
                var maxHeight = void 0;
                if (this._elementBasedDynamicRowHeight) {
                    maxHeight = this._ngEl.nativeElement.getBoundingClientRect().height;
                }
                else {
                    maxHeight = window.innerHeight - this.marginTop - this.marginBottom;
                }
                /** @type {?} */
                var rowHeight = Math.max(Math.floor(maxHeight / maxRows), this.minHeight);
                rowHeight -= (this.marginTop + this.marginBottom);
                if (rowHeight > 0)
                    this.rowHeight = rowHeight;
            }
        }
        if (this.rowHeight < this.minHeight || this.minRows > this._config.min_rows) {
            this.minRows = Math.max(this._config.min_rows, Math.ceil(this.minHeight / this.rowHeight));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._updateRatio = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._autoResize || !this._maintainRatio)
            return;
        if (this._maxCols > 0 && this._visibleRows <= 0) {
            this.rowHeight = this.colWidth / this._aspectRatio;
        }
        else if (this._maxRows > 0 && this._visibleCols <= 0) {
            this.colWidth = this._aspectRatio * this.rowHeight;
        }
        else if (this._maxCols == 0 && this._maxRows == 0) {
            if (this._visibleCols > 0) {
                this.rowHeight = this.colWidth / this._aspectRatio;
            }
            else if (this._visibleRows > 0) {
                this.colWidth = this._aspectRatio * this.rowHeight;
            }
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    NgGrid.prototype._applyChanges = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        changes.forEachAddedItem((/**
         * @param {?} record
         * @return {?}
         */
        function (record) { _this._config[record.key] = record.currentValue; }));
        changes.forEachChangedItem((/**
         * @param {?} record
         * @return {?}
         */
        function (record) { _this._config[record.key] = record.currentValue; }));
        changes.forEachRemovedItem((/**
         * @param {?} record
         * @return {?}
         */
        function (record) { delete _this._config[record.key]; }));
        this.setConfig(this._config);
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgGrid.prototype._resizeStart = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.resizeEnable || !this._resizingItem)
            return;
        //    Setup
        this._resizingItem.startMoving();
        this._removeFromGrid(this._resizingItem);
        this._createPlaceholder(this._resizingItem);
        if (this._allowOverlap) {
            this._resizingItem.zIndex = this._lastZValue++;
        }
        //    Status Flags
        this.isResizing = true;
        this._resizeReady = false;
        //    Events
        this.onResizeStart.emit(this._resizingItem);
        this._resizingItem.onResizeStartEvent();
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgGrid.prototype._dragStart = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.dragEnable || !this._draggingItem)
            return;
        //    Start dragging
        console.log(this._draggingItem);
        this._draggingItem.startMoving();
        this._removeFromGrid(this._draggingItem);
        this._createPlaceholder(this._draggingItem);
        if (this._allowOverlap) {
            this._draggingItem.zIndex = this._lastZValue++;
        }
        //    Status Flags
        this.isDragging = true;
        this._dragReady = false;
        //    Events
        this.onDragStart.emit(this._draggingItem);
        this._draggingItem.onDragStartEvent();
        //    Zoom
        if (this._zoomOnDrag) {
            this._zoomOut();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._zoomOut = /**
     * @private
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this._ngEl.nativeElement, 'transform', 'scale(0.5, 0.5)');
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._resetZoom = /**
     * @private
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this._ngEl.nativeElement, 'transform', '');
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgGrid.prototype._drag = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.isDragging)
            return;
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            }
            else if (window.getSelection().removeAllRanges) {
                window.getSelection().removeAllRanges();
            }
        }
        else if (((/** @type {?} */ (document))).selection) {
            ((/** @type {?} */ (document))).selection.empty();
        }
        /** @type {?} */
        var mousePos = this._getMousePosition(e);
        /** @type {?} */
        var newL = (mousePos.left - this._posOffset.left);
        /** @type {?} */
        var newT = (mousePos.top - this._posOffset.top);
        /** @type {?} */
        var itemPos = this._draggingItem.getGridPosition();
        /** @type {?} */
        var gridPos = this._calculateGridPosition(newL, newT);
        /** @type {?} */
        var dims = this._draggingItem.getSize();
        gridPos = this._fixPosToBoundsX(gridPos, dims);
        if (!this._isWithinBoundsY(gridPos, dims)) {
            gridPos = this._fixPosToBoundsY(gridPos, dims);
        }
        if (gridPos.col != itemPos.col || gridPos.row != itemPos.row) {
            this._draggingItem.setGridPosition(gridPos, this._fixToGrid);
            this._placeholderRef.instance.setGridPosition(gridPos);
            if (['up', 'down', 'left', 'right'].indexOf(this.cascade) >= 0) {
                this._fixGridCollisions(gridPos, dims);
                this._cascadeGrid(gridPos, dims);
            }
        }
        if (!this._fixToGrid) {
            this._draggingItem.setPosition(newL, newT);
        }
        this.onDrag.emit(this._draggingItem);
        this._draggingItem.onDragEvent();
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgGrid.prototype._resize = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.isResizing) {
            return;
        }
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            }
            else if (window.getSelection().removeAllRanges) {
                window.getSelection().removeAllRanges();
            }
        }
        else if (((/** @type {?} */ (document))).selection) {
            ((/** @type {?} */ (document))).selection.empty();
        }
        /** @type {?} */
        var mousePos = this._getMousePosition(e);
        /** @type {?} */
        var itemPos = this._resizingItem.getPosition();
        /** @type {?} */
        var itemDims = this._resizingItem.getDimensions();
        /** @type {?} */
        var endCorner = {
            left: itemPos.left + itemDims.width,
            top: itemPos.top + itemDims.height,
        };
        /** @type {?} */
        var resizeTop = this._resizeDirection.includes('top');
        /** @type {?} */
        var resizeBottom = this._resizeDirection.includes('bottom');
        /** @type {?} */
        var resizeLeft = this._resizeDirection.includes('left');
        /** @type {?} */
        var resizeRight = this._resizeDirection.includes('right');
        // Calculate new width and height based upon resize direction
        /** @type {?} */
        var newW = resizeRight
            ? (mousePos.left - itemPos.left + 1)
            : resizeLeft
                ? (endCorner.left - mousePos.left + 1)
                : itemDims.width;
        /** @type {?} */
        var newH = resizeBottom
            ? (mousePos.top - itemPos.top + 1)
            : resizeTop
                ? (endCorner.top - mousePos.top + 1)
                : itemDims.height;
        if (newW < this.minWidth)
            newW = this.minWidth;
        if (newH < this.minHeight)
            newH = this.minHeight;
        if (newW < this._resizingItem.minWidth)
            newW = this._resizingItem.minWidth;
        if (newH < this._resizingItem.minHeight)
            newH = this._resizingItem.minHeight;
        /** @type {?} */
        var newX = itemPos.left;
        /** @type {?} */
        var newY = itemPos.top;
        if (resizeLeft)
            newX = endCorner.left - newW;
        if (resizeTop)
            newY = endCorner.top - newH;
        /** @type {?} */
        var calcSize = this._calculateGridSize(newW, newH);
        /** @type {?} */
        var itemSize = this._resizingItem.getSize();
        /** @type {?} */
        var iGridPos = this._resizingItem.getGridPosition();
        /** @type {?} */
        var bottomRightCorner = {
            col: iGridPos.col + itemSize.x,
            row: iGridPos.row + itemSize.y,
        };
        /** @type {?} */
        var targetPos = Object.assign({}, iGridPos);
        if (this._resizeDirection.includes('top'))
            targetPos.row = bottomRightCorner.row - calcSize.y;
        if (this._resizeDirection.includes('left'))
            targetPos.col = bottomRightCorner.col - calcSize.x;
        if (!this._isWithinBoundsX(targetPos, calcSize))
            calcSize = this._fixSizeToBoundsX(targetPos, calcSize);
        if (!this._isWithinBoundsY(targetPos, calcSize))
            calcSize = this._fixSizeToBoundsY(targetPos, calcSize);
        calcSize = this._resizingItem.fixResize(calcSize);
        if (calcSize.x != itemSize.x || calcSize.y != itemSize.y) {
            this._resizingItem.setGridPosition(targetPos, this._fixToGrid);
            this._placeholderRef.instance.setGridPosition(targetPos);
            this._resizingItem.setSize(calcSize, this._fixToGrid);
            this._placeholderRef.instance.setSize(calcSize);
            if (['up', 'down', 'left', 'right'].indexOf(this.cascade) >= 0) {
                this._fixGridCollisions(targetPos, calcSize);
                this._cascadeGrid(targetPos, calcSize);
            }
        }
        if (!this._fixToGrid) {
            this._resizingItem.setDimensions(newW, newH);
            this._resizingItem.setPosition(newX, newY);
        }
        this.onResize.emit(this._resizingItem);
        this._resizingItem.onResizeEvent();
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgGrid.prototype._dragStop = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        /** @type {?} */
        var itemPos = this._draggingItem.getGridPosition();
        this._draggingItem.setGridPosition(itemPos);
        this._addToGrid(this._draggingItem);
        this._cascadeGrid();
        this._updateSize();
        this._draggingItem.stopMoving();
        this._draggingItem.onDragStopEvent();
        this.onDragStop.emit(this._draggingItem);
        this._cleanDrag();
        this._placeholderRef.destroy();
        this._emitOnItemChange();
        if (this._zoomOnDrag) {
            this._resetZoom();
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgGrid.prototype._resizeStop = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.isResizing)
            return;
        this.isResizing = false;
        /** @type {?} */
        var itemDims = this._resizingItem.getSize();
        this._resizingItem.setSize(itemDims);
        /** @type {?} */
        var itemPos = this._resizingItem.getGridPosition();
        this._resizingItem.setGridPosition(itemPos);
        this._addToGrid(this._resizingItem);
        this._cascadeGrid();
        this._updateSize();
        this._resizingItem.stopMoving();
        this._resizingItem.onResizeStopEvent();
        this.onResizeStop.emit(this._resizingItem);
        this._cleanResize();
        this._placeholderRef.destroy();
        this._emitOnItemChange();
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._cleanDrag = /**
     * @private
     * @return {?}
     */
    function () {
        this._draggingItem = null;
        this._posOffset = null;
        this.isDragging = false;
        this._dragReady = false;
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._cleanResize = /**
     * @private
     * @return {?}
     */
    function () {
        this._resizingItem = null;
        this._resizeDirection = null;
        this.isResizing = false;
        this._resizeReady = false;
    };
    /**
     * @private
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    NgGrid.prototype._calculateGridSize = /**
     * @private
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (width, height) {
        width += this.marginLeft + this.marginRight;
        height += this.marginTop + this.marginBottom;
        /** @type {?} */
        var sizex = Math.max(this.minCols, Math.round(width / (this.colWidth + this.marginLeft + this.marginRight)));
        /** @type {?} */
        var sizey = Math.max(this.minRows, Math.round(height / (this.rowHeight + this.marginTop + this.marginBottom)));
        if (!this._isWithinBoundsX({ col: 1, row: 1 }, { x: sizex, y: sizey }))
            sizex = this._maxCols;
        if (!this._isWithinBoundsY({ col: 1, row: 1 }, { x: sizex, y: sizey }))
            sizey = this._maxRows;
        return { 'x': sizex, 'y': sizey };
    };
    /**
     * @private
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    NgGrid.prototype._calculateGridPosition = /**
     * @private
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (left, top) {
        /** @type {?} */
        var col = Math.max(1, Math.round(left / (this.colWidth + this.marginLeft + this.marginRight)) + 1);
        /** @type {?} */
        var row = Math.max(1, Math.round(top / (this.rowHeight + this.marginTop + this.marginBottom)) + 1);
        if (!this._isWithinBoundsX({ col: col, row: row }, { x: 1, y: 1 }))
            col = this._maxCols;
        if (!this._isWithinBoundsY({ col: col, row: row }, { x: 1, y: 1 }))
            row = this._maxRows;
        return { 'col': col, 'row': row };
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    NgGrid.prototype._hasGridCollision = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    function (pos, dims) {
        return false;
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    NgGrid.prototype._getCollisions = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    function (pos, dims) {
        var _this = this;
        if (this._allowOverlap)
            return [];
        /** @type {?} */
        var returns = [];
        if (!pos.col) {
            pos.col = 1;
        }
        if (!pos.row) {
            pos.row = 1;
        }
        /** @type {?} */
        var leftCol = pos.col;
        /** @type {?} */
        var rightCol = pos.col + dims.x;
        /** @type {?} */
        var topRow = pos.row;
        /** @type {?} */
        var bottomRow = pos.row + dims.y;
        this._itemsInGrid.forEach((/**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) {
            /** @type {?} */
            var item = _this._items.get(itemId);
            if (!item) {
                _this._itemsInGrid.delete(itemId);
                return;
            }
            /** @type {?} */
            var itemLeftCol = item.col;
            /** @type {?} */
            var itemRightCol = item.col + item.sizex;
            /** @type {?} */
            var itemTopRow = item.row;
            /** @type {?} */
            var itemBottomRow = item.row + item.sizey;
            /** @type {?} */
            var withinColumns = leftCol < itemRightCol && itemLeftCol < rightCol;
            /** @type {?} */
            var withinRows = topRow < itemBottomRow && itemTopRow < bottomRow;
            if (withinColumns && withinRows) {
                returns.push(item);
            }
        }));
        return returns;
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    NgGrid.prototype._fixGridCollisions = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    function (pos, dims) {
        var e_1, _a;
        /** @type {?} */
        var collisions = this._getCollisions(pos, dims);
        if (collisions.length === 0) {
            return;
        }
        try {
            for (var collisions_1 = __values(collisions), collisions_1_1 = collisions_1.next(); !collisions_1_1.done; collisions_1_1 = collisions_1.next()) {
                var collision = collisions_1_1.value;
                this._removeFromGrid(collision);
                /** @type {?} */
                var itemDims = collision.getSize();
                /** @type {?} */
                var itemPos = collision.getGridPosition();
                /** @type {?} */
                var newItemPos = { col: itemPos.col, row: itemPos.row };
                if (this._collisionFixDirection === 'vertical') {
                    newItemPos.row = pos.row + dims.y;
                    if (!this._isWithinBoundsY(newItemPos, itemDims)) {
                        newItemPos.col = pos.col + dims.x;
                        newItemPos.row = 1;
                    }
                }
                else if (this._collisionFixDirection === 'horizontal') {
                    newItemPos.col = pos.col + dims.x;
                    if (!this._isWithinBoundsX(newItemPos, itemDims)) {
                        newItemPos.col = 1;
                        newItemPos.row = pos.row + dims.y;
                    }
                }
                collision.setGridPosition(newItemPos);
                this._fixGridCollisions(newItemPos, itemDims);
                this._addToGrid(collision);
                collision.onCascadeEvent();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (collisions_1_1 && !collisions_1_1.done && (_a = collisions_1.return)) _a.call(collisions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._fixGridCollisions(pos, dims);
    };
    /**
     * @private
     * @param {?=} pos
     * @param {?=} dims
     * @return {?}
     */
    NgGrid.prototype._cascadeGrid = /**
     * @private
     * @param {?=} pos
     * @param {?=} dims
     * @return {?}
     */
    function (pos, dims) {
        var e_2, _a, e_3, _b;
        var _this = this;
        if (this._destroyed)
            return;
        if (this._allowOverlap)
            return;
        if (!pos !== !dims)
            throw new Error('Cannot cascade with only position and not dimensions');
        if (this.isDragging && this._draggingItem && !pos && !dims) {
            pos = this._draggingItem.getGridPosition();
            dims = this._draggingItem.getSize();
        }
        else if (this.isResizing && this._resizingItem && !pos && !dims) {
            pos = this._resizingItem.getGridPosition();
            dims = this._resizingItem.getSize();
        }
        /** @type {?} */
        var itemsInGrid = Array.from(this._itemsInGrid, (/**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) { return _this._items.get(itemId); }));
        switch (this.cascade) {
            case 'up':
            case 'down':
                itemsInGrid = itemsInGrid.sort(sortItemsByPositionVertical);
                /** @type {?} */
                var lowestRowPerColumn = new Map();
                try {
                    for (var itemsInGrid_1 = __values(itemsInGrid), itemsInGrid_1_1 = itemsInGrid_1.next(); !itemsInGrid_1_1.done; itemsInGrid_1_1 = itemsInGrid_1.next()) {
                        var item = itemsInGrid_1_1.value;
                        if (item.isFixed)
                            continue;
                        /** @type {?} */
                        var itemDims = item.getSize();
                        /** @type {?} */
                        var itemPos = item.getGridPosition();
                        /** @type {?} */
                        var lowestRowForItem = lowestRowPerColumn.get(itemPos.col) || 1;
                        for (var i = 1; i < itemDims.x; i++) {
                            /** @type {?} */
                            var lowestRowForColumn = lowestRowPerColumn.get(itemPos.col + i) || 1;
                            lowestRowForItem = Math.max(lowestRowForColumn, lowestRowForItem);
                        }
                        /** @type {?} */
                        var leftCol = itemPos.col;
                        /** @type {?} */
                        var rightCol = itemPos.col + itemDims.x;
                        if (pos && dims) {
                            /** @type {?} */
                            var withinColumns = rightCol > pos.col && leftCol < (pos.col + dims.x);
                            if (withinColumns) { // If our element is in one of the item's columns
                                // If our element is in one of the item's columns
                                /** @type {?} */
                                var roomAboveItem = itemDims.y <= (pos.row - lowestRowForItem);
                                if (!roomAboveItem) { // Item can't fit above our element
                                    lowestRowForItem = Math.max(lowestRowForItem, pos.row + dims.y); // Set the lowest row to be below it
                                }
                            }
                        }
                        /** @type {?} */
                        var newPos = { col: itemPos.col, row: lowestRowForItem };
                        //    What if it's not within bounds Y?
                        if (lowestRowForItem != itemPos.row && this._isWithinBoundsY(newPos, itemDims)) { // If the item is not already on this row move it up
                            this._removeFromGrid(item);
                            item.setGridPosition(newPos);
                            item.onCascadeEvent();
                            this._addToGrid(item);
                        }
                        for (var i = 0; i < itemDims.x; i++) {
                            lowestRowPerColumn.set(itemPos.col + i, lowestRowForItem + itemDims.y); // Update the lowest row to be below the item
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (itemsInGrid_1_1 && !itemsInGrid_1_1.done && (_a = itemsInGrid_1.return)) _a.call(itemsInGrid_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                break;
            case 'left':
            case 'right':
                itemsInGrid = itemsInGrid.sort(sortItemsByPositionHorizontal);
                /** @type {?} */
                var lowestColumnPerRow = new Map();
                try {
                    for (var itemsInGrid_2 = __values(itemsInGrid), itemsInGrid_2_1 = itemsInGrid_2.next(); !itemsInGrid_2_1.done; itemsInGrid_2_1 = itemsInGrid_2.next()) {
                        var item = itemsInGrid_2_1.value;
                        /** @type {?} */
                        var itemDims = item.getSize();
                        /** @type {?} */
                        var itemPos = item.getGridPosition();
                        /** @type {?} */
                        var lowestColumnForItem = lowestColumnPerRow.get(itemPos.row) || 1;
                        for (var i = 1; i < itemDims.y; i++) {
                            /** @type {?} */
                            var lowestOffsetColumn = lowestColumnPerRow.get(itemPos.row + i) || 1;
                            lowestColumnForItem = Math.max(lowestOffsetColumn, lowestColumnForItem);
                        }
                        /** @type {?} */
                        var topRow = itemPos.row;
                        /** @type {?} */
                        var bottomRow = itemPos.row + itemDims.y;
                        if (pos && dims) {
                            /** @type {?} */
                            var withinRows = bottomRow > pos.col && topRow < (pos.col + dims.x);
                            if (withinRows) { // If our element is in one of the item's rows
                                // If our element is in one of the item's rows
                                /** @type {?} */
                                var roomNextToItem = itemDims.x <= (pos.col - lowestColumnForItem);
                                if (!roomNextToItem) { // Item can't fit next to our element
                                    lowestColumnForItem = Math.max(lowestColumnForItem, pos.col + dims.x); // Set the lowest col to be the other side of it
                                }
                            }
                        }
                        /** @type {?} */
                        var newPos = { col: lowestColumnForItem, row: itemPos.row };
                        if (lowestColumnForItem != itemPos.col && this._isWithinBoundsX(newPos, itemDims)) { // If the item is not already on this col move it up
                            this._removeFromGrid(item);
                            item.setGridPosition(newPos);
                            item.onCascadeEvent();
                            this._addToGrid(item);
                        }
                        for (var i = 0; i < itemDims.y; i++) {
                            lowestColumnPerRow.set(itemPos.row + i, lowestColumnForItem + itemDims.x); // Update the lowest col to be below the item
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (itemsInGrid_2_1 && !itemsInGrid_2_1.done && (_b = itemsInGrid_2.return)) _b.call(itemsInGrid_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                break;
            default:
                break;
        }
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    NgGrid.prototype._fixGridPosition = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    function (pos, dims) {
        var e_4, _a, e_5, _b;
        if (!this._hasGridCollision(pos, dims))
            return pos;
        /** @type {?} */
        var maxRow = this._maxRows === 0 ? this._getMaxRow() : this._maxRows;
        /** @type {?} */
        var maxCol = this._maxCols === 0 ? this._getMaxCol() : this._maxCols;
        /** @type {?} */
        var newPos = {
            col: pos.col,
            row: pos.row,
        };
        if (this._itemFixDirection === 'vertical') {
            fixLoop: for (; newPos.col <= maxRow;) {
                /** @type {?} */
                var itemsInPath = this._getItemsInVerticalPath(newPos, dims, newPos.row);
                /** @type {?} */
                var nextRow = newPos.row;
                try {
                    for (var itemsInPath_1 = (e_4 = void 0, __values(itemsInPath)), itemsInPath_1_1 = itemsInPath_1.next(); !itemsInPath_1_1.done; itemsInPath_1_1 = itemsInPath_1.next()) {
                        var item = itemsInPath_1_1.value;
                        if (item.row - nextRow >= dims.y) {
                            newPos.row = nextRow;
                            break fixLoop;
                        }
                        nextRow = item.row + item.sizey;
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (itemsInPath_1_1 && !itemsInPath_1_1.done && (_a = itemsInPath_1.return)) _a.call(itemsInPath_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                if (maxRow - nextRow >= dims.y) {
                    newPos.row = nextRow;
                    break fixLoop;
                }
                newPos.col = Math.max(newPos.col + 1, Math.min.apply(Math, itemsInPath.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.col + dims.x; }))));
                newPos.row = 1;
            }
        }
        else if (this._itemFixDirection === 'horizontal') {
            fixLoop: for (; newPos.row <= maxRow;) {
                /** @type {?} */
                var itemsInPath = this._getItemsInHorizontalPath(newPos, dims, newPos.col);
                /** @type {?} */
                var nextCol = newPos.col;
                try {
                    for (var itemsInPath_2 = (e_5 = void 0, __values(itemsInPath)), itemsInPath_2_1 = itemsInPath_2.next(); !itemsInPath_2_1.done; itemsInPath_2_1 = itemsInPath_2.next()) {
                        var item = itemsInPath_2_1.value;
                        if (item.col - nextCol >= dims.x) {
                            newPos.col = nextCol;
                            break fixLoop;
                        }
                        nextCol = item.col + item.sizex;
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (itemsInPath_2_1 && !itemsInPath_2_1.done && (_b = itemsInPath_2.return)) _b.call(itemsInPath_2);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                if (maxCol - nextCol >= dims.x) {
                    newPos.col = nextCol;
                    break fixLoop;
                }
                newPos.row = Math.max(newPos.row + 1, Math.min.apply(Math, itemsInPath.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.row + dims.y; }))));
                newPos.col = 1;
            }
        }
        return newPos;
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @param {?=} startColumn
     * @return {?}
     */
    NgGrid.prototype._getItemsInHorizontalPath = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @param {?=} startColumn
     * @return {?}
     */
    function (pos, dims, startColumn) {
        var _this = this;
        if (startColumn === void 0) { startColumn = 0; }
        /** @type {?} */
        var itemsInPath = [];
        /** @type {?} */
        var topRow = pos.row + dims.y - 1;
        this._itemsInGrid.forEach((/**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) {
            /** @type {?} */
            var item = _this._items.get(itemId);
            if (item.col + item.sizex - 1 < startColumn) {
                return;
            } // Item falls after start column
            if (item.row > topRow) {
                return;
            } // Item falls above path
            if (item.row + item.sizey - 1 < pos.row) {
                return;
            } // Item falls below path
            itemsInPath.push(item);
        }));
        return itemsInPath;
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @param {?=} startRow
     * @return {?}
     */
    NgGrid.prototype._getItemsInVerticalPath = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @param {?=} startRow
     * @return {?}
     */
    function (pos, dims, startRow) {
        var _this = this;
        if (startRow === void 0) { startRow = 0; }
        /** @type {?} */
        var itemsInPath = [];
        /** @type {?} */
        var rightCol = pos.col + dims.x - 1;
        this._itemsInGrid.forEach((/**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) {
            /** @type {?} */
            var item = _this._items.get(itemId);
            if (item.row + item.sizey - 1 < startRow) {
                return;
            } // Item falls above start row
            if (item.col > rightCol) {
                return;
            } // Item falls after path
            if (item.col + item.sizex - 1 < pos.col) {
                return;
            } // Item falls before path
            itemsInPath.push(item);
        }));
        return itemsInPath;
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @param {?=} allowExcessiveItems
     * @return {?}
     */
    NgGrid.prototype._isWithinBoundsX = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @param {?=} allowExcessiveItems
     * @return {?}
     */
    function (pos, dims, allowExcessiveItems) {
        if (allowExcessiveItems === void 0) { allowExcessiveItems = false; }
        return this._maxCols == 0 || (allowExcessiveItems && pos.col == 1) || (pos.col + dims.x - 1) <= this._maxCols;
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    NgGrid.prototype._fixPosToBoundsX = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    function (pos, dims) {
        if (!this._isWithinBoundsX(pos, dims)) {
            pos.col = Math.max(this._maxCols - (dims.x - 1), 1);
            pos.row++;
        }
        return pos;
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    NgGrid.prototype._fixSizeToBoundsX = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    function (pos, dims) {
        if (!this._isWithinBoundsX(pos, dims)) {
            dims.x = Math.max(this._maxCols - (pos.col - 1), 1);
            dims.y++;
        }
        return dims;
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @param {?=} allowExcessiveItems
     * @return {?}
     */
    NgGrid.prototype._isWithinBoundsY = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @param {?=} allowExcessiveItems
     * @return {?}
     */
    function (pos, dims, allowExcessiveItems) {
        if (allowExcessiveItems === void 0) { allowExcessiveItems = false; }
        return this._maxRows == 0 || (allowExcessiveItems && pos.row == 1) || (pos.row + dims.y - 1) <= this._maxRows;
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    NgGrid.prototype._fixPosToBoundsY = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    function (pos, dims) {
        if (!this._isWithinBoundsY(pos, dims)) {
            pos.row = Math.max(this._maxRows - (dims.y - 1), 1);
            pos.col++;
        }
        return pos;
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    NgGrid.prototype._fixSizeToBoundsY = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    function (pos, dims) {
        if (!this._isWithinBoundsY(pos, dims)) {
            dims.y = Math.max(this._maxRows - (pos.row - 1), 1);
            dims.x++;
        }
        return dims;
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @param {?=} allowExcessiveItems
     * @return {?}
     */
    NgGrid.prototype._isWithinBounds = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @param {?=} allowExcessiveItems
     * @return {?}
     */
    function (pos, dims, allowExcessiveItems) {
        if (allowExcessiveItems === void 0) { allowExcessiveItems = false; }
        return this._isWithinBoundsX(pos, dims, allowExcessiveItems) && this._isWithinBoundsY(pos, dims, allowExcessiveItems);
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    NgGrid.prototype._fixPosToBounds = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    function (pos, dims) {
        return this._fixPosToBoundsX(this._fixPosToBoundsY(pos, dims), dims);
    };
    /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    NgGrid.prototype._fixSizeToBounds = /**
     * @private
     * @param {?} pos
     * @param {?} dims
     * @return {?}
     */
    function (pos, dims) {
        return this._fixSizeToBoundsX(pos, this._fixSizeToBoundsY(pos, dims));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    NgGrid.prototype._addToGrid = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var pos = item.getGridPosition();
        /** @type {?} */
        var dims = item.getSize();
        if (this._hasGridCollision(pos, dims)) {
            this._fixGridCollisions(pos, dims);
            pos = item.getGridPosition();
        }
        if (this._allowOverlap) {
            item.zIndex = this._lastZValue++;
        }
        this._itemsInGrid.add(item.uid);
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    NgGrid.prototype._removeFromGrid = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._itemsInGrid.delete(item.uid);
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._updateSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._destroyed)
            return;
        /** @type {?} */
        var maxCol = this._getMaxCol();
        /** @type {?} */
        var maxRow = this._getMaxRow();
        if (maxCol != this._curMaxCol || maxRow != this._curMaxRow) {
            this._curMaxCol = maxCol;
            this._curMaxRow = maxRow;
        }
        this._renderer.setStyle(this._ngEl.nativeElement, 'width', '100%'); //(maxCol * (this.colWidth + this.marginLeft + this.marginRight))+'px');
        if (!this._elementBasedDynamicRowHeight) {
            this._renderer.setStyle(this._ngEl.nativeElement, 'height', (maxRow * (this.rowHeight + this.marginTop + this.marginBottom)) + 'px');
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._getMaxRow = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var itemsRows = Array.from(this._itemsInGrid, (/**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) {
            /** @type {?} */
            var item = _this._items.get(itemId);
            if (!item)
                return 0;
            return item.row + item.sizey - 1;
        }));
        return Math.max.apply(null, itemsRows);
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._getMaxCol = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var itemsCols = Array.from(this._itemsInGrid, (/**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) {
            /** @type {?} */
            var item = _this._items.get(itemId);
            if (!item)
                return 0;
            return item.col + item.sizex - 1;
        }));
        return Math.max.apply(null, itemsCols);
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgGrid.prototype._getMousePosition = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if ((((/** @type {?} */ (window))).TouchEvent && e instanceof TouchEvent) || (e.touches || e.changedTouches)) {
            e = e.touches.length > 0 ? e.touches[0] : e.changedTouches[0];
        }
        /** @type {?} */
        var refPos = this._ngEl.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var left = e.clientX - refPos.left;
        /** @type {?} */
        var top = e.clientY - refPos.top;
        if (this.cascade == 'down')
            top = refPos.top + refPos.height - e.clientY;
        if (this.cascade == 'right')
            left = refPos.left + refPos.width - e.clientX;
        if (this.isDragging && this._zoomOnDrag) {
            left *= 2;
            top *= 2;
        }
        return {
            left: left,
            top: top
        };
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgGrid.prototype._getAbsoluteMousePosition = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if ((((/** @type {?} */ (window))).TouchEvent && e instanceof TouchEvent) || (e.touches || e.changedTouches)) {
            e = e.touches.length > 0 ? e.touches[0] : e.changedTouches[0];
        }
        return {
            left: e.clientX,
            top: e.clientY
        };
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._getContainerColumns = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxWidth = this._ngEl.nativeElement.getBoundingClientRect().width;
        /** @type {?} */
        var itemWidth = this.colWidth + this.marginLeft + this.marginRight;
        return Math.floor(maxWidth / itemWidth);
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._getContainerRows = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxHeight = window.innerHeight - this.marginTop - this.marginBottom;
        return Math.floor(maxHeight / (this.rowHeight + this.marginTop + this.marginBottom));
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._getScreenMargin = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxWidth = this._ngEl.nativeElement.getBoundingClientRect().width;
        /** @type {?} */
        var itemWidth = this.colWidth + this.marginLeft + this.marginRight;
        return Math.floor((maxWidth - (this._maxCols * itemWidth)) / 2);
    };
    /**
     * @private
     * @param {?} position
     * @param {?=} e
     * @return {?}
     */
    NgGrid.prototype._getItemFromPosition = /**
     * @private
     * @param {?} position
     * @param {?=} e
     * @return {?}
     */
    function (position, e) {
        var _this = this;
        return Array.from(this._itemsInGrid, (/**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) { return _this._items.get(itemId); })).find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!item)
                return false;
            /** @type {?} */
            var size = item.getDimensions();
            /** @type {?} */
            var pos = item.getPosition();
            if (e) {
                if (e.target.closest('.modal-window.grid-item') === item.containerRef.element.nativeElement) {
                    return true;
                }
                else {
                    return false;
                }
            }
            return position.left >= pos.left && position.left < (pos.left + size.width) &&
                position.top >= pos.top && position.top < (pos.top + size.height);
        }));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    NgGrid.prototype._createPlaceholder = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var pos = item.getGridPosition();
        /** @type {?} */
        var dims = item.getSize();
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(NgGridPlaceholder);
        /** @type {?} */
        var componentRef = item.containerRef.createComponent(factory);
        this._placeholderRef = componentRef;
        /** @type {?} */
        var placeholder = componentRef.instance;
        placeholder.registerGrid(this);
        placeholder.setCascadeMode(this.cascade);
        placeholder.setGridPosition({ col: pos.col, row: pos.row });
        placeholder.setSize({ x: dims.x, y: dims.y });
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._emitOnItemChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var itemOutput = Array.from(this._itemsInGrid)
            .map((/**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) { return _this._items.get(itemId); }))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !!item; }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.getEventOutput(); }));
        this.onItemChange.emit(itemOutput);
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._defineListeners = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this._ngEl.nativeElement;
        this._documentMousemove$ = fromEvent(document, 'mousemove');
        this._documentMouseup$ = fromEvent(document, 'mouseup');
        this._mousedown$ = fromEvent(element, 'mousedown');
        this._mousemove$ = fromEvent(element, 'mousemove');
        this._mouseup$ = fromEvent(element, 'mouseup');
        this._touchstart$ = fromEvent(element, 'touchstart');
        this._touchmove$ = fromEvent(element, 'touchmove');
        this._touchend$ = fromEvent(element, 'touchend');
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._enableListeners = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._enabledListener) {
            return;
        }
        this._enableMouseListeners();
        if (this._isTouchDevice()) {
            this._enableTouchListeners();
        }
        this._enabledListener = true;
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._disableListeners = /**
     * @private
     * @return {?}
     */
    function () {
        this._subscriptions.forEach((/**
         * @param {?} subs
         * @return {?}
         */
        function (subs) { return subs.unsubscribe(); }));
        this._enabledListener = false;
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._isTouchDevice = /**
     * @private
     * @return {?}
     */
    function () {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    ;
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._enableTouchListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var touchstartSubs = this._touchstart$.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.mouseDownEventHandler(e); }));
        /** @type {?} */
        var touchmoveSubs = this._touchmove$.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.mouseMoveEventHandler(e); }));
        /** @type {?} */
        var touchendSubs = this._touchend$.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.mouseUpEventHandler(e); }));
        this._subscriptions.push(touchstartSubs, touchmoveSubs, touchendSubs);
    };
    /**
     * @private
     * @return {?}
     */
    NgGrid.prototype._enableMouseListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var documentMousemoveSubs = this._documentMousemove$.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.mouseMoveEventHandler(e); }));
        /** @type {?} */
        var documentMouseupSubs = this._documentMouseup$.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.mouseUpEventHandler(e); }));
        /** @type {?} */
        var mousedownSubs = this._mousedown$.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.mouseDownEventHandler(e); }));
        /** @type {?} */
        var mousemoveSubs = this._mousemove$.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.mouseMoveEventHandler(e); }));
        /** @type {?} */
        var mouseupSubs = this._mouseup$.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.mouseUpEventHandler(e); }));
        this._subscriptions.push(documentMousemoveSubs, documentMouseupSubs, mousedownSubs, mousemoveSubs, mouseupSubs);
    };
    NgGrid.CONST_DEFAULT_RESIZE_DIRECTIONS = [
        'bottomright',
        'bottomleft',
        'topright',
        'topleft',
        'right',
        'left',
        'bottom',
        'top',
    ];
    // Default config
    NgGrid.CONST_DEFAULT_CONFIG = {
        margins: [10],
        draggable: true,
        resizable: true,
        max_cols: 0,
        max_rows: 0,
        visible_cols: 0,
        visible_rows: 0,
        col_width: 250,
        row_height: 250,
        cascade: 'up',
        min_width: 100,
        min_height: 100,
        fix_to_grid: false,
        auto_style: true,
        auto_resize: false,
        maintain_ratio: false,
        prefer_new: false,
        zoom_on_drag: false,
        limit_to_screen: false,
        center_to_screen: false,
        resize_directions: NgGrid.CONST_DEFAULT_RESIZE_DIRECTIONS,
        element_based_row_height: false,
        fix_item_position_direction: 'cascade',
        fix_collision_position_direction: 'cascade',
        allow_overlap: false,
    };
    NgGrid.decorators = [
        { type: Directive, args: [{
                    selector: '[ngGrid]',
                    inputs: ['config: ngGrid'],
                    host: {
                        '(window:resize)': 'resizeEventHandler($event)',
                    }
                },] }
    ];
    /** @nocollapse */
    NgGrid.ctorParameters = function () { return [
        { type: KeyValueDiffers },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ComponentFactoryResolver }
    ]; };
    NgGrid.propDecorators = {
        onDragStart: [{ type: Output }],
        onDrag: [{ type: Output }],
        onDragStop: [{ type: Output }],
        onResizeStart: [{ type: Output }],
        onResize: [{ type: Output }],
        onResizeStop: [{ type: Output }],
        onItemChange: [{ type: Output }]
    };
    return NgGrid;
}());
if (false) {
    /** @type {?} */
    NgGrid.CONST_DEFAULT_RESIZE_DIRECTIONS;
    /**
     * @type {?}
     * @private
     */
    NgGrid.CONST_DEFAULT_CONFIG;
    /** @type {?} */
    NgGrid.prototype.onDragStart;
    /** @type {?} */
    NgGrid.prototype.onDrag;
    /** @type {?} */
    NgGrid.prototype.onDragStop;
    /** @type {?} */
    NgGrid.prototype.onResizeStart;
    /** @type {?} */
    NgGrid.prototype.onResize;
    /** @type {?} */
    NgGrid.prototype.onResizeStop;
    /** @type {?} */
    NgGrid.prototype.onItemChange;
    /** @type {?} */
    NgGrid.prototype.colWidth;
    /** @type {?} */
    NgGrid.prototype.rowHeight;
    /** @type {?} */
    NgGrid.prototype.minCols;
    /** @type {?} */
    NgGrid.prototype.minRows;
    /** @type {?} */
    NgGrid.prototype.marginTop;
    /** @type {?} */
    NgGrid.prototype.marginRight;
    /** @type {?} */
    NgGrid.prototype.marginBottom;
    /** @type {?} */
    NgGrid.prototype.marginLeft;
    /** @type {?} */
    NgGrid.prototype.screenMargin;
    /** @type {?} */
    NgGrid.prototype.isDragging;
    /** @type {?} */
    NgGrid.prototype.isResizing;
    /** @type {?} */
    NgGrid.prototype.autoStyle;
    /** @type {?} */
    NgGrid.prototype.resizeEnable;
    /** @type {?} */
    NgGrid.prototype.dragEnable;
    /** @type {?} */
    NgGrid.prototype.cascade;
    /** @type {?} */
    NgGrid.prototype.minWidth;
    /** @type {?} */
    NgGrid.prototype.minHeight;
    /** @type {?} */
    NgGrid.prototype.resizeDirections;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._items;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._draggingItem;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._resizingItem;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._resizeDirection;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._itemsInGrid;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._containerWidth;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._containerHeight;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._maxCols;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._maxRows;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._visibleCols;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._visibleRows;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._setWidth;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._setHeight;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._posOffset;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._adding;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._placeholderRef;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._fixToGrid;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._autoResize;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._differ;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._maintainRatio;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._aspectRatio;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._preferNew;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._zoomOnDrag;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._limitToScreen;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._centerToScreen;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._curMaxRow;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._curMaxCol;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._dragReady;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._resizeReady;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._elementBasedDynamicRowHeight;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._itemFixDirection;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._collisionFixDirection;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._allowOverlap;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._cascadePromise;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._lastZValue;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._documentMousemove$;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._documentMouseup$;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._mousedown$;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._mousemove$;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._mouseup$;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._touchstart$;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._touchmove$;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._touchend$;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._subscriptions;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._enabledListener;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._config;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._differs;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._ngEl;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    NgGrid.prototype.componentFactoryResolver;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: directives/NgGridItem.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgGridItem = /** @class */ (function () {
    // Constructor
    function NgGridItem(_differs, _ngEl, _renderer, _ngGrid, containerRef) {
        this._differs = _differs;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._ngGrid = _ngGrid;
        this.containerRef = containerRef;
        // Event Emitters
        this.onItemChange = new EventEmitter(false);
        this.onDragStart = new EventEmitter();
        this.onDrag = new EventEmitter();
        this.onDragStop = new EventEmitter();
        this.onDragAny = new EventEmitter();
        this.onResizeStart = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onResizeStop = new EventEmitter();
        this.onResizeAny = new EventEmitter();
        this.onChangeStart = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onChangeStop = new EventEmitter();
        this.onChangeAny = new EventEmitter();
        this.ngGridItemChange = new EventEmitter();
        this.isFixed = false;
        this.isDraggable = true;
        this.isResizable = true;
        this.minWidth = 0;
        this.minHeight = 0;
        this.uid = null;
        this._currentPosition = { col: 1, row: 1 };
        this._size = { x: 1, y: 1 };
        this._config = NgGridItem.CONST_DEFAULT_CONFIG;
        this._userConfig = null;
        this._added = false;
        this._maxCols = 0;
        this._minCols = 0;
        this._maxRows = 0;
        this._minRows = 0;
        this._resizeDirections = [];
        this._zIndex = 0;
    }
    Object.defineProperty(NgGridItem.prototype, "zIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._zIndex;
        },
        set: /**
         * @param {?} zIndex
         * @return {?}
         */
        function (zIndex) {
            this._renderer.setStyle(this._ngEl.nativeElement, 'z-index', zIndex.toString());
            this._zIndex = zIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "config", {
        // [ng-grid-item] handler
        set: 
        // [ng-grid-item] handler
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._userConfig = v;
            /** @type {?} */
            var configObject = Object.assign({}, NgGridItem.CONST_DEFAULT_CONFIG, v);
            for (var x in NgGridItem.CONST_DEFAULT_CONFIG)
                if (configObject[x] == null)
                    configObject[x] = NgGridItem.CONST_DEFAULT_CONFIG[x];
            this.setConfig(configObject);
            if (this._userConfig != null) {
                if (this._differ == null) {
                    this._differ = this._differs.find(this._userConfig).create();
                }
                this._differ.diff(this._userConfig);
            }
            if (!this._added) {
                this._added = true;
                this._ngGrid.addItem(this);
            }
            this._recalculateDimensions();
            this._recalculatePosition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "sizex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "sizey", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "col", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPosition.col;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "row", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPosition.row;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "currentCol", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPosition.col;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "currentRow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPosition.row;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgGridItem.prototype.onResizeStartEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = this.getEventOutput();
        this.onResizeStart.emit(event);
        this.onResizeAny.emit(event);
        this.onChangeStart.emit(event);
        this.onChangeAny.emit(event);
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.onResizeEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = this.getEventOutput();
        this.onResize.emit(event);
        this.onResizeAny.emit(event);
        this.onChange.emit(event);
        this.onChangeAny.emit(event);
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.onResizeStopEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = this.getEventOutput();
        this.onResizeStop.emit(event);
        this.onResizeAny.emit(event);
        this.onChangeStop.emit(event);
        this.onChangeAny.emit(event);
        this.onConfigChangeEvent();
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.onDragStartEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = this.getEventOutput();
        this.onDragStart.emit(event);
        this.onDragAny.emit(event);
        this.onChangeStart.emit(event);
        this.onChangeAny.emit(event);
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.onDragEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = this.getEventOutput();
        this.onDrag.emit(event);
        this.onDragAny.emit(event);
        this.onChange.emit(event);
        this.onChangeAny.emit(event);
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.onDragStopEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = this.getEventOutput();
        this.onDragStop.emit(event);
        this.onDragAny.emit(event);
        this.onChangeStop.emit(event);
        this.onChangeAny.emit(event);
        this.onConfigChangeEvent();
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.onCascadeEvent = /**
     * @return {?}
     */
    function () {
        this.onConfigChangeEvent();
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._ngEl.nativeElement, 'grid-item');
        if (this._ngGrid.autoStyle)
            this._renderer.setStyle(this._ngEl.nativeElement, 'position', 'absolute');
        this._recalculateDimensions();
        this._recalculatePosition();
        // Force a config update in case there is no config assigned
        this.config = this._userConfig;
    };
    // Public methods
    // Public methods
    /**
     * @param {?} e
     * @return {?}
     */
    NgGridItem.prototype.canDrag = 
    // Public methods
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.isDraggable)
            return false;
        if (this._dragHandle) {
            return this.findHandle(this._dragHandle, e.target);
        }
        return true;
    };
    /**
     * @param {?} handleSelector
     * @param {?} startElement
     * @return {?}
     */
    NgGridItem.prototype.findHandle = /**
     * @param {?} handleSelector
     * @param {?} startElement
     * @return {?}
     */
    function (handleSelector, startElement) {
        try {
            /** @type {?} */
            var targetElem = startElement;
            while (targetElem && targetElem != this._ngEl.nativeElement) {
                if (this.elementMatches(targetElem, handleSelector))
                    return true;
                targetElem = targetElem.parentElement;
            }
        }
        catch (err) { }
        return false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgGridItem.prototype.canResize = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var e_1, _a, e_2, _b;
        if (!this.isResizable)
            return null;
        if (this._resizeHandle) {
            if (typeof this._resizeHandle === 'string') {
                return this.findHandle(this._resizeHandle, e.target) ? 'bottomright' : null;
            }
            if (typeof this._resizeHandle !== 'object')
                return null;
            /** @type {?} */
            var resizeDirections = ['bottomright', 'bottomleft', 'topright', 'topleft', 'right', 'left', 'bottom', 'top'];
            try {
                for (var resizeDirections_1 = __values(resizeDirections), resizeDirections_1_1 = resizeDirections_1.next(); !resizeDirections_1_1.done; resizeDirections_1_1 = resizeDirections_1.next()) {
                    var direction = resizeDirections_1_1.value;
                    if (direction in this._resizeHandle) {
                        if (this.findHandle(this._resizeHandle[direction], e.target)) {
                            return direction;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (resizeDirections_1_1 && !resizeDirections_1_1.done && (_a = resizeDirections_1.return)) _a.call(resizeDirections_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        }
        if (this._borderSize <= 0)
            return null;
        /** @type {?} */
        var mousePos = this._getMousePosition(e);
        try {
            for (var _c = __values(this._resizeDirections), _d = _c.next(); !_d.done; _d = _c.next()) {
                var direction = _d.value;
                if (this.canResizeInDirection(direction, mousePos)) {
                    return direction;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return null;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgGridItem.prototype.onMouseMove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this._ngGrid.autoStyle) {
            if (this._ngGrid.resizeEnable) {
                /** @type {?} */
                var resizeDirection = this.canResize(e);
                /** @type {?} */
                var cursor = 'default';
                switch (resizeDirection) {
                    case 'bottomright':
                    case 'topleft':
                        cursor = 'nwse-resize';
                        break;
                    case 'topright':
                    case 'bottomleft':
                        cursor = 'nesw-resize';
                        break;
                    case 'top':
                    case 'bottom':
                        cursor = 'ns-resize';
                        break;
                    case 'left':
                    case 'right':
                        cursor = 'ew-resize';
                        break;
                    default:
                        if (this._ngGrid.dragEnable && this.canDrag(e)) {
                            cursor = 'move';
                        }
                        break;
                }
                this._renderer.setStyle(this._ngEl.nativeElement, 'cursor', cursor);
            }
            else if (this._ngGrid.dragEnable && this.canDrag(e)) {
                this._renderer.setStyle(this._ngEl.nativeElement, 'cursor', 'move');
            }
            else {
                this._renderer.setStyle(this._ngEl.nativeElement, 'cursor', 'default');
            }
        }
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._added)
            this._ngGrid.removeItem(this);
    };
    //    Getters
    //    Getters
    /**
     * @return {?}
     */
    NgGridItem.prototype.getElement = 
    //    Getters
    /**
     * @return {?}
     */
    function () {
        return this._ngEl;
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getDragHandle = /**
     * @return {?}
     */
    function () {
        return this._dragHandle;
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getResizeHandle = /**
     * @return {?}
     */
    function () {
        return this._resizeHandle;
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getDimensions = /**
     * @return {?}
     */
    function () {
        return { 'width': this._elemWidth, 'height': this._elemHeight };
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getSize = /**
     * @return {?}
     */
    function () {
        return this._size;
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        return { 'left': this._elemLeft, 'top': this._elemTop };
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getGridPosition = /**
     * @return {?}
     */
    function () {
        return this._currentPosition;
    };
    //    Setters
    //    Setters
    /**
     * @param {?} config
     * @return {?}
     */
    NgGridItem.prototype.setConfig = 
    //    Setters
    /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._config = config;
        this._payload = config.payload;
        this._currentPosition.col = config.col ? config.col : NgGridItem.CONST_DEFAULT_CONFIG.col;
        this._currentPosition.row = config.row ? config.row : NgGridItem.CONST_DEFAULT_CONFIG.row;
        this._size.x = config.sizex ? config.sizex : NgGridItem.CONST_DEFAULT_CONFIG.sizex;
        this._size.y = config.sizey ? config.sizey : NgGridItem.CONST_DEFAULT_CONFIG.sizey;
        this._dragHandle = config.dragHandle;
        this._resizeHandle = config.resizeHandle;
        this._borderSize = config.borderSize;
        this.isDraggable = config.draggable ? true : false;
        this.isResizable = config.resizable ? true : false;
        this.isFixed = config.fixed ? true : false;
        this._resizeDirections = config.resizeDirections || this._ngGrid.resizeDirections;
        this._maxCols = !isNaN(config.maxCols) && isFinite(config.maxCols) ? config.maxCols : 0;
        this._minCols = !isNaN(config.minCols) && isFinite(config.minCols) ? config.minCols : 0;
        this._maxRows = !isNaN(config.maxRows) && isFinite(config.maxRows) ? config.maxRows : 0;
        this._minRows = !isNaN(config.minRows) && isFinite(config.minRows) ? config.minRows : 0;
        this.minWidth = !isNaN(config.minWidth) && isFinite(config.minWidth) ? config.minWidth : 0;
        this.minHeight = !isNaN(config.minHeight) && isFinite(config.minHeight) ? config.minHeight : 0;
        if (this._minCols > 0 && this._maxCols > 0 && this._minCols > this._maxCols)
            this._minCols = 0;
        if (this._minRows > 0 && this._maxRows > 0 && this._minRows > this._maxRows)
            this._minRows = 0;
        if (this._added) {
            this._ngGrid.updateItem(this);
        }
        this._size = this.fixResize(this._size);
        this._recalculatePosition();
        this._recalculateDimensions();
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._differ != null) {
            /** @type {?} */
            var changes = this._differ.diff(this._userConfig);
            if (changes != null) {
                return this._applyChanges(changes);
            }
        }
        return false;
    };
    /**
     * @param {?} newSize
     * @param {?=} update
     * @return {?}
     */
    NgGridItem.prototype.setSize = /**
     * @param {?} newSize
     * @param {?=} update
     * @return {?}
     */
    function (newSize, update) {
        if (update === void 0) { update = true; }
        newSize = this.fixResize(newSize);
        this._size = newSize;
        if (update)
            this._recalculateDimensions();
        this.onItemChange.emit(this.getEventOutput());
    };
    /**
     * @param {?} gridPosition
     * @param {?=} update
     * @return {?}
     */
    NgGridItem.prototype.setGridPosition = /**
     * @param {?} gridPosition
     * @param {?=} update
     * @return {?}
     */
    function (gridPosition, update) {
        if (update === void 0) { update = true; }
        this._currentPosition = gridPosition;
        if (update)
            this._recalculatePosition();
        this.onItemChange.emit(this.getEventOutput());
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getEventOutput = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            uid: this.uid,
            payload: this._payload,
            col: this._currentPosition.col,
            row: this._currentPosition.row,
            sizex: this._size.x,
            sizey: this._size.y,
            width: this._elemWidth,
            height: this._elemHeight,
            left: this._elemLeft,
            top: this._elemTop
        }));
    };
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    NgGridItem.prototype.setPosition = /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        switch (this._cascadeMode) {
            case 'up':
            case 'left':
            default:
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', x + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', y + 'px');
                break;
            case 'right':
                this._renderer.setStyle(this._ngEl.nativeElement, 'right', x + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', y + 'px');
                break;
            case 'down':
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', x + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'bottom', y + 'px');
                break;
        }
        this._elemLeft = x;
        this._elemTop = y;
    };
    /**
     * @param {?} cascade
     * @return {?}
     */
    NgGridItem.prototype.setCascadeMode = /**
     * @param {?} cascade
     * @return {?}
     */
    function (cascade) {
        this._cascadeMode = cascade;
        switch (cascade) {
            case 'up':
            case 'left':
            default:
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', this._elemLeft + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', this._elemTop + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'right', null);
                this._renderer.setStyle(this._ngEl.nativeElement, 'bottom', null);
                break;
            case 'right':
                this._renderer.setStyle(this._ngEl.nativeElement, 'right', this._elemLeft + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', this._elemTop + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', null);
                this._renderer.setStyle(this._ngEl.nativeElement, 'bottom', null);
                break;
            case 'down':
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', this._elemLeft + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'bottom', this._elemTop + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'right', null);
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', null);
                break;
        }
    };
    /**
     * @param {?} w
     * @param {?} h
     * @return {?}
     */
    NgGridItem.prototype.setDimensions = /**
     * @param {?} w
     * @param {?} h
     * @return {?}
     */
    function (w, h) {
        if (w < this.minWidth)
            w = this.minWidth;
        if (h < this.minHeight)
            h = this.minHeight;
        this._renderer.setStyle(this._ngEl.nativeElement, 'width', w + 'px');
        this._renderer.setStyle(this._ngEl.nativeElement, 'height', h + 'px');
        this._elemWidth = w;
        this._elemHeight = h;
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.startMoving = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._ngEl.nativeElement, 'moving');
        /** @type {?} */
        var style = window.getComputedStyle(this._ngEl.nativeElement);
        if (this._ngGrid.autoStyle)
            this._renderer.setStyle(this._ngEl.nativeElement, 'z-index', (parseInt(style.getPropertyValue('z-index')) + 1).toString());
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.stopMoving = /**
     * @return {?}
     */
    function () {
        this._renderer.removeClass(this._ngEl.nativeElement, 'moving');
        /** @type {?} */
        var style = window.getComputedStyle(this._ngEl.nativeElement);
        if (this._ngGrid.autoStyle)
            this._renderer.setStyle(this._ngEl.nativeElement, 'z-index', (parseInt(style.getPropertyValue('z-index')) - 1).toString());
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.recalculateSelf = /**
     * @return {?}
     */
    function () {
        this._recalculatePosition();
        this._recalculateDimensions();
    };
    /**
     * @param {?} newSize
     * @return {?}
     */
    NgGridItem.prototype.fixResize = /**
     * @param {?} newSize
     * @return {?}
     */
    function (newSize) {
        if (this._maxCols > 0 && newSize.x > this._maxCols)
            newSize.x = this._maxCols;
        if (this._maxRows > 0 && newSize.y > this._maxRows)
            newSize.y = this._maxRows;
        if (this._minCols > 0 && newSize.x < this._minCols)
            newSize.x = this._minCols;
        if (this._minRows > 0 && newSize.y < this._minRows)
            newSize.y = this._minRows;
        /** @type {?} */
        var itemWidth = (newSize.x * this._ngGrid.colWidth) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (newSize.x - 1));
        if (itemWidth < this.minWidth)
            newSize.x = Math.ceil((this.minWidth + this._ngGrid.marginRight + this._ngGrid.marginLeft) / (this._ngGrid.colWidth + this._ngGrid.marginRight + this._ngGrid.marginLeft));
        /** @type {?} */
        var itemHeight = (newSize.y * this._ngGrid.rowHeight) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (newSize.y - 1));
        if (itemHeight < this.minHeight)
            newSize.y = Math.ceil((this.minHeight + this._ngGrid.marginBottom + this._ngGrid.marginTop) / (this._ngGrid.rowHeight + this._ngGrid.marginBottom + this._ngGrid.marginTop));
        return newSize;
    };
    // Private methods
    // Private methods
    /**
     * @private
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    NgGridItem.prototype.elementMatches = 
    // Private methods
    /**
     * @private
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    function (element, selector) {
        if (!element)
            return false;
        if (element.matches)
            return element.matches(selector);
        if (element.oMatchesSelector)
            return element.oMatchesSelector(selector);
        if (element.msMatchesSelector)
            return element.msMatchesSelector(selector);
        if (element.mozMatchesSelector)
            return element.mozMatchesSelector(selector);
        if (element.webkitMatchesSelector)
            return element.webkitMatchesSelector(selector);
        if (!element.document || !element.ownerDocument)
            return false;
        /** @type {?} */
        var matches = (element.document || element.ownerDocument).querySelectorAll(selector);
        /** @type {?} */
        var i = matches.length;
        while (--i >= 0 && matches.item(i) !== element) { }
        return i > -1;
    };
    /**
     * @private
     * @return {?}
     */
    NgGridItem.prototype._recalculatePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x = (this._ngGrid.colWidth + this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._currentPosition.col - 1) + this._ngGrid.marginLeft + this._ngGrid.screenMargin;
        /** @type {?} */
        var y = (this._ngGrid.rowHeight + this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._currentPosition.row - 1) + this._ngGrid.marginTop;
        this.setPosition(x, y);
    };
    /**
     * @private
     * @return {?}
     */
    NgGridItem.prototype._recalculateDimensions = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._size.x < this._ngGrid.minCols)
            this._size.x = this._ngGrid.minCols;
        if (this._size.y < this._ngGrid.minRows)
            this._size.y = this._ngGrid.minRows;
        /** @type {?} */
        var newWidth = (this._ngGrid.colWidth * this._size.x) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._size.x - 1));
        /** @type {?} */
        var newHeight = (this._ngGrid.rowHeight * this._size.y) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._size.y - 1));
        /** @type {?} */
        var w = Math.max(this.minWidth, this._ngGrid.minWidth, newWidth);
        /** @type {?} */
        var h = Math.max(this.minHeight, this._ngGrid.minHeight, newHeight);
        this.setDimensions(w, h);
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgGridItem.prototype._getMousePosition = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.originalEvent && e.originalEvent.touches) {
            /** @type {?} */
            var oe = e.originalEvent;
            e = oe.touches.length ? oe.touches[0] : (oe.changedTouches.length ? oe.changedTouches[0] : e);
        }
        else if (e.touches) {
            e = e.touches.length ? e.touches[0] : (e.changedTouches.length ? e.changedTouches[0] : e);
        }
        /** @type {?} */
        var refPos = this._ngEl.nativeElement.getBoundingClientRect();
        return {
            left: e.clientX - refPos.left,
            top: e.clientY - refPos.top
        };
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    NgGridItem.prototype._applyChanges = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var changed = false;
        /** @type {?} */
        var changeCheck = (/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            if (_this._config[record.key] !== record.currentValue) {
                _this._config[record.key] = record.currentValue;
                changed = true;
            }
        });
        changes.forEachAddedItem(changeCheck);
        changes.forEachChangedItem(changeCheck);
        changes.forEachRemovedItem((/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            changed = true;
            delete _this._config[record.key];
        }));
        if (changed) {
            this.setConfig(this._config);
        }
        return changed;
    };
    /**
     * @private
     * @return {?}
     */
    NgGridItem.prototype.onConfigChangeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._userConfig === null)
            return;
        this._config.sizex = this._userConfig.sizex = this._size.x;
        this._config.sizey = this._userConfig.sizey = this._size.y;
        this._config.col = this._userConfig.col = this._currentPosition.col;
        this._config.row = this._userConfig.row = this._currentPosition.row;
        this.ngGridItemChange.emit(this._userConfig);
    };
    /**
     * @private
     * @param {?} direction
     * @param {?} mousePos
     * @return {?}
     */
    NgGridItem.prototype.canResizeInDirection = /**
     * @private
     * @param {?} direction
     * @param {?} mousePos
     * @return {?}
     */
    function (direction, mousePos) {
        switch (direction) {
            case 'bottomright':
                return mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize
                    && mousePos.top < this._elemHeight && mousePos.top > this._elemHeight - this._borderSize; // tslint:disable-line:indent
            case 'bottomleft':
                return mousePos.left < this._borderSize && mousePos.top < this._elemHeight
                    && mousePos.top > this._elemHeight - this._borderSize; // tslint:disable-line:indent
            case 'topright':
                return mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize
                    && mousePos.top < this._borderSize; // tslint:disable-line:indent
            case 'topleft':
                return mousePos.left < this._borderSize && mousePos.top < this._borderSize;
            case 'right':
                return mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize;
            case 'left':
                return mousePos.left < this._borderSize;
            case 'bottom':
                return mousePos.top < this._elemHeight && mousePos.top > this._elemHeight - this._borderSize;
            case 'top':
                return mousePos.top < this._borderSize;
            default:
                return false;
        }
    };
    // Default config
    NgGridItem.CONST_DEFAULT_CONFIG = {
        uid: null,
        col: 1,
        row: 1,
        sizex: 1,
        sizey: 1,
        dragHandle: null,
        resizeHandle: null,
        fixed: false,
        draggable: true,
        resizable: true,
        borderSize: 25,
        resizeDirections: null,
    };
    NgGridItem.decorators = [
        { type: Directive, args: [{
                    selector: '[ngGridItem]',
                    inputs: ['config: ngGridItem']
                },] }
    ];
    /** @nocollapse */
    NgGridItem.ctorParameters = function () { return [
        { type: KeyValueDiffers },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgGrid },
        { type: ViewContainerRef }
    ]; };
    NgGridItem.propDecorators = {
        onItemChange: [{ type: Output }],
        onDragStart: [{ type: Output }],
        onDrag: [{ type: Output }],
        onDragStop: [{ type: Output }],
        onDragAny: [{ type: Output }],
        onResizeStart: [{ type: Output }],
        onResize: [{ type: Output }],
        onResizeStop: [{ type: Output }],
        onResizeAny: [{ type: Output }],
        onChangeStart: [{ type: Output }],
        onChange: [{ type: Output }],
        onChangeStop: [{ type: Output }],
        onChangeAny: [{ type: Output }],
        ngGridItemChange: [{ type: Output }]
    };
    return NgGridItem;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgGridItem.CONST_DEFAULT_CONFIG;
    /** @type {?} */
    NgGridItem.prototype.onItemChange;
    /** @type {?} */
    NgGridItem.prototype.onDragStart;
    /** @type {?} */
    NgGridItem.prototype.onDrag;
    /** @type {?} */
    NgGridItem.prototype.onDragStop;
    /** @type {?} */
    NgGridItem.prototype.onDragAny;
    /** @type {?} */
    NgGridItem.prototype.onResizeStart;
    /** @type {?} */
    NgGridItem.prototype.onResize;
    /** @type {?} */
    NgGridItem.prototype.onResizeStop;
    /** @type {?} */
    NgGridItem.prototype.onResizeAny;
    /** @type {?} */
    NgGridItem.prototype.onChangeStart;
    /** @type {?} */
    NgGridItem.prototype.onChange;
    /** @type {?} */
    NgGridItem.prototype.onChangeStop;
    /** @type {?} */
    NgGridItem.prototype.onChangeAny;
    /** @type {?} */
    NgGridItem.prototype.ngGridItemChange;
    /** @type {?} */
    NgGridItem.prototype.isFixed;
    /** @type {?} */
    NgGridItem.prototype.isDraggable;
    /** @type {?} */
    NgGridItem.prototype.isResizable;
    /** @type {?} */
    NgGridItem.prototype.minWidth;
    /** @type {?} */
    NgGridItem.prototype.minHeight;
    /** @type {?} */
    NgGridItem.prototype.uid;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._payload;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._currentPosition;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._size;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._config;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._userConfig;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._dragHandle;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._resizeHandle;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._borderSize;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._elemWidth;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._elemHeight;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._elemLeft;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._elemTop;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._added;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._differ;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._cascadeMode;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._maxCols;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._minCols;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._maxRows;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._minRows;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._resizeDirections;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._zIndex;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._differs;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._ngEl;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._ngGrid;
    /** @type {?} */
    NgGridItem.prototype.containerRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: modules/NgGrid.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgGridModule = /** @class */ (function () {
    function NgGridModule() {
    }
    NgGridModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgGrid, NgGridItem, NgGridPlaceholder],
                    entryComponents: [NgGridPlaceholder],
                    exports: [NgGrid, NgGridItem]
                },] }
    ];
    return NgGridModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: main.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular2-grid.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgGrid, NgGridItem, NgGridModule, NgGridPlaceholder };
//# sourceMappingURL=angular2-grid.js.map
