const lista=document.querySelector("#lista"),adicionar=document.querySelector("#adicionar"),comentario=document.querySelector("#comentario"),salvarLista=document.querySelector("#salvarLista"),carregarLista=document.querySelector("#carregarLista"),apagarLista=document.querySelector("#apagarLista"),apagarListaSalva=document.querySelector("#apagarListaSalva"),salvoComentario=document.querySelector("#salvoComentario"),inserir=document.querySelector("#inserir");let t,itemGenerico,localItem,btnApagar,listaParseada,afazerAmarelo,arrayDeItems=[];localStorage.getItem("listaDeAfazeres")&&(arrayDeItems=JSON.parse(localStorage.getItem("listaDeAfazeres")));const riscar=function(a){let b=document.getElementById(`cb-${a}`),c=document.getElementById(`li-${a}`);b.checked=arrayDeItems[a][2],b.checked&&c.classList.toggle("line-through"),b.addEventListener("change",()=>{let b=arrayDeItems.findIndex((b,c)=>c===a);c.classList.toggle("line-through"),arrayDeItems[b][2]=!arrayDeItems[b][2],localStorage.setItem("listaDeAfazeres",JSON.stringify(arrayDeItems))})},geraUmLi=function(a,b,c){console.log("geraUmLi"),!b||(itemGenerico=document.createElement("li"),itemGenerico.id=`li-${c}`,itemGenerico.classList.add("flex","justify-between","items-center","h-12","shadow-md","bg-gray-50","m-2","border-2","border-transparent","hover:border-yellow-600","rounded-lg"),itemGenerico.innerHTML=`
        <input id="cb-${c}" type="checkbox" class="m-2 h-6 w-6"/>
        <label for="cb-${c}" class="hidden">confirmar a conclusão do conteúdo</label>
        <span>${b}</span>
        <button class="block w-10 h-10 btnApagar hover:gray-500 group aria-label="deletar item" onclick="apagaLi(${c})" value='${arrayDeItems.length}'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="fill-current">
         <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" class="h-6 w-6 fill-current text-yellow-600 group-hover:text-yellow-800" />
        </svg>
        </button>`,a.appendChild(itemGenerico),riscar(c))},inicializar=function(){if(console.log("inicializar"),lista.innerHTML="",0<arrayDeItems.length)for(i=0;i<arrayDeItems.length;i++)console.log(arrayDeItems.length,i),geraUmLi(lista,arrayDeItems[i][0],i);else console.log("localStorage vazio")};inicializar();const apagaLi=function(a){console.log("apagaLi"),confirm("Voc\xEA tem certeza que desja excluir o item?")&&(arrayDeItems=arrayDeItems.filter((b,c)=>c!==a),localStorage.setItem("listaDeAfazeres",JSON.stringify(arrayDeItems)),inicializar())};function botoes(a,b,c){if(console.log("botoes"),b){let d=Date.now();arrayDeItems.push([b,d,!1]),localStorage.setItem("listaDeAfazeres",JSON.stringify(arrayDeItems)),console.log("gus ",arrayDeItems),geraUmLi(lista,b,arrayDeItems.length-1),c.innerHTML="",inserir.value="",botaoCor(a,!0)}else botaoCor(a,!1),c.innerHTML="Por favor, insira conte\xFAdo e tente novamente."}function botaoCor(a,b){b?(a.classList.toggle("bg-yellow-400",!1),a.classList.toggle("hover:bg-yellow-600",!1),a.classList.toggle("bg-green-500"),setTimeout(()=>{a.classList.toggle("bg-green-500"),a.classList.toggle("bg-yellow-400",!0),a.classList.toggle("hover:bg-yellow-600",!0)},300)):(a.classList.toggle("bg-yellow-400",!1),a.classList.toggle("hover:bg-yellow-600",!1),a.classList.toggle("bg-red-500"),setTimeout(()=>{a.classList.toggle("bg-red-500"),a.classList.toggle("bg-yellow-400",!0),a.classList.toggle("hover:bg-yellow-600",!0)},300))}afazerAmarelo=document.getElementById("afazerAmarelo"),inserir.addEventListener("focus",()=>{afazerAmarelo.classList.toggle("text-yellow-500",!0)}),inserir.addEventListener("blur",()=>{afazerAmarelo.classList.toggle("text-yellow-500",!1)}),adicionar.addEventListener("click",()=>{botoes(adicionar,inserir.value,comentario)}),inserir.addEventListener("keyup",a=>{"Enter"==a.key&&botoes(adicionar,inserir.value,comentario)}),apagarListaSalva.addEventListener("click",()=>{confirm("Voc\xEA tem certeza que deseja apagar toda a lista?")&&(lista.innerHTML="",arrayDeItems=[],localStorage.clear(),comentario.innerHTML="Lista apagada com sucesso!",comentário.classList.toggle("text-"),botaoCor(apagarListaSalva,!0))}),document.getElementById("nav-toggle").onclick=function(){document.getElementById("nav-content").classList.toggle("hidden")};