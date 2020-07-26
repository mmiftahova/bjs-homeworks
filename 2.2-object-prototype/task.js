//String.prototype.isPalindrome - для задачи №1

function isPallindrome(text){
    text = text.toLowerCase();
   //  +
   
   let result = text.split('').reverse().join('')
   console.log(result)
   if (result === text) {
     return true
   } else {
     return false
   }
 } 
 isPallindrome('А роза упала на лапу Азора







function getAverageMark(marks) {
    // код для задачи №2 писать здесь
   if (marks.length === 0) {
       return 0;
   }
    counter = 0;
    let average = 0; 
    for (let key in marks) {
        ++counter;
        average += marks[key];
    }
    let roundedAverage = Math.round(average / counter);
    return roundedAverage;
    // return averageMark
}




function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = Date.now();
    birthday = new Date(birthday).getTime();
    let diff = now - birthday;
    let age = diff / 3.156e10;
    if  (age < 18) {
        return false
    } else {
        return true
    }
    // // return verdict
}
