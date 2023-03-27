
//logo picture changing
var myIndex = 0; //a variable myIndex starting from 0
carousel();

function carousel() {
    var i;
    //access myslides document using class name
    var x = document.getElementsByClassName("myslides");
    //creating a for loop to always add recuring changes on emages
    for (i = 0; i < x.length; i++) {
        //to always push to the variable x while displaying none 
        x[i].style.display = "none";
    }

    myIndex++; //for variable my index to count on and add pictures
    if (myIndex > x.length) {
        myIndex = 1
    } //to skip the image after some time
    x[myIndex - 1].style.display = "block"; // 
    setTimeout(carousel, 4000);//change image after 4 seconds

}

//create a an alert message 
function greetMe() {
    let btn = document.getElementById("btn")
    let search = document.getElementById("search").value
    let Greet = "Hello, "
//Create an event listener
    btn.addEventListener("click", () => {

        if (search == "") {
            alert("Please insert your name")
        } else if (search == search){
            alert(Greet + search)
        }
    })
}
