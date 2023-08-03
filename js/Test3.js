const APIurl = 'https://api-football-v1.p.rapidapi.com/v3/timezone';
const options = {
    method: 'GET',
    headers:{
        'X-RapidAPI-Key': 'e2867e76cfmsh8228189f18bddd1p1b0996jsn0f696056ff89',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
}
async function FetchData() {
    try {
        const response = await fetch(APIurl, options)
        const result = await response.text()
        console.log(result);
     }
     catch (error){
         console.error(error)
     }
}
FetchData();