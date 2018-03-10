/*var skillset = document.getElementsByClassName('skillset');

alert(skillset);*/
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  
  $('.projects').hide();
  
  $('.projects-button').on('click', function() {
		/* this like can prevent the slideToggle from working properly, since it is also affecting the showing and hiding behavior of the projects element
    $(this).next().toggle();
    */
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Courses Viewed')
	});
}

$(document).ready(main);
