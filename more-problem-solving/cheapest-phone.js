const phones = [
    {name: 'Iphone', price: 75000},
    {name: 'Samsung', price: 50000},
    {name: 'Redme', price: 40000},
    {name: 'Realme', price: 35000},
    {name: 'OnePlus', price: 60000},
    {name: 'Tecno', price: 45000}
];
function cheapestPhone (phone){
    let cheapest = phones[0];
    for (const phone of phones){
        if (phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const findPhones = cheapestPhone(phones);
console.log(findPhones);