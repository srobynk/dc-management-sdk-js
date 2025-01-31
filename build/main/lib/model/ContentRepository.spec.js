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
var ContentItem_1 = require("./ContentItem");
var Folder_1 = require("./Folder");
ava_1.default('get content repository by id', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentRepositories.get('5b32377b4cedfd01c4503691')];
            case 1:
                result = _a.sent();
                t.is(result.name, 'inspiration');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('create content item', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentRepository, newContentItem, createdContentItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentRepositories.get('5b32377b4cedfd01c4503691')];
            case 1:
                contentRepository = _a.sent();
                newContentItem = new ContentItem_1.ContentItem();
                newContentItem.label = 'Banner Ad Homepage';
                return [4 /*yield*/, contentRepository.related.contentItems.create(newContentItem)];
            case 2:
                createdContentItem = _a.sent();
                t.is(createdContentItem.label, 'Banner Ad Homepage');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('list content items', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentRepository, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentRepositories.get('5b32377b4cedfd01c4503691')];
            case 1:
                contentRepository = _a.sent();
                return [4 /*yield*/, contentRepository.related.contentItems.list()];
            case 2:
                result = _a.sent();
                t.is(result.getItems()[0].label, 'Banner Ad Homepage');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('list repository top-level folders', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentRepository, folders;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentRepositories.get('5b32377b4cedfd01c4503691')];
            case 1:
                contentRepository = _a.sent();
                return [4 /*yield*/, contentRepository.related.folders.list()];
            case 2:
                folders = _a.sent();
                t.is(folders.getItems()[0].name, 'A folder to end all folders');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('create top-level folder in content repository', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentRepository, newFolder;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentRepositories.get('5b32377b4cedfd01c4503691')];
            case 1:
                contentRepository = _a.sent();
                return [4 /*yield*/, contentRepository.related.folders.create(new Folder_1.Folder({
                        name: 'Another Folder'
                    }))];
            case 2:
                newFolder = _a.sent();
                t.is(newFolder.name, 'Another Folder');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('toJSON should copy resource attributes', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentRepository;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentRepositories.get('5b32377b4cedfd01c4503691')];
            case 1:
                contentRepository = _a.sent();
                t.deepEqual(contentRepository.toJSON(), {
                    contentTypes: [],
                    features: [],
                    id: '5b32377b4cedfd01c4503691',
                    itemLocales: ['en', 'fr'],
                    label: 'Inspiration',
                    name: 'inspiration',
                    status: 'ACTIVE',
                    type: 'CONTENT'
                });
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('assign content type', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentRepository, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentRepositories.get('5b32377b4cedfd01c4503691')];
            case 1:
                contentRepository = _a.sent();
                return [4 /*yield*/, contentRepository.related.contentTypes.assign('5be1d5134cedfd01c030c460')];
            case 2:
                result = _a.sent();
                t.is(result.id, '5b32377b4cedfd01c4503691');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('unassign content type', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentRepository, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.contentRepositories.get('5b32377b4cedfd01c4503691')];
            case 1:
                contentRepository = _a.sent();
                return [4 /*yield*/, contentRepository.related.contentTypes.unassign('5be1d5134cedfd01c030c460')];
            case 2:
                result = _a.sent();
                t.pass();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFJlcG9zaXRvcnkuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvQ29udGVudFJlcG9zaXRvcnkuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkEwR0E7O0FBMUdBLDRDQUF1QjtBQUN2QixnRUFBNkQ7QUFDN0QsNkNBQTRDO0FBQzVDLG1DQUFrQztBQUVsQyxhQUFJLENBQUMsOEJBQThCLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDcEMsTUFBTSxHQUFHLElBQUkseUNBQWtCLEVBQUUsQ0FBQztnQkFFekIscUJBQU0sTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FDakQsMEJBQTBCLENBQzNCLEVBQUE7O2dCQUZLLE1BQU0sR0FBRyxTQUVkO2dCQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzs7OztLQUNsQyxDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMscUJBQXFCLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDM0IsTUFBTSxHQUFHLElBQUkseUNBQWtCLEVBQUUsQ0FBQztnQkFFZCxxQkFBTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUM1RCwwQkFBMEIsQ0FDM0IsRUFBQTs7Z0JBRkssaUJBQWlCLEdBQUcsU0FFekI7Z0JBQ0ssY0FBYyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO2dCQUN6QyxjQUFjLENBQUMsS0FBSyxHQUFHLG9CQUFvQixDQUFDO2dCQUNqQixxQkFBTSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FDNUUsY0FBYyxDQUNmLEVBQUE7O2dCQUZLLGtCQUFrQixHQUFHLFNBRTFCO2dCQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLG9CQUFvQixD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