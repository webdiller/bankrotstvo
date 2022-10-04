const allStepLinks = document.querySelectorAll("[data-component='stepsPage'] a");

try {
  if (window.location.hash) {
    const currentHash = window.location.hash;
    const matchLinksByHash = document.querySelectorAll(`[data-component='stepsPage'] a[href="${currentHash}"]`);
    matchLinksByHash.forEach(link=>link.classList.add("active"));
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