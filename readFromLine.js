const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Please enter your name: ",(inp)=>{
    console.log("Hello " + inp);
    r1.close();
})