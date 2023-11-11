//your JS code here. If required.
let data  = document.getElementById('counter');
let count = 1;
function counter(){
	let res = data.innerHTML = `${count++}`;
	alert(res);
	
}
