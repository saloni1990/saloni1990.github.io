<html>
<head>
	<title>Designing a Button</title>
	<style type="text/css">
	div {
		height: 50px;
		width: 120px;
		border-color: #FFFFFF;
		background-color: #C92228;
		border-style: solid;
		border-width: 4px;
		border-radius: 5px;
		margin: auto;
		text-align: center;
	}
	a {
	    	text-decoration: none;
	    	color: #FFFFFF;
	    	font-family: Verdana;
	}
	</style>
</head>
<body>
<p>I'm going to be making a button which leads to one of my social media feeds.</p>
<p>To create a button, we first need to make a div tag. Now normally I would should put this in the css stylesheet, but as I explained in my erlier post, I am isntead going to use the CSS style in the head to create a button.</p>
<p>A div will create the structure of the button. I just need to specify the height, width, border colour and background colour. I can even define the border style which can make the border dashed, solid, etc. and choose the border width</p>
<p>To shape the button, I've used the border-radius tag which modifies the corners of HTML objects to give them a rounded effect.</p>
<p>To center the button on th page we need to use the margin: auto; attribute. This tells the browser to set equal margins on each side of the HTML element - when the margins are equal, the object is centered. Text-align:center, on the other hand, will centre text element</p>
<div>
	<a href="https://uk.pinterest.com/s2104/pins/" targer="blank">Pinterest</a>
</div>
</body>
</html>
