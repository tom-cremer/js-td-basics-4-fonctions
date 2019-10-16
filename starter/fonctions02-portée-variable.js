/*****************************
* 020 - Fonctions - Préalable
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
il faut la déclarer en dehors de toute fonction. On dit alors que c'est une variable globale
*/




/*
Ce qui est important, c'est de la DÉCLARER en dehors de toute fonction, on n'est pas obligé
de l'affecter à cet endroit-là, on peut l'affecter n'importe où, elle sera quand même globale,
c.-à-d. accessible partout
*/





/*
N.B. On nomme portée d'une variable l'ensemble des endroits où elle est accessible.
La portée d'une variable locale se limite au corps de la fonction dans laquelle elle est déclarée.
*/
