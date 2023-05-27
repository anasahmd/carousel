const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const carousel = document.querySelector('.carousel');

let i = 0;
const length = document.querySelectorAll('.item').length;

const next = () => {
	if (!(i > length - 5)) i += 1;
	carousel.style.transform = `translateX(-${i * 33.34}%)`;
};

const prev = () => {
	if (!i <= 0) i -= 1;
	carousel.style.transform = `translateX(-${i * 33.34}%)`;
};

btnNext.onclick = next;
btnPrev.onclick = prev;
