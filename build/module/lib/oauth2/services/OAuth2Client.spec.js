import test from 'ava';
import { AxiosHttpClient } from '../../http/AxiosHttpClient';
import { OAuth2Client } from './OAuth2Client';
// axios-mock-adaptor's typedefs are wrong preventing calling onGet with 3 args, this is a workaround
/**
 * @hidden
 */
// tslint:disable-next-line
const MockAdapter = require('axios-mock-adapter');
test('get token should request a token on the first invocation', async (t) => {
    const httpClient = new AxiosHttpClient({});
    const client = new OAuth2Client({
        client_id: 'client_id',
        client_secret: 'client_secret'
    }, {}, httpClient);
    const mock = new MockAdapter(httpClient.client);
    mock
        .onPost('https://auth.adis.ws/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
        .reply(200, {
        access_token: 'token',
        expires_in: 0,
        refresh_token: 'refresh'
    });
    t.is((await client.getToken()).access_token, 'token');
});
test('get token should cache tokens', async (t) => {
    const httpClient = new AxiosHttpClient({});
    const client = new OAuth2Client({
        client_id: 'client_id',
        client_secret: 'client_secret'
    }, {}, httpClient);
    const mock = new MockAdapter(httpClient.client);
    mock
        .onPost('https://auth.adis.ws/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
        .reply(200, {
        access_token: 'token',
        expires_in: 60,
        refresh_token: 'refresh'
    });
    const token1 = await client.getToken();
    mock
        .onPost('https://auth.adis.ws/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
        .reply(200, {
        access_token: 'token2',
        expires_in: 60,
        refresh_token: 'refresh'
    });
    const token2 = await client.getToken();
    t.is(token1.access_token, 'token');
    t.is(token2.access_token, 'token');
});
test('cached tokens should expire', async (t) => {
    const httpClient = new AxiosHttpClient({});
    const client = new OAuth2Client({
        client_id: 'client_id',
        client_secret: 'client_secret'
    }, {}, httpClient);
    const mock = new MockAdapter(httpClient.client);
    mock
        .onPost('https://auth.adis.ws/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
        .reply(200, {
        access_token: 'token',
        expires_in: -60,
        refresh_token: 'refresh'
    });
    const token1 = await client.getToken();
    mock
        .onPost('https://auth.adis.ws/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
        .reply(200, {
        access_token: 'token2',
        expires_in: 0,
        refresh_token: 'refresh'
    });
    const token2 = await client.getToken();
    t.is(token1.access_token, 'token');
    t.is(token2.access_token, 'token2');
});
test('only one token refresh should be in flight at once', async (t) => {
    const httpClient = new AxiosHttpClient({});
    const client = new OAuth2Client({
        client_id: 'client_id',
        client_secret: 'client_secret'
    }, {}, httpClient);
    const mock = new MockAdapter(httpClient.client, { delayResponse: 2000 });
    mock
        .onPost('https://auth.adis.ws/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
        .replyOnce(200, {
        access_token: 'token',
        expires_in: 0,
        refresh_token: 'refresh'
    });
    const token1 = client.getToken();
    const token2 = client.getToken();
    t.is((await token1).access_token, 'token');
    t.is((await token2).access_token, 'token');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0F1dGgyQ2xpZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL29hdXRoMi9zZXJ2aWNlcy9PQXV0aDJDbGllbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxxR0FBcUc7QUFDckc7O0dBRUc7QUFDSCwyQkFBMkI7QUFDM0IsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFbEQsSUFBSSxDQUFDLDBEQUEwRCxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUN6RSxNQUFNLFVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FDN0I7UUFDRSxTQUFTLEVBQUUsV0FBVztRQUN0QixhQUFhLEVBQUUsZUFBZTtLQUMvQixFQUNELEVBQUUsRUFDRixVQUFVLENBQ1gsQ0FBQztJQUVGLE1BQU0sSUFBSSxHQUFHLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxJQUFJO1NBQ0QsTUFBTSxDQUNMLGtDQUFrQyxFQUNsQywrRUFBK0UsQ0FDaEY7U0FDQSxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1YsWUFBWSxFQUFFLE9BQU87UUFDckIsVUFBVSxFQUFFLENBQUM7UUFDYixhQUFhLEVBQUUsU0FBUztLQUN6QixDQUFDLENBQUM7SUFFTCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDLENBQUM7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