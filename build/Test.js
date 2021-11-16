var Main = /** @class */ (function () {
    function Main() {
        console.log(tabDouble(tab));
        var triple = tabMultiply(3);
        console.log(triple(tab));
        console.log(tabMultiplyLambda(4)(tab));
    }
    return Main;
}());
var tab = [1, 5, 2, 4, 3];
//Programmation fonctionnelle avec lambda
function tabDouble(inputTable) {
    return inputTable.map(function (v) { return v * 2; });
}
//Curryfication classique : retour de fonction
function tabMultiply(multiple) {
    return function (tabEntry) {
        return tabEntry.map(function (v) { return v * multiple; });
    };
}
//Curryfication avancée : lambda
var tabMultiplyLambda = function (m) { return function (t) { return t.map(function (x) { return x * m; }); }; };
var main = new Main();
//# sourceMappingURL=Test.js.map