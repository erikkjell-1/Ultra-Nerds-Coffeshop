const api_url = 'https://airbean.awesomo.dev/api/beans/';

async function getApi(url) {
    
    const response = await fetch(url);
    
    let data = await response.json();
    console.log(data);
}

getApi(api_url);

export default getApi;

















