import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lempertz.com_krb', ['https://www.lempertz.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
