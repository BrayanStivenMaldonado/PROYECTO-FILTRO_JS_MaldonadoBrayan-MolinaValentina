const api="https://api.spacexdata.com/v4/history"

fetch(api)
.then(res=>res.json())
.then(consumo=>{
    console.log(consumo)
})