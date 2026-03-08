import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bleche-nach-mass.de_0cc', ['https://bleche-nach-mass.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
