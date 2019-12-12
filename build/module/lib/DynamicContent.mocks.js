import { DynamicContent } from './DynamicContent';
import { HalMocks } from './hal/utils/HalMock';
/* tslint:disable:object-literal-sort-keys */
/**
 * @hidden
 */
export const HUB = {
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
export const CONTENT_ITEM = {
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
export const CONTENT_ITEM_V2 = { ...CONTENT_ITEM };
CONTENT_ITEM_V2.version++;
/**
 * @hidden
 */
export const CONTENT_ITEM_WITH_LOCALE = {
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
export const CONTENT_TYPE_SCHEMA = {
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
export const CONTENT_TYPE_SCHEMA_V2 = { ...CONTENT_TYPE_SCHEMA };
CONTENT_TYPE_SCHEMA_V2.version++;
/**
 * @hidden
 */
export const CONTENT_REPOSITORY = {
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
export const EVENT = {
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
export const EDITION = {
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
export const EDITION_SLOT = {
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
export const SNAPSHOT = {
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
export const LOCALIZATION_JOB = {
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
export const FOLDER = {
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
export const NEW_FOLDER = {
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
export const WEBHOOK = {
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
export const CONTENT_TYPE = {
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
const CONTENT_TYPE_UPDATED = {
    ...CONTENT_TYPE,
    settings: {
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
    }
};
/**
 * @hidden
 */
export const CONTENT_TYPE_CACHED_SCHEMA = {
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
export class DynamicContentFixtures {
    static install(mock) {
        const mocks = new HalMocks(mock);
        // Hubs
        mocks.collection('https://api.amplience.net/v2/content/hubs', 'hubs', [
            HUB
        ]);
        mocks
            .resource(HUB)
            .nestedCollection('content-repositories', {}, 'content-repositories', [
            CONTENT_REPOSITORY
        ])
            .nestedCollection('events', {}, 'events', [EVENT])
            .nestedCreateResource('create-event', {}, EVENT)
            .nestedCollection('webhooks', {}, 'webhooks', [WEBHOOK])
            .nestedCreateResource('create-webhook', {}, WEBHOOK)
            .nestedCollection('content-types', {}, 'content-types', [CONTENT_TYPE])
            .nestedCreateResource('register-content-type', {}, CONTENT_TYPE)
            .nestedCollection('list-content-type-schemas', {}, 'content-type-schemas', [CONTENT_TYPE_SCHEMA])
            .nestedCreateResource('create-content-type-schema', {}, CONTENT_TYPE_SCHEMA);
        // Content items
        mocks
            .resource(CONTENT_ITEM)
            .nestedResource('content-item-version', { version: 1 }, CONTENT_ITEM)
            .nestedUpdateResource('update', {}, CONTENT_ITEM_V2);
        // Content type schemas
        mocks
            .resource(CONTENT_TYPE_SCHEMA)
            .nestedUpdateResource('update', {}, CONTENT_TYPE_SCHEMA_V2);
        mocks.resource(CONTENT_TYPE_SCHEMA_V2, CONTENT_TYPE_SCHEMA_V2._links.self.href + '/2');
        // Content repositories
        mocks
            .resource(CONTENT_REPOSITORY)
            .nestedCollection('content-items', {}, 'content-items', [CONTENT_ITEM])
            .nestedCreateResource('create-content-item', {}, CONTENT_ITEM)
            .nestedCollection('folders', {}, 'folders', [FOLDER])
            .nestedCreateResource('create-folder', {}, NEW_FOLDER)
            .nestedCreateResource('assign-content-type', {}, CONTENT_REPOSITORY)
            .nestedDelete('unassign-content-type', {
            id: '5be1d5134cedfd01c030c460'
        });
        // Folders
        mocks
            .resource(FOLDER)
            .nestedCreateResource('create-folder', {}, NEW_FOLDER)
            .nestedCollection('folders', {}, 'folders', [NEW_FOLDER]);
        // Events
        mocks
            .resource(EVENT)
            .nestedCollection('editions', {}, 'editions', [EDITION])
            .nestedCreateResource('create-edition', {}, EDITION);
        // Editions
        mocks
            .resource(EDITION)
            .nestedCollection('list-slots', {}, 'edition-slots', [EDITION_SLOT]);
        // Snapshots
        mocks
            .resource(SNAPSHOT)
            .nestedResource('snapshot-content-item', { id: CONTENT_ITEM.id }, CONTENT_ITEM);
        mocks
            .resource(CONTENT_ITEM)
            .nestedCreateResource('set-locale', { locale: 'en-GB', version: 1 }, CONTENT_ITEM_WITH_LOCALE);
        mocks
            .resource(CONTENT_ITEM_WITH_LOCALE)
            .nestedCreateResource('create-localizations', { locales: ['fr-FR'], version: 1 }, LOCALIZATION_JOB);
        // Content Types
        mocks
            .resource(CONTENT_TYPE)
            .nestedUpdateResource('update', {}, CONTENT_TYPE_UPDATED)
            .nestedUpdateResource('content-type-schema', {}, CONTENT_TYPE_CACHED_SCHEMA)
            .nestedResource('content-type-schema', {}, CONTENT_TYPE_CACHED_SCHEMA);
        // Webhooks
        mocks.resource(WEBHOOK);
    }
}
// axios-mock-adaptor's typedefs are wrong preventing calling onGet with 3 args, this is a workaround
/**
 * @hidden
 */
// tslint:disable-next-line
const MockAdapter = require('axios-mock-adapter');
/**
 * @hidden
 */
export class MockDynamicContent extends DynamicContent {
    constructor(clientCredentials, dcConfig, httpClient) {
        super(clientCredentials || {
            client_id: 'client_id',
            client_secret: 'client_secret'
        }, dcConfig, httpClient);
    }
    createTokenClient(dcConfig, clientCredentials, httpClient) {
        return {
            getToken: () => Promise.resolve({
                access_token: 'token',
                expires_in: 60,
                refresh_token: 'refresh'
            })
        };
    }
    createResourceClient(dcConfig, tokenProvider, httpClient) {
        const client = super.createResourceClient(dcConfig, tokenProvider, httpClient);
        this.mock = new MockAdapter(httpClient.client);
        DynamicContentFixtures.install(this.mock);
        return client;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0NvbnRlbnQubW9ja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0R5bmFtaWNDb250ZW50Lm1vY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQXdCLE1BQU0sa0JBQWtCLENBQUM7QUFFeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBTS9DLDZDQUE2QztBQUU3Qzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRztJQUNqQixFQUFFLEVBQUUsMEJBQTBCO0lBQzlCLElBQUksRUFBRSxXQUFXO0lBQ2pCLEtBQUssRUFBRSxXQUFXO0lBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7SUFDdkMsTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFO1FBQ1IseUJBQXlCLEVBQUU7WUFDekIsUUFBUSxFQUFFLEVBQUU7U0FDYjtRQUNELGdDQUFnQyxFQUFFO1lBQ2hDLFFBQVEsRUFBRSxFQUFFO1NBQ2I7UUFDRCxZQUFZLEVBQUUsRUFBRTtRQUNoQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsSUFBSTtnQkFDWCxNQUFNLEVBQUUsR0FBRztnQkFDWCxTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxHQUFHO2dCQUNWLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7YUFDakI7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLFNBQVMsRUFBRTtnQkFDVCxhQUFhLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFF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