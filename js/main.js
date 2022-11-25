let gmail = prompt('Enter Your Email Id');

let result = gmail.replace(/[^1-9]/g, "");

for(let i=1; i<=result.length; i++){
    // console.log(i);
    if(i % 2 === 0){
        console.log(i);
    }
}