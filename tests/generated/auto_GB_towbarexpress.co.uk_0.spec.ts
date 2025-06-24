import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_towbarexpress.co.uk_0', ['https://www.towbarexpress.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
