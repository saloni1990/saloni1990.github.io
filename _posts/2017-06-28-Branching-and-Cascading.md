<html>
<head>
	<title>Branching</title>
</head>
<body>
<h1>It's getting more complicated!</h1>
<p>I've now gotten to the stage where I can see things getting more complicated but I just have to remember to take it easy. Next stop is how to create branches in an HTML document. I think the image below from Codecademy explains it really well. The first image is the HTML code and an intro to Branching and the second code is the CSS stylesheet.</p>
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/Branching.png" />
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/CSS+-+Branch.jpeg" />
<h1>Structure of an HTML Document</h1>
<p>Codecamy explains that if we think of an html tag as the trunk of the tree, the immediate branches such as the head and the body tags are like it's children. Both of these tags are children of the html tag and is associated as the parent element. Both of these tags are then siblings. Again, the image below is helpful as a visual reference.</p>
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/Branching+Explained.jpeg" />
<p>To reach an element that is a child of another element, for example 'div div p', I'd be grabbing all the 'p's that are nest <em>somewehre</em> inside a 'div' tag that is nested <em>somewhere</em> inside another 'div' tag.</p>
<p>To grab and element that is <em>directly</em> nested inside another element, with no elements in between, we can use the greater than symbol. For example, using 'div  and the greater than p' means that I am only grabbing 'p's thare are nested <strong>directly</strong> inside of 'divs'. It wont grab any paragraphs that are nested inside lists that are in turn nested inside 'divs'.</p>
</body>
</html>
