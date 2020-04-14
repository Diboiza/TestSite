var header = document.getElementById("output");
var names = document.getElementById("name");
var btn = document.getElementById("click");

btn.onclick = function(){
    header.innerHTML = names.value;
    header.style.color = 'red';
}
