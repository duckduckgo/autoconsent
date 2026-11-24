import generateCMPTests from '../playwright/runner';

generateCMPTests('intermedia-cms-fsi', [
    'https://zs3.stalowowolski.pl/',
    'https://www.stalowowolski.pl/',
    'https://www.powiat-chelmno.pl/',
    'https://i.media.pl/',
]);
