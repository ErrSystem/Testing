let data;
async function FetchData() {
    const APIurl = 'https://api.publicapis.org/entries';
    const options = {
    method: 'GET',
}
    try {
        const response = await fetch(APIurl, options)
        data = await response.json()
        // key detection
        window.addEventListener('keypress', event => {
            if (event.key === 'Enter'){
                addToHTML(); // returns to function
            }
        })
    }
    catch (error){
        console.error(error);
    }
}

const addToHTML = () => {
    const list = document.getElementById('list');
    const results = search();
    for (result of results){
        if (!isEven(i)){
            list =+ `<li>${result}: ${result}</li> <br><br>`;
        }
    }
}

const search = () => {
    let input = document.getElementById('input');
    let results = [];
    for (let i=0; i < data.count; i++){
        const api = data.entries[i];
        if (input.length <= api.API.length && input == api.API.slice(0, input.length)) {
            results += api.API + api.Description;
            console.log(results);
        }
        else if (i == data.count) {
            console.log(results);
            return results;
        }
    }
}

const isEven = number => {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

FetchData();