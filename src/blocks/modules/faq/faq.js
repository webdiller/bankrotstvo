const faqs = document.querySelectorAll("[data-component='faq']");

document.addEventListener('DOMContentLoaded', function () {
    faqs.forEach((faq) => {
        const toggleButtons = faq.querySelectorAll('.faq__item-question');
        toggleButtons.forEach(element => {
            element.addEventListener('click', function (e) {
                element.classList.toggle('active');
            })
        });
    });
});
