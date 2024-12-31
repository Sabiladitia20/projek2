document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('testDriveForm');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
     
      popup.style.display = 'flex';
    });
  
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });
  });
  