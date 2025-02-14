/**
 * Navbar
 * navigation bar color toggle
 */

const navbar = document.querySelector('#navbar') as HTMLDivElement;
const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;

const staticClassName = 'static';

window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		navbar?.classList.remove(staticClassName);
		navbarMenu?.classList.remove(staticClassName);
	} else {
		navbar?.classList.add(staticClassName);
		navbarMenu?.classList.add(staticClassName);
	}
});

/**
 * Navbar
 * Mobile Menu
 */

const showMenu = document.querySelector('#show-menu') as HTMLButtonElement;
const closeMenu = document.querySelector('#close-menu') as HTMLButtonElement;

const showShowButtonAndHideHideButton = (): void => {
	closeMenu?.classList.remove('show');
	closeMenu?.classList.add('hidden');

	showMenu?.classList.remove('hidden');
	showMenu?.classList.add('show');
};

const hideShowButtonAndShowHideButton = (): void => {
	closeMenu?.classList.remove('hidden');
	closeMenu?.classList.add('show');

	showMenu?.classList.remove('show');
	showMenu?.classList.add('hidden');
};

showMenu?.addEventListener('click', () => {
	navbarMenu?.classList.toggle('show');
	hideShowButtonAndShowHideButton();
});

closeMenu?.addEventListener('click', () => {
	navbarMenu?.classList.toggle('show');
	showShowButtonAndHideHideButton();
});

/**
 * Slider
 * Animation: testimonial cards slide animation
 */

const slideWrapper = document.querySelector('.slide-wrapper') as HTMLDivElement;

const executionTime = 5000;

setInterval(() => {
	let slides = document.querySelectorAll(
		'.slide'
	) as NodeListOf<HTMLDivElement>;

	slideWrapper?.classList.remove('animate');
	void slideWrapper?.offsetWidth;
	slideWrapper?.classList.add('animate');

	if (slides.length !== 0) {
		const firstElement = slides[0];
		slideWrapper.appendChild(firstElement);
	}
}, executionTime);
