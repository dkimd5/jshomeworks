//Задание 1
function simpleNumber(number) {
	for (var i = 2; i < number; i++) {
		if (number % i == 0) return false;
	}
	if (number > 1) {
		return number;
	}

}

var count = 0;
while (count <= 100) {
	if (simpleNumber(count)) {
		console.log(simpleNumber(count));
	}
	count++;
}

//Задание 2, 3
var basket = [
	{
		title: "Product 1",
		price: 100,
		amount: 5
	},
	{
		title: "Product 2",
		price: 200,
		amount: 10
	},
	{
		title: "Product 3",
		price: 300,
		amount: 20
	}
];

function countBasketPrice(array) {
	var basketPrice = 0;
	for (var item of array) {
		basketPrice += item.price * item.amount;
	}
	return basketPrice;
}

console.log(countBasketPrice(basket));


