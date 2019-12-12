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
ava_1.default('get snapshot by id', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.snapshots.get('5b3237944cedfd01c45038ae')];
            case 1:
                result = _a.sent();
                t.is(result.comment, 'This is an example snapshot.');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('get content item from snapshot', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, snapshot, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.snapshots.get('5b3237944cedfd01c45038ae')];
            case 1:
                snapshot = _a.sent();
                return [4 /*yield*/, snapshot.related.snapshotContentItem('a87fd535-fb25-44ee-b687-0db72bbab721')];
            case 2:
                result = _a.sent();
                t.is(result.label, 'Banner Ad Homepage');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('toJSON should copy resource attributes', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, snapshot;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.snapshots.get('5b3237944cedfd01c45038ae')];
            case 1:
                snapshot = _a.sent();
                t.deepEqual(snapshot.toJSON(), {
                    comment: 'This is an example snapshot.',
                    createdBy: 'thor',
                    createdDate: '2017-06-05T04:03:02Z',
                    id: '5b3237944cedfd01c45038ae',
                    meta: [],
                    rootContentItem: {
                        contentTypeUri: 'http://deliver.bigcontent.io/schema/nested/nested-type.json',
                        label: 'Banner Ad Homepage'
                    },
                    taggedEditions: [],
                    type: 'USER'
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU25hcHNob3Quc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvU25hcHNob3Quc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFzQ0E7O0FBdENBLDRDQUF1QjtBQUN2QixnRUFBNkQ7QUFFN0QsYUFBSSxDQUFDLG9CQUFvQixFQUFFLFVBQU0sQ0FBQzs7Ozs7Z0JBQzFCLE1BQU0sR0FBRyxJQUFJLHlDQUFrQixFQUFFLENBQUM7Z0JBQ3pCLHFCQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLEVBQUE7O2dCQUEvRCxNQUFNLEdBQUcsU0FBc0Q7Z0JBQ3JFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDOzs7O0tBQ3RELENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUN0QyxNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUN2QixxQkFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBakUsUUFBUSxHQUFHLFNBQXNEO2dCQUN4RCxxQkFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUN2RCxzQ0FBc0MsQ0FDdkMsRUFBQTs7Z0JBRkssTUFBTSxHQUFHLFNBRWQ7Z0JBRUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLG9CQUFvQixDQUFDLENBQUM7Ozs7S0FDMUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLHdDQUF3QyxFQUFFLFVBQU0sQ0FBQzs7Ozs7Z0JBQzlDLE1BQU0sR0FBRyxJQUFJLHlDQUFrQixFQUFFLENBQUM7Z0JBQ3ZCLHFCQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLEVBQUE7O2dCQUFqRSxRQUFRLEdBQUcsU0FBc0Q7Z0JBRXZFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUM3QixPQUFPLEVBQUUsOEJBQThCO29CQUN2QyxTQUFTLEVBQUUsTUFBTTtvQkFDakIsV0FBVyxFQUFFLHNCQUFzQjtvQkFDbkMsRUFBRSxFQUFFLDBCQUEwQjtvQkFDOUIsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsZUFBZSxFQUFFO3dCQUNmLGNBQWMsRUFDWiw2REFBNkQ7d0JBQy9ELEtBQUssRUFBRSxvQkFBb0I7cUJBQzVCO29CQUNELGNBQWMsRUFBRSxFQUFFO29CQUNsQixJQUFJLEVBQUUsTUFBTTtpQkFDYixDQUFDLENBQUM7Ozs7S0FDSixDQUFDLENBQUMifQ==