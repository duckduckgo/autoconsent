import generateCMPTests from '../playwright/runner';

generateCMPTests('commanders-act', [
    'https://www.quechoisir.org/',
    'https://www.edf.fr/',
    'https://www.enedis.fr/',
    'https://www.direct-assurance.fr/',
]);
