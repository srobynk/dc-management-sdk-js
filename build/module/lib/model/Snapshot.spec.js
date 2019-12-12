import test from 'ava';
import { MockDynamicContent } from '../DynamicContent.mocks';
test('get snapshot by id', async (t) => {
    const client = new MockDynamicContent();
    const result = await client.snapshots.get('5b3237944cedfd01c45038ae');
    t.is(result.comment, 'This is an example snapshot.');
});
test('get content item from snapshot', async (t) => {
    const client = new MockDynamicContent();
    const snapshot = await client.snapshots.get('5b3237944cedfd01c45038ae');
    const result = await snapshot.related.snapshotContentItem('a87fd535-fb25-44ee-b687-0db72bbab721');
    t.is(result.label, 'Banner Ad Homepage');
});
test('toJSON should copy resource attributes', async (t) => {
    const client = new MockDynamicContent();
    const snapshot = await client.snapshots.get('5b3237944cedfd01c45038ae');
    t.deepEqual(snapshot.toJSON(), {
        comment: 'This is an example snapshot.',
        createdBy: 'thor',
        createdDate: '2017-06-05T04:03:02Z',
        id: '5b3237944cedfd01c45038ae',
        meta: [],
        rootContentItem: {
            contentTypeUri: 'http://deliver.bigcontent.io/schema/nested/nested-type.json',
            label: 'Banner Ad Homepage'
        },
        taggedEditions: [],
        type: 'USER'
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU25hcHNob3Quc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvU25hcHNob3Quc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0QsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUNuQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFDeEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUMvQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFDeEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3hFLE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FDdkQsc0NBQXNDLENBQ3ZDLENBQUM7SUFFRixDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyx3Q0FBd0MsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDdkQsTUFBTSxNQUFNLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUV4RSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUM3QixPQUFPLEVBQUUsOEJBQThCO1FBQ3ZDLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsRUFBRSxFQUFFLDBCQUEwQjtRQUM5QixJQUFJLEVBQUUsRUFBRTtRQUNSLGVBQWUsRUFBRTtZQUNmLGNBQWMsRUFDWiw2REFBNkQ7WUFDL0QsS0FBSyxFQUFFLG9CQUFvQjtTQUM1QjtRQUNELGNBQWMsRUFBRSxFQUFFO1FBQ2xCLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==