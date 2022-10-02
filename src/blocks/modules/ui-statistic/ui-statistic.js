const progressBar = document.querySelectorAll("[data-component='progressBar']");

document.addEventListener('DOMContentLoaded', function () {
  try {
    progressBar.forEach((component) => {
      let progress = component.querySelector('.ui-statistic__rating-progress');
      let valueProgress = Number(component.getAttribute("data-value"));
      let strokeDashOffsetValue = 100 - valueProgress;
      progress.style.strokeDashoffset = strokeDashOffsetValue;
    });
  } catch (error) {
    console.log(error);
  }
});
