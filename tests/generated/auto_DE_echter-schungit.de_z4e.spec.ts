import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_echter-schungit.de_z4e', ['https://echter-schungit.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
