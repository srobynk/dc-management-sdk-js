/**
 * @hidden
 */
export class JsonTree {
    static visit(data, visitor, depth = 0) {
        if (depth > 1000) {
            throw new Error('Tree depth exceeded maximum of 1000, verify the data is not self-referential');
        }
        if (data == null) {
            return;
        }
        else if (Array.isArray(data)) {
            for (const item of data) {
                JsonTree.visit(item, visitor, depth + 1);
                visitor(item);
            }
        }
        else if (typeof data === 'object') {
            const keys = Object.keys(data);
            for (const key of keys) {
                JsonTree.visit(data[key], visitor, depth + 1);
                visitor(data[key]);
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvblRyZWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3V0aWxzL0pzb25UcmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOztHQUVHO0FBQ0gsTUFBTTtJQUNHLE1BQU0sQ0FBQyxLQUFLLENBQ2pCLElBQVMsRUFDVCxPQUFvQixFQUNwQixRQUFnQixDQUFDO1FBRWpCLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLDhFQUE4RSxDQUMvRSxDQUFDO1NBQ0g7UUFFRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsT0FBTztTQUNSO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUN2QixRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtTQUNGO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDdEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3BCO1NBQ0Y7SUFDSCxDQUFDO0NBQ0YifQ==