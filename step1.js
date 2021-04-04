const fs = require('fs')

let cat = (path)=>{
    fs.readFile(path, 'utf-8', (err, data)=>{
        if(err){
            console.log(`Error reading ${path}\n`, err.message)
            process.exit(1)
        }else{
            console.log(data)
        }
    })
}
const path = process.argv.slice(2)

cat(path[0])

