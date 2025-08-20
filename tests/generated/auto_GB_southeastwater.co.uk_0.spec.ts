import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_southeastwater.co.uk_0', ['https://www.southeastwater.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
