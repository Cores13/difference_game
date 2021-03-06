$(document).ready(function() {
    // When clicked, show difference
    $('#transparentmap AREA').click(function() {
        var theDifference = '#' + $(this).attr('id') + '-diff';
        $(theDifference).css('display', 'inline');
        $(theDifference).data('clicked', true);
    
        // When all differences selected/clicked, show email submission form
        if ($('#leaf-diff').data('clicked') && $('#petal-diff').data('clicked') && $('#light-diff').data('clicked') && $('#nolight-diff').data('clicked') && $('#sauce-diff').data('clicked')) {
            $('.popup').css('display', 'inline');
            document.querySelector(".popup").classList.add("active");
        }
    });
    document.querySelector(".popup .close-btn").addEventListener("click",function(){
        document.querySelector(".popup").classList.remove("active");
    });
});