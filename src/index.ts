// Navbar
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
