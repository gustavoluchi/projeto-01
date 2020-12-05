// variáveis

const lista = document.querySelector("#lista");
const adicionar = document.querySelector("#adicionar");
const comentario = document.querySelector("#comentario");
const salvarLista = document.querySelector("#salvarLista");
const carregarLista = document.querySelector("#carregarLista");
const apagarListaSalva = document.querySelector("#apagarListaSalva");
const salvoComentario = document.querySelector("#salvoComentario");
const inserir = document.querySelector("#inserir");
let t, itemGenerico, localItem, btnApagar, listaParseada, arrayDeItems = [], afazerAmarelo; // modelo [conteudo, id, boolean de checked]
// fim das variáveis

// 1 - passar todos os elementos do localstorage pro array
if (localStorage.getItem('listaDeAfazeres')) {
    arrayDeItems = JSON.parse(localStorage.getItem('listaDeAfazeres'));
}

// início das funcões
const riscar = function (idDateNow) {
    let checkBox = document.getElementById(`cb-${idDateNow}`);
    let riscadoTexto = document.getElementById(`li-${idDateNow}`);
    checkBox.checked = arrayDeItems[idDateNow][2];
    if (checkBox.checked) {
        riscadoTexto.classList.toggle("line-through");
    }
    // tirar o elemento de baixo pra uma função próprio
    checkBox.addEventListener("change", () => {
        let riscado = arrayDeItems.findIndex((currentValue, index) => {
            return index === idDateNow;
        });
        riscadoTexto.classList.toggle("line-through");
        arrayDeItems[riscado][2] = !arrayDeItems[riscado][2];
        localStorage.setItem('listaDeAfazeres', JSON.stringify(arrayDeItems));
    });
}

const geraUmLi = function (suaLista, conteudo, idDateNow) {
    // p/ debuggar console.log("geraUmLi");
    if (!!conteudo) {
        itemGenerico = document.createElement("li");
        itemGenerico.id = `li-${idDateNow}`;
        itemGenerico.classList.add("flex", "justify-between", "items-center", "shadow-md", "bg-gray-50", "m-2", "border-2", "border-transparent", "hover:border-yellow-500", "rounded-lg");
        itemGenerico.innerHTML = `
        <input id="cb-${idDateNow}" type="checkbox" class="m-2 h-6 w-6 flex-shrink-0" aria-label="concluir item"/>
        <span class="overflow-ellipsis px-2">${conteudo}</span>
        <button class="block w-10 h-10 btnApagar hover:gray-500 group flex-shrink-0" aria-label="deletar item" onclick="apagaLi(${idDateNow})" value='${arrayDeItems.length}'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="fill-current">
         <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" class="h-6 w-6 fill-current text-yellow-300 group-hover:text-yellow-500" />
        </svg>
        </button>`;
        suaLista.appendChild(itemGenerico);
        riscar(idDateNow);
    }
};

const inicializar = function () {
    // p/ debuggar console.log("inicializar");
    lista.innerHTML = "";
    if (arrayDeItems.length > 0) {
        for (i = 0; i < arrayDeItems.length; i++) {
            // p/ debuggar console.log(arrayDeItems.length, i);
            geraUmLi(lista, arrayDeItems[i][0], i);
        }
    } else {
        // p/ debuggar console.log("localStorage vazio");

    }
};
// 2 - por na tela todos os elementos do array (inicializar)
inicializar();
// 4 - apagar - tira o elemento do array (atualiza LocalEstorage) (inicializar)
const apagaLi = function (idPorApagar) {
    // p/ debuggar console.log("apagaLi");
    if (confirm("Você tem certeza que desja excluir o item?")) {
        arrayDeItems = arrayDeItems.filter((currentValue, index) => {
            return index !== idPorApagar;
        });
        localStorage.setItem('listaDeAfazeres', JSON.stringify(arrayDeItems));
        inicializar();
    }
}

function botoes(proprioBotao, inputCorrespondente) {
    // p/ debuggar console.log("botoes");
    if (inputCorrespondente) {
        let id = Date.now();
        arrayDeItems.push([inputCorrespondente, id, false]);
        localStorage.setItem('listaDeAfazeres', JSON.stringify(arrayDeItems));
        // p/ debuggar console.log("gus ", arrayDeItems);
        geraUmLi(lista, inputCorrespondente, arrayDeItems.length - 1);
        inserir.value = "";
        botaoFunciona(proprioBotao, true, "");
    } else {
        botaoFunciona(proprioBotao, false, "Por favor, insira conteúdo e tente novamente.");
    }
}

function mensagemDeAviso(simOuNao, textoDeAviso) {
    if (simOuNao) {
        comentario.classList.toggle("text-red-500", false);
        comentario.classList.toggle("text-green-500", true);
        comentario.textContent = textoDeAviso;
        setTimeout(() => {
            comentario.textContent = "";
            comentario.classList.toggle("text-green-500", false);
        }, 4000);
    } else {
        comentario.classList.toggle("text-green-500", false);
        comentario.classList.toggle("text-red-500", true);
        comentario.textContent = textoDeAviso;
        setTimeout(() => {
            comentario.textContent = "";
            comentario.classList.toggle("text-red-500", false);
        }, 4000);
    }


}

function botaoFunciona(idDoBotao, certo, textoDeAviso) {
    if (certo) {
        idDoBotao.classList.toggle("bg-yellow-300", false);
        idDoBotao.classList.toggle("hover:bg-yellow-500", false);
        idDoBotao.classList.toggle("bg-green-500");
        mensagemDeAviso(certo, textoDeAviso);
        setTimeout(() => {
            idDoBotao.classList.toggle("bg-green-500");
            idDoBotao.classList.toggle("bg-yellow-300", true);
            idDoBotao.classList.toggle("hover:bg-yellow-500", true);
        }, 300);
    } else {
        idDoBotao.classList.toggle("bg-yellow-300", false);
        idDoBotao.classList.toggle("hover:bg-yellow-500", false);
        idDoBotao.classList.toggle("bg-red-500");
        mensagemDeAviso(certo, textoDeAviso);
        setTimeout(() => {
            idDoBotao.classList.toggle("bg-red-500");
            idDoBotao.classList.toggle("bg-yellow-300", true);
            idDoBotao.classList.toggle("hover:bg-yellow-500", true);
        }, 300);
    }

}

// fim das funcoes


// event handlers
afazerAmarelo = document.getElementById('afazerAmarelo');
inserir.addEventListener("focus", () => {
    afazerAmarelo.classList.toggle('text-yellow-400', true);
});
inserir.addEventListener("blur", () => {
    afazerAmarelo.classList.toggle('text-yellow-400', false);
});


// 3 - Adicionar - por o elemento pra dentro do array (atualiza LocalEstorage) (inicializar)
adicionar.addEventListener("click", () => {
    botoes(adicionar, inserir.value);
})

inserir.addEventListener("keyup", (event) => {
    if (event.key == 'Enter') {
        botoes(adicionar, inserir.value);
    }
})

apagarListaSalva.addEventListener("click", () => {

    if (lista.innerHTML === "" && arrayDeItems.length === 0 && localStorage.getItem('listaDeAfazeres') === null) {
        botaoFunciona(apagarListaSalva, false, "Sua lista está vazia.");
    } else {
        if (confirm("Você tem certeza que deseja apagar toda a lista?")) {
            localStorage.removeItem('listaDeAfazeres');
            lista.innerHTML = "";
            arrayDeItems = [];
            localStorage.clear();
            botaoFunciona(apagarListaSalva, true, "Lista apagada com sucesso!");
        }
    }

});

document.getElementById('nav-toggle').onclick = function () {
    document.getElementById("nav-content").classList.toggle("hidden");
}
