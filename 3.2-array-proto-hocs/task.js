function sleep (milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e);
}

function sum(...args) {
    sleep(100); 
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

  function compareArrays(arr1, arr2) {
      return arr1.length === arr2.length && arr1.every((a,i) => a === arr2[i])
}

function memorize(fn,limit) {
  
    let memory = [];
    return function  (...args) {
      let memoryFind = memory.find(function(a) {
        return compareArrays(a.args, args);
      });

      if (!memoryFind) {
          if (memory.length === limit) {
             memory.shift();
          } 
          memoryFind = new Object();
          memoryFind.args = args;
          memoryFind.result = fn(...args);
          memory.push(memoryFind);
      }
      return memoryFind.result;
    
    };
  }






