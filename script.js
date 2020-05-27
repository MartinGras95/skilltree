

// Create const for each learned button
const learnedBtn = document.querySelector('.btn-learned');

// add new skill
$("#btn-add").click(function (e) { 
    e.preventDefault();
    var newSkill = document.getElementById("txt-skill").value;
    console.log(newSkill);
    // ugliest line ever
    $(this).before("<div class="+`"row"`+">"+ "<div class="+`"col"`+">"+"<h3>"+newSkill+"</h3>" + "<button class="+`"btn btn-primary btn-learned"`+">Learned</button>"+"</div>"+"</div>");
});

// When button is clicked its corresponding skill is marked as learned
// also local storage variable is set to true
$(".btn-learned").click(function (e) { 
    e.preventDefault();
    var value = $(this).siblings("h3").text().toLowerCase();
    $(this).siblings("h3").css("color","red");
    localStorage.setItem(value,true);

});






