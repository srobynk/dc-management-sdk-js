"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-expression-statement
var ava_1 = __importDefault(require("ava"));
var CURIEs_1 = require("./CURIEs");
ava_1.default('should ignore query parameters that are not provided', function (t) {
    var href = CURIEs_1.CURIEs.expand('/resource{?page}', {});
    t.is(href, '/resource');
});
ava_1.default('should replace provided query parameters', function (t) {
    var href = CURIEs_1.CURIEs.expand('/resource{?page}', { page: 1 });
    t.is(href, '/resource?page=1');
});
ava_1.default('should replace multiple provided query parameters', function (t) {
    var href = CURIEs_1.CURIEs.expand('/resource{?page,size}', { page: 1, size: 10 });
    t.is(href, '/resource?page=1&size=10');
});
ava_1.default('should only include provided query parameters', function (t) {
    var href = CURIEs_1.CURIEs.expand('/resource{?page,size}', { page: 1 });
    t.is(href, '/resource?page=1');
});
ava_1.default('should encode query string parameters', function (t) {
    var href = CURIEs_1.CURIEs.expand('/resource{?page,size}', { page: '=' });
    t.is(href, '/resource?page=%3D');
});
ava_1.default('should replace path parameters', function (t) {
    var href = CURIEs_1.CURIEs.expand('/resource/{id}', { id: 1 });
    t.is(href, '/resource/1');
});
ava_1.default('should replace with empty value if required path parameters missing', function (t) {
    var href = CURIEs_1.CURIEs.expand('/resource/{id}', {});
    t.is(href, '/resource/');
});
ava_1.default('should default parameters', function (t) {
    var href = CURIEs_1.CURIEs.expand('/resource');
    t.is(href, '/resource');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1VSSUVzLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2hhbC9zZXJ2aWNlcy9DVVJJRXMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDQUF5QztBQUN6Qyw0Q0FBdUI7QUFDdkIsbUNBQWtDO0FBRWxDLGFBQUksQ0FBQyxzREFBc0QsRUFBRSxVQUFBLENBQUM7SUFDNUQsSUFBTSxJQUFJLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQywwQ0FBMEMsRUFBRSxVQUFBLENBQUM7SUFDaEQsSUFBTSxJQUFJLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMsbURBQW1ELEVBQUUsVUFBQSxDQUFDO0lBQ3pELElBQU0sSUFBSSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLDBCQUEwQixDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMsK0NBQStDLEVBQUUsVUFBQSxDQUFDO0lBQ3JELElBQU0sSUFBSSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLHVDQUF1QyxFQUFFLFVBQUEsQ0FBQztJQUM3QyxJQUFNLElBQUksR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxVQUFBLENBQUM7SUFDdEMsSUFBTSxJQUFJLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLHFFQUFxRSxFQUFFLFVBQUEsQ0FBQztJQUMzRSxJQUFNLElBQUksR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLDJCQUEyQixFQUFFLFVBQUEsQ0FBQztJQUNqQyxJQUFNLElBQUksR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzFCLENBQUMsQ0FBQyxDQUFDIn0=