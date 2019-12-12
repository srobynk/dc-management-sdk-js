import { HalResource } from '../hal/models/HalResource';
import { Page } from './Page';
/**
 * Class representing the [Webhook](https://api.amplience.net/v2/content/docs/api/index.html#resources-webhooks) resource.
 * A WebHook is an HTTP callback: an HTTP POST that occurs when something happens; a simple event-notification via HTTP POST.
 */
export class Webhook extends HalResource {
    constructor() {
        super(...arguments);
        /**
         * Resources and actions related to a Webhook
         */
        this.related = {
            delete: () => this.deleteResource()
        };
    }
}
/**
 * @hidden
 */
export class WebhooksPage extends Page {
    constructor(data) {
        super('webhooks', Webhook, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWwvV2ViaG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU5Qjs7O0dBR0c7QUFDSCxNQUFNLGNBQWUsU0FBUSxXQUFXO0lBQXhDOztRQWdDRTs7V0FFRztRQUNhLFlBQU8sR0FBRztZQUN4QixNQUFNLEVBQUUsR0FBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7U0FDbkQsQ0FBQztJQUNKLENBQUM7Q0FBQTtBQUVEOztHQUVHO0FBQ0gsTUFBTSxtQkFBb0IsU0FBUSxJQUFhO0lBQzdDLFlBQVksSUFBVTtRQUNwQixLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0YifQ==