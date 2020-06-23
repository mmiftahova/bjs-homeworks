function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    "use strict"
    let coeff1 = a;
    let coeff2 = b;
    let coeff3 = c;
    let discr = coeff2 ** 2 - 4 * coeff1 * coeff3;
    let result;
    let x1;
    let x2;
    if (discr < 0) {
        result = [];
        return result
    } else if (discr === 0) {
        x1 = (-coeff2 + Math.sqrt(discr)) / (2 * coeff1);
        result = [x1];
        return result;
    } else {
        x1 = (-coeff2 + Math.sqrt(discr)) / (2 * coeff1);
        x2 = (-coeff2 - Math.sqrt(discr)) / (2 * coeff1);
        result = [x1, x2];
        return result;
    }
}
// return x;

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let averageMark;
    let sum = 0;
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        marks.splice(5);
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        averageMark = sum / marks.length;
    }
    return averageMark;
}



function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    let nameUser = name;
    let yearUser = dateOfBirthday.getFullYear();
    let newDate = new Date().getFullYear();
    //let result = [`Не желаете ли олд-фэшн, ${nameUser}?`, `Сожалею, ${nameUser}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!` ]
    if ((newDate - yearUser) >= 18) {
        return `Не желаете ли олд-фэшн, ${nameUser}?`;
    } else if ((newDate - yearUser) < 18) {
        return `Сожалею, ${nameUser}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}
    // return result;
