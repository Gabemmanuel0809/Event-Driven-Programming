let tb = document.querySelector("#taskbar");
let close = document.querySelector("#x");
let npad = document.querySelector("#btn");
let sbn = document.querySelector("#btn3");
let ins = document.querySelector("#btn2");
let tbTitle = document.querySelector("#title");
let whitebody = document.querySelector("#innerbody");
let instr = document.querySelector("#instruc");
let textinp = document.querySelector("#textinp");
let isDsiplaying = false;
let settings = document.querySelector("#btn4");
let surp = document.querySelector("#btn5");
let frm = document.querySelector("#form");
let conf = document.querySelector("#conf");  

close.addEventListener("click", function() {
    tb.style.display = "none";
    tbTitle.textContent = "";
    whitebody.style.display = "none";
    instr.style.display = "none";
    instr.textContent = "";
    textinp.style.display = "none";
    isDsiplaying = false;
    frm.style.display = "none";
});

npad.addEventListener("click", function() {
    if(isDsiplaying == false) {
        instr.style.display = "none";
        tb.style.display = "block";
        tbTitle.textContent = "Notepad v0.0.3";
        whitebody.style.display = "block";
        textinp.style.display = "block";
        frm.style.display = "none";  
        isDsiplaying = true;	
    } else {
        alert("Multitasking not supported");
    }
});

ins.addEventListener("click", function() {
    if(isDsiplaying == false) {
        whitebody.style.display = "block";
        tb.style.display = "block";
        tbTitle.textContent = "Manual";
        instr.style.display = "block";
        frm.style.display = "none";  
        instr.innerHTML = "Imagine the year is currently 1997<br>" + 
        "The controls are simple all you have to do is to click a button<br>" +
        "- Notepad allows you write whats on your mind<br>" +
        "- lan-thernet is a fake search engine<br>" + 
        "- settings allows you to modify the visual looks";
        isDsiplaying = true;
    } else {
        alert("Multitasking not supported");
    }
});

sbn.addEventListener("click", function() {
    window.location.href = "lanternet.html";
});

settings.addEventListener("click", function() {
    if(isDsiplaying == false) {
        frm.style.display = "block";
        tb.style.display = "block";
        tbTitle.textContent = "Settings";
        whitebody.style.display = "none"; 
        instr.style.display = "none";     
        textinp.style.display = "none";    
        isDsiplaying = true;
    } else {
        alert("Multitasking not supported");
    }
});

conf.addEventListener("click", function(e) {
    e.preventDefault();
    let selectedColor = document.querySelector('input[name="color"]:checked');
    if(selectedColor) {
        document.body.style.backgroundColor = selectedColor.value;
    }
});

surp.addEventListener("click", function() {
    window.location.href = "https://youtu.be/xMHJGd3wwZk?si=zw7Gx0h4Lb_G3JyZ";
});