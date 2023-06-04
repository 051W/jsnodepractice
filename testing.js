//__________________________________________________
//IMPORTING MODULES & DECLARING VARIABLES

const path = require('path')
const express = require("express")

const app = express()
const folderRes = "res_files"
const fileLorem = "Lorem.txt"
const fileNewTxt = "result.txt"

const filePathLorem = path.join(__dirname, folderRes, fileLorem)
const filePathNew = path.join(__dirname, folderRes, fileNewTxt)

//const newText = "Extracted content from " + fileLorem + " file:\n"

//__________________________________________________
//CREATING FUCTIONS

//__________________________________________________
//EXPRESSJS PRACTICE

//this is great for displaying specific message when user goes to certain page.
app.get("/", (req, res) => {

    console.log("This should display on the terminal as the page loads.")
    
    //.send is usually used for testing purposes:
    //res.send("This should display on the browser.") 
    
    //sends status of page, in this case, an error:
    //res.sendStatus(404) 
    
    //sends status as well as a nice customzed emssage as well:
    res.status(404).send("ERROR 404: File not found.")
    console.log("status sent")
    
    //have no idea what json does tbh, but it was on a tutorial:
    //>>>>>>>>>>!REMINDER! lookin into it, miso<<<<<<<<<<<<
    //res.json({message: "error"})
    
    //will allow user to download content secified with path. 
    //(this will not work if theres other res methods active. ) 
    //res.download(filePathLorem)
    //console.log("download prompted")
})

app.listen(1234)