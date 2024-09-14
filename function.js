
        function showFilterAlert() {
            alert('Filter functionality coming soon!');
        }

        function showSortAlert() {
            alert('Sort functionality coming soon!');
        }

        function filterProducts() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const productCards = document.querySelectorAll('#productGrid .card');

            productCards.forEach(function(card) {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                if (title.includes(input)) {
                    card.parentElement.style.display = 'block';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        }