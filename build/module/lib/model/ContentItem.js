import { HalResource } from '../hal/models/HalResource';
import { ContentRepository } from './ContentRepository';
import { LocalizationJob } from './LocalizationJob';
import { Page } from './Page';
/**
 * Class representing the [Content Item](https://api.amplience.net/v2/content/docs/api/index.html#resources-content-items) resource.
 * Content Items are instances of content created from a content type.
 */
export class ContentItem extends HalResource {
    constructor() {
        super(...arguments);
        /**
         * Resources and actions related to a Content Item
         */
        this.related = {
            /**
             * Retrieves a specific version of the content item
             * @param version Version number requested
             */
            contentItemVersion: (version) => this.fetchLinkedResource('content-item-version', { version }, ContentItem),
            /**
             * Retrieves the ContentRepository this content item is stored in
             */
            contentRepository: () => this.fetchLinkedResource('content-repository', {}, ContentRepository),
            /**
             * Sets a locale of the form ll-CC (language, country code)
             * @param locale Locale code
             */
            setLocale: (localeDefinition) => this.performActionThatReturnsResource('set-locale', {}, { locale: localeDefinition, version: this.version }, ContentItem),
            /**
             * Create localizations of the content item
             * @param locales Array of locales to create
             */
            localize: (localesList) => this.performActionThatReturnsResource('create-localizations', {}, { locales: localesList, version: this.version }, LocalizationJob),
            /**
             * Updates this Content Item with the changes in the mutation parameter.
             * You must provide the current version number in the mutation
             * to avoid overwriting other user's changes.
             */
            update: (mutation) => this.updateResource(mutation, ContentItem),
            /**
             * Create localizations of the content item
             * @param deliveryKey String to set delivery key
             */
            setDeliveryKey: (deliveryKey) => this.performActionThatReturnsResource('set-delivery-key', {}, { deliveryKey, version: this.version }, ContentItem)
        };
    }
}
/**
 * @hidden
 */
export class ContentItemsPage extends Page {
    constructor(data) {
        super('content-items', ContentItem, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudEl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVsL0NvbnRlbnRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUc5Qjs7O0dBR0c7QUFDSCxNQUFNLGtCQUFtQixTQUFRLFdBQVc7SUFBNUM7O1FBNEVFOztXQUVHO1FBQ2EsWUFBTyxHQUFHO1lBQ3hCOzs7ZUFHRztZQUNILGtCQUFrQixFQUFFLENBQUMsT0FBZSxFQUF3QixFQUFFLENBQzVELElBQUksQ0FBQyxtQkFBbUIsQ0FDdEIsc0JBQXNCLEVBQ3RCLEVBQUUsT0FBTyxFQUFFLEVBQ1gsV0FBVyxDQUNaO1lBRUg7O2VBRUc7WUFDSCxpQkFBaUIsRUFBRSxHQUErQixFQUFFLENBQ2xELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLENBQUM7WUFFdkU7OztlQUdHO1lBQ0gsU0FBUyxFQUFFLENBQUMsZ0JBQXdCLEVBQXdCLEVBQUUsQ0FDNUQsSUFBSSxDQUFDLGdDQUFnQyxDQUNuQyxZQUFZLEVBQ1osRUFBRSxFQUNGLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQ25ELFdBQVcsQ0FDWjtZQUVIOzs7ZUFHRztZQUNILFFBQVEsRUFBRSxDQUFDLFdBQXFCLEVBQWdCLEVBQUUsQ0FDaEQsSUFBSSxDQUFDLGdDQUFnQyxDQUNuQyxzQkFBc0IsRUFDdEIsRUFBRSxFQUNGLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUMvQyxlQUFlLENBQ2hCO1lBRUg7Ozs7ZUFJRztZQUNILE1BQU0sRUFBRSxDQUFDLFFBQXFCLEVBQXdCLEVBQUUsQ0FDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO1lBRTVDOzs7ZUFHRztZQUNILGNBQWMsRUFBRSxDQUFDLFdBQW1CLEVBQUUsRUFBRSxDQUN0QyxJQUFJLENBQUMsZ0NBQWdDLENBQ25DLGtCQUFrQixFQUNsQixFQUFFLEVBQ0YsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFDdEMsV0FBVyxDQUNaO1NBQ0osQ0FBQztJQUNKLENBQUM7Q0FBQTtBQUVEOztHQUVHO0FBQ0gsTUFBTSx1QkFBd0IsU0FBUSxJQUFpQjtJQUNyRCxZQUFZLElBQVU7UUFDcEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGIn0=