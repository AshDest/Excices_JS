
// function declaration
function factorielle (n) {
    var i, f = 1;
    for(i = 1; i<= n; i++)
    {
        document.write(f+ " x " + i +"\n"+";");
        f = f * i;     
    }
    return f;
}

// variables declaration
var nbr = prompt("Entrer un nombre de votre choix")
nbr = parseInt(nbr);
// calling function
if(nbr >= 0)
    document.write(" Le factoriel de "+nbr+" est : "+factorielle(nbr));
else
    alert("Nombre invalide!")

