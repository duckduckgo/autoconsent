import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mobile.1und1.de_nne', ['https://mobile.1und1.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
