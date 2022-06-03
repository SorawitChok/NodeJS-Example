//create Promise

const connect = true
const url = "hello.123/index.html"

function download(url){
    return new Promise(function(resolve,reject){
        console.log(`Downloading file from ${url}`)
        setTimeout(()=>{
            if(connect){
                resolve(`Download ${url} Completed`)
            }
            else{
                reject("Error occur during download")
            }
        },3000)
    })
}

download(url).then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})
