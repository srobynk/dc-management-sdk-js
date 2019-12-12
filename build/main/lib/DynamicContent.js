"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HalClient_1 = require("./hal/services/HalClient");
var AxiosHttpClient_1 = require("./http/AxiosHttpClient");
var ContentItem_1 = require("./model/ContentItem");
var ContentRepository_1 = require("./model/ContentRepository");
var ContentType_1 = require("./model/ContentType");
var ContentTypeSchema_1 = require("./model/ContentTypeSchema");
var Edition_1 = require("./model/Edition");
var Event_1 = require("./model/Event");
var Folder_1 = require("./model/Folder");
var Hub_1 = require("./model/Hub");
var Snapshot_1 = require("./model/Snapshot");
var OAuth2Client_1 = require("./oauth2/services/OAuth2Client");
/**
 * Amplience Dynamic Content API client.
 *
 * Your application should avoid where possible creating a new client for each request.
 * Authentication tokens are cached by the client and only re-requested when
 * they expire, allowing performance to be improved by reusing the client across requests.
 *
 * If multiple sets of credentials are required your application should create one client
 * per credential set.
 *
 * Example:
 *
 * ```typescript
 * const client = new DynamicContent({
 *    client_id: process.env.CLIENT_ID,
 *    client_secret: process.env.CLIENT_SECRET
 * });
 *
 * const repository = await client.contentRepositories.get('<REPO-ID>');
 *
 * const contentItem = new ContentItem();
 * contentItem.label = 'Homepage Article';
 * contentItem.body = {
 *      _meta: {
 *          schema: "https://github.com/techiedarren/dc-examples/blob/master/content-types/blocks/text-block.json"
 *      },
 *      paragraphs: [
 *          "Example article text..."
 *      ]
 * };
 *
 * await repository.related.contentItems.create(contentItem);
 * ```
 */
var DynamicContent = /** @class */ (function () {
    /**
     * Creates a Dynamic Content API client instance. You must provide credentials that will
     * be used to authenticate with the API.
     *
     * @param clientCredentials Api credentials used to generate an authentication token
     * @param dcConfig Optional configuration settings for Dynamic Content
     * @param clientConfig Optional request settings, can be used to provide proxy settings, add interceptors etc
     */
    function DynamicContent(clientCredentials, dcConfig, httpClient) {
        var _this = this;
        /**
         * Hub Resources
         */
        this.hubs = {
            /**
             * Retrieve a hub resource by id
             * @param id hub id, previously generated on creation
             */
            get: function (id) {
                return _this.client.fetchResource("/hubs/" + id, Hub_1.Hub);
            },
            /**
             * Retrieve a list of hub resources shared with your client credentials.
             * @param options Pagination options
             */
            list: function (options) {
                return _this.client.fetchLinkedResource({ href: '/hubs{?page,size}', templated: true }, options, Hub_1.HubsPage);
            }
        };
        this.contentTypeSchemas = {
            /**
             * Gets a content type schemas
             * @param id ContentTypeSchema id
             */
            get: function (id) {
                return _this.client.fetchResource("/content-type-schemas/" + id, ContentTypeSchema_1.ContentTypeSchema);
            },
            /**
             * Gets a content type schemas
             * @param id ContentTypeSchema id
             * @param version Version
             */
            getByVersion: function (id, version) {
                return _this.client.fetchResource("/content-type-schemas/" + id + "/" + version, ContentTypeSchema_1.ContentTypeSchema);
            }
        };
        /**
         * Content Repository Resources
         */
        this.contentRepositories = {
            /**
             * Retrieve a content repository resource by id
             * @param id content repository id, previously generated on creation
             */
            get: function (id) {
                return _this.client.fetchResource("/content-repositories/" + id, ContentRepository_1.ContentRepository);
            }
        };
        /**
         * Content Item Resources
         */
        this.contentItems = {
            /**
             * Retrieve a content item resource by id
             * @param id content item id, previously generated on creation
             */
            get: function (id) {
                return _this.client.fetchResource("/content-items/" + id, ContentItem_1.ContentItem);
            }
        };
        /**
         * Content Type Resources
         */
        this.contentTypes = {
            /**
             * Retrieve a content type resource by id
             * @param id content type id, previously generated on creation
             */
            get: function (id) {
                return _this.client.fetchResource("/content-types/" + id, ContentType_1.ContentType);
            }
        };
        this.folders = {
            /**
             * Retrieve a folder resource by id
             * @param id folder id, previously generated on creation
             */
            get: function (id) {
                return _this.client.fetchResource("/folders/" + id, Folder_1.Folder);
            }
        };
        /**
         * Snapshot Resources
         */
        this.snapshots = {
            /**
             * Retrieve a snapshot resource by id
             * @param id snapshot id, previously generated on creation
             */
            get: function (id) {
                return _this.client.fetchResource("/snapshots/" + id, Snapshot_1.Snapshot);
            }
        };
        /**
         * Event Resources
         */
        this.events = {
            /**
             * Retrieve an event resource by id
             * @param id event id, previously generated on creation
             */
            get: function (id) {
                return _this.client.fetchResource("/events/" + id, Event_1.Event);
            }
        };
        /**
         * Edition Resources
         */
        this.editions = {
            /**
             * Retrieve an edition resource by id
             * @param id edition id, previously generated on creation
             */
            get: function (id) {
                return _this.client.fetchResource("/editions/" + id, Edition_1.Edition);
            }
        };
        dcConfig = dcConfig || {};
        dcConfig.apiUrl = dcConfig.apiUrl || 'https://api.amplience.net/v2/content';
        dcConfig.authUrl = dcConfig.authUrl || 'https://auth.adis.ws';
        var httpClientInstance;
        if (httpClient !== undefined && 'request' in httpClient) {
            httpClientInstance = httpClient;
        }
        else {
            httpClientInstance = new AxiosHttpClient_1.AxiosHttpClient(httpClient === undefined ? {} : httpClient);
        }
        var tokenClient = this.createTokenClient(dcConfig, clientCredentials, httpClientInstance);
        this.client = this.createResourceClient(dcConfig, tokenClient, httpClientInstance);
    }
    DynamicContent.prototype.createTokenClient = function (dcConfig, clientCredentials, httpClient) {
        return new OAuth2Client_1.OAuth2Client(clientCredentials, {
            authUrl: dcConfig.authUrl
        }, httpClient);
    };
    DynamicContent.prototype.createResourceClient = function (dcConfig, tokenProvider, httpClient) {
        return new HalClient_1.DefaultHalClient(dcConfig.apiUrl, httpClient, tokenProvider);
    };
    return DynamicContent;
}());
exports.DynamicContent = DynamicContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0NvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0R5bmFtaWNDb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0RBQXVFO0FBQ3ZFLDBEQUF5RDtBQUV6RCxtREFBa0Q7QUFDbEQsK0RBQThEO0FBQzlELG1EQUFrRDtBQUNsRCwrREFBOEQ7QUFDOUQsMkNBQTBDO0FBQzFDLHVDQUFzQztBQUN0Qyx5Q0FBd0M7QUFDeEMsbUNBQTRDO0FBRzVDLDZDQUE0QztBQUc1QywrREFBOEQ7QUFvQjlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSDtJQXdJRTs7Ozs7OztPQU9HO0lBQ0gsd0JBQ0UsaUJBQTBDLEVBQzFDLFFBQStCLEVBQy9CLFVBQTRDO1FBSDlDLGlCQTZCQztRQTVLRDs7V0FFRztRQUNhLFNBQUksR0FBRztZQUNyQjs7O2VBR0c7WUFDSCxHQUFHLEVBQUUsVUFBQyxFQUFVO2dCQUNkLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBUyxFQUFJLEVBQUUsU0FBRyxDQUFDO1lBQTdDLENBQTZDO1lBRS9DOzs7ZUFHRztZQUNILElBQUksRUFBRSxVQUFDLE9BQWtCO2dCQUN2QixPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQzdCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFDOUMsT0FBTyxFQUNQLGNBQVEsQ0FDVDtZQUpELENBSUM7U0FDSixDQUFDO1FBRWMsdUJBQWtCLEdBQUc7WUFDbkM7OztlQUdHO1lBQ0gsR0FBRyxFQUFFLFVBQUMsRUFBVTtnQkFDZCxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUN2QiwyQkFBeUIsRUFBSSxFQUM3QixxQ0FBaUIsQ0FDbEI7WUFIRCxDQUdDO1lBRUg7Ozs7ZUFJRztZQUNILFlBQVksRUFBRSxVQUFDLEVB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