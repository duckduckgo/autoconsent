import generateCMPTests from '../playwright/runner';

generateCMPTests('bandcamp.com', [
    'https://bandcamp.com/',
    // artist subdomain: dialog lives inside the <page-footer> shadow root
    'https://biggiantcircles.bandcamp.com/',
    'https://biggiantcircles.bandcamp.com/album/beast-breaker-soundtrack',
]);
