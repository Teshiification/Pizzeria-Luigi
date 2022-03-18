const main = document.querySelector("main");

const dashboardBtn = document.querySelector("#dashboard-btn");
const ordersBtn = document.querySelector("#orders-btn");

var activeBtn;
activeBtn = dashboardBtn;

// show dashboard
dashboardBtn.addEventListener('click', () => {
    LoadDashboard();
})

// show dashboard
ordersBtn.addEventListener('click', () => {
    LoadOrders();
})

function LoadDashboard()
{
    const content = `
    <object type="text/html" data="./components/dashboard/dashboard.html" ></object>`;
    main.innerHTML = (content);
    if(activeBtn) activeBtn.classList.remove("active");
    activeBtn = dashboardBtn;
    activeBtn.classList.add("active");
}

function LoadOrders()
{
    const content = `
    <object type="text/html" data="./components/orders/orders.html" ></object>`;
    main.innerHTML = (content);
    if(activeBtn) activeBtn.classList.remove("active");
    activeBtn = ordersBtn;
    activeBtn.classList.add("active");
}
