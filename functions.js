//function declaration

function walk(){
    console.log('walk');
}

//anonymous function expression (function doesn't have name)

const run = function(){
console.log('run');
};

let move = run;

run();
move();

//named function expression (function does have name)

const bring = function catchi(){
    console.log('cachi');
}

bring();

//Hoisting
sleep(); // output 'sleep' because of the hoisting. 

function sleep(){
    console.log('sleep');
}

//write(); //getting error , because we can't call method in function expression before it declared

const write = function(){
    console.log('write');
};

//console.log(x); //also getting error because this is expression.
let x = 4;

//Arguments
function sum(a,b){
    console.log(arguments); //arguments is a object
    return a+b;
    
}

console.log(sum(1,3));
console.log(sum(1)); //when we passing 1 argument output is 'NaN' because b is not declared and by default not declared varible is undefined.
//1+undefined = NaN
console.log(sum()); // undefined + undefined = NaN
console.log(sum(1,8,9,6));//output 9 because first 2 argument only used

//find the sum of all arguments which are passing 

 function sum1(){ //we can remove a and be because they aren't using here
  let total = 0;
  for(let value of arguments){
    total +=value;
  }
  return total;
}
console.log(sum1(1,2,9,6));

//The Rest Operator
function sum2(...args){ // ... = rest operator => take all arguments and put them in an array. without rest operator, output will be 5 (because function get first value)
    console.log(args);
}

sum2(5,7,6,9); //output => [5,7,6,9]

//calculate sum of arguments using rest operator and reduce method
function sum4(...args1){ return args1.reduce((a, b) => a+b);}

console.log(sum4(5,7,6,9));

//modify above to shopping cart implimentation

function sumCart(discount, ...prices){ // we can't add parameters after the rest parameter (rest = rest of the parameters)
    const total = prices.reduce((a,b)=> a+b);
    return total * (1-discount);
}

console.log(sumCart(0.1,20,30));

//Default Parameters

function interest(principal, rate, years){
    return principal*rate / 100*years;
}

console.log(interest(1000,0.2,5));

//same function above without parsing default parameters
function interest1(principal, rate, years){
     rate = rate || 0.2; //set default value if not function passing parameter
     years = years || 5;
    return principal * rate / 100 * years;
}

console.log(interest1(10000));

//same function above with parsing default values as function parameters
function interest2(principal, rate=0.2, years=5){
   return principal * rate / 100 * years;
}

console.log(interest2(10000));

function interest3(principal, rate=0.2, years){ //if we want to give default value only one , then we need to pass the value for other parameter when function calling
    return principal * rate / 100 * years;
 }
 
 console.log(interest3(10000, undefined, 5)); //in here we need to set undefined to default parameter, if not output will 'NaN'
//but this is ugly, best practise is the write default parameters last. => function interest3(principal, years, rate=0.2) like this and no need to add undefined to when calling method


