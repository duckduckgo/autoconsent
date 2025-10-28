import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_spenergynetworks.co.uk_v43', ['https://www.spenergynetworks.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
