updateMultiplier();

function UpgradeMultiplier() {
  if (balance >= multiplierCost) {
    balance -= multiplierCost;
    multiplierCostMultiplier += 0.1;
    multiplierCost = Math.round(multiplierCost * multiplierCostMultiplier);
    multiplier += Math.round(1 * multiplier);
    updateMultiplier();
    updateCount();
  }
}

function updateMultiplier() {
  document.getElementById('MultiplierCost').innerText = '$' + multiplierCost;
}
