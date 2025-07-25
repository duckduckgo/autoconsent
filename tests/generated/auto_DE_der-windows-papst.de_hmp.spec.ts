import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_der-windows-papst.de_hmp', ['https://www.der-windows-papst.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
