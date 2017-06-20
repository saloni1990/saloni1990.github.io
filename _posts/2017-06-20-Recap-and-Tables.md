<html>
	<head>
		<title>Recap and Tables</title>
	</head>
	<body>
	<h1 style="font-family: Arial">Recap</h1>	
		<p> I've been thinking quite a bit about how to apply what I am learning to create attractive, simplistic websites that can be navigated easily by the user. I like the design of the website below t's also one of my favourite cafes!)</p>
	    <a href="http://www.thegroundworks.co.uk/" target="_blank">	<img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/The+Groundworks.PNG" /> </a>
	<h1 style="font-family: Arial">Tables Are Mega Sweet</h1>	
	<p>A table is just a bunch of information arranged in rows and columns.We use the "tr" tag to create a table row. You don't really create columns in tables: instead, you tell each row how many cells to have, and that determines your number of columns.</p>
	<table border="1px">
        	<tr>
                 	<td>One</td>
            	</tr>
                 	<td>Two</t>
            	<tr>
                	<td>Three</t> 
           	</tr>
                <tr>
                </tr>
        </table>
	<p>This is a single-column table! Adding a second table data cell has the effect of adding a second table column.</p>
	<table border="1px">
		<thead>
			 <tr style="color:red">
                  		<th colspan="2">TV Shows by Run Time</th>
                	</tr>
			<tr>
				<th>TV Series</th>
				<th>Run Time</th>			
			</tr>
            	</thead>
            		<tr>
                		<td>Breaking Bad</td>
                		<td>2008-2013</td>     
          		</tr>
           		<tr>
                		<td>Better Call Saul</td>
                		<td>2015-</td>
           		</tr>
          		<tr>
                		<td>Game of Thrones</td>
               			<td>2011-</td>
            		</tr>
        </table>
<p>To make the table look a little more like a table, we need to use the "thead" and "tbody" tags. These go within the <table> tag and stand for table head and table body, respectively.</p>
<p>The "head"HTML tag contains information about a web page (e.g. its title) and the <body> tag contains the contents of the web page. In the same way, the "thead" tag can be thought of as containing information about a table and the "tbody" tag containing the actual tabular data. The example below is great!</p>
<a href="https://www.codecademy.com/en/courses/web-beginner-en-f8mcL/1/2?curriculum_id=50579fb998b470000202dc8b" target="_blank"><img src="https://s3.eu-west-2.amazonaws.com/sallearnstocode.images/Table+Example.PNG" /></a>
<p>The table needs a heading so we need to use the "colspan" attribute for the "th" tag. By default, table cells take up 1 column. If we want a table cell to take up the space of 3 columns instead of 1, we can set the colspan attribute to 3.</p>
	</body>
</html>
