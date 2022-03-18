const result = document.querySelector(' .result');

const btnArr = document.querySelectorAll(' .btn');

let count = 0;

btnArr.forEach(function(btn) {

    if (btn.classList.contains('d-btn')) {

        btn.addEventListener('click', function() {

            result.textContent = --count;

            if (result.textContent < 0) {

                result.style.color = 'red';

            }
        });

    }

    if (btn.classList.contains('rs-btn')) {

        //reset button
        btn.addEventListener('click', function() {

            result.textContent = 0;

            if (result.textContent === 0) {

                result.style.color = 'black';

            }
        });

    }

    if (btn.classList.contains('in-btn')) {

        btn.addEventListener('click', function() {

            result.textContent = ++count;

            if (result.textContent > 0) {

                result.style.color = 'green';
            }

        });

    }

});