import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lenovo.com_jwp', ['https://www.lenovo.com/de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
