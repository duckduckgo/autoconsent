import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sexspielzeug.net_o0t', ['https://www.sexspielzeug.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
