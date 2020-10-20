/*****************************
* 020 - Fonctions
*/

// 1. Fonction avec un paramètre et un return

/*
Déclarer la fonction calculateAge qui prend le paramètre birthYear
Cette fonction retourne l'âge de la personne
en calculant l'année courante moins son année de naissance
*/

function calculateAge(birthYear) {
    return 2018 - birthYear;
}
/* 
Utiliser la fonction qu'on vient de créer pour calculer
	- l'âge de John (né en 1990)
	- l'âge de Mike (né en 1948)
	- l'âge de Jane (née en 1969)
Afficher ces âges dans la console
*/

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

// 2. Fonction avec deux paramètres et un return

/*
Déclarer la fonction giveYearsUntilRetirement qui prend les paramètres
	- year (pour l'année de naissance de la personne)
	- firstName (pour le prénom de la personne)
Cette fonction
	- calcule d'abord l'âge de la personne en utilisant la fonction calculateAge qu'on vient de créer
	- calcule le nombre d'années qui restent jusque la pension (65 ans) et le stocke dans une variable retirement
	- si ce nombre est positif, elle affiche "… prendra sa pension dans … ans",
		sinon elle affiche "… est déjà pensionné(e)"
Utiliser ensuite la fonction pour calculer dans cobien d'années seront pensionnés
	- John (né en 1990)
	- Mike (né en 1948)
	- Jane (née en 1969)
*/

function giveYearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' prendra sa pension dans ' + retirement + ' ans.');
    } else {
        console.log(firstName + ' est déjà pensionné(e).')
    }
    
}
giveYearsUntilRetirement(1990, 'John');
giveYearsUntilRetirement(1948, 'Mike');
giveYearsUntilRetirement(1969, 'Jane');

