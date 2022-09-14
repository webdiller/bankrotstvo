const modalSearch = document.querySelector("[data-component='modalSearch']");
const modalSearchTrigger = document.querySelectorAll("[data-component='modalSearchTrigger']");
const modalSearchInput = modalSearch.querySelector("input");
const modalSearchClose = modalSearch.querySelector(".modal-search__close-btn");

document.addEventListener('DOMContentLoaded', function () {
  modalSearchTrigger.forEach(trigger => {
    trigger.addEventListener('click', function () {
      modalSearch.classList.toggle('active');
      if (!modalSearch.classList.contains('.active')) {
        modalSearchInput.focus();
      }
    });
    modalSearchClose.addEventListener('click', function () {
      modalSearch.classList.remove('active');
    });
  });
});