<!DOCTYPE html>
<html>
<head>
	<title>Methods</title>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="methods.js"></script>
	<script>
	$(function(){
	$("img").css("width", "500px");
	$("img").click(function() {
		$("img").attr("src", "https://www.chiens-de-france.com/photo/chiens/2017_05/chiens-Bulldog-Anglais-e5a99c4a-dc3a-0504-2db2-ced912e78074_min.jpg");
		$("img").css({
				height: "500px",
				width: "400px",
			});
	});
	$("input").hover(function() {
	$("input").val("Hi, I'm Saloni");
});
});		
	</script>
	<style type="text/css">
		.correct {
			color: green;
		}
		.wrong {
			color: red;
			background-color: pink;
		}
		.done {
			color: grey;
			text-decoration: line-through;
		}
	</style>

</head>
<body>


<h1>Common jQuery Methods</h1>
<ul>
	<li>val() - helps us extract a value from an input. Whatever we write inside the input can be extracted using this method. We can also pass in a new value. .val() can not only be used with inputs but can also be used with checkboxes and colour pickers and it can also be used with checkboxes.</li>
	<li>$("h1").text() - this will select all h1s. We can also pass in a value or string and it would change the text content of that paricular h1.</li>
	<li>attr() - Retrieves the value of an attribute. So we can change the 'alt' text of an image for example.</li>
	<li>$("ul").html() - works like inner.html. It gets the HTML contents of the first element in the set of matched elements set the HTML contents of every matched element. The example means that it would retrieve the inner HTML of 'ul' which would show all the 'li's. We can also pass in new content through.</li>
	<li>$("h1").addClass("correct") - it adds specified class to each elements in matched elements.</li>
	<li>removeClass() - this will remove a class that has been assigned from an element.</li>
	<li>toggleClass()</li>
</ul>


<h1>jQuery Methods Demo page</h1>

<input type="text" placeholder="your name">

<select>
	<option>Blue</option>
	<option>Orange</option>
	<option>Green</option>
	<option>Yellow</option>
</select>

<ul>
	<li>Skittles</li>
	<li>Starburst</li>
	<li>Twix</li>
</ul>

<img src="https://www.radionz.co.nz/assets/news/138232/eight_col_93218761_l.jpg?1516140434">

<p>First we could make the picture a more manable size bby changing the width size using the css method.</p>

<pre>
$("img").css("width");

//output 720px
</pre>

<p>By using the css method below we can then make the picture smaller.</p>

<pre>
$("img").css("width", "500px");
</pre>

<p>We can use the attribute method to change the source of the image to add another image by doing the following:</p>

<pre>
$("img").attr("src", "https://www.chiens-de-france.com/photo/chiens/2017_05/chiens-Bulldog-Anglais-e5a99c4a-dc3a-0504-2db2-ced912e78074_min.jpg");
</pre>
<p>Click on the image to see what happens!</p>

<p>We can also change the input type.</p>

<pre>
$("input").attr("type", "color")	
</pre>

<p>This would change the input from text to a colour picker.</p>

<p>We can also change the value in the input by passing in another value like in the exmple below. Try hovering over the input to see it change.</p>

<pre>
$("input").val("Saloni Robinson");
</pre>
</body>
</html>
