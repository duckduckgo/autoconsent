import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_festivalregard.com_3nu', ['https://festivalregard.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
