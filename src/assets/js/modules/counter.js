const counter = document.querySelector('[data-counter]');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
	counter.textContent = +counter.textContent + 1;
});
