class Main {
	constructor() {
		this.$navbar = document.querySelector('#main-navbar');

		this.addEventListeners()
	}

	changeNavbarBackground() {
		if (document.documentElement.scrollTop >= 700) {
			this.$navbar.classList.add('transparent-navbar');
			this.$navbar.classList.add('navbar-dark');
			this.$navbar.classList.remove('bg-light');
			this.$navbar.classList.remove('navbar-light');
		} else {
			this.$navbar.classList.remove('transparent-navbar');
			this.$navbar.classList.remove('navbar-dark');
			this.$navbar.classList.add('bg-light');
			this.$navbar.classList.add('navbar-light');
		}
	}

	addEventListeners() {
		window.addEventListener('scroll', this.changeNavbarBackground.bind(this))
	}
}

new Main()