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
var JsonTree_1 = require("../../utils/JsonTree");
var ContentLink_1 = require("../models/ContentLink");
/**
 * Utility to assist parsing and generating Content Item graphs.
 */
var ContentGraph = /** @class */ (function () {
    function ContentGraph() {
    }
    /**
     * Extract content-link references from the body of a Content Item
     * @param content
     * @returns {IContentLink[]}
     */
    ContentGraph.extractLinks = function (content) {
        var result = new Array();
        JsonTree_1.JsonTree.visit(content, function (value) {
            if (ContentLink_1.ContentLink.isContentLink(value)) {
                result.push(value);
            }
        });
        return result;
    };
    /**
     * Utility to help deeply copy a content graph. Each content item and its dependencies
     * are visited using the contentItemProvider function to load the source item. The
     * contentItemPicker is invoked for every Content Item giving your application an opportunity
     * to either save the item to a new location (copy) or return the original (reference).
     *
     * The JSON body provided to the contentItemPicker function will have had any Content Links
     * remapped to the newly saved Content Item.
     *
     * ```typescript
     * const targetRepository = await client.contentRepositories.get('5b32377b4cedfd01c4503691');
     * const contentIds = ['a87fd535-fb25-44ee-b687-0db72bbab721'];
     *
     * const idMap = await ContentGraph.deepCopy(
     *  contentIds,
     *  client.contentItems.get,
     *  function(item:ContentItem, body:any) {
     *      return targetRepository.related.contentItems.create(new ContentItem({
     *        label: item.label,
     *        body: body
     *      }));
     *    }
     * );
     * ```
     *
     * @param ids Ids of the root content items to copy
     * @param contentItemProvider Function that loads content items by id
     * @param contentItemPicker Function that creates or returns an existing content item that should be used in place of the original
     * @returns {Promise<any>} Mapping of old content item ids to the newly created ids
     */
    ContentGraph.deepCopy = function (ids, contentItemProvider, contentItemPicker) {
        return __awaiter(this, void 0, void 0, function () {
            var cache, mapping, processItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cache = {};
                        mapping = {};
                        processItem = function (id) {
                            if (cache[id]) {
                                return cache[id];
                            }
                            else {
                                return (cache[id] = contentItemProvider(id)
                                    .then(function (item) {
                                    // visit children
                                    var links = ContentGraph.extractLinks(item.body);
                                    return Promise.all(links.map(function (link) { return processItem(link.id); })).then(function () { return item; });
                                })
                                    .then(function (item) {
                                    // Rewrite the body so that linked items point to the id of the copy
                                    var body = JSON.parse(JSON.stringify(item.body));
                                    var links = ContentGraph.extractLinks(body);
                                    for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
                                        var link = links_1[_i];
                                        link.id = mapping[link.id];
                                    }
                                    // Let the application choose how to copy the item
                                    var newItem = contentItemPicker(item, body);
                                    newItem.then(function (newItemValue) {
                                        mapping[item.id] = newItemValue.id;
                                    });
                                    return newItem;
                                }));
                            }
                        };
                        return [4 /*yield*/, Promise.all(ids.map(function (id) { return processItem(id); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, mapping];
                }
            });
        });
    };
    return ContentGraph;
}());
exports.ContentGraph = ContentGraph;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudEdyYXBoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb250ZW50L3NlcnZpY2VzL0NvbnRlbnRHcmFwaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaURBQWdEO0FBQ2hELHFEQUF5RTtBQUV6RTs7R0FFRztBQUNIO0lBQUE7SUEwRkEsQ0FBQztJQXpGQzs7OztPQUlHO0lBQ1cseUJBQVksR0FBMUIsVUFBMkIsT0FBWTtRQUNyQyxJQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBdUIsQ0FBQztRQUNoRCxtQkFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFVO1lBQ2pDLElBQUkseUJBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBNEIsQ0FBQyxDQUFDO2FBQzNDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BNkJHO0lBQ2lCLHFCQUFRLEdBQTVCLFVBQ0UsR0FBYSxFQUNiLG1CQUF5RCxFQUN6RCxpQkFHeUI7Ozs7Ozt3QkFFbkIsS0FBSyxHQUFRLEVBQUUsQ0FBQzt3QkFDaEIsT0FBTyxHQUFRLEVBQUUsQ0FBQzt3QkFFbEIsV0FBVyxHQUFHLFVBQUMsRUFBVTs0QkFDN0IsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0NBQ2IsT0FBTyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ2xCO2lDQUFNO2dDQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxDQUFDO3FDQUN4QyxJQUFJLENBQUMsVUFBQSxJQUFJO29DQUNSLGlCQUFpQjtvQ0FDakIsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ25ELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUM5RCxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FDWCxDQUFDO2dDQUNKLENBQUMsQ0FBQztxQ0FDRCxJQUFJLENBQUMsVUFBQSxJQUFJO29DQUNSLG9FQUFvRTtvQ0FDcEUsSUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29DQUN4RCxJQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO29DQUM5QyxLQUFtQixVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSyxFQUFFO3dDQUFyQixJQUFNLElBQUksY0FBQTt3Q0FDYixJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7cUNBQzVCO29DQUVELGtEQUFrRDtvQ0FDbEQsSUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29DQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsWUFBWTt3Q0FDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDO29DQUNyQyxDQUFDLENBQUMsQ0FBQztvQ0FDSCxPQUFPLE9BQU8sQ0FBQztnQ0FDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDUDt3QkFDSCxDQUFDLENBQUM7d0JBRUYscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDLEVBQUE7O3dCQUFqRCxTQUFpRCxDQUFDO3dCQUNsRCxzQkFBTyxPQUFPLEVBQUM7Ozs7S0FDaEI7SUFDSCxtQkFBQztBQUFELENBQUMsQUExRkQsSUEwRkM7QUExRlksb0NBQVkifQ==