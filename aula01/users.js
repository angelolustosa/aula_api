fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(`Quantidade de itens: ${json.length}`)

       /*  json.forEach(u => {
            console.log(`${u.id} - ${item.name.toUpperCase()}, ${item.username.toLowerCase()}  `);
        }); */

        json
        .filter(element => element.id % 2 === 0)
        .forEach(item => console.log(`${item.id} - ${item.name.toUpperCase()}, ${item.username.toLowerCase()}`))
    })

