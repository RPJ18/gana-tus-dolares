class Main {
	constructor() {
		this.$navbar = document.querySelector('#main-navbar');
		this.$btnPrev = document.querySelector('.slick-prev.slick-arrow');
		this.$btnNext = document.querySelector('.slick-next.slick-arrow');

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

	startSlider() {
		$('.payment-proof-slider').slick({
			slidesToShow: 1,
			infinite: true,
			arrows: false,
			responsive: [{
				breakpoint: 1024,
				settings: {
				  dots: true,
				}
			}]
		});
	}

	prevSlider() {
		$('.payment-proof-slider').slick('slickPrev')
	}

	nextSlider() {
		$('.payment-proof-slider').slick('slickNext')
	}

	addEventListeners() {
		window.addEventListener('scroll', this.changeNavbarBackground.bind(this))
		window.addEventListener('load', this.startSlider.bind(this))
		this.$btnPrev.addEventListener('click', this.prevSlider.bind(this))
		this.$btnNext.addEventListener('click', this.nextSlider.bind(this))
	}
}

new Main()