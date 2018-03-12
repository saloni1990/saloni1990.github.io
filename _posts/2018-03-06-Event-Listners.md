<html>
<head>
	<title>Event Listeners</title>
</head>
<body>
<h1>addEventListener - handling events in the Dom</h1>

<p>If we use a method called addEventListener it will isten out for certain clicks.</p>

<p>For example if we wanted to add an event listener to a specific part on the website, right click on a heading for example and click on inspect. Because this element has been select the '$0' would show up to say that we have selected the element.</p>

<p>If we selected the Tutorials heading on <a href="https://developer.mozilla.org/bm/docs/Web/JavaScript">MDN's JavaScript</a> page we can see that that element will have '$0', like in the image below:</p>
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/%240.jpeg">


<p>We can start by manpulating the DOM element by doing the following:</p>

<p>var tutorialsElement = $0;</p>


<p>output: tutorialsElement;</p>
<p>&lth;h2&gt; id=​"Tutorials">​Tutorials&lth;/h2&gt;</p>

<p>tutorialsElement.addEventListener('click', function(){</p>
<p>console.log('The tutorials element was clicked!')</p>
<p>})</p>
<p>The output when we click on the Tutorials heading will be that the console will log <strong>'The tutorials element was clicked!'</strong>.</p>
<p>The function when the tutorialsElement is clicked.</p> 

<p>by passing in an 'event' in the function like in the example below we can see a bunch of other information like where the mouse was when it was clicked, etc</p>

<p>tutorialsElement.addEventListener('click', function(event){</p>
<p>console.log(event);</p>
<p>console.log('The tutorials element was clicked!')</p>
<p>})</p>

<p>The output will be the following:</p>
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/log+of+event+function.jpeg">


</body>
</html>
