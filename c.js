//function that display value 
function dis(val) 
{ 
	document.getElementById("result").value+=val 
	return val;
} 	
//function that evaluates the digit and return result 
function solve() 
{ 
	let x = document.getElementById("result").value 
	let y = eval(x) 
	document.getElementById("result").value = y 
	return y;
} 		
//function that clear the display 
function clr() 
{ 
	document.getElementById("result").value = "" 
	return result;
} 
function squareroot() 
{
	let z=document.getElementById("result").value
	let a=Math.sqrt(z)
	document.getElementById("result").value =a 
    return a;
}
function absolute() 
{
	let b=document.getElementById("result").value
	let c=Math.abs(b)
	document.getElementById("result").value =c
	return c;
}
function validate(){
	var name= document.getElementById('name').value;
	var phoneNumber = document.getElementById('phone-number').value;
	var emailid=document.getElementById('emailid').value;
	var nameRGEX=/^[A-Za-z]\w*$/;
	var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
	var emailidRGEX=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var nameResult = nameRGEX.test(name);
	var phoneResult = phoneRGEX.test(phoneNumber);
	var emailidResult = emailidRGEX.test(emailid);
	alert("name:"+nameResult +", phone:"+phoneResult +", emailid:"+emailidResult );
	
	return false;
  }
  function checkPalindrome() {
    var revStr = "";
    var str = document.getElementById("str").value;
    var i = str.length;
    for(var j=i; j>=0; j--) {
    revStr = revStr+str.charAt(j);
    }
    if(str == revStr) {
    alert(str+" -is Palindrome");
    } else {
    alert(str+" -is not a Palindrome");
    }
    return checkPalindrome;
	}
var button = document.getElementById('button-test');
button.addEventListener('click', checkAnagram);
var resultDiv = document.getElementById('result');

function checkAnagram() {
  var str1 = document.getElementById('string1').value;
  var str2 = document.getElementById('string2').value;
  if(str1 !== null && str2 !== null) {
    if(str1.length !== str2.length) {
      alert("strings are not anagram");
      return false;
    }
    var hashTable = {};
    for(var i = 0; i < str1.length; i++) {
      if(hashTable.hasOwnProperty(str1[i])) {
        hashTable[str1[i]] = hashTable[str1[i]] + 1;
    } else {
     hashTable[str1[i]] = 1; 
    }
  }
   
  for(var i = 0; i < str2.length; i++) {
    if(hashTable.hasOwnProperty(str2[i])) {
      hashTable[str2[i]] = hashTable[str2[i]] - 1;
    } else {
		alert("strings are not anagram");
      return false;
    }
  }
    
  for(var i in hashTable) {
    if(hashTable[i] !== 0) {
		alert("strings are not anagram");
      return false;
    } else {
		alert("strings are anagram");
    }
  }
}
return check ;
}

var b;
var d;
function ran(){
var a=Math.floor(Math.random() * 1001);
if(a%3==0){
b=0;
alert("human");
}
else if(a%3==1){
b=1;
alert("cockroach");
}
else{
b=2;
alert("nuclear bomb");
}
return b;
}
function rando(){
var c=Math.floor(Math.random() * 1001);
if(c%3==0){
d=0;
alert("human");
}
else if(c%3==1){
d=1;
alert("cockroach");
}
else{
d=2;
alert("nuclear bomb");
}
return d;
}

function valid(){
if(b==d){
alert("tie");
}
else if(b==0 && d==1){
alert("human alive");
}
else if(b==1 && d==0){
alert("human alive");
}
else if(b==1 && d==2){
alert("cockroach alive");
}
else if(b==2 && d==1){
alert("cockroach alive");
}
else if(b==2 && d==0){
alert("human dead");
}
else{
alert("human dead");
}
return result;
}

