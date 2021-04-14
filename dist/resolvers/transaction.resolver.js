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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const services_1 = require("../services");
const interfaces_1 = require("../interfaces");
let TransactionResolver = class TransactionResolver {
    constructor() {
        this.txservice = new services_1.TransactionService();
        this.usrService = new services_1.UserService();
    }
    async getTransactions() {
        return await this.txservice.getTransactions();
    }
    async getSpentIncomeAndTotalTx(id) {
        return await this.txservice.getSpentIncomeAndTotalTx(id);
    }
    async getTransactionsWithUser() {
        return await this.txservice.getTransactions();
    }
    async user(root) {
        const result = await this.usrService.getUserById(root.user_id);
        return result;
    }
};
__decorate([
    type_graphql_1.Query(() => [interfaces_1.TransactionRo]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "getTransactions", null);
__decorate([
    type_graphql_1.Query(() => interfaces_1.TransactionSpentIncomeAndTotalRo),
    __param(0, type_graphql_1.Arg("userId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "getSpentIncomeAndTotalTx", null);
__decorate([
    type_graphql_1.Query(() => [interfaces_1.TransactionWithUserRo]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "getTransactionsWithUser", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [interfaces_1.TransactionWithUserRo]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "user", null);
TransactionResolver = __decorate([
    type_graphql_1.Resolver(() => interfaces_1.TransactionWithUserRo)
], TransactionResolver);
exports.default = TransactionResolver;
//# sourceMappingURL=transaction.resolver.js.map