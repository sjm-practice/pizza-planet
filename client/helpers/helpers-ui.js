UI.registerHelper('toCommaString', function (array) {
  return array.join(", ");
});

UI.registerHelper('toUsd', function (value) {
  return "$" + (value/100);
});
