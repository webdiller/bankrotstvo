const officeImgWrapper = document.getElementById("officeImgWrapper");
if (officeImgWrapper) {
    try {
        if (window.innerWidth <= 576) {
            officeImgWrapper.scrollLeft = 100;
        }
        if (window.innerWidth <= 400) {
            officeImgWrapper.scrollLeft = 200;
        }
        if (window.innerWidth <= 320) {
            officeImgWrapper.scrollLeft = 210;
        }
    } catch (error) {
        console.log('Ошибка в секкции карт. ', error);
    }
}