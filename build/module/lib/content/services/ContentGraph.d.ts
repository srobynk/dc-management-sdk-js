import { ContentItem } from '../../model/ContentItem';
import { ContentLinkInstance } from '../models/ContentLink';
/**
 * Utility to assist parsing and generating Content Item graphs.
 */
export declare class ContentGraph {
    /**
     * Extract content-link references from the body of a Content Item
     * @param content
     * @returns {IContentLink[]}
     */
    static extractLinks(content: any): ContentLinkInstance[];
    /**
     * Utility to help deeply copy a content graph. Each content item and its dependencies
     * are visited using the contentItemProvider function to load the source item. The
     * contentItemPicker is invoked for every Content Item giving your application an opportunity
     * to either save the item to a new location (copy) or return the original (reference).
     *
     * The JSON body provided to the contentItemPicker function will have had any Content Links
     * remapped to the newly saved Content Item.
     *
     * ```typescript
     * const targetRepository = await client.contentRepositories.get('5b32377b4cedfd01c4503691');
     * const contentIds = ['a87fd535-fb25-44ee-b687-0db72bbab721'];
     *
     * const idMap = await ContentGraph.deepCopy(
     *  contentIds,
     *  client.contentItems.get,
     *  function(item:ContentItem, body:any) {
     *      return targetRepository.related.contentItems.create(new ContentItem({
     *        label: item.label,
     *        body: body
     *      }));
     *    }
     * );
     * ```
     *
     * @param ids Ids of the root content items to copy
     * @param contentItemProvider Function that loads content items by id
     * @param contentItemPicker Function that creates or returns an existing content item that should be used in place of the original
     * @returns {Promise<any>} Mapping of old content item ids to the newly created ids
     */
    static deepCopy(ids: string[], contentItemProvider: (id: string) => Promise<ContentItem>, contentItemPicker: (original: ContentItem, body: any) => Promise<ContentItem>): Promise<any>;
}
