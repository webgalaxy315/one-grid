/**
 * @fileoverview added by tsickle
 * Generated from: helpers/NgGridHelpers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
export function generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (/**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        let r = Math.random() * 16 | 0;
        /** @type {?} */
        let v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }));
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function sortItemsByPositionHorizontal(a, b) {
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
export function sortItemsByPositionVertical(a, b) {
    if (a.row === b.row) {
        return a.col - b.col;
    }
    return a.row - b.row;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmdHcmlkSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWdyaWQvIiwic291cmNlcyI6WyJoZWxwZXJzL05nR3JpZEhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsWUFBWTtJQUMzQixPQUFPLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O0lBQUUsVUFBUyxDQUFDOztZQUNwRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOztZQUFFLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDbEUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsRUFBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLDZCQUE2QixDQUFDLENBQWEsRUFBRSxDQUFhO0lBQ3pFLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FBRTtJQUM5QyxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUN0QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsQ0FBYSxFQUFFLENBQWE7SUFDdkUsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUU7UUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUFFO0lBQzlDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0dyaWRJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvTmdHcmlkSXRlbVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVVdWlkKCk6IHN0cmluZyB7XG5cdHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcblx0XHRsZXQgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG5cdFx0cmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRJdGVtc0J5UG9zaXRpb25Ib3Jpem9udGFsKGE6IE5nR3JpZEl0ZW0sIGI6IE5nR3JpZEl0ZW0pOiBudW1iZXIge1xuXHRpZiAoYS5jb2wgPT09IGIuY29sKSB7IHJldHVybiBhLnJvdyAtIGIucm93OyB9XG5cdHJldHVybiBhLmNvbCAtIGIuY29sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydEl0ZW1zQnlQb3NpdGlvblZlcnRpY2FsKGE6IE5nR3JpZEl0ZW0sIGI6IE5nR3JpZEl0ZW0pOiBudW1iZXIge1xuXHRpZiAoYS5yb3cgPT09IGIucm93KSB7IHJldHVybiBhLmNvbCAtIGIuY29sOyB9XG5cdHJldHVybiBhLnJvdyAtIGIucm93O1xufVxuIl19