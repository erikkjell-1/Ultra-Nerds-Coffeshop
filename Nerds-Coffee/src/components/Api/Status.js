const status_url = 'https://airbean.awesomo.dev/api/beans/order/{orderNr}';

async function statusApi(url) {
    
    const response = await fetch(url);
    
    let data = await response.json();
    console.log(data);
}

statusApi(status_url);

export default statusApi;