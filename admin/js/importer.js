// fill orders in table
function ImportOrders() {
    let count = 5;
    Orders.forEach(order => {
        if(count === 0) return;
        const tr = document.createElement('tr');
        const trContent = `
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${order.shipping === 'Declined'? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
            <td class="primary">Details</td>
        `

        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
        count--;
    });
}

function ImportAllOrders() {
    let count = 10;
    document.querySelector('table tbody').replaceChildren();
    Orders.forEach(order => {
        if(count === 0) return;
        const tr = document.createElement('tr');
        const trContent = `
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${order.shipping === 'Declined'? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
            <td class="primary">Details</td>
        `

        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
        count--;
    });
}
