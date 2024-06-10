
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
    return a > b ?  "a est superieur a b" : 
    a < b ? "a est inferieur a b":
    "a egale b";

}
console.log(ternaryChain(2,1))



module.exports = ternaryChain;