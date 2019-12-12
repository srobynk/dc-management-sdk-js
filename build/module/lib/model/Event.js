import { HalResource } from '../hal/models/HalResource';
import { Edition, EditionsPage } from './Edition';
import { Page } from './Page';
/**
 * Class representing the [Event](https://api.amplience.net/v2/content/docs/api/index.html#resources-events) resource.
 * An Event represents a major date in the calendar, such as Christmas or Black Friday. An Event may span multiple days and start and end at any given UTC time.
 */
export class Event extends HalResource {
    constructor() {
        super(...arguments);
        /**
         * Resources and actions related to an Event
         */
        this.related = {
            editions: {
                /**
                 * Creates an Edition inside the Event
                 * @param resource The new Edition to create
                 */
                create: (resource) => this.createLinkedResource('create-edition', {}, resource, Edition),
                /**
                 * Retrieves a list of Editions associated with this Event.
                 * @param options Pagination options
                 */
                list: (options) => this.fetchLinkedResource('editions', options, EditionsPage)
            }
        };
    }
}
/**
 * @hidden
 */
export class EventsPage extends Page {
    constructor(data) {
        super('events', Event, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBSTlCOzs7R0FHRztBQUNILE1BQU0sWUFBYSxTQUFRLFdBQVc7SUFBdEM7O1FBK0JFOztXQUVHO1FBQ2EsWUFBTyxHQUFHO1lBQ3hCLFFBQVEsRUFBRTtnQkFDUjs7O21CQUdHO2dCQUNILE1BQU0sRUFBRSxDQUFDLFFBQWlCLEVBQW9CLEVBQUUsQ0FDOUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO2dCQUVwRTs7O21CQUdHO2dCQUNILElBQUksRUFBRSxDQUFDLE9BQTZCLEVBQTBCLEVBQUUsQ0FDOUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO2FBQzlEO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FBQTtBQUVEOztHQUVHO0FBQ0gsTUFBTSxpQkFBa0IsU0FBUSxJQUFXO0lBQ3pDLFlBQVksSUFBVTtRQUNwQixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0YifQ==