import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_greatbritishlife.co.uk_cl0', ['https://www.greatbritishlife.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
