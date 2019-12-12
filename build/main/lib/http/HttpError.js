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
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(message, request, response) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.request = request;
        _this.response = response;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cEVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9odHRwL0h0dHBFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQTtJQUErQiw2QkFBSztJQUNsQyxtQkFDRSxPQUFlLEVBQ0MsT0FBcUIsRUFDckIsUUFBdUI7O1FBSHpDLFlBS0Usa0JBQU0sT0FBTyxDQUFDLFNBRWY7UUFMaUIsYUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixjQUFRLEdBQVIsUUFBUSxDQUFlO1FBR3ZDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLFdBQVcsU0FBUyxDQUFDLENBQUM7O0lBQ3BELENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFURCxDQUErQixLQUFLLEdBU25DO0FBVFksOEJBQVMifQ==