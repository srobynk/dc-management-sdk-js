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
var ContentRepository_1 = require("./ContentRepository");
var LocalizationJob_1 = require("./LocalizationJob");
var Page_1 = require("./Page");
/**
 * Class representing the [Content Item](https://api.amplience.net/v2/content/docs/api/index.html#resources-content-items) resource.
 * Content Items are instances of content created from a content type.
 */
var ContentItem = /** @class */ (function (_super) {
    __extends(ContentItem, _super);
    function ContentItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Resources and actions related to a Content Item
         */
        _this.related = {
            /**
             * Retrieves a specific version of the content item
             * @param version Version number requested
             */
            contentItemVersion: function (version) {
                return _this.fetchLinkedResource('content-item-version', { version: version }, ContentItem);
            },
            /**
             * Retrieves the ContentRepository this content item is stored in
             */
            contentRepository: function () {
                return _this.fetchLinkedResource('content-repository', {}, ContentRepository_1.ContentRepository);
            },
            /**
             * Sets a locale of the form ll-CC (language, country code)
             * @param locale Locale code
             */
            setLocale: function (localeDefinition) {
                return _this.performActionThatReturnsResource('set-locale', {}, { locale: localeDefinition, version: _this.version }, ContentItem);
            },
            /**
             * Create localizations of the content item
             * @param locales Array of locales to create
             */
            localize: function (localesList) {
                return _this.performActionThatReturnsResource('create-localizations', {}, { locales: localesList, version: _this.version }, LocalizationJob_1.LocalizationJob);
            },
            /**
             * Updates this Content Item with the changes in the mutation parameter.
             * You must provide the current version number in the mutation
             * to avoid overwriting other user's changes.
             */
            update: function (mutation) {
                return _this.updateResource(mutation, ContentItem);
            },
            setDeliveryKey: function (deliveryKey) {
                return _this.updateLinkedResource('set-delivery-key', {}, { deliveryKey: deliveryKey, version: _this.version }, ContentItem);
            }
        };
        return _this;
    }
    return ContentItem;
}(HalResource_1.HalResource));
exports.ContentItem = ContentItem;
/**
 * @hidden
 */
var ContentItemsPage = /** @class */ (function (_super) {
    __extends(ContentItemsPage, _super);
    function ContentItemsPage(data) {
        return _super.call(this, 'content-items', ContentItem, data) || this;
    }
    return ContentItemsPage;
}(Page_1.Page));
exports.ContentItemsPage = ContentItemsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudEl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0NvbnRlbnRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUN4RCx5REFBd0Q7QUFDeEQscURBQW9EO0FBQ3BELCtCQUE4QjtBQUc5Qjs7O0dBR0c7QUFDSDtJQUFpQywrQkFBVztJQUE1QztRQUFBLHFFQXlJQztRQTdEQzs7V0FFRztRQUNhLGFBQU8sR0FBRztZQUN4Qjs7O2VBR0c7WUFDSCxrQkFBa0IsRUFBRSxVQUFDLE9BQWU7Z0JBQ2xDLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUN0QixzQkFBc0IsRUFDdEIsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUNYLFdBQVcsQ0FDWjtZQUpELENBSUM7WUFFSDs7ZUFFRztZQUNILGlCQUFpQixFQUFFO2dCQUNqQixPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLEVBQUUscUNBQWlCLENBQUM7WUFBckUsQ0FBcUU7WUFFdkU7OztlQUdHO1lBQ0gsU0FBUyxFQUFFLFVBQUMsZ0JBQXdCO2dCQUNsQyxPQUFBLEtBQUksQ0FBQyxnQ0FBZ0MsQ0FDbkMsWUFBWSxFQUNaLEVBQUUsRUFDRixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUNuRCxXQUFXLENBQ1o7WUFMRCxDQUtDO1lBRUg7OztlQUdHO1lBQ0gsUUFBUSxFQUFFLFVBQUMsV0FBcUI7Z0JBQzlCLE9BQUEsS0FBSSxDQUFDLGdDQUFnQyxDQUNuQyxzQkFBc0IsRUFDdEIsRUFBRSxFQUNGLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUMvQyxpQ0FBZSxDQUNoQjtZQUxELENBS0M7WUFFSDs7OztlQUlHO1lBQ0gsTUFBTSxFQUFFLFVBQUMsUUFBcUI7Z0JBQzVCLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO1lBQTFDLENBQTBDO1lBRTVDLGNBQWMsRUFBRSxVQUFDLFdBQW1CO2dCQUNsQyxPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FDdkIsa0JBQWtCLEVBQ2xCLEVBQUUsRUFDRixFQUFFLFdBQVcsYUFBQSxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFTLEVBQzdDLFdBQVcsQ0FDWjtZQUxELENBS0M7U0FDSixDQUFDOztJQUNKLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUF6SUQsQ0FBaUMseUJBQVcsR0F5STNDO0FBeklZLGtDQUFXO0FBMkl4Qjs7R0FFRztBQUNIO0lBQXNDLG9DQUFpQjtJQUNyRCwwQkFBWSxJQUFVO2VBQ3BCLGtCQUFNLGVBQWUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDO0lBQzNDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFKRCxDQUFzQyxXQUFJLEdBSXpDO0FBSlksNENBQWdCIn0=