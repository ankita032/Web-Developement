const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

soln1 : 
let maxnum1 = 0;
function biggestNumberInArray(arr) {
      let largest = array.forEach(no => {
          if(no > maxnum1)
             maxnum1 = no;
})
return maxnum1;
}
biggestNumberInArray(array)

soln2 :
let maxnum1 = 0;
function biggestNumberInArray2(arr) {
      for(no of array2){
          if(no > maxnum1)
             maxnum1 = no;}
return maxnum1;
}
biggestNumberInArray2(array2)

soln3:
let maxnum1 = 0;
function biggestNumberInArray3(arr) {
      let i = 0;
      while(i<array3.length){
	if(no > maxnum1)
           maxnum1 = no;
	i++;}
return maxnum1;
}
biggestNumberInArray3(array3)


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1
  books: 2
  floss: 100
}

function checkBasket(basket, lookingFor) {
     return basket.includes(lookingFor);
}
checkBasket(amazonBasket,'glasses')