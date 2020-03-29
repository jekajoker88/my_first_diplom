
$(document).ready(function(){
    $("#down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
});

document.getElementById('burger').onclick = function(){
    addMenu();
}

function addMenu(){
    document.getElementById('menu').classList.toggle('menu1')
}