let amount=1000;
console.log("Your bill amount is Rs."+amount);
//let n = prompt("Enter your name");
//console.log("Your name is "+n);

//dom-function
let msg = document.getElementById("mes");
msg.innerHTML = "Welcome to our Website"
function convert()
{
    const cel = Number(document.getElementById("input").value);
    const fahr = (cel*9/5)+32;
    const res = document.getElementById("res");
    res.innerHTML = fahr;
}

//random letter
let n = "hemalatha";
console.log(n[Math.floor(Math.random()*n.length)]) // - random letter

//string interpolation and multiline string
let num = 5;
let bill = 95;
let a = `"You have ${num} items in your cart.
Your bill amount is $${bill}"`;
console.log(a);


//arrays
let marks = [10,20,30,40,50];
console.log(marks[marks.length-5]) // accessing last element without knowing the index

//mix of integer and string
let arr = [1,2,3,4,'a','abc',[3,4]];
console.log(arr);
console.log(arr[6][1]);

//multidimensional array - 2d array
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix[0][2]);
console.log(matrix[2][0]);

let array = ['a','b','c','d','e'];
//push-add element to the end and returns new length
console.log(array.push('f'));
array.push('g');
console.log(array);
//pop-removes element from the end and returns removed value
console.log(array.pop());
//shift-removes element from start of the array and returns removed value
console.log(array.shift());
console.log(array);
console.log(array.unshift('a'));
console.log(array);
//delete
//delete array[3];
console.log(array);// no shift happens

//slice-alternate for delete
array.splice(0,2)
console.log(array);
array.splice(1,1,'a'); //replacing element in the array
console.log(array);

array.splice(1,0,'b'); //inserting in array -- 1=starting index 0=how many elements to be deleted b=inserting value
console.log(array);

//slice(starting index,ending index)
console.log(array.slice(0,4)) // ending index not included

//reverse
console.log(array.reverse());

//join - converts array to string
console.log(array.join());

//split - converts string to array
let str="m,n,o,p,q,r"
let arr1=str.split(",");
console.log(arr1);

//concat and spread operator

let arr2=[1,2,3];
let arr3=[4,5,6];
let join=[arr2,arr3];
console.log(join);

join=arr2.concat(arr3)
console.log(join);

let join1=[...arr2,...arr3];
console.log(join1);


//Exercises

let x = [5,8,10,7,9,11];
console.log(x);
x.splice(3,3,17,19,111);
console.log(x);
x.splice(0,0,100);
console.log(x);
x.splice(7,-1,200)
console.log(x);
let y=x.push(1000)
console.log(x)
console.log(x.length);
let z=x.splice(5,0,0);
console.log(x);
console.log(x.length);
