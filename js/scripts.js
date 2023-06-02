

    const url = 'https://megamidiagroup.com.br/playermm/data.txt';   

    const options = {
        method: 'GET'        
    }

    fetch(url, options).then(r => r.json()).then(r => {            
        const playerInfo = r;
        playerInfo.forEach(player => {
            console.log(player)
            //createPlayer(player);
        });
    }).catch(err =>{
        console.log(err.message);
    });    


function createPlayer(player){
    console.log(player.playerId)

    const tr = document.createElement('tr');    
    tr.innerHTML = `<td>${player.name}</td><td>${player.ip}</td><td>${player.onlineStatus}</td>`;

    const listaPlayers = document.querySelector('table.listaPlayers tbody');
    
    listaPlayers.appendChild(tr);
}



getPlayerList();