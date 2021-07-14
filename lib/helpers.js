export const formatNum = function (num) {
  Number(num);
  let newFormat = new Intl.NumberFormat('es-MX').format(num);
  return newFormat;
};
