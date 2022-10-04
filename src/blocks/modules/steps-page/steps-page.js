document.addEventListener('DOMContentLoaded', function () {
  const allStepLinks = document.querySelectorAll("[data-component='stepsPage'] a");
  const mainStepSection = document.getElementById("mainStepSection");
  const sections = document.querySelectorAll("[data-component='stepSection']");

  try {
    if (window.location.hash) {
      const currentHash = window.location.hash;
      const matchLinksByHash = document.querySelectorAll(`[data-component='stepsPage'] a[href="${currentHash}"]`);
      matchLinksByHash.forEach(link => link.classList.add("active"));
    }
  } catch (error) {
    console.log(error);
  }

  try {
    allStepLinks.forEach(stepLink => {
      stepLink.addEventListener('click', () => {
        allStepLinks.forEach(link => link.classList.remove('active'));

        const selectedHash = stepLink.hash;
        const matchLinkElements = [];

        allStepLinks.forEach(link => {
          if (link.hash === selectedHash) matchLinkElements.push(link);
        });
        matchLinkElements.forEach(link => link.classList.add('active'));
      });
    });
  } catch (error) {
    console.log(error);
  }

  try {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentVisibleElementId = entry.target.id;
          allStepLinks.forEach(link => link.classList.remove('active'));

          const matchLinkElements = [];

          allStepLinks.forEach(link => {
            if (link.hash === `#${currentVisibleElementId}`) matchLinkElements.push(link);
          });
          matchLinkElements.forEach(link => link.classList.add('active'));
        }
      });
    });
    document.querySelectorAll("[data-component='stepSection']").forEach(section => observer.observe(section));

  } catch (error) {
    console.log(error);
  }
});