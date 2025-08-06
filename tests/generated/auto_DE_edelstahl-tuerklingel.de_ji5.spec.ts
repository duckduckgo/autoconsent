import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_edelstahl-tuerklingel.de_ji5', ['https://edelstahl-tuerklingel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
