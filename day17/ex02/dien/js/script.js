var tiendien = function (n) {
  var t0_50 = 50 * 1.678;
  var t50_100 = 50 * 1.734 + t0_50;
  var t100_200 = 100 * 2.014 + t50_100;
  var t200_300 = 100 * 2.536 + t100_200;
  var t300_400 = 100 * 2.834 + t200_300;

  if (n <= 50) return n * 1.678;
  else if (n <= 100) return (n - 50) * 1.734 + t0_50;
  else if (n <= 200) return (n - 100) * 2.014 + t50_100;
  else if (n <= 300) return (n - 200) * 2.536 + t100_200;
  else if (n <= 400) return (n - 300) * 2.834 + t200_300;
  else return (n - 400) * 2.927 + t300_400;
};
console.log(tiendien(51));
