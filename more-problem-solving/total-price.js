const items = [
    {name: 'phone', price: 75000},
    {name: 'shirt', price: 50000},
    {name: 'watch', price: 40000},
    {name: 'laptop', price: 35000},
];
function totalPrice (product){
    let totalBuy = 0;
    for (const product of items){
        const totalProduct = totalBuy + product.price;
        totalBuy = totalProduct;
    }
    return totalBuy;
}
const shopping = totalPrice(items);
console.log(shopping);


const cart = [
    {name: 'phone', price: 75000, quantity: 1},
    {name: 'shirt', price: 50000, quantity: 4},
    {name: 'watch', price: 40000, quantity: 2},
    {name: 'laptop', price: 35000, quantity: 1},
];
function totalCost (products){
    let cost = 0;
    for (const item of cart){
        const totalItem = item.price * item.quantity;
        const totalCostItem = totalItem + cost;
        cost = totalCostItem;
    }
    return cost;
}
const myItems = totalCost(cart);
console.log(myItems);