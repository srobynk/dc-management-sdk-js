import { HalResource } from '../hal/models/HalResource';
import { Page } from './Page';
/**
 * Supported validation levels
 */
export var ValidationLevel;
(function (ValidationLevel) {
    ValidationLevel["SLOT"] = "SLOT";
    ValidationLevel["CONTENT_TYPE"] = "CONTENT_TYPE";
    ValidationLevel["PARTIAL"] = "PARTIAL";
})(ValidationLevel || (ValidationLevel = {}));
/**
 * Content type schema
 */
export class ContentTypeSchema extends HalResource {
    constructor() {
        super(...arguments);
        /**
         * Resources and actions related to a ContentTypeSchema
         */
        this.related = {
            /**
             * Updated content type schema
             * @param updated
             */
            update: (mutation) => this.updateResource(mutation, ContentTypeSchema)
        };
    }
}
/**
 * @hidden
 */
export class ContentTypeSchemaPage extends Page {
    constructor(data) {
        super('content-type-schemas', ContentTypeSchema, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFR5cGVTY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0NvbnRlbnRUeXBlU2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTlCOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6QixnQ0FBYSxDQUFBO0lBQ2IsZ0RBQTZCLENBQUE7SUFDN0Isc0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUpXLGVBQWUsS0FBZixlQUFlLFFBSTFCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLHdCQUF5QixTQUFRLFdBQVc7SUFBbEQ7O1FBK0NFOztXQUVHO1FBQ2EsWUFBTyxHQUFHO1lBQ3hCOzs7ZUFHRztZQUNILE1BQU0sRUFBRSxDQUFDLFFBQTJCLEVBQThCLEVBQUUsQ0FDbEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUM7U0FDbkQsQ0FBQztJQUNKLENBQUM7Q0FBQTtBQUVEOztHQUVHO0FBQ0gsTUFBTSw0QkFBNkIsU0FBUSxJQUF1QjtJQUNoRSxZQUFZLElBQVU7UUFDcEIsS0FBSyxDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRiJ9