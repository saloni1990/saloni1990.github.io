// Check off specific todos by clicling
//add click listener on entire ul parent, so anytime we click on the ul, the listener will be fired.By adding the li arguement, it says, when an li is clicked inside of a ul run the toggleClass code.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	//stops the event from bubbling into its parent elements.
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
 if(event.which === 13){
 	//grabbing new todo text from input
 	var shoppingList = $(this).val()
 	$(this).val("");
 	//create a new li and add to ul
 	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + shoppingList + "</li>");
 }
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
