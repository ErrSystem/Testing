let input = '';
let Output = '';

document.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        input = document.getElementById('input').value; // Gets the input's value
        // the 3 next lines are used to get info from JSON file 
        fetch('log.json')
        .then(response => response.json())
        .then(json => {
            json.users.forEach(user => {  // for each user do:
                if (input == user.email) { // if the input's value == email from any existing account do:
                    Output = "The name of this user is "+user.name+" his ID is "+user.id+" and he signed to this website the "+user.accountDateCreation; // text that will be written
                }
                else {
                    console.log('nope');
                }
            });
        });
        document.getElementById('input').value = '';
        document.getElementById('Output').innerHTML = Output;
    }
})