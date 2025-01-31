import { HalResource } from '../hal/models/HalResource';
import { ContentTypeCachedSchema } from './ContentTypeCachedSchema';
import { Page } from './Page';
export interface ContentTypeIcon {
    /**
     * Pixel size of the icon
     */
    size?: number;
    /**
     * URL address of the icon file
     */
    url?: string;
}
export interface ContentTypeCard {
    /**
     * Friendly name for the card
     */
    label?: string;
    /**
     * Templated URL of the externally hosted application.
     */
    templatedUri?: string;
    /**
     * Indicates if this is the default card for the content type
     */
    default?: boolean;
}
/**
 * Visualizations are externally hosted applications which can provide a preview of the content type.
 */
export interface ContentTypeVisualization {
    /**
     * Friendly name for the visualization
     */
    label?: string;
    /**
     * Templated URL of the externally hosted application.
     */
    templatedUri?: string;
    /**
     * Indicates if this is the default visualization for the content type
     */
    default?: boolean;
}
export interface ContentTypeSettings {
    /**
     * Friendly name for the content type
     */
    label?: string;
    /**
     * Icons for the content type
     */
    icons?: ContentTypeIcon[];
    /**
     * Visualizations used to provide high quality preview of the content type
     */
    visualizations?: ContentTypeVisualization[];
    /**
     * Cards used to provide a thumbnail preview of the content type
     */
    cards?: ContentTypeCard[];
}
/**
 * Class representing the [Content Type](https://api.amplience.net/v2/content/docs/api/index.html#resources-content-types) resource.
 * Content types are JSON schemas that define a type of content to be created, including its structure, format and validation rules.
 */
export declare class ContentType extends HalResource {
    /**
     * Unique id generated on creation
     */
    id?: string;
    /**
     * URI that describes where to locate the JSON schema definition for this content type
     */
    contentTypeUri?: string;
    /**
     * Object containing display settings for the content type
     */
    settings?: ContentTypeSettings;
    /**
     * Resources and actions related to a ContentType
     */
    readonly related: {
        /**
         * Update a Content Type with the provided changes
         */
        update: (mutation: ContentType) => Promise<ContentType>;
        contentTypeSchema: {
            /**
             * Get the associated JSON schema document for a content type
             */
            get: () => Promise<ContentTypeCachedSchema>;
            /**
             * Sync a content type with the associated JSON schema document
             */
            update: (mutation?: ContentTypeCachedSchema) => Promise<ContentTypeCachedSchema>;
        };
    };
}
/**
 * @hidden
 */
export declare class ContentTypePage extends Page<ContentType> {
    constructor(data?: any);
}
