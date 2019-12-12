import { HalResource } from '../hal/models/HalResource';
import { Page } from './Page';
/**
 * Class representing the [Webhook](https://api.amplience.net/v2/content/docs/api/index.html#resources-webhooks) resource.
 * A WebHook is an HTTP callback: an HTTP POST that occurs when something happens; a simple event-notification via HTTP POST.
 */
export declare class Webhook extends HalResource {
    /**
     * Unique id generated on creation
     */
    id?: string;
    /**
     * Friendly display label for the Webhook
     */
    label?: string;
    /**
     * List of events that will cause this webhook to trigger
     */
    events?: string[];
    /**
     * List of callback URLs to invoke when an event triggers
     */
    handlers?: string[];
    /**
     * Enables or disables the webhook
     */
    active?: boolean;
    /**
     * When a notification is sent, this value will be used to calculate a cryptographic hash which is transmitted as part of the notification.
     * This hash can be used to assert a trusted party sent the notification.
     */
    secret?: string;
    /**
     * Resources and actions related to a Webhook
     */
    readonly related: {
        delete: () => Promise<void>;
    };
}
/**
 * @hidden
 */
export declare class WebhooksPage extends Page<Webhook> {
    constructor(data?: any);
}
