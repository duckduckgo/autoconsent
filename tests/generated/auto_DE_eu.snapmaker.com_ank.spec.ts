import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eu.snapmaker.com_ank', ['https://eu.snapmaker.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
