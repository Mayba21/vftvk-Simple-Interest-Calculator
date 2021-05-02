function compute();

{
 
 var principal = document.getElementById("principal").value;

 if(principal<=0)


 {

alert('Please Enter a positive number greater than 0');
document.getElementById("principal").focus();
document.getElementById("principal").click();
return null;

 }

var rate = document.getElementById("Rate").value;

var years = document.getElementById("Years").value;

var interest = principal*rate*years/100;

console.log(P*R); 

var ndate = new Date();

newdate = ndate.getFullYear();

newdate+= parseInt('Y')

document.getElementById("result").InnerHTML - "<br>" + "<br>"


function Ratechange()

{
  
  var rchange = 
  document.getElementById('Rate').value;
  document.getElementById('rate-displayer').InnerHTML = rchange + '%';
}
}
