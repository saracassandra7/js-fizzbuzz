/*
1) stampo in console i numeri da 1 a 100 ---> fatto
2) per i multipli sia di 3 che di 5 scrivo FizzBuzz ---> fatto
3) per i multipli di 5 scrivo Buzz ---> fatto
4) per i multipli di 3 scrivo Fizz ---> fatto

5) creo container in DOM in cui metto i box con i numeri ---> fatto
6) metto colori differenti ai box in base a quello che c'è scritto --->fatto
*/ 

const fizz = 3;
const buzz = 5;
const fizzBuzz = 15;

const container =document.querySelector('.container');
const limit = 100;

//console
for(let i = 1; i <= 100; i++){

  if(i % fizzBuzz === 0){
    console.log(i, 'FizzBuzz');

  }else if (i % buzz ===0){
    console.log(i, 'Buzz');

  }else if (i % fizz === 0){
    console.log(i, 'Fizz');

  }else{
    console.log(i);
  }

}

//output in pagina
for(let i = 1; i<=limit; i++){
  //creo il box
  const box = document.createElement('div');

  //gli aggiungo la classe .box
  box.className = "box";

  //scrivo nel box il numero
  box.innerHTML = i;

  //aggiungo il box al container
  container.append(box);

  //cambio colore in base a cosa c'è scritto
  if(i % fizzBuzz === 0){
    box.classList.add('fizzbuzz');
    box.innerHTML = "Fizz <br> Buzz";

  }else if (i % buzz ===0){
    box.classList.add('buzz');
    box.innerHTML = "Buzz";

  }else if (i % fizz === 0){
    box.classList.add('fizz');
    box.innerHTML = "Fizz";

  }else{
    box.classList.add('default');
  }

}