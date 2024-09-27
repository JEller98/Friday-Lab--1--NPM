import lodash from "lodash";
import chalk from "chalk";
import {faker} from "@faker-js/faker";
import validator from "validator";
import colors from "colors";

const array = [1, 1, 2, 5, 5, 98, 324, 1, 2];
const uniqueNums = lodash.uniq(array);
console.log(chalk.red(uniqueNums));

console.log(chalk.yellowBright("Hello with chalk!"));

//spacer
console.log("----------------------------------")

//playing around with faker, as suggested for part of the lab
const tunes = [];

for (let i = 0; i < 10; i++) {
    tunes[i] = faker.music.album();
}

//currently, I've got "An Original Frutiger Aero Album" by "cloudcrabaero" on YouTube running as I type this stuff up.
//probably a little too niche (and new) to be included in the random data, the album's less than 2 weeks old /shrug
//assuming any of this dummy data is even real...
console.log(tunes);

//spacer
console.log("----------------------------------")

//playing around with validator
const string = "$#&$@TEXT_GOES #59283492HERE_";
const email = "yea@pizza.com";

console.log(validator.isAlpha(string));
console.log(validator.isEmail(email));
console.log(validator.isBoolean(string.concat(validator.isMobilePhone(string)), ""));

//spacer
console.log("----------------------------------")

//playing around with colors
console.log("Hello world!".green);
console.log("These messages".blue);
console.log("Brought to you".green);
console.log("By Frutiger Aero 🐟".blue);
console.log("Oops, looks like the console doesn't like my fish".green);