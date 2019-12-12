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
var AxiosHttpClient_1 = require("../../http/AxiosHttpClient");
var HalClient_1 = require("../services/HalClient");
var HalResource_1 = require("./HalResource");
// axios-mock-adaptor's typedefs are wrong preventing calling onGet with 3 args, this is a workaround
/**
 * @hidden
 */
// tslint:disable-next-line
var MockAdapter = require('axios-mock-adapter');
/**
 * @hidden
 */
var tokenProvider = {
    getToken: function () {
        return Promise.resolve({
            access_token: 'token',
            expires_in: 500,
            refresh_token: 'refresh'
        });
    }
};
/**
 * @hidden
 */
function createMockClient() {
    var httpClient = new AxiosHttpClient_1.AxiosHttpClient({});
    var client = new HalClient_1.DefaultHalClient('', httpClient, tokenProvider);
    var mock = new MockAdapter(httpClient.client);
    return [client, mock];
}
/**
 * @hidden
 */
var MockResource = /** @class */ (function (_super) {
    __extends(MockResource, _super);
    function MockResource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.related = {
            nested: function () { return _this.fetchLinkedResource('nested', {}, MockResource); },
            nestedCreate: function (resource) {
                return _this.createLinkedResource('nested', {}, resource, MockResource);
            }
        };
        return _this;
    }
    MockResource.prototype.getMockEmbeddedResources = function () {
        return this.parseEmbedded('mocks', MockResource);
    };
    return MockResource;
}(HalResource_1.HalResource));
ava_1.default('embedded resources should be lazy parsed', function (t) {
    var _a = createMockClient(), client = _a[0], mock = _a[1];
    var resource = client.parse({
        _embedded: {
            mocks: [{ name: 'test' }]
        }
    }, MockResource);
    t.is(resource.getMockEmbeddedResources().length, 1);
    t.is(resource.getMockEmbeddedResources()[0].name, 'test');
});
ava_1.default('missing embedded resources should return an empty list', function (t) {
    var resource = new MockResource({
        _embedded: {}
    });
    t.is(resource.getMockEmbeddedResources().length, 0);
});
ava_1.default('input JSON should be parsed', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var resource;
    return __generator(this, function (_a) {
        resource = new MockResource({
            name: 'test'
        });
        t.is(resource.name, 'test');
        return [2 /*return*/];
    });
}); });
ava_1.default('fetchLinkedResource should follow the resource link', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, resource, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = createMockClient(), client = _a[0], mock = _a[1];
                resource = client.parse({
                    _links: {
                        nested: {
                            href: '/nested/1'
                        }
                    }
                }, MockResource);
                mock.onGet('/nested/1', undefined).reply(200, {
                    name: 'nested 1'
                });
                return [4 /*yield*/, resource.related.nested()];
            case 1:
                result = _b.sent();
                t.is(result.name, 'nested 1');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('fetchLinkedResource should reject if link is missing', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, resource;
    return __generator(this, function (_b) {
        _a = createMockClient(), client = _a[0], mock = _a[1];
        resource = client.parse({
            _links: {}
        }, MockResource);
        resource.related.nested().then(function () { return t.fail(); }, function () { return t.pass(); });
        return [2 /*return*/];
    });
}); });
ava_1.default('fetchLinkedResource should reject if no client is linked', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, resource;
    return __generator(this, function (_b) {
        _a = createMockClient(), client = _a[0], mock = _a[1];
        resource = new MockResource({
            _links: {}
        });
        resource.related.nested().then(function () { return t.fail(); }, function () { return t.pass(); });
        return [2 /*return*/];
    });
}); });
ava_1.default('createLinkedResource should follow the resource link', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, resource, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = createMockClient(), client = _a[0], mock = _a[1];
                resource = client.parse({
                    _links: {
                        nested: {
                            href: '/nested/1'
                        }
                    }
                }, MockResource);
                mock.onPost('/nested/1', undefined).reply(200, {
                    name: 'nested 1'
                });
                return [4 /*yield*/, resource.related.nestedCreate(resource)];
            case 1:
                result = _b.sent();
                t.is(result.name, 'nested 1');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('createLinkedResource should reject if link is missing', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, resource;
    return __generator(this, function (_b) {
        _a = createMockClient(), client = _a[0], mock = _a[1];
        resource = client.parse({
            _links: {}
        }, MockResource);
        resource.related.nestedCreate(resource).then(function () { return t.fail(); }, function () { return t.pass(); });
        return [2 /*return*/];
    });
}); });
ava_1.default('createLinkedResource should reject if no client is linked', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, resource;
    return __generator(this, function (_b) {
        _a = createMockClient(), client = _a[0], mock = _a[1];
        resource = new MockResource({
            _links: {}
        });
        resource.related.nestedCreate(resource).then(function () { return t.fail(); }, function () { return t.pass(); });
        return [2 /*return*/];
    });
}); });
ava_1.default('toJSON should copy resource attributes', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var resource, json;
    return __generator(this, function (_a) {
        resource = new MockResource({
            _links: {},
            name: 'name'
        });
        json = resource.toJSON();
        t.is(json.name, 'name');
        return [2 /*return*/];
    });
}); });
ava_1.default('toJSON should exclude links & related', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var resource, json;
    return __generator(this, function (_a) {
        resource = new MockResource({
            _links: {
                nested: {
                    href: '/nested/1'
                }
            },
            name: 'name'
        });
        json = resource.toJSON();
        t.deepEqual(json, { name: 'name' });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFsUmVzb3VyY2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvaGFsL21vZGVscy9IYWxSZXNvdXJjZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkErTEE7O0FBL0xBLDRDQUF1QjtBQUN2Qiw4REFBNkQ7QUFDN0QsbURBQW9FO0FBQ3BFLDZDQUE0QztBQUU1QyxxR0FBcUc7QUFDckc7O0dBRUc7QUFDSCwyQkFBMkI7QUFDM0IsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFbEQ7O0dBRUc7QUFDSCxJQUFNLGFBQWEsR0FBRztJQUNwQixRQUFRLEVBQUU7UUFDUixPQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDZCxZQUFZLEVBQUUsT0FBTztZQUNyQixVQUFVLEVBQUUsR0FBRztZQUNmLGFBQWEsRUFBRSxTQUFTO1NBQ3pCLENBQUM7SUFKRixDQUlFO0NBQ0wsQ0FBQztBQUVGOztHQUVHO0FBQ0g7SUFDRSxJQUFNLFVBQVUsR0FBRyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsSUFBTSxNQUFNLEdBQUcsSUFBSSw0QkFBZ0IsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25FLElBQU0sSUFBSSxHQUFHLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVoRCxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFFRDs7R0FFRztBQUNIO0lBQTJCLGdDQUFXO0lBQXRDO1FBQUEscUVBWUM7UUFUaUIsYUFBTyxHQUFHO1lBQ3hCLE1BQU0sRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUs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