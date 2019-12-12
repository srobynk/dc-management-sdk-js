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
var AxiosHttpClient_1 = require("./AxiosHttpClient");
var HttpRequest_1 = require("./HttpRequest");
// axios-mock-adaptor's typedefs are wrong preventing calling onGet with 3 args, this is a workaround
/**
 * @hidden
 */
// tslint:disable-next-line
var MockAdapter = require('axios-mock-adapter');
ava_1.default('client should use provided base url', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, mock, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new AxiosHttpClient_1.AxiosHttpClient({
                    baseURL: 'http://mywebsite.com'
                });
                mock = new MockAdapter(client.client);
                mock.onGet('http://mywebsite.com/ping').reply(200, 'pong');
                return [4 /*yield*/, client.request({
                        method: HttpRequest_1.HttpMethod.GET,
                        url: 'http://mywebsite.com/ping'
                    })];
            case 1:
                response = _a.sent();
                t.is(response.data, 'pong');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('client should return status code', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, mock, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new AxiosHttpClient_1.AxiosHttpClient({});
                mock = new MockAdapter(client.client);
                mock.onGet('/ping').reply(404);
                return [4 /*yield*/, client.request({
                        method: HttpRequest_1.HttpMethod.GET,
                        url: '/ping'
                    })];
            case 1:
                response = _a.sent();
                t.is(response.status, 404);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('client should use provided method', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, mock, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new AxiosHttpClient_1.AxiosHttpClient({});
                mock = new MockAdapter(client.client);
                mock.onDelete('/resource').reply(200);
                return [4 /*yield*/, client.request({
                        method: HttpRequest_1.HttpMethod.DELETE,
                        url: '/resource'
                    })];
            case 1:
                response = _a.sent();
                t.is(response.status, 200);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('client should send form data', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, mock, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new AxiosHttpClient_1.AxiosHttpClient({});
                mock = new MockAdapter(client.client);
                mock
                    .onPost('/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
                    .reply(200, {
                    access_token: 'token',
                    expires_in: 0,
                    refresh_token: 'refresh'
                });
                return [4 /*yield*/, client.request({
                        data: 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        method: HttpRequest_1.HttpMethod.POST,
                        url: '/oauth/token'
                    })];
            case 1:
                response = _a.sent();
                t.is(response.status, 200);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('client should send JSON data', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, mock, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new AxiosHttpClient_1.AxiosHttpClient({});
                mock = new MockAdapter(client.client);
                mock
                    .onPost('/resource/create', {
                    key: 'value'
                })
                    .reply(200, {
                    access_token: 'token',
                    expires_in: 0,
                    refresh_token: 'refresh'
                });
                return [4 /*yield*/, client.request({
                        data: {
                            key: 'value'
                        },
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: HttpRequest_1.HttpMethod.POST,
                        url: '/resource/create'
                    })];
            case 1:
                response = _a.sent();
                t.is(response.status, 200);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXhpb3NIdHRwQ2xpZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2h0dHAvQXhpb3NIdHRwQ2xpZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBOEdBOztBQTlHQSw0Q0FBdUI7QUFDdkIscURBQW9EO0FBQ3BELDZDQUEyQztBQUUzQyxxR0FBcUc7QUFDckc7O0dBRUc7QUFDSCwyQkFBMkI7QUFDM0IsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFbEQsYUFBSSxDQUFDLHFDQUFxQyxFQUFFLFVBQU0sQ0FBQzs7Ozs7Z0JBQzNDLE1BQU0sR0FBRyxJQUFJLGlDQUFlLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxzQkFBc0I7aUJBQ2hDLENBQUMsQ0FBQztnQkFFRyxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFMUMscUJBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQzt3QkFDcEMsTUFBTSxFQUFFLHdCQUFVLENBQUMsR0FBRzt3QkFDdEIsR0FBRyxFQUFFLDJCQUEyQjtxQkFDakMsQ0FBQyxFQUFBOztnQkFISSxRQUFRLEdBQUcsU0FHZjtnQkFFRixDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7S0FDN0IsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLGtDQUFrQyxFQUFFLFVBQU0sQ0FBQzs7Ozs7Z0JBQ3hDLE1BQU0sR0FBRyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRWpDLElBQUksR0FBRyxJQUFJLFdBQVcs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