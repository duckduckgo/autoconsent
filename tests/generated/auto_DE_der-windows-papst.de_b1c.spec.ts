import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_der-windows-papst.de_b1c', ['https://www.der-windows-papst.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
