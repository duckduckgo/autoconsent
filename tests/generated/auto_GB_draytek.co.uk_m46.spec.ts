import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_draytek.co.uk_m46', ['https://www.draytek.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
