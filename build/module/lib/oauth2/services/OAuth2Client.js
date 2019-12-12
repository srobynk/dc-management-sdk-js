import { HttpMethod } from '../../http/HttpRequest';
import { combineURLs } from '../../utils/URL';
/**
 * @hidden
 */
export class OAuth2Client {
    constructor(clientCredentials, { authUrl = 'https://auth.adis.ws' }, httpClient) {
        this.authUrl = authUrl;
        this.clientCredentials = clientCredentials;
        this.httpClient = httpClient;
    }
    /**
     * Requests an authentication token that can be used
     * to make requests to the Dynamic Content api.
     * Tokens are reused until they expire.
     *
     * @returns {Promise<AccessToken>}
     */
    async getToken() {
        if (this.inFlight != null) {
            return this.inFlight;
        }
        if (this.token != null && this.tokenExpires > Date.now()) {
            return this.token;
        }
        const payload = 'grant_type=client_credentials' +
            '&client_id=' +
            encodeURIComponent(this.clientCredentials.client_id) +
            '&client_secret=' +
            encodeURIComponent(this.clientCredentials.client_secret);
        const request = this.httpClient.request({
            data: payload,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: HttpMethod.POST,
            url: combineURLs(this.authUrl, '/oauth/token')
        });
        this.inFlight = request.then((response) => {
            if (typeof response.data !== 'object') {
                throw new Error('Unexpected response format from /oauth/token endpoint');
            }
            this.token = response.data;
            this.tokenExpires = Date.now() + this.token.expires_in * 1000;
            this.inFlight = null;
            return this.token;
        });
        return this.inFlight;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0F1dGgyQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9vYXV0aDIvc2VydmljZXMvT0F1dGgyQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLOUM7O0dBRUc7QUFDSCxNQUFNO0lBU0osWUFDRSxpQkFBMEMsRUFDMUMsRUFBRSxPQUFPLEdBQUcsc0JBQXNCLEVBQUUsRUFDcEMsVUFBc0I7UUFFdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxLQUFLLENBQUMsUUFBUTtRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QjtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDeEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25CO1FBRUQsTUFBTSxPQUFPLEdBQ1gsK0JBQStCO1lBQy9CLGFBQWE7WUFDYixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQ3BELGlCQUFpQjtZQUNqQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDdEMsSUFBSSxFQUFFLE9BQU87WUFDYixPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLG1DQUFtQzthQUNwRDtZQUNELE1BQU0sRUFBRSxVQUFVLENBQUMsSUFBSTtZQUN2QixHQUFHLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO1NBQy9DLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FDMUIsQ0FBQyxRQUFRLEVBQWUsRUFBRTtZQUN4QixJQUFJLE9BQU8sUUFBUSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3JDLE1BQU0sSUFBSSxLQUFLLENBQ2IsdURBQXVELENBQ3hELENBQUM7YUFDSDtZQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQVcsQ0FBQztZQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUMsQ0FDc0IsQ0FBQztRQUUxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztDQUNGIn0=