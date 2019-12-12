/**
 * Reference to a Content Item
 */
export interface ContentLinkInstance {
    id: string;
    contentType: string;
}
/**
 * Utility to assist parsing the body of a content item
 */
export declare class ContentLink {
    static readonly SCHEMA: string;
    /**
     * Detects if the provided JSON node is a content link
     * @param json JSON node to test
     * @returns boolean <tt>true</tt> if the json node is a content link, otherwise <tt>false</tt>
     */
    static isContentLink(json: any): boolean;
}
