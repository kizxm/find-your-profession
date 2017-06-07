$(document).ready(function() {

  $("form#jobtype").submit(function(event) {
    var gender = $("select#gender").val();
    var favefood = $("select#favefood").val();
    var health = $("select#health").val();

    if (gender === 'female' && favefood === 'snacks'&& health === "yeshealthy") {
    $("#human").show();
    }
    if (gender === 'female' && favefood === 'meal'&& health === "yeshealthy") {
    $("#coalminer").show();
    }
    if (gender === 'male' && favefood === 'snacks'&& health === "nohealthy") {
    $("#cornfarm").show();
    }
    if (gender === 'male' && favefood === 'meal' && health === "yeshealthy") {
    $("#coalminer").show();
    }
    if (gender === 'male' && favefood === 'meal' && health === "nohealthy") {
    $("#cornfarm").show();
    }



    event.preventDefault();

  });
});
