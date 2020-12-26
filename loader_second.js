$(document).ready(function(){
    $(".modal").modal();
    $(".parallax").parallax();
    $(".sidenav").sidenav();
    $(".slider").slider({full_width: true})
    $('select').formSelect();
});

function toggleModal(){
    var instance = M.Modal.getInstance($("#modal3"));
    instance.open();
}