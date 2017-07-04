<html>
<head>
	<title>Even More Specificity!</title>
</head>
<body>
<h1>Pseudo-Class Selectors</h1>
<p>Pseudo-class selectors are a way of accessing HTML items that arent part of the document tree (explained earlier).</p>
<p>For example, It is easy to see where a link is in the tree, but where do you find the information about whether a link has been clicked on or not? It isn't there!</p>
<p>The CCS syntax for the pseudo-class selector is below:</p>
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/CSS+Syntax+-+Pseudo+Selector.jpeg" />
<p>So for example, a link's text-decoration property can be changed to make it something other than blue and underlined. Using pseudo-selectors means you can control the appearance of unvisted and visited links and even links that somone is hovering on but hasn't clicked on it yet.</p>
<h1>Useful Pseudo-class selectors for Links</h1>
<p>Here are some useful examples of pseudo-class selectors (but not limited to!)</p>
<ul>
	<li> 'a:link' is an unvisted link</li>
	<li> 'a:visted' is a visited link</li>
	<li> 'a:hover' is a link that you are hovering your mouse over</li>
</ul>
<h1>First Child</h1>
<p>The 'first-child' can be used to apply styling to only the elements that are the first children to their parents. See the image below for an example:</p>
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/First+Child+Selector.jpeg" />
<h1>Nth Child</h1>
<p>Similarly, using the selector 'nth-child' means that you can choose any child element after the first child by adding the child's number in the parenthesis after the pseudo-class selector, like the example below:</p>
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/Nth+Child+Example.jpeg" />
<p>Just remember that if the Body is the parent and you have a h1 selector followed by 3 paragraphs, the h1 selector is the FIRST child and the first paragraph is the second child, the second p the third child and so on.</p>
<h1>Side-step to Classes and IDs</h1>
<p>After learning all these syntaxes, Codecamedy gave me a little task to create circles and borders using classes and ids. Have a look at the examople below.</p>
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/CSS+project+1.2.jpeg" />
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/CSS+Project+2.2.jpeg" />
</body>
