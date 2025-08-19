let res = document.getElementById("result");
let inp1 = document.getElementById("num1");
let inp2 = document.getElementById("num2");

// Get all operator buttons
let operators = document.querySelectorAll(".operator");

operators.forEach(btn => {
	btn.addEventListener("click", (e) => {
		let op = e.target.innerText;
		let n1 = Number(inp1.value);
		let n2 = Number(inp2.value);
		let output;

		if (op === "+") {
			output = n1 + n2;
		} else if (op === "-") {
			output = n1 - n2;
		} else if (op === "*") {
			output = n1 * n2;
		} else if (op === "/") {
			output = n1 / n2;
		}

		res.innerText = output;
	});
});
document.getElementById("change_text").addEventListener("click", () => {
      let newTexts = ["Bye", "Good Bye", "To", "Your", "Class"];
      let divs = document.querySelectorAll(".division");

      divs.forEach((div, index) => {
        div.innerText = newTexts[index];
      });
    });

