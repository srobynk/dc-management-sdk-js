import test from 'ava';
import { MockDynamicContent } from './DynamicContent.mocks';
test('should default auth and api url if not provided', async (t) => {
    const client = new MockDynamicContent({
        client_id: 'client_id',
        client_secret: 'client_secret'
    });
    const hubs = await client.hubs.list();
    t.is(hubs.getItems().length, 1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0NvbnRlbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvRHluYW1pY0NvbnRlbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsSUFBSSxDQUFDLGlEQUFpRCxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUNoRSxNQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixDQUFDO1FBQ3BDLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLGFBQWEsRUFBRSxlQUFlO0tBQy9CLENBQUMsQ0FBQztJQUVILE1BQU0sSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUMifQ==