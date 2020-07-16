function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    if (D < 0) {
        return {
            D,
            roots: []
        }
    }
    if (D === 0) {
        let x1 = -b / (2 * a);
        return {
            D,
            roots: [x1],
        }
    }
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D,
            roots: [x1, x2]
        }
    }
}


function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length === 0) {
        return "Уравнение не имеет вещественных корней"
    } else if (result.roots.length === 1) {
        return `Уравнение имеет один корень X₁ = ${result.roots}`;
    } else {
        return `Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
    }
}



function getAverageScore(data) {
    let dataNumber = [];
    let property;
    let result = new Object();
    for (property in data) {
        result[property] = getAverageMark(data[property]);
        dataNumber.push(result[property]);

    }
    result.average = getAverageMark(dataNumber);
    return result;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    let sum = marks.reduce((initial, next) => initial + next);
    let result = sum / marks.length;
    return result
}




function getPersonData(secretData) {
    let person = new Object();
    let key;
    for (key in secretData) {
        console.log(`Свойство ${key} значение ${secretData[key]} `);
        if (key === 'aaa') {
            person.firstName = getDecodedValue(secretData[key]);
        } else if (key === 'bbb') {
            person.lastName = getDecodedValue(secretData[key]);
        }
    }
    return person;
}

function getDecodedValue(secret) {
    let names = ["Родриго", "Эмильо"];
    return names[secret];
}
