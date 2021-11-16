class Main {
    constructor() {
        //Programmation impérative : j'appelle une fonction et je lui passe un tableau en paramètre
        console.log(tabDouble(tab));
        let triple = tabMultiply(3); //Je retourne une fonction qui triplera (let est une fonction)
        let quintuple = tabMultiply(5); //Je retourne une fonction qui quintuplera (let est une fonction)
        console.log(triple(tab)); //J'utilise la fonction construite qui triple sur mon tableau d'origine
        console.log(tabMultiplyLambda(4)(tab)); //Curryfication avancée : J'appelle ma fonction que je paramètre pour quadrupler (premières parenthèses) puis je place mon tableau à quadrupler (secondes parenthèses)
        //INTERET je n'ai plus d'état interne ou d'effet de bord je construit mon traitement par COMPOSITION de FONCTIONS

        //Curryfication par encapsulation d'appels = VERSION fonction(P1(P2(P3)))
        console.log(maximize(maximize(2)(6))(minimize(4)(9)));

        //Curryfication création de fonction d'ordre supérieur = VERSION fonction(P1)(P2)(P3)
        let compose = f1 => x => f1(x); //Mon premier paramètre est une FONCTION, mon second un type simple ou composé
        let r1 = compose(tabMultiply(2))([4,7]); //J'appelle compose je paramètre f1 avec la fonction tabMultiply paramétrée pour multiplier par 2, puis je place un tableau dans x
        //Soit compose(f1(param))(x) donc (f1)(x)
        console.log(r1);

        //Curryfication par chaînage de fonctions = version fonction(P1).fonction(P2).fonction(P3)
        let t = [1, 2, 3];
        let r2 = t.filter(e => e > 1).map(e => e * 2).reduce((e, s) => s + e);
        console.log(r2);

        /*Donnera en résultat console
        "C:\Program Files\nodejs\node.exe" C:\Users\villiseck\WebstormProjects\untitled\build\Test.js
            [ 2, 10, 4, 8, 6 ]
            [ 3, 15, 6, 12, 9 ]
            [ 4, 20, 8, 16, 12 ]
        6
            [ 8, 14 ]
        10
        Process finished with exit code 0
        */
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

function maximize(v: number){
    return (x: number) => x > v ? x : v;
}

function minimize(v: number){
    return (x: number) => x < v ? x : v;
}
