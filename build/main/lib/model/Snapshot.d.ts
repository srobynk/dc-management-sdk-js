import { HalResource } from '../hal/models/HalResource';
import { ContentItem } from './ContentItem';
import { SnapshotType } from './SnapshotType';
/**
 * Class representing the [Snapshot](https://api.amplience.net/v2/content/docs/api/index.html#resources-snapshots) resource.
 * A Snapshot is an immutable representation of a content item with all of its descendants (including their versions) at a given point in time.
 */
export declare class Snapshot extends HalResource {
    /**
     * Unique id generated on creation
     */
    id?: string;
    /**
     * Textual comment description of the Snapshot
     */
    comment?: string;
    /**
     * Id of the user responsible for originally creating the Snapshot
     */
    createdBy?: string;
    /**
     * Timestamp representing when the Snapshot was originally created in ISO 8601 format
     */
    createdDate?: string;
    /**
     * Snapshot type
     */
    type?: SnapshotType;
    /**
     * Resources and actions related to a Snapshot
     */
    readonly related: {
        /**
         * Retrieves the specific version of a content item referenced by the Snapshot
         * @param id Content item id
         */
        snapshotContentItem: (id: string) => Promise<ContentItem>;
    };
}
