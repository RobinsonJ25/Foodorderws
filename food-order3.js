document.addEventListener('DOMContentLoaded', function() {
    const quantities = document.querySelectorAll('.quantity');
    const totalPriceElement = document.getElementById('total-price');

    quantities.forEach(quantity => {
        quantity.addEventListener('input', calculateTotal);
    });

    function calculateTotal() {
        let total = 0;
        quantities.forEach(quantity => {
            const price = parseFloat(quantity.getAttribute('data-price'));
            const count = parseInt(quantity.value);
            total += price * count;
        });
        totalPriceElement.textContent = total;
    }
});
