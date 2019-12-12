import { JsonTree } from '../../utils/JsonTree';
import { ContentLink } from '../models/ContentLink';
/**
 * Utility to assist parsing and generating Content Item graphs.
 */
export class ContentGraph {
    /**
     * Extract content-link references from the body of a Content Item
     * @param content
     * @returns {IContentLink[]}
     */
    static extractLinks(content) {
        const result = new Array();
        JsonTree.visit(content, (value) => {
            if (ContentLink.isContentLink(value)) {
                result.push(value);
            }
        });
        return result;
    }
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
    static async deepCopy(ids, contentItemProvider, contentItemPicker) {
        const cache = {};
        const mapping = {};
        const processItem = (id) => {
            if (cache[id]) {
                return cache[id];
            }
            else {
                return (cache[id] = contentItemProvider(id)
                    .then(item => {
                    // visit children
                    const links = ContentGraph.extractLinks(item.body);
                    return Promise.all(links.map(link => processItem(link.id))).then(() => item);
                })
                    .then(item => {
                    // Rewrite the body so that linked items point to the id of the copy
                    const body = JSON.parse(JSON.stringify(item.body));
                    const links = ContentGraph.extractLinks(body);
                    for (const link of links) {
                        link.id = mapping[link.id];
                    }
                    // Let the application choose how to copy the item
                    const newItem = contentItemPicker(item, body);
                    newItem.then(newItemValue => {
                        mapping[item.id] = newItemValue.id;
                    });
                    return newItem;
                }));
            }
        };
        await Promise.all(ids.map(id => processItem(id)));
        return mapping;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudEdyYXBoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb250ZW50L3NlcnZpY2VzL0NvbnRlbnRHcmFwaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBdUIsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RTs7R0FFRztBQUNILE1BQU07SUFDSjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFZO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUF1QixDQUFDO1FBQ2hELFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDckMsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQTRCLENBQUMsQ0FBQzthQUMzQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTZCRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUMxQixHQUFhLEVBQ2IsbUJBQXlELEVBQ3pELGlCQUd5QjtRQUV6QixNQUFNLEtBQUssR0FBUSxFQUFFLENBQUM7UUFDdEIsTUFBTSxPQUFPLEdBQVEsRUFBRSxDQUFDO1FBRXhCLE1BQU0sV0FBVyxHQUFHLENBQUMsRUFBVSxFQUF3QixFQUFFO1lBQ3ZELElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNiLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxDQUFDO3FCQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ1gsaUJBQWlCO29CQUNqQixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzlELEdBQUcsRUFBRSxDQUFDLElBQUksQ0FDWCxDQUFDO2dCQUNKLENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ1gsb0VBQW9FO29CQUNwRSxNQUFNLElBQUksR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3hELE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlDLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO3dCQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQzVCO29CQUVELGtEQUFrRDtvQkFDbEQsTUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO3dCQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUM7b0JBQ3JDLENBQUMsQ0FBQyxDQUFDO29CQUNILE9BQU8sT0FBTyxDQUFDO2dCQUNqQixDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1A7UUFDSCxDQUFDLENBQUM7UUFFRixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGIn0=