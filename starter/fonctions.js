// 1. FONCTION SANS PARAMÈTRE ET SANS RETURN 

// 1. - 1°) Déclarer la fonction



/*
DÉCLARER la fonction = CRÉER la fonction :
On crée un conteneur qui a un identifiant (le nom de la fonction)
et on y stocke le mode d'emploi (le corps de la fonction, la liste d'instructions qui sont entre les accolades)
=> C'est comme quand on initialise une variable :
	- déclarer une variable = créer un conteneur qui porte un nom pour y stocker une valeur
	- déclarer une fonction = créer un conteneur qui porte un nom et y stocker un mode d'emploi
N.B. Cette instruction, à elle toute seule, ne produit aucun résultat visible
	(on a juste enregistré quelque chose dasn la mémoire de l'ordinateur,
	on a préparé le terrain : on a défini un mode d'emploi pour pouvoir travailler avec plus tard,
	on a expliqué comment faire quelque chose mais on n'a pas enocre donné l'ordre de le faire)
*/

// 1. - 2°) Exécuter la fonction = faire un appel de fonction de direct => avec l'opérateur ()



// 1. - 3°) Valeur de retour de cette fonction

// Un appel de fonction direct est une expression (opérande OPÉRATEUR)
// Cette expression s'évalue à une valeur… quelle valeur ?
// UNE FONCTION QUI N'A PAS D'INSTRUCTION RETURN RETOURNE UNDEFINED => son appel s'évalue à UNDEFINED



// 2. FONCTION SANS PARAMÈTRE MAIS AVEC RETURN 

// 2. - 1°) Déclarer la fonction



// 2. - 2°) Exécuter la fonction = faire un appel de fonction de direct => avec l'opérateur ()



// 2. - 3°) Valeur de retour de cette fonction

// Un appel de fonction direct est une expression (opérande OPÉRATEUR)
// Cette expression s'évalue à une valeur… quelle valeur ?
// UNE FONCTION QUI A UNE INSTRUCTION RETURN RETOURNE LA VALEUR DE RETOUR
// (= valeur de l'expression qui se trouve après le return) => son appel s'évalue à la valeur de retour



// 2. - 4°) Utilité du RETURN :
/*
On peut voir le RETRUN comme un MOYEN DE COMMUNCIATION entre la fonction et le reste du programme :
L'INSTRUCTION RETURN EST UN MOYEN DE FAIRE SORTIR UNE DONNEE D'UNE FONCTION
=> cela permet, par exemple, de récupérer le résultat d'une fonction pour le réutiliser dans une autre fonction
*/






// 3. PORTEE D'UNE VARIABLE : VARIABLE LOCALE - VARIABLE GLOBALE

// 3. - 1°) Variable locale

/* 
Variable locale = variable déclarée dans le corps d'une fonction
Une variable locale n'est accessible qu'à l'intérieur de la fonction. 
*/



/* 
Ma variable message est une variable locale, je l'ai déclarée dans ma fonction direBonjour
=> si j'essaie d'accéder à message en dehors de ma fonction, j'ai une erreur
Par contre, je peux utiliser le return pour faire sortir sa valeur de ma fonciton…
*/




// 3. - 2°) Variable globale 

/* 
Variable gobale = variable déclarée en dehors d'une fonction
Une variable globale est accessible de partout 
=> On peut voir une variable globale comme un 2e MOYEN DE COMMUNCIATION entre les fonctions :
VARIABLE GLOBALE = MOYEN DE PARTAGER LES INFOS ENTRE PLUSIEURS FONCTIONS (rendre une info disponible partout
 */

/*
Une varible déclarée à l'intérieur d'une fonction est dite "variable locale"
et elle n'est disponible qu'à l'inétrieur de cette fonction
*/




/* 
Pour qu'elle soit disponible partout (y compris à l'intérieur d'autres fonctions),
il faut la déclarer en dehors de toute fonction. On dit alors que c'est uen variable globale
*/




/*
Ce qui est important, c'est de la DÉCLARER en dehors de toute fonction,
on n'est pas obligé de l'affecter à cet endroit-là, on peut l'affecter n'importe où,
elle sera quand même globale, c.-à-d. accessible partout
*/




/*
N.B. On nomme portée d'une variable l'ensemble des endroits où elle est accessible.
La portée d'une variable locale se limite au corps de la fonction dans laquelle elle est déclarée.
*/

// 4. PASSAGE DE PARAMÈTRE : FONCTION AVEC PARAMÈTRE (SANS RETURN)

// 4. - 1°) Déclaration de la fonction avec paramètre

/*
Un paramètre est une information dont une fonction a besoin pour jouer son rôle.
Les paramètres d'une fonction sont définis entre parenthèses juste après le nom de la fonction
 On peut ensuite utiliser leur valeur dans le corps de la fonction. 
 */



// 4. - 2°) Appel de la fonction avec paramètre

/* 
La valeur d'un paramètre est fournie au moment de l'appel de la fonction :
on dit que cette valeur est passée en paramètre.
On appelle argument la valeur donnée à un paramètre lors d'un appel.
*/



/* 
La valeur d'un paramètre est fournie au moment de l'appel de la fonction :
on dit que cette valeur est passée en paramètre.
On appelle argument la valeur donnée à un paramètre lors d'un appel.
*/

// 4. - 3°) Déclaration d'une fonction sans paramètre à nouveau pour comprendre l'utilité :

/* Imaginons qu'on a besoin de calculer le double d'un nombre… 
On a besoin de déclarer une fonction pour calculer le double de 3 
et puis de déclarer une AUTRE fonction pour calculer le double de 10
et puis de déclarer une AUTRE fonction pour calculer le double de 24
etc. et ainsi de suite à chaque fois qu'on veut calculer le double d'un nouveau nombre…
*/




/*
Si on regarde toutes ces fonctions, elles ont toutes un canevas commun,
il y a une seule chose qui change : le nombre (2, ou 10, ou 24). Tout le reste est identique.
Dans ce cas, vous devez pense à créer une seule fonction qui prend un paramètre :
le nombre dont on veut calculer le double
*/

// => 4. - 4°) Une fonction avec paramètre à la place de toutes celles-là :




/* 
Le paramètre est à nouveau un MOYEN DE COMMUNCIATION  avec la fonction :
C'EST UN MOYEN DE FAIRE ENTRER UNE DONNEE DANS UNE FONCTION.
On peut voir le paramètre comme une variable locale,
et on donne une valeur à cette variable au moment de l'appel
(voir graphique au tableau)
*/

// 5. FONCTION AVEC PARAMETRE ET AVEC RETURN




// RESUME

/* 1er MOYEN DE COMMUNCIATION : L'INSTRUCTION RETURN OU COMMENT FAIRE SORTIR UNE DONNEE D'UNE FONCTION */
/* 2e MOYEN DE COMMUNCIATION : VARIABLE GLOBALE OU COMMENT PARTAGER LES INFOS ENTRE PLUSIEURS FONCTIONS
	(rendre une info disponible partout) */
/* 3e MOYEN DE COMMUNCIATION : LE PASSAGE DE PARAMETRE OU COMMENT FAIRE ENTRER UNE DONNEE DANS UNE FONCTION */