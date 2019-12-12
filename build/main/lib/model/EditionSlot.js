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
var Page_1 = require("./Page");
/**
 * Class representing the [EditionSlot](https://api.amplience.net/v2/content/docs/api/index.html#resources-editions-slots) resource.
 * EditionSlots model what content will go into a particular Slot for a specific Edition.
 */
var EditionSlot = /** @class */ (function (_super) {
    __extends(EditionSlot, _super);
    function EditionSlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EditionSlot;
}(HalResource_1.HalResource));
exports.EditionSlot = EditionSlot;
/**
 * @hidden
 */
var EditionSlotsPage = /** @class */ (function (_super) {
    __extends(EditionSlotsPage, _super);
    function EditionSlotsPage(data) {
        return _super.call(this, 'edition-slots', EditionSlot, data) || this;
    }
    return EditionSlotsPage;
}(Page_1.Page));
exports.EditionSlotsPage = EditionSlotsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdGlvblNsb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0VkaXRpb25TbG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUN4RCwrQkFBOEI7QUFFOUI7OztHQUdHO0FBQ0g7SUFBaUMsK0JBQVc7SUFBNUM7O0lBVUEsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQVZELENBQWlDLHlCQUFXLEdBVTNDO0FBVlksa0NBQVc7QUFZeEI7O0dBRUc7QUFDSDtJQUFzQyxvQ0FBaUI7SUFDckQsMEJBQVksSUFBVTtlQUNwQixrQkFBTSxlQUFlLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBc0MsV0FBSSxHQUl6QztBQUpZLDRDQUFnQiJ9