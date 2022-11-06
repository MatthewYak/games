let multiplierMultiplier = 1;

updateMultiplier();

function UpgradeMultiplier() {
  if (balance >= multiplierCost) {
    balance -= multiplierCost;
    multiplierCostMultiplier += 0.2;
    multiplierCost = Math.round(multiplierCost * multiplierCostMultiplier);
    multiplier += Math.round((1 * multiplier * multiplierMultiplier));
    multiplierMultiplier += 0.1;

    updateMultiplier();
    updateCount();
  }
}

function updateMultiplier() {
  document.getElementById('MultiplierCost').innerText = '$' + convert(Math.round(multiplierCost));
  document.getElementById('luckyBlockCost').innerText = '$' + convert(Math.round(multiplier * 100));
}
