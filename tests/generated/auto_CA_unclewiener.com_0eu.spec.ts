import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_unclewiener.com_0eu', ['https://unclewiener.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
