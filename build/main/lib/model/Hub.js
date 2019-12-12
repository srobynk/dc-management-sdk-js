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
var ContentType_1 = require("./ContentType");
var ContentTypeSchema_1 = require("./ContentTypeSchema");
var Event_1 = require("./Event");
var Page_1 = require("./Page");
var Webhook_1 = require("./Webhook");
/**
 * Class representing the [Hub](https://api.amplience.net/v2/content/docs/api/index.html#resources-hubs) resource.
 * Hubs are containers for multiple repositories including media, content, content types.
 */
var Hub = /** @class */ (function (_super) {
    __extends(Hub, _super);
    function Hub() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Resources and actions related to a Hub
         */
        _this.related = {
            contentTypeSchema: {
                /**
                 * Creates a new Content Type Schema
                 * @param resource
                 */
                create: function (resource) {
                    return _this.createLinkedResource('create-content-type-schema', {}, resource, ContentTypeSchema_1.ContentTypeSchema);
                },
                /**
                 * Retrieves a list of Content Type Schemas associated with this Hub
                 * @param options Pagination options
                 */
                list: function (options) {
                    return _this.fetchLinkedResource('list-content-type-schemas', options, ContentTypeSchema_1.ContentTypeSchemaPage);
                }
            },
            contentRepositories: {
                /**
                 * Retrieves a list of Content Repositories associated with this Hub
                 * @param options Pagination options
                 */
                list: function (options) {
                    return _this.fetchLinkedResource('content-repositories', options, ContentRepository_1.ContentRepositoriesPage);
                }
            },
            contentTypes: {
                /**
                 * Retrieves a list of Content Types associated with this Hub
                 * @param options Pagination options
                 */
                list: function (options) {
                    return _this.fetchLinkedResource('content-types', options, ContentType_1.ContentTypePage);
                },
                /**
                 * Register a Content Type on a hub so it can be enabled on a repository
                 */
                register: function (resource) {
                    return _this.createLinkedResource('register-content-type', {}, resource, ContentType_1.ContentType);
                }
            },
            events: {
                /**
                 * Creates an Event inside this Hub
                 * @param resource
                 */
                create: function (resource) {
                    return _this.createLinkedResource('create-event', {}, resource, Event_1.Event);
                },
                /**
                 * Retrieves a list of Events associated with this Hub
                 * @param options Pagination options
                 */
                list: function (options) {
                    return _this.fetchLinkedResource('events', options, Event_1.EventsPage);
                }
            },
            webhooks: {
                /**
                 * Creates a Webhook inside this Hub
                 * @param resource
                 */
                create: function (resource) {
                    return _this.createLinkedResource('create-webhook', {}, resource, Webhook_1.Webhook);
                },
                /**
                 * Get a webhook inside this hub by its id
                 */
                get: function (id) {
                    return _this.client.fetchResource("hubs/" + _this.id + "/webhooks/" + id, Webhook_1.Webhook);
                },
                /**
                 * Retrieves a list of Events associated with this Hub
                 * @param options Pagination options
                 */
                list: function (options) {
                    return _this.fetchLinkedResource('webhooks', options, Webhook_1.WebhooksPage);
                }
            }
        };
        return _this;
    }
    return Hub;
}(HalResource_1.HalResource));
exports.Hub = Hub;
/**
 * @hidden
 */
var HubsPage = /** @class */ (function (_super) {
    __extends(HubsPage, _super);
    function HubsPage(data) {
        return _super.call(this, 'hubs', Hub, data) || this;
    }
    return HubsPage;
}(Page_1.Page));
exports.HubsPage = HubsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2RlbC9IdWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBQ3hELHlEQUc2QjtBQUM3Qiw2Q0FBNkQ7QUFDN0QseURBQStFO0FBQy9FLGlDQUE0QztBQUM1QywrQkFBOEI7QUFJOUIscUNBQWtEO0FBRWxEOzs7R0FHRztBQUNIO0lBQXlCLHVCQUFXO0lBQXBDO1FBQUEscUVBK0lDO1FBakdDOztXQUVHO1FBQ2EsYUFBTyxHQUFHO1lBQ3hCLGlCQUFpQixFQUFFO2dCQUNqQjs7O21CQUdHO2dCQUNILE1BQU0sRUFBRSxVQUFDLFFBQTJCO29CQUNsQyxPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FDdkIsNEJBQTRCLEVBQzVCLEVBQUUsRUFDRixRQUFRLEVBQ1IscUNBQWlCLENBQ2xCO2dCQUxELENBS0M7Z0JBRUg7OzttQkFHRztnQkFDSCxJQUFJLEVBQUUsVUFBQyxPQUFrQjtvQkFDdkIsT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQ3RCLDJCQUEyQixFQUMzQixPQUFPLEVBQ1AseUNBQXFCLENBQ3RCO2dCQUpELENBSUM7YUFDSjtZQUVELG1CQUFtQixFQUFFO2dCQUNuQjs7O21CQUdHO2dCQUNILElBQUksRUFBRSxVQUFDLE9BQTZCO29CQUNsQyxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FDdEIsc0JBQXNCLEVBQ3RCLE9BQU8sRUFDUCwyQ0FBdUIsQ0FDeEI7Z0JBSkQsQ0FJQzthQUNKO1lBQ0QsWUFBWSxFQUFFO2dCQUNaOzs7bUJBR0c7Z0JBQ0gsSUFBSSxFQUFFLFVBQUMsT0FBNkI7b0JBQ2xDLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsNkJBQWUsQ0FBQztnQkFBbkUsQ0FBbUU7Z0JBRXJFOzttQkFFRztnQkFDSCxRQUFRLEVBQUUsVUFBQyxRQUFxQjtvQkFDOUIsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQ3ZCLHVCQUF1QixFQUN2QixFQUFFLEVBQ0YsUUFBUSxFQUNSLHlCQUFXLENBQ1o7Z0JBTEQsQ0FLQzthQUNKO1lBQ0QsTUFBTSxFQUFFO2dCQUNOOzs7bUJBR0c7Z0JBQ0gsTUFBTSxFQUFFLFVBQUMsUUFBZTtvQkFDdEIsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsYUFBSyxDQUFDO2dCQUE5RCxDQUE4RDtnQkFFaEU7OzttQkFHRztnQkFDSCxJQUFJLEVBQUUsVUFBQyxPQUE2QjtvQkFDbEMsT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxrQkFBVSxDQUFDO2dCQUF2RCxDQUF1RDthQUMxRDtZQUNELFFBQVEsRUFBRTtnQkFDUjs7O21CQUdHO2dCQUNILE1BQU0sRUFBRSxVQUFDLFFBQWlCO29CQUN4QixPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGlCQUFPLENBQUM7Z0JBQWxFLENBQWtFO2dCQUVwRTs7bUJBRUc7Z0JBQ0gsR0FBRyxFQUFFLFVBQUMsRUFBVTtvQkFDZCxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVEsS0FBSSxDQUFDLEVBQUUsa0JBQWEsRUFBSSxFQUFFLGlCQUFPLENBQUM7Z0JBQXBFLENBQW9FO2dCQUV0RTs7O21CQUdHO2dCQUNILElBQUksRUFBRSxVQUFDLE9BQTZCO29CQUNsQyxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLHNCQUFZLENBQUM7Z0JBQTNELENBQTJEO2FBQzlEO1NBQ0YsQ0FBQzs7SUFDSixDQUFDO0lBQUQsVUFBQztBQUFELENBQUMsQUEvSUQsQ0FBeUIseUJBQVcsR0ErSW5DO0FBL0lZLGtCQUFHO0FBaUpoQjs7R0FFRztBQUNIO0lBQThCLDRCQUFTO0lBQ3JDLGtCQUFZLElBQVU7ZUFDcEIsa0JBQU0sTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBOEIsV0FBSSxHQUlqQztBQUpZLDRCQUFRIn0=