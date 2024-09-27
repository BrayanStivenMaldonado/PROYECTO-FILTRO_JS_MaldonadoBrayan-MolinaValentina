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
                <a href="./index2.html">
                    <div class="image">
                        <img src="storage/rocket.svg" alt="">
                        <p>Rockets</p>
                    </div>
                </a>
                <div id="Selected" class="image">
                    <img src="storage/capsule.svg" alt="">
                    <p>Capsules</p>
                </div>
                <a href="./company.html">
                    <div class="image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style="fill: rgba(232, 44, 44, 1);transform: msFilter;"><path d="M21 7h-6a1 1 0 0 0-1 1v3h-2V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM8 6h2v2H8V6zM6 16H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V6h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm9 4h-2v-2h2v2zm0-4h-2v-2h2v2z"></path></svg>
                        <p>Company</p>
                    </div>
                </a>
                <a href="./history.html">
                    <div class="image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style="fill: rgba(232, 44, 44, 1);transform: msFilter    ;"><path d="M12 8v5h5v-2h-3V8z"></path><path d="M21.292 8.497a8.957 8.957 0 0 0-1.928-2.862 9.004 9.004 0 0 0-4.55-2.452 9.09 9.09 0 0 0-3.626 0 8.965 8.965 0 0 0-4.552 2.453 9.048 9.048 0 0 0-1.928 2.86A8.963 8.963 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 0 1 1.195-3.913 7.066 7.066 0 0 1 1.891-1.892 7.034 7.034 0 0 1 2.503-1.054 7.003 7.003 0 0 1 8.269 5.445 7.117 7.117 0 0 1 0 2.824 6.936 6.936 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 0 1-2.225 1.501 6.98 6.98 0 0 1-1.313.408 7.117 7.117 0 0 1-2.823 0 6.957 6.957 0 0 1-2.501-1.053 7.066 7.066 0 0 1-1.037-.855l-1.414 1.414A8.985 8.985 0 0 0 13 21a9.05 9.05 0 0 0 3.503-.707 9.009 9.009 0 0 0 3.959-3.26A8.968 8.968 0 0 0 22 12a8.928 8.928 0 0 0-.708-3.503z"></path></svg>
                        <p>History</p>
                    </div>
                </a>
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

