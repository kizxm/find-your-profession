$(document).ready(function() {

  $("form#jobtype").submit(function(event) {
    var gender = $("select#gender").val();
    var favefood = $("select#favefood").val();

    if (gender === 'female' && favefood === 'snacks') {
    $("#human").show();
    }
    if (gender === 'female' && favefood === 'meal') {
    $("#coalminer").show();
    }
    if (gender === 'male' && favefood === 'snacks') {
    $("#human").show();
    }
    if (gender === 'male' && favefood === 'meal') {
    $("#coalminer").show();
    }




    event.preventDefault();

  });
});
