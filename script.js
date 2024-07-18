var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-content")

function opentab(tabname){
    for(x of tablinks){
        x.classList.remove("active-link")
      
    }
    for(y of tabcontents){
        y.classList.remove("active-tab")
    }
event.currentTarget.classList.add("active-link")

document.getElementById(tabname).classList.add("active-tab")
}