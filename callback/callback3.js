//Download file callback
const url = "Hello.dev/file1.json"

function download(url,callback){
    console.log(`Downloading ${url}`)
    setTimeout(()=>{
        callback(url)
    },3000)
}

function complete(url){
    console.log(`Download ${url} Completed`)
}

download(url,complete)

