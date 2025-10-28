import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_purolator.com_opp', ['https://www.purolator.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
