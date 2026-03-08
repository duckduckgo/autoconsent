import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_acrylteller.com_b8y', ['https://acrylteller.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
