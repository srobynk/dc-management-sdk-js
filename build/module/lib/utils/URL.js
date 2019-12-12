/**
 * @hidden
 */
export function isAbsoluteURL(url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}
/**
 * @hidden
 */
export function combineURLs(baseURL, relativeURL) {
    if (isAbsoluteURL(relativeURL)) {
        return relativeURL;
    }
    else {
        return relativeURL
            ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
            : baseURL;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVJMLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi91dGlscy9VUkwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxNQUFNLHdCQUF3QixHQUFHO0lBQy9CLE9BQU8sK0JBQStCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sc0JBQXNCLE9BQWUsRUFBRSxXQUFtQjtJQUM5RCxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUM5QixPQUFPLFdBQVcsQ0FBQztLQUNwQjtTQUFNO1FBQ0wsT0FBTyxXQUFXO1lBQ2hCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1lBQ3JFLENBQUMsQ0FBQyxPQUFPLENBQUM7S0FDYjtBQUNILENBQUMifQ==