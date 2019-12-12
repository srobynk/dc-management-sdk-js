import test from 'ava';
import { MockDynamicContent } from '../DynamicContent.mocks';
import { ContentType } from './ContentType';
import { ContentTypeCachedSchema } from './ContentTypeCachedSchema';
test('get content type by id', async (t) => {
    const client = new MockDynamicContent();
    const result = await client.contentTypes.get('5be1d5134cedfd01c030c460');
    t.is(result.contentTypeUri, 'http://deliver.bigcontent.io/schema/carousel.json');
});
test('update', async (t) => {
    const client = new MockDynamicContent();
    const contentType = await client.contentTypes.get('5be1d5134cedfd01c030c460');
    const mutation = new ContentType({
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
    });
    const update = await contentType.related.update(mutation);
    t.deepEqual(update.settings, mutation.settings);
});
test('contentTypeSchemas.get', async (t) => {
    const client = new MockDynamicContent();
    const contentType = await client.contentTypes.get('5be1d5134cedfd01c030c460');
    const contentTypeCachedSchema = await contentType.related.contentTypeSchema.get();
    t.is(contentTypeCachedSchema.hubId, '5b32377e4cedfd01c45036d8');
});
test('contentTypeSchemas.update', async (t) => {
    const client = new MockDynamicContent();
    const contentType = await client.contentTypes.get('5be1d5134cedfd01c030c460');
    const contentTypeCachedSchema = await contentType.related.contentTypeSchema.update(new ContentTypeCachedSchema());
    t.is(contentTypeCachedSchema.hubId, '5b32377e4cedfd01c45036d8');
});
test('toJson should copy resource attributes', async (t) => {
    const client = new MockDynamicContent();
    const resource = await client.contentTypes.get('5be1d5134cedfd01c030c460');
    t.deepEqual(resource.toJson(), {
        contentTypeUri: 'http://deliver.bigcontent.io/schema/carousel.json',
        id: '5be1d5134cedfd01c030c460',
        settings: {
            icons: [
                {
                    size: 256,
                    url: 'http://apps.dev-artifacts.adis.ws/cms-icons/develop/v0.4.0/256/ca-types-grid-mixedmedia.png'
                }
            ],
            label: 'Carousel',
            visualizations: [
                {
                    default: true,
                    label: 'Desktop Website',
                    templatedUri: 'http://website'
                },
                {
                    default: false,
                    label: 'Mobile Website',
                    templatedUri: 'http://mobile.website'
                }
            ]
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFR5cGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvQ29udGVudFR5cGUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVwRSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQ3ZDLE1BQU0sTUFBTSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztJQUN4QyxNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDekUsQ0FBQyxDQUFDLEVBQUUsQ0FDRixNQUFNLENBQUMsY0FBYyxFQUNyQixtREFBbUQsQ0FDcEQsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0lBRXhDLE1BQU0sV0FBVyxHQUFHLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUU5RSxNQUFNLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQztRQUMvQixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsR0FBRyxFQUNELDZGQUE2RjtpQkFDaEc7YUFDRjtZQUNELEtBQUssRUFBRSxXQUFXO1lBQ2xCLGNBQWMsRUFBRTtnQkFDZDtvQkFDRSxP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