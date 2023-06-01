//IMPORTING MODULES______________________________
//importing modules
const fs = require("fs")
const path = require("path")

//DEFINING VARS______________________________________
//defining variables on file and folder names:
const folderRes= "res_files"
const fileLorem = "Lorem.txt"
const fileCopy = "Copy"

const textFile = path.join(__dirname, folderRes, fileLorem)
const newTxtFile = path.join(__dirname, folderRes, fileCopy)

const newFileMessage = "Following text originates from " + fileLorem + ":\n"

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

    })//this is where I came to understand what callBack Hell means. Callbacks within callbacks to the power of infinity!

}

//EXECUTION___________________________________________
fs.readFile(textFile, 'utf-8', errorhandling)