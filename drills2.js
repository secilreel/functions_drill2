'use strict'; 
function jediName(firstName,lastName){
  let jediFirst = firstName.slice(0,3); 
  let jediLast = lastName.slice(0,2);  
  return jediLast + jediFirst;
}
console.log(jediName('chris', 'irem'));

function beyond(num){
  if (num === Infinity){
    console.log('and beyond');  
  }
  else if (num>0){
    console.log('to infinity');
  }
  else if (num<0){
    console.log('to negative infinity');
  }
  else {
    console.log('staying home');
  }
}
console.log(beyond(Infinity));

function decode(string) {
  const words=string.split(' ');
  let resultArray = ''; 
  let step = '';
  for (let i=0; i<words.length; i++){
    if (words[i].slice(0,1) === 'a'){
      step=words[i].slice(1,2);
    }
    else if (words[i].slice(0,1) === 'b'){
      step=words[i].slice(2,3);
    }
    else if (words[i].slice(0,1) === 'c'){
      step=words[i].slice(3,4);
    }
    else if (words[i].slice(0,1) === 'd'){
      step=words[i].slice(4,5);
    } 
    else {
      step=' ';
    } 
    resultArray += step;
  }
  return resultArray; 
}
console.log(decode('craft block argon meter bells brown croon droop'));

function daysInMonth(month, leapYear){
  let result;
  if (leapYear%4 === 0 && month === 'February') {
    result = `${month} has 29 days`;
  }
  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    result = `${month} has 31 days`; 
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    result = `${month} has 30 days`; 
    break;
  case 'February':
    result = `${month} has 28 days`; 
    break;
  default:
    return 'Must provide a valid month';
  } 
  return result;
}
console.log(daysInMonth('February',2018));

function rockPaperScissor(num){
  const randomNo = Math.floor(Math.random() * 3) + 1;
  let win;
  switch(num) {
  case num=randomNo:
    win = 'There is a tie!';
    break;
  case num===1 && randomNo===3:
  case num===3 && randomNo===2:
  case num===2 && randomNo===1:
    win = 'You beat me!';
    break;
  case randomNo===1 && num===3:
  case randomNo===3 && num===2:
  case randomNo===2 && num===1:
    win = 'Haha! Gotcha!';
    break;
  default:
    return 'Must provide a valid number';
  }
  return win;
}
console.log(rockPaperScissor(2));