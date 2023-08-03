let apiData = {};
async function FetchData() {
    const APIurl = 'https://api.publicapis.org/entries';
    const options = {
    method: 'GET',
}
    try {
        const response = await fetch(APIurl, options)
        const data = await response.json()
        console.log(data)
        ChangeHtml(data)
    }
    catch (error){
        console.error(error);
    }
}

const ChangeHtml = (data) => {
    const list = document.getElementById('list');
    for (let i=0; i < data.count; i++){
        const api = data.entries[i]
        list.innerHTML += `<li>${api.API}: ${api.Description}</li><br><br>`;
    }
}

FetchData();