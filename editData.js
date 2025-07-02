import fs from "node:fs";

export function edit(data){
    fs.writeFile("DataBase.txt", JSON.stringify(data), (err) => {
        if(err){
            console.log(err);
        }
        console.log("Seccese");
    })
}