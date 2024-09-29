document.querySelector('.openmenu').addEventListener('click', function() {
    document.querySelector('.overlay').classList.remove('hidden');
});
document.querySelector('.overlay').addEventListener('click', function(event) {
    this.classList.add('hidden');
    event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
});