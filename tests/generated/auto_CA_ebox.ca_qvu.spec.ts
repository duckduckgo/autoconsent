import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ebox.ca_qvu', ['https://www.ebox.ca/ontario/residentiel/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
