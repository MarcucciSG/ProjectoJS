//console.log(superHeroes)


const datosBusqueda = {
    empresa:'' /*+ prompt('ingresar empresa: marvel o dc comics')*/,
    año:'',// + prompt('Elegir año entre 1930 a 1960'),
    residencia:'',
    poderOhabilidad:'',
}

function mostrarHeroes(superHeroes){
    superHeroes.forEach(heroe => {
        console.log(heroe)        
    });
}


function filtrarEmpresa(empresa){
    return superHeroes.filter(superHeroes => superHeroes.empresa === empresa)
}
function filtrarAño(heroe){
    if(datosBusqueda.año){
        return heroe.año === datosBusqueda.año
    }
    return heroe
}



function noResultado(){
    console.log('No hay resultados')
}

function filtraHeroe(){
    let resultado = superHeroes.filter(filtrarEmpresa).filter(filtrarAño)
        if(resultado.length){
        mostrarHeroes(resultado)
    }else{
        noResultado()
    }
}




const logoMarvel = document.querySelector('#marvel');
const logoDC = document.querySelector('#dc')


logoMarvel.addEventListener('click', () => {
    const superHeroesFiltrados = filtrarEmpresa("marvel");
    console.log(superHeroesFiltrados)
}); 


logoDC.addEventListener('click', () => {
    const superHeroesFiltrados = filtrarEmpresa("dc comics");
    console.log(superHeroesFiltrados)

})


const colorModeButton = document.querySelector("#colorMode");
const body = document.body;

let darkMode = localStorage.getItem("dark_mode");


function activateDarkMode(){
    body.classList.add("dark_mode");
    localStorage.setItem("dark_mode", "activado")
    colorModeButton.innerText = "Cambiar a Light mode"
    
}

function deactivateDarkMode(){
    body.classList.remove("dark_mode");
    localStorage.setItem("dark_mode", "desactivado");
    colorModeButton.innerText = "Cambiar a Dark mode"
    
}

if (darkMode === "desactivado"){
    deactivateDarkMode();
    
}else{
    activateDarkMode();
    
}

colorModeButton.addEventListener("click", () => {
    darkmode = localStorage.getItem("dark_mode");

    if (darkmode === "activado") {
        deactivateDarkMode()
    }else{
        activateDarkMode();
    }
})






