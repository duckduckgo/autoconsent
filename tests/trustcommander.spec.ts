import generateCMPTests from '../playwright/runner';

generateCMPTests('trustcommander', [
    'https://www.volvic.de/',
    'https://www.milupa.de/',
    'https://www.richemont.com/',
    'https://www.kartell.com/',
    'https://www.dbv.de/',
    'https://www.virbac.com/',
    'https://www.coriolis.com/',
    'https://www.blancheporte.fr/',
]);
