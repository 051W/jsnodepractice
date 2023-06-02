//__________________________________________________
//IMPORTING MODULES & DECLARING VARIABLES

const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

const folderRes = "res_files"
const fileLorem = "Lorem.txt"
const fileNewTxt = "result.txt"

const filePathLorem = path.join(__dirname, folderRes, fileLorem)
const filePathNew = path.join(__dirname, folderRes, fileNewTxt)

const newText = "Extracted content from " + fileLorem + " file:\n"

//__________________________________________________
//CREATING FUCTIONS
function errorLog(error) {
    console.error(error)
}

//__________________________________________________
//USING FSPROMISES FOR CRUD OPS
const readFile = async() => {
    try{

        //assign content of file to fileContent
        const fileContent = await fsPromises.readFile(filePathLorem, 'utf-8')
        console.log( fileLorem + " file has been read.")
        
        //creates and adds content to new file
        //await fsPromises.appendFile(filePathNew, fileContent)
        
        //toggle between deleting exisitng file or creating new file:
        //checks if file exists:
        if (fs.existsSync(filePathNew)) {
            
            //if file exists, delete file
            console.log( fileNewTxt + " file has been deleted.")
            await fsPromises.unlink(filePathNew)
            
        } else if (!fs.existsSync(filePathNew)) {
            
            //if file does not exist, create and append content
            console.log( fileNewTxt + " file created.")
            const newContent = newText + fileContent
            await fsPromises.appendFile(filePathNew, newContent)
            console.log( "Content added to " + fileNewTxt + " file.")
            
        
        }

    } catch (err) {
        //log error, if any
        errorLog(err)
    }
}

readFile()