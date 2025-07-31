import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ipswichstar.co.uk_sgd', ['https://www.ipswichstar.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
