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
var Folder_1 = require("./Folder");
var Page_1 = require("./Page");
/**
 * Class representing the [Content Repository](https://api.amplience.net/v2/content/docs/api/index.html#resources-content-repositories) resource.
 * Content repositories are containers where content can be stored.
 */
var ContentRepository = /** @class */ (function (_super) {
    __extends(ContentRepository, _super);
    function ContentRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Resources and actions related to a Content Repository
         */
        _this.related = {
            folders: {
                /**
                 * Retrieves the list of top-level folders within this Content Repository
                 */
                list: function (options) {
                    return _this.fetchLinkedResource('folders', options, Folder_1.FoldersPage);
                },
                /**
                 * Creates a folder in the Content Repository
                 * @param resource The new Folder to create
                 */
                create: function (resource) {
                    return _this.createLinkedResource('create-folder', {}, resource, Folder_1.Folder);
                }
            },
            contentItems: {
                /**
                 * Creates a content item inside the repository
                 * @param resource The new content item to create
                 */
                create: function (resource) {
                    return _this.createLinkedResource('create-content-item', {}, resource, ContentItem_1.ContentItem);
                },
                /**
                 * Retrieves a list of Content Items stored within this Content Repository
                 */
                list: function (options) {
                    return _this.fetchLinkedResource('content-items', options, ContentItem_1.ContentItemsPage);
                }
            },
            contentTypes: {
                /**
                 * Assigns a content type to the repository
                 */
                assign: function (contentTypeId) {
                    return _this.performActionThatReturnsResource('assign-content-type', {}, { contentTypeId: contentTypeId }, ContentRepository);
                },
                /**
                 * Unassign a content type from this repository
                 */
                unassign: function (contentTypeId) {
                    return _this.deleteLinkedResource('unassign-content-type', {
                        id: contentTypeId
                    });
                }
            }
        };
        return _this;
    }
    return ContentRepository;
}(HalResource_1.HalResource));
exports.ContentRepository = ContentRepository;
/**
 * @hidden
 */
var ContentRepositoriesPage = /** @class */ (function (_super) {
    __extends(ContentRepositoriesPage, _super);
    function ContentRepositoriesPage(data) {
        return _super.call(this, 'content-repositories', ContentRepository, data) || this;
    }
    return ContentRepositoriesPage;
}(Page_1.Page));
exports.ContentRepositoriesPage = ContentRepositoriesPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0NvbnRlbnRSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUN4RCw2Q0FBOEQ7QUFDOUQsbUNBQStDO0FBQy9DLCtCQUE4QjtBQW9COUI7OztHQUdHO0FBQ0g7SUFBdUMscUNBQVc7SUFBbEQ7UUFBQSxxRUFpR0M7UUE1REM7O1dBRUc7UUFDYSxhQUFPLEdBQUc7WUFDeEIsT0FBTyxFQUFFO2dCQUNQOzttQkFFRztnQkFDSCxJQUFJLEVBQUUsVUFBQyxPQUFrQjtvQkFDdkIsT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxvQkFBVyxDQUFDO2dCQUF6RCxDQUF5RDtnQkFFM0Q7OzttQkFHRztnQkFDSCxNQUFNLEVBQUUsVUFBQyxRQUFnQjtvQkFDdkIsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsZUFBTSxDQUFDO2dCQUFoRSxDQUFnRTthQUNuRTtZQUVELFlBQVksRUFBRTtnQkFDWjs7O21CQUdHO2dCQUNILE1BQU0sRUFBRSxVQUFDLFFBQXFCO29CQUM1QixPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FDdkIscUJBQXFCLEVBQ3JCLEVBQUUsRUFDRixRQUFRLEVBQ1IseUJBQVcsQ0FDWjtnQkFMRCxDQUtDO2dCQUVIOzttQkFFRztnQkFDSCxJQUFJLEVBQUUsVUFBQyxPQUE2QjtvQkFDbEMsT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLE9BQU8sRUFBRSw4QkFBZ0IsQ0FBQztnQkFBcEUsQ0FBb0U7YUFDdkU7WUFFRCxZQUFZLEVBQUU7Z0JBQ1o7O21CQUVHO2dCQUNILE1BQU0sRUFBRSxVQUFDLGFBQXFCO29CQUM1QixPQUFBLEtBQUksQ0FBQyxnQ0FBZ0MsQ0FDbkMscUJBQXFCLEVBQ3JCLEVBQUUsRUFDRixFQUFFLGFBQWEsZUFBQSxFQUFFLEVBQ2pCLGlCQUFpQixDQUNsQjtnQkFMRCxDQUtDO2dCQUVIOzttQkFFRztnQkFDSCxRQUFRLEVBQUUsVUFBQyxhQUFxQjtvQkFDOUIsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLEVBQUU7d0JBQ2pELEVBQUUsRUFBRSxhQUFhO3FCQUNsQixDQUFDO2dCQUZGLENBRUU7YUFDTDtTQUNGLENBQUM7O0lBQ0osQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQWpHRCxDQUF1Qyx5QkFBVyxHQWlHakQ7QUFqR1ksOENBQWlCO0FBbUc5Qjs7R0FFRztBQUNIO0lBQTZDLDJDQUF1QjtJQUNsRSxpQ0FBWSxJQUFVO2VBQ3BCLGtCQUFNLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQztJQUN4RCxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBNkMsV0FBSSxHQUloRDtBQUpZLDBEQUF1QiJ9