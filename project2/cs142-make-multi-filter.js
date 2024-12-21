"use strict";
function cs142MakeMultiFilter(originalArray){
    let currentArray=[...originalArray];
    return function arrayFileterer(filterCriteria,callback){
        if (typeof filterCriteria === 'function') {
            currentArray = currentArray.filter(filterCriteria);
        }else{return currentArray} 
            // If callback is a function, call it with currentArray and `this` should refer to originalArray
        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }
        return arrayFileterer
    }

}