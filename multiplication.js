function Multiplication_table(nbre)
{
    for(i=1; i<13; i++)
    {
        document.write(nbre + " x " + i + " = " + nbre*i + "<br>")
        
    }
}

var nbre = prompt("Saisissez un nombre au hasard");
Multiplication_table(nbre);