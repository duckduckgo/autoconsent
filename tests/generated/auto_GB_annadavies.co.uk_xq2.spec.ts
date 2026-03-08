import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_annadavies.co.uk_xq2', ['https://annadavies.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
