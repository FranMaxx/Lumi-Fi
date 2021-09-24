$(".nav-link").click(function() {
    $('.nav-link').removeClass('active')

    const selected = $(this);
    selected.addClass('active');
});
