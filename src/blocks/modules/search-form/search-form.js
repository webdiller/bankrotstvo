const searchForms = document.querySelectorAll("[data-component='searchForm']");

document.addEventListener('DOMContentLoaded', function () {
  searchForms.forEach((component) => {
    const searchRoot = component;
    const searchHeader = searchRoot.querySelector("[data-component='searchFormHeader']");
    searchHeader.addEventListener('click', function () {
      searchRoot.classList.toggle('active');
    });
  });
});
