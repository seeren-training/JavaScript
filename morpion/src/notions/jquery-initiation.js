// Récupérer un élément présent à l'affichage
const navBarBrand = $('.navbar-brand');

// Modifier le contenu d'un élément
navBarBrand.text('Nouveau Text');

// Modifier la class d'un élément
navBarBrand.addClass('foo');
navBarBrand.toggleClass('foo');
navBarBrand.removeClass('foo');


const monAutreFonction = () => {
    console.log('Autre click');
};

navBarBrand.on('click', monAutreFonction);






// Définire la cible de l'évènement
const maFonction = (e) => {
    // Il faut le convertir en élément jQuery
    const target = $(e.target);
    console.log(target);
};
navBarBrand.on('click', maFonction);




