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
var ContentType_1 = require("./ContentType");
var ContentTypeCachedSchema_1 = require("./ContentTypeCachedSchema");
ava_1.default('get content type by id', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentTypes.get('5be1d5134cedfd01c030c460')];
            case 1:
                result = _a.sent();
                t.is(result.contentTypeUri, 'http://deliver.bigcontent.io/schema/carousel.json');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('update', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentType, mutation, update;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentTypes.get('5be1d5134cedfd01c030c460')];
            case 1:
                contentType = _a.sent();
                mutation = new ContentType_1.ContentType({
                    settings: {
                        icons: [
                            {
                                size: 512,
                                url: 'http://apps.dev-artifacts.adis.ws/cms-icons/develop/v0.4.0/256/ca-types-grid-mixedmedia.png'
                            }
                        ],
                        label: 'New Label',
                        visualizations: [
                            {
                                default: true,
                                label: 'Desktop Website',
                                templatedUri: 'http://example.com'
                            }
                        ]
                    }
                });
                return [4 /*yield*/, contentType.related.update(mutation)];
            case 2:
                update = _a.sent();
                t.deepEqual(update.settings, mutation.settings);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('contentTypeSchemas.get', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentType, contentTypeCachedSchema;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentTypes.get('5be1d5134cedfd01c030c460')];
            case 1:
                contentType = _a.sent();
                return [4 /*yield*/, contentType.related.contentTypeSchema.get()];
            case 2:
                contentTypeCachedSchema = _a.sent();
                t.is(contentTypeCachedSchema.hubId, '5b32377e4cedfd01c45036d8');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('contentTypeSchemas.update', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentType, contentTypeCachedSchema;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentTypes.get('5be1d5134cedfd01c030c460')];
            case 1:
                contentType = _a.sent();
                return [4 /*yield*/, contentType.related.contentTypeSchema.update(new ContentTypeCachedSchema_1.ContentTypeCachedSchema())];
            case 2:
                contentTypeCachedSchema = _a.sent();
                t.is(contentTypeCachedSchema.hubId, '5b32377e4cedfd01c45036d8');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('toJson should copy resource attributes', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, resource;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentTypes.get('5be1d5134cedfd01c030c460')];
            case 1:
                resource = _a.sent();
                t.deepEqual(resource.toJson(), {
                    contentTypeUri: 'http://deliver.bigcontent.io/schema/carousel.json',
                    id: '5be1d5134cedfd01c030c460',
                    settings: {
                        icons: [
                            {
                                size: 256,
                                url: 'http://apps.dev-artifacts.adis.ws/cms-icons/develop/v0.4.0/256/ca-types-grid-mixedmedia.png'
                            }
                        ],
                        label: 'Carousel',
                        visualizations: [
                            {
                                default: true,
                                label: 'Desktop Website',
                                templatedUri: 'http://website'
                            },
                            {
                                default: false,
                                label: 'Mobile Website',
                                templatedUri: 'http://mobile.website'
                            }
                        ]
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFR5cGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvQ29udGVudFR5cGUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkE2RkE7O0FBN0ZBLDRDQUF1QjtBQUN2QixnRUFBNkQ7QUFDN0QsNkNBQTRDO0FBQzVDLHFFQUFvRTtBQUVwRSxhQUFJLENBQUMsd0JBQXdCLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDOUIsTUFBTSxHQUFHLElBQUkseUNBQWtCLEVBQUUsQ0FBQztnQkFDekIscUJBQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsRUFBQTs7Z0JBQWxFLE1BQU0sR0FBRyxTQUF5RDtnQkFDeEUsQ0FBQyxDQUFDLEVBQUUsQ0FDRixNQUFNLENBQUMsY0FBYyxFQUNyQixtREFBbUQsQ0FDcEQsQ0FBQzs7OztLQUNILENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxRQUFRLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDZCxNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUVwQixxQkFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBdkUsV0FBVyxHQUFHLFNBQXlEO2dCQUV2RSxRQUFRLEdBQUcsSUFBSSx5QkFBVyxDQUFDO29CQUMvQixRQUFRLEVBQUU7d0JBQ1IsS0FBSyxFQUFFOzRCQUNMO2dDQUNFLElBQUksRUFBRSxHQUFHO2dDQUNULEdBQUcsRUFDRCw2RkFBNkY7NkJBQ2hHO3lCQUNGO3dCQUNELEtBQUssRUFBRSxXQUFXO3dCQUNsQixjQUFjLEVBQUU7NEJBQ2Q7Z0NBQ0UsT0FBTyxFQUFFLElBQUk7Z0NBQ2IsS0FBSyxFQUFFLGlCQUFpQjtnQ0FDeEIsWUFBWSxFQUFFLG9CQUFvQjs2QkFD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