      /*Reloading page message*/
  /*      function customfunction() {
            return "Are you sure you want to reload !";
        }
        window.addEventListener("beforeunload", function(event) {
    event.returnValue = "Your custom message.";
});
*/
var array = ["defalut"];

var currentDate = new Date();
var arr_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month_name = arr_month[currentDate.getMonth()];
var day = currentDate.getDate();
var year = currentDate.getFullYear();

//Time add
/* var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();*/

var fullDate = day + "/" + month_name + "/" + year;
document.getElementById("date").innerHTML = fullDate;

function getTime(){
var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    if(hours > 11){
        t_str += "PM";
    }   
    else {
    t_str += "AM";
    }
    document.getElementById('time').innerHTML = t_str;
    }
setInterval(getTime, 1000);

    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    }


function newElement() {
    
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    array.push(inputValue);
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
    }
}
/*To add the task using ENTER key press*/
window.addEventListener('keydown' , (event) => {
    if(event.which == 13){
        newElement();
    }
});

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        array.pop();
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
       
    }
}, false);

if(array.length === 0){
    alert("no pending tasks");
}
else {}
console.log(array.length);


var r = confirm("Successful Message!");
if (r == true){
reopener.location.reload();
}