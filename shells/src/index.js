"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const execa = __importStar(require("execa"));
const Listr = require("listr");
const fs = __importStar(require("fs-extra"));
const logx_1 = require("./logx");
logx_1.logx.info('开始运行');
const taskList = [
    {
        title: '检查npm版本',
        task: async () => {
            try {
                const subprocessRes = await execa.command('npm install');
                console.log(subprocessRes);
                fs.outputFileSync('./msg.json', JSON.stringify(subprocessRes));
            }
            catch (error) {
                console.error(error);
            }
            ;
        }
    },
    {
        title: '检查git版本',
        task: async () => {
            try {
                const subprocessRes = await execa.command('git --version');
            }
            catch (error) {
                console.error(error);
            }
            ;
        }
    },
    {
        title: '检查vue版本',
        task: async () => {
            try {
                const subprocessRes = await execa.command('vue --version');
            }
            catch (error) {
                console.error(error);
            }
            ;
        }
    },
];
const tasks = new Listr(taskList, { concurrent: 3 });
tasks
    .run()
    .then((subprocessRes) => {
    console.log(subprocessRes);
})
    .catch(err => console.error(err));
//# sourceMappingURL=index.js.map