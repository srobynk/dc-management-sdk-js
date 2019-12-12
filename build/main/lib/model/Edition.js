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
var HalResource_1 = require("../hal/models/HalResource");
var EditionSlot_1 = require("./EditionSlot");
var Event_1 = require("./Event");
var Page_1 = require("./Page");
/**
 * Class representing the [Edition](https://api.amplience.net/v2/content/docs/api/index.html#resources-editions) resource.
 * An Edition is the main way of scheduling content to be published on a specific date.
 * It holds the association between slots and content items. Once all slots are valid and
 * there are no conflicts, it is ready to be scheduled.
 */
var Edition = /** @class */ (function (_super) {
    __extends(Edition, _super);
    function Edition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Resources and actions related to an Edition
         */
        _this.related = {
            /**
             * Retrieves the Event associated with this Edition
             */
            event: function () { return _this.fetchLinkedResource('event', {}, Event_1.Event); },
            slots: {
                /**
                 * Retrieves a list of slots associated with this Edition
                 */
                list: function () {
                    return _this.fetchLinkedResource('list-slots', {}, EditionSlot_1.EditionSlotsPage);
                }
            }
        };
        return _this;
    }
    return Edition;
}(HalResource_1.HalResource));
exports.Edition = Edition;
/**
 * @hidden
 */
var EditionsPage = /** @class */ (function (_super) {
    __extends(EditionsPage, _super);
    function EditionsPage(data) {
        return _super.call(this, 'editions', Edition, data) || this;
    }
    return EditionsPage;
}(Page_1.Page));
exports.EditionsPage = EditionsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvRWRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5REFBd0Q7QUFDeEQsNkNBQThEO0FBQzlELGlDQUFnQztBQUNoQywrQkFBOEI7QUFLOUI7Ozs7O0dBS0c7QUFDSDtJQUE2QiwyQkFBVztJQUF4QztRQUFBLHFFQThGQztRQWpCQzs7V0FFRztRQUNhLGFBQU8sR0FBRztZQUN4Qjs7ZUFFRztZQUNILEtBQUssRUFBRSxjQUFzQixPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUE1QyxDQUE0QztZQUV6RSxLQUFLLEVBQUU7Z0JBQ0w7O21CQUVHO2dCQUNILElBQUksRUFBRTtvQkFDSixPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLDhCQUFnQixDQUFDO2dCQUE1RCxDQUE0RDthQUMvRDtTQUNGLENBQUM7O0lBQ0osQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBOUZELENBQTZCLHlCQUFXLEdBOEZ2QztBQTlGWSwwQkFBTztBQWdHcEI7O0dBRUc7QUFDSDtJQUFrQyxnQ0FBYTtJQUM3QyxzQkFBWSxJQUFVO2VBQ3BCLGtCQUFNLFVBQVUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFKRCxDQUFrQyxXQUFJLEdBSXJDO0FBSlksb0NBQVkifQ==