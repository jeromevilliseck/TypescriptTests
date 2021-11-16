class Main {
    constructor() {
        console.log(tabDouble(tab));
        let triple = tabMultiply(3);
        console.log(triple(tab));
        console.log(tabMultiplyLambda(4)(tab));
    }
}

let tab : number[] = [1,5,2,4,3];

//Programmation fonctionnelle avec lambda
function tabDouble(inputTable: Array<number>): Array<number>{
    return inputTable.map(v => v*2);
}

//Curryfication classique : retour de fonction
function tabMultiply(multiple: number){
    return function(tabEntry: Array<number>){
        return tabEntry.map(v => v*multiple);
    }
}

//Curryfication avancée : lambda
let tabMultiplyLambda = (m: number) => (t: Array<number>) => t.map(x => x*m);

var main: Main = new Main();
