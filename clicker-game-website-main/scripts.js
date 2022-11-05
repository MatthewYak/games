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
  let suffixes = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "UDc", "DDc", "TDc", "QaDc", "QiDc", "SxDc", "SpDc", "ODc", "NDc", "Vg", "UVg", "DVg", "TVg", "QaVg", "QiVg", "SxVg", "SpVg", "OVg", "NVg", "Tg", "UTg", "DTg", "TTg", "QaTg", "QiTg", "SxTg", "SpTg", "OTg", "NTg", "Qd", "UQd", "DQd", "TQd", "QaQd", "QiQd", "SxQd", "SpQd", "OQd", "NQd", "Qq", "UQq", "DQq", "TQq", "QaQq", "QiQq", "SxQq", "SpQq", "OQq", "NQq", "Sx", "USx", "DSx", "TSx", "QaSx", "QiSx", "SxSx", "SpSx", "OSx", "NSx", "Sp", "USp", "DSp", "TSp", "QaSp", "QiSp", "SxSp", "SpSp", "OSp", "NSp", "Og", "UOg", "DOg", "TOg", "QaOg", "QiOg", "SxOg", "SpOg", "OOg", "NOg", "No", "UNo", "DNo", "TNo", "QaNo", "QiNo", "SxNo", "SpNo", "ONo", "NNo", "Ce", "UCe", "DCe", "TCe", "QaCe", "QiCe", "SxCe", "SpCe", "OCe", "NCe"];
  if(value < 1000) return value;
  let suffixNum = Math.floor(("" + value).length / 3); // 3 is the number of digits in each group
  let shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
}