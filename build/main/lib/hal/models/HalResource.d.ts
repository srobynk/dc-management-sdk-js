import { HalClient } from '../services/HalClient';
import { HalLink } from './HalLink';
/**
 * @hidden
 */
export interface HalResourceConstructor<T extends HalResource> {
    new (data?: any): T;
}
/**
 * Base class for all Resources
 */
export declare class HalResource {
    _links?: Map<string, HalLink>;
    /**
     * @hidden
     */
    protected _embedded: Map<string, any>;
    /**
     * @hidden
     */
    protected client?: HalClient;
    /**
     * Creates a new instance of the resource.
     * If data is provided it will be parsed as if it had
     * come from the remote api.
     * @param data
     */
    constructor(data?: any);
    /**
     * Parses the data returned by the API into the model class
     * @hidden
     */
    parse(data: any): void;
    /**
     * Returns a copy of this resource's attributes excluding links and client references
     */
    toJSON(): any;
    /**
     * Returns a copy of this resource's attributes excluding links and client references
     * @deprecated
     */
    toJson(): any;
    /**
     * Set automatically by the HalClient when the resource is created.
     * If this is not set the resource will be unable to resolve related
     * resources and actions.
     *
     * @hidden
     */
    setClient(client: HalClient): void;
    /**
     * Converts an _embedded collection into an Array of
     * Resource instances.
     * @hidden
     */
    protected parseEmbedded<T extends HalResource>(name: string, resourceConstructor: HalResourceConstructor<T>): T[];
    /**
     * GET a linked resource
     * @hidden
     */
    protected fetchLinkedResource<T extends HalResource>(name: string, params: any, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    /**
     * POST / CREATE a new resource
     * @hidden
     */
    protected createLinkedResource<T extends HalResource>(name: string, params: any, resource: T, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    /**
     * POST to an action endpoint and get a resource response
     * @hidden
     */
    protected performActionThatReturnsResource<T extends HalResource>(name: string, params: any, data: any, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    /**
     * DELETE the current resource
     * @hidden
     */
    protected deleteResource(): Promise<void>;
    /**
     * DELETE a linked resource
     * @hidden
     */
    protected deleteLinkedResource(name: string, params: any): Promise<void>;
    /**
     * PATCH the current resource
     * @hidden
     */
    protected updateResource<T extends HalResource>(resource: T, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    /**
     * PATCH a linked resource
     * @hidden
     */
    protected updateLinkedResource<T extends HalResource>(name: string, params: any, resource: T, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    private withHalLink;
}
