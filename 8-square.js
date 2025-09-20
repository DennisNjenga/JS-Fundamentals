const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}


let name = "Dennis";
for(let i=0; i<10;i++){
console.log(name.repeat(10));
}