export class HttpError extends Error {
    constructor(message, request, response) {
        super(message);
        this.request = request;
        this.response = response;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cEVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9odHRwL0h0dHBFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLGdCQUFpQixTQUFRLEtBQUs7SUFDbEMsWUFDRSxPQUFlLEVBQ0MsT0FBcUIsRUFDckIsUUFBdUI7UUFFdkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBSEMsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBR3ZDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGIn0=