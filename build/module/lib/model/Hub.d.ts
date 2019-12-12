import { HalResource } from '../hal/models/HalResource';
import { ContentRepository } from './ContentRepository';
import { ContentType } from './ContentType';
import { ContentTypeSchema } from './ContentTypeSchema';
import { Event } from './Event';
import { Page } from './Page';
import { Pageable } from './Pageable';
import { Sortable } from './Sortable';
import { Status } from './Status';
import { Webhook } from './Webhook';
/**
 * Class representing the [Hub](https://api.amplience.net/v2/content/docs/api/index.html#resources-hubs) resource.
 * Hubs are containers for multiple repositories including media, content, content types.
 */
export declare class Hub extends HalResource {
    /**
     * Unique id generated on creation
     */
    id?: string;
    /**
     * Globally unique programmatic name for the Hub
     */
    name?: string;
    /**
     * Friendly display label for the Hub
     */
    label?: string;
    /**
     * Textual description of the Hub
     */
    description?: string;
    /**
     * Lifecycle status of the Hub
     */
    status?: Status;
    /**
     * Id of the user responsible for originally creating the Hub
     */
    createdBy?: string;
    /**
     * Timestamp representing when the Hub was originally created in ISO 8601 format
     */
    createdDate?: string;
    /**
     * Id of the user responsible for the last update to the Hub
     */
    lastModifiedBy?: string;
    /**
     * Timestamp representing when the Hub was last updated in ISO 8601 format
     */
    lastModifiedDate?: string;
    /**
     * Resources and actions related to a Hub
     */
    readonly related: {
        contentTypeSchema: {
            /**
             * Creates a new Content Type Schema
             * @param resource
             */
            create: (resource: ContentTypeSchema) => Promise<ContentTypeSchema>;
            /**
             * Retrieves a list of Content Type Schemas associated with this Hub
             * @param options Pagination options
             */
            list: (options?: Pageable) => Promise<Page<ContentTypeSchema>>;
        };
        contentRepositories: {
            /**
             * Retrieves a list of Content Repositories associated with this Hub
             * @param options Pagination options
             */
            list: (options?: Pageable & Sortable) => Promise<Page<ContentRepository>>;
        };
        contentTypes: {
            /**
             * Retrieves a list of Content Types associated with this Hub
             * @param options Pagination options
             */
            list: (options?: Pageable & Sortable) => Promise<Page<ContentType>>;
            /**
             * Register a Content Type on a hub so it can be enabled on a repository
             */
            register: (resource: ContentType) => Promise<ContentType>;
        };
        events: {
            /**
             * Creates an Event inside this Hub
             * @param resource
             */
            create: (resource: Event) => Promise<Event>;
            /**
             * Retrieves a list of Events associated with this Hub
             * @param options Pagination options
             */
            list: (options?: Pageable & Sortable) => Promise<Page<Event>>;
        };
        webhooks: {
            /**
             * Creates a Webhook inside this Hub
             * @param resource
             */
            create: (resource: Webhook) => Promise<Webhook>;
            /**
             * Get a webhook inside this hub by its id
             */
            get: (id: string) => Promise<Webhook>;
            /**
             * Retrieves a list of Events associated with this Hub
             * @param options Pagination options
             */
            list: (options?: Pageable & Sortable) => Promise<Page<Webhook>>;
        };
    };
}
/**
 * @hidden
 */
export declare class HubsPage extends Page<Hub> {
    constructor(data?: any);
}
