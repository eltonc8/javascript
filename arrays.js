// unique
// includes?

function myUnique (array) {
  result = [];

  for (var i = 0; i < array.length; i++) {
    if ( result.indexOf( array[i] ) < 0 ) {
      result.push( array[i] );
    };
  };

  return result;
};

function twoSum (array) {
  result = [];

  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 1 + i; j < array.length; j++) {
      if (array[i] + array[j] === 0 ) {
      result.push([i, j])
      };
    };
  };
  return result;
};

function myTranspose (array) {
  result = [];
  var rowNum = array.length;
  var colNum = array[0].length;

  for (var i = 0; i < colNum; i++) {
    var newRow = [];
    for (var j = 0; j < rowNum; j++) {
      newRow.push(array[j][i]);
    };
    result.push(newRow);
  };
  return result;
};

function myEach (array, funct) {
  for (var i = 0; i < array.length; i++) {
    funct(array[i]);
  };
};



function myMap (array, funct) {
  var results = [];

  myEach(
    array, function (el) { results.push( funct(el) ); }
  );

  return results;
};

function myInject (array, funct) {
  var memo = array[0];

  myEach(array.slice(1), function (el) { ( memo = funct(memo, el) ); });

  return memo;
};

function bubbleSort (array) {
  for (var i = 0; i < array.length - 1; i++) { // bubble from back to the front
    for (var j = array.length - 1; j > i ; j--) {

      if (array[j] < array[j - 1]) {
        var holder = array[j];
        array[j] = array[j - 1];
        array[j - 1] = holder;
      };
    };
  };

  return array
};

function substrings (string) {
  var result = [];
  for (var i = 0; i <= string.length-1; i++) {
    for (var j = i + 1; j <= string.length; j++) {
      result.push ( string.substring(i, j) )
    }
  }

  return result
};

function range (start_pos, end_pos) {
  if (start_pos > end_pos) {
    return new Array;
  } else {
    var returned_array =  (range(start_pos, end_pos - 1));
    returned_array.push(end_pos);
    return (returned_array);
  };
};

console.log(range(0,4))

function fibonacci (n) {
  if (1 === n) {
    return [1];
  } else if (2 === n) {
    return [1, 1];
  } else {
    var lastFib = fibonacci(n - 1);
    lastFib.push(lastFib[lastFib.length - 1] + lastFib[lastFib.length - 2] );
    return lastFib;
  };
};

console.log(fibonacci(7))

function bSearch (array, target) {
  var index = Math.floor( array.length / 2 );
  if (array.length < 1) { return NaN; }
  else if ( array[index] === target ) { return index; }
  else if ( array[index] > target ) {
    return bSearch (array.slice(0,index), target);
  } else {
    return index + 1 + bSearch (array.slice(index + 1, array.length), target);
  };
}


console.log ( bSearch([] , 4) ) //NaN
console.log ( bSearch([1] , 4) ) //NaN
console.log ( bSearch([1, 5] , 4) ) //NaN
console.log ( bSearch([1, 4, 6] , 4) )  //1
console.log ( bSearch([1, 2, 3, 4, 6] , 4) )  //3
console.log ( bSearch([1, 2, 3, 3, 3, 3, 3, 4, 6] , 4) )  //7
console.log ( bSearch([1, 4, 6, 7, 8] , 4) )  //1

function compareNumbers(a, b) {
  return b - a;
}

function makeChange (amount, changeTokens) {
  var sorted_coins = changeTokens.sort(function (a, b) {return b - a});
  if (amount < sorted_coins[changeTokens.length - 1]) {
    return NaN;
  } else if (sorted_coins.length < 1) {
    return NaN;
  } else {
    if (amount === sorted_coins[0]) {
      return [amount];
    } else if (amount > sorted_coins[0] ) {
      var my_change = makeChange(amount - sorted_coins[0], sorted_coins);
      my_change.push(sorted_coins[0]);
      return my_change;
    } else {
      return makeChange(amount, sorted_coins.slice(1));
    }
  };
};

console.log (makeChange(14, [10, 7, 1]))

function merge_sort (array) {
  if (array.length < 2) {
    return array;
  } else {
    var index = Math.floor(array.length / 2);
    var left = merge_sort (array.slice(0, index));
    var right = merge_sort (array.slice(index, array.length));
    return helper_merge(left, right);
  };
};

function helper_merge(left, right) {
  if (left.length < 1 || right.length < 1) {
    return left.concat(right);
  } else if (left[0] < right[0] ) {
    var new_arr = [left[0]];
    return new_arr.concat(helper_merge(left.slice(1), right));
  } else {
    var new_arr = [right[0]];
    return new_arr.concat(helper_merge(right.slice(1), left));
  };
};

console.log(merge_sort([1, 6, 7, 3, 678, 45, 2, 4]));


function subset (array) {
  if (array.length < 1) {
    return [[]];
  } else {
    var sub_Subset = subset(array.slice(1));
    var added_Subset = []
    for (var i = 0; i < sub_Subset.length; i++) {
      added_Subset.push( sub_Subset[i].concat(array[0]) )
    }
    return sub_Subset.concat(added_Subset)
  }
}

console.log( subset([1,2,3]))
