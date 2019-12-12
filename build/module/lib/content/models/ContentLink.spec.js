import test from 'ava';
import { ContentLink } from './ContentLink';
test('should identify valid content links', async (t) => {
    const result = ContentLink.isContentLink({
        _meta: {
            schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/content-link'
        }
    });
    await t.truthy(result);
});
test('should identify invalid content links', async (t) => {
    const result = ContentLink.isContentLink({
        _meta: {
            schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link'
        }
    });
    await t.falsy(result);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudExpbmsuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29udGVudC9tb2RlbHMvQ29udGVudExpbmsuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1QyxJQUFJLENBQUMscUNBQXFDLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQ3BELE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDdkMsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUNKLG1FQUFtRTtTQUN0RTtLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyx1Q0FBdUMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDdEQsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUN2QyxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsaUVBQWlFO1NBQzFFO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUFDIn0=