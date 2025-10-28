import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cambrian.mb.ca_thd', ['https://www.cambrian.mb.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
