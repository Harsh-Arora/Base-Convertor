var index = 0;

function calculate(){
	index = document.getElementById('dropdown').selectedIndex;

	switch(index){
		case 2:
			document.getElementById('res').innerHTML = dectobin(document.getElementById('inpnum').value);
			break;

		case 3:
			document.getElementById('res').innerHTML = dectooctal(document.getElementById('inpnum').value);
			break;

		case 4:
			document.getElementById('res').innerHTML = dectohex(document.getElementById('inpnum').value);
			break;


		case 6:
			document.getElementById('res').innerHTML = bintodec(document.getElementById('inpnum').value);
			break;

		case 7:
			document.getElementById('res').innerHTML = dectooctal(bintodec(document.getElementById('inpnum').value));
			break;

		case 8:
			document.getElementById('res').innerHTML = dectohex(bintodec(document.getElementById('inpnum').value));
			break;


		case 10:
			document.getElementById('res').innerHTML = octaltodec(document.getElementById('inpnum').value);
			break;

		case 11:
			document.getElementById('res').innerHTML = dectobin(octaltodec(document.getElementById('inpnum').value));
			break;	

		case 12:
			document.getElementById('res').innerHTML = dectohex(octaltodec(document.getElementById('inpnum').value));
			break;


		case 14:
			document.getElementById('res').innerHTML = hextodec(document.getElementById('inpnum').value);
			break;

		case 15:
			document.getElementById('res').innerHTML = dectobin(hextodec(document.getElementById('inpnum').value));
			break;	

		case 16:
			document.getElementById('res').innerHTML = dectooctal(hextodec(document.getElementById('inpnum').value));
			break;
	}

	document.getElementById('output').style.display = "block";

}

function dectobin(num){

	document.getElementById('res').innerHTML = "";

	var output = [];
	var i = 0;

	while(num>0){
		output[i] = num%2;
		num = num/2;
		num = Math.floor(num);
		i++;
	}

	output.reverse();

	output = output.join("");

	return output;
}

function dectooctal(num){
	document.getElementById('res').innerHTML = "";

	var output = [];
	var i = 0;

	while(num>0){
		output[i] = num%8;
		num = num/8;
		num = Math.floor(num);
		i++;
	}


	output.reverse();
	output = output.join("");

	return output;
}


function dectohex(num){
	document.getElementById('res').innerHTML = "";

	var output = [];
	var i = 0;
	var temp = 0;

	while(num>0){

		temp = num%16;

		output[i] = checkHex(temp);

		num = num/16;
		num = Math.floor(num);
		i++;
	}

	output.reverse();

	output = output.join("");

	return output;
}


function checkHex(num){
	switch(num){
		case 10:
			return 'A';
			break;

		case 11:
			return 'B';
			break;

		case 12:
			return 'C';
			break;

		case 13:
			return 'D';
			break;

		case 14:
			return 'E';
			break;

		case 15:
			return 'F';
			break;

		default:
			return num;
	}
}

function bintodec(num){
	var errstring = "Invalid Binary Number";

	if(!checkBinary(num)){
		return errstring;
	}

	var rev = [];
	var i = 0;
	var temp = 0;
	var total = 0;

	while(num>0){
		temp = num%10;
		rev[i] = multi(temp , 2, i);
		num = Math.floor(num/10);
		i++;
	}

	i--;

	while(i>=0){
		total = total + rev[i]
		i--;
	}

	return total;

}

function checkBinary(number){

	var error =0;
	var temp = 0;

	while(number>0){
		temp = number%10;

		if(temp === 0 || temp === 1){
			number = Math.floor(number/10);
		}
		else{
			return false;
		}
	}

	return true;

}

function octaltodec(num){
	var rev = [];
	var i = 0;
	var temp = 0;
	var total = 0;

	while(num>0){
		temp = num%10;
		rev[i] = multi(temp , 8, i);
		num = Math.floor(num/10);
		i++;
	}

	i--;

	while(i>=0){
		total = total + rev[i]
		i--;
	}

	return total;

}

function hextodec(num){
	var error = 0;
	var errstring = "Invalid Code";

	var numarr = num.split("");

	var i =0;
	var temp =0;
	var total = 0;

	for(var j=0 ; j<numarr.length ; j++){

		if(checkforHex(numarr[j]) != '0'){
			numarr[j] = checkforHex(numarr[j]);
		}
		else{
			error = 1;
			break;
		}
	}

	if(error == 1){
		return errstring;
	}

	numarr.reverse();

	for(i=0; i<numarr.length; i++){
		temp = numarr[i];
		numarr[i] = multi(temp, 16, i);
	}

	i--;

	while(i>=0){
		total = total + numarr[i];
		i--;
	}

	return total;

}


function multi(a, b, c){

	var res = 0;

	res = a*Math.pow(b, c);

	return res;

}

function checkforHex(val){

	if(val>=0 && val<=9){
		return val;
	}

	switch(val){
		case 'A':
		case 'a':
			return '10';
			break;

		case 'B':
		case 'b':
			return '11';
			break;

		case 'C':
		case 'c':
			return '12';
			break;

		case 'D':
		case 'd':
			return '13';
			break;

		case 'E':
		case 'e':
			return '14';
			break;

		case 'F':
		case 'f':
			return '15';
			break;

		default:
			return '0';

	}

}