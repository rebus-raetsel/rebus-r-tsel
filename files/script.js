var s=document.createElement('script');
s.type='text/javascript';
s.src='http://ajax.googleapis.com/ajax/libs/jquery/1.3.1/jquery.min.js';
var head = document.getElementsByTagName("head")[0];
var done = false;
   
s.onload = s.onreadystatechange = function(){
    if ( !done && (!this.readyState ||
    this.readyState == "loaded" || this.readyState == "complete") ) {
        done = true;
        head.removeChild(s);

        your_jquery_loaded_callback_function();
    }
};
   
     head.appendChild(s);
}

var highest = 27;

$('.field').focus(function () {
    var $this = $(this)
    
    t = setInterval(

    function () {
        if (($this.val() < 1 || $this.val() > highest) && $this.val().length != 0) {
            if ($this.val() < 1) {
                $this.val(1)
            }

            if ($this.val() > highest) {
                $this.val(highest)
            }
        }
    }, 20)
});

$('.field').prop('title', 'Rebus Suchen - Gib die Rebus Nummer ein!');

function search() {
	var rebusId = document.getElementById("search-rebus").value;
	window.location.href = rebusId + ".html";
}
