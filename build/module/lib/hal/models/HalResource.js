/**
 * Base class for all Resources
 */
export class HalResource {
    /**
     * Creates a new instance of the resource.
     * If data is provided it will be parsed as if it had
     * come from the remote api.
     * @param data
     */
    constructor(data) {
        if (data) {
            this.parse(data);
        }
    }
    /**
     * Parses the data returned by the API into the model class
     * @hidden
     */
    parse(data) {
        Object.assign(this, data);
    }
    /**
     * Returns a copy of this resource's attributes excluding links and client references
     */
    toJSON() {
        const result = Object.assign({}, this);
        delete result.client;
        delete result._links;
        delete result.related;
        return result;
    }
    /**
     * Returns a copy of this resource's attributes excluding links and client references
     * @deprecated
     */
    toJson() {
        return this.toJSON();
    }
    /**
     * Set automatically by the HalClient when the resource is created.
     * If this is not set the resource will be unable to resolve related
     * resources and actions.
     *
     * @hidden
     */
    setClient(client) {
        this.client = client;
    }
    /**
     * Converts an _embedded collection into an Array of
     * Resource instances.
     * @hidden
     */
    parseEmbedded(name, resourceConstructor) {
        if (this._embedded[name]) {
            return this._embedded[name].map(x => this.client.parse(x, resourceConstructor));
        }
        else {
            return [];
        }
    }
    /**
     * GET a linked resource
     * @hidden
     */
    fetchLinkedResource(name, params, resourceConstructor) {
        return this.withHalLink(name).then(([link, client]) => client.fetchLinkedResource(link, params, resourceConstructor));
    }
    /**
     * POST / CREATE a new resource
     * @hidden
     */
    createLinkedResource(name, params, resource, resourceConstructor) {
        return this.withHalLink(name).then(([link, client]) => client.createLinkedResource(link, params, resource, resourceConstructor));
    }
    /**
     * POST to an action endpoint and get a resource response
     * @hidden
     */
    performActionThatReturnsResource(name, params, data, resourceConstructor) {
        return this.withHalLink(name).then(([link, client]) => client.performActionThatReturnsResource(link, params, data, resourceConstructor));
    }
    /**
     * DELETE the current resource
     * @hidden
     */
    deleteResource() {
        return this.deleteLinkedResource('delete', {});
    }
    /**
     * DELETE a linked resource
     * @hidden
     */
    deleteLinkedResource(name, params) {
        return this.withHalLink(name).then(([link, client]) => client.deleteLinkedResource(link, params));
    }
    /**
     * PATCH the current resource
     * @hidden
     */
    updateResource(resource, resourceConstructor) {
        return this.updateLinkedResource('update', {}, resource, resourceConstructor);
    }
    /**
     * PATCH a linked resource
     * @hidden
     */
    updateLinkedResource(name, params, resource, resourceConstructor) {
        return this.withHalLink(name).then(([link, client]) => client.updateLinkedResource(link, params, resource, resourceConstructor));
    }
    withHalLink(name) {
        if (!this.client) {
            return Promise.reject(new Error('HalResource has no client'));
        }
        const link = this._links[name];
        if (!link) {
            return Promise.reject(`The ${name} action is not available, ensure you have permission to perform this action.`);
        }
        return Promise.resolve([link, this.client]);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFsUmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2hhbC9tb2RlbHMvSGFsUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7O0dBRUc7QUFDSCxNQUFNO0lBZUo7Ozs7O09BS0c7SUFDSCxZQUFZLElBQVU7UUFDcEIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxJQUFTO1FBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU07UUFDWCxNQUFNLE1BQU0sR0FBUSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDckIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3JCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN0QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTTtRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxTQUFTLENBQUMsTUFBaUI7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxhQUFhLENBQ3JCLElBQVksRUFDWixtQkFBOEM7UUFFOUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDbEMsSUFBSSxDQUFD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