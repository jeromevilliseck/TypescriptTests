class Main {
    constructor() {
        //Programmation impérative : j'appelle une fonction et je lui passe un tableau en paramètre
        console.log(tabDouble(tab));
        let triple = tabMultiply(3); //Je retourne une fonction qui triplera (let est une fonction)
        let quintuple = tabMultiply(5); //Je retourne une fonction qui quintuplera (let est une fonction)
        console.log(triple(tab)); //J'utilise la fonction construite qui triple sur mon tableau d'origine
        console.log(tabMultiplyLambda(4)(tab)); //Curryfication avancée : J'appelle ma fonction que je paramètre pour quadrupler (premières parenthèses) puis je place mon tableau à quadrupler (secondes parenthèses)
        //INTERET je n'ai plus d'état interne ou d'effet de bord je construit mon traitement par COMPOSITION de FONCTIONS
    }
}

let tab : number[] = [1,5,2,4,3];

//Programmation imperative avec lambda
function tabDouble(inputTable: Array<number>): Array<number>{
    return inputTable.map(v => v*2);
}

//Curryfication classique : retour de fonction
//A noter que j'ai toujours un seul paramètre, j'imbriquerais des retours de fonction en cas de paramètres multiples
function tabMultiply(multiple: number){
    return function(tabEntry: Array<number>){
        return tabEntry.map(v => v*multiple);
    }
}

//Curryfication avancée : lambda
let tabMultiplyLambda = (m: number) => (t: Array<number>) => t.map(x => x*m);

var main: Main = new Main();
