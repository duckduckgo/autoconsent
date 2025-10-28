import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_basketball-reference.com_itx', ['https://www.basketball-reference.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
