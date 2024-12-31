
function openPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'flex';
}


function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function() {
  var checkButtons = document.querySelectorAll('.check-btn');
  
  checkButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      openPopup();
    });
  });
});
