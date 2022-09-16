const modalSearch = document.querySelector("[data-component='modalSearch']");
const modalSearchTrigger = document.querySelectorAll("[data-component='modalSearchTrigger']");
const modalSearchInput = modalSearch.querySelector("input");
const modalSearchClose = modalSearch.querySelector(".modal-search__close-btn");

const modalReview = document.querySelector("[data-component='modalReview']");
const modalReviewTrigger = document.querySelectorAll("[data-component='modalReviewTrigger']");
const modalReviewClose = modalReview.querySelector(".modal-review__close-btn");

const modalComment = document.querySelector("[data-component='modalComment']");
const modalCommentTrigger = document.querySelectorAll("[data-component='modalCommentTrigger']");
const modalCommentClose = modalComment.querySelector(".modal-review__close-btn");

document.addEventListener('DOMContentLoaded', function () {
  // modalSearch
  modalSearch.addEventListener('click', e => {
    if (e.target.dataset.component === 'modalSearch') {
      modalSearch.classList.remove('active');
    }
  });
  modalSearchTrigger.forEach(trigger => {
    trigger.addEventListener('click', function () {
      modalSearch.classList.toggle('active');
      if (!modalSearch.classList.contains('.active')) {
        modalSearchInput.focus();
      }
    });
  });
  modalSearchClose.addEventListener('click', function () {
    modalSearch.classList.remove('active');
  });

  // modalReview
  modalReview.addEventListener('click', e => {
    if (e.target.dataset.component === 'modalReview') {
      modalReview.classList.remove('active');
    }
  });
  modalReviewTrigger.forEach(trigger => {
    trigger.addEventListener('click', function () {
      modalReview.classList.toggle('active');
    });
  });
  modalReviewClose.addEventListener('click', function () {
    modalReview.classList.remove('active');
  });

  // modalComment
  modalComment.addEventListener('click', e => {
    if (e.target.dataset.component === 'modalComment') {
      modalComment.classList.remove('active');
    }
  });
  modalCommentTrigger.forEach(trigger => {
    trigger.addEventListener('click', function () {
      modalComment.classList.toggle('active');
    });
  });
  modalCommentClose.addEventListener('click', function () {
    modalComment.classList.remove('active');
  });
});