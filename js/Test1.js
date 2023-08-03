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

function addToHTML() {
  console.log(data)
}

FetchData()