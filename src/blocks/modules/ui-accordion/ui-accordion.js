const accordions = document.querySelectorAll("[data-component='accordion']");

document.addEventListener('DOMContentLoaded', function () {
    accordions.forEach((accordion) => {
        const accItems = accordion.querySelectorAll('.ui-accordion__item');
        accItems.forEach((accItem) => {
            const header = accItem.querySelector('.ui-accordion__header');
            header.addEventListener('click', () => {
                header.parentElement.classList.toggle('active');
            });
        });
    });
});
