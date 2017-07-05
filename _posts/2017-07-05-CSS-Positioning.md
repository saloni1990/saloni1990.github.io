<!DOCTYPE html>
<html>
<head>
	<title>CSS Positioning</title>	
</head>
<body>
<h1>Finally, The CSS Box Model!</h1>
<p>Now, this has been something which I have never quite understood. When you click on the F12 button or view the source of a website, the pages comes back with all this code and when you hover over certain bits of the code, some section of the website are highlighted.</p>
<p>So today, I am going to learn about what exactly these sections mean.</p>
<p>Controlling the positioning of HTML elements gives you the opportunity to contril how your web page look in fine detail. Elements populate in what's known as the CSS box model. Each HTML element is like a tiny box or container that holds the pictures and text you specify.</p>
<p>Here is an example from www.w3.org</p>
<img src="https://s3.amazonaws.com/codecademy-blog/assets/ae09140c.png"/>
<h1>Each HTML element gets its own box to live in</h1>
<p>The outermost box of each element goes al the way across the page whihc is why the HTML elements have been sitting on top of one another; by default, they take up the full width of the page.</p>
<p>To change all this we need to consider the '<strong>Display Property</strong>'. This property has four possible values</p>
<ol>
	<li><h3>Block:</h3>
		<ul>
			<li>This makes the element a block box.</li>
			<li>It will not let anything sit next to it on the page.</li>
			<li>It takes up the full width.</li>
		</ul>
	</li>
	<li><h3>Inline-block</h3>
		<ul>
			<li>This makes the element a block box, but it will allow other elements to sit next to it on the same line.</li>
			<li>It allows to put several block elements on the same line.</li>
		</ul>
	</li>
	<li><h3>Inline</h3>
		<ul>
			<li>This makes the element sit on the same line as another element, but without formatting it like a block</li>
			<li>It only takes up as much width as it needs and not the whole line.</li>
			<li>The inline value places all the elements next to one another, but not as blocks. They don't keep their dimensions.</li>
		</ul>
	</li>
	<li><h3>None</h3>
		<ul>
			<li>This makes the element and its content disappear from the page entirely</li>
		</ul>
	</li>
</ol>
<h1>Layers</h1>
<p>Looking at the image above, each box is made of layers. From the outermost to the innermost.</p>
<ol>
	<li><h3>Margin</h3>
		<ul>
			<li>This is the space around the element.</li>
			<li>The larger the margin, the more space between our element and the elements around it</li>
			<li>The margin can be adjusted to move HTML elements closer to or further from each other</li>
		</ul>
	</li>
	<li><h3>Border</h3>
		<ul>
			<li>This is the edge of the element</li>
			<li>This is what is visible ever time we set the 'border' property</li>
		</ul>
	</li>
	<li><h3>Padding</h3>
		<ul>
			<li>Padding is the spacing between the content and the border.</li>
			<li>This value can be adjusted with CSS to move the border closer to or further from the content</li>
		</ul>
	</li>
	<li><h3>Content</h3>
		<ul>
			<li>This the actual 'stuff' in the box. If we're talking about a 'p' element, the 'stuff' is the text of the paragraph.</li>
		</ul>
	</li>
</ol>
<p>Look at the following abbreviations and what they stand for:</p>
<ul>
	<li>TM, LM, RM - Top Margin, Left Margin, Right Margin</li>
	<li>TB, LB, RB - Top Border, Left Border, Right Border</li>
	<li>TP, LP, RP - Top Padding, Left Padding, Right Padding</li>
</ul>
<h1>Let's start with Margins</h1>
<p>If we were to set a specfic element, such as a div or p, to 'auto', this tell the document to 'auto'matically put equal left and right margins on the element, centering it on the page.</p>
<p>To specify a particular margin, we can do so by looking at the following example:</p>
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/Positioning+-+Margins.jpeg" />
<h1>Borders</h1>
<p>As discussed in previous posts, the border will give your element a, well, a border.</p>
<h1>Padding</h1>
<p>Padding is the space between the border and the innermost layer: the actual content.</p>
<p>Like margins, Padding can be set in two different ways, see image above relating to margins.</p>
<p>To make the padding all the same on four sides you just stae the value once. For example 'padding: 10px' will give the HTML element 10 pixels of padding on all sides.</p>
<h1>Negative Values</h1>
<p>When a CSS style is given a positive padding or margin value, it put space between the element and its reference; for instance if a div element has a margin left of 20px, it puts twenty pixels between the left margin of that div element and the side of the screen. This is effectively moving the div twenty pixels to the right.</p>
<p>To move an element in the <em>other</em> direction, we can give the CSS a negative value: 'margin-left:-20px' will move the element twenty pixels to the left.</p>
</body>
</html>
