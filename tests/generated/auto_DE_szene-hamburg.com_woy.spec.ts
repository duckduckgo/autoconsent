import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_szene-hamburg.com_woy', ['https://szene-hamburg.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
