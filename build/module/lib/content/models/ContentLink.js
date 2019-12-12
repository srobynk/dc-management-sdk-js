/**
 * Utility to assist parsing the body of a content item
 */
export class ContentLink {
    /**
     * Detects if the provided JSON node is a content link
     * @param json JSON node to test
     * @returns boolean <tt>true</tt> if the json node is a content link, otherwise <tt>false</tt>
     */
    static isContentLink(json) {
        return json && json._meta && json._meta.schema === ContentLink.SCHEMA;
    }
}
ContentLink.SCHEMA = 'http://bigcontent.io/cms/schema/v1/core#/definitions/content-link';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudExpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbnRlbnQvbW9kZWxzL0NvbnRlbnRMaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBOztHQUVHO0FBQ0gsTUFBTTtJQUlKOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQVM7UUFDbkMsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ3hFLENBQUM7O0FBVnNCLGtCQUFNLEdBQzNCLG1FQUFtRSxDQUFDIn0=