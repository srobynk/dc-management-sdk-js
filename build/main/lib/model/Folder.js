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
Object.defineProperty(exports, "__esModule", { value: true });
var HalResource_1 = require("../hal/models/HalResource");
var ContentItem_1 = require("./ContentItem");
var ContentRepository_1 = require("./ContentRepository");
var Page_1 = require("./Page");
var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Resources and actions related to a Folder
         */
        _this.related = {
            /**
             * Retrieves the ContentRepository this folder is stored in
             */
            contentRepository: function () {
                return _this.fetchLinkedResource('content-repository', {}, ContentRepository_1.ContentRepository);
            },
            folders: {
                /**
                 * Retrieves the parent folder of this Folder
                 */
                parent: function () {
                    return _this.fetchLinkedResource('parent-folder', {}, Folder);
                },
                /**
                 * Retrieves the list of sub-folders contained within this Folder
                 */
                list: function () {
                    return _this.client.fetchResource("folders/" + _this.id + "/folders", FoldersPage);
                },
                /**
                 * Creates a folder beneath the folder
                 * @param resource The new Folder to create
                 */
                create: function (resource) {
                    return _this.createLinkedResource('create-folder', {}, resource, Folder);
                }
            },
            contentItems: {
                /**
                 * Retrieves a list of Content Items stored within this Folder
                 */
                list: function () {
                    return _this.fetchLinkedResource('content-items', {}, ContentItem_1.ContentItemsPage);
                }
            }
        };
        return _this;
    }
    return Folder;
}(HalResource_1.HalResource));
exports.Folder = Folder;
/**
 * @hidden
 */
var FoldersPage = /** @class */ (function (_super) {
    __extends(FoldersPage, _super);
    function FoldersPage(data) {
        return _super.call(this, 'folders', Folder, data) || this;
    }
    return FoldersPage;
}(Page_1.Page));
exports.FoldersPage = FoldersPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2RlbC9Gb2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBQ3hELDZDQUE4RDtBQUM5RCx5REFBd0Q7QUFDeEQsK0JBQThCO0FBRTlCO0lBQTRCLDBCQUFXO0lBQXZDO1FBQUEscUVBNENDO1FBdkNDOztXQUVHO1FBQ2EsYUFBTyxHQUFHO1lBQ3hCOztlQUVHO1lBQ0gsaUJBQWlCLEVBQUU7Z0JBQ2pCLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxxQ0FBaUIsQ0FBQztZQUFyRSxDQUFxRTtZQUV2RSxPQUFPLEVBQUU7Z0JBQ1A7O21CQUVHO2dCQUNILE1BQU0sRUFBRTtvQkFDTixPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQztnQkFBckQsQ0FBcUQ7Z0JBRXZEOzttQkFFRztnQkFDSCxJQUFJLEVBQUU7b0JBQ0osT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFXLEtBQUksQ0FBQyxFQUFFLGFBQVUsRUFBRSxXQUFXLENBQUM7Z0JBQXBFLENBQW9FO2dCQUV0RTs7O21CQUdHO2dCQUNILE1BQU0sRUFBRSxVQUFDLFFBQWdCO29CQUN2QixPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7Z0JBQWhFLENBQWdFO2FBQ25FO1lBRUQsWUFBWSxFQUFFO2dCQUNaOzttQkFFRztnQkFDSCxJQUFJLEVBQUU7b0JBQ0osT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSw4QkFBZ0IsQ0FBQztnQkFBL0QsQ0FBK0Q7YUFDbEU7U0FDRixDQUFDOztJQUNKLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQyxBQTVDRCxDQUE0Qix5QkFBVyxHQTRDdEM7QUE1Q1ksd0JBQU07QUE4Q25COztHQUVHO0FBQ0g7SUFBaUMsK0JBQVk7SUFDM0MscUJBQVksSUFBVTtlQUNwQixrQkFBTSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBaUMsV0FBSSxHQUlwQztBQUpZLGtDQUFXIn0=