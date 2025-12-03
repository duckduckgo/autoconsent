import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stilpunkte.de_anz', ['https://www.stilpunkte.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
