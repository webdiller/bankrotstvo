const uploadFile = document.querySelectorAll("[data-component='uploadFile']");
const areaTitleTextReplace = "Заменить фото";

document.addEventListener('DOMContentLoaded', function () {
  uploadFile.forEach((uploader) => {
    const area = uploader.querySelector('.upload-file__area');
    const input = uploader.querySelector('input');
    const imagePreview = uploader.querySelector('.upload-file__photo');
    const areaTitle = uploader.querySelector('.upload-file__text');
  
    area.addEventListener('click', () => {
      input.click();
    });
  
    input.addEventListener('change', e => {
      uploader.classList.add('active');
      const file = e.target.files[0];
      imagePreview.src = window.URL.createObjectURL(file);
      areaTitle.innerHTML = areaTitleTextReplace;
    });
  });
});
