// Récupérer un élément présent à l'affichage
const navBarBrand = $('.navbar-brand');

// Modifier le contenu d'un élément
navBarBrand.text('Nouveau Text');

// Modifier la class d'un élément
navBarBrand.addClass('foo');
navBarBrand.toggleClass('foo');
navBarBrand.removeClass('foo');

// Ajouter un évènement
const maFonction = () => {
    console.log('click');
};
navBarBrand.on('click', maFonction);

// Cibler la cible de l'évènement