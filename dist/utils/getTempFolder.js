"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTempFolder = void 0;
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const getTempFolder = () => {
    let uploadDirectory = os_1.default.tmpdir();
    const tempDirectoryExists = fs_1.default.existsSync(uploadDirectory);
    console.log("Temp directory exists? ", tempDirectoryExists);
    if (tempDirectoryExists) {
        console.log("Temp directory: ", uploadDirectory);
        uploadDirectory = uploadDirectory.toString();
        if (uploadDirectory.includes(":"))
            uploadDirectory = uploadDirectory.split(":")[1];
    }
    else {
        uploadDirectory = "uploads/";
        if (!fs_1.default.existsSync(uploadDirectory))
            fs_1.default.mkdirSync(uploadDirectory);
    }
    console.log("Upload directory: ", uploadDirectory);
    return uploadDirectory;
};
exports.getTempFolder = getTempFolder;
//# sourceMappingURL=getTempFolder.js.map