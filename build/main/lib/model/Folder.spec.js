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
var Folder_1 = require("./Folder");
ava_1.default('list sub-folders', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, contentRepository, folders, subfolders;
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
                return [4 /*yield*/, folders.getItems()[0].related.folders.list()];
            case 3:
                subfolders = _a.sent();
                t.is(subfolders.getItems()[0].name, 'Another Folder');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('create a sub-folder', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var client, folder, newFolder;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.folders.get('5b72ed68d6018001c81ef05b')];
            case 1:
                folder = _a.sent();
                return [4 /*yield*/, folder.related.folders.create(new Folder_1.Folder({
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
    var client, folder;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new DynamicContent_mocks_1.MockDynamicContent();
                return [4 /*yield*/, client.folders.get('5b72ed68d6018001c81ef05b')];
            case 1:
                folder = _a.sent();
                t.deepEqual(folder.toJSON(), {
                    id: '5b72ed68d6018001c81ef05b',
                    name: 'A folder to end all folders'
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0ZvbGRlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQXNDQTs7QUF0Q0EsNENBQXVCO0FBQ3ZCLGdFQUE2RDtBQUM3RCxtQ0FBa0M7QUFFbEMsYUFBSSxDQUFDLGtCQUFrQixFQUFFLFVBQU0sQ0FBQzs7Ozs7Z0JBQ3hCLE1BQU0sR0FBRyxJQUFJLHlDQUFrQixFQUFFLENBQUM7Z0JBQ2QscUJBQU0sTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FDNUQsMEJBQTBCLENBQzNCLEVBQUE7O2dCQUZLLGlCQUFpQixHQUFHLFNBRXpCO2dCQUVlLHFCQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUF4RCxPQUFPLEdBQUcsU0FBOEM7Z0JBQzNDLHFCQUFNLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFBOztnQkFBL0QsVUFBVSxHQUFHLFNBQWtEO2dCQUVyRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7OztLQUN2RCxDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMscUJBQXFCLEVBQUUsVUFBTSxDQUFDOzs7OztnQkFDM0IsTUFBTSxHQUFHLElBQUkseUNBQWtCLEVBQUUsQ0FBQztnQkFDekIscUJBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsRUFBQTs7Z0JBQTdELE1BQU0sR0FBRyxTQUFvRDtnQkFFakQscUJBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNuRCxJQUFJLGVBQU0sQ0FBQzt3QkFDVCxJQUFJLEVBQUUsZ0JBQWdCO3FCQUN2QixDQUFDLENBQ0gsRUFBQTs7Z0JBSkssU0FBUyxHQUFHLFNBSWpCO2dCQUVELENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDOzs7O0tBQ3hDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyx3Q0FBd0MsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUM5QyxNQUFNLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO2dCQUN6QixxQkFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFBOztnQkFBN0QsTUFBTSxHQUFHLFNBQW9EO2dCQUVuRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDM0IsRUFBRSxFQUFFLDBCQUEwQjtvQkFDOUIsSUFBSSxFQUFFLDZCQUE2QjtpQkFDcEMsQ0FBQyxDQUFDOzs7O0tBQ0osQ0FBQyxDQUFDIn0=