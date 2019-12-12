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
var ContentTypeCachedSchema_1 = require("./ContentTypeCachedSchema");
var Page_1 = require("./Page");
/**
 * Class representing the [Content Type](https://api.amplience.net/v2/content/docs/api/index.html#resources-content-types) resource.
 * Content types are JSON schemas that define a type of content to be created, including its structure, format and validation rules.
 */
var ContentType = /** @class */ (function (_super) {
    __extends(ContentType, _super);
    function ContentType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Resources and actions related to a ContentType
         */
        _this.related = {
            /**
             * Update a Content Type with the provided changes
             */
            update: function (mutation) {
                return _this.updateResource(mutation, ContentType);
            },
            contentTypeSchema: {
                /**
                 * Get the associated JSON schema document for a content type
                 */
                get: function () {
                    return _this.fetchLinkedResource('content-type-schema', {}, ContentTypeCachedSchema_1.ContentTypeCachedSchema);
                },
                /**
                 * Sync a content type with the associated JSON schema document
                 */
                update: function (mutation) {
                    if (mutation === void 0) { mutation = new ContentTypeCachedSchema_1.ContentTypeCachedSchema(); }
                    return _this.updateLinkedResource('content-type-schema', {}, mutation, ContentTypeCachedSchema_1.ContentTypeCachedSchema);
                }
            }
        };
        return _this;
    }
    return ContentType;
}(HalResource_1.HalResource));
exports.ContentType = ContentType;
/**
 * @hidden
 */
var ContentTypePage = /** @class */ (function (_super) {
    __extends(ContentTypePage, _super);
    function ContentTypePage(data) {
        return _super.call(this, 'content-types', ContentType, data) || this;
    }
    return ContentTypePage;
}(Page_1.Page));
exports.ContentTypePage = ContentTypePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0NvbnRlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUN4RCxxRUFBb0U7QUFDcEUsK0JBQThCO0FBeUU5Qjs7O0dBR0c7QUFDSDtJQUFpQywrQkFBVztJQUE1QztRQUFBLHFFQW1EQztRQW5DQzs7V0FFRztRQUNhLGFBQU8sR0FBRztZQUN4Qjs7ZUFFRztZQUNILE1BQU0sRUFBRSxVQUFDLFFBQXFCO2dCQUM1QixPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQztZQUExQyxDQUEwQztZQUU1QyxpQkFBaUIsRUFBRTtnQkFDakI7O21CQUVHO2dCQUNILEdBQUcsRUFBRTtvQkFDSCxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FDdEIscUJBQXFCLEVBQ3JCLEVBQUUsRUFDRixpREFBdUIsQ0FDeEI7Z0JBSkQsQ0FJQztnQkFFSDs7bUJBRUc7Z0JBQ0gsTUFBTSxFQUFFLFVBQ04sUUFBaUU7b0JBQWpFLHlCQUFBLEVBQUEsZUFBd0MsaURBQXVCLEVBQUU7b0JBRWpFLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUN2QixxQkFBcUIsRUFDckIsRUFBRSxFQUNGLFFBQVEsRUFDUixpREFBdUIsQ0FDeEI7Z0JBTEQsQ0FLQzthQUNKO1NBQ0YsQ0FBQzs7SUFDSixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBbkRELENBQWlDLHlCQUFXLEdBbUQzQztBQW5EWSxrQ0FBVztBQXFEeEI7O0dBRUc7QUFDSDtJQUFxQyxtQ0FBaUI7SUFDcEQseUJBQVksSUFBVTtlQUNwQixrQkFBTSxlQUFlLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBcUMsV0FBSSxHQUl4QztBQUpZLDBDQUFlIn0=