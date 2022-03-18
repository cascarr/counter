const result = document.querySelector(' .result');
const dcreaseBtn = document.querySelector(' .d-btn');
const rsetBtn = document.querySelector(' .rs-btn');
const icreaseBtn = document.querySelector(' .in-btn');


// manipulating the DOM to decrease the counter
dcreaseBtn.addEventListener('click', function() {

    let cntVal = result.textContent;

    result.textContent = --cntVal;

    if (result.textContent < 0) {

        result.style.color = 'red';

    }
});

// manipulating the DOM to reset the counter
rsetBtn.addEventListener('click', function() {

    result.textContent = 0;

    if (result.textContent === 0) {

        result.style.color = 'black';

    }

});

// manipulating the DOM to increase the counter
icreaseBtn.addEventListener('click', function() {

    let cntVal = result.textContent;

    result.textContent = ++cntVal;

    if (result.textContent > 0) {

        result.style.color = "green";

    }
});