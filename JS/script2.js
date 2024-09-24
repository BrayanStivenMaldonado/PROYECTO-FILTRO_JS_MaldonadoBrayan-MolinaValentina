const api="https://api.spacexdata.com/v4/rockets"

const titulo=document.querySelector('.tituloVehiculo')
const contentIzq=document.querySelector('.contentIzq')
const porcentajesSuper=document.querySelector('.porcentajesSuper')
const imgYConection=document.querySelector('.imgYConection')
const contentDer=document.querySelector('.contentDer')
const finalInferior=document.querySelector('.finalInferior')


fetch(api)
.then(res=>res.json())
.then(rockets=>{

    rockets.forEach(cohete => {
    console.log(cohete.id);

    });

    let mostrar =0
    fetch("https://api.spacexdata.com/v4/rockets/"+rockets[0].id)
    .then(res=>res.json())
    .then(busca =>{
        console.log(busca);
        titulo.innerHTML=`
        <h3>VEHICLE OVERVIEW / ${rockets[0].name}</h3>
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
                        <div class="letraEst2"><span>Name</span><div class="estado2"><span>${busca.name}</span></div></div>
                        <div class="letraEst2"><span>Company</span><div class="estado2"><span>${busca.company}</span></div></div>
                        <div class="letraEst2"><span>Country</span><div class="estado2"><span> ${busca.country}</span></div></div>      
                        <div class="letraEst2"><span>Type</span><div class="estado2"><span> ${busca.type}</span></div></div>               
                        <div class="letraEst2"><span>Version legs</span><div class="estado2"><span> ${busca.version}</span></div></div>
                        <div class="letraEst1"><span>Success_rate_pct</span><div class="estado1"><span>${busca.success_rate_pct}</span></div></div>
                        <div class="letraEst2"><span>First_flight</span><div class="estado2"><span> ${busca.first_flight}</span></div></div>


                    </div>
                    
                    `
        porcentajesSuper.innerHTML=`
                        <div class="parcentaje1">
                            <div class="cajaA" style="--porcentaje:${busca.height.feet}">
                                <svg width="89" height="76">
                                    <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                    <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                </svg>
                                <span>${busca.height.feet}%</span>
                            </div>
                            <div class="cajaA" style="--porcentaje:${busca.diameter.feet}">
                                <svg width="89" height="76">
                                    <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                    <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                </svg>
                                <span>${busca.diameter.feet}%</span>
                            </div>
                            <div class="cajaA" style="--porcentaje:${busca.second_stage.thrust.kN}">
                                <svg width="89" height="76">
                                    <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                    <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                </svg>
                                <span>${busca.second_stage.thrust.kN}%</span>
                            </div>
                            <div class="cajaA" style="--porcentaje:${busca.success_rate_pct}">
                                <svg width="89" height="76">
                                    <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                    <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                </svg>
                                <span>${busca.success_rate_pct}%</span>
                            </div>
                        </div>
                        <div class="porcentaje2">
                            <div class="cajaIzq">
                                <div class="cajaB" style="--porcentaje:${busca.height.meters}">
                                    <svg width="89" height="76">
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                    </svg>
                                    <span class="letra1">${busca.height.meters}%</span>
                                </div>
                                <div class="cajaB"style="--porcentaje:${busca.diameter.meters}">
                                    <svg width="89" height="76">
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                    </svg>
                                    <span class="letra1">${busca.diameter.meters}%</span>
                                </div>
                            </div>
                            <div class="cajaDer">
                                <div class="cajaB" style="--porcentaje:${busca.first_stage.fuel_amount_tons}">
                                    <svg width="89" height="76">
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                    </svg>
                                    <span class="letra1">${busca.first_stage.fuel_amount_tons}%</span>
                                </div>
                                <div class="cajaB" style="--porcentaje:${busca.second_stage.payloads.composite_fairing.height.meters}">
                                    <svg width="89" height="76">
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                        <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                    </svg>
                                    <span class="letra1">${busca.second_stage.payloads.composite_fairing.height.meters}%</span>
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
                                    <div class="bloque2Conex"><p>Manual Rigs</p></div>   
                                    <div class="bloque3Conex"><p>Changelog</p></div>   
                                    <div class="bloque3Conex"><p>Airlock</p></div>   
                                    <div class="bloque5Conex"><p>Wing</p></div>  
                                </div>
                                <div class="estadoConex">
                                    <p class="estadoConex2">Connected</p>
                                    <p class="estadoConex3">Connected</p>
                                    <p class="estadoConex4">Connected</p>
                                    <p class="estadoConex5">Connected</p>
                                </div>
                            </div>
                        </div>
                        <div class="imagen">
                            <img src="" alt="">
                        </div>
                        `
        contentDer.innerHTML=`
                    <div class="lineaPorcentaje">
                        <span>HTML</span>
                        <div class="barraPorcen">
                            <div class="barra" style="--barra:${busca.second_stage.payloads.composite_fairing.height.feet}%"></div>
                            <p>${busca.second_stage.payloads.composite_fairing.height.feet}%</p>
                        </div>
                    </div>
                    <div class="lineaPorcentaje">
                        <span>HTML</span>
                        <div class="barraPorcen">
                            <div class="barra" style="--barra:${busca.second_stage.payloads.composite_fairing.diameter.meters}%"></div>
                            <p>${busca.second_stage.payloads.composite_fairing.diameter.meters}%</p>
                        </div>
                    </div>                
                    <div class="lineaPorcentaje">                
                        <div class="lineaPorcentaje">
                            <span>HTML</span>
                            <div class="barraPorcen">
                                <div class="barra" style="--barra:${busca.second_stage.payloads.composite_fairing.diameter.feet}%"></div>
                                <p>${busca.second_stage.payloads.composite_fairing.diameter.feet}%</p>
                            </div>
                        </div>
                    </div>
                    <div class="lineaPorcentaje">
                        <span>HTML</span>
                        <div class="barraPorcen">
                            <div class="barra" style="--barra:${busca.second_stage.fuel_amount_tons}%"></div>
                            <p>${busca.second_stage.fuel_amount_tons}%</p>
                        </div>
                    </div>
                    <div class="lineaPorcentaje">
                        <span>HTML</span>
                        <div class="barraPorcen">
                            <div class="barra" style="--barra:${busca.engines.thrust_to_weight}%"></div>
                            <p>${busca.engines.thrust_to_weight}%</p>
                        </div>
                    </div>
                    <div class="lineaPorcentaje">
                        <span>HTML</span>
                        <div class="barraPorcen">
                            <div class="barra" style="--barra:${busca.success_rate_pct}%"></div>
                            <p>${busca.success_rate_pct}%</p>
                        </div>
                    </div>
                    <div class="lineaPorcentaje">
                        <span>HTML</span>
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
    })
    

})

