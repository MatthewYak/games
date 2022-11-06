const options = [
  {
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
    message: "You received 20% of your total money.",
    effect: function () {
      balance += Math.round(balance * 0.2);
      updateCount();
    }
  },
  {
    message: "You lost 20% of your total money.",
    effect: function () {
      balance -= Math.round(balance * 0.2);
      updateCount();
    }
  },
  {
    message: "One free multiplier upgrade!",
    effect: function () {
      // do nothing
    }
  },
  {
    message: "You lost a multiplier upgrade!",
    effect: function () {
      // do nothing
    }
  },
  {
    message: "Multiplier level reset back to 0!",
    effect: function () {
      // do nothing
    }
  },
  {
    message: "You gained 100K cash!",
    effect: function () {
      // do nothing
    }
  },
  {
    message: "You lost 100K cash!",
    effect: function () {
      // do nothing
    }
  },
  {
    message: "You gained 1M Cash!",
    effect: function () {
      // do nothing
    }
  },
  {
    message: "You lost 1M Cash!",
    effect: function () {
      // do nothing
    }
  },
  {
    message: "Multiplier reduced 20% for 20 seconds!",
    effect: function () {
      // do nothing
    }
  },
  {
    message: "Multiplier level upgraded 2x",
    effect: function () {
      // do nothing
    }
  },
  {
    message: "You got nothing!",
    effect: function () {
      // do nothing
    }
  },
  {
    message: "You can't buy any upgrades for the next 10 seconds!",
    effect: function () {
      // do nothing
    }
  },
  {
    message: "Bankrupt! Everyting is reset back to 0!",
    effect: function () {
      // do nothing
    }
  },
  //...
]