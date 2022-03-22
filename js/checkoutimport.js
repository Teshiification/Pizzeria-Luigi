CheckoutItems.forEach(item => {
    const obj = document.createElement('div');
    obj.classList.add('box');
    const content = `
    <div class="cart-item">
        <span class="fas fa-times"></span>
        <img src="images/${item.img_path}" alt="">
        <div class="content">
            <h3 id="${item.productNumber}">${item.productName}</h3>
            <div class="price">${item.price}</div>
        </div>
    </div>
    `
    obj.innerHTML = content;
    document.querySelector('.cart-items-container').appendChild(obj);
});


const obj = document.createElement('a');
obj.href = "#";
obj.classList.add('btn');
const content = `
    checkout now
`
obj.innerHTML = content;
document.querySelector('.cart-items-container').appendChild(obj);
