import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_checkyourfact.com_vqt', ['https://checkyourfact.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
