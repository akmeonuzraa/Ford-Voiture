


function showDetails(model) {

    const detailsDiv = document.getElementById('details');

    let details = '';


    switch (model) {

        case 'mustang':

            details = '<h3>Ford Mustang</h3><p>La Ford Mustang est une voiture de sport emblématique, connue pour sa puissance et son design audacieux. Elle incarne l’esprit de la performance américaine.</p>';

            break;

        case 'focus':

            details = '<h3>Ford Focus</h3><p>La Ford Focus est une compacte qui allie performance, confort et technologie avancée. Idéale pour la ville, elle offre une conduite agréable et économique.</p>';

            break;

        case 'explorer':

            details = '<h3>Ford Explorer</h3><p>Le Ford Explorer est un SUV qui offre un espace généreux et des capacités tout-terrain. Parfait pour les familles et les aventuriers.</p>';

            break;

        default:

            details = '<p>Modèle non trouvé.</p>';

    }


    detailsDiv.innerHTML = details;

    detailsDiv.style.display = 'block';

}
function showDetails(model) {
    const detailsCards = document.querySelectorAll('.details-card');
    detailsCards.forEach(card => card.style.display = 'none'); // Masquer toutes les cartes de détails
    document.getElementById(model + '-details').style.display = 'block'; // Afficher la carte de détails correspondante
}

function hideDetails() {
    const detailsCards = document.querySelectorAll('.details-card');
    detailsCards.forEach(card => card.style.display = 'none'); // Masquer toutes les cartes de détails
}
function toggleTable(tableId) {
const table = document.getElementById(tableId);
if (table.style.display === 'none') {
table.style.display = 'block'; // Afficher le tableau
} else {
table.style.display = 'none'; // Masquer le tableau
}
}

function hideDetails() {
const detailsCards = document.querySelectorAll('.details-card');
detailsCards.forEach(card => card.style.display = 'none'); // Masquer toutes les cartes de détails
}
function showDetails(model) {
    const detailsDiv = document.getElementById('details');
    let details = '';

    switch (model) {
        case 'mustang':
            details = '<h3>Ford Mustang</h3><p>La Ford Mustang est une voiture de sport emblématique, connue pour sa puissance et son design audacieux. Elle incarne l’esprit de la performance américaine.</p>';
            break;

        case 'focus':
            details = '<h3>Ford Focus</h3><p>La Ford Focus est une compacte qui allie performance, confort et technologie avancée. Idéale pour la ville, elle offre une conduite agréable et économique.</p>';
            break;

        case 'explorer':
            details = '<h3>Ford Explorer</h3><p>Le Ford Explorer est un SUV qui offre un espace généreux et des capacités tout-terrain. Parfait pour les familles et les aventuriers.</p>';
            break;

        default:
            details = '<p>Modèle non trouvé.</p>';
    }

    detailsDiv.innerHTML = details; // Mettre à jour le contenu
    detailsDiv.style.display = 'block'; // Afficher la carte de détails
}

function hideDetails() {
    const detailsDiv = document.getElementById('details');
    detailsDiv.style.display = 'none'; // Masquer la carte de détails
}





