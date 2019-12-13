
export function fetchMerchants(){
    return fetchChallengeData('merchants');
}

export function fetchProducts(){
    return fetchChallengeData( 'products')
}

function fetchChallengeData(param) {    
    return fetch('http://localhost:8888/'+param)
    .then(response => response.json())
    .catch(err => {
        console.log(err);
    });
}



