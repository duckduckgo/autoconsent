import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ksk-koeln.de_spk', ['https://www.ksk-koeln.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
