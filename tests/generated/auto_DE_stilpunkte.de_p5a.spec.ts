import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stilpunkte.de_p5a', ['https://www.stilpunkte.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
