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
var Edition_1 = require("./Edition");
var Page_1 = require("./Page");
/**
 * Class representing the [Event](https://api.amplience.net/v2/content/docs/api/index.html#resources-events) resource.
 * An Event represents a major date in the calendar, such as Christmas or Black Friday. An Event may span multiple days and start and end at any given UTC time.
 */
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Resources and actions related to an Event
         */
        _this.related = {
            editions: {
                /**
                 * Creates an Edition inside the Event
                 * @param resource The new Edition to create
                 */
                create: function (resource) {
                    return _this.createLinkedResource('create-edition', {}, resource, Edition_1.Edition);
                },
                /**
                 * Retrieves a list of Editions associated with this Event.
                 * @param options Pagination options
                 */
                list: function (options) {
                    return _this.fetchLinkedResource('editions', options, Edition_1.EditionsPage);
                }
            }
        };
        return _this;
    }
    return Event;
}(HalResource_1.HalResource));
exports.Event = Event;
/**
 * @hidden
 */
var EventsPage = /** @class */ (function (_super) {
    __extends(EventsPage, _super);
    function EventsPage(data) {
        return _super.call(this, 'events', Event, data) || this;
    }
    return EventsPage;
}(Page_1.Page));
exports.EventsPage = EventsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUN4RCxxQ0FBa0Q7QUFDbEQsK0JBQThCO0FBSTlCOzs7R0FHRztBQUNIO0lBQTJCLHlCQUFXO0lBQXRDO1FBQUEscUVBbURDO1FBcEJDOztXQUVHO1FBQ2EsYUFBTyxHQUFHO1lBQ3hCLFFBQVEsRUFBRTtnQkFDUjs7O21CQUdHO2dCQUNILE1BQU0sRUFBRSxVQUFDLFFBQWlCO29CQUN4QixPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGlCQUFPLENBQUM7Z0JBQWxFLENBQWtFO2dCQUVwRTs7O21CQUdHO2dCQUNILElBQUksRUFBRSxVQUFDLE9BQTZCO29CQUNsQyxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLHNCQUFZLENBQUM7Z0JBQTNELENBQTJEO2FBQzlEO1NBQ0YsQ0FBQzs7SUFDSixDQUFDO0lBQUQsWUFBQztBQUFELENBQUMsQUFuREQsQ0FBMkIseUJBQVcsR0FtRHJDO0FBbkRZLHNCQUFLO0FBcURsQjs7R0FFRztBQUNIO0lBQWdDLDhCQUFXO0lBQ3pDLG9CQUFZLElBQVU7ZUFDcEIsa0JBQU0sUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQUpELENBQWdDLFdBQUksR0FJbkM7QUFKWSxnQ0FBVSJ9