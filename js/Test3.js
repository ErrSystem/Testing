let email = 'laurent@gmail.com';

fetch('log.json')
.then(response => response.json())
.then(JSON_File => {
    if (find_system(JSON_File.users)){
        console.log('yeah')
    }
})

let find_system = value => {
    for (Obj of value) {
        if (Obj.email == email) {
            return true
        }
        else{
            console.log('nope')
        }
    }
}