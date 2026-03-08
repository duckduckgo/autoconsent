import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_colchestermilitaria.co.uk_lmw', ['https://colchestermilitaria.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
