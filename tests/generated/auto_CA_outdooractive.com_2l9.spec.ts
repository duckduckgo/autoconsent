import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_outdooractive.com_2l9', ['https://www.outdooractive.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
