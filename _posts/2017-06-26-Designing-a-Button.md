<html>
<head>
	<title>Designing a Button</title>
</head>
<body>
<p>I'm going to be making a button which leads to one of my social media feeds.</p>
<p>To create a button, we first need to make a div tag. Now normally I would should put this in the css stylesheet, but as I explained in my erlier post, I am isntead going to use the CSS style in the head to create a button.</p>
<p>A div will create the structure of the button. I just need to specify the height, width, border colour and background colour. I can even define the border style which can make the border dashed, solid, etc. and choose the border width</p>
<p>To shape the button, I've used the border-radius tag which modifies the corners of HTML objects to give them a rounded effect.</p>
<p>To center the button on th page we need to use the margin: auto; attribute. This tells the browser to set equal margins on each side of the HTML element - when the margins are equal, the object is centered. Text-align:center, on the other hand, will centre text element</p>
<p>
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/Pinterest.jpeg" align="right"/>
Now, my button should look like the image below...
</p>
<p>..but since the Jekyll layout has predefined css styling, using the div elements has messed up the style of my blog post(see the picture below the button).
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/Blog-post.jpeg" align="right"/>
</p> 
<p>I have therefore removed the div element and CSS styling to revert my page back to normal and instead have posted an image of what the CSS code should look like.
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/CCS+Button+Code.jpeg" align="right"/>
</p>
</body>
</html>
