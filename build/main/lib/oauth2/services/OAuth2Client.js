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
Object.defineProperty(exports, "__esModule", { value: true });
var HttpRequest_1 = require("../../http/HttpRequest");
var URL_1 = require("../../utils/URL");
/**
 * @hidden
 */
var OAuth2Client = /** @class */ (function () {
    function OAuth2Client(clientCredentials, _a, httpClient) {
        var _b = _a.authUrl, authUrl = _b === void 0 ? 'https://auth.adis.ws' : _b;
        this.authUrl = authUrl;
        this.clientCredentials = clientCredentials;
        this.httpClient = httpClient;
    }
    /**
     * Requests an authentication token that can be used
     * to make requests to the Dynamic Content api.
     * Tokens are reused until they expire.
     *
     * @returns {Promise<AccessToken>}
     */
    OAuth2Client.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var payload, request;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.inFlight != null) {
                    return [2 /*return*/, this.inFlight];
                }
                if (this.token != null && this.tokenExpires > Date.now()) {
                    return [2 /*return*/, this.token];
                }
                payload = 'grant_type=client_credentials' +
                    '&client_id=' +
                    encodeURIComponent(this.clientCredentials.client_id) +
                    '&client_secret=' +
                    encodeURIComponent(this.clientCredentials.client_secret);
                request = this.httpClient.request({
                    data: payload,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: HttpRequest_1.HttpMethod.POST,
                    url: URL_1.combineURLs(this.authUrl, '/oauth/token')
                });
                this.inFlight = request.then(function (response) {
                    if (typeof response.data !== 'object') {
                        throw new Error('Unexpected response format from /oauth/token endpoint');
                    }
                    _this.token = response.data;
                    _this.tokenExpires = Date.now() + _this.token.expires_in * 1000;
                    _this.inFlight = null;
                    return _this.token;
                });
                return [2 /*return*/, this.inFlight];
            });
        });
    };
    return OAuth2Client;
}());
exports.OAuth2Client = OAuth2Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0F1dGgyQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9vYXV0aDIvc2VydmljZXMvT0F1dGgyQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxzREFBb0Q7QUFDcEQsdUNBQThDO0FBSzlDOztHQUVHO0FBQ0g7SUFTRSxzQkFDRSxpQkFBMEMsRUFDMUMsRUFBb0MsRUFDcEMsVUFBc0I7WUFEcEIsZUFBZ0MsRUFBaEMscURBQWdDO1FBR2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ1UsK0JBQVEsR0FBckI7Ozs7O2dCQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7b0JBQ3pCLHNCQUFPLElBQUksQ0FBQyxRQUFRLEVBQUM7aUJBQ3RCO2dCQUVELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ3hELHNCQUFPLElBQUksQ0FBQyxLQUFLLEVBQUM7aUJBQ25CO2dCQUVLLE9BQU8sR0FDWCwrQkFBK0I7b0JBQy9CLGFBQWE7b0JBQ2Isa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztvQkFDcEQsaUJBQWlCO29CQUNqQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRXJELE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDdEMsSUFBSSxFQUFFLE9BQU87b0JBQ2IsT0FBTyxFQUFFO3dCQUNQLGNBQWMsRUFBRSxtQ0FBbUM7cUJBQ3BEO29CQUNELE1BQU0sRUFBRSx3QkFBVSxDQUFDLElBQUk7b0JBQ3ZCLEdBQUcsRUFBRSxpQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO2lCQUMvQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUMxQixVQUFDLFFBQVE7b0JBQ1AsSUFBSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO3dCQUNyQyxNQUFNLElBQUksS0FBSyxDQUNiLHVEQUF1RCxDQUN4RCxDQUFDO3FCQUNIO29CQUVELEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQVcsQ0FBQztvQkFDbEMsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUM5RCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDckIsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNwQixDQUFDLENBQ3NCLENBQUM7Z0JBRTFCLHNCQUFPLElBQUksQ0FBQyxRQUFRLEVBQUM7OztLQUN0QjtJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXBFRCxJQW9FQztBQXBFWSxvQ0FBWSJ9