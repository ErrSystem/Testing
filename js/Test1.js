const JSON_file = 'users.json';

let fetch_Json = () => {
    fetch(JSON_file)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response isnt ok: ${response.status}`)
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(`Error fetching data: ${error}`))
}

window.onload = () => fetch_Json();