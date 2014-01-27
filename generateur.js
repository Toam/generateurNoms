function Generateur() {}

Generateur.prototype.getName = function () {
  var names = ["Jean Aimar", "Ella Faim", "Amer Credi"];
  return names[Math.floor(Math.random() * names.length)];
};

module.exports = Generateur;