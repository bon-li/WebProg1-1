/*
 * Name: Bonita Li
 * Student Number: 911358694
 * Date: Jan 29, 2022
 */
function init() {
	//You must write your code here:

	var div = document.createElement('div'); //first div game header
	div.classList.add('game-header'); 
	text = document.createTextNode('Choose your method of destruction: ');
	div.appendChild(text);
	document.body.insertBefore(div,document.body.firstElementChild);

	var header = document.createElement('header'); //main header creation
	document.body.insertBefore(header,document.body.firstElementChild);
	var text = document.createElement('h1');
	text.innerHTML = 'Play Rock, Paper, Scissors!';
	header.appendChild(text);

	var ids =["rock", "paper", "scissors"]; //var for image change
	var image = document.getElementById("img-container");
	for(let i=0; i<3; i++) { //for loop images
		var tool = document.createElement('img'); //img creation
		tool.className ='rps-img no-img-border';
		tool.src= "./images/"+ids[i]+".png"; //img src with vars
		tool.id = [i];
		image.appendChild(tool);
	}

	div = document.createElement('div'); //div game header for computer
	div.classList.add('game-header');
	text = document.createTextNode('The computer chooses: ');
	div.appendChild(text);
	document.body.insertBefore(div,document.body.lastElementChild);

	for(let i=0; i<1; i++){ //for loop table
		var table = document.createElement('table'); //table creation
		document.body.insertBefore(table,document.body.lastElementChild);
		var tr = document.createElement('tr'); //tr creation
		table.appendChild(tr);
	
		var td = document.createElement('td'); //td creation
		tool = document.createElement('img');
		tool.classList.add('rps-img');
		tool.id = "comp-img";
		td.appendChild(tool);
		tr.appendChild(td);

		td = document.createElement('td'); //td creation
		td.classList.add('vert-center');
		tr.appendChild(td);

		div = document.createElement('div'); //div for output
		div.id = "output";
		td.appendChild(div);
	}

	score = document.createElement('div'); //div creation for score
	score.id = "score";
	document.body.insertBefore(score,document.body.lastElementChild);

	score = document.createElement('div'); //div score
	score.innerHTML = 'Score: ';
	document.getElementById("score").appendChild(score);

	score = document.createElement('div'); //div score for player
	score.innerHTML = 'You: ';
	document.getElementById("score").appendChild(score);
	var span = document.createElement('span');
	span.setAttribute("id", "user-score");
	score.appendChild(span);

	score = document.createElement('div'); //div score for computer
	score.innerHTML = 'Computer: ';
	document.getElementById("score").appendChild(score);
	span = document.createElement('span');
	span.setAttribute("id", "comp-score");
	score.appendChild(span);

	text = document.createElement('footer'); //footer creation
	text.innerHTML = 'Copyright © 2017 Wendi Jollymore';
	document.body.insertBefore(text,document.body.lastElementChild);

}



// DON'T TOUCH, Just Read  --------------
// array of moves/ids
var pics = ["rock", "paper", "scissors"];
// load the page elements
document.addEventListener("DOMContentLoaded", init, false);
// --------------------------------------