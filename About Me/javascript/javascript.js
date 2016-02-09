/*The changeImage function below allows the user to change the image found at the About page*/
function changeImage() {
    var image = document.getElementById('mypic');
    if (image.src.match("pictures/erik1.jpg")) {
        image.src = "pictures/erik.jpg";
    } else {
        image.src = "pictures/erik1.jpg";
    }
}
/*The changeTextColor function allows the user to change the color of the body text.
  The function uses an if-else statement so that when the user clicks the button the count goes to 1 and
  when clickec agoung it is reset to 0 and inverts the color back to its original format*/
/*I didnt exactly know how to change the elements of multiple Id's so I just went with what worked*/
var count = 1;
function changeTextColor(){
    if (count == 0) {
    document.getElementById("paragraph").style.color = "#F9D10B";
    document.getElementById("paragraph2").style.color = "#F9D10B";
    document.getElementById("paragraph3").style.color = "#F9D10B";
    document.getElementById("paragraph4").style.color = "#F9D10B";
    document.getElementById("paragraph5").style.color = "#F9D10B";
    document.getElementById("header1").style.color = "#0B3861"; 
    document.getElementById("header2").style.color = "#0B3861"; 
    document.getElementById("header3").style.color = "#0B3861";
    document.getElementById("bold0").style.color = "#0B3861";
    document.getElementById("bold").style.color = "#0B3861";
    document.getElementById("bold2").style.color = "#0B3861";
    document.getElementById("bold3").style.color = "#0B3861";
    count = 1;        
        }
        else {
    document.getElementById("paragraph").style.color = "#0B3861";
    document.getElementById("paragraph2").style.color = "#0B3861";
    document.getElementById("paragraph3").style.color = "#0B3861";
    document.getElementById("paragraph4").style.color = "#0B3861";
    document.getElementById("paragraph5").style.color = "#0B3861";
    document.getElementById("header1").style.color = "#197eae"; 
    document.getElementById("header2").style.color = "#197eae"; 
    document.getElementById("header3").style.color = "#197eae";
    document.getElementById("bold0").style.color = "#197eae";
    document.getElementById("bold").style.color = "#197eae";
    document.getElementById("bold2").style.color = "#197eae";
    document.getElementById("bold3").style.color = "#197eae";
            count = 0;
        }
}