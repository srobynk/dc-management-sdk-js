import { AxiosRequestConfig } from 'axios';
import { HalClient } from './hal/services/HalClient';
import { HttpClient } from './http/HttpClient';
import { ContentItem } from './model/ContentItem';
import { ContentRepository } from './model/ContentRepository';
import { ContentType } from './model/ContentType';
import { ContentTypeSchema } from './model/ContentTypeSchema';
import { Edition } from './model/Edition';
import { Event } from './model/Event';
import { Folder } from './model/Folder';
import { Hub } from './model/Hub';
import { Page } from './model/Page';
import { Pageable } from './model/Pageable';
import { Snapshot } from './model/Snapshot';
import { AccessTokenProvider } from './oauth2/models/AccessTokenProvider';
import { OAuth2ClientCredentials } from './oauth2/models/OAuth2ClientCredentials';
/**
 * Configuration settings for Dynamic Content API client. You can optionally
 * override these values with environment specific values.
 */
export interface DynamicContentConfig {
    /**
     * URL used to connect to the Amplience Dynamic Content API.
     * This property defaults to 'https://api.amplience.net/v2/content' if not provided
     */
    apiUrl?: string;
    /**
     * URL used to connect to the Amplience OAuth API.
     * This property defaults to 'https://auth.adis.ws' if not provided
     */
    authUrl?: string;
}
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
export declare class DynamicContent {
    /**
     * Hub Resources
     */
    readonly hubs: {
        /**
         * Retrieve a hub resource by id
         * @param id hub id, previously generated on creation
         */
        get: (id: string) => Promise<Hub>;
        /**
         * Retrieve a list of hub resources shared with your client credentials.
         * @param options Pagination options
         */
        list: (options?: Pageable) => Promise<Page<Hub>>;
    };
    readonly contentTypeSchemas: {
        /**
         * Gets a content type schemas
         * @param id ContentTypeSchema id
         */
        get: (id: string) => Promise<ContentTypeSchema>;
        /**
         * Gets a content type schemas
         * @param id ContentTypeSchema id
         * @param version Version
         */
        getByVersion: (id: string, version: number) => Promise<ContentTypeSchema>;
    };
    /**
     * Content Repository Resources
     */
    readonly contentRepositories: {
        /**
         * Retrieve a content repository resource by id
         * @param id content repository id, previously generated on creation
         */
        get: (id: string) => Promise<ContentRepository>;
    };
    /**
     * Content Item Resources
     */
    readonly contentItems: {
        /**
         * Retrieve a content item resource by id
         * @param id content item id, previously generated on creation
         */
        get: (id: string) => Promise<ContentItem>;
    };
    /**
     * Content Type Resources
     */
    readonly contentTypes: {
        /**
         * Retrieve a content type resource by id
         * @param id content type id, previously generated on creation
         */
        get: (id: string) => Promise<ContentType>;
    };
    readonly folders: {
        /**
         * Retrieve a folder resource by id
         * @param id folder id, previously generated on creation
         */
        get: (id: string) => Promise<Folder>;
    };
    /**
     * Snapshot Resources
     */
    readonly snapshots: {
        /**
         * Retrieve a snapshot resource by id
         * @param id snapshot id, previously generated on creation
         */
        get: (id: string) => Promise<Snapshot>;
    };
    /**
     * Event Resources
     */
    readonly events: {
        /**
         * Retrieve an event resource by id
         * @param id event id, previously generated on creation
         */
        get: (id: string) => Promise<Event>;
    };
    /**
     * Edition Resources
     */
    readonly editions: {
        /**
         * Retrieve an edition resource by id
         * @param id edition id, previously generated on creation
         */
        get: (id: string) => Promise<Edition>;
    };
    /**
     * @hidden
     */
    private client;
    /**
     * Creates a Dynamic Content API client instance. You must provide credentials that will
     * be used to authenticate with the API.
     *
     * @param clientCredentials Api credentials used to generate an authentication token
     * @param dcConfig Optional configuration settings for Dynamic Content
     * @param clientConfig Optional request settings, can be used to provide proxy settings, add interceptors etc
     */
    constructor(clientCredentials: OAuth2ClientCredentials, dcConfig?: DynamicContentConfig, httpClient?: AxiosRequestConfig | HttpClient);
    protected createTokenClient(dcConfig: DynamicContentConfig, clientCredentials: OAuth2ClientCredentials, httpClient: HttpClient): AccessTokenProvider;
    protected createResourceClient(dcConfig: DynamicContentConfig, tokenProvider: AccessTokenProvider, httpClient: HttpClient): HalClient;
}
