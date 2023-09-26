const config = {
  type: 'carousel',
  perView: 1,
  startAt: 2,
  focusAt: 'center',
  peek: 440,
  animationTimingFunc: 'cubic-bezier(0.42,0.44,0.03,1.25)',
  animationDuration: 500,
  breakpoints : {
    1200: {
      peek: 200
    },

    900: {
      peek: 100
    },

    400: {
      peek: 50
    }
  }
}

new Glide('.glide', config).mount();