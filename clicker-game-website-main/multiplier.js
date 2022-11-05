document.getElementById('Multiplier').innerText = 'Upgrade Multiplier ($' + (multiplierCost) + ')'

function Upgrade() {
  if (balance >= (multiplierCost * multiplierCostMultiplier)) {

    multiplier += 0.5 * multiplierCostMultiplier;
    balance -= (multiplierCost * multiplierCostMultiplier);

    multiplierCostMultiplier += 0.5;
    multiplierCost = (multiplierCost * multiplierCostMultiplier);
    updateCount()
    document.getElementById('Multiplier').innerText = 'Upgrade Multiplier ($' + (multiplierCost * multiplierCostMultiplier) + ')'
  }
}