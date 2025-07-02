import fs from "node:fs";
import readline from "node:readline";
import {read} from "./ReadData.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function deleteStudent(data){
    rl.question(`Enter the new student\n`, (answer) => {
        const index = answer;
    rl.close();
    data.splice(index, 1)
    fs.writeFile("DataBase.txt", JSON.stringify(data), (err) => {
        if(err){
            console.log(err);
        }
        console.log("Seccese");
    })
})}

read(deleteStudent)