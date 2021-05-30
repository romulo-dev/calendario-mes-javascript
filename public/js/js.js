var obj = {
listaNomeMes: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubto', 'Novembro', 'Dezembro']
}

function preencheTabela() {
    var dataAtual = new Date()
    var anoSetado = dataAtual.getFullYear()
    var mesSetado = dataAtual.getMonth()
    var dataInicio = new Date(anoSetado, mesSetado, 1)
    var dataFim = new Date(anoSetado, mesSetado + 1, 0)
    var diaInicio = dataInicio.getDay()
    var mes = document.getElementById('mes').getElementsByTagName('td')
    document.getElementById('mesCorrente').innerHTML = obj.listaNomeMes[mesSetado]+'-'+
    anoSetado

    document.getElementById('mesCorrente').setAttribute('id-mes', mesSetado)
    document.getElementById('mesCorrente').setAttribute('id-ano', anoSetado)
    for (var i = 0; i < 7; i++) {
        if (diaInicio == i) {
            for (var j = 0; j < dataFim.getDate(); j++) {
                mes[diaInicio].innerHTML = j + 1
                diaInicio++
            }
            return
        }
    }
    return
}

function preencheProximoMes(){

    aux = document.getElementById('mes').getElementsByTagName('td')
    for(let i=0; i<42; i++){
        aux[i].innerHTML = null
    }

    var valor = parseInt(document.getElementById('mesCorrente').getAttribute('id-mes')) + 1 
    document.getElementById('mesCorrente').setAttribute('id-mes', valor)
    var mesProximo = valor
    
    var anoSetadoP = parseInt(document.getElementById('mesCorrente').getAttribute('id-ano'))
 
    if(mesProximo==12){
        anoSetadoP++
        mesProximo = 0
        document.getElementById('mesCorrente').setAttribute('id-mes', 0)
        document.getElementById('mesCorrente').setAttribute('id-ano', anoSetadoP)

    } 

    var dataInicioP = new Date(anoSetadoP, mesProximo, 1)
    var dataFim = new Date(anoSetadoP, mesProximo + 1, 0)
    var diaInicioP = dataInicioP.getDay()


    mesP = document.getElementById('mes').getElementsByTagName('td')
    // setando o nome do próximo mês
    document.getElementById('mesCorrente').innerHTML = obj.listaNomeMes[mesProximo]+'-'+
    document.getElementById('mesCorrente').getAttribute('id-ano')
    for (let i = 0; i < 7; i++) {
        if (diaInicioP == i) {
            for (let j = 0; j < dataFim.getDate(); j++) {
                mesP[diaInicioP].innerHTML = j + 1
                diaInicioP++
            }
            return
        }
    }
    return
}

function preencheMesAnterior(){

    aux = document.getElementById('mes').getElementsByTagName('td')
    for(let i=0; i<42; i++){
        aux[i].innerHTML = null
    }

    var valor = parseInt(document.getElementById('mesCorrente').getAttribute('id-mes')) - 1 
    document.getElementById('mesCorrente').setAttribute('id-mes', valor)
    var mesProximo = valor
    
    var anoSetadoP = parseInt(document.getElementById('mesCorrente').getAttribute('id-ano'))

    if(mesProximo==-1){
        anoSetadoP--
        mesProximo = 11
        document.getElementById('mesCorrente').setAttribute('id-mes', 11)
        document.getElementById('mesCorrente').setAttribute('id-ano', anoSetadoP)
    } 
    var dataInicioP = new Date(anoSetadoP, mesProximo, 1)
    var dataFim = new Date(anoSetadoP, mesProximo + 1, 0)
    var diaInicioP = dataInicioP.getDay()

    mesP = document.getElementById('mes').getElementsByTagName('td')
    // setando o nome do mês anterior
    document.getElementById('mesCorrente').innerHTML = obj.listaNomeMes[mesProximo]+'-'+
    document.getElementById('mesCorrente').getAttribute('id-ano')
    for (let i = 0; i < 7; i++) {
        if (diaInicioP == i) {
            for (let j = 0; j < dataFim.getDate(); j++) {
                mesP[diaInicioP].innerHTML = j + 1
                diaInicioP++
            }
            return
        }
    }
    return
}

