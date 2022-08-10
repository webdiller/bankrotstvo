const searchComponents = document.querySelectorAll("[data-component='search']");

document.addEventListener('DOMContentLoaded', function () {
  searchComponents.forEach(component => {

    if (component.querySelector('input').value.trim()) {
      component.classList.add('active');
    }

    component.querySelector('input').addEventListener('keyup', function (event) {
      console.log('change');
      if (event.target.value.trim()) {
        component.classList.add('active');
      } else {
        component.classList.remove('active');
      }
    });
    
  });
});