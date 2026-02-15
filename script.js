const input = document.querySelector('.cek');
const gerak = document.querySelector('.samping');

input.addEventListener ('click', function() {
  gerak.classList.toggle('keluar');
});