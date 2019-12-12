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
var ContentItem_1 = require("./ContentItem");
/**
 * Class representing the [Snapshot](https://api.amplience.net/v2/content/docs/api/index.html#resources-snapshots) resource.
 * A Snapshot is an immutable representation of a content item with all of its descendants (including their versions) at a given point in time.
 */
var Snapshot = /** @class */ (function (_super) {
    __extends(Snapshot, _super);
    function Snapshot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Resources and actions related to a Snapshot
         */
        _this.related = {
            /**
             * Retrieves the specific version of a content item referenced by the Snapshot
             * @param id Content item id
             */
            snapshotContentItem: function (id) {
                return _this.client.fetchResource("snapshots/" + _this.id + "/content-items/" + id, ContentItem_1.ContentItem);
            }
        };
        return _this;
    }
    return Snapshot;
}(HalResource_1.HalResource));
exports.Snapshot = Snapshot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU25hcHNob3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL1NuYXBzaG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUN4RCw2Q0FBNEM7QUFHNUM7OztHQUdHO0FBQ0g7SUFBOEIsNEJBQVc7SUFBekM7UUFBQSxxRUF3Q0M7UUFkQzs7V0FFRztRQUNhLGFBQU8sR0FBRztZQUN4Qjs7O2VBR0c7WUFDSCxtQkFBbUIsRUFBRSxVQUFDLEVBQVU7Z0JBQzlCLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQ3ZCLGVBQWEsS0FBSSxDQUFDLEVBQUUsdUJBQWtCLEVBQUksRUFDMUMseUJBQVcsQ0FDWjtZQUhELENBR0M7U0FDSixDQUFDOztJQUNKLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUE4Qix5QkFBVyxHQXdDeEM7QUF4Q1ksNEJBQVEifQ==