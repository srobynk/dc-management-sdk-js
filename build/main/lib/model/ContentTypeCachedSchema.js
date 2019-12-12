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
/**
 * Class representing the [Content Type Schema](https://api.amplience.net/v2/content/docs/api/index.html#resources-content-types) resource.
 * Content types are JSON schemas that define a type of content to be created, including its structure, format and validation rules.
 */
var ContentTypeCachedSchema = /** @class */ (function (_super) {
    __extends(ContentTypeCachedSchema, _super);
    function ContentTypeCachedSchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Resources and actions related to a ContentType
         */
        _this.related = {};
        return _this;
    }
    return ContentTypeCachedSchema;
}(HalResource_1.HalResource));
exports.ContentTypeCachedSchema = ContentTypeCachedSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFR5cGVDYWNoZWRTY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0NvbnRlbnRUeXBlQ2FjaGVkU2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQXNCeEQ7OztHQUdHO0FBQ0g7SUFBNkMsMkNBQVc7SUFBeEQ7UUFBQSxxRUFvQkM7UUFKQzs7V0FFRztRQUNhLGFBQU8sR0FBRyxFQUFFLENBQUM7O0lBQy9CLENBQUM7SUFBRCw4QkFBQztBQUFELENBQUMsQUFwQkQsQ0FBNkMseUJBQVcsR0FvQnZEO0FBcEJZLDBEQUF1QiJ9