"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = __importDefault(require("ava"));
var DynamicContent_mocks_1 = require("../DynamicContent.mocks");
var Edition_1 = require("./Edition");
ava_1.default('get event by id', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.events.get('5b32379e4cedfd01c4504171')];
            case 1:
                result = _a.sent();
                t.is(result.name, 'January Sale');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('list editions', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result, editions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.events.get('5b32379e4cedfd01c4504171')];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, result.related.editions.list()];
            case 2:
                editions = _a.sent();
                t.is(editions.getItems()[0].name, 'January Sale');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('create edition', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result, newEdition;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.events.get('5b32379e4cedfd01c4504171')];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, result.related.editions.create(new Edition_1.Edition())];
            case 2:
                newEdition = _a.sent();
                t.is(newEdition.name, 'January Sale');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('toJSON should copy resource attributes', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.events.get('5b32379e4cedfd01c4504171')];
            case 1:
                result = _a.sent();
                t.deepEqual(result.toJSON(), {
                    brief: 'http://external.doc/mybrief',
                    comment: 'This is an event.',
                    end: '2017-01-01T23:59:59.000Z',
                    id: '5b32379e4cedfd01c4504171',
                    name: 'January Sale',
                    start: '2017-01-01T00:00:00.000Z'
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvRXZlbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFzQ0E7O0FBdENBLDRDQUF1QjtBQUN2QixnRUFBNkQ7QUFDN0QscUNBQW9DO0FBRXBDLGFBQUksQ0FBQyxpQkFBaUIsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUN2QixNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUN6QixxQkFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBNUQsTUFBTSxHQUFHLFNBQW1EO2dCQUNsRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7Ozs7S0FDbkMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLGVBQWUsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUNyQixNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUN6QixxQkFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBNUQsTUFBTSxHQUFHLFNBQW1EO2dCQUNqRCxxQkFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0JBQS9DLFFBQVEsR0FBRyxTQUFvQztnQkFDckQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDOzs7O0tBQ25ELENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUN0QixNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUN6QixxQkFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBNUQsTUFBTSxHQUFHLFNBQW1EO2dCQUMvQyxxQkFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxpQkFBTyxFQUFFLENBQUMsRUFBQTs7Z0JBQWhFLFVBQVUsR0FBRyxTQUFtRDtnQkFFdEUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDOzs7O0tBQ3ZDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyx3Q0FBd0MsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUM5QyxNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUN6QixxQkFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBNUQsTUFBTSxHQUFHLFNBQW1EO2dCQUVsRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDM0IsS0FBSyxFQUFFLDZCQUE2QjtvQkFDcEMsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsR0FBRyxFQUFFLDBCQUEwQjtvQkFDL0IsRUFBRSxFQUFFLDBCQUEwQjtvQkFDOUIsSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLEtBQUssRUFBRSwwQkFBMEI7aUJBQ2xDLENBQUMsQ0FBQzs7OztLQUNKLENBQUMsQ0FBQyJ9