function addWoodQuantity (chairQuantity, tableQuantity, bedquantity){
    const perChairWood = 5;
    const perTableWood = 8;
    const perBedWood = 10;
    // wood mumtiplication
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedquantity * perBedWood;
    // total wood
    const totalWoodQuantity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWoodQuantity;
}
const firstProject = addWoodQuantity (4, 2, 2);
console.log(firstProject);