function generatecolor(){
  let colour = "#";
  let choices = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    colour +=  choices[ Math.floor(Math.random() * 16)]  ;

  }

  return colour;
}

main =  document.querySelector('.main');

box = document.querySelector('.box');

// box.addEventListener('click',function changecolor(){
//     let gencolor = generatecolor();

//     main.style.backgroundColor = gencolor;

// });

function changecolor(){
  let gencolor = generatecolor();

   main.style.backgroundColor = gencolor;
}

setInterval( changecolor ,1000);