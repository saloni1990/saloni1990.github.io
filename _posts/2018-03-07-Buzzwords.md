<!DOCTYPE html>
<html>
<head>
	<title>Buzzwords: High Order Function and callback functions</title>
</head>
<body>
	<h1><span style="background-color: #a6ecf2">Higher order function</span></h1>
<li>Functions that accept other function</li>
<li>Enhance the behavior of other functions</li>
<h1><span style="background-color: #e7ace2">Callback functions</span></h1>
<li>The functions that are passed into higher order functions</li>
<h2>Some Examples</h2>

<h3>1. Running the debugger</h3>
<br>
<p>function logTenNumbers() {</p>
<p>for (var i = 0; i < 10; i++){</p>
<p>console.log(i);</p>
<p>	}</p>
<p>}</p>
<br>
<p>If we wanted to run this with the debugger the code would look like this:</p>
<p>logTenNumber</p>
<p>this would open the debugger.</p>
<br>
<p>if we wanted to do this automatically and to create powerful function we can pass in a function to run the debugger for our function.</p>
<p>function runWithDebugger(ourFunction) {
<p>debugger;
<p>ourFunction();
<p>}

<p><span style="background-color: #a6ecf2">runWithDebugger</span> <span style="background-color: #e7ace2">(function logTenNumbers() {
<p>for (var i = 0; i < 10; i++){</p>
<p>console.log(i);</p>
<p>	}</p>
<p>})</span></p>


<h3>2. SetTimeout</h3>

<p><span style="background-color: #a6ecf2">setTimeout</span><span style="background-color: #e7ace2">(function () {</p>
<p>	console.log('Wake Up!');</p>
<p>}</span>, 5000)</p>


</body>
</html>
