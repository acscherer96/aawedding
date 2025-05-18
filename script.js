document.getElementById('upload-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const fileInput = document.getElementById('photo');
  const file = fileInput.files[0];

  if (file && name) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const gallery = document.getElementById('gallery');
      const container = document.createElement('div');
      container.classList.add('photo-container');

      const img = document.createElement('img');
      img.src = event.target.result;
      img.alt = name;

      container.appendChild(img);
      gallery.prepend(container);
    };
    reader.readAsDataURL(file);
    fileInput.value = '';
  }
});
