import { HalResource } from '../hal/models/HalResource';
import { ContentTypeCachedSchema } from './ContentTypeCachedSchema';
import { Page } from './Page';
/**
 * Class representing the [Content Type](https://api.amplience.net/v2/content/docs/api/index.html#resources-content-types) resource.
 * Content types are JSON schemas that define a type of content to be created, including its structure, format and validation rules.
 */
export class ContentType extends HalResource {
    constructor() {
        super(...arguments);
        /**
         * Resources and actions related to a ContentType
         */
        this.related = {
            /**
             * Update a Content Type with the provided changes
             */
            update: (mutation) => this.updateResource(mutation, ContentType),
            contentTypeSchema: {
                /**
                 * Get the associated JSON schema document for a content type
                 */
                get: () => this.fetchLinkedResource('content-type-schema', {}, ContentTypeCachedSchema),
                /**
                 * Sync a content type with the associated JSON schema document
                 */
                update: (mutation = new ContentTypeCachedSchema()) => this.updateLinkedResource('content-type-schema', {}, mutation, ContentTypeCachedSchema)
            }
        };
    }
}
/**
 * @hidden
 */
export class ContentTypePage extends Page {
    constructor(data) {
        super('content-types', ContentType, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0NvbnRlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBeUU5Qjs7O0dBR0c7QUFDSCxNQUFNLGtCQUFtQixTQUFRLFdBQVc7SUFBNUM7O1FBZ0JFOztXQUVHO1FBQ2EsWUFBTyxHQUFHO1lBQ3hCOztlQUVHO1lBQ0gsTUFBTSxFQUFFLENBQUMsUUFBcUIsRUFBd0IsRUFBRSxDQUN0RCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7WUFFNUMsaUJBQWlCLEVBQUU7Z0JBQ2pCOzttQkFFRztnQkFDSCxHQUFHLEVBQUUsR0FBcUMsRUFBRSxDQUMxQyxJQUFJLENBQUMsbUJBQW1CLENBQ3RCLHFCQUFxQixFQUNyQixFQUFFLEVBQ0YsdUJBQXVCLENBQ3hCO2dCQUVIOzttQkFFRztnQkFDSCxNQUFNLEVBQUUsQ0FDTixXQUFvQyxJQUFJLHVCQUF1QixFQUFFLEVBQy9CLEVBQUUsQ0FDcEMsSUFBSSxDQUFDLG9CQUFvQixDQUN2QixxQkFBcUIsRUFDckIsRUFBRSxFQUNGLFFBQVEsRUFDUix1QkFBdUIsQ0FDeEI7YUFDSjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFRDs7R0FFRztBQUNILE1BQU0sc0JBQXVCLFNBQVEsSUFBaUI7SUFDcEQsWUFBWSxJQUFVO1FBQ3BCLEtBQUssQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRiJ9