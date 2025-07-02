import fs from "node:fs";
import readline from "node:readline";
import {read} from "./ReadData.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function createStudent(data){
    rl.question(`Enter the new student\n`, (answer) => {
        const input = answer;
    rl.close();
    data.push(input)
    fs.writeFile("DataBase.txt", JSON.stringify(data), (err) => {
        if(err){
            console.log(err);
        }
        console.log("Seccese");
    })
})}

read(createStudent)