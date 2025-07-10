import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_purolator.com_r0g', ['https://www.purolator.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
