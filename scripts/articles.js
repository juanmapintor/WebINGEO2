function articlesBehaviour() {
    let articleContainter = document.querySelector('.articles');
    let articles = document.querySelectorAll('.article');
    let articleImages = document.querySelectorAll('.article > img');
    let articleQueryMax = window.matchMedia('(max-width: 1200px)');
    let articleQueryMin = window.matchMedia('(max-width: 600px)');

    function resizeArticles() {
        articles.forEach((element) => {
            element.style.height = element.offsetWidth + 'px';
        });
    }

    function repositionImages() {
        articleImages.forEach((element) => {
            element.style.margin = '-' + (element.offsetHeight / 2) + 'px 0 0 -' + (element.offsetWidth / 2) + 'px';
        });
    }

    function mobileCheck() {
        if(getDeviceType()!='mobile' && articleQueryMax.matches && !articleQueryMin.matches){
            articleContainter.setAttribute('style', 'flex-direction: row; flex-wrap: wrap;')
            articles.forEach((element) => {
                element.setAttribute('style', 'min-width: 30%;');
            });
        } else if(!articleQueryMax.matches || articleQueryMin.matches) {
            articleContainter.removeAttribute('style');
            articles.forEach((element) => {
                element.removeAttribute('style');
            });
        }
    }

    function onResize() {
        mobileCheck();
        resizeArticles();
        repositionImages();
    }
    onResize();

    window.addEventListener('resize', onResize);



}