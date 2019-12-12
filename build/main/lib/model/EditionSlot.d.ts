import { HalResource } from '../hal/models/HalResource';
import { Page } from './Page';
/**
 * Class representing the [EditionSlot](https://api.amplience.net/v2/content/docs/api/index.html#resources-editions-slots) resource.
 * EditionSlots model what content will go into a particular Slot for a specific Edition.
 */
export declare class EditionSlot extends HalResource {
    /**
     * Id of the slot content item
     */
    slotId?: string;
    /**
     * JSON body of the slot as it will be when the Edition is published
     */
    content: any;
}
/**
 * @hidden
 */
export declare class EditionSlotsPage extends Page<EditionSlot> {
    constructor(data?: any);
}
