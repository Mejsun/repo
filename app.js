function finishFunction() {
    alert("Thank you for completing the quiz!");
}

function validateText () {
    var name=document.forms.quiz.firstCar;
    if (name=="Germany","germany") {
        alert ("Correct!");
        return true;
    } else {
        alert ("Try again!");
        return false;
    }
}
function validateNumber () {
    var x;
    x = document.forms.quiz.octopuses;
    if (x==3) {
        alert ("Correct2!");
        return true;
    } else {
        alert ("Try again!2");
        return false;
    }
}
function validateRadio () {
    var x =document.forms.quiz.answerq2.value;
    if (x == "answer2","answer3") {
        alert("Incorrect!");
        return false;
      }else {
        alert ("True!");
        return true;
      }
}
function myFunction () {
    var x = document.getElementById("menuItems");
    if (x.style.display=="none") {
        x.style.display="block";
    } else {
        x.style.display="none";
    }
}