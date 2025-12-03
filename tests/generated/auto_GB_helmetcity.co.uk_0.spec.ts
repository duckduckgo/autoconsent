import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_helmetcity.co.uk_0', ['https://www.helmetcity.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
