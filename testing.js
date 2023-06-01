//IMPORTING MODULES______________________________
//importing modules
const fs = require("fs")
const path = require("path")

//DEFINING VARS______________________________________
//defining variables on file and folder names:
const Folder_res= "res files"
const file_lorem = "Lorem.txt"
const file_copy = "Copy"

const textFile = path.join(__dirname, Folder_res, file_lorem)
const newTxtFile = path.join(__dirname, Folder_res, file_copy)

const newFileMessage = "Following text originates from " + file_lorem + ":\n"

//FUNCTIONS_________________________________________
function ifError(err) {
    if (err) throw err
}


//defining error callback function
function errorhandling (error, contentOfFile) {

    console.log("Reading file now...")//solely for testing 
    
    ifError(error)
    fileContent = contentOfFile.toString()
    
    console.log("File has been read.")//solely for testing 
    
    toInput = newFileMessage + fileContent

    //attempting to create a new file and add content in contentOfFile
    fs.appendFile(newTxtFile, toInput, (err)=>{ 
        
        console.log("Creating file now...")//solely for testing 
        ifError(err)
        console.log("File has been created.")//solely for testing 

        

    })

}

//EXECUTION___________________________________________
fs.readFile(textFile, 'utf-8', errorhandling)