import lodash from "lodash";
import chalk from "chalk";

const array = [1, 1, 2, 5, 5, 98, 324, 1, 2];
const uniqueNums = lodash.uniq(array);
console.log(chalk.bgBlack(uniqueNums));

console.log(chalk.yellowBright("Hello with chalk!"));