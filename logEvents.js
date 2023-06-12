const { format } = require("date-fns")
const { v4: uuid} = require("uuid")

const fs = require("fs")
const fsPromises = require("fs").promises
const path = require("path")

const myDirName = "all_logs"
const myFileName = "logEvents.txt"
const logDir = path.join(__dirname, myDirName)
const logEventsFile = path.join(__dirname, myDirName, "logEvents.txt")

const logEvents =async(message) => {

    const timeDate = `${format(new Date(), "HH:mm:ss\tdd-MM-yyyy")}` 
    const logItem = `${timeDate}\t${uuid()}\t${message}\n`
    console.log(logItem)

    try{
        if (!fs.existsSync(logDir)){
            await fsPromises.mkdir(logDir)
        }
        await fsPromises.appendFile(logEventsFile, logItem)
    } catch(err){
        console.log(err)
    }
}

logEvents("second message")

module.exports = logEvents