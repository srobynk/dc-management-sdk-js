import { HalResource } from '../hal/models/HalResource';
import { ContentItem } from './ContentItem';
import { Folder } from './Folder';
import { Page } from './Page';
import { Pageable } from './Pageable';
import { Sortable } from './Sortable';
import { Status } from './Status';
/**
 * Represents the association of a content type to a repository
 */
export interface ContentRepositoryContentType {
    /**
     * Id of the content type
     */
    hubContentTypeId?: string;
    /**
     * URI of the content type
     */
    contentTypeUri?: string;
}
/**
 * Class representing the [Content Repository](https://api.amplience.net/v2/content/docs/api/index.html#resources-content-repositories) resource.
 * Content repositories are containers where content can be stored.
 */
export declare class ContentRepository extends HalResource {
    /**
     * Unique id generated on creation
     */
    id?: string;
    /**
     * Programmatic friendly name which must be unique
     * within a single hub
     */
    name?: string;
    /**
     * Friendly label for the content repository
     */
    label?: string;
    /**
     * Lifecycle status
     */
    status?: Status;
    /**
     * List of features enabled on the content repository, e.g. <tt>slots</tt>
     */
    features?: string[];
    /**
     * Content Types enabled on this repository
     */
    contentTypes?: ContentRepositoryContentType[];
    /**
     * Set of locales that are assigned to this repository
     */
    itemLocales?: string[];
    /**
     * Resources and actions related to a Content Repository
     */
    readonly related: {
        folders: {
            /**
             * Retrieves the list of top-level folders within this Content Repository
             */
            list: (options?: Pageable) => Promise<Page<Folder>>;
            /**
             * Creates a folder in the Content Repository
             * @param resource The new Folder to create
             */
            create: (resource: Folder) => Promise<Folder>;
        };
        contentItems: {
            /**
             * Creates a content item inside the repository
             * @param resource The new content item to create
             */
            create: (resource: ContentItem) => Promise<ContentItem>;
            /**
             * Retrieves a list of Content Items stored within this Content Repository
             */
            list: (options?: Pageable & Sortable) => Promise<Page<ContentItem>>;
        };
        contentTypes: {
            /**
             * Assigns a content type to the repository
             */
            assign: (contentTypeId: string) => Promise<ContentRepository>;
            /**
             * Unassign a content type from this repository
             */
            unassign: (contentTypeId: string) => Promise<void>;
        };
    };
}
/**
 * @hidden
 */
export declare class ContentRepositoriesPage extends Page<ContentRepository> {
    constructor(data?: any);
}
