"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
/**
 * Utility to help calculate webhook signatures
 */
var WebhookSignature = /** @class */ (function () {
    function WebhookSignature() {
    }
    /**
     * Calculates the signature for the provided webhook body and secret.
     * If the same secret value held by Dynamic Content is used the signature will match the value sent as part of the notification.
     * This can be used to verify the request was sent by a trusted party.
     *
     * @param body Raw response body bytes sent as part of the notification
     * @param secret Shared secret value previously set in Dynamic Content
     */
    WebhookSignature.calculate = function (body, secret) {
        var hmac = crypto_1.createHmac('sha256', secret);
        hmac.update(body, 'utf8');
        return hmac.digest('base64');
    };
    return WebhookSignature;
}());
exports.WebhookSignature = WebhookSignature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViaG9va1NpZ25hdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvV2ViaG9va1NpZ25hdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFvQztBQUVwQzs7R0FFRztBQUNIO0lBQUE7SUFjQSxDQUFDO0lBYkM7Ozs7Ozs7T0FPRztJQUNXLDBCQUFTLEdBQXZCLFVBQXdCLElBQVksRUFBRSxNQUFjO1FBQ2xELElBQU0sSUFBSSxHQUFHLG1CQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLDRDQUFnQiJ9