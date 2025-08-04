import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lenovo.com_3me', ['https://www.lenovo.com/de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
