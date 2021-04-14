"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSpentIncomeAndTotalRo = exports.TransactionWithUserRo = exports.TransactionRo = void 0;
const type_graphql_1 = require("type-graphql");
const user_ro_1 = require("./user.ro");
let TransactionRo = class TransactionRo {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], TransactionRo.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], TransactionRo.prototype, "user_id", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], TransactionRo.prototype, "amount", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TransactionRo.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TransactionRo.prototype, "category", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TransactionRo.prototype, "icon_url", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TransactionRo.prototype, "date_time", void 0);
TransactionRo = __decorate([
    type_graphql_1.ObjectType()
], TransactionRo);
exports.TransactionRo = TransactionRo;
let TransactionWithUserRo = class TransactionWithUserRo extends TransactionRo {
};
__decorate([
    type_graphql_1.Field(() => user_ro_1.UserRo, { nullable: true }),
    __metadata("design:type", user_ro_1.UserRo)
], TransactionWithUserRo.prototype, "user", void 0);
TransactionWithUserRo = __decorate([
    type_graphql_1.ObjectType()
], TransactionWithUserRo);
exports.TransactionWithUserRo = TransactionWithUserRo;
let TransactionSpentIncomeAndTotalRo = class TransactionSpentIncomeAndTotalRo {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], TransactionSpentIncomeAndTotalRo.prototype, "spent", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], TransactionSpentIncomeAndTotalRo.prototype, "income", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], TransactionSpentIncomeAndTotalRo.prototype, "total", void 0);
TransactionSpentIncomeAndTotalRo = __decorate([
    type_graphql_1.ObjectType()
], TransactionSpentIncomeAndTotalRo);
exports.TransactionSpentIncomeAndTotalRo = TransactionSpentIncomeAndTotalRo;
//# sourceMappingURL=transaction.ro.js.map