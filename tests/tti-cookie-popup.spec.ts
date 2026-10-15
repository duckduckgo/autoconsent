import generateCMPTests from '../playwright/runner';

generateCMPTests('tti-cookie-popup', [
    'https://uk.ryobitools.eu/',
    'https://de.ryobitools.eu/',
    'https://uk.milwaukeetool.eu/',
    'https://de.milwaukeetool.eu/',
]);
