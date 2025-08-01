import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lohi.de_qbn', ['https://www.lohi.de/lohnsteuerhilfe.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
