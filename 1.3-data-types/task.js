function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict" 
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    if (percent === NaN) {
        return `Параметр процентная ставка содержит неправильное значение ${percent}`
    } 
    if (contribution === NaN) {
        return `Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`
    } 
    if (amount === NaN) {
        return `Параметр сумма кредита содержит неправильное значение ${amount}` 
    }
    let bodyCredit = amount - contribution;
    let p = (percent / 100) / 12; 
    let todaysDate = new Date();
    let countMonth = Math.ceil((date.getTime() - todaysDate.getTime()) / 2.628e9);
    countMonth = countMonth.toFixed();
    let monthlyPayment = bodyCredit * (p + p / (((1 + p) ** countMonth) - 1));
    let totalAmount = (bodyCredit + contribution) + (countMonth * monthlyPayment - amount);
    if (totalAmount != 0) {
    totalAmount = totalAmount.toFixed(2);
    }
        return Number(totalAmount);
    // код для задачи №1 писать здесь
    // return totalAmount;
}


function getGreeting(name) {
   // let name = prompt("Введите ваше имя");
   if (name === undefined || name === null || name.length === 0) {
    name = "Аноним";
   }
   return `Привет, мир! Меня зовут ${name}`   
    // код для задачи №2 писать здесь
    // return greeting;
}