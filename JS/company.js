class CrearElementos extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <img  id="Logo" src="storage/SpaceX-White-Logo.wine.svg" alt="">
        <div class="Contenido">
            <div class="Empresa">
                <img src="./storage/headquarters.avif" alt="">
                <div class="ordenar"></div>
                <div class="History"></div>
            </div>
            <div class="General">
                <h1>FEATURED</h1>
            <div class="Featured">
                
            </div>
            <section>
                <img src="https://imageio.forbes.com/specials-images/imageserve/6111aa14b976739e906c59ed/0x0.jpg?format=jpg&crop=1078,1078,x2,y2,safe&height=416&width=416&fit=bounds" alt="">
                <img src="https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg" alt="">
                <img src="https://bloximages.chicago2.vip.townnews.com/idahopress.com/content/tncms/assets/v3/editorial/f/43/f430d8c8-dd39-51f4-9443-ef13bcf311ce/614509170054f.image.jpg?resize=400%2C500" alt="">
            </section>
            <div class="Social">
                <h1>Social</h1>
                <a href="">
                    <img src="./storage/Internet.svg" alt="">
                </a>
                <a href="">
                    <img src="./storage/flickr.svg" alt="">
                </a>
                <a href="">
                    <img src="./storage/twitter-svgrepo-com.svg" alt="">
                </a>
                <a href="">
                    <img src="./storage/xLogo.svg" alt="">
                </a>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define('new-content',CrearElementos)

class CrearPie extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <div class="inf">
        <div class="Pie">    
            <div class="icons">
                <a href="./index2.html">
                    <div class="image">
                        <img src="storage/rocket.svg" alt="">
                        <p>Rockets</p>
                    </div>
                </a>
                <a href="./capsules.html">
                    <div class="image">
                        <img src="storage/capsule.svg" alt="">
                        <p>Capsules</p>
                    </div>
                </a>
                <a href="./company.html">
                    <div id="Selected" class="image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vw" viewBox="0 0 24 24" style="fill: rgba(232, 44, 44, 1);transform: msFilter;"><path d="M21 7h-6a1 1 0 0 0-1 1v3h-2V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM8 6h2v2H8V6zM6 16H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V6h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm9 4h-2v-2h2v2zm0-4h-2v-2h2v2z"></path></svg>
                        <p>Company</p>
                    </div>
                </a>
                <a href="./history.html">
                    <div class="image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vw" viewBox="0 0 24 24" style="fill: rgba(232, 44, 44, 1);transform: msFilter    ;"><path d="M12 8v5h5v-2h-3V8z"></path><path d="M21.292 8.497a8.957 8.957 0 0 0-1.928-2.862 9.004 9.004 0 0 0-4.55-2.452 9.09 9.09 0 0 0-3.626 0 8.965 8.965 0 0 0-4.552 2.453 9.048 9.048 0 0 0-1.928 2.86A8.963 8.963 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 0 1 1.195-3.913 7.066 7.066 0 0 1 1.891-1.892 7.034 7.034 0 0 1 2.503-1.054 7.003 7.003 0 0 1 8.269 5.445 7.117 7.117 0 0 1 0 2.824 6.936 6.936 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 0 1-2.225 1.501 6.98 6.98 0 0 1-1.313.408 7.117 7.117 0 0 1-2.823 0 6.957 6.957 0 0 1-2.501-1.053 7.066 7.066 0 0 1-1.037-.855l-1.414 1.414A8.985 8.985 0 0 0 13 21a9.05 9.05 0 0 0 3.503-.707 9.009 9.009 0 0 0 3.959-3.26A8.968 8.968 0 0 0 22 12a8.928 8.928 0 0 0-.708-3.503z"></path></svg>
                        <p>History</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define('under-content',CrearPie)

const url = "https://api.spacexdata.com/v4/company"
const ordenar = document.querySelector('.ordenar')
const History = document.querySelector('.History')
const Featured = document.querySelector('.Featured')

async function Company() {
    try{
        const response = await fetch(url);
        const Datos = await response.json()
        ordenar.innerHTML = `
        <div class="address">
            <p><svg id="xd" xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);transform:msFilter;"><circle cx="12" cy="12" r="4"></circle><path d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path></svg>Address: <span>${Datos.headquarters.address}</span></p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);transform:msFilter;"><circle cx="12" cy="12" r="4"></circle><path d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path></svg>City: <span>${Datos.headquarters.city}</span></p>
            <p id="state"><svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);transform:msFilter;"><circle cx="12" cy="12" r="4"></circle><path d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path></svg>State: <span>${Datos.headquarters.state}</span></p>
        </div>
        <div class="Info">
            <p>Founded: <span>${Datos.founded}</span></p>
            <p>Employes: <span>${Datos.employees}</span></p>
            <p>Vehicles: <span>${Datos.vehicles}</span></p>
            <p>Launch Sites: <span>${Datos.launch_sites}</span></p>
            <p>Test Sites: <span>${Datos.test_sites}</span></p>
            <p>Valuation: <span>${Datos.valuation}</span></p>
        </div>
        `

        History.innerHTML = `
        <h1>Description</h1>
            <p>Summary: <span>${Datos.summary}</span></p>
        `
        Featured.innerHTML = `
                <p id="Mujer">Coo: <span>${Datos.coo}</span></p>
                <p id="Elon">Ceo/Cto: <span>${Datos.ceo}</span></p>
                <p id="Tom">Cto Propulsion: <span>${Datos.cto_propulsion}</span></p>
        `
    } catch(error){
        alert(error)
    }
}
Company()