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
    const input = document.getElementById('input');
    const list = document.getElementById('list');
    const inputValue = input.value;
    list.innerHTML = '';
    input.value = ''; 
    let results = [];
    let counters = {loop: 0, addToHTML: 0, results: 0};
    for (entry of data.entries){
        counters.loop++;
        if (inputValue.length <= entry.API.length && inputValue.toLowerCase() == entry.API.toLowerCase().slice(0, inputValue.length)) {
            results[counters.results] = `${entry.API}: ${entry.Description}`;
            counters.results++
        }
        else if (counters.loop <= data.count && counters.addToHTML < results.length) {
            list.innerHTML += `<li>${results[counters.addToHTML]}</li><br><br>`;
            counters.addToHTML++;
        }
    }
}
window.onload = FetchData;