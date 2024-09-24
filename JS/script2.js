const api="https://api.spacexdata.com/v4/rockets"

const titulo=document.querySelector('.tituloVehiculo')
const contentIzq=document.querySelector('.contentIzq')
const parcentaje1=document.querySelector('.parcentaje1')
const porcentaje2=document.querySelector('.porcentaje2')
fetch(api)
.then(res=>res.json())
.then(rockets=>{

    titulo.innerHTML=`
    <h3>VEHICLE OVERVIEW / VEHICLE NAME</h3>
    `
    contentIzq.innerHTML=`
    <div class="estImg">
                    <i class='bx bxs-check-circle' style='color:#ea7b15'></i>
                    <i class='bx bxs-check-circle' style='color:#ea7b15'></i>
                    <i class='bx bxs-check-circle' style='color:#ea7b15'></i>
                    <i class='bx bxs-check-circle' style='color:#ea7b15'></i>
                    <i class='bx bxs-check-circle' style='color:#ea7b15'></i>
                    <i class='bx bxs-check-circle' style='color:#ea7b15'></i>
                    <i class='bx bxs-check-circle' style='color:#ea7b15'></i>
                </div>
                <div class="estLet"></div>
    `
    parcentaje1.innerHTML=`
                        <div class="cajaA" style="--porcentaje:60">
                        <svg width="89" height="76">
                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                        </svg>
                        <span>60%</span>
                    </div>
                    <div class="cajaA" style="--porcentaje:70">
                            <svg width="89" height="76">
                                <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                            </svg>
                            <span>70%</span>
                        </div>
                    <div class="cajaA" style="--porcentaje:80">
                        <svg width="89" height="76">
                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                        </svg>
                        <span>80%</span>
                    </div>
                    <div class="cajaA" style="--porcentaje:90">
                        <svg width="89" height="76">
                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                            <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                        </svg>
                        <span>90%</span>
                    </div>
    `
    porcentaje2.innerHTML=`
                        <div class="cajaIzq">
                        <div class="cajaB" style="--porcentaje:20">
                            <svg width="89" height="76">
                                <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                            </svg>
                            <span>20%</span>
                        </div>
                        <div class="cajaB"style="--porcentaje:30">
                            <svg width="89" height="76">
                                <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                            </svg>
                            <span class="letra1">30%</span>
                        </div>
                    </div>
                    <div class="cajaDer">
                        <div class="cajaB" style="--porcentaje:40">
                            <svg width="89" height="76">
                                <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                            </svg>
                            <span class="letra1">40%</span>
                        </div>
                        <div class="cajaB" style="--porcentaje:50">
                            <svg width="89" height="76">
                                <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                                <circle r="32" cx="50%" cy="50%" pathlength="100"/>
                            </svg>
                            <span class="letra1">50%</span>
                        </div>
                    </div>
    `

   
})

