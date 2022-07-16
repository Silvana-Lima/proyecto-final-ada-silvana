const tarjetas = document.getElementById('tarjetas')
url='http://hp-api.herokuapp.com/api/characters'

fetch(url)
.then((resp)=>resp.json())
.then((data)=>printData(data))
.catch((error)=>{return console.log(error)})

const printData = (arr)=>{
    let str='';
    for(let i =0; i<24; i++ ){
        const name = arr[i].name
        const house = arr[i].house
        const image = arr[i].image
        const patronus = arr[i].patronus
        str= str+ `
        <div class="card mi-card" style="width: 17rem;">
             <img src="${image} " class="card-img-top" alt="${name}" height="380px" >
             <div class="card-body">
                 <h5 class="card-title">${name} </h5>
                 <p class="card-text"> Casa: ${house} </p>
                 <p class="card-text"> Patronus: ${patronus} </p>
                 
             </div>
        </div>
        `
    }

    tarjetas.innerHTML = str;
}

