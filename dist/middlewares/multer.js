"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const getTempFolder_1 = require("../utils/getTempFolder");
exports.upload = multer_1.default({
    storage: multer_1.default.diskStorage({
        destination: (_, __, callback) => {
            callback(null, getTempFolder_1.getTempFolder());
        },
        filename: (_, file, callback) => {
            const fileParts = file.originalname.split(".");
            const fileExtension = "." + fileParts[fileParts.length - 1];
            file.extension = fileExtension;
            const name = `${Math.floor(Math.random() * 100000)}-${file.originalname}`;
            callback(null, name);
        },
    }),
});
//# sourceMappingURL=multer.js.map