import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ksk-gp.de_qxq', ['https://www.ksk-gp.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
