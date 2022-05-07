// declaration
var age = prompt("Quel est votre age ? : ")
age = parseInt(age);

if(age < 18)
    document.write("Vous etes encore Mineur");
else if(age == 18)
    document.write("Vous etes un nouveau Majeur");
else
    document.write("Vous etes Majeur");