/*
 * @Author: xuziyong
 * @Date: 2021-10-17 00:27:00
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-10-17 15:27:16
 * @Description: TODO
 */
import Listr = require("listr");
import { logx } from './logx';
import { installTs } from "./tasks/typescript.task";

logx.info('开始运行');

const taskList = [
  {
    title: 'task: npm install',
    task: installTs
  },
];

const tasks = new Listr(taskList, { concurrent: 3 });
tasks
  .run()
  .then((subprocessRes) => {
    console.log(subprocessRes)
  })
  .catch(err => console.error(err))