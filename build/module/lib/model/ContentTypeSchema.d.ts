import { HalResource } from '../hal/models/HalResource';
import { Page } from './Page';
/**
 * Supported validation levels
 */
export declare enum ValidationLevel {
    SLOT = "SLOT",
    CONTENT_TYPE = "CONTENT_TYPE",
    PARTIAL = "PARTIAL"
}
/**
 * Content type schema
 */
export declare class ContentTypeSchema extends HalResource {
    /**
     * Unique id generated on creation
     */
    id?: string;
    /**
     * Content Type Schema
     */
    body?: string;
    /**
     * Schema ID (URI)
     */
    schemaId?: string;
    /**
     * Version number of the content type schema returned.
     * This number will automatically be incremented for each update.
     */
    version?: number;
    /**
     * Validation level for this content type schema
     */
    validationLevel?: ValidationLevel;
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
     * Resources and actions related to a ContentTypeSchema
     */
    readonly related: {
        /**
         * Updated content type schema
         * @param updated
         */
        update: (mutation: ContentTypeSchema) => Promise<ContentTypeSchema>;
    };
}
/**
 * @hidden
 */
export declare class ContentTypeSchemaPage extends Page<ContentTypeSchema> {
    constructor(data?: any);
}
