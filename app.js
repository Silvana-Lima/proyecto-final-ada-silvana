const tarjetas = document.getElementById('tarjetas')
const tarjetassly = document.getElementById('tarjetassly')
const tarjetashuf = document.getElementById('tarjetashuf')
const tarjetasrav = document.getElementById('tarjetasrav')




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
        const ancestry = arr[i].ancestry
        if(house== "Gryffindor"){




        str= str+ `
        <div class="card mi-card" style="width: 17rem;">
             <img src="${image} " class="card-img-top" alt="${name}" height="380px" >
             <div class="card-body">
                 <h5 class="card-title">${name} </h5>
                 <p class="card-text"> Casa: ${house} </p>
                 <p class="card-text"> Patronus: ${patronus} </p>
                 <p class="card-text"> Ascendencia: ${ancestry} </p>
             </div>
        </div>
        `
    }
    }

    tarjetas.innerHTML = str;
}


fetch(url)
.then((resp)=>resp.json())
.then((data)=>slytherinData(data))
.catch((error)=>{return console.log(error)})


const slytherinData = (arr)=>{
    let str='';
    for(let i =0; i<24; i++ ){
        const name = arr[i].name
        const house = arr[i].house
        const image = arr[i].image
        const patronus = arr[i].patronus
        const ancestry = arr[i].ancestry
        if(house== "Slytherin"){




        str= str+ `
        <div class="card mi-card" style="width: 17rem;">
             <img src="${image} " class="card-img-top" alt="${name}" height="380px" >
             <div class="card-body">
                 <h5 class="card-title">${name} </h5>
                 <p class="card-text"> Casa: ${house} </p>
                 <p class="card-text"> Patronus: ${patronus} </p>
                 <p class="card-text"> Ascendencia: ${ancestry} </p>
                 
             </div>
        </div>
        `
    }
    }

    tarjetassly.innerHTML = str;
}

fetch(url)
.then((resp)=>resp.json())
.then((data)=>hufflepuffData(data))
.catch((error)=>{return console.log(error)})

const hufflepuffData = (arr)=>{
    let str='';
    for(let i =0; i<24; i++ ){
        const name = arr[i].name
        const house = arr[i].house
        const image = arr[i].image
        const patronus = arr[i].patronus
        const ancestry = arr[i].ancestry
        if(house== "Hufflepuff"){




        str= str+ `
        <div class="card mi-card" style="width: 17rem;">
             <img src="${image} " class="card-img-top" alt="${name}" height="380px" >
             <div class="card-body">
                 <h5 class="card-title">${name} </h5>
                 <p class="card-text"> Casa: ${house} </p>
                 <p class="card-text"> Patronus: ${patronus} </p>
                 <p class="card-text"> Ascendencia: ${ancestry} </p>
                 
             </div>
        </div>
        `
    }
    }

    tarjetashuf.innerHTML = str;
}



fetch(url)
.then((resp)=>resp.json())
.then((data)=>ravenclawData(data))
.catch((error)=>{return console.log(error)})

const ravenclawData = (arr)=>{
    let str='';
    for(let i =0; i<24; i++ ){
        const name = arr[i].name
        const house = arr[i].house
        const image = arr[i].image
        const patronus = arr[i].patronus
        const ancestry = arr[i].ancestry
        if(house== "Ravenclaw"){




        str= str+ `
        <div class="card mi-card" style="width: 17rem;">
             <img src="${image} " class="card-img-top" alt="${name}" height="380px" >
             <div class="card-body">
                 <h5 class="card-title">${name} </h5>
                 <p class="card-text"> Casa: ${house} </p>
                 <p class="card-text"> Ascendencia: ${ancestry} </p>
                 <p class="card-text"> Patronus: ${patronus} </p>
                 
             </div>
        </div>
        `
    }
    }

    tarjetasrav.innerHTML = str;
}