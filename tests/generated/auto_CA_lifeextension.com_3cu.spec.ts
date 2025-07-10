import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lifeextension.com_3cu', ['https://www.lifeextension.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
