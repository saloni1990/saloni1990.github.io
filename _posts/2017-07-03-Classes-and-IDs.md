<html>
<head>
	<title>Classes and IDs</title>
</head>
<body>
<h1>More Specificity</h1>
<p>In my previous post I mentioned that by using a combination of certain selectors to override the styling of a particular CSS selector.</p>
<p>Classes and IDs are even more specific than this. See example below</p>
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/Classes+and+IDs.jpeg" />
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/Classes+and+ID+CSS+Example.jpeg" />
<h1>Classes</h1>
<p>Classes are useful when a bunch of elements should have the same styling. Instead of applying the same rules to several selectr=ors, we can simply apply the same class to all the HTML elements, then define the style for that class in the CSS tab.</p>
<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/Class+Explanation.jpeg" />
<h1>IDs</h1>
<p>IDs are really useful when you have exactly one element that needs to receive a certain kind of styling. Now I'm here thinking can't we just use IDs OR Classes? What is the difference between the two?</p>
<p>I had a dig around and stumbled upon <a href="https://css-tricks.com/" target="blank">CCS Tricks</a> which has a really useful <a href="https://css-tricks.com/the-difference-between-id-and-class/" target="blank">breakdown</a> on the differences between the two selectors.</p>
<p>IDs can only be used once, if you try to use them more than once, it will not pass validation. Classes, on-the-other-hand, can be used on multiple elements.</p>
<p>Another thing I found quite interesting was that IDs have special browser functionality. ID's come with the 'hash value'. So, for example, if i were to have a URL which had a specific part with 'id=comments and I had an ID labelled ' hash value comments', when I click on that link the page will automatically scroll to that part of the page.</p>
</body>
</html>
