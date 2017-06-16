/*  For today's homework your job is to write functions
 *  that make the following invocations work.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  var greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */


// Write a function called firstItem that passes the first item of the given array to the callback function


var foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];
console.log('The foods list: ' + foods);

firstItem(foods, (firstItem) => {
  console.log('The first item is ' + firstItem);
});

function firstItem(myArr, cb){
  cb(myArr[0]);
};


// Write a function called getLength that passes the length of the array into the callback

getLength(foods, (length) => {
  console.log('The length of the array is ' + length);
});

function getLength(myArr, cb){
	cb(myArr.length);
};

// Write a function called last which passes the last item of the array into the callback

last(foods, (lastItem) => {
  console.log('The last item in the array is ' + lastItem);
});

function last(myArr, cb){
	cb(myArr[myArr.length -1]);
};

// Write a function called sumNums that adds two numbers and passes the result to the callback

sumNums(5, 10, (sum) => {
  console.log('The sum is ' + sum);
});

function sumNums(n1, n2, cb){
	cb(n1 + n2);
};

// Write a function called multiplyNums that multiplies two numbers and passes the result to the callback

multiplyNums(5, 10, (product) => {
  console.log('The product is ' + product);
});

function multiplyNums(n1, n2, cb){
	cb(n1 * n2);
}

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

function contains(myArr, item, cb){
	var check = false;
	for(var i = 0; i < myArr.length; i++){
		if(myArr[i] === item){
			check = true;
		}
	}
	cb(check);
}

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

removeDuplicates(foods, (uniqueFoods) => {
  console.log('foods with duplicates removed: ' + uniqueFoods);
});

function removeDuplicates(myArr, cb){

//indexOf returns the index of the first occurrence of searchElement in the array, 
//or -1 if searchElement is not found.
//View more examples on the bottom of this file.

var selectFoods = [];
	for(var i = 0; i < myArr.length; i++){
		if(selectFoods.indexOf(myArr[i]) == -1){
			//pushes foods with only one occurence to selectFoods
			selectFoods.push(myArr[i]);
		}
	}
	cb(selectFoods);
}

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

forEach(foods, (value, index) => {
  console.log(`${value} is at index ` + index);
});

function forEach(myArr, cb){
	for(var i = 0; i< myArr.length; i++){
		var val = myArr[i];
		var index = i;
		cb(val,index);
	}
}


/*

indexOf EXAMPLES:

// Create an array. (The elements start at index 0.)  
var ar = ["ab", "cd", "ef", "ab", "cd"];  

// Determine the first location of "cd".  
document.write(ar.indexOf("cd") + "<br/>");  

// Output: 1  

// Find "cd" starting at index 2.  
document.write(ar.indexOf("cd", 2) + "<br/>");  

// Output: 4  

// Find "gh" (which is not found).  
document.write (ar.indexOf("gh")+ "<br/>");  

// Output: -1  

// Find "ab" with a fromIndex argument of -2.  
// The search starts at index 3, which is the array length plus -2.  
document.write (ar.indexOf("ab", -2) + "<br/>");  
// Output: 3  

*/
