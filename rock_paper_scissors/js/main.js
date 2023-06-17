var input = document.getElementById('toggleswitch');
var outputtext = document.getElementById('status');

input.addEventListener('change', function(){
    if(this.checked) {
        outputtext.innerHTML = "Light";
        document.body.style.backgroundColor = "#a69759";

    } else {
        outputtext.innerHTML = "Dark";
        document.body.style.backgroundColor = "#292C34";

    }
});

