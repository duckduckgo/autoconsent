import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ameqenligne.com_f5e', ['https://ameqenligne.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
