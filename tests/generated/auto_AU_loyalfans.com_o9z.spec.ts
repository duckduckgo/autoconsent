import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_loyalfans.com_o9z', ['https://www.loyalfans.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
