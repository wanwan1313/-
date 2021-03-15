$(function () {


    // 選單按鈕開關
    $('.toggle').click(function () {
        $('.toggle span').toggleClass('on')
        $('.toggle').toggleClass('toggleon')
        $('.nav-bar').toggleClass('nav-bar-open')
        $('body').toggleClass('width-s')
        $('.nav-list').toggleClass('nav-list-on')
    })

    
    // 往下滑動才出現選單
    $(window).scroll(function () {
        let userScrollTop = $(window).scrollTop()
        if (userScrollTop > 0) {
            $('.toggle').addClass('toggleshow')
        }
        else {
            $('.toggle').removeClass('toggleshow')
            $('.toggle span').removeClass('on')
            $('.toggle').removeClass('toggleon')
            $('.nav-bar').removeClass('nav-bar-open')
            $('body').removeClass('width-s')
            $('.nav-list').removeClass('nav-list-on')
        }
    })



    // 選單按了之後選單關掉
    $('.scrollbtn').on('click', function (e) {
        e.preventDefault();


        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 300, 'swing');

        $('.toggle span').removeClass('on')
        $('.toggle').removeClass('toggleon')
        $('.nav-bar').removeClass('nav-bar-open')
        $('body').removeClass('width-s')
        $('.nav-list').removeClass('nav-list-on')
    });


    $('.fb-icon, .ig-icon, .bg-icon').mouseenter(function () {
        $(this).addClass('jump')
    })
    $('.fb-icon, .ig-icon, .bg-icon').mouseleave(function () {
        $(this).removeClass('jump')
    })




})