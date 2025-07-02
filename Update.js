import {read} from "./ReadData.js";
import {edit} from "./editData.js";
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


export function update(data){
    rl.question(`Enter an index to update\n`, (answer) => {
        const index = answer;
        rl.question(`Enter the new name to update\n`, (answer) => {
        const name = answer;
        rl.close()
        console.log(data);
        data[index]["name"] = name;
        console.log(data);
    edit(data);
        
})})}

read(update);