const ratings = document.querySelectorAll("[data-component='rating']");

document.addEventListener('DOMContentLoaded', function () {
  ratings.forEach(rating => {
    const inputs = rating.querySelectorAll("[name='rating']");
    const currentSumm = rating.querySelector('.rating-star__count-current');
    inputs.forEach(input => {
      input.addEventListener('change', (event) => {
        console.log('event: ', event.target.value);
        currentSumm.innerHTML = event.target.value;
      });
    });
  });
});