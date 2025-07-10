import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_towbarexpress.co.uk_lnx', ['https://www.towbarexpress.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
