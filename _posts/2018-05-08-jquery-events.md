<!DOCTYPE html>
<html>
<head>
	<title>jQuery Events</title>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script>
 
   $("h1").click(function(){
     alert("clicked");
   });
   
   $("button").click(function(){
     var text = $(this).text();
     alert("You clicked " + text);
    });
    $("input[type=text]").keypress(function(){
     alert("text input keypress!");
    });
    $("input").keypress(function(event){
      if(event.which === 13){
      alert("You hit enter!!") 
      };
    });
    $("h1").on('click', function(){
      $(this).css("color", "purple");
    });
    $("button").on('mouseenter', function(){
      $(this).css("font-weight", "bold");
    });
    $("button").on('mouseleave', function(){
      $(this).css("font-weight", "normal")
    });
   });
  </script>
</head>
<body>

 <h1>jQuery Events</h1>
 <h1>another h1</h1>
 <h1>and another h1</h1>

 <h2>Some common jQuery Events</h2>

 <ul>
  <li>click()</li>
  <li>keypress()</li>
  <li>on()</li>
 </ul>

 <h2>click()</h2>
 <p>When using Vanilla JS we would always write target.addEventListener(type, function(){}). However jQuery's click() method is a quick and easy way to add a click listener to elements(s).</p>

 <button>Don't Click Me</button>
 <button>Seriously, Don't Click Me</button>
 <button>This is your last warning!!</button>

 <pre>
 //prints when item with id 'submit is clicked'

 $("#submit").click(function(){
 console.log("Another click");
 });

 //alerts when ANY button is clicked

 $("button").click(function(){
 alert("Someone clicked a button");
 });
 </pre>
	
 <p>We can add a click listener to the first h1 above, see what happens when you click on it! Behind the scenes click() is using adEventListener and is adding a click event to the h1.</p>
 <p>We can also select all the buttons above so whenever we click on any button an event will occur. Click on the buttons to see how it works.</p>
 <p>If we wanted to use an event listener to style and element. We can use the .css method and would select the buttons element like so:</p>

 <pre>
 $("button").click(function(){
  $(this).css("backgroundColor", "orange");
  });
 </pre>

 <p>We can also add an alert the text of the button that was clicked, like this:</p>
 
 <pre>	
 $("button").click(function(){
 var text = $(this).text();
 alert("You clicked " + text);
 });
 </pre>

<h2>keypress()</h2>
<p>jQuery's <em>keypress()</em>method is a quick and easy way to add a keypress listener to elements</p>
<p>Other methods include <em>keydown()</em> when an event is triggered when we press on a key and <em>keyup()</em> which triggers an event as soon as we release the key. <a href="https://stackoverflow.com/questions/12827408/whats-the-theory-behind-jquery-keypress-keydown-keyup-black-magic-on-macs">Stack Overflow</a> explains these events really well.</p>
<p>keypress() works just like click(), we select something with the dollar sign, then we chain on keypress() and pass in a callback function. The callback function will be called anytime a keypress() event is triggered on the selected element or collection of elements.</p>

<input type="text">

<pre>
//listen for any keypress in any text input

$("input[type=text]").keypress(function(){
 alert("text input keypress!");
});
</pre>

<p>We can also listen out for a specific key press. For example if you have filled out a form and need to submit it, instead of clicking on a button, you can just press the 'enter' key.</p>
<p>To do this we need to add in an argument, i.e. 'event' - this will contain a lot of information about the key press event. </p>

<pre>
$"input".keypress(function(event){
console.log("event");
});
</pre>

<p>By passing in the event, we can get all sorts of information such as the type which is 'keypress', the timeStamp, and the keyCode/charCode/which. which refers to the code of the key that was pressed - so every key has its own code. We can see all the javaScript character codes <a href="https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes">here</a>.</p>
<p>If we want to use the 'enter' key to submit,the keyCode for this is '13'. We want to add an if statement in the above example that says if the user hits enter an alert will pop up.</p>
	
<pre>
$("input").keypress(function(event){
if(event.which === 13){
alert("You hit enter!!") 
 };
</pre>
<p>As a note, event has been used as a variable but can also be called 'e' or anything else.</p>


<h2>on()</h2>
<p>jQuery's <em>on()</em> works similarly to addEventListener. It lets you specify a type of event to listen to.</p>

<pre>
//prints when item with id "submit" is clicked
$("#submit").on('click', function(){
 console.log("another click");
});

//alerts when ANY button is clicked
$("button").on('click', function(){
console.log("button clicked!");
});
</pre>

<p>on() is by far the most used jQuery method. on() is similar to Vanilla JS's addEventListener but as we can see it is much shorter. on() allows us to specify what event to listen to, like below:</p>
<pre>
//double click event
$("button").on('dblclick', function(){
alert("Double Clicked!!");
});

//drag start event
$("a").on('dragstart', function(){
 console.log("Drag Started!");
});

//keypress event
$("input[type=text]").on('keypress', function(){
 alert("key press in an input!");
});
</pre>

<p>Let's try and change the colour of the h1 when we click on it.</p>

<pre>
$("h1").on('click', function(){
$("h1").css("color", "purple");
});
</pre>

<p>If we were to use this function, when we click on th h1, all the h1 elements would change colour at the same time. Instead, we want to use 'this' so that it refers to the one h1 and we can click on each to change the colour when we click on it. Like so:</p>

<pre>
$("h1").on('click', function(){
$(this).css("color", "purple");
});
</pre>
<p>Let's try an event where the font weight will change when we hover over one of the buttons.</p>

<pre>
$("button").on('mouseenter', function(){
 $(this).css("font-weight", "bold");
});

$("button").on('mouseleave', function(){
 $(this).css("font-weight", "normal")
});
</pre>

 <h2>What is the difference between click() and on()?</h2>


 <p>In most cases, click() and on('click') will both get the job done. However, there is one key difference.</p>

<ul>
 <li>click() only adds listeners for existing elements</li>
 <li>on() will add listeners for all potential future elements.</li>
</ul>
</body>
</html>
