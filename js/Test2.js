let _set = new Set();
fetch('log.json')
.then(reponse => reponse.json())
.then(json => {
    json.users.forEach(user => {
        _set.add(user.name);
    })
});

console.log(_set);