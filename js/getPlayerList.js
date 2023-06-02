export default function getPlayerList(){

    const url = 'https://openapi.vnnox.com/v1/player/getPlayerList';
    
    const token = sessionStorage.getItem('token');

    const options = {
        method: 'GET',
        headers: {
            token: `${token}`,
            username: 'megamidia'
        }
    }

    fetch(url, options).then(r => r.json()).then(r => {            
        const playerInfo = r.data.rows;
        playerInfo.forEach(player => {
            console.log(player)
            createPlayer(player);
        });
    }).catch(err =>{
        console.log(err.message);
    });

    
}

function createPlayer(player){
    console.log(player.playerId)

    const tr = document.createElement('tr');    
    tr.innerHTML = `<td>${player.name}</td><td>${player.ip}</td><td>${player.onlineStatus}</td>`;

    const listaPlayers = document.querySelector('table.listaPlayers tbody');
    
    listaPlayers.appendChild(tr);
}


