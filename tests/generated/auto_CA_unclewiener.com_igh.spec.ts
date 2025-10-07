import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_unclewiener.com_igh', ['https://unclewiener.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
