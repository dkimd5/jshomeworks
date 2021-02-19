//Задание 1

var number = prompt('Введите число от 0 до 999: ');


function split(num) {
    obj = {};
    if (num < 0 || num > 999) {
        console.log('Число вне диапазона');
    } else if (num < 10) {
        obj.units = num;
    } else if (num >= 10 & num < 100) {
        obj.unit = num[1];
        obj.ten = num[0];
    } else {
        obj.unit = num[2];
        obj.ten = num[1];
        obj.hundred = num[0];
    }
    return obj;
}

console.log(split(number));

//Задание 2

var event, ok;
var records = [];

var windowA = answer(works.a00, works.a1, works.a2);
switch (windowA) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        var windowB = answer(works.b00, works.b1, works.b2);
        switch (windowB) {
            case 1:
            case 2: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                var windowD = answer(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        var windowC = answer(works.c00, works.c1, works.c2);
        switch (windowC) {
            case 1:
            case 2: // Второе действие
                var windowD = answer(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

console.log(records);

var yourAnswer = prompt('Выберите номер окна: ');
if (yourAnswer == 1) {
    alert(records[0][0] + 'Ваш ответ - ' + records[0][1]);
} else if (yourAnswer == 2) {
    alert(records[1][0] + 'Ваш ответ - ' + records[1][1]);
} else if (yourAnswer == 3) {
    alert(records[2][0] + 'Ваш ответ - ' + records[2][1]);
} else {
    alert('Wrong number');
}


alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

function answer(q, ans1, ans2) {
    do {
        ok = false;
        event = +prompt(q + ans1 + ans2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(2, event);
        }
    } while (!ok);
    switch (event) {
        case 1: records.push([q, ans1]);
            break;
        case 2: records.push([q, ans2]);
            break;
        case -1: records.push([q, "Вы покинули игру"]);
            break;
    }
    return event;
}

