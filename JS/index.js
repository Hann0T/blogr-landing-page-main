// Get all the elements to show the menu
let hamburgerOpen = document.querySelector('.controller-open')
let hamburgerClose = document.querySelector('.controller-close')
let hamburgerMenu = document.querySelector('.hamburger-menu')

// get the ul in the menu

let items = document.querySelectorAll('.hamburger-menu__item')

hamburgerOpen.addEventListener('click', () => {
	hamburgerMenu.classList.remove('hidden')
	hamburgerOpen.classList.add('hidden')
	hamburgerClose.classList.remove('hidden')
	console.log(items)
})

hamburgerClose.addEventListener('click', () => {
	hamburgerMenu.classList.add('hidden')
	hamburgerOpen.classList.remove('hidden')
	hamburgerClose.classList.add('hidden')
})

items[0].addEventListener('click', () => {
	activeNodo(0)
})
items[1].addEventListener('click', () => {
	activeNodo(1)
})
items[2].addEventListener('click', () => {
	activeNodo(2)
})

function activeNodo(itemPosition) {
	items.forEach(item => {
		if (item == items[itemPosition]) {
			if (item.matches('.active')) {
				item.classList.remove('active')
				hamburgerMenu.classList.remove('hamburger-menu--height-fixed')
			}
			else {
				item.classList.add('active')
				hamburgerMenu.classList.add('hamburger-menu--height-fixed')
			}
		} else {
			item.classList.remove('active')
		}
	})
}

