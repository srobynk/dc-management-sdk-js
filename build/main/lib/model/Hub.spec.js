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
var Event_1 = require("./Event");
ava_1.default('list hubs', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.list()];
            case 1:
                result = _a.sent();
                t.is(result.getItems()[0].name, 'anya-finn');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('get hub by id', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                t.is(hub.name, 'anya-finn');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('list content repositories', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                return [4 /*yield*/, hub.related.contentRepositories.list()];
            case 2:
                result = _a.sent();
                t.is(result.getItems()[0].name, 'inspiration');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('list events', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                return [4 /*yield*/, hub.related.events.list()];
            case 2:
                result = _a.sent();
                t.is(result.getItems()[0].name, 'January Sale');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('create event', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                return [4 /*yield*/, hub.related.events.create(new Event_1.Event())];
            case 2:
                result = _a.sent();
                t.is(result.name, 'January Sale');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('list content types', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                return [4 /*yield*/, hub.related.contentTypes.list()];
            case 2:
                result = _a.sent();
                t.is(result.getItems()[0].settings.label, 'Carousel');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('register content type', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                return [4 /*yield*/, hub.related.contentTypes.register(new ContentType_1.ContentType())];
            case 2:
                result = _a.sent();
                t.is(result.id, '5be1d5134cedfd01c030c460');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('toJSON should copy resource attributes', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hub;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.get('5b32377e4cedfd01c45036d8')];
            case 1:
                hub = _a.sent();
                t.deepEqual(hub.toJSON(), {
                    createdBy: 'user',
                    createdDate: '2018-06-26T12:54:22.142Z',
                    description: 'Content for anyafinn.com',
                    id: '5b32377e4cedfd01c45036d8',
                    label: 'Anya Finn',
                    lastModifiedBy: 'user',
                    lastModifiedDate: '2018-06-26T12:54:22.142Z',
                    name: 'anya-finn',
                    settings: {
                        applications: [],
                        devices: [
                            {
                                height: 768,
                                name: 'Desktop',
                                orientate: false,
                                width: 1024
                            },
                            {
                                height: 768,
                                name: 'Tablet',
                                orientate: false,
                                width: 640
                            },
                            {
                                height: 512,
                                name: 'Mobile',
                                orientate: false,
                                width: 320
                            }
                        ],
                        previewVirtualStagingEnvironment: {
                            hostname: ''
                        },
                        publishing: {
                            platforms: {
                                amplience_dam: {
                                    API_KEY: 'KEY',
                                    endpoint: 'Endpoint'
                                }
                            }
                        },
                        virtualStagingEnvironment: {
                            hostname: ''
                        }
                    },
                    status: 'ACTIVE'
                });
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('toJSON on a page of resources should copy resource attributes', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, hubs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.hubs.list()];
            case 1:
                hubs = _a.sent();
                t.log(hubs.toJSON());
                t.deepEqual(hubs.toJSON(), {
                    _embedded: {
                        hubs: [
                            {
                                createdBy: 'user',
                                createdDate: '2018-06-26T12:54:22.142Z',
                                description: 'Content for anyafinn.com',
                                id: '5b32377e4cedfd01c45036d8',
                                label: 'Anya Finn',
                                lastModifiedBy: 'user',
                                lastModifiedDate: '2018-06-26T12:54:22.142Z',
                                name: 'anya-finn',
                                settings: {
                                    applications: [],
                                    devices: [
                                        {
                                            height: 768,
                                            name: 'Desktop',
                                            orientate: false,
                                            width: 1024
                                        },
                                        {
                                            height: 768,
                                            name: 'Tablet',
                                            orientate: false,
                                            width: 640
                                        },
                                        {
                                            height: 512,
                                            name: 'Mobile',
                                            orientate: false,
                                            width: 320
                                        }
                                    ],
                                    previewVirtualStagingEnvironment: {
                                        hostname: ''
                                    },
                                    publishing: {
                                        platforms: {
                                            amplience_dam: {
                                                API_KEY: 'KEY',
                                                endpoint: 'Endpoint'
                                            }
                                        }
                                    },
                                    virtualStagingEnvironment: {
                                        hostname: ''
                                    }
                                },
                                status: 'ACTIVE'
                            }
                        ]
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHViLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0h1Yi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQXVLQTs7QUF2S0EsNENBQXVCO0FBQ3ZCLGdFQUE2RDtBQUM3RCw2Q0FBNEM7QUFDNUMsaUNBQWdDO0FBRWhDLGFBQUksQ0FBQyxXQUFXLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDakIsTUFBTSxHQUFHLElBQUkseUNBQWtCLEVBQUUsQ0FBQztnQkFDekIscUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0JBQWpDLE1BQU0sR0FBRyxTQUF3QjtnQkFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDOzs7O0tBQzlDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxlQUFlLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDckIsTUFBTSxHQUFHLElBQUkseUNBQWtCLEVBQUUsQ0FBQztnQkFDNUIscUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsRUFBQTs7Z0JBQXZELEdBQUcsR0FBRyxTQUFpRDtnQkFDN0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDOzs7O0tBQzdCLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQywyQkFBMkIsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUNqQyxNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUM1QixxQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBdkQsR0FBRyxHQUFHLFNBQWlEO2dC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