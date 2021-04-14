"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
class TransactionService {
    async getTransactions() {
        try {
            const result = await axios_1.default.get(utils_1.composeURL("transactions", ""));
            console.log(result.data.data);
            return result.data.data;
        }
        catch (error) {
            throw utils_1.createError(error.message, error.statusCode);
        }
    }
    async getSpentIncomeAndTotalTx(userId) {
        try {
            const result = await axios_1.default.get(utils_1.composeURL("transactions", `users/${userId}/spent-income-and-txCount`));
            return { ...result.data.data, total: result.data.data.count };
        }
        catch (error) {
            throw utils_1.createError(error.message, error.statusCode);
        }
    }
}
exports.default = TransactionService;
//# sourceMappingURL=transaction.service.js.map