const api="https://api.spacexdata.com/v4/history"
const contentCentro=document.querySelector('.contentCentro')
const pagMenu=document.querySelector('.pagMenu')

const imagenes=["storage/1.jpg","storage/2.jpg","storage/3.jpg","storage/4.jpg","storage/5.jpg","storage/6.jpg","storage/7.webp","storage/8.jpg","storage/9.webp","storage/10.jpeg","storage/11.jpg","storage/12.webp","storage/13.jpeg","storage/14.jpg","storage/15.avif"]

let cohete = 0;
let len_data;

function change() {
    let nums = document.querySelectorAll("#num");
    nums.forEach((e) => {
        e.addEventListener("click", () => {
            cohete = e.getAttribute("data-id") - 1;
            principal(cohete);
        });
    });
}

function next() {
    let nums = document.querySelectorAll("#num");
    let contador = Number(nums[0].getAttribute("data-id"));
    let max = Number(nums[3].getAttribute("data-id"));
    if (max < len_data) {
        for (let a = 0; a < 4; a++) {
            contador += 1;
            nums[a].setAttribute("data-id", contador);
            nums[a].innerHTML = contador;
        }
    }
}

function prev() {
    let nums = document.querySelectorAll("#num");
    let contador = Number(nums[0].getAttribute("data-id"));
    let max = Number(nums[3].getAttribute("data-id"));
    if (contador > 1) {
        for (let a = 3; a >= 0; a--) {
            max -= 1;
            nums[a].setAttribute("data-id", max);
            nums[a].innerHTML = max;
        }
    }
}
let nums = document.querySelectorAll("#num");
nums.forEach((num) => {
    let x = num.getAttribute("data-id");
});
function principal(count) {
fetch(api)
.then(res=>res.json())
.then(consumo=>{
    console.log(consumo)
    len_data = consumo.count
    consumo.forEach(historial => {

    });

    let unicacion=0
    fetch("https://api.spacexdata.com/v4/history/"+consumo[count].id)
    .then(res=>res.json())
    .then(historiales => {

        contentCentro.innerHTML=`
            <div class="titulo"><h2>History</h2></div>
            <div class="contentDDos">
                <div class="informacion">
                    <div class="datos">
                        <p class="nombre"><span>Name: </span>${historiales.title}</p>
                        <p class="Identificador"><span>ID: </span>${historiales.id}</p>
                        <p class="fecha_del_evento_utc"><span>Date of event UTC: </span>${historiales.event_date_utc}</p>
                        <p class="fecha_del_evento_unix"><span>event_date_unix: </span>${historiales.event_date_unix}</p>
                    </div>
                    <div class="detalles">
                        <p class="datail"><span>Datails: </span>${historiales.details}</p>
                        <div class="articulo"><a  href="${historiales.links.article}"> articulo extra de evento</a></div>
                        
                    </div>
                </div>
                <div class="imagenes">
                    <img src="${imagenes[count]}" alt="">
                </div>
            </div>
            `
        pagMenu.innerHTML=`            
            <div class="Pie">    
                <div class="icons">
                    <div id="Selected" class="image">
                        <img src="storage/rocket.svg" alt="">
                        <p>Rockets</p>
                    </div>
                    <div class="image">
                        <img src="storage/capsule.svg" alt="">
                        <p>Capsules</p>
                    </div>
                    <div class="image">
                        <img src="storage/capsule.svg" alt="">
                        <p>Capsules</p>
                    </div>
                    <div class="image">
                        <img src="storage/capsule.svg" alt="">
                        <p>Capsules</p>
                    </div>
                </div>
            </div>
            <div class="stylesFinal"></div>
            <div class="paginacion">
                <button class="btn_" id="Prev" onclick="prev()"><</button>
                <button id="num" data-id="1" onmouseover="change()">1</button>
                <button id="num" data-id="2" onmouseover="change()">2</button>
                <button id="num" data-id="3" onmouseover="change()">3</button>
                <button id="num" data-id="4" onmouseover="change()">4</button>
                <button class="btn_1" id="Next" onclick="next()">></button>
            </div>
            `
    })
})
}
principal(0)

