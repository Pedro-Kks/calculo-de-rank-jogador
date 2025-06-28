// Desafio: Partidas Rankeadas
const prompt = require('prompt-sync')();

//Escrever o nome do jogador
const jogador = prompt("Digite o nome do jogador: ");

//Objeto para armazenar todos os ranks
const elosRanks = {
    ferro: "Ferro",
    bronze: "Bronze",
    prata: "Prata",
    ouro: "Ouro",
    diamante: "Diamante",
    lendario: "Lendario",
    imortal: "Imortal",
}

function total(vitorias, derrotas){
    vitorias = Number(prompt("Digite a quantidade de vitórias do jogador: "));
    derrotas = Number(prompt("Digite a quantidade de derrotas do jogador: "));

    //calculando o resultado do saldo entre V e D:
    let resultado = vitorias - derrotas;
    let elo;

    //Setando o elo do jogador:
    if (resultado < 10) elo = elosRanks.ferro;
    else if (resultado <= 20){ elo = elosRanks.bronze }
    else if (resultado <= 50) { elo = elosRanks.prata }
    else if (resultado <= 80){ elo = elosRanks.ouro }
    else if (resultado <= 90) { elo = elosRanks.diamante }
    else if (resultado <= 100) { elo = elosRanks.lendario }
    else { elo = elosRanks.imortal }

    //Saída do programa:
    console.log(`\nO ${jogador} tem ${vitorias} vitórias e ${derrotas} derrotas atualmente.`);
    console.log(`>>> Saldo de Vitórias: ${resultado}. Elo do ${jogador}: ${elo} <<<`);
}

//Função principal que chama o programa
(function main(){
    total();
})();