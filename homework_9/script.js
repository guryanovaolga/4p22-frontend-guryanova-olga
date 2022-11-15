'use scrict';

function makeFibonacciFunction() {
    let a = 1
    let b = 0

    console.log(a);
    console.log(b);

const btn = document.querySelector('.button');
btn.addEventListener('click', function() {
    let c = a + b
    document.querySelector('.res').innerHTML = c;
    a = b;
    b = c;
    return console.log(c)
   
  })
};
const fibonacci = makeFibonacciFunction();

fibonacci();
fibonacci();
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
