import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_greatbritishlife.co.uk_uaa', ['https://www.greatbritishlife.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
