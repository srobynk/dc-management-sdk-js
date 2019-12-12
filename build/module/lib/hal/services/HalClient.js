import { HttpError } from '../../http/HttpError';
import { HttpMethod } from '../../http/HttpRequest';
import { combineURLs } from '../../utils/URL';
import { CURIEs } from './CURIEs';
/**
 * @hidden
 */
export class DefaultHalClient {
    constructor(baseUrl, httpClient, tokenProvider) {
        this.baseUrl = baseUrl;
        this.httpClient = httpClient;
        this.tokenProvider = tokenProvider;
    }
    async fetchLinkedResource(link, params, resourceConstructor) {
        let href = link.href;
        if (link.templated) {
            href = CURIEs.expand(href, params);
        }
        return this.fetchResource(href, resourceConstructor);
    }
    async fetchResource(path, resourceConstructor) {
        const response = await this.invoke({
            method: HttpMethod.GET,
            url: path
        });
        return this.parse(response.data, resourceConstructor);
    }
    async createLinkedResource(link, params, resource, resourceConstructor) {
        let href = link.href;
        if (link.templated) {
            href = CURIEs.expand(href, params);
        }
        return this.createResource(href, resource, resourceConstructor);
    }
    async createResource(path, resource, resourceConstructor) {
        const response = await this.invoke({
            data: this.serialize(resource),
            method: HttpMethod.POST,
            url: path
        });
        return this.parse(response.data, resourceConstructor);
    }
    async updateResource(path, resource, resourceConstructor) {
        const response = await this.invoke({
            data: this.serialize(resource),
            method: HttpMethod.PATCH,
            url: path
        });
        return this.parse(response.data, resourceConstructor);
    }
    async updateLinkedResource(link, params, resource, resourceConstructor) {
        let href = link.href;
        if (link.templated) {
            href = CURIEs.expand(href, params);
        }
        return this.updateResource(href, resource, resourceConstructor);
    }
    async deleteLinkedResource(link, params) {
        let href = link.href;
        if (link.templated) {
            href = CURIEs.expand(href, params);
        }
        return this.deleteResource(href);
    }
    async deleteResource(path) {
        const response = await this.invoke({
            method: HttpMethod.DELETE,
            url: path
        });
        return Promise.resolve();
    }
    async performActionThatReturnsResource(link, params, data, resourceConstructor) {
        let href = link.href;
        if (link.templated) {
            href = CURIEs.expand(href, params);
        }
        const response = await this.invoke({
            data: this.serialize(data),
            method: HttpMethod.POST,
            url: href
        });
        return this.parse(response.data, resourceConstructor);
    }
    parse(data, resourceConstructor) {
        const instance = new resourceConstructor(data);
        instance.setClient(this);
        return instance;
    }
    serialize(data) {
        return JSON.parse(JSON.stringify(data));
    }
    async invoke(request) {
        const token = await this.tokenProvider.getToken();
        const fullRequest = {
            data: request.data,
            headers: {
                Authorization: 'bearer ' + token.access_token
            },
            method: request.method,
            url: combineURLs(this.baseUrl, request.url)
        };
        return this.httpClient.request(fullRequest).then(response => {
            if (response.status >= 200 && response.status < 300) {
                if (typeof response.data === 'string') {
                    response.data = JSON.parse(response.data);
                }
                return response;
            }
            else {
                throw new HttpError(`Request failed with status code ${response.status}: ${JSON.stringify(response.data)}`, fullRequest, response);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFsQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9oYWwvc2VydmljZXMvSGFsQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sd0JBQXdCLENBQUM7QUFHakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUE4RGxDOztHQUVHO0FBQ0gsTUFBTTtJQUNKLFlBQ1UsT0FBZSxFQUNmLFVBQXNCLEVBQ3RCLGFBQWtDO1FBRmxDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUN6QyxDQUFDO0lBRUcsS0FBSyxDQUFDLG1CQUFtQixDQUM5QixJQUFhLEVBQ2IsTUFBVyxFQUNYLG1CQUE4QztRQUU5QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDcEM7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLEtBQUssQ0FBQyxhQUFhLENBQ3hCLElBQVksRUFDWixtQkFBOEM7UUFFOUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxVQUFVLENBQUMsR0FBRztZQUN0QixHQUFHLEVBQUUsSUFBSTtTQUNWLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUss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