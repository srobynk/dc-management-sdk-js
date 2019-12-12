"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var JsonTree = /** @class */ (function () {
    function JsonTree() {
    }
    JsonTree.visit = function (data, visitor, depth) {
        if (depth === void 0) { depth = 0; }
        if (depth > 1000) {
            throw new Error('Tree depth exceeded maximum of 1000, verify the data is not self-referential');
        }
        if (data == null) {
            return;
        }
        else if (Array.isArray(data)) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                JsonTree.visit(item, visitor, depth + 1);
                visitor(item);
            }
        }
        else if (typeof data === 'object') {
            var keys = Object.keys(data);
            for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                var key = keys_1[_a];
                JsonTree.visit(data[key], visitor, depth + 1);
                visitor(data[key]);
            }
        }
    };
    return JsonTree;
}());
exports.JsonTree = JsonTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvblRyZWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3V0aWxzL0pzb25UcmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0E7O0dBRUc7QUFDSDtJQUFBO0lBMkJBLENBQUM7SUExQmUsY0FBSyxHQUFuQixVQUNFLElBQVMsRUFDVCxPQUFvQixFQUNwQixLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFNBQWlCO1FBRWpCLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLDhFQUE4RSxDQUMvRSxDQUFDO1NBQ0g7UUFFRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsT0FBTztTQUNSO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLEtBQW1CLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLEVBQUU7Z0JBQXBCLElBQU0sSUFBSSxhQUFBO2dCQUNiLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmO1NBQ0Y7YUFBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNuQyxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLEtBQWtCLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLEVBQUU7Z0JBQW5CLElBQU0sR0FBRyxhQUFBO2dCQUNaLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNwQjtTQUNGO0lBQ0gsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLDRCQUFRIn0=