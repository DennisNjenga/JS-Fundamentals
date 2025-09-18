let args = process.argv[2]; 

if(Number(args)){
    console.log(`My number: ${args}`)
} else{ 
    console.log("Not a number");
}