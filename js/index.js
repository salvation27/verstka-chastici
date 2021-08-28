var elements = $('.modal-overlay, .modal');

$('.boti').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});