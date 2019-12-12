"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
/**
 * @hidden
 */
var AxiosHttpClient = /** @class */ (function () {
    function AxiosHttpClient(config) {
        this.config = config;
        this.client = axios_1.default.create(config);
    }
    AxiosHttpClient.prototype.request = function (config) {
        return this.client
            .request({
            data: config.data,
            headers: config.headers,
            method: config.method,
            url: config.url
        })
            .then(function (response) {
            return {
                data: response.data,
                status: response.status
            };
        })
            .catch(function (error) {
            if (error && error.response) {
                return {
                    data: error.response.data,
                    status: error.response.status
                };
            }
            return error;
        });
    };
    return AxiosHttpClient;
}());
exports.AxiosHttpClient = AxiosHttpClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXhpb3NIdHRwQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9odHRwL0F4aW9zSHR0cENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUFpRTtBQU1qRTs7R0FFRztBQUNIO0lBR0UseUJBQW9CLE1BQTBCO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0saUNBQU8sR0FBZCxVQUFlLE1BQW1CO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU07YUFDZixPQUFPLENBQUM7WUFDUCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3ZCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUNyQixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7U0FDaEIsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDWixPQUFPO2dCQUNMLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtnQkFDbkIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNO2FBQ3hCLENBQUM7UUFDSixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLO1lBQ1YsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDM0IsT0FBTztvQkFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJO29CQUN6QixNQUFNLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNO2lCQUM5QixDQUFDO2FBQ0g7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSwwQ0FBZSJ9