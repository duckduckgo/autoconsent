import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_onepeloton.com_tui', ['https://www.onepeloton.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
