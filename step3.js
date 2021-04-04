const fs = require('fs')
const axios = require('axios');

function printOut(file, out) {
    if (out) {
        fs.writeFile(out, file, 'utf8', (err)=>{
            if(err){
                console.log(`Couldn't write ${out}\n`, err.message)
            }
        })
    } else {
        console.log(file)
    }
}

let cat = (file, out) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}\n`, err.message)
            process.exit(1)
        } else {
            printOut(data, out);
        }
    })
}

async function webCat(file, out) {
    try {
        let data = await axios.get(file)
        printOut(data.data, out)
    } catch (err) {
        console.log(`Error fetching ${file}\n`, err.message)
    }
}

let catWrite = (path, info) => {
    console.log(path, info)
}


let file;
let out;
const path = process.argv.slice(2)
if (path[0] === '--out') {
    out = path[1]
    file = path[2]
} else {
    file = path[0]
}

if (file.slice(0, 4) == 'http') {
    webCat(file, out)
} else {
    cat(file, out)
}