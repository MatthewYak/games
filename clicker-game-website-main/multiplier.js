updateMultiplier();

function UpgradeMultiplier() {
  if (balance >= multiplierCost) {
    balance -= multiplierCost;
    multiplierCostMultiplier += 0.5;
    multiplierCost = Math.round(multiplierCost * multiplierCostMultiplier);
    multiplier += Math.round(1 * multiplier);
    updateMultiplier();
    updateCount();
  }
}

function updateMultiplier() {
  document.getElementById('MultiplierCost').innerText = '$' + convert(Math.round(multiplierCost));
}
