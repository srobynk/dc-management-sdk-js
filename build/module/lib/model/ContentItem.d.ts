import { HalResource } from '../hal/models/HalResource';
import { ContentRepository } from './ContentRepository';
import { Page } from './Page';
import { Status } from './Status';
/**
 * Class representing the [Content Item](https://api.amplience.net/v2/content/docs/api/index.html#resources-content-items) resource.
 * Content Items are instances of content created from a content type.
 */
export declare class ContentItem extends HalResource {
    /**
     * Unique id generated on creation
     */
    id?: string;
    /**
     * Id of the folder where this content item is placed.
     * This will be <tt>undefined</tt> if the item is in the repository root.
     */
    folderId?: string;
    /**
     * Content item JSON body. The body must include the content type URL to indicate which content type this
     * item will be created against, e.g.
     *
     * ```json
     * {
     *  "_meta": {
     *    "schema": "https://raw.githubusercontent.com/amplience/dc-content-types/master/text-block.json"
     *  }
     * }
     * ```
     *
     * The body will be validated against the content type
     * and will reject if there are any validation errors.
     */
    body?: any;
    /**
     * Version number of the content item returned. By default this is
     * the latest version but content items accessed via a snapshot
     * will return the version found in the snapshot.
     */
    version?: number;
    /**
     * Friendly label for the content item
     */
    label?: string;
    /**
     * Locale
     */
    locale?: string;
    /**
     * Unique id used by client applications to request the content from the delivery API
     */
    deliveryId?: string;
    /**
     * Lifecycle status of the content item
     */
    status?: Status;
    /**
     * Id of the user responsible for originally creating the content item
     */
    createdBy?: string;
    /**
     * Timestamp representing when the content item was originally created in ISO 8601 format
     */
    createdDate?: string;
    /**
     * Id of the user responsible for the last update to the content item
     */
    lastModifiedBy?: string;
    /**
     * Timestamp representing when the content item was last updated in ISO 8601 format
     */
    lastModifiedDate?: string;
    /**
     * Resources and actions related to a Content Item
     */
    readonly related: {
        /**
         * Retrieves a specific version of the content item
         * @param version Version number requested
         */
        contentItemVersion: (version: number) => Promise<ContentItem>;
        /**
         * Retrieves the ContentRepository this content item is stored in
         */
        contentRepository: () => Promise<ContentRepository>;
        /**
         * Sets a locale of the form ll-CC (language, country code)
         * @param locale Locale code
         */
        setLocale: (localeDefinition: string) => Promise<ContentItem>;
        /**
         * Create localizations of the content item
         * @param locales Array of locales to create
         */
        localize: (localesList: string[]) => Promise<any>;
        /**
         * Updates this Content Item with the changes in the mutation parameter.
         * You must provide the current version number in the mutation
         * to avoid overwriting other user's changes.
         */
        update: (mutation: ContentItem) => Promise<ContentItem>;
        setDeliveryKey: (deliveryKey: string) => Promise<any>;
    };
}
/**
 * @hidden
 */
export declare class ContentItemsPage extends Page<ContentItem> {
    constructor(data?: any);
}
