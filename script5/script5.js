function chessboard() {
	var table = document.createElement("table");
	var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
	var whiteFigures = ['&#9814', '&#9816', '&#9815', '&#9813', '&#9812', '&#9815', '&#9816', '&#9814'];
	var blackFigures = ['&#9820', '&#9822', '&#9821', '&#9819', '&#9818', '&#9821', '&#9822', '&#9820'];
	var whitePawn = '&#9817';
	var blackPawn = '&#9823';
	table.className = "table";
	for (var i = 9; i >= 0; i--) {
		var newtr = document.createElement("tr");
		for (var j = 0; j < 10; j++) {
			var newtd = document.createElement("td");
			if (i < 9 && i > 0 && j > 0 && j < 9) {
				if (i % 2 == j % 2) {
					newtd.className = "black";
				} else {
					newtd.className = "white";
				}
			} else if (j == 0 && (i != 9 && i != 0)) {
				newtd.innerText = i;
				newtd.className = "numbers"
			} else if (j == 9 && (i != 9 && i != 0)) {
				newtd.innerText = i;
				newtd.className = "numbers rightNumbers";
			} else {
				newtd.className = "side";
				switch (i) {
					case 9:
						newtd.innerText = letters[j];
						newtd.className += " letters topLetters";
						break;
					case 0:
						newtd.innerText = letters[j];
						newtd.className += " letters";
						break;
				}
			}
			if (j > 0 && j < 9 && (i == 8 || i == 7 || i == 2 || i == 1)) {
				newtd.className += " figures"
				switch (i) {
					case 8:
						newtd.innerHTML = blackFigures[j - 1];
						break;
					case 7:
						newtd.innerHTML = blackPawn;
						break;
					case 2:
						newtd.innerHTML = whitePawn;
						break;
					case 1:
						newtd.innerHTML = whiteFigures[j - 1];
						break
				}
			}
			newtr.appendChild(newtd);
		}
		table.appendChild(newtr);
	}
	console.log(table);
	document.body.appendChild(table);
}

chessboard();