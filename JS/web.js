

/*----------------------------------------------------*/
/* Parallax -> Moviment LEGOS
------------------------------------------------------ */

window.addEventListener("mousemove", (e) => {
    
    parallax(e);
});
function parallax(e) {
    layer = document.querySelector('.layer');

    const speed = layer.getAttribute('data-speed');
    
    const x = (e.pageX * speed)/100;
    const y = (e.pageY * speed)/100;
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
}


/*----------------------------------------------------*/
/* LightBox -> Tarjetes presentació
------------------------------------------------------ */

var obrir = document.querySelector('.obrir')
var tancar = document.querySelector('#tancar')
var lightbox= document.querySelector('#lightbox')
var blackOverlay = document.querySelector('#blackOverlay')

var images = document.querySelectorAll('.tresd')
var cards = document.querySelectorAll('.perfils')
var blackOverlayInner = document.querySelector('.lightbox-cont')

cards.forEach((perfils) => {
    perfils.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        var perfils = e.target.closest("a")    // selecciones el contenidor del popup
        var id = perfils.id 
        blackOverlayInner.innerHTML = contingutPerfils[id]
        blackOverlay.style.display = "block"
    })
})

images.forEach((tresd) => {
    tresd.addEventListener("click", (e) => {
        // e.preventDefault();
        e.stopPropagation();

        var tresd = e.target    // selecciones el contenidor del popup
        var id = tresd.id 
        blackOverlayInner.innerHTML = contingut3d[id]
        blackOverlay.style.display = "block"
    })
})

contingutPerfils = {
    id1: ` 
        <div class="cartaFlex">
            <img class="targeta-img" src="./IMG/IvanApuesto.jpg" alt="" >
            <div>
                <div class="titol-card">
                    <h3 style="margin-bottom:0;"> <span class="nom-card">IVÁN FERNÁNDEZ</span> </h3>
                    <h4 class="subtitol"> Creative Director </h4>
                </div>
                <p style="margin: 1em 1em; text-align:left">I am an art director and a product designer graduated in Elisava. This made me got some knowledge in this two different worlds of design. I'm always looking for new things to learn and I like to be up to date to the latest trends, for that reason I started to use 3D softwares and I initialized in the world of programing. By the way, if you were wondering I am the cowboy lego from the top of the web ;) just to let you know </p>
                <h4 style="margin-left:.5em;text-align:left"> <span class="demi">Skills</span> </h4>
                <div class="targetes">
                    <ul style="margin-left:2em; margin-right:2em">
                        <li> Photoshop </li>
                        <li> Illustrator </li>
                        <li> InDesign </li>
                    </ul>
                    <ul style="margin-left:2em; margin-right:2em">
                        <li> Premiere </li>
                        <li> Bridge </li>
                        <li> After effects</li>
                    </ul>
                    <ul style="margin-left:2em; margin-right:2em">
                        <li> Blender </li>
                        <li> AutoCad</li>
                        <li> Front End </li>
                    </ul>
                </div>
            </div>
            
        </div>`,

    id2: `
        <div class="cartaFlex">
            <img class="targeta-img" src="./IMG/DavidAlsina.JPG" alt="">
            <div>
                <div class="titol-card">
                    <h3 style="margin-bottom:0;"> <span class="nom-card">DAVID ALSINA</span> </h3>
                    <h4 class="subtitol"> Lead Designer </h4>
                </div>
                <p style="margin: 1em 1em; text-align:left">I am the lead designer in this company. I'm graduated in Interior Design and I got expertice on BIM methodology. I also have an especial interest in 3D models and rendering. I like to design real and imaginary design objects that are interesting and attractive to the humane eye. By the way, if you were wondering I am the long hair lego from the top of the web :) just to let you know</p>
                <h4 style="margin-left:.5em;text-align:left"> <span class="demi">Skills</span> </h4>
                    <div class="targetes">
                        <ul style="margin-left:2em; margin-right:2em">
                            <li> Revit </li>
                            <li> 3D Max </li>
                            <li> AutoCad </li>
                        </ul>
                        <ul style="margin-left:2em; margin-right:2em">
                            <li> Photoshop </li>
                            <li> Illustrator </li>
                            <li> InDesign </li>
                        </ul>
                        <ul style="margin-left:2em; margin-right:2em">
                            <li> Quixer Mixer </li>
                            <li> Blender</li>
                            <li> TwinMotions </li>
                        </ul>
                    </div>
            </div>   
        </div>`,

    id3:`
        <div class="cartaFlex">
            <img class="targeta-img" src="./IMG/fotocarnetgrande_AlexFernandez.jpg" alt="" >
            <div>
                <div class="titol-card">
                    <h3 style="margin-bottom:0;"> <span class="nom-card">ALEX FERNÁNDEZ</span> </h3>
                    <h4 class="subtitol"> Developer</h4>
                </div>
                <p style="margin: 1em 1em; text-align:left">I am an IT Engineer with two years of experience on Salesforce.com and related fields. I got my degree in Universitat Politècnica de Catalunya, and after graduating I worked two years with a Salesforce partner. Due to the economic difficulties caused by the public health situation in 2020, that employment ended, and afterwards I started a course in Front-End Development to maintain and upgrade my skills.</p>
                <h4 style="margin-left:.5em;text-align:left"> <span class="demi">Skills</span> </h4>
                        <div class="targetes">
                            <ul style="margin-left:2em; margin-right:2em">
                                <li> Java </li>
                                <li> HTML/CSS  </li>
                                
                            </ul>
                            <ul style="margin-left:2em; margin-right:2em">
                                <li> JavaScript </li>
                                <li> Salesforce </li>
                                
                            </ul>
                            <ul style="margin-left:2em; margin-right:2em">
                                <li> Software Development/ Testing </li>
                                
                            </ul>
                        </div>
            </div>
        </div>`,

    id4: `
        <div class="cartaFlex">
            <img class="targeta-img" src="./IMG/Perrete.jpg" alt="" >
            <div>
                <div class="titol-card">
                    <h3 style="margin-bottom:0;"> <span class="nom-card">BIMBODOGGY</span> </h3>
                    <h4 class="subtitol"> Pet</h4>
                </div>
                <p style="margin: 1em 1em; text-align:left">This is our pet. You better be kind with him, because if he starts to bark you that will mean that he doesn't like you. If this happens we will be so sorry but we won't be able to make a project with you. Yes, he is kind of an exam that everyone must pass before talking about serious things. If you don't like this we are sorry, but you know... it is what it is</p>
                <h4 style="margin-left:.5em;text-align:left"> <span class="demi">Skills</span> </h4>
                        <div class="targetes">
                            <ul style="margin-left:2em; margin-right:2em">
                                <li> Eating your food </li>
                                <li> Barking </li>
                                <li> Sleeping </li>
                            </ul>
                            <ul style="margin-left:2em; margin-right:2em">
                                <li> Playing </li>
                                <li> Running </li>
                                <li> Protection</li>
                            </ul>
                            <ul style="margin-left:2em; margin-right:2em">
                                <li> Funny </li>
                                
                            </ul>
                        </div>
            </div>
        </div>`,
}

contingut3d = {
    id31: `<div class="cartaFlex">
            <img class="img-small" style="margin: 1em; justify-content:center;" src="./IMG/Nike.jpg" alt="" width= "80%" height="fit-content">
        
            <div>
                <h3 style="margin-top:.5em"> <b>Nike Shoes</b> </h3>
                <p style="text-align:left"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
            </div> 
        </div>`,

    id32: `<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/Pokeball.jpg" alt="" width= "80%" height="fit-content">

            <div>
                <h3 style="margin-top:.5em"> <b>Pokeball</b> </h3>
                <p style="text-align:left"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
            </div> 
        </div>`,

    id33:`<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/SundayFunday.jpg" alt="" width= "80%" height="fit-content">

            <div>
                <h3 style="margin-top:.5em"> <b>Sunday Funday </b></h3>
                <p style="text-align:left"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
            </div> 
        </div>`,

    id34: `<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/RenderExterior_David.jpg" alt="" width= "80%" height="fit-content">

            <div>
                <h3 style="margin-top:.5em"> <b>Escuela Viladomat </b></h3>
                <p style="text-align:left"> This render is an image from a Bim project we did last year, the objective was to create an school that was going to be located in Barcelona. More especifically in the Viladomat's street. Once we finished the 3D model we decided to crete some renders from the exterior and the interior of the buildings. This is one of the final pictures we gave to the client. I hope you like it</p>
            </div> 
        </div>`,

    id35: `<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/Render_Comedor.jpg" alt="" width= "80%" height="fit-content">

            <div>
                <h3 style="margin-top:.5em"> <b>Single family home </b></h3>
                <p style="text-align:left"> Single family home is an imaginary house that we created, not only to design some renders but to show people how theu could modify the interior of a house so it is more sustainable. This work gives importance to the ecologic design and gives a different point of view to the clients. We give an example in how they shoud start thinking before doing any important change in their buildings and surroundings. We work to create beautiful images that clients can fall in love with, but also we promote conscious design just because we think is the only posible future.  </p>
            </div> 
        </div>`,

    id36: `<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/Prueba2+Elements.jpg" alt="" width= "80%" height="fit-content">

            <div>
                <h3 style="margin-top:.5em"> <b>The creative house</b></h3>
                <p style="text-align:left"> This render is an image of what we cal The creation house. This house was designed to use as a co-working and also a place to live for at least 8 people. The main idea was to create an space for nomadic creative people. It this interior you can find a co-wordink space, a comon kitchen for everyone and two different types of rooms. The firs one was for people that will live between 6 to 12 months. The second one was for people who would live there between 1 to 6 months. The main idea was to give an space were creative people of differents disciplins could live together so they could create a synergy between al the knowledge of everyone. </p>
            </div> 
        </div>`,

    id37: `<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/interior\ david.RGB_color-Recuperado.png" alt="" width= "80%" height="fit-content">

            <div>
                <h3 style="margin-top:.5em"> <b>Viladomat classroom</b></h3>
                <p style="text-align:left">  This render is an image from a Bim project we did last year, the objective was to create an school that was going to be located in Barcelona. More especifically in the Viladomat's street. Once we finished the 3D model we decided to crete some renders from the exterior and the interior of the buildings. This is one of the final pictures we gave to the client. I hope you like it</p>
            </div> 
        </div>`,

    id38: `<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/9a1d1fb4-b584-4afa-98d7-9c756b62ddd6.jpg" alt="" width= "80%" height="fit-content">

            <div>
                <h3 style="margin-top:.5em"> <b>Abstract design</b></h3>
                <p style="text-align:left"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
            </div> 
        </div>`,
}




obrir.addEventListener("click", (e) => {
    e.preventDefault();     // això evita el comportament d'enllaç
    e.stopPropagation();    // evita el clic a la pantalla
    blackOverlay.style.display = "block"
})
// obrir2.addEventListener("click", (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     blackOverlay.style.display = "block"
// })

tancar.addEventListener("click", (e) => {
    e.preventDefault();
    blackOverlay.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (!lightbox.contains(e.target)){
        blackOverlay.style.display = "none"
    }
})



// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })












