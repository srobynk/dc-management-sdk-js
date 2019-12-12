import { HalResource } from '../hal/models/HalResource';
import { ContentItem, ContentItemsPage } from './ContentItem';
import { Folder, FoldersPage } from './Folder';
import { Page } from './Page';
/**
 * Class representing the [Content Repository](https://api.amplience.net/v2/content/docs/api/index.html#resources-content-repositories) resource.
 * Content repositories are containers where content can be stored.
 */
export class ContentRepository extends HalResource {
    constructor() {
        super(...arguments);
        /**
         * Resources and actions related to a Content Repository
         */
        this.related = {
            folders: {
                /**
                 * Retrieves the list of top-level folders within this Content Repository
                 */
                list: (options) => this.fetchLinkedResource('folders', options, FoldersPage),
                /**
                 * Creates a folder in the Content Repository
                 * @param resource The new Folder to create
                 */
                create: (resource) => this.createLinkedResource('create-folder', {}, resource, Folder)
            },
            contentItems: {
                /**
                 * Creates a content item inside the repository
                 * @param resource The new content item to create
                 */
                create: (resource) => this.createLinkedResource('create-content-item', {}, resource, ContentItem),
                /**
                 * Retrieves a list of Content Items stored within this Content Repository
                 */
                list: (options) => this.fetchLinkedResource('content-items', options, ContentItemsPage)
            },
            contentTypes: {
                /**
                 * Assigns a content type to the repository
                 */
                assign: (contentTypeId) => this.performActionThatReturnsResource('assign-content-type', {}, { contentTypeId }, ContentRepository),
                /**
                 * Unassign a content type from this repository
                 */
                unassign: (contentTypeId) => this.deleteLinkedResource('unassign-content-type', {
                    id: contentTypeId
                })
            }
        };
    }
}
/**
 * @hidden
 */
export class ContentRepositoriesPage extends Page {
    constructor(data) {
        super('content-repositories', ContentRepository, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0NvbnRlbnRSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFvQjlCOzs7R0FHRztBQUNILE1BQU0sd0JBQXlCLFNBQVEsV0FBVztJQUFsRDs7UUFxQ0U7O1dBRUc7UUFDYSxZQUFPLEdBQUc7WUFDeEIsT0FBTyxFQUFFO2dCQUNQOzttQkFFRztnQkFDSCxJQUFJLEVBQUUsQ0FBQyxPQUFrQixFQUF5QixFQUFFLENBQ2xELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQztnQkFFM0Q7OzttQkFHRztnQkFDSCxNQUFNLEVBQUUsQ0FBQyxRQUFnQixFQUFtQixFQUFFLENBQzVDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7YUFDbkU7WUFFRCxZQUFZLEVBQUU7Z0JBQ1o7OzttQkFHRztnQkFDSCxNQUFNLEVBQUUsQ0FBQyxRQUFxQixFQUF3QixFQUFFLENBQ3RELElBQUksQ0FBQyxvQkFBb0IsQ0FDdkIscUJBQXFCLEVBQ3JCLEVBQUUsRUFDRixRQUFRLEVBQ1IsV0FBVyxDQUNaO2dCQUVIOzttQkFFRztnQkFDSCxJQUFJLEVBQUUsQ0FBQyxPQUE2QixFQUE4QixFQUFFLENBQ2xFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixDQUFDO2FBQ3ZFO1lBRUQsWUFBWSxFQUFFO2dCQUNaOzttQkFFRztnQkFDSCxNQUFNLEVBQUUsQ0FBQyxhQUFxQixFQUE4QixFQUFFLENBQzVELElBQUksQ0FBQyxnQ0FBZ0MsQ0FDbkMscUJBQXFCLEVBQ3JCLEVBQUUsRUFDRixFQUFFLGFBQWEsRUFBRSxFQUNqQixpQkFBaUIsQ0FDbEI7Z0JBRUg7O21CQUVHO2dCQUNILFFBQVEsRUFBRSxDQUFDLGFBQXFCLEVBQWlCLEVBQUUsQ0FDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixFQUFFO29CQUNqRCxFQUFFLEVBQUUsYUFBYTtpQkFDbEIsQ0FBQzthQUNMO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FBQTtBQUVEOztHQUVHO0FBQ0gsTUFBTSw4QkFBK0IsU0FBUSxJQUF1QjtJQUNsRSxZQUFZLElBQVU7UUFDcEIsS0FBSyxDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRiJ9