import { HalResource } from '../hal/models/HalResource';
import { ContentRepositoriesPage } from './ContentRepository';
import { ContentType, ContentTypePage } from './ContentType';
import { ContentTypeSchema, ContentTypeSchemaPage } from './ContentTypeSchema';
import { Event, EventsPage } from './Event';
import { Page } from './Page';
import { Webhook, WebhooksPage } from './Webhook';
/**
 * Class representing the [Hub](https://api.amplience.net/v2/content/docs/api/index.html#resources-hubs) resource.
 * Hubs are containers for multiple repositories including media, content, content types.
 */
export class Hub extends HalResource {
    constructor() {
        super(...arguments);
        /**
         * Resources and actions related to a Hub
         */
        this.related = {
            contentTypeSchema: {
                /**
                 * Creates a new Content Type Schema
                 * @param resource
                 */
                create: (resource) => this.createLinkedResource('create-content-type-schema', {}, resource, ContentTypeSchema),
                /**
                 * Retrieves a list of Content Type Schemas associated with this Hub
                 * @param options Pagination options
                 */
                list: (options) => this.fetchLinkedResource('list-content-type-schemas', options, ContentTypeSchemaPage)
            },
            contentRepositories: {
                /**
                 * Retrieves a list of Content Repositories associated with this Hub
                 * @param options Pagination options
                 */
                list: (options) => this.fetchLinkedResource('content-repositories', options, ContentRepositoriesPage)
            },
            contentTypes: {
                /**
                 * Retrieves a list of Content Types associated with this Hub
                 * @param options Pagination options
                 */
                list: (options) => this.fetchLinkedResource('content-types', options, ContentTypePage),
                /**
                 * Register a Content Type on a hub so it can be enabled on a repository
                 */
                register: (resource) => this.createLinkedResource('register-content-type', {}, resource, ContentType)
            },
            events: {
                /**
                 * Creates an Event inside this Hub
                 * @param resource
                 */
                create: (resource) => this.createLinkedResource('create-event', {}, resource, Event),
                /**
                 * Retrieves a list of Events associated with this Hub
                 * @param options Pagination options
                 */
                list: (options) => this.fetchLinkedResource('events', options, EventsPage)
            },
            webhooks: {
                /**
                 * Creates a Webhook inside this Hub
                 * @param resource
                 */
                create: (resource) => this.createLinkedResource('create-webhook', {}, resource, Webhook),
                /**
                 * Get a webhook inside this hub by its id
                 */
                get: (id) => this.client.fetchResource(`hubs/${this.id}/webhooks/${id}`, Webhook),
                /**
                 * Retrieves a list of Events associated with this Hub
                 * @param options Pagination options
                 */
                list: (options) => this.fetchLinkedResource('webhooks', options, WebhooksPage)
            }
        };
    }
}
/**
 * @hidden
 */
export class HubsPage extends Page {
    constructor(data) {
        super('hubs', Hub, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2RlbC9IdWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFDTCx1QkFBdUIsRUFFeEIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBSTlCLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWxEOzs7R0FHRztBQUNILE1BQU0sVUFBVyxTQUFRLFdBQVc7SUFBcEM7O1FBOENFOztXQUVHO1FBQ2EsWUFBTyxHQUFHO1lBQ3hCLGlCQUFpQixFQUFFO2dCQUNqQjs7O21CQUdHO2dCQUNILE1BQU0sRUFBRSxDQUFDLFFBQTJCLEVBQThCLEVBQUUsQ0FDbEUsSUFBSSxDQUFDLG9CQUFvQixDQUN2Qiw0QkFBNEIsRUFDNUIsRUFBRSxFQUNGLFFBQVEsRUFDUixpQkFBaUIsQ0FDbEI7Z0JBRUg7OzttQkFHRztnQkFDSCxJQUFJLEVBQUUsQ0FBQyxPQUFrQixFQUFvQyxFQUFFLENBQzdELElBQUksQ0FBQyxtQkFBbUIsQ0FDdEIsMkJBQTJCLEVBQzNCLE9BQU8sRUFDUCxxQkFBcUIsQ0FDdEI7YUFDSjtZQUVELG1CQUFtQixFQUFFO2dCQUNuQjs7O21CQUdHO2dCQUNILElBQUksRUFBRSxDQUFDLE9BQTZCLEVBQW9DLEVBQUUsQ0FDeEUsSUFBSSxDQUFDLG1CQUFtQixDQUN0QixzQkFBc0IsRUFDdEIsT0FBTyxFQUNQLHVCQUF1QixDQUN4QjthQUNKO1lBQ0QsWUFBWSxFQUFFO2dCQUNaOzs7bUJBR0c7Z0JBQ0gsSUFBSSxFQUFFLENBQUMsT0FBNkIsRUFBOEIsRUFBRSxDQUNsRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUM7Z0JBRXJFOzttQkFFRztnQkFDSCxRQUFRLEVBQUUsQ0FBQyxRQUFxQixFQUF3QixFQUFFLENBQ3hELElBQUksQ0FBQyxvQkFBb0IsQ0FDdkIsdUJBQXVCLEVBQ3ZCLEVBQUUsRUFDRixRQUFRLEVBQ1IsV0FBVyxDQUNaO2FBQ0o7WUFDRCxNQUFNLEVBQUU7Z0JBQ047OzttQkFHRztnQkFDSCxNQUFNLEVBQUUsQ0FBQyxRQUFlLEVBQWtCLEVBQUUsQ0FDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztnQkFFaEU7OzttQkFHRztnQkFDSCxJQUFJLEVBQUUsQ0FBQyxPQUE2QixFQUF3QixFQUFFLENBQzVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQzthQUMxRDtZQUNELFFBQVEsRUFBRTtnQkFDUjs7O21CQUdHO2dCQUNILE1BQU0sRUFBRSxDQUFDLFFBQWlCLEVBQW9CLEVBQUUsQ0FDOUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO2dCQUVwRTs7bUJBRUc7Z0JBQ0gsR0FBRyxFQUFFLENBQUMsRUFBVSxFQUFvQixFQUFFLENBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUM7Z0JBRXRFOzs7bUJBR0c7Z0JBQ0gsSUFBSSxFQUFFLENBQUMsT0FBNkIsRUFBMEIsRUFBRSxDQUM5RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7YUFDOUQ7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUFBO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLGVBQWdCLFNBQVEsSUFBUztJQUNyQyxZQUFZLElBQVU7UUFDcEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNGIn0=