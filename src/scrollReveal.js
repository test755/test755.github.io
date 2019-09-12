const slideUpSlow = {
  distance: '5%',
  origin: 'bottom',
  opacity: 0,
  mobile: false,
  duration: 1000
}

const slideDownSlow = {
  scale: 0.99,
  distance: '10%',
  origin: 'top',
  opacity: 0,
  mobile: false,
  duration: 2000
}

const slideLeft = {
  distance: '20%',
  origin: 'left',
  mobile: false,
  duration: 1000
}

const slideDownFast = {
  distance: '20%',
  origin: 'top',
  mobile: false,
  duration: 1000
}

ScrollReveal().reveal('.slide-up-slow', slideUpSlow)
ScrollReveal().reveal('.slide-down-slow', slideDownSlow)
ScrollReveal().reveal('.slide-left', slideLeft)
ScrollReveal().reveal('.slide-down-fast', slideDownFast)
