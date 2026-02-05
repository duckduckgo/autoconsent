import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_onlinecarparts.co.uk_8f3', ['https://www.onlinecarparts.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
