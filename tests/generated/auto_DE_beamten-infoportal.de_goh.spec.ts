import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_beamten-infoportal.de_goh', ['https://beamten-infoportal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
