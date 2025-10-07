import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_der-windows-papst.de_qgw', ['https://www.der-windows-papst.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
