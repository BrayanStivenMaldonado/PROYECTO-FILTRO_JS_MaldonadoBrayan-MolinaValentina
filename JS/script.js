const url = "https://api.spacexdata.com/v4/rockets"

fetch(url)
.then(res => res.json())
.then(data =>{
    console.log(data)
})