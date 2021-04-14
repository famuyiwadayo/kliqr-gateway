"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config/config");
function composeURL(service, endpoint, query) {
    return `${service === "users"
        ? config_1.config.USER_SERVICE_URL
        : config_1.config.TRANSACTION_SERVICE_URL}/${service === "users" ? "users" : "transactions"}/${endpoint}${query ? `?${query}` : ""}`;
}
exports.default = composeURL;
//# sourceMappingURL=composeUrl.js.map