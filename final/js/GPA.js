
function Function() {
var ch1 = parseInt(document.getElementById("course1").value);
var ch2 = parseInt(document.getElementById("course2").value);
var grade1 = document.getElementById("grade1").value;
var grade2 = document.getElementById("grade2").value;
  
var number1=0,number2=0;
if(grade1 == 'A'){
number1=4.0;
}
else if (grade1 == 'B'){
number1=3.0;
}
else if (grade1 == 'C'){
number1=2.0;
}
else if (grade1 == 'D'){
number1=1.0;
}
else if (grade1 == 'F'){
number1=0;
}
if(grade2 == 'A'){
number2=4.0;
}
else if (grade2 == 'B'){
number2=3.0;
}
else if (grade2 == 'C'){
number2=2.0;
}
else if (grade2 == 'D'){
number2=1.0;
}
else if (grade2 == 'F'){
number2=0;
}

var total = ch1 * number1 + ch2 * number2;
var avg_GPA = total/(ch1+ch2);
document.getElementById("GPA").innerHTML = "The average GPA is : "+avg_GPA.toFixed(2);
}