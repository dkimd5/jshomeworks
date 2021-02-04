// Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // присваемаем переменной с значение переменной а перед этим увеличив на 1 (a == 2), получаем с = 2, выводим 2 на экран
d = b++; alert(d);           // присваеваем d значение переменной b равное 1, затем увеличиваем b на 1 (b == 2), выводим значение d (1) на экран
c = (2 + ++a); alert(c);      // присваеваем с сумму 2 + 3, т.к. а увеличивается на 1 (а == 3), выводим 5 на экран
d = (2 + b++); alert(d);      // присваеваем d сумму 2 + 2, затем увеличиваем b на 1 (b == 3), выводим 4 экран
alert(a);                    // мы увеличивали а на единицу 2 раза, поэтому a == 3
alert(b);                    // мы увеличивали b на единицу 2 раза, поэтому b == 3

//Задание 2
var a = 2;
var x = 1 + (a *= 2);
// x = 1 + (2 * 2) = 5

//Задание 3
var a = Math.random() * (10 + 10) - 10;
var b = Math.random() * (10 + 10) - 10;
if (a >= 0 && b >= 0) {
	alert(a - b);
}
else if (a < 0 && b < 0) {
	alert(a * b);
}
else {
	alert(a + b);
}

// Задание 4
var a = Math.round(Math.random() * 15);
switch (a) {
	case 0:
		alert("0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 1:
		alert("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 2:
		alert("2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 3:
		alert("3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 4:
		alert("4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 5:
		alert("5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 6:
		alert("6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 7:
		alert("7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 8:
		alert("8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 9:
		alert("9, 10, 11, 12, 13, 14, 15");
		break;
	case 10:
		alert("10, 11, 12, 13, 14, 15");
		break;
	case 11:
		alert("11, 12, 13, 14, 15");
		break;
	case 12:
		alert("12, 13, 14, 15");
		break;
	case 13:
		alert("13, 14, 15");
		break;
	case 14:
		alert("14, 15");
		break;
	case 15:
		alert("15");
		break;
	default:
		alert("incorrect number");
}

//Задание 5
function sum(a, b) {
	var c = a + b;
	return c;
}
function subtr(a, b) {
	var c = a - b;
	return c;
}
function mult(a, b) {
	var c = a * b;
	return c;
}
function div(a, b) {
	var c = a / b;
	return c;
}

// Задание 6
function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case "+":
			return sum(arg1, arg2);
		case "-":
			return subtr(arg1, arg2);
		case "*":
			return mult(arg1, arg2);
		case "/":
			return div(arg1, arg2);
		default:
			alert("something go wrong");
	}
}