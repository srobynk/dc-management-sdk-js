"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Utility to assist parsing the body of a content item
 */
var ContentLink = /** @class */ (function () {
    function ContentLink() {
    }
    /**
     * Detects if the provided JSON node is a content link
     * @param json JSON node to test
     * @returns boolean <tt>true</tt> if the json node is a content link, otherwise <tt>false</tt>
     */
    ContentLink.isContentLink = function (json) {
        return json && json._meta && json._meta.schema === ContentLink.SCHEMA;
    };
    ContentLink.SCHEMA = 'http://bigcontent.io/cms/schema/v1/core#/definitions/content-link';
    return ContentLink;
}());
exports.ContentLink = ContentLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudExpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbnRlbnQvbW9kZWxzL0NvbnRlbnRMaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUE7O0dBRUc7QUFDSDtJQUFBO0lBWUEsQ0FBQztJQVJDOzs7O09BSUc7SUFDVyx5QkFBYSxHQUEzQixVQUE0QixJQUFTO1FBQ25DLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUN4RSxDQUFDO0lBVnNCLGtCQUFNLEdBQzNCLG1FQUFtRSxDQUFDO0lBVXhFLGtCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksa0NBQVcifQ==