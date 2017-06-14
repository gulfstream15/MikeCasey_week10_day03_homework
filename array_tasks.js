var arrayTasks = {

	concat: function (arr1, arr2) {
     return bothArrays = arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function ( element ) {
		   return Math.pow(element, 2);
		 });
	},

	sum: function (arr) {
     var sum = 0;
     for (var item of arr ) {
         sum += item;
     }
     return sum;		
	},

	findDuplicates: function (arr) {
		
		 var duplicateArray = [];

     arr.forEach(function(element, index) {

       // Find out whether there is a duplicate in arr
       if (arr.indexOf(element, index + 1) > -1) {
     	  
          // Find out whether the element is already in duplicateArray 
          if (duplicateArray.indexOf(element) === -1) {
            duplicateArray.push(element);
          }
       }
    });   
    return duplicateArray;
	},

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
