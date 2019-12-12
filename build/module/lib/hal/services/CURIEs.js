/**
 * @hidden
 */
// tslint:disable-next-line
const template = require('url-template');
/**
 * @hidden
 */
export class CURIEs {
    static expand(href, variables) {
        variables = variables || {};
        const compiledTemplate = template.parse(href);
        return compiledTemplate.expand(variables);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1VSSUVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9oYWwvc2VydmljZXMvQ1VSSUVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsMkJBQTJCO0FBQzNCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUV6Qzs7R0FFRztBQUNILE1BQU07SUFDRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQVksRUFBRSxTQUFlO1FBQ2hELFNBQVMsR0FBRyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQzVCLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0YifQ==