"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
exports.config = {
    PORT: process.env.PORT,
    SERVICE_REGISTRY_URL: process.env.SERVICE_REGISTRY_URL,
    USER_SERVICE_URL: process.env.USER_SERVICE_URL,
    TRANSACTION_SERVICE_URL: process.env.TRANSACTION_SERVICE_URL,
};
//# sourceMappingURL=config.js.map