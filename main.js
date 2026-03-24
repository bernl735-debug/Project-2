
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.songs img, .partwo img').forEach(img => {
    img.addEventListener('click', function(e) {
      
      document.querySelectorAll('.img-popup').forEach(p => p.remove());

      
      const popup = document.createElement('div');
      popup.className = 'img-popup';
      
      popup.textContent = img.getAttribute('data-popup') || img.alt || 'Image';

      
      const rect = img.getBoundingClientRect();
      popup.style.position = 'fixed';
      popup.style.left = (rect.left + window.scrollX + img.width/2) + 'px';
      popup.style.top = (rect.top + window.scrollY - 40) + 'px';
      popup.style.background = 'rgba(0,0,0,0.85)';
      popup.style.color = '#ff0000';
      popup.style.padding = '8px 16px';
      popup.style.borderRadius = '8px';
      popup.style.zIndex = 9999;
      popup.style.transform = 'translateX(-50%)';
      popup.style.fontFamily = 'Anybody, sans-serif';
      popup.style.fontSize = '16px';
      popup.style.pointerEvents = 'none';

      document.body.appendChild(popup);

      
      setTimeout(() => popup.remove(), 1500);
    });
  });
});

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}