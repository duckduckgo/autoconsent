import generateCMPTests from '../playwright/runner';

generateCMPTests('trustcommander', [
    'https://www.laposte.fr/',
    'https://aide.laposte.fr/',
    'https://localiser.laposte.fr/',
    'https://www.labanquepostale.fr/',
    'https://www.sephora.fr/',
    'https://www.3ds.com/',
]);
