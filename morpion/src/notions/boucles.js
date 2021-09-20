const actionList = [
    "lister",
    "creer"
];
// // Les méthodes du tableau
actionList.push("suprimer");

// // Boucle universelle
// // La taille du tableau actionList.length
for (let i = 0; i < actionList.length; i++) {
    if (i == 1) {
        // Arrête la boucle imédiatement
        break;
    }
}

// Boucle for in
for (const i in caseList) {
    console.log(caseList[i]);
}

// Boucle for of
for (const action of actionList) {
   console.log(action);
}

// // Boucle forEach
actionList.forEach((action, index) => {
    console.log(action);
    console.log(index);
});
