/*
 * @Author: xuziyong
 * @Date: 2021-10-17 00:27:00
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-10-17 16:06:54
 * @Description: TODO
 */
import Listr = require("listr");
import { logx } from './logx';
import runs from "./runs";

logx.info('============= 开始运行 =============');

const tasks = new Listr(runs, { concurrent: 3 });

tasks
  .run()
  .then((subprocessRes) => {
    console.log(subprocessRes)
  })
  .catch(err => console.error(err))