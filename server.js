const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000



function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;

    while (num3 < num) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num3 === num
}

app.get("/fibonacci/:num", (req, res) => {
    if (fibonacci(parseInt(req.params.num))) {
        res.send("Very good. It is Fibonacci.")
    } else {
        res.send("I can tell this is not a Fibonacci number.")
    }
})

app.listen(PORT, () => {
    console.log(`Gettin busy with it on ${PORT}`)
});








/*
const num = 2584;
const isFibonacci = num => {
   if(num === 0 || num === 1){
      return true;
   }
   let prev = 1;
   let count = 2;
   let temp = 0;
   while(count <= num){
      if(prev + count === num){
         return "is a Fibonacci Number";
      };
      temp = prev;
      prev = count;
      count += temp;
   };
   return "Is not a Fibonacci Number";
};
console.log(isFibonacci(num));
console.log(isFibonacci(5555555555));


app.get('/', (req, res) => {
    res.send("<h1> 99 bottles of perfume on the wall</h1> <br> <a href='/98'>Take one down, pass it around</a>")
}) 


app.listen(PORT, () => {
    console.log(`active on ${PORT}`)
});
*/ 