const headerComponent = document.querySelector("[data-component='header']");
const menu = headerComponent.querySelector(".header__menu");

const mobileMenu = document.querySelector("[data-component='headerMobileMenu']");

const headerContacts = document.querySelector("[data-component='headerContacts']");
const headerContactsSearchButton = headerContacts.querySelector(".mobile-menu__contacts-search");

const headerMobileSearch = document.querySelector("[data-component='headerMobileSearch']");
const headerMobileSearchInput = mobileMenu.querySelector(".mobile-menu__search-input");
const headerMobileSearchClose = mobileMenu.querySelector(".mobile-menu__search-btn");

const toggleList = document.querySelectorAll("[data-component='toggleList']");

document.addEventListener('DOMContentLoaded', function () {

  menu.addEventListener('click', function (event) {
    event.target.classList.toggle('active');
    headerComponent.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    if (menu.classList.contains('active')) {
      headerComponent.classList.remove('active-search');
    }
  });

  headerContactsSearchButton.addEventListener('click', function () {
    headerContacts.classList.toggle('active');
    headerMobileSearch.classList.toggle('active');
    headerComponent.classList.add('active-search');
    headerMobileSearchInput.focus();
  });

  headerMobileSearchClose.addEventListener('click', function () {
    headerContacts.classList.remove('active');
    headerMobileSearch.classList.remove('active');
    headerComponent.classList.remove('active-search');
  });

  toggleList.forEach(item => {
    const itemBtn = item.querySelector('.mobile-menu__item-link_trigger');
    itemBtn.addEventListener('click', function () {
      item.classList.toggle('active');
    });
  });
});
