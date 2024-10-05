// Mit console.log können wir Text in die Browser console ausgeben
console.log('Hello from se console!');

/**
 * Mit slash stern stern kann ich mehrzeilige Kommentare machen
 *   bla
 *   bla
 *   ..
 */

// Das .hamburger Element selektieren und in einer Variable speichern
const hamburger = document.querySelector('.hamburger');
const drawer = document.querySelector('.mobile-nav-drawer');

// Bei einem Klick auf den Hamburger die is-active Klasse hinzufügen oder entfernen
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('is-active');
  drawer.classList.toggle('is-active');
});

// Bei einem Klick auf einen Link im Drawer sollte sich alles schließen.
const links = document.querySelectorAll('.mobile-nav-drawer nav a');

for (let link of links) {
  link.addEventListener('click', function() {
    hamburger.classList.remove('is-active');
    drawer.classList.remove('is-active');
  });
}