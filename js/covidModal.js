window.addEventListener('load', function() {
    const modal = document.querySelector('#covidModal');
    const span = document.querySelectorAll('.close')[0]; 


    modal.style.display = 'block';


    span.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if ( e.target == modal ) {
            modal.style.display = 'none';
        };
    });
});
