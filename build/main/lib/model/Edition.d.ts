import { HalResource } from '../hal/models/HalResource';
import { EditionSlot } from './EditionSlot';
import { Event } from './Event';
import { Page } from './Page';
import { PublishingStatus } from './PublishingStatus';
/**
 * Class representing the [Edition](https://api.amplience.net/v2/content/docs/api/index.html#resources-editions) resource.
 * An Edition is the main way of scheduling content to be published on a specific date.
 * It holds the association between slots and content items. Once all slots are valid and
 * there are no conflicts, it is ready to be scheduled.
 */
export declare class Edition extends HalResource {
    /**
     * Unique id generated on creation
     */
    id?: string;
    /**
     * Friendly name for the edition
     */
    name?: string;
    /**
     * Textual comment to describe the edition
     */
    comment?: string;
    /**
     * Date when the edition should begin in ISO 8601 format
     */
    start?: string;
    /**
     * Date when the edition should end in ISO 8601 format
     */
    end?: string;
    /**
     * Boolean flag indicating if the content should become invalid after the end date.
     * This does not cause the content to become unpublished but instead acts as a flag
     * for your application to decide if the content should be displayed after the end date.
     */
    activeEndDate?: boolean;
    /**
     * Id of the event the edition is associated with.
     */
    eventId?: string;
    /**
     * Current publishing status of the edition
     */
    publishingStatus?: PublishingStatus;
    /**
     * Id of the job responsible for publishing the content in this edition.
     * This will be <tt>undefined</tt> if the edition is in a state
     * where a publish is yet to occur.
     */
    publishingJobId?: string;
    /**
     * Id of the publish manifest generated when the edition was scheduled.
     * This will be <tt>undefined</tt> if the edition is in a state
     * where a schedule is yet to occur.
     */
    publishManifestId?: string;
    /**
     * Id of the user responsible for originally creating the edition
     */
    createdBy?: string;
    /**
     * Timestamp representing when the edition was originally created in ISO 8601 format
     */
    createdDate?: string;
    /**
     * Id of the user responsible for the last update to the edition
     */
    lastModifiedBy?: string;
    /**
     * Timestamp representing when the edition was last updated in ISO 8601 format
     */
    lastModifiedDate?: string;
    /**
     * Resources and actions related to an Edition
     */
    readonly related: {
        /**
         * Retrieves the Event associated with this Edition
         */
        event: () => Promise<Event>;
        slots: {
            /**
             * Retrieves a list of slots associated with this Edition
             */
            list: () => Promise<Page<EditionSlot>>;
        };
    };
}
/**
 * @hidden
 */
export declare class EditionsPage extends Page<Edition> {
    constructor(data?: any);
}
