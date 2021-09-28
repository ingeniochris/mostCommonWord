let parrafo = "Bob hit a ball, the hit BALL flew long after it was hit.";
let palabraNo = ["hit"];

function mostCommonWord(parrafo, palabrasNoPermitidas) {
  let diccionario = {};
  let normalizandoParrafo = parrafo
    .toLowerCase()
    .replace(/[.!?,;-]/g, "")
    .split(" ");

  for (let palabra of normalizandoParrafo) {
    if (palabra in diccionario) {
      ++diccionario[palabra];
    } else {
      if (!palabrasNoPermitidas.includes(palabra)) diccionario[palabra] = 1;
    }
  }

  let result = "";
  let max = -Infinity;
  for (let palabra in diccionario) {
    let count = diccionario[palabra];
    if (count > max) {
      result = palabra;
      max = count;
    }
  }

  return result;
}

console.log(mostCommonWord(parrafo, palabraNo));
