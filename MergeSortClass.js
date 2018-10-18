var array = [5, 1, 7, 8, 2, -1, 9];

function MergeSort(arr){
    //Exit condition
    if (arr.length < 2){
      return arr;
    }                               
      // Calculate the middle of the elements
    var middle = Math.floor(arr.length / 2);           
  
    // Divide 
    var leftRange = arr.slice(0, middle);
    var rightRange = arr.slice(middle, arr.length);   
    console.log("leftRange",leftRange);
    // Handle each array
    leftRange = MergeSort(leftRange);
    rightRange = MergeSort(rightRange);  
  console.log("mergeBEFORE",leftRange,"rightRangeBEFORE",rightRange);
    return MergeArrays(leftRange , rightRange);
  }
  function MergeArrays(leftRange,rightRange){
    var res = [];    
    console.log("leftRange",leftRange,"rightRange",rightRange);
  
    // Loop until one of the arrays is empy.
    while (leftRange.length > 0 && rightRange.length > 0) {                
      if (leftRange[0] <= rightRange[0]) {
        res.push(leftRange.shift());
      } else {
        res.push(rightRange.shift());
      }                                              
    }           
    // Check if you have some element left in one of the arrays
    while (leftRange.length > 0) {                
      res.push(leftRange.shift());
    }            
    while (rightRange.length > 0) {            
      res.push(rightRange.shift());
    }
  
    return res;
  }
console.log(MergeSort(array));