const cards = document.querySelectorAll('.testimonial-card');
let index = 0;

function showSlide(n) {
  cards.forEach(card => card.classList.remove('active'));
  cards[n].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % cards.length;
  showSlide(index);
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  showSlide(index);
});

setInterval(() => {
  index = (index + 1) % cards.length;
  showSlide(index);
}, 6000);