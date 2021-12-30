$(".services__offer-item").hover(
    function () 
    {
        var parent = ($(this)).parents('.offer');
        
        var child = $(parent).find('.hidden-text');

        console.log(child);
        
        $(child).collapse('show');
    }, function () {
        $('.hidden-text').collapse('hide');
    }
);