import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_krebsgesellschaft.de_x56', ['https://www.krebsgesellschaft.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
