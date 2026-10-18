import generateCMPTests from '../playwright/runner';

generateCMPTests('gear4music', [
    'https://www.gear4music.se/',
    'https://www.gear4music.de/',
    'https://www.gear4music.fr/',
    'https://www.gear4music.pl/',
]);
