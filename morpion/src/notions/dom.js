// Création d'éléments:

    // 1: Créer l'élément
    const myP = $('<p></p>');
    // 2: Spécifier le contenu de l'élément
    myP.html('<a href="#">Lien</a>');
    // 3: Insérer l'élément
    // avant un élément
    $('nav .container-fluid').before(myP);
    // après un élément
    $('nav .container-fluid').after(myP);
    // à la fin d'un élément
    $('nav .container-fluid').append(myP);

// Supression d'éléments
myP.remove();

// Récupérer un enfant
const child = $('nav .container-fluid').find('p');

// // Chainage d'appel: chaque méthode me renvoie le sujet de la manipulation
// $('nav .container-fluid').append(
//     $('<p>')
//         .html(`<a href="#">Autreeeee</a>`)
//         .addClass('foo')
//         .on('click', () => console.log('clicked'))
// );














