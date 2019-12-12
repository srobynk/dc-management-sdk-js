"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CURIEs_1 = require("../services/CURIEs");
/**
 * @hidden
 */
var HalMockResource = /** @class */ (function () {
    function HalMockResource(resource, mocks) {
        this.resource = resource;
        this.mocks = mocks;
    }
    HalMockResource.prototype.nestedResource = function (linkName, args, resource) {
        var link = this.resource._links[linkName];
        var href = CURIEs_1.CURIEs.expand(link.href, args);
        this.mocks.resource(resource, href);
        return this;
    };
    HalMockResource.prototype.nestedCollection = function (linkName, args, type, values) {
        var link = this.resource._links[linkName];
        var href = CURIEs_1.CURIEs.expand(link.href, args);
        this.mocks.collection(href, type, values);
        return this;
    };
    HalMockResource.prototype.nestedCreateResource = function (linkName, args, resource) {
        var link = this.resource._links[linkName];
        var href = CURIEs_1.CURIEs.expand(link.href, args);
        this.mocks.createResource(href, resource);
        return this;
    };
    HalMockResource.prototype.nestedUpdateResource = function (linkName, args, resource) {
        var link = this.resource._links[linkName];
        var href = CURIEs_1.CURIEs.expand(link.href, args);
        this.mocks.updateResource(href, resource);
        return this;
    };
    HalMockResource.prototype.nestedDelete = function (linkName, args) {
        var link = this.resource._links[linkName];
        var href = CURIEs_1.CURIEs.expand(link.href, args);
        this.mocks.deleteResource(href);
        return this;
    };
    return HalMockResource;
}());
exports.HalMockResource = HalMockResource;
/**
 * @hidden
 */
var HalMocks = /** @class */ (function () {
    function HalMocks(mockInstance) {
        this.mockInstance = mockInstance;
    }
    HalMocks.prototype.resource = function (resource, url) {
        if (!url) {
            url = resource._links.self.href;
        }
        this.mockInstance.onGet(url).reply(200, resource);
        if (resource._links.delete) {
            this.mockInstance.onDelete(resource._links.delete.href).reply(204);
        }
        return new HalMockResource(resource, this);
    };
    HalMocks.prototype.collection = function (url, type, values) {
        var _a;
        this.mockInstance.onGet(url).reply(200, {
            _embedded: (_a = {},
                _a[type] = values,
                _a)
        });
    };
    HalMocks.prototype.createResource = function (url, resource) {
        this.mockInstance.onPost(url).reply(200, resource);
        return new HalMockResource(resource, this);
    };
    HalMocks.prototype.updateResource = function (url, resource) {
        this.mockInstance.onPatch(url).reply(200, resource);
        return new HalMockResource(resource, this);
    };
    HalMocks.prototype.deleteResource = function (url) {
        this.mockInstance.onDelete(url).reply(200);
    };
    return HalMocks;
}());
exports.HalMocks = HalMocks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFsTW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvaGFsL3V0aWxzL0hhbE1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2Q0FBNEM7QUFXNUM7O0dBRUc7QUFDSDtJQUlFLHlCQUFZLFFBQW9CLEVBQUUsS0FBZTtRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRU0sd0NBQWMsR0FBckIsVUFDRSxRQUFnQixFQUNoQixJQUFTLEVBQ1QsUUFBb0I7UUFFcEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBTSxJQUFJLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSwwQ0FBZ0IsR0FBdkIsVUFDRSxRQUFnQixFQUNoQixJQUFTLEVBQ1QsSUFBWSxFQUNaLE1BQW9CO1FBRXBCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQU0sSUFBSSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLDhDQUFvQixHQUEzQixVQUNFLFFBQWdCLEVBQ2hCLElBQVMs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