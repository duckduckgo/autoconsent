import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ksk-es.de_rmo', ['https://www.ksk-es.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
