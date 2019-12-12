"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DynamicContent_1 = require("./DynamicContent");
var HalMock_1 = require("./hal/utils/HalMock");
/* tslint:disable:object-literal-sort-keys */
/**
 * @hidden
 */
exports.HUB = {
    id: '5b32377e4cedfd01c45036d8',
    name: 'anya-finn',
    label: 'Anya Finn',
    description: 'Content for anyafinn.com',
    status: 'ACTIVE',
    settings: {
        virtualStagingEnvironment: {
            hostname: ''
        },
        previewVirtualStagingEnvironment: {
            hostname: ''
        },
        applications: [],
        devices: [
            {
                name: 'Desktop',
                width: 1024,
                height: 768,
                orientate: false
            },
            {
                name: 'Tablet',
                width: 640,
                height: 768,
                orientate: false
            },
            {
                name: 'Mobile',
                width: 320,
                height: 512,
                orientate: false
            }
        ],
        publishing: {
            platforms: {
                amplience_dam: {
                    API_KEY: 'KEY',
                    endpoint: 'Endpoint'
                }
            }
        }
    },
    createdBy: 'user',
    createdDate: '2018-06-26T12:54:22.142Z',
    lastModifiedBy: 'user',
    lastModifiedDate: '2018-06-26T12:54:22.142Z',
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8'
        },
        hub: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8'
        },
        snapshots: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/snapshots{?types}{&page,size,sort}',
            templated: true
        },
        'create-snapshot': {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/snapshots'
        },
        events: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/events{?page,size,sort}',
            templated: true
        },
        'create-event': {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/events'
        },
        update: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8'
        },
        delete: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8'
        },
        'update-settings': {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/settings'
        },
        share: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/share'
        },
        'content-repositories': {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/content-repositories{?page,size,sort}',
            templated: true
        },
        'create-content-repository': {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/content-repositories'
        },
        'register-content-type': {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/content-types'
        },
        'content-types': {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/content-types{?page,size,sort}',
            templated: true
        },
        'list-content-type-schemas': {
            href: 'https://api.amplience.net/v2/content/hubs/5d4aed7dc9e77c00015fa180/content-type-schemas{?page,size,sort}',
            templated: true
        },
        'create-content-type-schema': {
            href: 'https://api.amplience.net/v2/content/hubs/5d4aed7dc9e77c00015fa180/content-type-schemas'
        },
        'search-content-items': {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/content-items/find?q={query}{&page,size,sort}',
            templated: true
        },
        webhooks: {
            href: 'https://api.amplience.net/v2/content/hubs/5be1d5814cedfd01c030da20/webhooks{?page,size,sort}',
            templated: true
        },
        'create-webhook': {
            href: 'https://api.amplience.net/v2/content/hubs/5be1d5814cedfd01c030da20/webhooks'
        }
    }
};
/**
 * @hidden
 */
exports.CONTENT_ITEM = {
    id: 'a87fd535-fb25-44ee-b687-0db72bbab721',
    folderId: '5b3237784cedfd01c4503658',
    body: {
        _meta: {
            name: 'main-banner',
            schema: 'http://deliver.bigcontent.io/schema/nested/nested-type.json'
        }
    },
    version: 1,
    label: 'Banner Ad Homepage',
    status: 'ACTIVE',
    createdBy: 'user',
    createdDate: '2018-06-26T12:54:16.216Z',
    lastModifiedBy: 'user',
    lastModifiedDate: '2018-06-26T12:54:16.216Z',
    deliveryId: 'a87fd535-fb25-44ee-b687-0db72bbab721',
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721'
        },
        'content-item': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721'
        },
        publish: {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/publish'
        },
        planned: {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/planned{?epoch,time}',
            templated: true
        },
        update: {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721'
        },
        delete: {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/versions/1'
        },
        'restore-version': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/restore'
        },
        'content-repository': {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691'
        },
        'content-item-version': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/versions{/version}',
            templated: true
        },
        'content-item-versions': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/versions{?page,size,sort}',
            templated: true
        },
        'content-item-history': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/history{?page,size,sort}',
            templated: true
        },
        copy: {
            href: 'https://api.amplience.net/v2/content/content-repositories/{id}/content-items?sourceContentItemId=a87fd535-fb25-44ee-b687-0db72bbab721',
            templated: true
        },
        folder: {
            href: 'https://api.amplience.net/v2/content/folders/5b3237784cedfd01c4503658'
        },
        'content-item-with-children': {
            href: 'https://api.amplience.net/v2/content/content-items/search/findByIdWithChildren?id=a87fd535-fb25-44ee-b687-0db72bbab721'
        },
        'set-locale': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/locale'
        }
    }
};
/**
 * @hidden
 */
exports.CONTENT_ITEM_V2 = __assign({}, exports.CONTENT_ITEM);
exports.CONTENT_ITEM_V2.version++;
/**
 * @hidden
 */
exports.CONTENT_ITEM_WITH_LOCALE = {
    id: 'a87fd535-fb25-44ee-b687-0db72bbab721',
    folderId: '5b3237784cedfd01c4503658',
    body: {
        _meta: {
            name: 'main-banner',
            schema: 'http://deliver.bigcontent.io/schema/nested/nested-type.json'
        }
    },
    version: 1,
    label: 'Banner Ad Homepage',
    status: 'ACTIVE',
    locale: 'en-GB',
    createdBy: 'user',
    createdDate: '2018-06-26T12:54:16.216Z',
    lastModifiedBy: 'user',
    lastModifiedDate: '2018-06-26T12:54:16.216Z',
    deliveryId: 'a87fd535-fb25-44ee-b687-0db72bbab721',
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721'
        },
        'content-item': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721'
        },
        publish: {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/publish'
        },
        planned: {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/planned{?epoch,time}',
            templated: true
        },
        update: {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721'
        },
        delete: {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/versions/1'
        },
        'restore-version': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/restore'
        },
        'content-repository': {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691'
        },
        'content-item-version': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/versions{/version}',
            templated: true
        },
        'content-item-versions': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/versions{?page,size,sort}',
            templated: true
        },
        'content-item-history': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/history{?page,size,sort}',
            templated: true
        },
        copy: {
            href: 'https://api.amplience.net/v2/content/content-repositories/{id}/content-items?sourceContentItemId=a87fd535-fb25-44ee-b687-0db72bbab721',
            templated: true
        },
        folder: {
            href: 'https://api.amplience.net/v2/content/folders/5b3237784cedfd01c4503658'
        },
        'content-item-with-children': {
            href: 'https://api.amplience.net/v2/content/content-items/search/findByIdWithChildren?id=a87fd535-fb25-44ee-b687-0db72bbab721'
        },
        'set-locale': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/locale'
        },
        'create-localizations': {
            href: 'http://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721/localize'
        }
    }
};
/**
 * @hidden
 */
exports.CONTENT_TYPE_SCHEMA = {
    validationLevel: 'CONTENT_TYPE',
    body: '{\n\t"$schema": "http://json-schema.org/draft-04/schema#",\n\t"id": "http://example.com/content-type-schema.json",\n\t"title": "Image",\n\t"description": "Image schema",\n\t"allOf": [\n\t\t{\n\t\t\t"$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content"\n\t\t}\n\t],\n\t"type": "object",\n\t"properties": {\n\t\t"image": {\n\t\t\t"title": "Image",\n\t\t\t"description": "insert an image",\n\t\t\t"type": "object",\n\t\t\t"anyOf": [\n\t\t\t\t{\n\t\t\t\t\t"$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t"altText": {\n\t\t\t"type": "string",\n\t\t\t"minLength": 0,\n\t\t\t"maxLength": 150,\n\t\t\t"title": "Alt text",\n\t\t\t"description": "insert image alt text"\n\t\t}\n\t},\n\t"propertyOrder": [\n\t\t"image",\n\t\t"altText"\n\t],\n\t"required": [\n\t\t"image",\n\t\t"altText"\n\t]\n}',
    schemaId: 'http://example.com/content-type-schema.json',
    createdBy: 'user',
    createdDate: '2018-06-26T12:54:16.216Z',
    lastModifiedBy: 'user',
    lastModifiedDate: '2018-06-26T12:54:16.216Z',
    version: 1,
    id: '5d4af55ced6688002869d808',
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/content-type-schemas/5d4af55ced6688002869d808'
        },
        'content-type-schema': {
            href: 'https://api.amplience.net/v2/content/content-type-schemas/5d4af55ced6688002869d808'
        },
        hub: {
            href: 'https://api.amplience.net/v2/content/hubs/5d4aed7dc9e77c00015fa180'
        },
        history: {
            href: 'https://api.amplience.net/v2/content/content-type-schemas/5d4af55ced6688002869d808/history'
        },
        getByVersion: {
            href: 'https://api.amplience.net/v2/content/content-type-schemas/5d4af55ced6688002869d808/{version}',
            templated: true
        },
        update: {
            href: 'https://api.amplience.net/v2/content/content-type-schemas/5d4af55ced6688002869d808'
        },
        restore: {
            href: 'https://api.amplience.net/v2/content/content-type-schemas/5d4af55ced6688002869d808/restore'
        }
    }
};
/**
 * @hidden
 */
exports.CONTENT_TYPE_SCHEMA_V2 = __assign({}, exports.CONTENT_TYPE_SCHEMA);
exports.CONTENT_TYPE_SCHEMA_V2.version++;
/**
 * @hidden
 */
exports.CONTENT_REPOSITORY = {
    id: '5b32377b4cedfd01c4503691',
    name: 'inspiration',
    label: 'Inspiration',
    status: 'ACTIVE',
    features: [],
    type: 'CONTENT',
    contentTypes: [],
    itemLocales: ['en', 'fr'],
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691'
        },
        'content-repository': {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691'
        },
        update: {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691'
        },
        delete: {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691'
        },
        hub: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377b4cedfd01c4503690'
        },
        'create-content-item': {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691/content-items'
        },
        'search-content-items': {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377b4cedfd01c4503690/content-items/find?q={query}{&page,size,sort}',
            templated: true
        },
        'content-items': {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691/content-items{?page,size,sort}',
            templated: true
        },
        share: {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691/share'
        },
        'assign-content-type': {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691/content-types'
        },
        'unassign-content-type': {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691/content-types/{id}',
            templated: true
        },
        folders: {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691/folders{?page,size,sort}',
            templated: true
        },
        'create-folder': {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691/folders'
        },
        features: {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b32377b4cedfd01c4503691/features?feature={feature}',
            templated: true
        },
        'update-content-items': {
            href: 'https://api.amplience.net/v2/content/content-items'
        }
    }
};
/**
 * @hidden
 */
exports.EVENT = {
    id: '5b32379e4cedfd01c4504171',
    name: 'January Sale',
    comment: 'This is an event.',
    start: '2017-01-01T00:00:00.000Z',
    end: '2017-01-01T23:59:59.000Z',
    brief: 'http://external.doc/mybrief',
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/events/5b32379e4cedfd01c4504171'
        },
        event: {
            href: 'https://api.amplience.net/v2/content/events/5b32379e4cedfd01c4504171'
        },
        update: {
            href: 'https://api.amplience.net/v2/content/events/5b32379e4cedfd01c4504171'
        },
        delete: {
            href: 'https://api.amplience.net/v2/content/events/5b32379e4cedfd01c4504171'
        },
        hub: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32379e4cedfd01c4504170'
        },
        editions: {
            href: 'https://api.amplience.net/v2/content/events/5b32379e4cedfd01c4504171/editions{?page,size,sort}',
            templated: true
        },
        'create-edition': {
            href: 'https://api.amplience.net/v2/content/events/5b32379e4cedfd01c4504171/editions{?sourceEditionId}',
            templated: true
        }
    }
};
/**
 * @hidden
 */
exports.EDITION = {
    id: '5b32379e4cedfd01c4504172',
    name: 'January Sale',
    comment: 'This is an example edition.',
    start: '2017-01-01T00:00:00.000Z',
    end: '2017-01-01T23:59:59.000Z',
    eventId: '5b32379e4cedfd01c4504171',
    publishingStatus: 'DRAFT',
    slotsRemaining: 200,
    schedulingErrors: null,
    activeEndDate: false,
    publishingJobId: null,
    statusUpdated: '2018-06-26T12:54:54.922Z',
    schedulingUser: null,
    createdBy: 'user',
    createdDate: '2017-06-05T04:03:02.000Z',
    lastModifiedBy: 'user',
    lastModifiedDate: '2017-06-05T04:03:02.000Z',
    stagedDate: null,
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/editions/5b32379e4cedfd01c4504172'
        },
        edition: {
            href: 'https://api.amplience.net/v2/content/editions/5b32379e4cedfd01c4504172'
        },
        'create-preview': {
            href: 'https://api.amplience.net/v2/content/editions/5b32379e4cedfd01c4504172/preview'
        },
        preview: {
            href: 'https://api.amplience.net/v2/content/editions/5b32379e4cedfd01c4504172/preview'
        },
        schedule: {
            href: 'https://api.amplience.net/v2/content/editions/5b32379e4cedfd01c4504172/schedule{?ignoreWarnings}',
            templated: true
        },
        update: {
            href: 'https://api.amplience.net/v2/content/editions/5b32379e4cedfd01c4504172'
        },
        delete: {
            href: 'https://api.amplience.net/v2/content/editions/5b32379e4cedfd01c4504172'
        },
        slots: {
            href: 'https://api.amplience.net/v2/content/editions/5b32379e4cedfd01c4504172/slots'
        },
        'list-slots': {
            href: 'https://api.amplience.net/v2/content/editions/5b32379e4cedfd01c4504172/slots{?includedSlots}',
            templated: true
        },
        event: {
            href: 'https://api.amplience.net/v2/content/events/5b32379e4cedfd01c4504171'
        },
        'edition-conflicts': {
            href: 'https://api.amplience.net/v2/content/editions/5b32379e4cedfd01c4504172/conflicts'
        },
        'edition-conflict': {
            href: 'https://api.amplience.net/v2/content/editions/5b32379e4cedfd01c4504172/conflicts/findByIdAndVersion{?id,version}',
            templated: true
        }
    }
};
/**
 * @hidden
 */
exports.EDITION_SLOT = {
    eventId: '5b32379e4cedfd01c4504171',
    editionId: '5b32379e4cedfd01c4504172',
    createdDate: '2017-06-05T04:03:04.000Z',
    content: {
        body: {
            _meta: {
                schema: 'http://deliver.bigcontent.io/schema/simple-slot-type.json',
                name: 'slot'
            }
        }
    },
    status: 'VALID',
    contentTypeId: '5b3237a24cedfd01c45041cf',
    slotId: '7aa5f5d4-071c-42e3-b42e-02675c56d60e',
    slotLabel: 'Simple Slot',
    conflicts: false,
    empty: true,
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/editions/5b3237a24cedfd01c45041d1/slots/5b3237a24cedfd01c45041d5'
        },
        'edition-slot': {
            href: 'https://api.amplience.net/v2/content/editions/5b3237a24cedfd01c45041d1/slots/5b3237a24cedfd01c45041d5'
        },
        edition: {
            href: 'https://api.amplience.net/v2/content/editions/5b3237a24cedfd01c45041d1'
        },
        slot: {
            href: 'https://api.amplience.net/v2/content/content-items/7aa5f5d4-071c-42e3-b42e-02675c56d60e'
        },
        content: {
            href: 'https://api.amplience.net/v2/content/editions/5b3237a24cedfd01c45041d1/slots/5b3237a24cedfd01c45041d5/content'
        }
    }
};
/**
 * @hidden
 */
exports.SNAPSHOT = {
    id: '5b3237944cedfd01c45038ae',
    comment: 'This is an example snapshot.',
    createdDate: '2017-06-05T04:03:02Z',
    createdBy: 'thor',
    type: 'USER',
    meta: [],
    taggedEditions: [],
    rootContentItem: {
        label: 'Banner Ad Homepage',
        contentTypeUri: 'http://deliver.bigcontent.io/schema/nested/nested-type.json'
    },
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/snapshots/5b3237944cedfd01c45038ae'
        },
        snapshot: {
            href: 'https://api.amplience.net/v2/content/snapshots/5b3237944cedfd01c45038ae'
        },
        'publishing-jobs': {
            href: 'https://api.amplience.net/v2/content/snapshots/5b3237944cedfd01c45038ae/publishing-jobs{?page,size,sort}',
            templated: true
        },
        'create-publishing-job': {
            href: 'https://api.amplience.net/v2/content/snapshots/5b3237944cedfd01c45038ae/publishing-jobs'
        },
        'edition-links': {
            href: 'https://api.amplience.net/v2/content/snapshots/5b3237944cedfd01c45038ae/edition-links'
        },
        hub: {
            href: 'https://api.amplience.net/v2/content/hubs/5b3237944cedfd01c45038a8'
        },
        'content-root': {
            href: 'https://api.amplience.net/v2/content/content-items/e7a3d579-11fa-4f5e-b580-8f41c96382bf'
        },
        'snapshot-content-item': {
            href: 'https://api.amplience.net/v2/content/snapshots/5b3237944cedfd01c45038ae/content-items{/id}',
            templated: true
        }
    }
};
/**
 * @hidden
 */
exports.LOCALIZATION_JOB = {
    status: 'IN_PROGRESS',
    rootContentItem: {
        label: 'Text Content Item',
        locale: 'en-GB',
        id: 'a87fd535-fb25-44ee-b687-0db72bbab721'
    },
    requestedLocales: ['fr-FR'],
    createdBy: 'user',
    createdDate: '2018-10-23T21:46:06.169Z',
    _links: {
        'content-root': {
            href: 'https://api.amplience.net/v2/content/content-items/a87fd535-fb25-44ee-b687-0db72bbab721'
        },
        findByRootContentItem: {
            href: 'https://api.amplience.net/v2/content/localization-jobs/search/findByRootContentItem?id=a87fd535-fb25-44ee-b687-0db72bbab721{&page,size,sort}',
            templated: true
        }
    }
};
/**
 * @hidden
 */
exports.FOLDER = {
    id: '5b72ed68d6018001c81ef05b',
    name: 'A folder to end all folders',
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/folders/5b72ed68d6018001c81ef05b'
        },
        folder: {
            href: 'https://api.amplience.net/v2/content/folders/5b72ed68d6018001c81ef05b'
        },
        folders: {
            href: 'https://api.amplience.net/v2/content/folders/5b72ed68d6018001c81ef05b/folders'
        },
        'content-repository': {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b72ed67d6018001c81ef05a'
        },
        'content-items': {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b72ed67d6018001c81ef05a/content-items?folderId=5b72ed68d6018001c81ef05b'
        },
        'create-folder': {
            href: 'https://api.amplience.net/v2/content/folders/5b72ed68d6018001c81ef05b/folders'
        },
        'delete-folder': {
            href: 'https://api.amplience.net/v2/content/folders/5b72ed68d6018001c81ef05b'
        },
        'update-folder': {
            href: 'https://api.amplience.net/v2/content/folders/5b72ed68d6018001c81ef05b'
        }
    }
};
/**
 * @hidden
 */
exports.NEW_FOLDER = {
    id: '5b72ed68d6018001c81ef05c',
    name: 'Another Folder',
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/folders/5b72ed68d6018001c81ef05c'
        },
        folder: {
            href: 'https://api.amplience.net/v2/content/folders/5b72ed68d6018001c81ef05c'
        },
        folders: {
            href: 'https://api.amplience.net/v2/content/folders/5b72ed68d6018001c81ef05c/folders'
        },
        'content-repository': {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b72ed67d6018001c81ef05a'
        },
        'content-items': {
            href: 'https://api.amplience.net/v2/content/content-repositories/5b72ed67d6018001c81ef05a/content-items?folderId=5b72ed68d6018001c81ef05c'
        },
        'create-folder': {
            href: 'https://api.amplience.net/v2/content/folders/5b72ed68d6018001c81ef05c/folders'
        },
        'delete-folder': {
            href: 'https://api.amplience.net/v2/content/folders/5b72ed68d6018001c81ef05c'
        },
        'update-folder': {
            href: 'https://api.amplience.net/v2/content/folders/5b72ed68d6018001c81ef05c'
        }
    }
};
/**
 * @hidden
 */
exports.WEBHOOK = {
    id: '5a497a000000000000000000',
    label: 'myWebhookSubscription',
    events: ['dynamic-content.edition.scheduled'],
    active: true,
    handlers: ['http://example.com/webhook'],
    notifications: [],
    secret: 'secret',
    createdDate: '2018-01-02T03:04:05Z',
    lastModifiedDate: '2018-01-02T03:04:05Z',
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/webhooks/5a497a000000000000000000'
        },
        hub: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8'
        },
        requests: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/webhooks/5a497a000000000000000000/requests{?cursor,limit}',
            templated: true
        },
        'event-types': {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/webhooks/event-types'
        },
        update: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/webhooks/5a497a000000000000000000'
        },
        delete: {
            href: 'https://api.amplience.net/v2/content/hubs/5b32377e4cedfd01c45036d8/webhooks/5a497a000000000000000000'
        }
    }
};
/**
 * @hidden
 */
exports.CONTENT_TYPE = {
    id: '5be1d5134cedfd01c030c460',
    contentTypeUri: 'http://deliver.bigcontent.io/schema/carousel.json',
    settings: {
        label: 'Carousel',
        icons: [
            {
                size: 256,
                url: 'http://apps.dev-artifacts.adis.ws/cms-icons/develop/v0.4.0/256/ca-types-grid-mixedmedia.png'
            }
        ],
        visualizations: [
            {
                label: 'Desktop Website',
                templatedUri: 'http://website',
                default: true
            },
            {
                label: 'Mobile Website',
                templatedUri: 'http://mobile.website',
                default: false
            }
        ]
    },
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/content-types/5be1d5134cedfd01c030c460'
        },
        update: {
            href: 'https://api.amplience.net/v2/content/content-types/5be1d5134cedfd01c030c460'
        },
        'content-type': {
            href: 'https://api.amplience.net/v2/content/content-types/5be1d5134cedfd01c030c460'
        },
        'effective-content-type': {
            href: 'https://api.amplience.net/v2/content/content-types/5be1d5134cedfd01c030c460/effective-content-type'
        },
        'content-type-schema': {
            href: 'https://api.amplience.net/v2/content/content-types/5be1d5134cedfd01c030c460/schema'
        }
    }
};
/**
 * @hidden
 */
var CONTENT_TYPE_UPDATED = __assign({}, exports.CONTENT_TYPE, { settings: {
        icons: [
            {
                size: 512,
                url: 'http://apps.dev-artifacts.adis.ws/cms-icons/develop/v0.4.0/256/ca-types-grid-mixedmedia.png'
            }
        ],
        label: 'New Label',
        visualizations: [
            {
                default: true,
                label: 'Desktop Website',
                templatedUri: 'http://example.com'
            }
        ]
    } });
/**
 * @hidden
 */
exports.CONTENT_TYPE_CACHED_SCHEMA = {
    hubId: '5b32377e4cedfd01c45036d8',
    contentTypeUri: 'http://deliver.bigcontent.io/schema/nested/nested-type.json',
    cachedSchema: {
        $schema: 'http://bigcontent.io/cms/schema/v1/schema#',
        id: 'http://deliver.bigcontent.io/schema/nested/nested-type.json',
        title: 'Inline content type',
        description: 'Example of an inline content nested content type',
        allOf: [
            {
                $ref: 'http://bigcontent.io/cms/schema/v1/core#/definitions/content'
            }
        ],
        type: 'object',
        properties: {
            inlineExample: {
                type: 'object',
                title: 'this is a title',
                properties: {
                    field1: {
                        type: 'string',
                        title: 'this is a title'
                    }
                },
                required: ['field1']
            },
            internalRefExample: {
                $ref: '#/definitions/mapEntry'
            },
            externalRefExample: {
                $ref: 'http://deliver.bigcontent.io/schema/empty-type.json#'
            },
            arrayExample: {
                type: 'array',
                title: 'this is a title',
                items: {
                    $ref: '#/definitions/mapEntry'
                }
            }
        },
        definitions: {
            mapEntry: {
                type: 'object',
                title: 'this is a title',
                properties: {
                    key: {
                        type: 'string',
                        title: 'this is a title'
                    },
                    value: {
                        type: 'string',
                        title: 'this is a title'
                    }
                },
                required: ['key', 'value']
            }
        }
    },
    _links: {
        self: {
            href: 'https://api.amplience.net/v2/content/content-types/5d8a54cd46e0fb0386cb41f4/schema'
        }
    }
};
/* tslint:enable:object-literal-sort-keys */
/**
 * @hidden
 */
var DynamicContentFixtures = /** @class */ (function () {
    function DynamicContentFixtures() {
    }
    DynamicContentFixtures.install = function (mock) {
        var mocks = new HalMock_1.HalMocks(mock);
        // Hubs
        mocks.collection('https://api.amplience.net/v2/content/hubs', 'hubs', [
            exports.HUB
        ]);
        mocks
            .resource(exports.HUB)
            .nestedCollection('content-repositories', {}, 'content-repositories', [
            exports.CONTENT_REPOSITORY
        ])
            .nestedCollection('events', {}, 'events', [exports.EVENT])
            .nestedCreateResource('create-event', {}, exports.EVENT)
            .nestedCollection('webhooks', {}, 'webhooks', [exports.WEBHOOK])
            .nestedCreateResource('create-webhook', {}, exports.WEBHOOK)
            .nestedCollection('content-types', {}, 'content-types', [exports.CONTENT_TYPE])
            .nestedCreateResource('register-content-type', {}, exports.CONTENT_TYPE)
            .nestedCollection('list-content-type-schemas', {}, 'content-type-schemas', [exports.CONTENT_TYPE_SCHEMA])
            .nestedCreateResource('create-content-type-schema', {}, exports.CONTENT_TYPE_SCHEMA);
        // Content items
        mocks
            .resource(exports.CONTENT_ITEM)
            .nestedResource('content-item-version', { version: 1 }, exports.CONTENT_ITEM)
            .nestedUpdateResource('update', {}, exports.CONTENT_ITEM_V2);
        // Content type schemas
        mocks
            .resource(exports.CONTENT_TYPE_SCHEMA)
            .nestedUpdateResource('update', {}, exports.CONTENT_TYPE_SCHEMA_V2);
        mocks.resource(exports.CONTENT_TYPE_SCHEMA_V2, exports.CONTENT_TYPE_SCHEMA_V2._links.self.href + '/2');
        // Content repositories
        mocks
            .resource(exports.CONTENT_REPOSITORY)
            .nestedCollection('content-items', {}, 'content-items', [exports.CONTENT_ITEM])
            .nestedCreateResource('create-content-item', {}, exports.CONTENT_ITEM)
            .nestedCollection('folders', {}, 'folders', [exports.FOLDER])
            .nestedCreateResource('create-folder', {}, exports.NEW_FOLDER)
            .nestedCreateResource('assign-content-type', {}, exports.CONTENT_REPOSITORY)
            .nestedDelete('unassign-content-type', {
            id: '5be1d5134cedfd01c030c460'
        });
        // Folders
        mocks
            .resource(exports.FOLDER)
            .nestedCreateResource('create-folder', {}, exports.NEW_FOLDER)
            .nestedCollection('folders', {}, 'folders', [exports.NEW_FOLDER]);
        // Events
        mocks
            .resource(exports.EVENT)
            .nestedCollection('editions', {}, 'editions', [exports.EDITION])
            .nestedCreateResource('create-edition', {}, exports.EDITION);
        // Editions
        mocks
            .resource(exports.EDITION)
            .nestedCollection('list-slots', {}, 'edition-slots', [exports.EDITION_SLOT]);
        // Snapshots
        mocks
            .resource(exports.SNAPSHOT)
            .nestedResource('snapshot-content-item', { id: exports.CONTENT_ITEM.id }, exports.CONTENT_ITEM);
        mocks
            .resource(exports.CONTENT_ITEM)
            .nestedCreateResource('set-locale', { locale: 'en-GB', version: 1 }, exports.CONTENT_ITEM_WITH_LOCALE);
        mocks
            .resource(exports.CONTENT_ITEM_WITH_LOCALE)
            .nestedCreateResource('create-localizations', { locales: ['fr-FR'], version: 1 }, exports.LOCALIZATION_JOB);
        // Content Types
        mocks
            .resource(exports.CONTENT_TYPE)
            .nestedUpdateResource('update', {}, CONTENT_TYPE_UPDATED)
            .nestedUpdateResource('content-type-schema', {}, exports.CONTENT_TYPE_CACHED_SCHEMA)
            .nestedResource('content-type-schema', {}, exports.CONTENT_TYPE_CACHED_SCHEMA);
        // Webhooks
        mocks.resource(exports.WEBHOOK);
    };
    return DynamicContentFixtures;
}());
exports.DynamicContentFixtures = DynamicContentFixtures;
// axios-mock-adaptor's typedefs are wrong preventing calling onGet with 3 args, this is a workaround
/**
 * @hidden
 */
// tslint:disable-next-line
var MockAdapter = require('axios-mock-adapter');
/**
 * @hidden
 */
var MockDynamicContent = /** @class */ (function (_super) {
    __extends(MockDynamicContent, _super);
    function MockDynamicContent(clientCredentials, dcConfig, httpClient) {
        return _super.call(this, clientCredentials || {
            client_id: 'client_id',
            client_secret: 'client_secret'
        }, dcConfig, httpClient) || this;
    }
    MockDynamicContent.prototype.createTokenClient = function (dcConfig, clientCredentials, httpClient) {
        return {
            getToken: function () {
                return Promise.resolve({
                    access_token: 'token',
                    expires_in: 60,
                    refresh_token: 'refresh'
                });
            }
        };
    };
    MockDynamicContent.prototype.createResourceClient = function (dcConfig, tokenProvider, httpClient) {
        var client = _super.prototype.createResourceClient.call(this, dcConfig, tokenProvider, httpClient);
        this.mock = new MockAdapter(httpClient.client);
        DynamicContentFixtures.install(this.mock);
        return client;
    };
    return MockDynamicContent;
}(DynamicContent_1.DynamicContent));
exports.MockDynamicContent = MockDynamicContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0NvbnRlbnQubW9ja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0R5bmFtaWNDb250ZW50Lm1vY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQXdFO0FBRXhFLCtDQUErQztBQU0vQyw2Q0FBNkM7QUFFN0M7O0dBRUc7QUFDVSxRQUFBLEdBQUcsR0FBRztJQUNqQixFQUFFLEVBQUUsMEJBQTBCO0lBQzlCLElBQUksRUFBRSxXQUFXO0lBQ2pCLEtBQUssRUFBRSxXQUFXO0lBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7SUFDdkMsTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFO1FBQ1IseUJBQXlCLEVBQUU7WUFDekIsUUFBUSxFQUFFLEVBQUU7U0FDYjtRQUNELGdDQUFnQyxFQUFFO1lBQ2hDLFFBQVEsRUFBRSxFQUFFO1NBQ2I7UUFDRCxZQUFZLEVBQUUsRUFBRTtRQUNoQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsSUFBSTtnQkFDWCxNQUFNLEVBQUUsR0FBRztnQkFDWCxTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxHQUFHO2dCQUNWLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7YUFDakI7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLFNBQVMsRUFBRTtnQkFDVCxhQUFhLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsU0FBUyxFQUFFLE1BQU07SUFD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