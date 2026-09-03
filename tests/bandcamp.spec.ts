import generateCMPTests from '../playwright/runner';

// Artist subdomains render the footer (which hosts the dialog) inside a shadow root,
// bandcamp.com itself keeps it in the light DOM.
generateCMPTests('bandcamp.com', [
    'https://bandcamp.com/',
    'https://ltlntr.bandcamp.com/track/marys-lizard',
    'https://c418.bandcamp.com/album/minecraft-volume-alpha',
]);
