fetch('users.json')
.then(response => {
    if (response.ok) {
        console.log('Success');
    }
    else {
        console.log('Error')
    }
})
.then(data => console.log(data))
.catch(error => console.log(error))