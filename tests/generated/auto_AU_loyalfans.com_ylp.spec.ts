import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_loyalfans.com_ylp', ['https://www.loyalfans.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
