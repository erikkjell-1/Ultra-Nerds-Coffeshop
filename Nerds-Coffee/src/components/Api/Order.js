const order_url = 'https://airbean.awesomo.dev/api/beans/order/';

async function orderApi(url) {
    
    
    const response = await fetch(url);
    
    let data = await response.json();
    console.log(data);
}

orderApi(order_url);

export default orderApi;