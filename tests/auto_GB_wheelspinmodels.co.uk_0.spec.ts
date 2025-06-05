import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_wheelspinmodels.co.uk_0', ['https://wheelspinmodels.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
