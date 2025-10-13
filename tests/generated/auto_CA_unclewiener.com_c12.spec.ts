import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_unclewiener.com_c12', ['https://unclewiener.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
