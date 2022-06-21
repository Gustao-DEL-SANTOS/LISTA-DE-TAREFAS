let input = document.getElementById('txtTarefas')
let btnAdd = document.getElementById('btnAdd')
let main = document.getElementById('areaLista')


function addTarefa(){
    let varInput = input.value;

    if((varInput !== "") && (varInput !== null) && (varInput !== undefined)){
        let novoItem = `
        <div class="item">
            <div class="item-icone">
                <i class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome">
                ${varInput}
            </div>
            <div class="item-botao">
                <button class="btnDelete" onclick="deletar()"><i class="mdi mdi-delete"></i>Deletar</button>
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

