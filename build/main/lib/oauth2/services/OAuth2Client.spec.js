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
var AxiosHttpClient_1 = require("../../http/AxiosHttpClient");
var OAuth2Client_1 = require("./OAuth2Client");
// axios-mock-adaptor's typedefs are wrong preventing calling onGet with 3 args, this is a workaround
/**
 * @hidden
 */
// tslint:disable-next-line
var MockAdapter = require('axios-mock-adapter');
ava_1.default('get token should request a token on the first invocation', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var httpClient, client, mock, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                httpClient = new AxiosHttpClient_1.AxiosHttpClient({});
                client = new OAuth2Client_1.OAuth2Client({
                    client_id: 'client_id',
                    client_secret: 'client_secret'
                }, {}, httpClient);
                mock = new MockAdapter(httpClient.client);
                mock
                    .onPost('https://auth.adis.ws/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
                    .reply(200, {
                    access_token: 'token',
                    expires_in: 0,
                    refresh_token: 'refresh'
                });
                _b = (_a = t).is;
                return [4 /*yield*/, client.getToken()];
            case 1:
                _b.apply(_a, [(_c.sent()).access_token, 'token']);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('get token should cache tokens', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var httpClient, client, mock, token1, token2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                httpClient = new AxiosHttpClient_1.AxiosHttpClient({});
                client = new OAuth2Client_1.OAuth2Client({
                    client_id: 'client_id',
                    client_secret: 'client_secret'
                }, {}, httpClient);
                mock = new MockAdapter(httpClient.client);
                mock
                    .onPost('https://auth.adis.ws/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
                    .reply(200, {
                    access_token: 'token',
                    expires_in: 60,
                    refresh_token: 'refresh'
                });
                return [4 /*yield*/, client.getToken()];
            case 1:
                token1 = _a.sent();
                mock
                    .onPost('https://auth.adis.ws/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
                    .reply(200, {
                    access_token: 'token2',
                    expires_in: 60,
                    refresh_token: 'refresh'
                });
                return [4 /*yield*/, client.getToken()];
            case 2:
                token2 = _a.sent();
                t.is(token1.access_token, 'token');
                t.is(token2.access_token, 'token');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('cached tokens should expire', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var httpClient, client, mock, token1, token2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                httpClient = new AxiosHttpClient_1.AxiosHttpClient({});
                client = new OAuth2Client_1.OAuth2Client({
                    client_id: 'client_id',
                    client_secret: 'client_secret'
                }, {}, httpClient);
                mock = new MockAdapter(httpClient.client);
                mock
                    .onPost('https://auth.adis.ws/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
                    .reply(200, {
                    access_token: 'token',
                    expires_in: -60,
                    refresh_token: 'refresh'
                });
                return [4 /*yield*/, client.getToken()];
            case 1:
                token1 = _a.sent();
                mock
                    .onPost('https://auth.adis.ws/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
                    .reply(200, {
                    access_token: 'token2',
                    expires_in: 0,
                    refresh_token: 'refresh'
                });
                return [4 /*yield*/, client.getToken()];
            case 2:
                token2 = _a.sent();
                t.is(token1.access_token, 'token');
                t.is(token2.access_token, 'token2');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('only one token refresh should be in flight at once', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var httpClient, client, mock, token1, token2, _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                httpClient = new AxiosHttpClient_1.AxiosHttpClient({});
                client = new OAuth2Client_1.OAuth2Client({
                    client_id: 'client_id',
                    client_secret: 'client_secret'
                }, {}, httpClient);
                mock = new MockAdapter(httpClient.client, { delayResponse: 2000 });
                mock
                    .onPost('https://auth.adis.ws/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
                    .replyOnce(200, {
                    access_token: 'token',
                    expires_in: 0,
                    refresh_token: 'refresh'
                });
                token1 = client.getToken();
                token2 = client.getToken();
                _b = (_a = t).is;
                return [4 /*yield*/, token1];
            case 1:
                _b.apply(_a, [(_e.sent()).access_token, 'token']);
                _d = (_c = t).is;
                return [4 /*yield*/, token2];
            case 2:
                _d.apply(_c, [(_e.sent()).access_token, 'token']);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0F1dGgyQ2xpZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL29hdXRoMi9zZXJ2aWNlcy9PQXV0aDJDbGllbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkF1SkE7O0FBdkpBLDRDQUF1QjtBQUN2Qiw4REFBNkQ7QUFDN0QsK0NBQThDO0FBRTlDLHFHQUFxRztBQUNyRzs7R0FFRztBQUNILDJCQUEyQjtBQUMzQixJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUVsRCxhQUFJLENBQUMsMERBQTBELEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDaEUsVUFBVSxHQUFHLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDckMsTUFBTSxHQUFHLElBQUksMkJBQVksQ0FDN0I7b0JBQ0UsU0FBUyxFQUFFLFdBQVc7b0JBQ3RCLGFBQWEsRUFBRSxlQUFlO2lCQUMvQixFQUNELEVBQUUsRUFDRixVQUFVLENBQ1gsQ0FBQztnQkFFSSxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxJQUFJO3FCQUNELE1BQU0sQ0FDTCxrQ0FBa0MsRUFDbEMsK0VBQStFLENBQ2hGO3FCQUNBLEtBQUssQ0FBQyxHQUFHLEVBQUU7b0JBQ1YsWUFBWSxFQUFFLE9BQU87b0JBQ3JCLFVBQVUsRUFBRSxDQUFDO29CQUNiLGFBQWEsRUFBRSxTQUFTO2lCQUN6QixDQUFDLENBQUM7Z0JBRUwsS0FBQSxDQUFBLEtBQUEsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUFBO2dCQUFFLHFCQUFNLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBQTs7Z0JBQTdCLGNBQUssQ0FBQyxTQUF1QixDQUFDLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBQyxDQUFDOzs7O0tB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