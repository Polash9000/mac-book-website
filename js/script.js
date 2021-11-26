/* Memory */

// Base Memory without any cost
document.getElementById('base-memory').addEventListener('click', function () {
    document.getElementById('extra-memory').disabled = false;
    const baseMemoryCost = document.getElementById('extra-memory-cost');
    const baseMemoryCostText = baseMemoryCost.innerText;
    baseMemoryCost.innerText = 180;
    const baseMemoryCostAmount = parseInt(baseMemoryCost.innerText);
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseInt(totalPrice.innerText);
    let inTotalPriceAmount = totalPriceAmount - baseMemoryCostAmount;
    totalPrice.innerText = inTotalPriceAmount;
    baseMemoryCost.innerText = 0;
    document.getElementById('base-memory').disabled = true;
});

// Extra Memory with extra memory cost
document.getElementById('base-memory').disabled = true;
document.getElementById('extra-memory').addEventListener('click', function () {
    document.getElementById('base-memory').disabled = false;
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCostText = extraMemoryCost.innerText;
    extraMemoryCost.innerText = 180;
    extraMemoryCostAmount = parseInt(extraMemoryCost.innerText);
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    // totalPrice.innerText = 1299;
    const totalPriceAmount = parseInt(totalPrice.innerText);
    let inTotalPriceAmount = extraMemoryCostAmount + totalPriceAmount;
    totalPrice.innerText = inTotalPriceAmount;
    document.getElementById('extra-memory').disabled = true;
});

/* Storage */

// Base Storage without any extra cost
document.getElementById('base-storage').addEventListener('click', function () {
    document.getElementById('medium-storage').disabled = false;
    document.getElementById('high-storage').disabled = false;
    const baseStorageCost = document.getElementById('extra-storage-cost');
    const baseStorageCostText = baseStorageCost.innerText;
    const baseStorageCostAmount = parseInt(baseStorageCost.innerText);
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseInt(totalPrice.innerText);
    let inTotalPriceAmount = totalPriceAmount - baseStorageCostAmount;
    totalPrice.innerText = inTotalPriceAmount;
    baseStorageCost.innerText = 0;
    document.getElementById('base-memory').disabled = true;
});

// Medium Storage with extra storage cost
document.getElementById('base-storage').disabled = true;
document.getElementById('medium-storage').addEventListener('click', function () {
    document.getElementById('base-storage').disabled = false;
    document.getElementById('high-storage').disabled = false;
    const mediumStorageCost = document.getElementById('extra-storage-cost');
    const mediumStorageCostText = mediumStorageCost.innerText;
    mediumStorageCost.innerText = 100;
    const mediumStorageCostAmount = parseInt(mediumStorageCost.innerText);
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    // totalPrice.innerText = 1299;
    const totalPriceAmount = parseInt(totalPrice.innerText);
    let inTotalPriceAmount = mediumStorageCostAmount + totalPriceAmount;
    totalPrice.innerText = inTotalPriceAmount;
    document.getElementById('medium-storage').disabled = true;
})

// High Storage with extra storage cost
document.getElementById('base-storage').disabled = true;
document.getElementById('high-storage').addEventListener('click', function () {
    document.getElementById('base-storage').disabled = false;
    document.getElementById('medium-storage').disabled = false;
    const highStorageCost = document.getElementById('extra-storage-cost');
    const highStorageCostText = highStorageCost.innerText;
    highStorageCost.innerText = 180;
    const highStorageCostAmount = parseInt(highStorageCost.innerText);
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseInt(totalPrice.innerText);
    let inTotalPriceAmount = highStorageCostAmount + totalPriceAmount;
    totalPrice.innerText = inTotalPriceAmount;
    document.getElementById('high-storage').disabled = true;
});

/* Delivery Option */

// Base Delivery without any delivery cost
document.getElementById('base-delivery').disabled = true;
document.getElementById('delivery-cost').addEventListener('click', function () {
    document.getElementById('base-delivery').disabled = false;
    const deliveryCost = document.getElementById('delivery-charge');
    const deliveryCostText = deliveryCost.innerText;
    deliveryCost.innerText = 20;
    const deliveryCostAmount = parseInt(deliveryCost.innerText);
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseInt(totalPrice.innerText);
    let inTotalPriceAmount = deliveryCostAmount + totalPriceAmount;
    totalPrice.innerText = inTotalPriceAmount;
    document.getElementById('delivery-cost').disabled = true;
});

// Urgent Delivery with delivery cost
document.getElementById('base-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').disabled = false;
    const baseDelivery = document.getElementById('delivery-charge');
    const baseDeliveryText = baseDelivery.innerText;
    const baseDeliveryAmount = parseInt(baseDelivery.innerText);
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseInt(totalPrice.innerText);
    let inTotalPriceAmount = totalPriceAmount - baseDeliveryAmount;
    totalPrice.innerText = inTotalPriceAmount;
    baseDelivery.innerText = 0;
    document.getElementById('base-delivery').disabled = true;
});
