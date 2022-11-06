function BuyLuckyBlock() {
	if (balance >= 100 * multiplier && multiplier > 0) {
		balance -= 100 * multiplier;
		updateCount();
		let random = Math.floor(Math.random() * options.length);
		options[random].effect();
		document.getElementById("luckyBlockMessage").innerText =
			options[random].message;
		document.getElementsByClassName("moneyPanelText")[0].hidden = true;

		setTimeout(() => {
			document.getElementsByClassName("moneyPanelText")[0].hidden = false;
			document.getElementById("luckyBlockMessage").innerText = "";
		}, 5000);
	}
}
