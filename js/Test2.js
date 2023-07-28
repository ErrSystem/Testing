document.addEventListener('keypress', event => {
    if (event.key === 'Enter') { // if enter is pressed
        let Output = ''; // Output's value
        let input = document.getElementById('input').value; // input's value

        fetch('log.json') // get Json file
        .then(response => response.json()) // get response
        .then(JSON_File => { 
            if (find_system(JSON_File.users, input)){
                Output = "The name of this user is "+user.name+" his ID is "+user.id+" and he signed to this website the "+user.accountDateCreation; // what will be writed in the output
                console.log(Output); // prints Output's value (just for testing will be deleted later) 
                document.getElementById('Output').innerHTML = Output; // adds Output's variable value to the output located in HTML
                input = ''; // clears the input            
            }
        })
    }

})

let find_system = (users, email) => {
    for (user of users) {
        if (user.email == email) {
            let userInfo = [user, true];
            return userInfo;
        }
    }
}