import { DefaultHalClient } from './hal/services/HalClient';
import { AxiosHttpClient } from './http/AxiosHttpClient';
import { ContentItem } from './model/ContentItem';
import { ContentRepository } from './model/ContentRepository';
import { ContentType } from './model/ContentType';
import { ContentTypeSchema } from './model/ContentTypeSchema';
import { Edition } from './model/Edition';
import { Event } from './model/Event';
import { Folder } from './model/Folder';
import { Hub, HubsPage } from './model/Hub';
import { Snapshot } from './model/Snapshot';
import { OAuth2Client } from './oauth2/services/OAuth2Client';
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
export class DynamicContent {
    /**
     * Creates a Dynamic Content API client instance. You must provide credentials that will
     * be used to authenticate with the API.
     *
     * @param clientCredentials Api credentials used to generate an authentication token
     * @param dcConfig Optional configuration settings for Dynamic Content
     * @param clientConfig Optional request settings, can be used to provide proxy settings, add interceptors etc
     */
    constructor(clientCredentials, dcConfig, httpClient) {
        /**
         * Hub Resources
         */
        this.hubs = {
            /**
             * Retrieve a hub resource by id
             * @param id hub id, previously generated on creation
             */
            get: (id) => this.client.fetchResource(`/hubs/${id}`, Hub),
            /**
             * Retrieve a list of hub resources shared with your client credentials.
             * @param options Pagination options
             */
            list: (options) => this.client.fetchLinkedResource({ href: '/hubs{?page,size}', templated: true }, options, HubsPage)
        };
        this.contentTypeSchemas = {
            /**
             * Gets a content type schemas
             * @param id ContentTypeSchema id
             */
            get: (id) => this.client.fetchResource(`/content-type-schemas/${id}`, ContentTypeSchema),
            /**
             * Gets a content type schemas
             * @param id ContentTypeSchema id
             * @param version Version
             */
            getByVersion: (id, version) => this.client.fetchResource(`/content-type-schemas/${id}/${version}`, ContentTypeSchema)
        };
        /**
         * Content Repository Resources
         */
        this.contentRepositories = {
            /**
             * Retrieve a content repository resource by id
             * @param id content repository id, previously generated on creation
             */
            get: (id) => this.client.fetchResource(`/content-repositories/${id}`, ContentRepository)
        };
        /**
         * Content Item Resources
         */
        this.contentItems = {
            /**
             * Retrieve a content item resource by id
             * @param id content item id, previously generated on creation
             */
            get: (id) => this.client.fetchResource(`/content-items/${id}`, ContentItem)
        };
        /**
         * Content Type Resources
         */
        this.contentTypes = {
            /**
             * Retrieve a content type resource by id
             * @param id content type id, previously generated on creation
             */
            get: (id) => this.client.fetchResource(`/content-types/${id}`, ContentType)
        };
        this.folders = {
            /**
             * Retrieve a folder resource by id
             * @param id folder id, previously generated on creation
             */
            get: (id) => this.client.fetchResource(`/folders/${id}`, Folder)
        };
        /**
         * Snapshot Resources
         */
        this.snapshots = {
            /**
             * Retrieve a snapshot resource by id
             * @param id snapshot id, previously generated on creation
             */
            get: (id) => this.client.fetchResource(`/snapshots/${id}`, Snapshot)
        };
        /**
         * Event Resources
         */
        this.events = {
            /**
             * Retrieve an event resource by id
             * @param id event id, previously generated on creation
             */
            get: (id) => this.client.fetchResource(`/events/${id}`, Event)
        };
        /**
         * Edition Resources
         */
        this.editions = {
            /**
             * Retrieve an edition resource by id
             * @param id edition id, previously generated on creation
             */
            get: (id) => this.client.fetchResource(`/editions/${id}`, Edition)
        };
        dcConfig = dcConfig || {};
        dcConfig.apiUrl = dcConfig.apiUrl || 'https://api.amplience.net/v2/content';
        dcConfig.authUrl = dcConfig.authUrl || 'https://auth.adis.ws';
        let httpClientInstance;
        if (httpClient !== undefined && 'request' in httpClient) {
            httpClientInstance = httpClient;
        }
        else {
            httpClientInstance = new AxiosHttpClient(httpClient === undefined ? {} : httpClient);
        }
        const tokenClient = this.createTokenClient(dcConfig, clientCredentials, httpClientInstance);
        this.client = this.createResourceClient(dcConfig, tokenClient, httpClientInstance);
    }
    createTokenClient(dcConfig, clientCredentials, httpClient) {
        return new OAuth2Client(clientCredentials, {
            authUrl: dcConfig.authUrl
        }, httpClient);
    }
    createResourceClient(dcConfig, tokenProvider, httpClient) {
        return new DefaultHalClient(dcConfig.apiUrl, httpClient, tokenProvider);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0NvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0R5bmFtaWNDb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBb0I5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNHO0FBQ0gsTUFBTTtJQXdJSjs7Ozs7OztPQU9HO0lBQ0gsWUFDRSxpQkFBMEMsRUFDMUMsUUFBK0IsRUFDL0IsVUFBNEM7UUFsSjlDOztXQUVHO1FBQ2EsU0FBSSxHQUFHO1lBQ3JCOzs7ZUFHRztZQUNILEdBQUcsRUFBRSxDQUFDLEVBQVUsRUFBZ0IsRUFBRSxDQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFF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