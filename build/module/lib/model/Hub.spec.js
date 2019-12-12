import test from 'ava';
import { MockDynamicContent } from '../DynamicContent.mocks';
import { ContentType } from './ContentType';
import { Event } from './Event';
test('list hubs', async (t) => {
    const client = new MockDynamicContent();
    const result = await client.hubs.list();
    t.is(result.getItems()[0].name, 'anya-finn');
});
test('get hub by id', async (t) => {
    const client = new MockDynamicContent();
    const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');
    t.is(hub.name, 'anya-finn');
});
test('list content repositories', async (t) => {
    const client = new MockDynamicContent();
    const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');
    const result = await hub.related.contentRepositories.list();
    t.is(result.getItems()[0].name, 'inspiration');
});
test('list events', async (t) => {
    const client = new MockDynamicContent();
    const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');
    const result = await hub.related.events.list();
    t.is(result.getItems()[0].name, 'January Sale');
});
test('create event', async (t) => {
    const client = new MockDynamicContent();
    const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');
    const result = await hub.related.events.create(new Event());
    t.is(result.name, 'January Sale');
});
test('list content types', async (t) => {
    const client = new MockDynamicContent();
    const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');
    const result = await hub.related.contentTypes.list();
    t.is(result.getItems()[0].settings.label, 'Carousel');
});
test('register content type', async (t) => {
    const client = new MockDynamicContent();
    const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');
    const result = await hub.related.contentTypes.register(new ContentType());
    t.is(result.id, '5be1d5134cedfd01c030c460');
});
test('toJSON should copy resource attributes', async (t) => {
    const client = new MockDynamicContent();
    const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');
    t.deepEqual(hub.toJSON(), {
        createdBy: 'user',
        createdDate: '2018-06-26T12:54:22.142Z',
        description: 'Content for anyafinn.com',
        id: '5b32377e4cedfd01c45036d8',
        label: 'Anya Finn',
        lastModifiedBy: 'user',
        lastModifiedDate: '2018-06-26T12:54:22.142Z',
        name: 'anya-finn',
        settings: {
            applications: [],
            devices: [
                {
                    height: 768,
                    name: 'Desktop',
                    orientate: false,
                    width: 1024
                },
                {
                    height: 768,
                    name: 'Tablet',
                    orientate: false,
                    width: 640
                },
                {
                    height: 512,
                    name: 'Mobile',
                    orientate: false,
                    width: 320
                }
            ],
            previewVirtualStagingEnvironment: {
                hostname: ''
            },
            publishing: {
                platforms: {
                    amplience_dam: {
                        API_KEY: 'KEY',
                        endpoint: 'Endpoint'
                    }
                }
            },
            virtualStagingEnvironment: {
                hostname: ''
            }
        },
        status: 'ACTIVE'
    });
});
test('toJSON on a page of resources should copy resource attributes', async (t) => {
    const client = new MockDynamicContent();
    const hubs = await client.hubs.list();
    t.log(hubs.toJSON());
    t.deepEqual(hubs.toJSON(), {
        _embedded: {
            hubs: [
                {
                    createdBy: 'user',
                    createdDate: '2018-06-26T12:54:22.142Z',
                    description: 'Content for anyafinn.com',
                    id: '5b32377e4cedfd01c45036d8',
                    label: 'Anya Finn',
                    lastModifiedBy: 'user',
                    lastModifiedDate: '2018-06-26T12:54:22.142Z',
                    name: 'anya-finn',
                    settings: {
                        applications: [],
                        devices: [
                            {
                                height: 768,
                                name: 'Desktop',
                                orientate: false,
                                width: 1024
                            },
                            {
                                height: 768,
                                name: 'Tablet',
                                orientate: false,
                                width: 640
                            },
                            {
                                height: 512,
                                name: 'Mobile',
                                orientate: false,
                                width: 320
                            }
                        ],
                        previewVirtualStagingEnvironment: {
                            hostname: ''
                        },
                        publishing: {
                            platforms: {
                                amplience_dam: {
                                    API_KEY: 'KEY',
                                    endpoint: 'Endpoint'
                                }
                            }
                        },
                        virtualStagingEnvironment: {
                            hostname: ''
                        }
                    },
                    status: 'ACTIVE'
                }
            ]
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHViLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0h1Yi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sSUFBSSxNQUFNLEtBQUssQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDMUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sTUFBTSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUM5QixNQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFDeEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQywyQkFBMkIsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0lBQ3hDLE1B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