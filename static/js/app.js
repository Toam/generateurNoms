var getName = function getName () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/nom', // L'url vers laquelle la requete sera envoyee
    data: {
      funny: false,
      gender: 'M',
    },
    success: function(data, textStatus, jqXHR) {
      data = JSON.parse(data);
      $("#name").text(data.name);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("nope :/");
    }
  });
};

$(document).foundation();

$(document).ready(function() {
  getName();
});

