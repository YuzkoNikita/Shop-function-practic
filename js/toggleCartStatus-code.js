// Код по памяти
function toggleCartStatus() {
    const orderForm = document.getElementById('order-form');
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const cartWrapper = document.querySelector('.cart-wrapper');

    if (cartWrapper.children.length > 0) {
        cartEmpty.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        cartEmpty.classList.remove('none');
        orderForm.classList.remove('none');
    };
};