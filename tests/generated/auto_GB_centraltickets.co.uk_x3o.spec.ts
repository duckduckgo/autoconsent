import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_centraltickets.co.uk_x3o', ['https://centraltickets.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
