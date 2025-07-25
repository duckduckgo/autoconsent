import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mccarthyandstone.co.uk_hqh', ['https://www.mccarthyandstone.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
