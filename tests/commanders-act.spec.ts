import generateCMPTests from '../playwright/runner';

generateCMPTests('commanders-act', [
    'https://www.oferteo.pl/',
    'https://www.maif.fr/',
    'https://www.totalenergies.fr/',
    'https://www.lcl.fr/',
    'https://www.bouyguestelecom.fr/',
]);
