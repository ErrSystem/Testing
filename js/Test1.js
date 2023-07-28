
fetch('log.json')
.then(response => response.json())
.then(JSON_File => {
    let Obj = JSON_File.users;
    console.log(Obj);
})