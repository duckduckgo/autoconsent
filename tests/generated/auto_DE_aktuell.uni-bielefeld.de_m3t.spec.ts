import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aktuell.uni-bielefeld.de_m3t', ['https://aktuell.uni-bielefeld.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
