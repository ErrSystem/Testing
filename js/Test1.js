const fetch_JSON = source => {
    return fetch(source)
    .then(response => {
        if (!response.ok){
            throw new Error(`Error while getting response: ${response.status}`)
        }
        return response.json()
    })
    .then(Json_data => Json_data)
    .catch(error => {
        console.log(new Error(`Error while fetching data: ${error}`));
        return null;
    });
}

document.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const Json_File = 'users.json';
        const input = document.getElementById('input').value;
        const data = fetch_JSON(Json_File);
        for (user in data){
            if (user.email === input){
                console.log('Nice')
            }
            else{
                console.log('Nope');
            }
        }
    }
})