// https://api.nasa.gov/planetary/apod?api_key=521rEK1dghO2zF4gOTNi7dvo6P7EKvqCEahBUv03
// 521rEK1dghO2zF4gOTNi7dvo6P7EKvqCEahBUv03

// Função para adicionar 1 (um) zero se número for menor que 9
const twoDigits = (numero) => {
    return numero <= 9 ? '0' + numero : numero;
}

// Função que pega um objeto Date e transforma numa string YYYY-mm-dd
const convertDate = (date) => {
    return `${hoje.getFullYear()}-${twoDigits(hoje.getMonth())}-${twoDigits(hoje.getDay())}`
}

// Função que converte string YYYY-mm-dd em string dd/mm/YYYY
const convertDateBr = (date) => {
    let date_br = date.split('-')
    return [date_br[2], date_br[1], date_br[0]].join('/')
}

var start = document.getElementById("inicio");
var end = document.getElementById("fim");
const lista = document.querySelector(".lista-imagem")

// Setar a data máxima dos inputs para o dia de hoje
var hoje = new Date();
start.setAttribute('max', convertDate(hoje))
end.setAttribute('max', convertDate(hoje))

// Setar valores iniciais para data de hoje
start.setAttribute('value', convertDate(hoje))
end.setAttribute('value', convertDate(hoje))

function mostraImagemDaNasa() {
    if (start.value && end.value) {
        document.body.style.cursor = "wait";
        fetch(
                `https://api.nasa.gov/planetary/apod?api_key=521rEK1dghO2zF4gOTNi7dvo6P7EKvqCEahBUv03&start_date=${start.value}&end_date=${end.value}`
            )
            .then((resp) => resp.json())
            .then((dados) => {
                console.log({ dados });

                lista.innerHTML = "";
                dados.forEach(element => {
                    let media = ""
                    if (element.media_type === 'video') {
                        media = `<iframe class="w-100" height="400" src="${element.url}"></iframe>`
                    } else if (element.media_type === 'image') {
                        media = `<img class="w-100 mt-2" src="${element.url}" title="${element.title}"/>`
                    }
                    lista.innerHTML += `
                    <div class="col-12 col-sm-6 col-md-4 col-xl-3 p-3">
                        <div class="p-3 border border-muted border-3 rounded-3 h-100">
                            <p class="fs-6 text-center bg-dark text-white p-1">${convertDateBr(element.date)}</p>
                            <p class="fs-3">${element.title}</p>
                            <p class="small">${element.explanation}</p>
                            ${media}
                        </div>
                    </div>`;
                });
                document.body.style.cursor = "auto";
            });
    }
}

mostraImagemDaNasa();


start.addEventListener("change", mostraImagemDaNasa, false);
end.addEventListener("change", mostraImagemDaNasa, false);