// callback function - reduce
function calculate(x,y,callback){
    setTimeout(()=>{
        console.log("Calculating....")
        const sum = x+y
        callback(sum)
    },3000) 
}

calculate(100,50,function (result){
    console.log(`Addition = ${result}`)
})


