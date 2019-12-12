import axios from 'axios';
/**
 * @hidden
 */
export class AxiosHttpClient {
    constructor(config) {
        this.config = config;
        this.client = axios.create(config);
    }
    request(config) {
        return this.client
            .request({
            data: config.data,
            headers: config.headers,
            method: config.method,
            url: config.url
        })
            .then(response => {
            return {
                data: response.data,
                status: response.status
            };
        })
            .catch(error => {
            if (error && error.response) {
                return {
                    data: error.response.data,
                    status: error.response.status
                };
            }
            return error;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXhpb3NIdHRwQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9odHRwL0F4aW9zSHR0cENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQTRDLE1BQU0sT0FBTyxDQUFDO0FBTWpFOztHQUVHO0FBQ0gsTUFBTTtJQUdKLFlBQW9CLE1BQTBCO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sT0FBTyxDQUFDLE1BQW1CO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU07YUFDZixPQUFPLENBQUM7WUFDUCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3ZCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUNyQixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7U0FDaEIsQ0FBQzthQUNELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNmLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO2dCQUNuQixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07YUFDeEIsQ0FBQztRQUNKLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNiLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQzNCLE9BQU87b0JBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTtvQkFDekIsTUFBTSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTTtpQkFDOUIsQ0FBQzthQUNIO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRiJ9