import generateCMPTests from '../playwright/runner';

generateCMPTests('bandcamp.com', [
    'https://bandcamp.com/',
    // artist pages render the dialog inside the <page-footer> shadow root
    'https://radiohead.bandcamp.com/album/hail-to-the-thief-live-recordings-2003-2009',
    'https://carseatheadrest.bandcamp.com/album/twin-fantasy',
]);
