const btnModal = document.querySelector('.btn');

// 2000 - первое число

var currentNumber = $('.study-amount').text();
$({numberValue: currentNumber}).animate({numberValue: 2032}, {
    duration: 1500,
    easing: 'linear',
    step: function() { 
        $('.study-amount').text(Math.ceil(this.numberValue)); 
    }
});

// 250 - второе числа

var currentNumberKids = $('.study-amount-kids').text();
$({numberValue: currentNumberKids}).animate({numberValue: 256}, {
    duration: 1000,
    easing: 'linear',
    step: function() { 
        $('.study-amount-kids').text(Math.ceil(this.numberValue)); 
    }
});



onClickBtn = (e) => {
    console.log(e);
}

btnModal.addEventListener("click", onClickBtn)