/// <reference types="node" />
/**
 * Utility to help calculate webhook signatures
 */
export declare class WebhookSignature {
    /**
     * Calculates the signature for the provided webhook body and secret.
     * If the same secret value held by Dynamic Content is used the signature will match the value sent as part of the notification.
     * This can be used to verify the request was sent by a trusted party.
     *
     * @param body Raw response body bytes sent as part of the notification
     * @param secret Shared secret value previously set in Dynamic Content
     */
    static calculate(body: Buffer, secret: string): string;
}
