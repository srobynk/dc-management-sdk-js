import test from 'ava';
import { MockDynamicContent } from '../DynamicContent.mocks';
import { ContentTypeSchema } from './ContentTypeSchema';
test('list ContentTypeSchemas for a Hub', async (t) => {
    const client = new MockDynamicContent();
    const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');
    const result = await hub.related.contentTypeSchema.list();
    t.is(result.getItems()[0].schemaId, 'http://example.com/content-type-schema.json');
});
test('get a ContentTypeSchema', async (t) => {
    const client = new MockDynamicContent();
    const result = await client.contentTypeSchemas.get('5d4af55ced6688002869d808');
    t.is(result.schemaId, 'http://example.com/content-type-schema.json');
});
test('get a version ContentTypeSchema', async (t) => {
    const client = new MockDynamicContent();
    const result = await client.contentTypeSchemas.getByVersion('5d4af55ced6688002869d808', 2);
    t.is(result.schemaId, 'http://example.com/content-type-schema.json');
});
test('create a ContentTypeSchema', async (t) => {
    const client = new MockDynamicContent();
    const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');
    const newContentTypeSchema = new ContentTypeSchema();
    newContentTypeSchema.schemaId = 'http://example.com/content-type-schema.json';
    newContentTypeSchema.body = JSON.stringify({
        $schema: 'http://json-schema.org/draft-04/schema#',
        id: 'http://example.com/content-type-schema.json',
        title: 'Image'
    });
    const createContentTypeSchema = await hub.related.contentTypeSchema.create(newContentTypeSchema);
    t.is(createContentTypeSchema.schemaId, 'http://example.com/content-type-schema.json');
});
test('update a ContentTypeSchema', async (t) => {
    const client = new MockDynamicContent();
    const result = await client.contentTypeSchemas.get('5d4af55ced6688002869d808');
    const createContentTypeSchema = await result.related.update(result);
    t.is(createContentTypeSchema.version, 2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFR5cGVTY2hlbWEuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvQ29udGVudFR5cGVTY2hlbWEuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUNsRCxNQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFDeEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzlELE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDLENBQUMsRUFBRSxDQUNGLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQzdCLDZDQUE2QyxDQUM5QyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMseUJBQXlCLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQ3hDLE1BQU0sTUFBTSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztJQUN4QyxNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQ2hELDBCQUEwQixDQUMzQixDQUFDO0lBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLDZDQUE2QyxDQUFDLENBQUM7QUFDdkUsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQ2hELE1BQU0sTUFBTSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztJQUN4QyxNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQ3pELDBCQUEwQixFQUMxQixDQUFDLENBQ0YsQ0FBQztJQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSw2Q0FBNkMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDRCQUE0QixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUMzQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFDeEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzlELE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0lBQ3JELG9CQUFvQixDQUFDLFFBQVEsR0FBRyw2Q0FBNkMsQ0FBQztJQUM5RSxvQkFBb0IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxPQUFPLEVBQUUseUNBQXlDO1FBQ2xELEVBQUUsRUFBRSw2Q0FBNkM7UUFDakQsS0FBSyxFQUFFLE9BQU87S0FDZixDQUFDLENBQUM7SUFDSCxNQUFNLHVCQUF1QixHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQ3hFLG9CQUFvQixDQUNyQixDQUFDO0lBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FDRix1QkFBdUIsQ0FBQyxRQUFRLEVBQ2hDLDZDQUE2QyxDQUM5QyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQzNDLE1BQU0sTUFBTSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztJQUN4QyxNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQ2hELDBCQUEwQixDQUMzQixDQUFDO0lBQ0YsTUFBTSx1QkFBdUIsR0FBRyxNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUMsQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDIn0=