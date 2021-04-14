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
const interfaces_1 = require("../interfaces");
const services_1 = require("../services");
let UserResolver = class UserResolver {
    constructor() {
        this.service = new services_1.UserService();
    }
    async getUsers() {
        return await this.service.getUsers();
    }
    async getUsersWithTxCount() {
        return await this.service.getUsers();
    }
    async total_transactions(root) {
        const result = await this.service.getUserTxCount(root.id);
        return result.count;
    }
};
__decorate([
    type_graphql_1.Query(() => [interfaces_1.UserRo]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
__decorate([
    type_graphql_1.Query(() => [interfaces_1.UserWithTxCountRo]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsersWithTxCount", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [interfaces_1.UserWithTxCountRo]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "total_transactions", null);
UserResolver = __decorate([
    type_graphql_1.Resolver(() => interfaces_1.UserWithTxCountRo)
], UserResolver);
exports.default = UserResolver;
//# sourceMappingURL=user.resolver.js.map