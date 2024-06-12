/****IMG AUTO SLIDER LOGIC START******/
var counter=1;

setInterval(function(){
   document.getElementById('radio' + counter).checked=true;
   counter++
   if(counter >3){
    counter=1;
   }
}, 5000);
/****IMG AUTO SLIDER LOGIC END******/


/***RIGHT COLUMN CHECK BOX SAVE AND LOAD LOGIC START***/

var i, checkboxes = document.querySelectorAll('input[type=checkbox]');

function save() {
    for (i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked); 
    }
}

function load_() {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true' ? true:false;
    }
} 
/***RIGHT COLUMN CHECK BOX SAVE AND LOAD LOGIC END***/