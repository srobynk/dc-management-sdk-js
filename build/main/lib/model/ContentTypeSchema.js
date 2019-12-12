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
 * Supported validation levels
 */
var ValidationLevel;
(function (ValidationLevel) {
    ValidationLevel["SLOT"] = "SLOT";
    ValidationLevel["CONTENT_TYPE"] = "CONTENT_TYPE";
    ValidationLevel["PARTIAL"] = "PARTIAL";
})(ValidationLevel = exports.ValidationLevel || (exports.ValidationLevel = {}));
/**
 * Content type schema
 */
var ContentTypeSchema = /** @class */ (function (_super) {
    __extends(ContentTypeSchema, _super);
    function ContentTypeSchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Resources and actions related to a ContentTypeSchema
         */
        _this.related = {
            /**
             * Updated content type schema
             * @param updated
             */
            update: function (mutation) {
                return _this.updateResource(mutation, ContentTypeSchema);
            }
        };
        return _this;
    }
    return ContentTypeSchema;
}(HalResource_1.HalResource));
exports.ContentTypeSchema = ContentTypeSchema;
/**
 * @hidden
 */
var ContentTypeSchemaPage = /** @class */ (function (_super) {
    __extends(ContentTypeSchemaPage, _super);
    function ContentTypeSchemaPage(data) {
        return _super.call(this, 'content-type-schemas', ContentTypeSchema, data) || this;
    }
    return ContentTypeSchemaPage;
}(Page_1.Page));
exports.ContentTypeSchemaPage = ContentTypeSchemaPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFR5cGVTY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0NvbnRlbnRUeXBlU2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUN4RCwrQkFBOEI7QUFFOUI7O0dBRUc7QUFDSCxJQUFZLGVBSVg7QUFKRCxXQUFZLGVBQWU7SUFDekIsZ0NBQWEsQ0FBQTtJQUNiLGdEQUE2QixDQUFBO0lBQzdCLHNDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFKVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUkxQjtBQUVEOztHQUVHO0FBQ0g7SUFBdUMscUNBQVc7SUFBbEQ7UUFBQSxxRUEwREM7UUFYQzs7V0FFRztRQUNhLGFBQU8sR0FBRztZQUN4Qjs7O2VBR0c7WUFDSCxNQUFNLEVBQUUsVUFBQyxRQUEyQjtnQkFDbEMsT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQztZQUFoRCxDQUFnRDtTQUNuRCxDQUFDOztJQUNKLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUExREQsQ0FBdUMseUJBQVcsR0EwRGpEO0FBMURZLDhDQUFpQjtBQTREOUI7O0dBRUc7QUFDSDtJQUEyQyx5Q0FBdUI7SUFDaEUsK0JBQVksSUFBVTtlQUNwQixrQkFBTSxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUM7SUFDeEQsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQUpELENBQTJDLFdBQUksR0FJOUM7QUFKWSxzREFBcUIifQ==