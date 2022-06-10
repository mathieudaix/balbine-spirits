import '../styles/index.scss'

import LocomotiveScroll from 'locomotive-scroll'

setTimeout(() => {
	let scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		getSpeed: true,
		getDirection: true,
	})

	const scrollIcon = document.querySelector('svg')
	scrollIcon.addEventListener('click', () => {
		scroll.scrollTo(document.querySelector('section.center'))
	})

	scroll.on('scroll', (instance) => {
		instance.scroll.y > 100 ? scrollIcon.classList.add('hide') : scrollIcon.classList.remove('hide')
	})

	const cursor = document.querySelector('.js-cursor')
	const cursorFollower = document.querySelector('.js-cursor__follower')

	let mouseX = 0
	let mouseY = 0

	let cursorX1 = 0
	let cursorY1 = 0

	let cursorX2 = 0
	let cursorY2 = 0

	let speed1 = 1
	let speed2 = 0.1

	function animate() {
		let distX1 = mouseX - cursorX1
		let distY1 = mouseY - cursorY1

		cursorX1 = cursorX1 + distX1 * speed1
		cursorY1 = cursorY1 + distY1 * speed1

		cursor.style.left = cursorX1 + 'px'
		cursor.style.top = cursorY1 + 'px'

		let distX2 = mouseX - cursorX2
		let distY2 = mouseY - cursorY2

		cursorX2 = cursorX2 + distX2 * speed2
		cursorY2 = cursorY2 + distY2 * speed2

		cursorFollower.style.left = cursorX2 + 'px'
		cursorFollower.style.top = cursorY2 + 'px'

		requestAnimationFrame(animate)
	}

	animate()

	document.addEventListener('mousemove', (e) => {
		mouseX = e.pageX
		mouseY = e.pageY
	})
}, 100)
