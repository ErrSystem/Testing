document.addEventListener('keypress', event => {
    if (event.key === 'Enter') { // if enter is pressed
        fetch('log.json') // get Json file
        .then(response => response.json()) // get response
        .then(Data => GetFromData(Data))
    }
})

let GetFromData = Data => {
    let Output = ''; // Output's value
    let input = document.getElementById('input').value; // input's value

    if (findUser(Data.users, input)){ // if findUser() returns true
        Output = "The name of this user is "+user.name+" his ID is "+user.id+" and he signed to this website the "+user.accountDateCreation; // what will be writed in the output
        console.log(Output); // prints Output's value (just for testing will be deleted later) 
        document.getElementById('Output').innerHTML = Output; // adds Output's variable value to the output located in HTML
        input = ''; // clears the input            
    }
    else if (input.includes('@') && input.includes('.')){ // if email includes "@" and "."
        alert('there is no account assigned to this email'); 
    }
    else { // if not then
        alert('Not an email');
    }
}

let findUser = (users, email) => {
    for (user of users) {
        if (user.email == email) {
            let userInfo = [user, true];
            return userInfo;
        }
    }
}