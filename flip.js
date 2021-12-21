var url="https://api.imgflip.com/get_memes";
document.body.innerHTML=`<div class="body">
<div class="head"><h1>Memes</h1></div>
<button class="res" onclick="getAll()">GET MEMES</button>
</div>
`;

//Displays all the memes
function getAll(){    
    var area=document.querySelector('.res');
    area.innerHTML="";
    fetch(url)
    .then(data=>data.json())
    .then(result=>{
result.data.memes.forEach(ele=>{
    area.innerHTML+=`<div class="finalresult">
    <h3>${ele.name}</h3>
    <img src="${ele.url}" width="200px" height="200px"/>
    </div>`;
})
    }).catch(error=>{
        area.innerHTML+=`   
        There is an error: ${error}
        `;
    })
}

