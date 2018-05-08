<!DOCTYPE html>
<html>
<head>
	<title>jQuery Effects</title>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<style type="text/css">
		.fade {
			width: 100px;
			height: 100px;
			background: teal;
			float: left;
			margin: 20px;
		}
		.slide {
			width: 100px;
			height: 100px;
			background: orange;
			float: left;
			margin: 20px;
			display: none;
		}
	</style>
</head>
<body>
<h1>jQuery Effects</h1>

<h2>Fade Effects</h2>

 <p>jQuery also has built in effects. Let's start with fadeOut(). It works by using the dollar sign to select an element or elements and it will animate that element from full opacity to full transparency or 0 opacity. We also need to provide a duration in milliseconds. then we can provide a callback.</p>

 <p>We've got our divs below which will fade out when the button below is clicked.</p>

<button class="fadeBtn">Fade Button</button>
<br>
<div class="fade">Please don't fade me</div>
<div class="fade">Really, please dont fade me</div>
<div class="fade">Help help help!</div>
<br>
<p>Here is the example. We can use the dollar sign to select the button element and run a function with a fadeOut method which takes one 1 second to fade out. We then add a function inside of this to console log that the fade has been complete. If we were to have a console log outside of the fadeOut function, when we click on the button the divs will start to fade but the as soon as we click the console will print 'fade completed. We want the console to print 'fade completed' when the divs have faded out so that's why we have a function inside of the fade out to do this..</p>


<pre>
$("button").on('click', function(){
 $(".fadeBtn").fadeOut(1000, function(){
  console.log("Fade Completed")
  $(this).remove()
 });
});
</pre>

<br>
<p>We can also fadeIn() like in the example below.</p>
<pre>
$("button").on('click', function(){
 $(".fadeBtn").fadeOut(1000);
});	
</pre>

<p>Or, we can fadeToggle() to fade something in, depending on if it's currently showing or not.</p>
<pre>	
$("button").on('click', function(){
 $(".fadeBtn").fadeToggle(1000);
});
</pre>

<h2>Sliding Effects</h2>

<p>.slideDown takes an element that is not currently showing and rather than animating the opacity on an element like fade does, it actually animates the height of an element.</p>
<button class="slideBtn">Slide Button</button>
<br>
<div class="slide">Slide down</div>
<div class="slide">Sliding down</div>
<div class="slide">sliding dowwwwn</div>
<pre>
$(".slideBtn").on('click', function(){
 $(".slide").slideToggle(1000, function(){
  console.log("SLIDE IS DONE!");
  });
});	
</pre>

<script>
  $(".fadeBtn").on('click', function(){
    $(".fade").fadeToggle(1000);
  });
  $(".slideBtn").on('click', function(){
    $(".slide").slideToggle(1000, function(){
      console.log("SLIDE IS DONE!");
    });
  });
</script>

</body>
</html>
