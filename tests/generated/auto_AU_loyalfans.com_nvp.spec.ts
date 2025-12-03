import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_loyalfans.com_nvp', ['https://www.loyalfans.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
