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
 * Class representing the [Webhook](https://api.amplience.net/v2/content/docs/api/index.html#resources-webhooks) resource.
 * A WebHook is an HTTP callback: an HTTP POST that occurs when something happens; a simple event-notification via HTTP POST.
 */
var Webhook = /** @class */ (function (_super) {
    __extends(Webhook, _super);
    function Webhook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Resources and actions related to a Webhook
         */
        _this.related = {
            delete: function () { return _this.deleteResource(); }
        };
        return _this;
    }
    return Webhook;
}(HalResource_1.HalResource));
exports.Webhook = Webhook;
/**
 * @hidden
 */
var WebhooksPage = /** @class */ (function (_super) {
    __extends(WebhooksPage, _super);
    function WebhooksPage(data) {
        return _super.call(this, 'webhooks', Webhook, data) || this;
    }
    return WebhooksPage;
}(Page_1.Page));
exports.WebhooksPage = WebhooksPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvV2ViaG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5REFBd0Q7QUFDeEQsK0JBQThCO0FBRTlCOzs7R0FHRztBQUNIO0lBQTZCLDJCQUFXO0lBQXhDO1FBQUEscUVBc0NDO1FBTkM7O1dBRUc7UUFDYSxhQUFPLEdBQUc7WUFDeEIsTUFBTSxFQUFFLGNBQXFCLE9BQUEsS0FBSSxDQUFDLGNBQWMsRUFBRSxFQUFyQixDQUFxQjtTQUNuRCxDQUFDOztJQUNKLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQXRDRCxDQUE2Qix5QkFBVyxHQXNDdkM7QUF0Q1ksMEJBQU87QUF3Q3BCOztHQUVHO0FBQ0g7SUFBa0MsZ0NBQWE7SUFDN0Msc0JBQVksSUFBVTtlQUNwQixrQkFBTSxVQUFVLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBa0MsV0FBSSxHQUlyQztBQUpZLG9DQUFZIn0=