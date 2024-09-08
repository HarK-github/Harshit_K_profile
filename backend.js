window.addEventListener('scroll', function() {
    const barTop = document.querySelector('.bar_op');
    const topOffset = barTop.offsetTop; // Get the initial offset position of the .bar_top
    if (window.scrollY > topOffset) {
        $(".bar_op").animate({position: 'fixed', /* Keeps the bar fixed at the top * //
    bottom: 0, /* Sticks to the top of the viewport */
    borderRadius: '10px',
    fontSize: '20px',
    backgroundColor: 'rgba(36,36,36)'})
    
    }
}
);