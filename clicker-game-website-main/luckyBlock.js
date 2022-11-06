function BuyLuckyBlock() {
  if (balance >= 100 * multiplier && multiplier > 0) {
    let luckyBlockCost = 100 * multiplier;
    balance -= luckyBlockCost;
    updateCount();
    let random = Math.floor(Math.random() * options.length);

    if (options[random].positive == true) {
      balance += luckyBlockCost;
      updateCount();
    }

    options[random].effect(luckyBlockCost);
    document.getElementById("luckyBlockMessage").innerText =
      options[random].message;
    document.getElementsByClassName("moneyPanelText")[0].hidden = true;

    document.getElementById('luckyBlock').disabled = true;

    setTimeout(() => {
      document.getElementsByClassName("moneyPanelText")[0].hidden = false;
      document.getElementById("luckyBlockMessage").innerText = "";
      document.getElementById('luckyBlock').disabled = false;
    }, 5000);
  }
}
