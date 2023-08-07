var cuoc = function (km) {
  var gia = 11000;
  if (km <= 1) gia = 15000;
  else if (km <= 5) gia = 13500;
  else if (km <= 120) gia = 11000;
  else gia *= 0.9;
  return gia * km;
};
console.log(cuoc(121));
