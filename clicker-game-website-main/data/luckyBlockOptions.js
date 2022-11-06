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
]