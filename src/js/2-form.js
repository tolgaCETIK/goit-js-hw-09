const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Form verilerini localStorage'da saklama
form.addEventListener('input', (e) => {
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Sayfa yüklendiğinde localStorage'daki verileri form alanlarına doldurma
window.addEventListener('load', () => {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    Object.entries(savedData).forEach(([name, value]) => {
      const field = form.elements[name];
      if (field) field.value = value;
    });
  }
});

// Form gönderildiğinde localStorage temizle ve formu resetle
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log('Form Data:', data); // Konsola yazdır

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
