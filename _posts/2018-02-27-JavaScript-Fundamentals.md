<html>
<head>
	<title>JavaScript Fundamentals</title>
</head>
<body>
  <h1>Recap</h1>
<p>It's been quite a while since my last post but I have been off learning JavaScript. I have tried multiple sources but, for someone who is new to programming, I have found it really challenging.</p>  
<p> I think part of the reason I have found learning JavaScript challenging is because I am self-teaching myself and I have to rely on myself to keep motivated and make sure that I can understand the skills I am learning.</p>
<p> However the most difficult thing for me has been the thought of applying what I've learnt to actual real-world problems. This, for me, has been niggling away in my head for several months and I feel like I've been hit by the "imposter syndrome". I have read so many blogs about people who started to learn web-development and how they reached a point where they began to doubt if they could ever break into a career in this field. Most stories go on to talk about how this slowed their learning and most took a long break in learning how to code. What gave me hope was that a lot of developers went on to develop their careers in the field by persevering and realising that they <strong>can</strong> do this.</p>
 <p>I needed to get over this mindset that I was in, so one day, a few months back, I was looking through my network on LinkedIn and found someone from my previous company who is now a web developer. We both worked in advertising and for me it was so inspiring to see that this person went from working in an ad agency to self-teaching themselves how to code, like me, and achieved their goals. For me, this really inspired me and snapped me out of the "I'm not quallified" mentantality - if I keep telling myself that I'm not good enough, then I really won't achieve the goals I have of changing careers and finding something that I really enjoy doing. I reached out to this person and the advice they have given my has been so encouraging.</p>
 <p>I have joined a few groups for beginners where I can see a lot of people are in the same position as me which is great and those groups are full of information about places to learn the fundamentals of web development. It was one of these groups that actually led me to <a href="https://watchandcode.com/">Watch and Code</a>. I have completed the JavaScript basics course on Codecademy, but it was Watch and Code that really helped me to understand the fundamentals and I can't recommend it enough. The tutor, Gordon Zhu, thoroughly explains what each bit of the code means and really simplifies and breaks down the problem. So for the past week I have been doing this course which teaches you how to do a very basic to-do list which you can add things to, changes things, and delete things. I'm about half way through this course but I have come to a section where Gordon explains different JavaScript data types and I thought this is the perfect opportunity write a blog about. I have a really good understanding of data types from previous courses but keep reading and you can see a breakdown of the data types below.</p>
<h2>JavaScript Data Types</h2>
<h3> Comparisons with Primitives</h3>
<ul>Primitive Building Blocks
	<li>String - 'this is a string'</li>
	<p>JavaScript compares primitives to see if they are the same or different. For exampl,e if you were to type 'Saloni' === 'Saloni' the output of the comprison would be <em>other</em>, however if we were to write 'Saloni1' === 'Saloni' would equal <em>false</em>.</p>
	<li>Number - 1, 2, 3, 4, etc.</li>
	<p>Number comparisons are the same, if we were to type:  1 === 1 the output would be <em>true</em>  
	<li>Boolean - true, false</li>
	<li>Undefined - value that hasn't been set</li>
	<li>Null - 'Nothing'</li>
</ul>
<h3>Comparisons with Objects</h3>
<ul>Objects (can be as complex as we  like)
	<li>{} todoList, arrays functions</li>
	<p>Comparisons in primitive, work like you'd expect, shown in the example above. However, comparisons with objects work completely differently. In the example below, if we have an object on the left that's empty and an object to the right which is exactly the same but they are not the same. The output will be false if comparing two of the same objects.</p>
	<li>{} === {}</li>
	<p>When comparing <em>objects</em> in JavaScript, it looks at objects seperately, even though they may look the same. When we create an object, it saves the object in an unique location in memory. Although the curly brackets look the same, they will have different memories.</p>
</ul>
<h3>Comparisons review</h3>
<p>When we compare primitives, Javascript is comparing the value. However, objects are very different, they are references. This means they are talking abotu memory address. When we save an object to a variable, JavaScript is not saving the stuff inside the object, or inside the curly brackets it is saving the whole object as a memory address or the <strong>reference.</strong></p>
</body>
</html>
