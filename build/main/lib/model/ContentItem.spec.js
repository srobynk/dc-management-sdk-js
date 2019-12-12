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
var ContentItem_1 = require("./ContentItem");
ava_1.default('get content item by id', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentItems.get('a87fd535-fb25-44ee-b687-0db72bbab721')];
            case 1:
                result = _a.sent();
                t.is(result.label, 'Banner Ad Homepage');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('get version', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentItem, version1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentItems.get('a87fd535-fb25-44ee-b687-0db72bbab721')];
            case 1:
                contentItem = _a.sent();
                return [4 /*yield*/, contentItem.related.contentItemVersion(1)];
            case 2:
                version1 = _a.sent();
                t.is(version1.version, 1);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('update', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentItem, mutation, update;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentItems.get('a87fd535-fb25-44ee-b687-0db72bbab721')];
            case 1:
                contentItem = _a.sent();
                mutation = new ContentItem_1.ContentItem({
                    label: 'New Label',
                    version: contentItem.version
                });
                return [4 /*yield*/, contentItem.related.update(mutation)];
            case 2:
                update = _a.sent();
                t.is(update.version, contentItem.version + 1);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('get repository', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentItem, repo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentItems.get('a87fd535-fb25-44ee-b687-0db72bbab721')];
            case 1:
                contentItem = _a.sent();
                return [4 /*yield*/, contentItem.related.contentRepository()];
            case 2:
                repo = _a.sent();
                t.is(repo.name, 'inspiration');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('set locale', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentItem, itemWithLocale;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentItems.get('a87fd535-fb25-44ee-b687-0db72bbab721')];
            case 1:
                contentItem = _a.sent();
                return [4 /*yield*/, contentItem.related.setLocale('en-GB')];
            case 2:
                itemWithLocale = _a.sent();
                t.is(itemWithLocale.locale, 'en-GB');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('create localizations', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentItem, itemWithLocale, localizationJob;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentItems.get('a87fd535-fb25-44ee-b687-0db72bbab721')];
            case 1:
                contentItem = _a.sent();
                return [4 /*yield*/, contentItem.related.setLocale('en-GB')];
            case 2:
                itemWithLocale = _a.sent();
                return [4 /*yield*/, itemWithLocale.related.localize(['fr-FR'])];
            case 3:
                localizationJob = _a.sent();
                t.is(localizationJob.status, 'IN_PROGRESS');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('toJSON should copy resource attributes', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, resource;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentItems.get('a87fd535-fb25-44ee-b687-0db72bbab721')];
            case 1:
                resource = _a.sent();
                t.deepEqual(resource.toJSON(), {
                    body: {
                        _meta: {
                            name: 'main-banner',
                            schema: 'http://deliver.bigcontent.io/schema/nested/nested-type.json'
                        }
                    },
                    createdBy: 'user',
                    createdDate: '2018-06-26T12:54:16.216Z',
                    deliveryId: 'a87fd535-fb25-44ee-b687-0db72bbab721',
                    folderId: '5b3237784cedfd01c4503658',
                    id: 'a87fd535-fb25-44ee-b687-0db72bbab721',
                    label: 'Banner Ad Homepage',
                    lastModifiedBy: 'user',
                    lastModifiedDate: '2018-06-26T12:54:16.216Z',
                    locale: 'en-GB',
                    status: 'ACTIVE',
                    version: 1
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudEl0ZW0uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvQ29udGVudEl0ZW0uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFvR0E7O0FBcEdBLDRDQUF1QjtBQUN2QixnRUFBNkQ7QUFDN0QsNkNBQTRDO0FBRTVDLGFBQUksQ0FBQyx3QkFBd0IsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUM5QixNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUN6QixxQkFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDMUMsc0NBQXNDLENBQ3ZDLEVBQUE7O2dCQUZLLE1BQU0sR0FBRyxTQUVkO2dCQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxvQkFBb0IsQ0FBQyxDQUFDOzs7O0tBQzFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxhQUFhLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDbkIsTUFBTSxHQUFHLElBQUkseUNBQWtCLEVBQUUsQ0FBQztnQkFFcEIscUJBQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQy9DLHNDQUFzQyxDQUN2QyxFQUFBOztnQkFGSyxXQUFXLEdBQUcsU0FFbkI7Z0JBQ2dCLHFCQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUE7O2dCQUExRCxRQUFRLEdBQUcsU0FBK0M7Z0JBRWhFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7OztLQUMzQixDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMsUUFBUSxFQUFFLFVBQU0sQ0FBQzs7Ozs7Z0JBQ2QsTUFBTSxHQUFHLElBQUkseUNBQWtCLEVBQUUsQ0FBQztnQkFFcEIscUJBQU0sTUFB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