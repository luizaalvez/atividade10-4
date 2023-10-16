var gastos = [];

function adicionarGasto() {
    var descricao = document.getElementById('descricao').value;
    var valor = parseFloat(document.getElementById('valor').value);

    if (descricao && !isNaN(valor)) {
        gastos.push({ descricao: descricao, valor: valor });
        atualizarTabelaGastos();
        document.getElementById('descricao').value = '';
        document.getElementById('valor').value = '';
    }
}

function atualizarTabelaGastos() {
    var tabelaGastos = document.getElementById('tabelaGastos');
    tabelaGastos.innerHTML = '';

    gastos.forEach(function (gasto) {
        var row = tabelaGastos.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = gasto.descricao;
        cell2.innerHTML = gasto.valor.toFixed(2);
    });
}

function calcularResumo() {
    var total = 0;
    gastos.forEach(function (gasto) {
        total += gasto.valor;
    });

    var resumo = 'Total de Gastos: R$ ' + total.toFixed(2);
    localStorage.setItem('resumo', resumo);
    window.location.href = 'resumo.html';
}
