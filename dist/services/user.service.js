"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
class UserService {
    async getUsers() {
        const result = await axios_1.default.get(utils_1.composeURL("users", "users"));
        return result.data.data;
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map