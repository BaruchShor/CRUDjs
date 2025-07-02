import {read} from "./ReadData.js";
import {edit} from "./editData.js";
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


export function editUser(func,func2, messege){
    rl.question(messege+"\n", (answer) => {
        const input = answer;
        rl.close()
        func(input, func2)
})}