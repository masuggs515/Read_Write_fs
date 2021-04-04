const fs = require('fs')
const axios = require('axios');

let cat = (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}\n`, err.message)
            process.exit(1)
        } else {
            console.log(data)
        }
    })
}

async function webCat(path){
    try{
    let url = await axios.get(path)
    console.log(url.data)
    }catch(err){
        console.log(`Error fetching ${path}\n`, err.message)
    }
}



const path = process.argv.slice(2)[0]
if (path.slice(0, 4) == 'http') {
    webCat(path)
} else {
    cat(path)
}


