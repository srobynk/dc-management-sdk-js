import { HalResource } from '../hal/models/HalResource';
import { ContentItem } from './ContentItem';
import { ContentRepository } from './ContentRepository';
import { Page } from './Page';
export declare class Folder extends HalResource {
    id?: string;
    name?: string;
    /**
     * Resources and actions related to a Folder
     */
    readonly related: {
        /**
         * Retrieves the ContentRepository this folder is stored in
         */
        contentRepository: () => Promise<ContentRepository>;
        folders: {
            /**
             * Retrieves the parent folder of this Folder
             */
            parent: () => Promise<Folder>;
            /**
             * Retrieves the list of sub-folders contained within this Folder
             */
            list: () => Promise<Page<Folder>>;
            /**
             * Creates a folder beneath the folder
             * @param resource The new Folder to create
             */
            create: (resource: Folder) => Promise<Folder>;
        };
        contentItems: {
            /**
             * Retrieves a list of Content Items stored within this Folder
             */
            list: () => Promise<Page<ContentItem>>;
        };
    };
}
/**
 * @hidden
 */
export declare class FoldersPage extends Page<Folder> {
    constructor(data?: any);
}
