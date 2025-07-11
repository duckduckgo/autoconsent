import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_greatbritishlife.co.uk_efu', ['https://www.greatbritishlife.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
