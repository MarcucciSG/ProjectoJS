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
const logoDC = document.getElementById("dc")


logoMarvel.addEventListener('click', () => {
    const superHeroesFiltrados = filtrarEmpresa("marvel");
    console.log(superHeroesFiltrados)
}); 


logoDC.addEventListener('click', () => {
    const superHeroesFiltrados = filtrarEmpresa("dc comics");
    console.log(superHeroesFiltrados)

})



