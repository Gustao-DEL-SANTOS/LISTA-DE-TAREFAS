let contador = 0
let input = document.getElementById('txtTarefas')
let btnAdd = document.getElementById('btnAdd')
let main = document.getElementById('areaLista')


function addTarefa(){
    let varInput = input.value;

    if((varInput !== "") && (varInput !== null) && (varInput !== undefined)){
        
        ++contador;

        let novoItem = 
        `<div id=${contador} class="item">
            <div class="item-icone" onclick="marcarTarefa(${contador})">
                <i id="icone_${contador}"class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome" onclick="marcarTarefa(${contador})">
                ${varInput}
            </div>
            <div class="item-botao">
                <button class="btnDelete" onclick="deletar(${contador})"><i class="mdi mdi-delete"></i>
                    Deletar
                </button>
            </div>
        </div>`;
        main.innerHTML += novoItem;
        input.value = '';
        input.focus();
    }

}

input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})

function deletar(idDeletar){
    let deleta = document.getElementById(idDeletar)
    deleta.remove();
}

function marcarTarefa(id){
    let item = document.getElementById(id)
    item.getAttribute('class')

    if(item.getAttribute('class') == 'item'){
        item.classList.add('clicado')
        let icone = document.getElementById('icone_'+id)
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')
        // issp colocara a tarefa no final da lista
        item.parentNode.appendChild(item)
        
    }else{
        item.classList.remove('clicado')
        let icone = document.getElementById('icone_'+id)        
        icone.classList.remove('mdi-check-circle')
        icone.classList.add('mdi-circle-outline')
    }

}

