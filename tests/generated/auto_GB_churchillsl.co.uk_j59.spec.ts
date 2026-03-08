import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_churchillsl.co.uk_j59', ['https://churchillsl.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
