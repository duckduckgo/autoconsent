import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_leaderlive.co.uk_vf9', ['https://www.leaderlive.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
