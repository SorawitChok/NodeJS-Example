// callback function
function calculate(x,y,callback){
    setTimeout(()=>{
        console.log("Calculating....")
        const sum = x+y
        callback(sum)
    },3000) 
}

function display(result){
    console.log(`addition = ${result}`)
}

calculate(100,50,display)


