// let count = 0;

// while(count < 10){
// 	document.write(count, ' kkkksk <br />');
// 				count++;
// };
// let yourname = prompt('What is your name?');
// let theirname = prompt('What is their name?');

// let lovescore = Math.random() * 100;
// lovescore = Math.floor(lovescore)

// alert("The lovescore for " + yourname  +  " and "  +  theirname  +  " is "  +  lovescore + "%");

// for(let num = 1; num <= 100; num++){
// 	if (num % 3 && num % 5 == 0) {
// 		document.write('Fizzbuzz <br />')
// 	}
// 	else if(num % 3 == 0) {
// 		document.write('FIZZ <br />')
// 	}
// 	else if(num % 5 == 0) {
// 		document.write('BUZZ <br />')
// 	}
// 	else{
// 		document.write(num, '<br />')
// 	}		
// }

// function calc() {
// 	let w = document.getElementById('width').value;
// 	let h = document.getElementById('height').value;

// 	let area = w * h;

// 	document.getElementById('answer').value = area;
// }

// function sam() {
// 	let a = document.getElementById('a').value;
// 	let b = document.getElementById('b').value;
// 	let c = document.getElementById('c').value;
// 	let s = (a*b*c)/2

// 	let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
// 	area = Math.floor(area)
// 	document.getElementById('solution').value = area;

// }

// let gate = ['girl' , 'boy'];

// document.write(gate[1]);
// let gate = {
// 	name : 'pig' , state : 'zamfara'
// };

// document.write(gate.state);

alert('Not a web designer? Get Out')

function Prime() {
	let U = document.getElementById('U').value;
	let V = document.getElementById('V').value;
	let T = document.getElementById('T').value;
	let acceleration = (V-U)/T

	document.getElementById('solution').value = acceleration
}


