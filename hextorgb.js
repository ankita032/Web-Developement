let hextorgb = () => {
	let hex = prompt("Enter hexadecimal number");
	hex = "0x" + hex;
	console.log("Hexadecimal number :" + hex);

	let rgb = [];
	let left_two = "0x" + hex.substr(2,2);
	rgb.push(parseInt(Number(left_two),10));

	let middle = "0x" + hex.substr(4,2);
	rgb.push(parseInt(Number(middle),10));

	let right_two = "0x" + hex.substr(6,2);
	rgb.push(parseInt(Number(right_two),10));

	return rgb;
}

let rgbtohex = () =>{
	let rgb = [];
	alert("Enter rgb values");
	rgb.push(prompt("R value"));
	rgb.push(prompt("G value"));
	rgb.push(prompt("B value"));
	
	let left_two = Number(rgb[0]).toString(16);
	let middle = Number(rgb[1]).toString(16);
	let right_two = Number(rgb[2]).toString(16);
	
	let hex = "0x" + left_two + middle + right_two;
	return hex;
}

let input = prompt("Enter type of conversion : (type 1 - tohex / 2 - torgb)");
if(input === "1")
	hextorgb();
else if(input === "2")
	rgbtohex();
