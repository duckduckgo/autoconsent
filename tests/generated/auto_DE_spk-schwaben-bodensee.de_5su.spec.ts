import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spk-schwaben-bodensee.de_5su', ['https://www.spk-schwaben-bodensee.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
