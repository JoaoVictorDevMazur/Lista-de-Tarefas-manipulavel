
const listadetarefas = document.getElementById('listadetarefas');

function adicionar() {
    const novatarefaInput = document.getElementById('novatarefa');
    const tarefalistada = novatarefaInput.value.trim();

    if (tarefalistada !== '') {
        const umatarefa = document.createElement('li');
        umatarefa.textContent = tarefalistada;

        const excluirb = document.createElement('button');
        excluirb.textContent = 'Excluir';
        excluirb.onclick = function () {
            listadetarefas.removeChild(umatarefa);
        };

        const marcadacomoconcluida = document.createElement('button');
        marcadacomoconcluida.textContent = 'Concluir';
        marcadacomoconcluida.onclick = function () {
            umatarefa.classList.toggle('completa');
        };

        umatarefa.appendChild(excluirb);
        umatarefa.appendChild(marcadacomoconcluida);

        listadetarefas.appendChild(umatarefa);
        novatarefaInput.value = '';
    }
}

function filtro(filter) {
    const tarefas = document.querySelectorAll('#listadetarefas li');

   tarefas.forEach(tarefa => {
        switch (filter) {
            case 'tudo':
            tarefa.style.display = 'flex';
                break;
            case 'pendentes':
            tarefa.style.display = tarefa.classList.contains('completa') ? 'none' : 'flex';
                break;
            case 'concluidas':
            tarefa.style.display = tarefa.classList.contains('completa') ? 'flex' : 'none';
                break;
        }
    });
}