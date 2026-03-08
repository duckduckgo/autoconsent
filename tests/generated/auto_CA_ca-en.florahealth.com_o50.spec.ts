import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ca-en.florahealth.com_o50', ['https://ca-en.florahealth.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
