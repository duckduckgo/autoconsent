import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_westerntelegraph.co.uk_bz4', ['https://www.westerntelegraph.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
