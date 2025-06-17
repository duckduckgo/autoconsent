import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_lordgun.com.au_0', ['https://www.lordgun.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
