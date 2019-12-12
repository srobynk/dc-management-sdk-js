import { createHmac } from 'crypto';
/**
 * Utility to help calculate webhook signatures
 */
export class WebhookSignature {
    /**
     * Calculates the signature for the provided webhook body and secret.
     * If the same secret value held by Dynamic Content is used the signature will match the value sent as part of the notification.
     * This can be used to verify the request was sent by a trusted party.
     *
     * @param body Raw response body bytes sent as part of the notification
     * @param secret Shared secret value previously set in Dynamic Content
     */
    static calculate(body, secret) {
        const hmac = createHmac('sha256', secret);
        hmac.update(body, 'utf8');
        return hmac.digest('base64');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViaG9va1NpZ25hdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvV2ViaG9va1NpZ25hdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXBDOztHQUVHO0FBQ0gsTUFBTTtJQUNKOzs7Ozs7O09BT0c7SUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVksRUFBRSxNQUFjO1FBQ2xELE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRiJ9