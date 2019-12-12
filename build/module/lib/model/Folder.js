import { HalResource } from '../hal/models/HalResource';
import { ContentItemsPage } from './ContentItem';
import { ContentRepository } from './ContentRepository';
import { Page } from './Page';
export class Folder extends HalResource {
    constructor() {
        super(...arguments);
        /**
         * Resources and actions related to a Folder
         */
        this.related = {
            /**
             * Retrieves the ContentRepository this folder is stored in
             */
            contentRepository: () => this.fetchLinkedResource('content-repository', {}, ContentRepository),
            folders: {
                /**
                 * Retrieves the parent folder of this Folder
                 */
                parent: () => this.fetchLinkedResource('parent-folder', {}, Folder),
                /**
                 * Retrieves the list of sub-folders contained within this Folder
                 */
                list: () => this.client.fetchResource(`folders/${this.id}/folders`, FoldersPage),
                /**
                 * Creates a folder beneath the folder
                 * @param resource The new Folder to create
                 */
                create: (resource) => this.createLinkedResource('create-folder', {}, resource, Folder)
            },
            contentItems: {
                /**
                 * Retrieves a list of Content Items stored within this Folder
                 */
                list: () => this.fetchLinkedResource('content-items', {}, ContentItemsPage)
            }
        };
    }
}
/**
 * @hidden
 */
export class FoldersPage extends Page {
    constructor(data) {
        super('folders', Folder, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2RlbC9Gb2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBZSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTlCLE1BQU0sYUFBYyxTQUFRLFdBQVc7SUFBdkM7O1FBS0U7O1dBRUc7UUFDYSxZQUFPLEdBQUc7WUFDeEI7O2VBRUc7WUFDSCxpQkFBaUIsRUFBRSxHQUErQixFQUFFLENBQ2xELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLENBQUM7WUFFdkUsT0FBTyxFQUFFO2dCQUNQOzttQkFFRztnQkFDSCxNQUFNLEVBQUUsR0FBb0IsRUFBRSxDQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUM7Z0JBRXZEOzttQkFFRztnQkFDSCxJQUFJLEVBQUUsR0FBMEIsRUFBRSxDQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUM7Z0JBRXRFOzs7bUJBR0c7Z0JBQ0gsTUFBTSxFQUFFLENBQUMsUUFBZ0IsRUFBbUIsRUFBRSxDQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO2FBQ25FO1lBRUQsWUFBWSxFQUFFO2dCQUNaOzttQkFFRztnQkFDSCxJQUFJLEVBQUUsR0FBK0IsRUFBRSxDQUNyQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQzthQUNsRTtTQUNGLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFRDs7R0FFRztBQUNILE1BQU0sa0JBQW1CLFNBQVEsSUFBWTtJQUMzQyxZQUFZLElBQVU7UUFDcEIsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGIn0=