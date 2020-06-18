//Demonstrates the difference between Time and Space Complexities
//displayRepeat has a time complexity of O(n) due to the for loop. But the space complexity is O(1) since the only thing that is being created and taking space is 'let i = 0'
function displayRepeat(n) {
  for(let i = 0; i < n.length; i++) {
    console.log('Hello World');
  }
}

displayRepeat([1, 2, 3, 4, 5]);

//createRepeat has a time complexity of O(n) due to the for loop. But the space complexity is also O(n) since a new element is being added to the array after each pass of the for loop.

function createRepeat(n) {
  let createArray = [];
  for(let i = 0; i < n.length; i++) {
    createArray [i] = 'Hello World';
  }
  return createArray;
}

createRepeat([1, 2, 3, 4, 5]);