var Main = /** @class */ (function () {
    function Main() {
        //Programmation impérative : j'appelle une fonction et je lui passe un tableau en paramètre
        console.log(tabDouble(tab));
        var triple = tabMultiply(3); //Je retourne une fonction qui triplera (let est une fonction)
        var quintuple = tabMultiply(5); //Je retourne une fonction qui quintuplera (let est une fonction)
        console.log(triple(tab)); //J'utilise la fonction construite qui triple sur mon tableau d'origine
        console.log(tabMultiplyLambda(4)(tab)); //Curryfication avancée : J'appelle ma fonction que je paramètre pour quadrupler (premières parenthèses) puis je place mon tableau à quadrupler (secondes parenthèses)
        //INTERET je n'ai plus d'état interne ou d'effet de bord je construit mon traitement par COMPOSITION de FONCTIONS
        //Curryfication par encapsulation d'appels = VERSION fonction(P1(P2(P3)))
        console.log(maximize(maximize(2)(6))(minimize(4)(9)));
        //Curryfication création de fonction d'ordre supérieur = VERSION fonction(P1)(P2)(P3)
        var compose = function (f1) { return function (x) { return f1(x); }; }; //Mon premier paramètre est une FONCTION, mon second un type simple ou composé
        var r1 = compose(tabMultiply(2))([4, 7]); //J'appelle compose je paramètre f1 avec la fonction tabMultiply paramétrée pour multiplier par 2, puis je place un tableau dans x
        //Soit compose(f1(param))(x) donc (f1)(x)
        console.log(r1);
        //Curryfication par chaînage de fonctions = version fonction(P1).fonction(P2).fonction(P3)
        var t = [1, 2, 3];
        var r2 = t.filter(function (e) { return e > 1; }).map(function (e) { return e * 2; }).reduce(function (e, s) { return s + e; });
        console.log(r2);
    }
    return Main;
}());
var tab = [1, 5, 2, 4, 3];
//Programmation imperative avec lambda
function tabDouble(inputTable) {
    return inputTable.map(function (v) { return v * 2; });
}
//Curryfication classique : retour de fonction
//A noter que j'ai toujours un seul paramètre, j'imbriquerais des retours de fonction en cas de paramètres multiples
function tabMultiply(multiple) {
    return function (tabEntry) {
        return tabEntry.map(function (v) { return v * multiple; });
    };
}
//Curryfication avancée : lambda
var tabMultiplyLambda = function (m) { return function (t) { return t.map(function (x) { return x * m; }); }; };
var main = new Main();
function maximize(v) {
    return function (x) { return x > v ? x : v; };
}
function minimize(v) {
    return function (x) { return x < v ? x : v; };
}
//# sourceMappingURL=Test.js.map