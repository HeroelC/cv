document.addEventListener("DOMContentLoaded", () => {
    darkMode();
    optionMenuDev();
    initialInfo();
})

async function optionMenuDev() {
    let optionMenuDev = document.getElementsByClassName('option-menu-dev');
    for (let i = 0; i < optionMenuDev.length; i++) {
        optionMenuDev[i].addEventListener('click', async (e) => {

            if (!e.target.classList.contains('selected')) {
                removeClassSelectedMenuDev();
                let request;
                let information;
                switch (e.target.id) {
                    case 'Experiencia':
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
                        likeOption();
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
                    case 'Formación':
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
    likeOption();
    let optionExperience = document.getElementById('Experiencia');
    optionExperience.classList.add('selected');
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

function darkMode(){

let toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function() {

  let body = document.querySelector("body");

  if (body.classList.contains("dark-mode")) {

    body.classList.remove("dark-mode");
    toggleButton.innerHTML = '<svg class="svg-style moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>';
  } else {

    body.classList.add("dark-mode");
    toggleButton.innerHTML = '<svg class="svg-style sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>';
  }
});
}

function likeOption(){
    let likeOption = document.querySelectorAll('.like-option');
    likeOption.forEach(likeAction => {
        likeAction.addEventListener('click', (e) => {
            let span = likeAction.getElementsByTagName('span')[0];
            if (likeAction.attributes.title.value == "Me gusta"){ 
                likeAction.attributes.title.value = "Cancelar Me gusta";
                likeAction.classList.add('active');
                span.innerHTML = parseInt(span.innerHTML) + 1;

                span.classList.add('update');
                setTimeout(() => {
                    span.classList.remove('update');
                }, 500);
            }else{
                likeAction.attributes.title.value = "Me gusta"; 
                likeAction.classList.remove('active');
                span.innerHTML = parseInt(span.innerHTML) - 1;
                span.classList.add('update');
                setTimeout(() => {
                    span.classList.remove('update');
                }, 500);
            }
        });
    });
}