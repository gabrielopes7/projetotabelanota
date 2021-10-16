let students = [];
let nota1 = [];
let nota2= [];
let mediaA = [];
let aprovado = [];

// Puxo nome e nota do aluno do HTML e passo como parametro
function clicou(){
    var nomeAluno = document.getElementById('nomeStudent');
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    adicionarAluno(nomeAluno.value , n1.value , n2.value);
}

// Adiciono Nome, nota1 , nota2 , média e se aprovou/reprovou dentro dos Arrays
function adicionarAluno(nomeAluno , n1 , n2){
    students.push(nomeAluno);
    nota1.push(n1);
    nota2.push(n2);
    var media = (Number(n1) + Number(n2)) / 2;
    mediaA.push(media);
    if (media >= 6){
        aprovado.push("Aprovado")
    } else{
        aprovado.push("Reprovado")
    };
    gerarTabela();
}

// Gero a tabela no HTML colocando os valores do Array pelo index
function gerarTabela(){

    for (var x = students.length-1; x <= students.length-1; x++){
        var tabela = document.getElementById('tabela');
        var linha = document.createElement('tr');
        var linha2 = document.createElement('td');
        var linha3 = document.createElement('td');
        var linha4 = document.createElement('td');
        var linha5 = document.createElement('td');
        var linha6 = document.createElement('td');
        
        tabela.appendChild(linha)
        linha2.append(students[x]);
        linha.appendChild(linha2);
        linha3.append(nota1[x]);
        linha.appendChild(linha3);
        linha4.append(nota2[x]);
        linha.appendChild(linha4);
        linha5.append(mediaA[x]);
        linha.appendChild(linha5);
        linha6.append(aprovado[x])
        linha.appendChild(linha6);
    }
}