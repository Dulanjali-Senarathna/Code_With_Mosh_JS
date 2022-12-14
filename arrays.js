const numbers = [3,4,1]; //const means cant re-declared numbers array, but can modify array 

//adding element to the end
numbers.push(5,6);

//adding element to the begininng
numbers.unshift(1,2);

//adding element to the middle
numbers.splice(2,0,'a','b'); //in here 2 = which is the index  to add new elements, 0 = how many elements should delete to add new elements, then elements that are adding 

console.log(numbers);

//Finding Elements (Primitives)

console.log(numbers.indexOf(3));
console.log(numbers.indexOf(15)); //when try to find the number which are not in arry, always return -1
console.log(numbers.indexOf(1,2)) ;// in this 1 = the number which is we should find the index, 2 = search starting index
console.log(numbers.lastIndexOf(1));
console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));//similar way to above 

//Finding Elements (Reference Types)

const courses = [
    {id : 1, cname: 'maths'},
    {id : 2, cname: 'commerce'}
]

//trying to use primitive element find method

console.log(courses.includes({id : 1, cname: 'maths'})); //output false because of the these two objects are different from each other. because object is reference type. and this 2 objects in diffrent memory locations

//correct way

const result1 = courses.find(function(course){
    return course.cname == 'maths';
});

console.log(result1); //return the complete course object

const result2 = courses.find(function(course){ //this function called 'predicure funtion'
    return course.cname == 'math';
});

console.log(result2); //return undefined when we try to serach element that are not in array

//return serched result's index

const result3= courses.findIndex(function(course){
    return course.cname == 'commerce';
});

console.log(result3); 

//Arrow function

const result4 = courses.find(course => course.cname == 'commerce');
console.log(result4);

//Removing Elements
const numbers1 = [3,4,2,4,6];

//remove last
const last = numbers1.pop();
console.log(numbers1);
console.log(last);

//remove first element
const first = numbers1.shift();
console.log(numbers1);
console.log(first);

//remove middle 
numbers1.splice(2,1); //in this 2 is the index of we want to delete, 1= how many numbers should be delete from this index
console.log(numbers1);

//Emptying an Array

let numb = [1,2,3,4,5,6,7]; // let use, because const don't let re-declared array
let another = numb;

//Way 1

numb = [];
//console.log(numb);//numb empty
console.log(another); //not empty and same to original numb array

//Way 2
numb.length = 0;
console.log(numb);

//Way 3 (bad effect on perfomance when millions of objects)
while(numb.length>0){
    numb.pop();
}
console.log(numb);

//Way 4 
numb.splice(0,numb.length);
console.log(numb);

//Combining and Slicing Arrays
const firsta = [1,2,3];
const sec = [4,5,6];

const combine = firsta.concat(sec);
console.log(combine);

//opposite of the concat is the 'slice'

const slice = combine.slice(2,4); //2 = after second(2) index and 4= after 4th index
console.log(slice);

const newarray = [1,5,6,8,3,4];

const sliceall = newarray.slice(2); //starting from given index.in here , index 2(include 2nd index)
console.log(sliceall);

const copy = newarray.slice(); //copy of the original array
console.log(copy);

//reference type

const obarray = [{id:1}];
const newa = [4,5,8];


const con = obarray.concat(newa);
obarray[0].id = 20;
console.log(con);

//The Spread Operator
const a = [1,2,3,4];
const b = [3,7,6,8];

const neww = [...a , ...b]; //combine two arrays 
console.log(neww);

const copy1 = [...neww];
console.log(copy1);

// Iterating an Array

const array = [1,8,6,5,7];

for(let num of array){ // we can't get indexes
    console.log(num);
}

array.forEach(function(num,index){ //we can get data and also and indexes
    console.log(index,num);
});

//Joining Arrays
const newar = [1,7,5,8,6];

const join = newar.join(',');
console.log(join);

const messa = 'This is my string';
const prts = messa.split(' ');
console.log(prts); //output ['This', 'is', 'my', 'string']

const joined = prts.join('-')
console.log(joined); //This-is-my-string

//Sorting Arrays - for numbers and string
const sort = [4,8,1,7,3];

const s = sort.sort();
console.log(s);

//reverse sorted array
const revers = sort.reverse();
console.log(revers);

//Sorting Arrays - for objects
const courses1 = [
    {id:1 , name: 'Nodejs'},
    {id:2 , name: 'javascript'}
];

courses1.sort(function(a,b){

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1; //don't need else because of above if end with return and, if it is true executing end.
    return 0;

});

console.log(courses1); //when j is=n javascript word is 'lowercase', Nodejs comes first, because of ASCII character value of 'j' is lower than 'N'
//to avoid this , we can convert both objects string part to uppercase or lower case.

//Testing the Elements of an Array
//check all the elements in a array is positive

const checknum = [1,-7,6,8];

const checkPositive = checknum.every(function(value){
    return value >=0;
});

console.log(checkPositive);

//check atleast one element in a array is positive 
const checknum1= [1,-7,6,8];

const atleastOnePositive = checknum.some(function(value){
    return value >=0;
});

console.log(atleastOnePositive);

//Filtering an Array
const num3 = [4,8,6,-1,-2];

const filter = num3.filter(function(value){ //shorten way => const filter = num3.filter(value => value>=0;)
    return value>=0;
});

console.log(filter);

//Mapping an Array to strings
const items = filter.map( function(value){
    return '<li>'+value +'</li>';
});

const html = '<ul>'+items.join('')+'</ul>';

console.log(items);
console.log(html);

//Mapping an Array to objects
const items1 = filter.map(function(n){ //shorten way => const items1 = filter.map(n => ({value:n}))
    return {value : n};
});

//display above as chainable methods

//const items1 = num3.filter(value => value>=0).map(n => ({value:n}));combined two mwthods together and return result array
const items2 = num3
    .filter(value => value>=0)
    .map(n => ({value:n}))
    .filter(obj => obj.value > 5)
    .map(obj=> obj.value); // we can call map and filter over and over because of chaining

console.log(items1);
console.log(items2);

//Reducing an Array

//get sum of elemtnts of an array
const number1 = [1,-2,8,9];

let sum = 0;

for(let n of number1)
sum+=n;

console.log(sum);

//do the same thing using reduce method. reduce method have 2 parameters, one is callback function that have 2 parameters (accumulator,currentValue) and other one is initial value of accumulator (0)

const sum1 = number1.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
},0);

console.log(sum1);

//we can remove second parameter of the reduce method (0), and then accumulator 1st value is the 1st element of array.
//below is the shortened way

const sum2 = number1.reduce((accumulator,currentValue)=> accumulator+currentValue);

//Array from Range

function arrayFromRange(min , max){
    const newArray = [];

    for( let x = min ; x <= max; x++ ){
      newArray.push(x);
     
    }
    return newArray;
}

const newarray1 = arrayFromRange(-1,10); // if max<min, output is empty

console.log(newarray1);

//Exercise 2- Includes

function includes(array,searchElement){
   for(let element of array)
    if (element == searchElement)
        return true;
   return false;

}

const n = [5,78,6,2];

console.log(includes(n,8));

//Exercise 3- Except

function except(array, exclude){
    const out = [];
    for(let z of array){
        for(let j of exclude){
            if(z!==j){
                out.push(z);
            }
        }
        
    }

    return out;
}

const darray = [4,8,6,88];

console.log(except(darray,[88]));

//Exercise 4- Moving an Element

function move(array,index,offset){

    const position = index+offset;
    if(position>array.length || position<0){
        console.error('Invalid offset');
        return;
    }

    const output = [...array];
    const element = output.splice(index,1)[0];
    output.splice(position,0,element);
    return output;
}

const array7=[4,78,9,2,60]; //2,1 => 4,78,2,9,60

console.log(move(array7,2,1));

//Count Occurrences - way 1
function countOccurences(array,searchElement){
    let count = 0;
    for(let x of array){
        if(x == searchElement){
            count++;
        }     
    }
    return count;
   
}
const k = [4,6,8,7,6];
console.log(countOccurences(k,6));

//way - 2 using reduce function

function countOccurences1(array,searchElement){
    
  return  array.reduce(function(accumulator,current){
        const occurence = (searchElement==current)
        console.log(accumulator,current,searchElement)
        return accumulator+occurence;
    },0);
   
}
const l = [4,6,8,7,6,7,7];
console.log(countOccurences1(l,7));

//Exercise 6- Get Max - Way 1 (using Math.max())

function getMax(array) {
   const max = Math.max(...array);//spread operator - taking individual elemnts from array
   return max;
}

const arr = [4,7,100];
console.log(getMax(arr));

//way - 2 

function getMax2(array1) {
    if (array1.length ===0) return undefined;
    let max = array1[0];

    for(let j=1 ; j<array1.length;j++){
        if(array[j]>max){
            max = array1[j]; 
        }
    }
    return max;
 }
 
 
 console.log(getMax2([7,99]));

 // way -3

 function getMax3(array2) {
    if (array2.length ===0) return undefined;

    array2.reduce(function(accumulator,current){
       
        if(accumulator>current){
           return accumulator;
        }
        else{
            return current;
        }
        //return(accumulator<current) ? current : accumulator
    });

 }

 console.log(getMax2([789,99]));

 ///Exercise 7- Movies

 //All the movies in 2018 with rating>4
 //sort them by their rating
 //Descending order
 //pick their title

 const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
 ];

 const titlee = movies
    .filter(movie => movie.year === 2018 && movie.rating >= 4)
    .sort((a,b)=> a.rating - b.rating)
    .reverse()
    .map(movie=> movie.title);

 console.log(titlee);

















