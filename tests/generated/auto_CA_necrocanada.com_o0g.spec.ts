import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_necrocanada.com_o0g', ['https://necrocanada.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
