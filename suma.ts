let arraySum = function(array: number[]){
    var safer  = 0;
    for(let index = 0; index < array.length; index++){ 
       const element = array[index];
       var safer = element + safer;
       
    }
    return safer;
};

console.log(arraySum([1,2,3]));