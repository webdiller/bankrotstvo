const dropdownComponents = document.querySelectorAll("[data-component='dropdown']");

document.addEventListener('DOMContentLoaded', function () {
  dropdownComponents.forEach((component) => {
    let defaultDropdownTitle = 'Город';
    const dropdownTitle = component.querySelector('.dropdown__main-item');
    const attributeValue = component.getAttribute('data-value');
    if (component.getAttribute('data-title')) {
      defaultDropdownTitle = component.getAttribute('data-title');
    }
    let currentCityName = null;
    let currentCityValue = null;

    if (attributeValue) {
      let parseAttributeValue = JSON.parse(`${attributeValue}`);
      currentCityName = parseAttributeValue.name;
      dropdownTitle.innerText = currentCityName;
    }

    component.addEventListener('click', function (event) {
      try {
        let val = event.target.value;

        if (val) {
          let parseAttributeValue = JSON.parse(`${val}`);
          currentCityName = parseAttributeValue.name;
          currentCityValue = parseAttributeValue.value;
          dropdownTitle.innerText = currentCityName;
          component.setAttribute('value', val);
        }

        if (!val && component.getAttribute('value')) {
          const previusStateAttribute = component.getAttribute('value');
          let parseAttributeValue = JSON.parse(`${previusStateAttribute}`);
          currentCityName = parseAttributeValue.name;
          currentCityValue = parseAttributeValue.value;
          dropdownTitle.innerText = currentCityName;
        }

        if (component.classList.contains('active')) {
          if (attributeValue) {
            dropdownTitle.innerText = currentCityName;
          }
          component.classList.remove('active');
        } else {
          dropdownTitle.innerText = defaultDropdownTitle;
          component.classList.add('active');
        }
      } catch (error) {
        console.log(error);
      }
    });
  });
});
