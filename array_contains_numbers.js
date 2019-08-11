/*
 * Implement an algorithm to determine if given sorted array has all numbers from 1 to k at least once and no 
 * other numbers. 
 */

function containsNumbers(arr, k){
    let n = arr.length;
    for (var i = 0; i < n-1 && arr[1] < K; i++ ){
        if (arr[i] + 1 < arr[i+1];
            return false;
    }
    if (arr[0] != 1 || arr[n-1] != k){
        return false;
    }
    else{
        return true;  
    }
}

const test = 'Test';
const it = ((description, input, expect) => {
  console.log(test + ' containsNumbers ' + description + ':',
    containsNumbers(input) === expect 
    ? 
    ' PASS'
    : ' FAIL');
});
it('should return true', ([1,1,2,2,3,3,3], 3), true);
it('should return false', ([1,1,2,2,3,3,3], 4), false);
it('should return false', ([0,1,2,2,3,3,3], 3), false);
it('should return false', ([1,3,4], 4), false);
