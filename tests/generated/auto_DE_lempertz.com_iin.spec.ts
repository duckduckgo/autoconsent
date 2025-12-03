import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lempertz.com_iin', ['https://www.lempertz.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
