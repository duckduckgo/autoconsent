import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mccarthyandstone.co.uk_ver', ['https://www.mccarthyandstone.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
