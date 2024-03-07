const NAME = "HEROEL JESUS CARPINETTI";
const TITLE = "Frontend Developer";

document.addEventListener("DOMContentLoaded", () => {
    //animationLetterName();
    optionMenuDev();
    initialInfo();
    buttonLinks();
    let navLink = document.getElementsByClassName('nav-link');
    for(let i = 0; i < navLink.length; i++){
        navLink[i].addEventListener('click', (e)=>{
            removeAllSelectItemNav(navLink);
            e.target.classList.add('select-item-nav');
            document.getElementById(`scroll-${e.target.id}`).scrollIntoView({
                block: "center",
                behavior: "smooth"
            });
        })
    }
})

function buttonLinks(){
    let githubPage = document.getElementById('github');
    let linkedinPage = document.getElementById('linkedin');

    githubPage.addEventListener('click', ()=>{
        window.open("https://github.com/HeroelC");
    })

    linkedinPage.addEventListener('click', ()=>{
        window.open("https://www.linkedin.com/in/heroelc");
    });
}

async function optionMenuDev() {
    let optionMenuDev = document.getElementsByClassName('option-menu-dev');
    for (let i = 0; i < optionMenuDev.length; i++) {
        optionMenuDev[i].addEventListener('click', async (e) => {

            if (!e.target.classList.contains('selected')) {
                removeClassSelectedMenuDev();
                let request;
                let information;
                switch (e.target.id) {
                    case 'Experiencia Developer':
                        request = await fetch('./content/company.html').then(response => {
                            return response.text().then(resp => {      
                                return resp;
                            })
                        })
                        information = document.getElementById('information-menu-dev');
                        information.innerHTML = request;

                        const fecha1 = new Date('2022-04-01');
                        const fecha2 = new Date(); // Fecha de hoy
                        
                        calculateDateDifference(fecha1, fecha2);
                        break;
                    case 'Experiencia Profesor':
                        request = await fetch('./content/professor.html').then(response => {
                            return response.text().then(resp => {
                                return resp;
                            })
                        })
                        information = document.getElementById('information-menu-dev');
                        information.innerHTML = request;
                        break;
                    case 'Formación Universitaria':
                        request = await fetch('./content/college.html').then(response => {
                            return response.text().then(resp => {
                                return resp;
                            })
                        })
                        information = document.getElementById('information-menu-dev');
                        information.innerHTML = request;
                        break;
                }
                e.target.classList.add('selected');
            }
        })
    }
}

function removeAllSelectItemNav(navLink){
    for(let i = 0; i <  navLink.length; i++){
        navLink[i].classList.remove('select-item-nav');
    }
}

function animationLetterName() {
    let contador = 0;
    let name = document.getElementById("name");
    let animationName = setInterval(() => {
        name.innerHTML = name.innerHTML.replace("|", "");
        name.innerHTML += NAME.charAt(contador) + "|";
        contador++;
        if (contador == NAME.length) {
            name.innerHTML = name.innerHTML.replace("|", "");
            clearInterval(animationName);
            animationLetterTitle();
        }
    }, 250);
}

function animationLetterTitle() {
    let contador = 0;
    let title = document.getElementById("title");
    let animationTitle = setInterval(() => {
        title.innerHTML = title.innerHTML.replace("|", "");
        title.innerHTML += TITLE.charAt(contador) + "|";
        contador++;
        if (contador == TITLE.length) {
            title.innerHTML = title.innerHTML.replace("|", "");
            clearInterval(animationTitle);
        }
    }, 250);
}

function removeClassSelectedMenuDev() {
    let optionMenuDev = document.getElementsByClassName('option-menu-dev');

    for (let i = 0; i < optionMenuDev.length; i++)
        optionMenuDev[i].classList.remove('selected');
}

async function initialInfo(){
    let request = await fetch('./content/company.html').then(response => {
        return response.text().then(resp => {
            return resp;
        })
    })
    information = document.getElementById('information-menu-dev');
    information.innerHTML = request;
    
    const fecha1 = new Date('2022-04-01');
    const fecha2 = new Date(); // Fecha de hoy
    
    calculateDateDifference(fecha1, fecha2);
}

function calculateDateDifference(date1, date2) {
    const yearDiff = date2.getFullYear() - date1.getFullYear();
    const monthDiff = date2.getMonth() - date1.getMonth();
    
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    
    document.querySelectorAll(".current-time").forEach( item => item.innerHTML = `${yearDiff} año y ${monthDiff} meses`);
  }