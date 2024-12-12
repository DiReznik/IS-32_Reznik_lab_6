
function getProductDetails(productId, successCallback, errorCallback) {
    const products = [
        { id: 1, name: 'Кофта', price: 1600 },
        { id: 2, name: 'Кросівки', price: 2000 },
        { id: 3, name: 'Сумка', price: 600 }
    ];

    setTimeout(() => {
        const product = products[productId-1];
        if (product) {
            successCallback(product);
        } else {
            errorCallback("Product not found");
        }
    }, 1000);
}

const onSuccess = (product) => {
    console.log('Product details:', product);
};

const onError = (error) => {
    console.error('Error:', error);
};

let productId = prompt('Enter product id');

getProductDetails(productId, onSuccess, onError);
