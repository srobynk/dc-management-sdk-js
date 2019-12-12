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
var HttpError_1 = require("../../http/HttpError");
var HttpRequest_1 = require("../../http/HttpRequest");
var URL_1 = require("../../utils/URL");
var CURIEs_1 = require("./CURIEs");
/**
 * @hidden
 */
var DefaultHalClient = /** @class */ (function () {
    function DefaultHalClient(baseUrl, httpClient, tokenProvider) {
        this.baseUrl = baseUrl;
        this.httpClient = httpClient;
        this.tokenProvider = tokenProvider;
    }
    DefaultHalClient.prototype.fetchLinkedResource = function (link, params, resourceConstructor) {
        return __awaiter(this, void 0, void 0, function () {
            var href;
            return __generator(this, function (_a) {
                href = link.href;
                if (link.templated) {
                    href = CURIEs_1.CURIEs.expand(href, params);
                }
                return [2 /*return*/, this.fetchResource(href, resourceConstructor)];
            });
        });
    };
    DefaultHalClient.prototype.fetchResource = function (path, resourceConstructor) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoke({
                            method: HttpRequest_1.HttpMethod.GET,
                            url: path
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.parse(response.data, resourceConstructor)];
                }
            });
        });
    };
    DefaultHalClient.prototype.createLinkedResource = function (link, params, resource, resourceConstructor) {
        return __awaiter(this, void 0, void 0, function () {
            var href;
            return __generator(this, function (_a) {
                href = link.href;
                if (link.templated) {
                    href = CURIEs_1.CURIEs.expand(href, params);
                }
                return [2 /*return*/, this.createResource(href, resource, resourceConstructor)];
            });
        });
    };
    DefaultHalClient.prototype.createResource = function (path, resource, resourceConstructor) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoke({
                            data: this.serialize(resource),
                            method: HttpRequest_1.HttpMethod.POST,
                            url: path
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.parse(response.data, resourceConstructor)];
                }
            });
        });
    };
    DefaultHalClient.prototype.updateResource = function (path, resource, resourceConstructor) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoke({
                            data: this.serialize(resource),
                            method: HttpRequest_1.HttpMethod.PATCH,
                            url: path
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.parse(response.data, resourceConstructor)];
                }
            });
        });
    };
    DefaultHalClient.prototype.updateLinkedResource = function (link, params, resource, resourceConstructor) {
        return __awaiter(this, void 0, void 0, function () {
            var href;
            return __generator(this, function (_a) {
                href = link.href;
                if (link.templated) {
                    href = CURIEs_1.CURIEs.expand(href, params);
                }
                return [2 /*return*/, this.updateResource(href, resource, resourceConstructor)];
            });
        });
    };
    DefaultHalClient.prototype.deleteLinkedResource = function (link, params) {
        return __awaiter(this, void 0, void 0, function () {
            var href;
            return __generator(this, function (_a) {
                href = link.href;
                if (link.templated) {
                    href = CURIEs_1.CURIEs.expand(href, params);
                }
                return [2 /*return*/, this.deleteResource(href)];
            });
        });
    };
    DefaultHalClient.prototype.deleteResource = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoke({
                            method: HttpRequest_1.HttpMethod.DELETE,
                            url: path
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    DefaultHalClient.prototype.performActionThatReturnsResource = function (link, params, data, resourceConstructor) {
        return __awaiter(this, void 0, void 0, function () {
            var href, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        href = link.href;
                        if (link.templated) {
                            href = CURIEs_1.CURIEs.expand(href, params);
                        }
                        return [4 /*yield*/, this.invoke({
                                data: this.serialize(data),
                                method: HttpRequest_1.HttpMethod.POST,
                                url: href
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.parse(response.data, resourceConstructor)];
                }
            });
        });
    };
    DefaultHalClient.prototype.parse = function (data, resourceConstructor) {
        var instance = new resourceConstructor(data);
        instance.setClient(this);
        return instance;
    };
    DefaultHalClient.prototype.serialize = function (data) {
        return JSON.parse(JSON.stringify(data));
    };
    DefaultHalClient.prototype.invoke = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var token, fullRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tokenProvider.getToken()];
                    case 1:
                        token = _a.sent();
                        fullRequest = {
                            data: request.data,
                            headers: {
                                Authorization: 'bearer ' + token.access_token
                            },
                            method: request.method,
                            url: URL_1.combineURLs(this.baseUrl, request.url)
                        };
                        return [2 /*return*/, this.httpClient.request(fullRequest).then(function (response) {
                                if (response.status >= 200 && response.status < 300) {
                                    if (typeof response.data === 'string') {
                                        response.data = JSON.parse(response.data);
                                    }
                                    return response;
                                }
                                else {
                                    throw new HttpError_1.HttpError("Request failed with status code " + response.status + ": " + JSON.stringify(response.data), fullRequest, response);
                                }
                            })];
                }
            });
        });
    };
    return DefaultHalClient;
}());
exports.DefaultHalClient = DefaultHalClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFsQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9oYWwvc2VydmljZXMvSGFsQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBaUQ7QUFDakQsc0RBQWlFO0FBR2pFLHVDQUE4QztBQUc5QyxtQ0FBa0M7QUE4RGxDOztHQUVHO0FBQ0g7SUFDRSwwQkFDVSxPQUFlLEVBQ2YsVUFBc0IsRUFDdEIsYUFBa0M7UUFGbEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsa0JBQWEsR0FBYixhQUFhLENBQXFCO0lBQ3pDLENBQUM7SUFFUyw4Q0FBbUIsR0FBaEMsVUFDRSxJQUFhLEVBQ2IsTUFBVyxFQUNYLG1CQUE4Qzs7OztnQkFFMUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsSUFBSSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNwQztnQkFDRCxzQkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxFQUFDOzs7S0FDdEQ7SUFFWSx3Q0FBYSxHQUExQixVQUNFLElBQVksRUFDWixtQkFBOEM7Ozs7OzRCQUU3QixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDOzRCQUNqQyxNQUFNLEVBQUUsd0JBQVUsQ0FBQyxHQUFHOzRCQUN0QixHQUFHLEVBQUUsSUFBSTt5QkFDVixDQUFDLEVBQUE7O3dCQUhJLFFBQVEsR0FBRyxTQUdmO3dCQUNGLHNCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxFQUFDOzs7O0tBQ3ZEO0lBRVksK0NBQW9CLEdBQWpDLFVBQ0Us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