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
var __1 = require("../../..");
var AxiosHttpClient_1 = require("../../http/AxiosHttpClient");
var HttpError_1 = require("../../http/HttpError");
var ContentRepository_1 = require("../../model/ContentRepository");
var Hub_1 = require("../../model/Hub");
var HalClient_1 = require("./HalClient");
// axios-mock-adaptor's typedefs are wrong preventing calling onGet with 3 args, this is a workaround
/**
 * @hidden
 */
// tslint:disable-next-line
var MockAdapter = require('axios-mock-adapter');
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
var tokenProvider = {
    getToken: function () {
        return Promise.resolve({
            access_token: 'token',
            expires_in: 500,
            refresh_token: 'refresh'
        });
    }
};
ava_1.default('fetchResource should load and parse resource', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, hub;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = createMockClient(), client = _a[0], mock = _a[1];
                mock.onGet('/hubs/1').reply(200, {
                    name: 'hub 1'
                });
                return [4 /*yield*/, client.fetchResource('/hubs/1', Hub_1.Hub)];
            case 1:
                hub = _b.sent();
                t.is(hub.name, 'hub 1');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('fetchLinkedResource should follow href', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, hub;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = createMockClient(), client = _a[0], mock = _a[1];
                mock.onGet('/hubs/1').reply(200, {
                    name: 'hub 1'
                });
                return [4 /*yield*/, client.fetchLinkedResource({ href: '/hubs/1' }, {}, Hub_1.Hub)];
            case 1:
                hub = _b.sent();
                t.is(hub.name, 'hub 1');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('fetchLinkedResource should process templated links', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, hub;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = createMockClient(), client = _a[0], mock = _a[1];
                mock.onGet('/hubs/1').reply(200, {
                    name: 'hub 1'
                });
                return [4 /*yield*/, client.fetchLinkedResource({ href: '/hubs/{id}', templated: true }, { id: '1' }, Hub_1.Hub)];
            case 1:
                hub = _b.sent();
                t.is(hub.name, 'hub 1');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('createResource should post and parse the resource', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, hub;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = createMockClient(), client = _a[0], mock = _a[1];
                mock.onPost('/hubs').reply(200, {
                    id: 'hub 1',
                    name: 'hub 1'
                });
                hub = new Hub_1.Hub();
                hub.name = 'hub 1';
                return [4 /*yield*/, client.createResource('/hubs', hub, Hub_1.Hub)];
            case 1:
                hub = _b.sent();
                t.is(hub.id, 'hub 1');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('createLinkedResource should follow href', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, hub;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = createMockClient(), client = _a[0], mock = _a[1];
                mock.onPost('/hubs').reply(200, {
                    id: 'hub 1',
                    name: 'hub 1'
                });
                hub = new Hub_1.Hub();
                hub.name = 'hub 1';
                return [4 /*yield*/, client.createLinkedResource({ href: '/hubs' }, {}, hub, Hub_1.Hub)];
            case 1:
                hub = _b.sent();
                t.is(hub.id, 'hub 1');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('createLinkedResource should process templated links', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, repo;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = createMockClient(), client = _a[0], mock = _a[1];
                mock.onPost('/hubs/1/content-repositories').reply(200, {
                    id: 'repo 1',
                    name: 'repo 1'
                });
                repo = new ContentRepository_1.ContentRepository();
                repo.name = 'repo 1';
                return [4 /*yield*/, client.createLinkedResource({ href: '/hubs/{id}/content-repositories', templated: true }, { id: '1' }, repo, ContentRepository_1.ContentRepository)];
            case 1:
                repo = _b.sent();
                t.is(repo.id, 'repo 1');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('requests should include auth token', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, hub;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = createMockClient(), client = _a[0], mock = _a[1];
                mock
                    .onGet('/hubs/1', undefined, {
                    Accept: 'application/json, text/plain, */*',
                    Authorization: 'bearer token'
                })
                    .reply(200, {
                    name: 'hub 1'
                });
                return [4 /*yield*/, client.fetchResource('/hubs/1', Hub_1.Hub)];
            case 1:
                hub = _b.sent();
                t.is(hub.name, 'hub 1');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('should ask for token from provider every request', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var httpClient, tokenCount, client, mock, hub, hub2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                httpClient = new AxiosHttpClient_1.AxiosHttpClient({});
                tokenCount = 0;
                client = new HalClient_1.DefaultHalClient('', httpClient, {
                    getToken: function () {
                        return Promise.resolve({
                            access_token: 'token' + tokenCount++,
                            expires_in: 500,
                            refresh_token: 'refresh'
                        });
                    }
                });
                mock = new MockAdapter(httpClient.client);
                mock
                    .onGet('/hubs/1', undefined, {
                    Accept: 'application/json, text/plain, */*',
                    Authorization: 'bearer token0'
                })
                    .reply(200, {
                    name: 'hub 1'
                });
                mock
                    .onGet('/hubs/1', undefined, {
                    Accept: 'application/json, text/plain, */*',
                    Authorization: 'bearer token1'
                })
                    .reply(200, {
                    name: 'hub 1'
                });
                return [4 /*yield*/, client.fetchResource('/hubs/1', Hub_1.Hub)];
            case 1:
                hub = _a.sent();
                return [4 /*yield*/, client.fetchResource('/hubs/1', Hub_1.Hub)];
            case 2:
                hub2 = _a.sent();
                t.is(hub2.name, 'hub 1');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('parse should instantiate and parse the resource', function (t) {
    var _a = createMockClient(), client = _a[0], mock = _a[1];
    var hub = client.parse({ name: 'hub' }, Hub_1.Hub);
    t.is(hub.name, 'hub');
});
ava_1.default('serialize should make a copy of the object', function (t) {
    var _a = createMockClient(), client = _a[0], mock = _a[1];
    var hub = new Hub_1.Hub();
    hub.name = 'hub';
    var hubJson = client.serialize(hub);
    t.not(hub, hubJson);
    t.is(hubJson.name, 'hub');
});
ava_1.default('api errors should be surfaced in the rejection error', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, error;
    var _this = this;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = createMockClient(), client = _a[0], mock = _a[1];
                mock
                    .onGet('/hubs/1', undefined, {
                    Accept: 'application/json, text/plain, */*',
                    Authorization: 'bearer token'
                })
                    .reply(403, {
                    errors: [{ message: 'Authorization Required' }]
                });
                return [4 /*yield*/, t.throws(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, client.fetchResource('/hubs/1', Hub_1.Hub)];
                    }); }); }, HttpError_1.HttpError)];
            case 1:
                error = _b.sent();
                t.deepEqual(error.request, {
                    data: undefined,
                    headers: {
                        Authorization: 'bearer token'
                    },
                    method: __1.HttpMethod.GET,
                    url: '/hubs/1'
                });
                t.deepEqual(error.response, {
                    data: {
                        errors: [{ message: 'Authorization Required' }]
                    },
                    status: 403
                });
                t.is(error.message, 'Request failed with status code 403: {"errors":[{"message":"Authorization Required"}]}');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('unknown errors should describe the status code', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, client, mock, error;
    var _this = this;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = createMockClient(), client = _a[0], mock = _a[1];
                mock
                    .onGet('/hubs/1', undefined, {
                    Accept: 'application/json, text/plain, */*',
                    Authorization: 'bearer token'
                })
                    .reply(403, {
                    errors: [{ message: 'Authorization Required' }]
                });
                return [4 /*yield*/, t.throws(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, client.fetchResource('/hubs/1', Hub_1.Hub)];
                    }); }); }, HttpError_1.HttpError)];
            case 1:
                error = _b.sent();
                t.deepEqual(error.request, {
                    data: undefined,
                    headers: {
                        Authorization: 'bearer token'
                    },
                    method: __1.HttpMethod.GET,
                    url: '/hubs/1'
                });
                t.deepEqual(error.response, {
                    data: {
                        errors: [{ message: 'Authorization Required' }]
                    },
                    status: 403
                });
                t.is(error.message, 'Request failed with status code 403: {"errors":[{"message":"Authorization Required"}]}');
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFsQ2xpZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2hhbC9zZXJ2aWNlcy9IYWxDbGllbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkF1UUE7O0FBdlFBLDRDQUF1QjtBQUN2Qiw4QkFBc0M7QUFDdEMsOERBQTZEO0FBQzdELGtEQUFpRDtBQUNqRCxtRUFBa0U7QUFDbEUsdUNBQXNDO0FBQ3RDLHlDQUEwRDtBQUUxRCxxR0FBcUc7QUFDckc7O0dBRUc7QUFDSCwyQkFBMkI7QUFDM0IsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFbEQ7O0dBRUc7QUFDSDtJQUNFLElBQU0sVUFBVSxHQUFHLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQyxJQUFNLE1BQU0sR0FBRyxJQUFJLDRCQUFnQixDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDbkUsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhELE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsSUFBTSxhQUFhLEdBQUc7SUFDcEIsUUFBUSxFQUFFO1FBQ1IsT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2QsWUFBWSxFQUFFLE9BQU87WUFDckIsVUFBVSxFQUFFLEdBQUc7WUFDZixhQUFhLEVBQUUsU0FBUztTQUN6QixDQUFDO0lBSkYsQ0FJRTtDQUNMLENBQUM7QUFFRixhQUFJLENBQUMsOENBQThDLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDcEQsS0FBaUIsZ0JBQWdCLEVBQUUsRUFBbEMsTUFBTSxRQUFBLEVBQUUsSUFBSSxRQUFBLENBQXVC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