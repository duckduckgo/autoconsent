import generateCMPTests from '../playwright/runner';

generateCMPTests('bandcamp.com', [
    'https://bandcamp.com/',
    // dialog lives in the menu-bar shadow root
    'https://daily.bandcamp.com/',
    // dialog lives in the page-footer shadow root
    'https://radiohead.bandcamp.com/album/hail-to-the-thief-live-recordings-2003-2009',
]);
