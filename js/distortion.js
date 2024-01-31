document.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var blurValue = Math.min(5 * (scrollPosition / 100), 5); // Ajuste o valor máximo de desfoque conforme necessário
    var translateY = -0.3 * scrollPosition; // Ajuste a intensidade do parallax

    var parallaxElement = document.querySelector('.header-parallax');
    if (parallaxElement) {
        parallaxElement.style.transform = `translateY(${translateY}px)`; // Cria o efeito parallax
        parallaxElement.style.filter = `blur(${blurValue}px)`; // Aplica o desfoque
    }
});
