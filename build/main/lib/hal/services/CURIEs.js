"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
// tslint:disable-next-line
var template = require('url-template');
/**
 * @hidden
 */
var CURIEs = /** @class */ (function () {
    function CURIEs() {
    }
    CURIEs.expand = function (href, variables) {
        variables = variables || {};
        var compiledTemplate = template.parse(href);
        return compiledTemplate.expand(variables);
    };
    return CURIEs;
}());
exports.CURIEs = CURIEs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1VSSUVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9oYWwvc2VydmljZXMvQ1VSSUVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCwyQkFBMkI7QUFDM0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXpDOztHQUVHO0FBQ0g7SUFBQTtJQU1BLENBQUM7SUFMZSxhQUFNLEdBQXBCLFVBQXFCLElBQVksRUFBRSxTQUFlO1FBQ2hELFNBQVMsR0FBRyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksd0JBQU0ifQ==