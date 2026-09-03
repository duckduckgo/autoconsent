import generateCMPTests from '../playwright/runner';

generateCMPTests('trustcommander', [
    'https://www.quechoisir.org/',
    'https://www.direct-assurance.fr/',
    'https://www.enedis.fr/',
    'https://www.edf.fr/',
]);
