$(function () {

    // -------------------style silde------------------------//


    let slideNum = 1


    $('.style-arrow').click(function () {
        if ($(this).index() == 0) {
            // console.log('prev')
            slideNum = slideNum - 1
            let imgPosition = 'translateX(-' + slideNum + '00%)'
            $('.style-slide').css('transform', imgPosition).css('transition', '.5s')

            if (slideNum < 0) {
                $('.style-slide').css('transform', 'translateX(-200%)').css('transition', '0s')
                slideNum = 2
            }

            setTimeout(() => {
                if (slideNum == 0) {
                    $('.style-slide').css('transform', 'translateX(-300%)').css('transition', '0s')
                    slideNum = 3
                }
            }, 500);


        }
        if ($(this).index() == 1) {
            // console.log('next')
            slideNum = slideNum + 1
            let imgPosition = 'translateX(-' + slideNum + '00%)'
            $('.style-slide').css('transform', imgPosition).css('transition', '.5s')

            if (slideNum > 4) {
                $('.style-slide').css('transform', 'translateX(-200%)').css('transition', '0s')
                slideNum = 2
            }

            setTimeout(() => {
                if (slideNum == 4) {
                    $('.style-slide').css('transform', 'translateX(-100%)').css('transition', '0s')
                    slideNum = 1
                }
            }, 500);

        }
    })


    // -------------------style silde end------------------------//

})


$(function () {


    // -------------------taste silde------------------------//

    let slideNum = 0
    let slideNumM = 3
    let movepersent = 33.33


    $(window).resize(function () {
        if ($(window).width() >= 992) {
            $('.taste-slide').css('transform', 'translateX(-100%)').css('transition', '0s')
            slideNum = 0
        }

        if ($(window).width() < 992) {
            $('.taste-slide').css('transform', 'translateX(-300%)').css('transition', '0s')
            slideNumM = 3
        }
    })


    $('.taste-arrow').click(function () {


        // 桌機板 width>=992

        if ($(window).width() >= 992) {
            if ($(this).index() == 0) {
                slideNum = slideNum - 1
                let myTranslateX = movepersent * slideNum + 100
                let divPosition = 'translateX(-' + myTranslateX + '%)'
                $('.taste-slide').css('transform', divPosition).css('transition', '.5s')

                if (slideNum < -3) {
                    $('.taste-slide').css('transform', 'translateX(-' + (100 + movepersent * 5) + '%)').css('transition', '0s')
                    slideNum = 5
                }

                setTimeout(() => {
                    if (slideNum == -3) {
                        $('.taste-slide').css('transform', 'translateX(-' + (100 + movepersent * 6) + '%)').css('transition', '0s')
                        slideNum = 6
                    }
                }, 500);
            }
            if ($(this).index() == 1) {
                slideNum = slideNum + 1
                let myTranslateX = movepersent * slideNum + 100
                let divPosition = 'translateX(-' + myTranslateX + '%)'
                $('.taste-slide').css('transform', divPosition).css('transition', '.5s')

                if (slideNum > 9) {
                    $('.taste-slide').css('transform', 'translateX(-133.33%)').css('transition', '0s')
                    slideNum = 1
                }

                setTimeout(() => {
                    if (slideNum == 9) {
                        $('.taste-slide').css('transform', 'translateX(-100%)').css('transition', '0s')
                        slideNum = 0
                    }
                }, 500);
            }

        }


        // 手機板 width < 992

        if ($(window).width() < 992) {

            if ($(this).index() == 0) {
                slideNumM = slideNumM - 1
                let divPosition = 'translateX(-' + slideNumM + '00%)'
                $('.taste-slide').css('transform', divPosition).css('transition', '.5s')


                if (slideNumM < 2) {
                    $('.taste-slide').css('transform', 'translateX(-1000%)').css('transition', '0s')
                    slideNumM = 10
                }

                setTimeout(() => {
                    if (slideNumM == 2) {
                        $('.taste-slide').css('transform', 'translateX(-1100%)').css('transition', '0s')
                        slideNumM = 11
                    }
                }, 500);
            }
            if ($(this).index() == 1) {
                slideNumM = slideNumM + 1
                let divPosition = 'translateX(-' + slideNumM + '00%)'
                $('.taste-slide').css('transform', divPosition).css('transition', '.5s')

                if (slideNumM > 12) {
                    $('.taste-slide').css('transform', 'translateX(-400%)').css('transition', '0s')
                    slideNumM = 4
                }

                setTimeout(() => {
                    if (slideNumM == 12) {
                        $('.taste-slide').css('transform', 'translateX(-300%)').css('transition', '0s')
                        slideNumM = 3
                    }
                }, 500);
            }
        }




    })




})



