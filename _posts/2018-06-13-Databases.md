<!DOCTYPE html>
<html>
<head>
	<title>Databases</title>
</head>
<body>
	<h1>What is a database?</h1>

	<p>A database is a collection of information or data. It also has an interface for interacting with that data. this means we can write code to interact with it.</p>

	<h1>SQL (relational database) vs. NoSQL (non-relational databases)</h1>
	<p>relational databses are tabular databases and they are flat and we have to define them ahead of time like in the example below:</p>

	<pre>
		USERS TABLE
		id | name | age | city
		-----------------------------
		1  | Tim  | 57  | NYC
		2  | Ira  | 24  | Missoula
		3  | Sue  | 40  | Boulder

		COMMENTS TABLE
		id |       text
		-----------------------------
		1  | "lol"
		2  | "Come visit Montana"
		3  | "Seriously Montana is great!"
		4  | "I love puppies!!!"


		USER/COMMENTS JOIN TABLE
		userId |  commentId
		-----------------------------
			1  |    1
			2  | 	3
			3  | 	4

	</pre>

	<p>Non-rational databases - this is much more flexible and doesnt have a set pattern. Things can be nested so it's not a flast database. It looks pretty similar to JavaScript</p>

	<pre>
		==========================
		A NON-RELATIONAL DATABASE:
		==========================

		{
			name: "Ira",
			age: 24
			city: "Misoula"
			comments [
				{text: "Come Visit Montana!},
				{text: "Seriously Montana is great!"}
				{"Why does no one care about Montana?"}
			]
			favColour: "purple"
		}
	</pre>

	<h1>What is MongoDB</h1>
	<p>MongoDB is a non-relational database which will look like JavaScript objects and array. It is very popular with node and express. There is a popular stack called the MEAN Stack - Mongo, Express, Angular, and Node.</p>

	<p>Although I have installed MongoDB on Cloud 9, I thought it would be really good practise if I downloaded MongoDB locally on my computer. This got me thinking and I spent some time to recreate my Sal Learns to Code project on my local computer. For me this is a real achievement this means I had to find a way to view my app on the local browser. After a bit of Googling I managed to set up my project in my local environment. Once this was set up I followed instructions on how to <a href="https://www.codecademy.com/articles/tdd-setup-mongodb-2">install MongoDB</a> on my computer from CodeCademy</p>

	<h1>What is Mongoose?<h1/>

	<p>It is an elegant mongodb object modelling for node.js. Is is a package that helps us interact with mogodb inside of our javascript files</p>
</body>
</html>
