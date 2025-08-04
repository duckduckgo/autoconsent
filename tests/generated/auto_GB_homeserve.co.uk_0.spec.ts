import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_homeserve.co.uk_0', ['https://www.homeserve.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
