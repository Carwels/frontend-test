// Here will be dragons
// Here will be dragons
let slider = tns({
  container: '.slider-wrapper .slider',
  items: 1,
  gutter: 20,
  edgePadding: 20,
  navPosition: 'bottom',
  controlsContainer: '#controls',
  prevButton: '.previous',
  nextButton: '.next',
  lazyload: true,
  responsive: {
    640: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1400: {
      items: 1,
    },
  },
});

setTimeout(function () {
  document.querySelector('.bg-modal').style.visibility = 'visible';
}, 5000);

// Close button
document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.bg-modal').style.display = 'none';
});
