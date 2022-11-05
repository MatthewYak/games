let autoclickLevel = 10; // Autoclicks every 10 seconds

let autoclickerEnabled = false;
let autoclickerCost = 100;
let autoclickerCostMultiplier = 1;

updateAutoClicker();

function updateAutoClicker() {
  document.getElementById('autoclickerCost').innerText = '$' + convert(Math.round(autoclickerCost));
  document.getElementById('autoclickRate').innerText = (Math.round(autoclickLevel * 10000) / 10000);
}


function enableAutoClicker() {
  autoclicker = setInterval(function () {
    balance += multiplier;
    updateCount();
  }, autoclickLevel * 1000);
}

function disableAutoClicker() {
  clearInterval(autoclicker);
}

// Upgrade autoclicker
function UpgradeAutoClicker() {
  if (balance >= autoclickerCost) {
    if (autoclickLevel > 1) {
      balance -= autoclickerCost;
      autoclickerCostMultiplier += 4;
      autoclickerCost = Math.round(autoclickerCost * autoclickerCostMultiplier);
      autoclickLevel -= 1;
      if (autoclickerEnabled == false) {
        enableAutoClicker();
        autoclickerEnabled = true;
      } else {
        disableAutoClicker();
        enableAutoClicker();
      }
      updateAutoClicker();
      updateCount();
    } else if (autoclickLevel > 0.5) {
      balance -= autoclickerCost;
      autoclickerCostMultiplier += 4;
      autoclickerCost = Math.round(autoclickerCost * autoclickerCostMultiplier);
      autoclickLevel -= 0.5;
      if (autoclickerEnabled == false) {
        enableAutoClicker();
        autoclickerEnabled = true;
      } else {
        disableAutoClicker();
        enableAutoClicker();
      }
      updateAutoClicker();
      updateCount();
    } else if (autoclickLevel > 0.1) {
      balance -= autoclickerCost;
      autoclickerCostMultiplier += 4;
      autoclickerCost = Math.round(autoclickerCost * autoclickerCostMultiplier);
      autoclickLevel -= 0.1;
      if (autoclickerEnabled == false) {
        enableAutoClicker();
        autoclickerEnabled = true;
      } else {
        disableAutoClicker();
        enableAutoClicker();
      }
      updateAutoClicker();
      updateCount();
    } else if (autoclickLevel > 0.01) {
      balance -= autoclickerCost;
      autoclickerCostMultiplier += 4;
      autoclickerCost = Math.round(autoclickerCost * autoclickerCostMultiplier);
      autoclickLevel -= 0.01;
      if (autoclickerEnabled == false) {
        enableAutoClicker();
        autoclickerEnabled = true;
      } else {
        disableAutoClicker();
        enableAutoClicker();
      }
      updateAutoClicker();
      updateCount();
    } else {
      document.getElementById('autoclicker').innerText = 'Maxed';
      document.getElementById('autoclicker').disabled = true;
    }
  }
}