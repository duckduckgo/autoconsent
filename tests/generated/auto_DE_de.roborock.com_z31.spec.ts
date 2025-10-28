import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.roborock.com_z31', ['https://de.roborock.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
