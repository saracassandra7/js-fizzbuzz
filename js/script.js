/*
1) stampo in console i numeri da 1 a 100 ---> fatto
2) per i multipli di 3 scrivo Fizz
3) per i multipli di 5 scrivo Buzz
4) per i multipli sia di 3 che di 5 scrivo FizzBuzz
*/ 

const fizz = 3;
const buzz = 5;
const fizzBuzz = 15;

for(let i = 1; i <= 100; i++){

  if(i % fizz === 0){
    console.log(i, 'Fizz');

  }else if (i % buzz ===0){
    console.log(i, 'Buzz');

   /*}else if (i % fizz ===0 && i % buzz === 0){
    console.log(i, 'FizzBuzz');
   }*/
  
  }else if (i % fizzBuzz === 0){
    console.log(i, 'FizzBuzz');
  }

}