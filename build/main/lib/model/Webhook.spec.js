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
var Webhook_1 = require("./Webhook");
ava_1.default('get webhook by id', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                return [4 /*yield*/, hub.related.webhooks.get('5a497a000000000000000000')];
            case 2:
                result = _a.sent();
                t.is(result.label, 'myWebhookSubscription');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('list webhooks', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub, webhooks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                return [4 /*yield*/, hub.related.webhooks.list()];
            case 2:
                webhooks = _a.sent();
                t.is(webhooks.getItems()[0].label, 'myWebhookSubscription');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('create webhook', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub, newWebhook;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                return [4 /*yield*/, hub.related.webhooks.create(new Webhook_1.Webhook())];
            case 2:
                newWebhook = _a.sent();
                t.is(newWebhook.label, 'myWebhookSubscription');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('delete webhook', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                return [4 /*yield*/, hub.related.webhooks.get('5a497a000000000000000000')];
            case 2:
                result = _a.sent();
                return [2 /*return*/, t.notThrows(result.related.delete())];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViaG9vay5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2RlbC9XZWJob29rLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBZ0NBOztBQWhDQSw0Q0FBdUI7QUFDdkIsZ0VBQTZEO0FBQzdELHFDQUFvQztBQUVwQyxhQUFJLENBQUMsbUJBQW1CLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDekIsTUFBTSxHQUFHLElBQUkseUNBQWtCLEVBQUUsQ0FBQztnQkFDNUIscUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsRUFBQTs7Z0JBQXZELEdBQUcsR0FBRyxTQUFpRDtnQkFDOUMscUJBQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLEVBQUE7O2dCQUFuRSxNQUFNLEdBQUcsU0FBMEQ7Z0JBQ3pFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSx1QkFBdUIsQ0FBQyxDQUFDOzs7O0tBQzdDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxlQUFlLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDckIsTUFBTSxHQUFHLElBQUkseUNBQWtCLEVBQUUsQ0FBQztnQkFDNUIscUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsRUFBQTs7Z0JBQXZELEdBQUcsR0FBRyxTQUFpRDtnQkFDNUMscUJBQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUE1QyxRQUFRLEdBQUcsU0FBaUM7Z0JBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSx1QkFBdUIsQ0FBQyxDQUFDOzs7O0tBQzdELENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUN0QixNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUM1QixxQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBdkQsR0FBRyxHQUFHLFNBQWlEO2dCQUMxQyxxQkFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxpQkFBTyxFQUFFLENBQUMsRUFBQTs7Z0JBQTdELFVBQVUsR0FBRyxTQUFnRDtnQkFFbkUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLHVCQUF1QixDQUFDLENBQUM7Ozs7S0FDakQsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLGdCQUFnQixFQUFFLFVBQU0sQ0FBQzs7Ozs7Z0JBQ3RCLE1BQU0sR0FBRyxJQUFJLHlDQUFrQixFQUFFLENBQUM7Z0JBQzVCLHFCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLEVBQUE7O2dCQUF2RCxHQUFHLEdBQUcsU0FBaUQ7Z0JBQzlDLHFCQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBbkUsTUFBTSxHQUFHLFNBQTBEO2dCQUN6RSxzQkFBTyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBQzs7O0tBQzdDLENBQUMsQ0FBQyJ9