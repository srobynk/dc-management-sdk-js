import { HttpClient } from '../../http/HttpClient';
import { HttpRequest } from '../../http/HttpRequest';
import { HttpResponse } from '../../http/HttpResponse';
import { AccessTokenProvider } from '../../oauth2/models/AccessTokenProvider';
import { HalLink } from '../models/HalLink';
import { HalResource, HalResourceConstructor } from '../models/HalResource';
/**
 * @hidden
 */
export interface HalClient {
    fetchLinkedResource<T extends HalResource>(link: HalLink, params: any, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    fetchResource<T extends HalResource>(path: string, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    createLinkedResource<T extends HalResource>(link: HalLink, params: any, resource: T, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    performActionThatReturnsResource<T extends HalResource>(link: HalLink, params: any, data: any, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    createResource<T extends HalResource>(path: string, resource: T, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    updateResource<T extends HalResource>(path: string, resource: T, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    updateLinkedResource<T extends HalResource>(link: HalLink, params: any, resource: T, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    deleteLinkedResource(link: HalLink, params: any): Promise<void>;
    deleteResource(path: string): Promise<void>;
    parse<T extends HalResource>(data: any, resourceConstructor: HalResourceConstructor<T>): T;
    serialize<T>(data: T): any;
}
/**
 * @hidden
 */
export declare class DefaultHalClient implements HalClient {
    private baseUrl;
    private httpClient;
    private tokenProvider;
    constructor(baseUrl: string, httpClient: HttpClient, tokenProvider: AccessTokenProvider);
    fetchLinkedResource<T extends HalResource>(link: HalLink, params: any, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    fetchResource<T extends HalResource>(path: string, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    createLinkedResource<T extends HalResource>(link: HalLink, params: any, resource: T, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    createResource<T extends HalResource>(path: string, resource: T, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    updateResource<T extends HalResource>(path: string, resource: T, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    updateLinkedResource<T extends HalResource>(link: HalLink, params: any, resource: T, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    deleteLinkedResource(link: HalLink, params: any): Promise<void>;
    deleteResource(path: string): Promise<void>;
    performActionThatReturnsResource<T extends HalResource>(link: HalLink, params: any, data: any, resourceConstructor: HalResourceConstructor<T>): Promise<T>;
    parse<T extends HalResource>(data: any, resourceConstructor: HalResourceConstructor<T>): T;
    serialize<T>(data: T): any;
    protected invoke(request: HttpRequest): Promise<HttpResponse>;
}
