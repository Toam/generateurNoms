var getName = function getName () {
  $("#generate").text("Chargement ...");
  $("#generate").addClass("disabled");
  $.ajax({
    type: 'GET',
    url: 'http://gen.toam.fr/name',
    data: {
      funny: $('#funny').is(":checked"),
      gender: $('#gender').val()
    },
    success: function(data, textStatus, jqXHR) {
      $("#name").text(data.name);
      $("#generate").text("Générer un autre nom");
      $("#generate").removeClass("disabled");
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

$("#generate").click(function() {
  getName();
});
