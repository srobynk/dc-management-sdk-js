import { HalLink } from '../models/HalLink';
/**
 * @hidden
 */
export interface HalLiteral {
    _links: {
        [name: string]: HalLink;
    };
}
/**
 * @hidden
 */
export declare class HalMockResource {
    private resource;
    private mocks;
    constructor(resource: HalLiteral, mocks: HalMocks);
    nestedResource(linkName: string, args: any, resource: HalLiteral): this;
    nestedCollection(linkName: string, args: any, type: string, values: HalLiteral[]): this;
    nestedCreateResource(linkName: string, args: any, resource: HalLiteral): this;
    nestedUpdateResource(linkName: string, args: any, resource: HalLiteral): this;
    nestedDelete(linkName: string, args: any): this;
}
/**
 * @hidden
 */
export declare class HalMocks {
    mockInstance: any;
    constructor(mockInstance: any);
    resource(resource: HalLiteral, url?: string): HalMockResource;
    collection(url: string, type: string, values: HalLiteral[]): void;
    createResource(url: string, resource: HalLiteral): HalMockResource;
    updateResource(url: string, resource: HalLiteral): HalMockResource;
    deleteResource(url: string): void;
}
