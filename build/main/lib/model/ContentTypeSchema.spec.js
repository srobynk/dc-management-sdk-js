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
var ContentTypeSchema_1 = require("./ContentTypeSchema");
ava_1.default('list ContentTypeSchemas for a Hub', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                return [4 /*yield*/, hub.related.contentTypeSchema.list()];
            case 2:
                result = _a.sent();
                t.is(result.getItems()[0].schemaId, 'http://example.com/content-type-schema.json');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('get a ContentTypeSchema', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentTypeSchemas.get('5d4af55ced6688002869d808')];
            case 1:
                result = _a.sent();
                t.is(result.schemaId, 'http://example.com/content-type-schema.json');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('get a version ContentTypeSchema', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentTypeSchemas.getByVersion('5d4af55ced6688002869d808', 2)];
            case 1:
                result = _a.sent();
                t.is(result.schemaId, 'http://example.com/content-type-schema.json');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('create a ContentTypeSchema', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub, newContentTypeSchema, createContentTypeSchema;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                newContentTypeSchema = new ContentTypeSchema_1.ContentTypeSchema();
                newContentTypeSchema.schemaId = 'http://example.com/content-type-schema.json';
                newContentTypeSchema.body = JSON.stringify({
                    $schema: 'http://json-schema.org/draft-04/schema#',
                    id: 'http://example.com/content-type-schema.json',
                    title: 'Image'
                });
                return [4 /*yield*/, hub.related.contentTypeSchema.create(newContentTypeSchema)];
            case 2:
                createContentTypeSchema = _a.sent();
                t.is(createContentTypeSchema.schemaId, 'http://example.com/content-type-schema.json');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('update a ContentTypeSchema', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result, createContentTypeSchema;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentTypeSchemas.get('5d4af55ced6688002869d808')];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, result.related.update(result)];
            case 2:
                createContentTypeSchema = _a.sent();
                t.is(createContentTypeSchema.version, 2);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFR5cGVTY2hlbWEuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvQ29udGVudFR5cGVTY2hlbWEuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkEyREE7O0FBM0RBLDRDQUF1QjtBQUN2QixnRUFBNkQ7QUFFN0QseURBQXdEO0FBRXhELGFBQUksQ0FBQyxtQ0FBbUMsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUN6QyxNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUM1QixxQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBdkQsR0FBRyxHQUFHLFNBQWlEO2dCQUM5QyxxQkFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUFBOztnQkFBbkQsTUFBTSxHQUFHLFNBQTBDO2dCQUN6RCxDQUFDLENBQUMsRUFBRSxDQUNGLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQzdCLDZDQUE2QyxDQUM5QyxDQUFDOzs7O0tBQ0gsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLHlCQUF5QixFQUFFLFVBQU0sQ0FBQzs7Ozs7Z0JBQy9CLE1BQU0sR0FBRyxJQUFJLHlDQUFrQixFQUFFLENBQUM7Z0JBQ3pCLHFCQUFNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQ2hELDBCQUEwQixDQUMzQixFQUFBOztnQkFGSyxNQUFNLEdBQUcsU0FFZDtnQkFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsNkNBQTZDLENBQUMsQ0FBQzs7OztLQUN0RSxDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMsaUNBQWlDLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDdkMsTUFBTSxHQUFHLElBQUkseUNBQWtCLEVBQUUsQ0FBQztnQkFDekIscUJBQU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FDekQsMEJBQTBCLEVBQzFCLENBQUMsQ0FDRixFQUFBOztnQkFISyxNQUFNLEdBQUcsU0FHZDtnQkFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsNkNBQTZDLENBQUMsQ0FBQzs7OztLQUN0RSxDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMsNEJBQTRCLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDbEMsTUFBTSxHQUFHLElBQUkseUNBQWtCLEVBQUUsQ0FBQztnQkFDNUIscUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsRUFBQTs7Z0JBQXZELEdBQUcsR0FBRyxTQUFpRDtnQkFDdkQsb0JBQW9CLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO2dCQUNyRCxvQkFBb0IsQ0FBQyxRQUFRLEdBQUcsNkNBQTZDLENBQUM7Z0JBQzlFLG9CQUFvQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUN6QyxPQUFPLEVBQUUseUNBQXlDO29CQUNsRCxFQUFFLEVBQUUsNkNBQTZDO29CQUNqRCxLQUFLLEVBQUUsT0FBTztpQkFDZixDQUFDLENBQUM7Z0JBQzZCLHFCQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUN4RSxvQkFBb0IsQ0FDckIsRUFBQTs7Z0JBRkssdUJBQXVCLEdBQUcsU0FFL0I7Z0JBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FDRix1QkFBdUIsQ0FBQyxRQUFRLEVBQ2hDLDZDQUE2QyxDQUM5QyxDQUFDOzs7O0tBQ0gsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLDRCQUE0QixFQUFFLFVBQU0sQ0FBQzs7Ozs7Z0JBQ2xDLE1BQU0sR0FBRyxJQUFJLHlDQUFrQixFQUFFLENBQUM7Z0JBQ3pCLHFCQUFNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQ2hELDBCQUEwQixDQUMzQixFQUFBOztnQkFGSyxNQUFNLEdBQUcsU0FFZDtnQkFDK0IscUJBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUE7O2dCQUE3RCx1QkFBdUIsR0FBRyxTQUFtQztnQkFDbkUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7S0FDMUMsQ0FBQyxDQUFDIn0=