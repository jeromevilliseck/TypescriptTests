var Main = /** @class */ (function () {
    function Main() {
        console.log(JSON.stringify('Test', null, 4));
        console.log(JSON.stringify(maximize_3(2), null, 4));
        //Utilisation fonction lambda -> appelFonction(P1)(P2)
        console.log(JSON.stringify(maximizeNumberV(4)(4), null, 4)); //v = u -> retourne v
        console.log(JSON.stringify(maximizeNumberV(5)(4), null, 4)); //v > u -> retourne u
    }
    return Main;
}());
//Programmation fonctionelle -> 2 fonctions basiques
function maximize_3(v) {
    if (v > 3)
        return 3;
    else
        return v;
}
function maximize_4(v) {
    if (v > 4)
        return 4;
    else
        return v;
}
//Curryfication des deux fonctions ci dessus -> transformation en fonction lambda
var maximizeNumberV = function (v) { return function (u) { return v > u ? u : v; }; };
var main = new Main();
//# sourceMappingURL=Test.js.map