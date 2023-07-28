document.addEventListener('keypress', event => {
    if (event.key === 'Enter') { // if enter is pressed
        let Output = ''; // Output's value
        let input = document.getElementById('input').value; // input's value

        fetch('log.json') // get Json file
        .then(response => response.json()) // get response
        .then(JSON_File => { 
            JSON_File.users.forEach(user => { // for each user in the JSON file 
                if (input == user.email) { // if the input's value = an account's email 
                    Output = "The name of this user is "+user.name+" his ID is "+user.id+" and he signed to this website the "+user.accountDateCreation; // what will be writed in the output
                    console.log(Output); // prints Output's value (just for testing will be deleted later) 
                    document.getElementById('Output').innerHTML = Output; // adds Output's variable value to the output located in HTML
                    input = ''; // clears the input
                }
            });
        })
    }
})