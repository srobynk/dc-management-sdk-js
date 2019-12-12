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
 * @hidden
 */
var EmbeddedCollection = /** @class */ (function (_super) {
    __extends(EmbeddedCollection, _super);
    function EmbeddedCollection(key, resourceType, data) {
        var _this = _super.call(this, data) || this;
        _this.key = key;
        _this.resourceType = resourceType;
        return _this;
    }
    EmbeddedCollection.prototype.getItems = function () {
        if (!this.items) {
            this.items = this.parseEmbedded(this.key, this.resourceType);
        }
        return this.items;
    };
    EmbeddedCollection.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        result._embedded[this.key] = this.getItems().map(function (item) { return item.toJSON(); });
        delete result.key;
        delete result.resourceType;
        delete result.items;
        return result;
    };
    return EmbeddedCollection;
}(HalResource_1.HalResource));
exports.EmbeddedCollection = EmbeddedCollection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1iZWRkZWRDb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2RlbC9FbWJlZGRlZENvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEseURBQWdGO0FBRWhGOztHQUVHO0FBQ0g7SUFFVSxzQ0FBVztJQUtuQiw0QkFDRSxHQUFXLEVBQ1gsWUFBdUMsRUFDdkMsSUFBVTtRQUhaLFlBS0Usa0JBQU0sSUFBSSxDQUFDLFNBR1o7UUFGQyxLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDOztJQUNuQyxDQUFDO0lBRU0scUNBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxtQ0FBTSxHQUFiO1FBQ0UsSUFBTSxNQUFNLEdBQUcsaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQUMsQ0FBQztRQUN4RSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDbEIsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQzNCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBaENELENBRVUseUJBQVcsR0E4QnBCO0FBaENxQixnREFBa0IifQ==