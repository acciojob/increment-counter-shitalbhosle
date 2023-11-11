//your JS code here. If required.
let data  = document.getElementById('counter');
let count = 0;
function counter(){
	data.innerHTML = `${count++}`;
	alert(count);
	
}
