var nbre = [];
//let NLen = nbre.length;
//document.write(NLen);

for (let i = 0; i < 10; i++) {
     nbre[i] = prompt("Entrer le "+i+" Nbre");
}

function MaxTable(arr) {
    return Math.max.apply(null, arr);
}

document.write(MaxTable(nbre));


