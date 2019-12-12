import { AxiosRequestConfig } from 'axios';
import { DynamicContent, DynamicContentConfig } from './DynamicContent';
import { HalClient } from './hal/services/HalClient';
import { HttpClient } from './http/HttpClient';
import { AccessTokenProvider } from './oauth2/models/AccessTokenProvider';
import { OAuth2ClientCredentials } from './oauth2/models/OAuth2ClientCredentials';
/**
 * @hidden
 */
export declare const HUB: {
    id: string;
    name: string;
    label: string;
    description: string;
    status: string;
    settings: {
        virtualStagingEnvironment: {
            hostname: string;
        };
        previewVirtualStagingEnvironment: {
            hostname: string;
        };
        applications: any[];
        devices: {
            name: string;
            width: number;
            height: number;
            orientate: boolean;
        }[];
        publishing: {
            platforms: {
                amplience_dam: {
                    API_KEY: string;
                    endpoint: string;
                };
            };
        };
    };
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    _links: {
        self: {
            href: string;
        };
        hub: {
            href: string;
        };
        snapshots: {
            href: string;
            templated: boolean;
        };
        'create-snapshot': {
            href: string;
        };
        events: {
            href: string;
            templated: boolean;
        };
        'create-event': {
            href: string;
        };
        update: {
            href: string;
        };
        delete: {
            href: string;
        };
        'update-settings': {
            href: string;
        };
        share: {
            href: string;
        };
        'content-repositories': {
            href: string;
            templated: boolean;
        };
        'create-content-repository': {
            href: string;
        };
        'register-content-type': {
            href: string;
        };
        'content-types': {
            href: string;
            templated: boolean;
        };
        'list-content-type-schemas': {
            href: string;
            templated: boolean;
        };
        'create-content-type-schema': {
            href: string;
        };
        'search-content-items': {
            href: string;
            templated: boolean;
        };
        webhooks: {
            href: string;
            templated: boolean;
        };
        'create-webhook': {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare const CONTENT_ITEM: {
    id: string;
    folderId: string;
    body: {
        _meta: {
            name: string;
            schema: string;
        };
    };
    version: number;
    label: string;
    status: string;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    deliveryId: string;
    _links: {
        self: {
            href: string;
        };
        'content-item': {
            href: string;
        };
        publish: {
            href: string;
        };
        planned: {
            href: string;
            templated: boolean;
        };
        update: {
            href: string;
        };
        delete: {
            href: string;
        };
        'restore-version': {
            href: string;
        };
        'content-repository': {
            href: string;
        };
        'content-item-version': {
            href: string;
            templated: boolean;
        };
        'content-item-versions': {
            href: string;
            templated: boolean;
        };
        'content-item-history': {
            href: string;
            templated: boolean;
        };
        copy: {
            href: string;
            templated: boolean;
        };
        folder: {
            href: string;
        };
        'content-item-with-children': {
            href: string;
        };
        'set-locale': {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare const CONTENT_ITEM_V2: {
    id: string;
    folderId: string;
    body: {
        _meta: {
            name: string;
            schema: string;
        };
    };
    version: number;
    label: string;
    status: string;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    deliveryId: string;
    _links: {
        self: {
            href: string;
        };
        'content-item': {
            href: string;
        };
        publish: {
            href: string;
        };
        planned: {
            href: string;
            templated: boolean;
        };
        update: {
            href: string;
        };
        delete: {
            href: string;
        };
        'restore-version': {
            href: string;
        };
        'content-repository': {
            href: string;
        };
        'content-item-version': {
            href: string;
            templated: boolean;
        };
        'content-item-versions': {
            href: string;
            templated: boolean;
        };
        'content-item-history': {
            href: string;
            templated: boolean;
        };
        copy: {
            href: string;
            templated: boolean;
        };
        folder: {
            href: string;
        };
        'content-item-with-children': {
            href: string;
        };
        'set-locale': {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare const CONTENT_ITEM_WITH_LOCALE: {
    id: string;
    folderId: string;
    body: {
        _meta: {
            name: string;
            schema: string;
        };
    };
    version: number;
    label: string;
    status: string;
    locale: string;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    deliveryId: string;
    _links: {
        self: {
            href: string;
        };
        'content-item': {
            href: string;
        };
        publish: {
            href: string;
        };
        planned: {
            href: string;
            templated: boolean;
        };
        update: {
            href: string;
        };
        delete: {
            href: string;
        };
        'restore-version': {
            href: string;
        };
        'content-repository': {
            href: string;
        };
        'content-item-version': {
            href: string;
            templated: boolean;
        };
        'content-item-versions': {
            href: string;
            templated: boolean;
        };
        'content-item-history': {
            href: string;
            templated: boolean;
        };
        copy: {
            href: string;
            templated: boolean;
        };
        folder: {
            href: string;
        };
        'content-item-with-children': {
            href: string;
        };
        'set-locale': {
            href: string;
        };
        'create-localizations': {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare const CONTENT_TYPE_SCHEMA: {
    validationLevel: string;
    body: string;
    schemaId: string;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    version: number;
    id: string;
    _links: {
        self: {
            href: string;
        };
        'content-type-schema': {
            href: string;
        };
        hub: {
            href: string;
        };
        history: {
            href: string;
        };
        getByVersion: {
            href: string;
            templated: boolean;
        };
        update: {
            href: string;
        };
        restore: {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare const CONTENT_TYPE_SCHEMA_V2: {
    validationLevel: string;
    body: string;
    schemaId: string;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    version: number;
    id: string;
    _links: {
        self: {
            href: string;
        };
        'content-type-schema': {
            href: string;
        };
        hub: {
            href: string;
        };
        history: {
            href: string;
        };
        getByVersion: {
            href: string;
            templated: boolean;
        };
        update: {
            href: string;
        };
        restore: {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare const CONTENT_REPOSITORY: {
    id: string;
    name: string;
    label: string;
    status: string;
    features: any[];
    type: string;
    contentTypes: any[];
    itemLocales: string[];
    _links: {
        self: {
            href: string;
        };
        'content-repository': {
            href: string;
        };
        update: {
            href: string;
        };
        delete: {
            href: string;
        };
        hub: {
            href: string;
        };
        'create-content-item': {
            href: string;
        };
        'search-content-items': {
            href: string;
            templated: boolean;
        };
        'content-items': {
            href: string;
            templated: boolean;
        };
        share: {
            href: string;
        };
        'assign-content-type': {
            href: string;
        };
        'unassign-content-type': {
            href: string;
            templated: boolean;
        };
        folders: {
            href: string;
            templated: boolean;
        };
        'create-folder': {
            href: string;
        };
        features: {
            href: string;
            templated: boolean;
        };
        'update-content-items': {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare const EVENT: {
    id: string;
    name: string;
    comment: string;
    start: string;
    end: string;
    brief: string;
    _links: {
        self: {
            href: string;
        };
        event: {
            href: string;
        };
        update: {
            href: string;
        };
        delete: {
            href: string;
        };
        hub: {
            href: string;
        };
        editions: {
            href: string;
            templated: boolean;
        };
        'create-edition': {
            href: string;
            templated: boolean;
        };
    };
};
/**
 * @hidden
 */
export declare const EDITION: {
    id: string;
    name: string;
    comment: string;
    start: string;
    end: string;
    eventId: string;
    publishingStatus: string;
    slotsRemaining: number;
    schedulingErrors: any;
    activeEndDate: boolean;
    publishingJobId: any;
    statusUpdated: string;
    schedulingUser: any;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    stagedDate: any;
    _links: {
        self: {
            href: string;
        };
        edition: {
            href: string;
        };
        'create-preview': {
            href: string;
        };
        preview: {
            href: string;
        };
        schedule: {
            href: string;
            templated: boolean;
        };
        update: {
            href: string;
        };
        delete: {
            href: string;
        };
        slots: {
            href: string;
        };
        'list-slots': {
            href: string;
            templated: boolean;
        };
        event: {
            href: string;
        };
        'edition-conflicts': {
            href: string;
        };
        'edition-conflict': {
            href: string;
            templated: boolean;
        };
    };
};
/**
 * @hidden
 */
export declare const EDITION_SLOT: {
    eventId: string;
    editionId: string;
    createdDate: string;
    content: {
        body: {
            _meta: {
                schema: string;
                name: string;
            };
        };
    };
    status: string;
    contentTypeId: string;
    slotId: string;
    slotLabel: string;
    conflicts: boolean;
    empty: boolean;
    _links: {
        self: {
            href: string;
        };
        'edition-slot': {
            href: string;
        };
        edition: {
            href: string;
        };
        slot: {
            href: string;
        };
        content: {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare const SNAPSHOT: {
    id: string;
    comment: string;
    createdDate: string;
    createdBy: string;
    type: string;
    meta: any[];
    taggedEditions: any[];
    rootContentItem: {
        label: string;
        contentTypeUri: string;
    };
    _links: {
        self: {
            href: string;
        };
        snapshot: {
            href: string;
        };
        'publishing-jobs': {
            href: string;
            templated: boolean;
        };
        'create-publishing-job': {
            href: string;
        };
        'edition-links': {
            href: string;
        };
        hub: {
            href: string;
        };
        'content-root': {
            href: string;
        };
        'snapshot-content-item': {
            href: string;
            templated: boolean;
        };
    };
};
/**
 * @hidden
 */
export declare const LOCALIZATION_JOB: {
    status: string;
    rootContentItem: {
        label: string;
        locale: string;
        id: string;
    };
    requestedLocales: string[];
    createdBy: string;
    createdDate: string;
    _links: {
        'content-root': {
            href: string;
        };
        findByRootContentItem: {
            href: string;
            templated: boolean;
        };
    };
};
/**
 * @hidden
 */
export declare const FOLDER: {
    id: string;
    name: string;
    _links: {
        self: {
            href: string;
        };
        folder: {
            href: string;
        };
        folders: {
            href: string;
        };
        'content-repository': {
            href: string;
        };
        'content-items': {
            href: string;
        };
        'create-folder': {
            href: string;
        };
        'delete-folder': {
            href: string;
        };
        'update-folder': {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare const NEW_FOLDER: {
    id: string;
    name: string;
    _links: {
        self: {
            href: string;
        };
        folder: {
            href: string;
        };
        folders: {
            href: string;
        };
        'content-repository': {
            href: string;
        };
        'content-items': {
            href: string;
        };
        'create-folder': {
            href: string;
        };
        'delete-folder': {
            href: string;
        };
        'update-folder': {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare const WEBHOOK: {
    id: string;
    label: string;
    events: string[];
    active: boolean;
    handlers: string[];
    notifications: any[];
    secret: string;
    createdDate: string;
    lastModifiedDate: string;
    _links: {
        self: {
            href: string;
        };
        hub: {
            href: string;
        };
        requests: {
            href: string;
            templated: boolean;
        };
        'event-types': {
            href: string;
        };
        update: {
            href: string;
        };
        delete: {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare const CONTENT_TYPE: {
    id: string;
    contentTypeUri: string;
    settings: {
        label: string;
        icons: {
            size: number;
            url: string;
        }[];
        visualizations: {
            label: string;
            templatedUri: string;
            default: boolean;
        }[];
    };
    _links: {
        self: {
            href: string;
        };
        update: {
            href: string;
        };
        'content-type': {
            href: string;
        };
        'effective-content-type': {
            href: string;
        };
        'content-type-schema': {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare const CONTENT_TYPE_CACHED_SCHEMA: {
    hubId: string;
    contentTypeUri: string;
    cachedSchema: {
        $schema: string;
        id: string;
        title: string;
        description: string;
        allOf: {
            $ref: string;
        }[];
        type: string;
        properties: {
            inlineExample: {
                type: string;
                title: string;
                properties: {
                    field1: {
                        type: string;
                        title: string;
                    };
                };
                required: string[];
            };
            internalRefExample: {
                $ref: string;
            };
            externalRefExample: {
                $ref: string;
            };
            arrayExample: {
                type: string;
                title: string;
                items: {
                    $ref: string;
                };
            };
        };
        definitions: {
            mapEntry: {
                type: string;
                title: string;
                properties: {
                    key: {
                        type: string;
                        title: string;
                    };
                    value: {
                        type: string;
                        title: string;
                    };
                };
                required: string[];
            };
        };
    };
    _links: {
        self: {
            href: string;
        };
    };
};
/**
 * @hidden
 */
export declare class DynamicContentFixtures {
    static install(mock: any): void;
}
/**
 * @hidden
 */
export declare class MockDynamicContent extends DynamicContent {
    mock: any;
    constructor(clientCredentials?: OAuth2ClientCredentials, dcConfig?: DynamicContentConfig, httpClient?: AxiosRequestConfig);
    protected createTokenClient(dcConfig: DynamicContentConfig, clientCredentials: OAuth2ClientCredentials, httpClient: HttpClient): AccessTokenProvider;
    protected createResourceClient(dcConfig: DynamicContentConfig, tokenProvider: AccessTokenProvider, httpClient: HttpClient): HalClient;
}
