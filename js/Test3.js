fetch("users.json")
.then(res => {
    if (res.ok) {
        console.log('Yeahhh')
    }
    else{
        console.log('Error')
    }
})
.then(data => {
    let Info = data[0];
    console.log(Info)
})
.catch(error => console.log(error))