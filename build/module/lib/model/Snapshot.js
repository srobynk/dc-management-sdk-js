import { HalResource } from '../hal/models/HalResource';
import { ContentItem } from './ContentItem';
/**
 * Class representing the [Snapshot](https://api.amplience.net/v2/content/docs/api/index.html#resources-snapshots) resource.
 * A Snapshot is an immutable representation of a content item with all of its descendants (including their versions) at a given point in time.
 */
export class Snapshot extends HalResource {
    constructor() {
        super(...arguments);
        /**
         * Resources and actions related to a Snapshot
         */
        this.related = {
            /**
             * Retrieves the specific version of a content item referenced by the Snapshot
             * @param id Content item id
             */
            snapshotContentItem: (id) => this.client.fetchResource(`snapshots/${this.id}/content-items/${id}`, ContentItem)
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU25hcHNob3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL1NuYXBzaG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzVDOzs7R0FHRztBQUNILE1BQU0sZUFBZ0IsU0FBUSxXQUFXO0lBQXpDOztRQTBCRTs7V0FFRztRQUNhLFlBQU8sR0FBRztZQUN4Qjs7O2VBR0c7WUFDSCxtQkFBbUIsRUFBRSxDQUFDLEVBQVUsRUFBd0IsRUFBRSxDQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FDdkIsYUFBYSxJQUFJLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEVBQzFDLFdBQVcsQ0FDWjtTQUNKLENBQUM7SUFDSixDQUFDO0NBQUEifQ==