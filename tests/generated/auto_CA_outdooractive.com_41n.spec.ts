import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_outdooractive.com_41n', ['https://www.outdooractive.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
