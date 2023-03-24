const menu_url = 'https://airbean.awesomo.dev/api/beans/';

async function menuApi(url) {
    
    const response = await fetch(url);
    
    let data = await response.json();
    console.log(data);
}

menuApi(menu_url);

export default menuApi;


















