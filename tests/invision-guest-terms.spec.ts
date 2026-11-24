import generateCMPTests from '../playwright/runner';

generateCMPTests('invision-guest-terms', [
    'https://www.bilforumet.no/',
    'https://vacn.no/',
    'https://www.soundtrack-board.de/',
    'https://www.filmvorfuehrer.de/',
    'https://forums.rgc.ro/',
    'https://www.cap-recifal.com/',
]);
