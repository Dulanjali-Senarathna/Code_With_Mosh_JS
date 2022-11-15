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
console.log(numbers.includes(1));//simlest way to above 

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





