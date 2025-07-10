import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_radiotimes.com_1hv', ['https://www.radiotimes.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
