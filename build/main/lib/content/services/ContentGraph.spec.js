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
var ContentItem_1 = require("../../model/ContentItem");
var ContentGraph_1 = require("./ContentGraph");
/**
 * @hidden
 */
var FIXTURES = {
    contentA: new ContentItem_1.ContentItem({
        body: {},
        id: 'contentA',
        label: 'labelA'
    }),
    contentB: new ContentItem_1.ContentItem({
        body: {},
        id: 'contentB',
        label: 'labelB'
    }),
    contentC: new ContentItem_1.ContentItem({
        body: {
            children: [
                {
                    _meta: {
                        schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/content-link'
                    },
                    id: 'contentA'
                },
                {
                    _meta: {
                        schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/content-link'
                    },
                    id: 'contentB'
                }
            ]
        },
        id: 'contentC',
        label: 'labelC'
    })
};
ava_1.default('should reject if content fails to load', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                result = ContentGraph_1.ContentGraph.deepCopy(['contentA'], function (x) { return Promise.reject(new Error('')); }, function (x, y) { return Promise.reject(new Error('')); });
                return [4 /*yield*/, t.throws(function () { return result; })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('should use content item returned', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ContentGraph_1.ContentGraph.deepCopy(['contentA', 'contentB'], function (id) { return Promise.resolve(FIXTURES[id]); }, function (item, body) {
                    if (item.id === 'contentA') {
                        return Promise.resolve(FIXTURES.contentB);
                    }
                    else {
                        return Promise.resolve(FIXTURES.contentA);
                    }
                })];
            case 1:
                result = _a.sent();
                t.deepEqual(result, {
                    contentA: 'contentB',
                    contentB: 'contentA'
                });
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('should visit content-links', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ContentGraph_1.ContentGraph.deepCopy(['contentC'], function (id) { return Promise.resolve(FIXTURES[id]); }, function (item, body) {
                    return Promise.resolve(item);
                })];
            case 1:
                result = _a.sent();
                t.deepEqual(result, {
                    contentA: 'contentA',
                    contentB: 'contentB',
                    contentC: 'contentC'
                });
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('should rewrite content-links with the id of the copy', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var expected, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expected = {
                    contentA: 'contentA-copy',
                    contentB: 'contentB-copy',
                    contentC: 'contentC-copy'
                };
                return [4 /*yield*/, ContentGraph_1.ContentGraph.deepCopy(['contentC'], function (id) { return Promise.resolve(FIXTURES[id]); }, function (item, body) {
                        var newItem = new ContentItem_1.ContentItem({
                            body: body,
                            id: item.id + '-copy',
                            label: item.label + '-copy'
                        });
                        var oldLinks = ContentGraph_1.ContentGraph.extractLinks(item.body);
                        var newLinks = ContentGraph_1.ContentGraph.extractLinks(body);
                        for (var i = 0; i < oldLinks.length; i++) {
                            var oldLink = oldLinks[i];
                            var newLink = newLinks[i];
                            if (newLink.id !== expected[oldLink.id]) {
                                throw new Error('Link rewrites failed');
                            }
                        }
                        return Promise.resolve(newItem);
                    })];
            case 1:
                result = _a.sent();
                t.deepEqual(result, expected);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('should only process an id once', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var callbacks, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                callbacks = 0;
                return [4 /*yield*/, ContentGraph_1.ContentGraph.deepCopy(['contentA', 'contentA'], function (id) { return Promise.resolve(FIXTURES[id]); }, function (item, body) {
                        callbacks++;
                        return Promise.resolve(item);
                    })];
            case 1:
                result = _a.sent();
                t.is(callbacks, 1);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudEdyYXBoLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbnRlbnQvc2VydmljZXMvQ29udGVudEdyYXBoLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBeUlBOztBQXpJQSw0Q0FBdUI7QUFDdkIsdURBQXNEO0FBQ3RELCtDQUE4QztBQUU5Qzs7R0FFRztBQUNILElBQU0sUUFBUSxHQUFHO0lBQ2YsUUFBUSxFQUFFLElBQUkseUJBQVcsQ0FBQztRQUN4QixJQUFJLEVBQUUsRUFBRTtRQUNSLEVBQUUsRUFBRSxVQUFVO1FBQ2QsS0FBSyxFQUFFLFFBQVE7S0FDaEIsQ0FBQztJQUNGLFFBQVEsRUFBRSxJQUFJLHlCQUFXLENBQUM7UUFDeEIsSUFBSSxFQUFFLEVBQUU7UUFDUixFQUFFLEVBQUUsVUFBVTtRQUNkLEtBQUssRUFBRSxRQUFRO0tBQ2hCLENBQUM7SUFDRixRQUFRLEVBQUUsSUFBSSx5QkFBVyxDQUFDO1FBQ3hCLElBQUksRUFBRTtZQUNKLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxLQUFLLEVBQUU7d0JBQ0wsTUFBTSxFQUNKLG1FQUFtRTtxQkFDdEU7b0JBQ0QsRUFBRSxFQUFFLFVBQVU7aUJBQ2Y7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFO3dCQUNMLE1BQU0sRUFDSixtRUFBbUU7cUJBQ3RFO29CQUNELEVBQUUsRUFBRSxVQUFVO2lCQUNmO2FBQ0Y7U0FDRjtRQUNELEVBQUUsRUFBRSxVQUFVO1FBQ2QsS0FBSyxFQUFFLFFBQVE7S0FDaEIsQ0FBQztDQUNILENBQUM7QUFFRixhQUFJLENBQUMsd0NBQXdDLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDOUMsTUFBTSxHQUFHLDJCQUFZLENBQUMsUUFBUSxDQUNsQyxDQUFDLFVBQVUsQ0FBQyxFQUNaLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FB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