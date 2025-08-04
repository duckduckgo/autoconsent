import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_loyalfans.com_mc3', ['https://www.loyalfans.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
