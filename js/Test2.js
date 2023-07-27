fetch('log.json')
.then(response => response.json())
.then(json => {
    json.users.forEach( user => {
        if (user.accountDateCreation == "25/07/23"){
            console.log('VIP: '+ user.name+', ID: '+ user.id);
        }
        else {
            console.log(user.name+', ID: '+user.id)
        }
    })
})