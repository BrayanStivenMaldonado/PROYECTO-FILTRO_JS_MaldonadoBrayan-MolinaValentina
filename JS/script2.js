const api="https://api.spacexdata.com/v4/rockets"

const titulo=document.querySelector('.tituloVehiculo')
const contentIzq=document.querySelector('.contentIzq')
const porcentajesSuper=document.querySelector('.porcentajesSuper')
const imgYConection=document.querySelector('.imgYConection')
const contentDer=document.querySelector('.contentDer')
const finalInferior=document.querySelector('.finalInferior')
const SuperRespon=document.querySelector('.SuperRespon')

const imagenes = [
    {
        "link" : [
            "./storage/rockets1.jpg",
            "./storage/rockets2.jpg",
        ]
    },{
        "link" : [
            "./storage/rockets3.svg",
            "./storage/rockets4.jpg",
            "./storage/rockets5.jpg",
            "./storage/rockets6.jpg",
            "./storage/rockets7.jpg",
            "./storage/rockets8.jpg"
        ]
    },{
        "link" : [
            "./storage/rockets9.jpg",
            "./storage/rockets10.jpg",
            "./storage/rockets11.jpg",
            "./storage/rockets12.jpg"
        ]
    },{
        "link" : [
           " ./storage/rockets13.jpg",
            "./storage/rockets14.jpg",
            "./storage/rockets15.jpg",
            "./storage/rockets16.jpg"
        ]
    }
]


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

function principal(count){
    fetch(api)
    .then(res=>res.json())
    .then(rockets=>{
    
        rockets.forEach(cohete => {
    
        });
    
        let mostrar =0
        fetch("https://api.spacexdata.com/v4/rockets/"+rockets[count].id)
        .then(res=>res.json())
        .then(busca =>{
            
            titulo.innerHTML=`
            <h3>VEHICLE OVERVIEW</h3>
            `
            contentIzq.innerHTML=`
                        <div class="estImg">
                            <i class='bx bxs-check-circle' style='color:#ffffff'></i>
                            <i class='bx bxs-check-circle' style='color:#ffffff'></i>
                            <i class='bx bxs-check-circle' style='color:#ffffff'></i>
                            <i class='bx bxs-check-circle' style='color:#ffffff'></i>
                            <i class='bx bxs-check-circle' style='color:#ffffff'></i>
                            <i class='bx bxs-check-circle' style='color:#ffffff'></i>
                            <i class='bx bxs-check-circle' style='color:#ffffff'></i>
                        </div>
                        <div class="estLet">
                            <div class="letraEst1"><span>Name</span><div class="estado2"><span class="letraEstA1">${busca.name}</span></div></div>
                            <div class="letraEst2"><span>Company</span><div class="estado2"><span class="letraEstA1" >${busca.company}</span></div></div>
                            <div class="letraEst3"><span>Country</span><div class="estado2"><span class="letraEstA1"> ${busca.country}</span></div></div>      
                            <div class="letraEst4"><span>Type</span><div class="estado2"><span class="letraEstA1"> ${busca.type}</span></div></div>               
                            <div class="letraEst5"><span>Version legs</span><div class="estado2"><span class="letraEstA1"> ${busca.version}</span></div></div>
                            <div class="letraEst6"><span>Success_rate_pct</span><div class="estado1"><span class="letraEstA1">${busca.success_rate_pct}</span></div></div>
                            <div class="letraEst7"><span>First_flight</span><div class="estado2"><span class="letraEstA1"> ${busca.first_flight}</span></div></div>
    
    
                        </div>
                        
                        `
            SuperRespon.innerHTML=`                    <div class="bloqueRespo1">
    
                            <div class="estImgRespon">
                                <i class='bx bxs-check-circle' style='color:#ffffff'></i>
                                <i class='bx bxs-check-circle' style='color:#ffffff'></i>
                                <i class='bx bxs-check-circle' style='color:#ffffff'></i>
    
                            </div>
                            <div class="estLetRespon">
                                <div class="letraEstR1"><span>Name</span><div class="estado2"><span>${busca.name}</span></div></div>
                                <div class="letraEstR2"><span>Company</span><div class="estado2"><span>${busca.company}</span></div></div>
                                <div class="letraEstR3"><span>Country</span><div class="estado2"><span> ${busca.country}</span></div></div>      
                            </div>
                        </div>
                        <div class="bloqueRespo2">
                            <div class="estImgRespon">
                                <i class='bx bxs-check-circle' style='color:#ffffff'></i>
                                <i class='bx bxs-check-circle' style='color:#ffffff'></i>
                                <i class='bx bxs-check-circle' style='color:#ffffff'></i>
                            </div>
                            <div class="estLetRespon">
                                <div class="letraEstR4"><span>Type</span><div class="estado2"><span> ${busca.type}</span></div></div>               
                                <div class="letraEstR5"><span>Version legs</span><div class="estado2"><span> ${busca.version}</span></div></div>
                                <div class="letraEstR7"><span>First_flight</span><div class="estado2"><span> ${busca.first_flight}</span></div></div>
                            </div>
                        </div>`
            porcentajesSuper.innerHTML=`
                            <div class="parcentaje1">
                                <div class="cajaA" style="--porcentaje:${busca.height.feet}">
                                    <svg width="89" height="76">
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                    </svg> 
                                    <span>feet <br>${busca.height.feet}%</span>
                                </div>
                                <div class="cajaA" style="--porcentaje:${busca.diameter.feet}">
                                    <svg width="89" height="76">
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                    </svg>
                                    <span>feet <br>${busca.diameter.feet}%</span>
                                </div>
                                <div class="cajaA" style="--porcentaje:${busca.second_stage.thrust.kN}">
                                    <svg width="89" height="76">
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                    </svg>
                                    <span>kN <br>${busca.second_stage.thrust.kN}%</span>
                                </div>
                                <div class="cajaA" style="--porcentaje:${busca.success_rate_pct}">
                                    <svg width="89" height="76">
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                    </svg>
                                    <span>PCT <br>${busca.success_rate_pct}%</span>
                                </div>
                            </div>
                            <div class="porcentaje2">
                                <div class="cajaIzq">
                                    <div class="cajaB" style="--porcentaje:${busca.height.meters}">
                                        <svg width="89" height="76">
                                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                        </svg>
                                        <span class="letra1">meters<br>${busca.height.meters}%</span>
                                    </div>
                                    <div class="cajaB"style="--porcentaje:${busca.diameter.meters}">
                                        <svg width="89" height="76">
                                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                        </svg>
                                        <span class="letra1">meters<br>${busca.diameter.meters}%</span>
                                    </div>
                                </div>
                                <div class="cajaDer">
                                    <div class="cajaB" style="--porcentaje:${busca.first_stage.fuel_amount_tons}">
                                        <svg width="89" height="76">
                                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                        </svg>
                                        <span class="letra1">tons<br>${busca.first_stage.fuel_amount_tons}%</span>
                                    </div>
                                    <div class="cajaB" style="--porcentaje:${busca.second_stage.payloads.composite_fairing.height.meters}">
                                        <svg width="89" height="76">
                                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                        </svg>
                                        <span class="letra1">meters<br>${busca.second_stage.payloads.composite_fairing.height.meters}%</span>
                                    </div>
                                </div>
                            </div>
                            `
            imgYConection.innerHTML=`
                            <div class="connections">
                                <div class="bloque1Conex"><p>CONNECTIONS</p></div>
                                <HR color="#9499c3"></HR>
                                <div class="dato1sConnctions">
                                    <div class="nombreConex">
                                        <div class="bloque2Conex"><p>Reusable</p></div>   
                                        <div class="bloque3Conex"><p>Engines</p></div>   
                                        <div class="bloque3Conex"><p>Fuel amount tons</p></div>   
                                        <div class="bloque5Conex"><p>Burn time sec</p></div>  
                                    </div>
                                    <div class="estadoConex">
                                        <p class="estadoConex2">${busca.second_stage.reusable}</p>
                                        <p class="estadoConex3">${busca.second_stage.engines}</p>
                                        <p class="estadoConex4">${busca.second_stage.fuel_amount_tons}</p>
                                        <p class="estadoConex5">${busca.second_stage.burn_time_sec}</p>
                                    </div>
                                </div>
                                <div class="imagen"></div>
                            </div>
                            `
            contentDer.innerHTML=`
                        <div class="lineaPorcentaje">
                            <span>Height feet</span>
                            <div class="barraPorcen">
                                <div class="barra" style="--barra:${busca.second_stage.payloads.composite_fairing.height.feet}%"></div>
                                <p>${busca.second_stage.payloads.composite_fairing.height.feet}%</p>
                            </div>
                        </div>
                        <div class="lineaPorcentaje">
                            <span>Diameter meters</span>
                            <div class="barraPorcen">
                                <div class="barra" style="--barra:${busca.second_stage.payloads.composite_fairing.diameter.meters}%"></div>
                                <p>${busca.second_stage.payloads.composite_fairing.diameter.meters}%</p>
                            </div>
                        </div>                
                        <div class="lineaPorcentaje">                
                            <div class="lineaPorcentaje">
                                <span>Diameter feet</span>
                                <div class="barraPorcen">
                                    <div class="barra" style="--barra:${busca.second_stage.payloads.composite_fairing.diameter.feet}%"></div>
                                    <p>${busca.second_stage.payloads.composite_fairing.diameter.feet}%</p>
                                </div>
                            </div>
                        </div>
                        <div class="lineaPorcentaje">
                            <span>Fuel amount tons</span>
                            <div class="barraPorcen">
                                <div class="barra" style="--barra:${busca.second_stage.fuel_amount_tons}%"></div>
                                <p>${busca.second_stage.fuel_amount_tons}%</p>
                            </div>
                        </div>
                        <div class="lineaPorcentaje">
                            <span>Thrust to weight</span>
                            <div class="barraPorcen">
                                <div class="barra" style="--barra:${busca.engines.thrust_to_weight}%"></div>
                                <p>${busca.engines.thrust_to_weight}%</p>
                            </div>
                        </div>
                        <div class="lineaPorcentaje">
                            <span>Success rate pct</span>
                            <div class="barraPorcen">
                                <div class="barra" style="--barra:${busca.success_rate_pct}%"></div>
                                <p>${busca.success_rate_pct}%</p>
                            </div>
                        </div>
                        <div class="lineaPorcentaje">
                            <span>First stage</span>
                            <div class="barraPorcen">
                                <div class="barra" style="--barra:${busca.first_stage.fuel_amount_tons}%"></div>
                                <p>${busca.first_stage.fuel_amount_tons}%</p>
                            </div>
                        </div>
                        `
            finalInferior.innerHTML=`
                    <div class="contentInf">    
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
                    const imagen=document.querySelector('.imagen')

                    imagenes[count].link.forEach(foto => {
                        imagen.innerHTML+=`
                        <img class="imagenRock" src="${foto}">
                        `
                    });

        
        })

    
    })
    
}
principal(0)