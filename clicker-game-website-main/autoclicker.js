let autoclickLevel = 10; // Autoclicks every 10 seconds

let autoclickerEnabled = false;
let autoclickerCost = 100;
let autoclickerCostMultiplier = 1;

updateAutoClicker();

function updateAutoClicker() {
  document.getElementById('autoclicker').innerText = 'Autoclicker: $' + autoclickerCost;
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
      autoclickerCostMultiplier += 0.1;
      autoclickerCost = autoclickerCost * autoclickerCostMultiplier;
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
      autoclickerCostMultiplier += 0.1;
      autoclickerCost = autoclickerCost * autoclickerCostMultiplier;
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
      autoclickerCostMultiplier += 0.1;
      autoclickerCost = autoclickerCost * autoclickerCostMultiplier;
      autoclickLevel -= 0.1;
      if (autoclickerEnabled == false) {
        enableAutoClicker();
        autoclickerEnabled = true;
      } else {
        disableAutoClicker();
        enableAutoClicker();
      }
    } else {
      document.getElementById('autoclicker').innerText = 'Autoclicker: Maxed';
    }
  }
}
