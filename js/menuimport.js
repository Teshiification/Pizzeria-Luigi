Menu.forEach(item => {
    const obj = document.createElement('div');
    obj.classList.add('box');
    const content = `
        <img src="images/${item.img_path}" alt="">
        <h3 id="${item.productNumber}">${item.productName}</h3>
        <div class="price">${item.price_discounted}<span>${item.price}</span></div>
        <a href="#" class="btn">add to cart</a>
    `

    obj.innerHTML = content;
    document.querySelector('.box-container').appendChild(obj);
});
