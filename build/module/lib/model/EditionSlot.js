import { HalResource } from '../hal/models/HalResource';
import { Page } from './Page';
/**
 * Class representing the [EditionSlot](https://api.amplience.net/v2/content/docs/api/index.html#resources-editions-slots) resource.
 * EditionSlots model what content will go into a particular Slot for a specific Edition.
 */
export class EditionSlot extends HalResource {
}
/**
 * @hidden
 */
export class EditionSlotsPage extends Page {
    constructor(data) {
        super('edition-slots', EditionSlot, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdGlvblNsb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0VkaXRpb25TbG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTlCOzs7R0FHRztBQUNILE1BQU0sa0JBQW1CLFNBQVEsV0FBVztDQVUzQztBQUVEOztHQUVHO0FBQ0gsTUFBTSx1QkFBd0IsU0FBUSxJQUFpQjtJQUNyRCxZQUFZLElBQVU7UUFDcEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGIn0=