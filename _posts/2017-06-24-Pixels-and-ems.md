
<html>
<head>
	<title>Difference between Pixels and ems</title>
</head>
<body>
	<h1>what is the different between Pixels and ems?</h1>
	<p>Until now, when adjusting the font size I've been using the "px" unit. This meants that each dot on the screen is one pixel and so it works great if I want someone else to see my work exactly as it appears on my screen, assuming their screen is similar to mine.</p>
	<p>If the user's screen is different from mine, like a smartphone screen, em's are the way to go! (It's not the same as the em tag!</p>
	<h1>A relative measure</h1>
	<p>The font-sie unit em is a relative measure: one em is equal to the default font size on whatever screen the user is using. That makes it great for smartphone screens, since it doesn't try to tell the smartphone exactly how big to make a font: it just says, "Hey, 1em is the font size that you normally use, so 2em is twice as big and 0.5em is half that size!"</p>
	<p>Here's an example:</p>
	<p style="font-size: 1em">One em!</p>
	<p style="font-size: 0.5em">Half an em!</p>
	<p style="font-size: 2em">TWO EM!</p>
</body>
</html>
