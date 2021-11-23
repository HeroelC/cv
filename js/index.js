const NAME = "HEROEL JESUS CARPINETTI";
const TITLE = "Frontend Developer";

document.addEventListener("DOMContentLoaded", () => {

    animationLetterName();
    optionMenuDev();
})


async function optionMenuDev(){
    let optionMenuDev = document.getElementsByClassName('option-menu-dev');
    for(let i = 0; i < optionMenuDev.length; i++){
        optionMenuDev[i].addEventListener('click', async(e) => {

            if(!e.target.classList.contains('selected')){
                removeClassSelectedMenuDev();
                switch(e.target.id){
                    case 'Experiencia Developer':
                        let request = await fetch('./data/company.json').then(response => {
                            return response.json().then(resp => {
                                return resp;
                            })
                        })

                        console.log("data: ", request);
                        break;
                    case 'Experiencia Profesor': 
                        break;
                    case 'Formación Universitaria':
                        break;
                }
                e.target.classList.add('selected');
            }
        })
    }
}

function animationLetterName(){
    let contador = 0;
    let name = document.getElementById("name");
    let animationName = setInterval(() => {
        name.innerHTML = name.innerHTML.replace("|", "");
        name.innerHTML += NAME.charAt(contador) + "|";
        contador++;
        if(contador == NAME.length){
            name.innerHTML = name.innerHTML.replace("|", "");
            clearInterval(animationName);
            animationLetterTitle();
        }
    }, 250);
}

function animationLetterTitle(){
    let contador = 0;
    let title = document.getElementById("title");
    let animationTitle = setInterval(() => {
        title.innerHTML = title.innerHTML.replace("|", "");
        title.innerHTML += TITLE.charAt(contador) + "|";
        contador++;
        if(contador == TITLE.length){
            title.innerHTML = title.innerHTML.replace("|", "");
            clearInterval(animationTitle);
        }
    }, 250);
}

function removeClassSelectedMenuDev(){
    let optionMenuDev = document.getElementsByClassName('option-menu-dev');

    for(let i = 0; i < optionMenuDev.length; i++)
        optionMenuDev[i].classList.remove('selected');
}

