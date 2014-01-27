function Generateur() {}

var firstnameM = ["Paul", "Thomas", "Henri", "Benoit", "Julien"];
var firstnameF = ["Aurélie", "Marie", "Cécile", "Julie", "Fanny"];
var lastNames = ["MARTIN", "BERZNO", "DUPONT", "MERTA", "HOSTE"];

var funnyNamesM = ["Jean Aimar", "Ella Faim", "Amer Credi"];
var funnyNamesF = ["Ella Faim"];

var genders = ['M', 'F'];

var getRandom = function(data){
  return data[Math.floor(Math.random() * data.length)]
}

Generateur.prototype.getName = function (params) {

  var response = {};

  if (params.funny) {
    var gender = getRandom(genders);
    if (gender == 'M') {
      response.name = getRandom(funnyNamesM);
    } else {
      response.name = getRandom(funnyNamesF);
    }
    response.gender = gender;
    response.funny = true;
    
  } else {
    var firstname;
    switch (params.gender) {
      case "M":
              response.gender = "M";
              firstname = getRandom(firstnameM);
              break;
      case "F":
              response.gender = "F";
              firstname = getRandom(firstnameF);
              break;
      default:
              var gender = getRandom(genders);
              if (gender == 'M') {
                firstname = getRandom(firstnameM);
              } else {
                firstname = getRandom(firstnameF);
              }
              response.gender = gender;
    }
    response.name = firstname + " " + getRandom(lastNames);
    response.funny = false;
  }
  
  return response;
};

module.exports = Generateur;