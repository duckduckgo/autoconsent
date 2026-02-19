import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fischersports.com_1yr', ['https://www.fischersports.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
