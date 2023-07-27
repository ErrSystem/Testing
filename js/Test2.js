fetch('log.json')
.then(reponse => reponse.json())
.then(json => {
    let _set = new Set(json.users.at(0, json.users.length - 1));
    json.users.every(_set.add())
    _set.forEach(console.log(_set.name))
});