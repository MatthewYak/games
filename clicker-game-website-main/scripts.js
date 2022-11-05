let balance = 0;
let multiplier = 1;

let multiplierCost = 10;
let multiplierCostMultiplier = 1;

function updateCount() {
  document.getElementById('money').innerText = convert(toFixed(balance));
  //console.log(balance) (for debug purposes)
}

function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += (new Array(e + 1)).join('0');
    }
  }
  return x;
}

function convert(value) {
  if (value >= 1000000) {
    value = (value / 1000000) + "M"
  }
  else if (value >= 1000) {
    value = (value / 1000) + "K";
  }
  return value;
}