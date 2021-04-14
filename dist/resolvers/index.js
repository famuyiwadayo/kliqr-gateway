"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_resolver_1 = __importDefault(require("./user.resolver"));
const transaction_resolver_1 = __importDefault(require("./transaction.resolver"));
const resolvers = [
    user_resolver_1.default,
    transaction_resolver_1.default,
];
exports.default = resolvers;
//# sourceMappingURL=index.js.map