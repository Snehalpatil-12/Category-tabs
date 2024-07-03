console.log('====================================');
console.log("Connected");
console.log('====================================');


document.addEventListener("DOMContentLoaded", function() {
    const product = {
        "id": 6937548554342,
        "vendor": "Marmeto",
        "title": "Embrace Sideboard",
        "description": "<p data-mce-fragment=\"1\">The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and look great, this storage solution is both functional and attractive. It fits seamlessly into any home decor, with clean lines and a timeless look. Crafted from premium materials for a combination of style, durability, and reliability.</p>",
       
        "product_type": "Cloth",
        "price": "$12999",
        "compare_at_price": "$19999",
        "options": [
            {
                "name": "Color",
                "position": 1,
                "values": [
                    {
                        "Yellow": "#ECDECC"
                    },
                    {
                        "Green": "#BBD278"
                    },
                    {
                        "Blue": "#BBC1F8"
                    },
                    {
                        "Pink": "#FFD3F8"
                    }
                ]
            },
            {
                "name": "Size",
                "position": 2,
                "values": [
                    "Small",
                    "Medium",
                    "Large",
                    "Extra large",
                    "XXL"
                ]
            }
        ]
    };

    // Populate product details
    document.getElementById('product-title').innerText = product.title;
    document.getElementById('product-vendor').innerText = product.vendor;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-compare-price').innerText = product.compare_at_price;
    document.getElementById('product-description').innerHTML = product.description;

    // Calculate discount percentage
    const price = parseFloat(product.price.replace('$', ''));
    const compareAtPrice = parseFloat(product.compare_at_price.replace('$', ''));
    const discountPercentage = Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
    document.getElementById('product-discount').innerText = `${discountPercentage}% Off`;

    // Populate color options
    const colorOptions = product.options.find(option => option.name === "Color").values;
    const colorContainer = document.getElementById('color-options');
    colorOptions.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color');
        colorDiv.style.backgroundColor = Object.values(color)[0];
        colorDiv.dataset.color = Object.keys(color)[0];
        colorContainer.appendChild(colorDiv);
    });

    // Populate size options
    const sizeOptions = product.options.find(option => option.name === "Size").values;
    const sizeContainer = document.getElementById('size-options');
    sizeOptions.forEach(size => {
        const sizeButton = document.createElement('button');
        sizeButton.classList.add('size');
        sizeButton.innerText = size;
        sizeButton.dataset.size = size;
        sizeContainer.appendChild(sizeButton);
    });

    // Add to cart functionality
    document.getElementById('add-to-cart').addEventListener('click', function() {
        const selectedColor = document.querySelector('.color.selected');
        const selectedSize = document.querySelector('.size.selected');
        const quantity = document.getElementById('quantity').value;

        if (selectedColor && selectedSize && quantity > 0) {
            const addedProduct = {
                id: product.id,
                title: product.title,
                color: selectedColor.dataset.color,
                size: selectedSize.dataset.size,
                quantity: quantity
            };
            console.log('Product added to cart:', addedProduct);
            document.getElementById('add-to-cart-message').style.display = 'block';
            setTimeout(() => {
                document.getElementById('add-to-cart-message').style.display = 'none';
            }, 3000);
        } else {
            alert('Please select color, size, and quantity.');
        }
    });

    // Select color
    document.getElementById('color-options').addEventListener('click', function(event) {
        if (event.target.classList.contains('color')) {
            document.querySelectorAll('.color').forEach(el => el.classList.remove('selected'));
            event.target.classList.add('selected');
        }
    });

    // Select size
    document.getElementById('size-options').addEventListener('click', function(event) {
        if (event.target.classList.contains('size')) {
            document.querySelectorAll('.size').forEach(el => el.classList.remove('selected'));
            event.target.classList.add('selected');
        }
    });
});
