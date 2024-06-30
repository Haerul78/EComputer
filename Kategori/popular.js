document.addEventListener('DOMContentLoaded', () => {
    // Event listener untuk semua tombol "See More"
    const buttons = document.querySelectorAll('.see-more');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll ke elemen target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Menggulirkan ke bagian atas elemen
                });
            } else {
                console.error('Element with id ' + targetId + ' not found.');
            }
        });
    });

    // Event listener untuk pengguliran slide
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    next.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });

    prev.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    });
});
