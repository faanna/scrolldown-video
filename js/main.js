const container = document.querySelector('.container');
const videoDiv = document.querySelector('.videoDiv');
let videoHeight = videoDiv.offsetHeight;

container.style.height = videoHeight + 'px';
window.addEventListener('scroll', () => {
	if (window.scrollY > videoHeight) {
		if (true) {
			videoDiv.classList.add('on');
			videoDiv.style.bottom = -videoHeight + 'px';
		}
	} else {
		videoDiv.classList.remove('on');
		videoDiv.style.bottom = '0px';
	}
});
