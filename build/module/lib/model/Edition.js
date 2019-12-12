import { HalResource } from '../hal/models/HalResource';
import { EditionSlotsPage } from './EditionSlot';
import { Event } from './Event';
import { Page } from './Page';
/**
 * Class representing the [Edition](https://api.amplience.net/v2/content/docs/api/index.html#resources-editions) resource.
 * An Edition is the main way of scheduling content to be published on a specific date.
 * It holds the association between slots and content items. Once all slots are valid and
 * there are no conflicts, it is ready to be scheduled.
 */
export class Edition extends HalResource {
    constructor() {
        super(...arguments);
        /**
         * Resources and actions related to an Edition
         */
        this.related = {
            /**
             * Retrieves the Event associated with this Edition
             */
            event: () => this.fetchLinkedResource('event', {}, Event),
            slots: {
                /**
                 * Retrieves a list of slots associated with this Edition
                 */
                list: () => this.fetchLinkedResource('list-slots', {}, EditionSlotsPage)
            }
        };
    }
}
/**
 * @hidden
 */
export class EditionsPage extends Page {
    constructor(data) {
        super('editions', Edition, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvRWRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFlLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUs5Qjs7Ozs7R0FLRztBQUNILE1BQU0sY0FBZSxTQUFRLFdBQVc7SUFBeEM7O1FBNkVFOztXQUVHO1FBQ2EsWUFBTyxHQUFHO1lBQ3hCOztlQUVHO1lBQ0gsS0FBSyxFQUFFLEdBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFFekUsS0FBSyxFQUFFO2dCQUNMOzttQkFFRztnQkFDSCxJQUFJLEVBQUUsR0FBK0IsRUFBRSxDQUNyQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQzthQUMvRDtTQUNGLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFRDs7R0FFRztBQUNILE1BQU0sbUJBQW9CLFNBQVEsSUFBYTtJQUM3QyxZQUFZLElBQVU7UUFDcEIsS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNGIn0=