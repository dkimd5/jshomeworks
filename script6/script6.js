//Задание 1
var mas = document.querySelectorAll("img.smallimg");
for (var img of mas) {
	img.onclick = biggerImg;
}
console.log(mas);

function biggerImg(event) {
	var srcSmall = event.target.src;
	var srcBig = srcSmall.replaceAll("small", "big");
	var divBig = document.querySelector("div.bigPictures");
	var bigImg = document.createElement("img");
	bigImg.src = srcBig;
	bigImg.onerror = srcError;
	divBig.innerHTML = "";
	divBig.appendChild(bigImg);
}

function srcError(event) {
	event.target.onerror = alert("Src error, file not found");
}

//Задание 3
var array = ["small/small1.jpg", "small/small2.jpg", "small/small3.jpg"];
var sliderImg = document.querySelector("img.slider_img");
var leftButton = document.querySelector("button.left_button");
var rightButton = document.querySelector("button.right_button");
var count = 0;
leftButton.onclick = function left() {
	if (count == 0) {
		count = array.length - 1;
	} else {
		count--;
	} sliderImg.src = array[count];
}

rightButton.onclick = function right() {
	if (count == array.length - 1) {
		count = 0;
	} else {
		count++;
	} sliderImg.src = array[count];
}


