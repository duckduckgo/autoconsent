import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_draytek.co.uk_3b3', ['https://www.draytek.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
