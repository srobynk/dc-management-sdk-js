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
ava_1.default('get edition by id', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.editions.get('5b32379e4cedfd01c4504172')];
            case 1:
                result = _a.sent();
                t.is(result.name, 'January Sale');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('get event', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result, event;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.editions.get('5b32379e4cedfd01c4504172')];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, result.related.event()];
            case 2:
                event = _a.sent();
                t.is(event.name, 'January Sale');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('list slots', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result, slots;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.editions.get('5b32379e4cedfd01c4504172')];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, result.related.slots.list()];
            case 2:
                slots = _a.sent();
                t.is(slots.getItems()[0].slotId, '7aa5f5d4-071c-42e3-b42e-02675c56d60e');
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
                return [4 /*yield*/, client.editions.get('5b32379e4cedfd01c4504172')];
            case 1:
                result = _a.sent();
                t.deepEqual(result.toJSON(), {
                    activeEndDate: false,
                    comment: 'This is an example edition.',
                    createdBy: 'user',
                    createdDate: '2017-06-05T04:03:02.000Z',
                    end: '2017-01-01T23:59:59.000Z',
                    eventId: '5b32379e4cedfd01c4504171',
                    id: '5b32379e4cedfd01c4504172',
                    lastModifiedBy: 'user',
                    lastModifiedDate: '2017-06-05T04:03:02.000Z',
                    name: 'January Sale',
                    publishingJobId: null,
                    publishingStatus: 'DRAFT',
                    schedulingErrors: null,
                    schedulingUser: null,
                    slotsRemaining: 200,
                    stagedDate: null,
                    start: '2017-01-01T00:00:00.000Z',
                    statusUpdated: '2018-06-26T12:54:54.922Z'
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdGlvbi5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2RlbC9FZGl0aW9uLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBa0RBOztBQWxEQSw0Q0FBdUI7QUFDdkIsZ0VBQTZEO0FBRzdELGFBQUksQ0FBQyxtQkFBbUIsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUN6QixNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUN6QixxQkFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBOUQsTUFBTSxHQUFHLFNBQXFEO2dCQUNwRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7Ozs7S0FDbkMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUNqQixNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUN6QixxQkFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBOUQsTUFBTSxHQUFHLFNBQXFEO2dCQUN0RCxxQkFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFBOztnQkFBcEMsS0FBSyxHQUFHLFNBQTRCO2dCQUMxQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7Ozs7S0FDbEMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLFlBQVksRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUNsQixNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUN6QixxQkFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBOUQsTUFBTSxHQUFHLFNBQXFEO2dCQUN0RCxxQkFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0JBQXpDLEtBQUssR0FBRyxTQUFpQztnQkFFL0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7Ozs7S0FDMUUsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLHdDQUF3QyxFQUFFLFVBQU0sQ0FBQzs7Ozs7Z0JBQzlDLE1BQU0sR0FBRyxJQUFJLHlDQUFrQixFQUFFLENBQUM7Z0JBQ3pCLHFCQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLEVBQUE7O2dCQUE5RCxNQUFNLEdBQUcsU0FBcUQ7Z0JBRXBFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUMzQixhQUFhLEVBQUUsS0FBSztvQkFDcEIsT0FBTyxFQUFFLDZCQUE2QjtvQkFDdEMsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLFdBQVcsRUFBRSwwQkFBMEI7b0JBQ3ZDLEdBQUcsRUFBRSwwQkFBMEI7b0JBQy9CLE9BQU8sRUFBRSwwQkFBMEI7b0JBQ25DLEVBQUUsRUFBRSwwQkFBMEI7b0JBQzlCLGNBQWMsRUFBRSxNQUFNO29CQUN0QixnQkFBZ0IsRUFBRSwwQkFBMEI7b0JBQzVDLElBQUksRUFBRSxjQUFjO29CQUNwQixlQUFlLEVBQUUsSUFBSTtvQkFDckIsZ0JBQWdCLEVBQUUsT0FBTztvQkFDekIsZ0JBQWdCLEVBQUUsSUFBSTtvQkFDdEIsY0FBYyxFQUFFLElBQUk7b0JBQ3BCLGNBQWMsRUFBRSxHQUFHO29CQUNuQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsS0FBSyxFQUFFLDBCQUEwQjtvQkFDakMsYUFBYSxFQUFFLDBCQUEwQjtpQkFDMUMsQ0FBQyxDQUFDOzs7O0tBQ0osQ0FBQyxDQUFDIn0=