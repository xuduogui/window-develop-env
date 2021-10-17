"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.installTs = void 0;
const execa_1 = __importDefault(require("execa"));
const installTs = async () => {
    try {
        const subprocessRes = await execa_1.default('npm', ['install']);
        console.log(subprocessRes);
    }
    catch (error) {
        console.error(error);
    }
    ;
};
exports.installTs = installTs;
//# sourceMappingURL=typescript.task.js.map