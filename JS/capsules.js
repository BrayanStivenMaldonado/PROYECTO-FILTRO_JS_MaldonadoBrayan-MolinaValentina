//Script para la ventana de "Capsules"
const urlCapsules = "https://api.spacexdata.com/v4/capsules"
const izq = document.querySelector(".izq")
const imgBox = document.querySelector(".imgBox")
const der = document.querySelector(".der")
const pag = document.querySelector(".paginacion")

let cohete = 0;
let len_data;

function change(){
    let nums = document.querySelectorAll("#num")
    nums.forEach(e=>{
        e.addEventListener('click',()=>{
            cohete=e.getAttribute('data-id')-1
            capsules(cohete);
        });
    });
}

function next(){
    let nums = document.querySelectorAll("#num")
    let contador = Number(nums[0].getAttribute('data-id'))
    let max = Number(nums[3].getAttribute('data-id'))
    if (max<len_data){
        for(let a=0; a<4; a++){
            contador += 1
            nums[a].setAttribute('data-id',contador)
            nums[a].innerHTML=contador
        }
    }
}

function prev(){
    let nums = document.querySelectorAll("#num")
    let contador = Number(nums[0].getAttribute('data-id'))
    let max = Number(nums[3].getAttribute('data-id'))
    if(contador>1){
        for(let a=3;a>=0;a--){
            max-=1
            nums[a].setAttribute('data-id',max);
            nums[a].innerHTML=max
        }
    }
}
let nums = document.querySelectorAll("#num")
nums.forEach(num => {
    let x = num.getAttribute('data-id')
    console.log(x)

});

function capsules(count){
    fetch(urlCapsules)
    .then(res=>res.json())
    .then(Datos =>{

        len_data = Datos.length;

        let url = 'https://api.spacexdata.com/v4/capsules/'+Datos[count].id

        fetch(url)
    .then(res => res.json())
    .then(data => {

            imgBox.innerHTML=""
            izq.innerHTML=""
            der.innerHTML=""
            izq.innerHTML = `
            <p>Reuse Count <br><span>${data.reuse_count}</span></p>
                <p>Water Landings <br><span>${data.water_landings}</span></p>
                <p>land Landings <br><span>${data.land_landings}</span></p>
                <p>last Update <br><span>${data.last_update}</span></p>
                <p>Launches <br><span>${data.launches.length}</span></p>
                <div class="patchs">
                    
                </div>
            `
            const patchs = document.querySelector(".patchs")
            data.launches.forEach(launch => {
                let launchUrl = "https://api.spacexdata.com/v4/launches/"+launch
                fetch(launchUrl)
                .then(res => res.json())
                .then(launchData =>{
                    patchs.innerHTML += `
                    <img src="${launchData.links.patch.small}">
                    `
    
                    if(launchData.links.flickr.original.length===0){
                        imgBox.innerHTML=`
                        <div class="load"></div>
                        `
                    }
                    launchData.links.flickr.original.forEach(LaunchImg =>{
                        imgBox.innerHTML += `
                            <img src="${LaunchImg}" alt="">
                        `
                    })
                })          
            });
            der.innerHTML=`
                <p>Serial <br><span>${data.serial}</span></p>
                <p>Status <br><span>${data.status}</span></p>
                <p>Type <br><span>${data.type}</span></p>
                <p>id <br><span>${data.id}</span></p>
            `
    })
    })

    
}
capsules(1)