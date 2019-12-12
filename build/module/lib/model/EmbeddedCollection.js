import { HalResource } from '../hal/models/HalResource';
/**
 * @hidden
 */
export class EmbeddedCollection extends HalResource {
    constructor(key, resourceType, data) {
        super(data);
        this.key = key;
        this.resourceType = resourceType;
    }
    getItems() {
        if (!this.items) {
            this.items = this.parseEmbedded(this.key, this.resourceType);
        }
        return this.items;
    }
    toJSON() {
        const result = super.toJSON();
        result._embedded[this.key] = this.getItems().map(item => item.toJSON());
        delete result.key;
        delete result.resourceType;
        delete result.items;
        return result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1iZWRkZWRDb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2RlbC9FbWJlZGRlZENvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBMEIsTUFBTSwyQkFBMkIsQ0FBQztBQUVoRjs7R0FFRztBQUNILE1BQU0seUJBRUosU0FBUSxXQUFXO0lBS25CLFlBQ0UsR0FBVyxFQUNYLFlBQXVDLEVBQ3ZDLElBQVU7UUFFVixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDakU7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVNLE1BQU07UUFDWCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNsQixPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDM0IsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRiJ9