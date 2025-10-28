import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_longueuil.quebec_00t', ['https://longueuil.quebec/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
