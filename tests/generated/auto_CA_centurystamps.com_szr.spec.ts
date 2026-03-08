import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_centurystamps.com_szr', ['https://centurystamps.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
