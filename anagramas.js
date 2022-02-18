

let palavra = "xxx"


let qtdanagramas =0


for (let indexLetraAtual = 0;indexLetraAtual < palavra.length;indexLetraAtual++) {
  
    qtdanagramas += anagramas(palavra, indexLetraAtual);
  
}

console.log(qtdanagramas)

function anagramas(palavra, indexLetraAtual) {
    let qtdanagramas = 0;
    let qtdIgnorar = 0;
    let temRepetida = true;
  
  while (temRepetida) {
      let proximoIndex = indexLetraRepetida(indexLetraAtual, palavra, qtdIgnorar);
      if (proximoIndex !== -1) {
        if (indexLetraAtual + 1 === proximoIndex) {
          qtdanagramas++;
          qtdIgnorar++;
        } else {
          qtdanagramas++;
          let subString = palavra.substring(indexLetraAtual);
          let qtdElementosEntreIndices = subString.length - 2;
  
          if (qtdElementosEntreIndices % 2 !== 0) {
            // let letraMeio = subString[(subString.length-1)/2]
            let primeiraMetade = subString.substring(
              0,
              (((subString.length - 1) / 2)+1)
            );
            let segundaMetade = subString.substring(
              (subString.length - 1) / 2,
              subString.length 
            );
            let qtdIncludes = 0;
  
            for (let index = 0; index < primeiraMetade.length; index++) {
              if (segundaMetade.includes(primeiraMetade[index])) {
                qtdIncludes++;
              } else {
                break;
              }
            }
            if (qtdIncludes === primeiraMetade.length) {
              qtdanagramas++;
            }
  
            qtdIgnorar++;
          }
  
          if (qtdElementosEntreIndices % 2 === 0) {
            let primeiraMetade2 = subString.substring(0, subString.length / 2);
            let segundaMetade2 = subString.substring(
              ((subString.length / 2) -1),
              subString.length
            );
            let qtdIncludes2 = 0;
  
            for (let index = 0; index < primeiraMetade2.length; index++) {
              if (segundaMetade2.includes(primeiraMetade2[index])) {
                qtdIncludes2++;
              } else {
                break;
              }
            }
            if (qtdIncludes2 === primeiraMetade2.length) {
              qtdanagramas++;
            }
  
            qtdIgnorar++;
          }
        }
      } else {
        temRepetida = false;
      }
    }
    return qtdanagramas;
  }

  
// retorna o próximo índice da letra repetida
// se não houver (mais) letra repetida ou qtdIgnorar===palavra.length-1 retorna -1
function indexLetraRepetida(indexLetraAtual, palavra, qtdIgnorar) {
    if (qtdIgnorar === palavra.length - 1) {
      return -1;
    }
    if (
      !palavra.substring(indexLetraAtual + 1).includes(palavra[indexLetraAtual])
    ) {
      return -1;
    }
  
    let palavraAPartirDoIndex = palavra.substring(indexLetraAtual);
    const letraProcurando = palavraAPartirDoIndex[0];
  
    for (let i = 1; i < palavraAPartirDoIndex.length; i++) {
      if (letraProcurando === palavraAPartirDoIndex[i]) {
        if (qtdIgnorar > 0) {
          qtdIgnorar--;
        } else {
          return i;
        }
      }
    }
  
    return -1;
  };

// asdhgfwxgfwhkk
// hgfwgfwh
//  hgfwg
//     wgfwh     
// 012345678910
//  dflghhgfgfhkk
// hegfgeh
// hhgfgfh
// 01234567
// ifailuhkqq
// ifafiluhkqq
// ovo
//
// if palavra[indexLetraAtual] === palavra[indexLetraRepetida] == proximoIndex -> qtdanagramas++
//
// if()
//
// let subString = array.subString(letraInicial, indexLetraRepetida)
//
// qtdElementosEntreIndices = subString.length -2
//
// se qtdElementosEntreIndices for ímpar -> verificar de subString[0] até (inculsive)subString[((subString.length-1)/2 )]
// e verificar de (inclusive)subString[((subString.length-1)/2 )] até subString[(subString.length-1)]
//
// se qtdElementosEntreIndices for par -> verificar se qtdElementosEntreIndices ===2
//
//
// se qtdElementosEntreIndices ===2 ->
// verificar se é anagrama de subString[0] até subString[2] ->
// e verificar de subString[1] até subString[3]
//
// se qtdElementosEntreIndices > 2 ->
// verificar se é anagrama de subString[0] até subString[(qtdElementosEntreIndices/2)] ->
// e verificar de subString[subString[(qtdElementosEntreIndices/2)+1] até subString[(subString.length-1)]
//
//
//
//
//
// let qtdanagramas;
// if indexLetraRepetida = proximoIndex -> qtdanagramas++
