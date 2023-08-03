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
                search(); // returns to function
            }
        })
    }
    catch (error){
        console.error(error);
    }
}
const search = () => {
    const input = document.getElementById('input').value;
    const list = document.getElementById('list');
    let results = [];
    let counters = {
        loop: 0,
        even: 0,
        results: 0,
    };
    for (entry of data.entries){
        counters.loop++;
        if (input.length <= entry.API.length && input.toUpperCase() == entry.API.toUpperCase().slice(0, input.length)) {
            results[counters.results] = `${entry.API}: ${entry.Description}`;
            counters.results++
            console.log(results);
        }
        else if (counters.loop <= data.count) {
            for (result of results){
                if (!isEven(counters.even)){
                    list =+ `<li>${result}</li> <br><br>`;
                }
            }
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