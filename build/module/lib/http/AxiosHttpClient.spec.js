import test from 'ava';
import { AxiosHttpClient } from './AxiosHttpClient';
import { HttpMethod } from './HttpRequest';
// axios-mock-adaptor's typedefs are wrong preventing calling onGet with 3 args, this is a workaround
/**
 * @hidden
 */
// tslint:disable-next-line
const MockAdapter = require('axios-mock-adapter');
test('client should use provided base url', async (t) => {
    const client = new AxiosHttpClient({
        baseURL: 'http://mywebsite.com'
    });
    const mock = new MockAdapter(client.client);
    mock.onGet('http://mywebsite.com/ping').reply(200, 'pong');
    const response = await client.request({
        method: HttpMethod.GET,
        url: 'http://mywebsite.com/ping'
    });
    t.is(response.data, 'pong');
});
test('client should return status code', async (t) => {
    const client = new AxiosHttpClient({});
    const mock = new MockAdapter(client.client);
    mock.onGet('/ping').reply(404);
    const response = await client.request({
        method: HttpMethod.GET,
        url: '/ping'
    });
    t.is(response.status, 404);
});
test('client should use provided method', async (t) => {
    const client = new AxiosHttpClient({});
    const mock = new MockAdapter(client.client);
    mock.onDelete('/resource').reply(200);
    const response = await client.request({
        method: HttpMethod.DELETE,
        url: '/resource'
    });
    t.is(response.status, 200);
});
test('client should send form data', async (t) => {
    const client = new AxiosHttpClient({});
    const mock = new MockAdapter(client.client);
    mock
        .onPost('/oauth/token', 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret')
        .reply(200, {
        access_token: 'token',
        expires_in: 0,
        refresh_token: 'refresh'
    });
    const response = await client.request({
        data: 'grant_type=client_credentials&client_id=client_id&client_secret=client_secret',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: HttpMethod.POST,
        url: '/oauth/token'
    });
    t.is(response.status, 200);
});
test('client should send JSON data', async (t) => {
    const client = new AxiosHttpClient({});
    const mock = new MockAdapter(client.client);
    mock
        .onPost('/resource/create', {
        key: 'value'
    })
        .reply(200, {
        access_token: 'token',
        expires_in: 0,
        refresh_token: 'refresh'
    });
    const response = await client.request({
        data: {
            key: 'value'
        },
        headers: {
            'Content-Type': 'application/json'
        },
        method: HttpMethod.POST,
        url: '/resource/create'
    });
    t.is(response.status, 200);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXhpb3NIdHRwQ2xpZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2h0dHAvQXhpb3NIdHRwQ2xpZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLHFHQUFxRztBQUNyRzs7R0FFRztBQUNILDJCQUEyQjtBQUMzQixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUVsRCxJQUFJLENBQUMscUNBQXFDLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQ3BELE1BQU0sTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxzQkFBc0I7S0FDaEMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRTNELE1BQU0sUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUc7UUFDdEIsR0FBRyxFQUFFLDJCQUEyQjtLQUNqQyxDQUFDLENBQUM7SUFFSCxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsa0NBQWtDLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQ2pELE1BQU0sTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDLEVB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