"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base class for all Resources
 */
var HalResource = /** @class */ (function () {
    /**
     * Creates a new instance of the resource.
     * If data is provided it will be parsed as if it had
     * come from the remote api.
     * @param data
     */
    function HalResource(data) {
        if (data) {
            this.parse(data);
        }
    }
    /**
     * Parses the data returned by the API into the model class
     * @hidden
     */
    HalResource.prototype.parse = function (data) {
        Object.assign(this, data);
    };
    /**
     * Returns a copy of this resource's attributes excluding links and client references
     */
    HalResource.prototype.toJSON = function () {
        var result = Object.assign({}, this);
        delete result.client;
        delete result._links;
        delete result.related;
        return result;
    };
    /**
     * Returns a copy of this resource's attributes excluding links and client references
     * @deprecated
     */
    HalResource.prototype.toJson = function () {
        return this.toJSON();
    };
    /**
     * Set automatically by the HalClient when the resource is created.
     * If this is not set the resource will be unable to resolve related
     * resources and actions.
     *
     * @hidden
     */
    HalResource.prototype.setClient = function (client) {
        this.client = client;
    };
    /**
     * Converts an _embedded collection into an Array of
     * Resource instances.
     * @hidden
     */
    HalResource.prototype.parseEmbedded = function (name, resourceConstructor) {
        var _this = this;
        if (this._embedded[name]) {
            return this._embedded[name].map(function (x) {
                return _this.client.parse(x, resourceConstructor);
            });
        }
        else {
            return [];
        }
    };
    /**
     * GET a linked resource
     * @hidden
     */
    HalResource.prototype.fetchLinkedResource = function (name, params, resourceConstructor) {
        return this.withHalLink(name).then(function (_a) {
            var link = _a[0], client = _a[1];
            return client.fetchLinkedResource(link, params, resourceConstructor);
        });
    };
    /**
     * POST / CREATE a new resource
     * @hidden
     */
    HalResource.prototype.createLinkedResource = function (name, params, resource, resourceConstructor) {
        return this.withHalLink(name).then(function (_a) {
            var link = _a[0], client = _a[1];
            return client.createLinkedResource(link, params, resource, resourceConstructor);
        });
    };
    /**
     * POST to an action endpoint and get a resource response
     * @hidden
     */
    HalResource.prototype.performActionThatReturnsResource = function (name, params, data, resourceConstructor) {
        return this.withHalLink(name).then(function (_a) {
            var link = _a[0], client = _a[1];
            return client.performActionThatReturnsResource(link, params, data, resourceConstructor);
        });
    };
    /**
     * DELETE the current resource
     * @hidden
     */
    HalResource.prototype.deleteResource = function () {
        return this.deleteLinkedResource('delete', {});
    };
    /**
     * DELETE a linked resource
     * @hidden
     */
    HalResource.prototype.deleteLinkedResource = function (name, params) {
        return this.withHalLink(name).then(function (_a) {
            var link = _a[0], client = _a[1];
            return client.deleteLinkedResource(link, params);
        });
    };
    /**
     * PATCH the current resource
     * @hidden
     */
    HalResource.prototype.updateResource = function (resource, resourceConstructor) {
        return this.updateLinkedResource('update', {}, resource, resourceConstructor);
    };
    /**
     * PATCH a linked resource
     * @hidden
     */
    HalResource.prototype.updateLinkedResource = function (name, params, resource, resourceConstructor) {
        return this.withHalLink(name).then(function (_a) {
            var link = _a[0], client = _a[1];
            return client.updateLinkedResource(link, params, resource, resourceConstructor);
        });
    };
    HalResource.prototype.withHalLink = function (name) {
        if (!this.client) {
            return Promise.reject(new Error('HalResource has no client'));
        }
        var link = this._links[name];
        if (!link) {
            return Promise.reject("The " + name + " action is not available, ensure you have permission to perform this action.");
        }
        return Promise.resolve([link, this.client]);
    };
    return HalResource;
}());
exports.HalResource = HalResource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFsUmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2hhbC9tb2RlbHMvSGFsUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFVQTs7R0FFRztBQUNIO0lBZUU7Ozs7O09BS0c7SUFDSCxxQkFBWSxJQUFVO1FBQ3BCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSSwyQkFBSyxHQUFaLFVBQWEsSUFBUztRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSSw0QkFBTSxHQUFiO1FBQ0UsSUFBTSxNQUFNLEdBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3JCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNyQixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDdEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDRCQUFNLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksK0JBQVMsR0FBaEIsVUFBaUIsTUFBaUI7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxtQ0FBYSxHQUF2QixVQUNFLElBQVksRUFDWixtQkFBOEM7UUFGaEQsaUJBV0M7UUFQQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFD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