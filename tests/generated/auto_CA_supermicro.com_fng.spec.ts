import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_supermicro.com_fng', ['https://www.supermicro.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
