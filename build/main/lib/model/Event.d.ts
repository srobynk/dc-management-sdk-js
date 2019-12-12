import { HalResource } from '../hal/models/HalResource';
import { Edition } from './Edition';
import { Page } from './Page';
import { Pageable } from './Pageable';
import { Sortable } from './Sortable';
/**
 * Class representing the [Event](https://api.amplience.net/v2/content/docs/api/index.html#resources-events) resource.
 * An Event represents a major date in the calendar, such as Christmas or Black Friday. An Event may span multiple days and start and end at any given UTC time.
 */
export declare class Event extends HalResource {
    /**
     * Unique id generated on creation
     */
    id?: string;
    /**
     * Friendly name for the event
     */
    name?: string;
    /**
     * Textual comment to describe the event
     */
    comment?: string;
    /**
     * Date when the event should begin in ISO 8601 format
     */
    start?: string;
    /**
     * Date when the event should end in ISO 8601 format
     */
    end?: string;
    /**
     * Hyperlink to a document describing the requirements for the Event
     */
    brief?: string;
    /**
     * Resources and actions related to an Event
     */
    readonly related: {
        editions: {
            /**
             * Creates an Edition inside the Event
             * @param resource The new Edition to create
             */
            create: (resource: Edition) => Promise<Edition>;
            /**
             * Retrieves a list of Editions associated with this Event.
             * @param options Pagination options
             */
            list: (options?: Pageable & Sortable) => Promise<Page<Edition>>;
        };
    };
}
/**
 * @hidden
 */
export declare class EventsPage extends Page<Event> {
    constructor(data?: any);
}
