var arrayTasks = {

	concat: function (arr1, arr2) {
     return bothArrays = arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function ( item ) {
		   return Math.pow(item, 2);
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

     arr.forEach(function(item, index) {
        // Find out whether there is a duplicate in arr
        if (arr.indexOf(item, index + 1) > -1) {
           // Find out whether the element is already 
           // in duplicateArray and add if it isn't
          if (duplicateArray.indexOf(item) === -1) {
            duplicateArray.push(item);
          }
        }
      });   
    return duplicateArray;
	},

	removeAndClone: function (arr, valueToRemove) {
     var valueRemovedArray = [];
      
     arr.forEach(function(valueToRemove) {
        // Find out whether there is a valueToRemove in arr
        if (arr.indexOf(valueToRemove) === -1) {
        	 // add to new array if it is a value other than
        	 // value found
           valueRemovedArray.push(valueToRemove);
        }
     });   
     return valueRemovedArray;
	},

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
