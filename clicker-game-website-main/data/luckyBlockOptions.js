const options = [
  {
    positive: true,
    // 2x multiplier every click
    message: "2x multiplier for 10 seconds",
    effect: function () {
      multiplier *= 2;
      setTimeout(() => {
        multiplier /= 2;
      }, 10000);
    },
  },
  {
    positive: true,
    message: "You received 20% of your total money.",
    effect: function () {
      balance += Math.round(balance * 0.2);
      updateCount();
    }
  },
  {
    positive: false,
    message: "You lost 20% of your total money.",
    effect: function () {
      balance -= Math.round(balance * 0.2);
      updateCount();
    }
  },
  {
    positive: true,
    message: "One free multiplier upgrade!",
    effect: function () {
      if (multiplier < 100) {
        multiplier += 1;
      }
      else if (multiplier < 1000) {
        multiplier += 10;
      }
      else if (multiplier < 10000) {
        multiplier += 100;
      }
      else if (multiplier < 100000) {
        multiplier += 1000;
      }
      else if (multiplier < 1000000) {
        multiplier += 10000;
      }
      else if (multiplier < 10000000) {
        multiplier += 100000;
      }
      else if (multiplier < 100000000) {
        multiplier += 1000000;
      }
    }
  },
  {
    positive: false,
    message: "You lost a multiplier upgrade!",
    effect: function () {
      if (multiplier > 1000000) {
        multiplier -= 1000000;
      }
      else if (multiplier > 100000) {
        multiplier -= 100000;
      }
      else if (multiplier > 10000) {
        multiplier -= 10000;
      }
      else if (multiplier > 1000) {
        multiplier -= 1000;
      }
      else if (multiplier > 100) {
        multiplier -= 100;
      }
      else if (multiplier > 10) {
        multiplier -= 10;
      }
      else if (multiplier > 1) {
        multiplier -= 1;
      }
    }
  },
  {
    positive: false,
    message: "Multiplier level reset back to 0!",
    effect: function () {
      multiplier = 1;
      multiplierCost = 10;
      multiplierCostMultiplier = 1.2;
      updateMultiplier();
    }
  },
  {
    positive: true,
    message: "You gained 100K cash!",
    effect: function () {
      balance += 100000;
      updateCount();
    }
  },
  {
    positive: false,
    message: "You lost 100K cash!",
    effect: function () {
      balance -= 100000;
      updateCount();
    }
  },
  {
    positive: true,
    message: "You gained 1M Cash!",
    effect: function () {
      balance += 1000000;
      updateCount();
    }
  },
  {
    positive: false,
    message: "You lost 1M Cash!",
    effect: function () {
      balance -= 1000000;
      updateCount();
    }
  },
  {
    positive: false,
    message: "Multiplier reduced 20% for 20 seconds!",
    effect: function () {
      multiplier *= 0.8;
      setTimeout(() => {
        multiplier /= 0.8;
      }, 20000);
    }
  },
  {
    positive: true,
    message: "Multiplier level upgraded 2x",
    effect: function () {
      multiplier *= 2;
    }
  },
  {
    positive: false,
    message: "You got nothing!",
    effect: function () {
      // Do nothing
    }
  },
  {
    positive: false,
    message: "You can't buy any upgrades for the next 10 seconds!",
    effect: function () {
      // Disable all buttons
      document.getElementsByClassName('upgradeBtn').disabled = true;
    }
  },
  {
    positive: false,
    message: "Bankrupt! Everyting is reset back to 0!",
    effect: function () {
      balance = 0;
      multiplier = 1;
      multiplierCost = 10;
      multiplierCostMultiplier = 1.2;
      updateMultiplier();
      updateAutoClicker();
      updateCount();
    }
  },
]