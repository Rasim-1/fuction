// //дикларейшен
// function plus(a, b, c) {
//     console.log(a + b +c);
// }
// plus(5, 10, 15)
// //
// const fn = function (a, b){
//     console.log(a * b);
// }
// fn(10, 4)

// //arrow function (стрелочная функция)(упращеная)
// const minus = ( a , b ) => {
// console.log(a - b);
// }
// minus(30, 40 )
// //arrow function (стрелочная функция)
// const delit = ( a , b ) => a / b

// console.log( delit(20,10));
//  const me = (a, b, c ) =>{
//     console.log('привет меня зовут '+ a  + ' '+  b +' мне' + ' ' + c)
//  }
// me('Rasim','khusanbaev',17)

const fn2 = (a) => {
  if (a == 2) {
    console.log("Это второй!");
  } else if (a == 0) {
    console.log(" это ноль");
  } else if (a < 0) {
    console.log("это отрицательное число");
  } else {
    console.log("это не второй");
  }
};

fn2(prompt('введи число'))