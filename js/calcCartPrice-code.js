//Код по памяти
function calcCartPriceAndDeliver() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCosts = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let totalPrice = 0;

    priceElements.forEach(function(item) {
        const ammountEl = item.closest('.cart-item').querySelector('[data-counter]');

        totalPrice += parseInt(item.innerText) * parseInt(ammountEl.innerText);
    });

    totalPriceEl.innerText = totalPrice;

    if (totalPrice > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    };

    if (totalPrice >= 600) {
        deliveryCosts.classList.add('free');
        deliveryCosts.innerText = 'free';
    } else {
        deliveryCosts.classList.remove('free');
        deliveryCosts.innerText = '10$';
    };
};