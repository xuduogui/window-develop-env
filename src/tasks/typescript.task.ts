/*
 * @Author: xuziyong
 * @Date: 2021-10-17 09:31:29
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-10-17 15:31:08
 * @Description: TODO
 */
import execa from "execa";


export const installTs = async () => {
  try {
    const subprocessRes = await execa.command('npm install  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -d');
    console.log(subprocessRes)
  } catch (error) {
    console.error(error);
  };
}