import { log } from "node:console";
import fs from "node:fs";

export function showData(data){
    console.log(data);
}

export function read(func){
    fs.readFile("DataBase.txt", "utf-8", (err, data) => {
        if(err){
            console.log(err); 
        }
        data = JSON.parse(data);
        const information = data.map(obj => {
            if(typeof obj === "string"){
                return JSON.parse(obj)
            }else{
                return obj;
            }});
        func(information);
    });
}