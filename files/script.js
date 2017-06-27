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
