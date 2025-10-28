import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_omron-healthcare.co.uk_8nr', ['https://www.omron-healthcare.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
