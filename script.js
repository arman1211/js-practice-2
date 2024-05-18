const handleProduct = () => {
    fetch("https://fakestoreapi.com/products/")
    .then(res => res.json())
    .then(data => showProduct(data))
}

handleProduct()

const showProduct = (products) =>{
    const productsContainer = document.getElementById("products-container");
    
    products.forEach(product => {
        // console.log(product);
        const div = document.createElement("div")
        div.className = "product align-items-center p-5";
        div.innerHTML =
         `
            <div class="image-section">
                <img class="img-fluid h-75 w-100" src=${product.image} alt="">
            </div>
            <div class="product-description">
                <h2>${product.title}</h2>
                <p>price: ${product.price}</p>
                <button onclick = "handleAddToCart(${product.id})">Add to cart</button>
            </div>
         
         `;
        productsContainer.appendChild(div)
    });
    
}


const handleAddToCart = (id) => {
    
    const cartContainer = document.querySelector(".cart-container")
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const priceTag = document.getElementById("price");
        const totalTag = document.getElementById("total");
        const itemTag = document.getElementById("items");
        const pdprice = parseInt(data.price)
        let totalPrice = parseInt(totalTag.innerText);
        let itemCnt = parseInt(itemTag.innerText);
        priceTag.innerText = pdprice;
        totalPrice += pdprice;
        totalTag.innerText = totalPrice
        itemTag.innerText = itemCnt+1
    })
}