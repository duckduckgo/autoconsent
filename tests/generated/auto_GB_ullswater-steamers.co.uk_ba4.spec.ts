import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ullswater-steamers.co.uk_ba4', ['https://www.ullswater-steamers.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
