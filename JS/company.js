const url = "https://api.spacexdata.com/v4/company"

async function Company() {
    try{
        const response = await fetch(url);
        const Datos = await response.json()
        console.log(Datos)
    } catch(error){
        alert(error)
    }
}

Company()