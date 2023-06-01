//IMPORTING MODULES______________________________
//importing modules
const fs = require("fs")
const path = require("path")

//DEFINING VARS______________________________________
//defining variables on file and folder names:
Folder_res= "res files"
TxtFile_org = "originalTextFile.txt"

const textFile = path.join(__dirname, Folder_res, TxtFile_org)


//FUNCTIONS_________________________________________
//defining callback function
function callback (error, contentOfFile) {

    console.log("Reading file now...")

    if (error) throw error
    fileContent = contentOfFile.toString()

    console.log("File has been read.")

    

}

//EXECUTION___________________________________________
fs.readFile(textFile, 'utf-8', callback)