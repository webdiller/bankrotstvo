import Viewer from 'viewerjs';

document.addEventListener('DOMContentLoaded', function () {
  // modalSearch. Модалка поиска. Вызов из шапки.
  (() => {
    try {
      const modalSearch = document.querySelector("[data-component='modalSearch']");
      const modalSearchTrigger = document.querySelectorAll("[data-component='modalSearchTrigger']");
      const modalSearchInput = modalSearch.querySelector("input");
      const modalSearchClose = modalSearch.querySelector(".modal-search__close-btn");

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
    } catch (error) {
      console.log('error: ', error);
    }
  })();

  // modalReview. Модалка оставления отзыва
  (() => {
    try {
      const modalReview = document.querySelector("[data-component='modalReview']");
      const modalReviewTrigger = document.querySelectorAll("[data-component='modalReviewTrigger']");
      const modalReviewClose = modalReview.querySelector(".modal-review__close-btn");

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
    } catch (error) {
      console.log('error: ', error);
    }
  })();

  // modalComment. Модалка оставления комментария
  (() => {
    try {
      const modalComment = document.querySelector("[data-component='modalComment']");
      const modalCommentTrigger = document.querySelectorAll("[data-component='modalCommentTrigger']");
      const modalCommentClose = modalComment.querySelector(".modal-review__close-btn");

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
    } catch (error) {
      console.log('error: ', error);
    }
  })();

  // modalViewer. Элемент просмотра фотографий в увеличенном режиме
  (() => {
    const modalImages = document.querySelectorAll("[data-component='modalImages']");
    try {
      modalImages.forEach(element => {
        new Viewer(element, {
          toolbar: false,
          navbar: false,
          title: false,
          className: "viewer-modal"
        });
      });

    } catch (error) {
      console.log(error);
    }
  })();

  // modalSort. Сортировка отзывов и обзоров. НА каждую страницу сделано по 1 модалке и 1 кнопки вызова.
  (() => {
    try {
      const modalSorting = document.querySelector("[data-component='modalSorting']");
      const modalSortingTrigger = document.querySelector("[data-component='modalSortingTrigger']");
      const modalSortingTriggerTitle = modalSortingTrigger.querySelector(".dropdown__main-item");
      const modalSortingClose = modalSorting.querySelector(".modal-sort__close-btn");
      const modalSortingForm = modalSorting.querySelector("form");

      modalSorting.addEventListener('click', e => {
        if (e.target.dataset.component === 'modalSorting') {
          modalSorting.classList.remove('active');
        }
      });
      modalSortingTrigger.addEventListener('click', function () {
        modalSorting.classList.toggle('active');
      });
      modalSortingClose.addEventListener('click', function () {
        modalSorting.classList.remove('active');
      });

      // Делаем закрытие модалки, при изменении значения
      modalSortingForm.addEventListener("change", function (e) {
        let { value: selectedValue } = e.target;
        modalSorting.classList.remove('active');
        modalSortingTriggerTitle.innerHTML = selectedValue;
      });
    } catch (error) {
      console.log('error: ', error);
    }
  })();
});