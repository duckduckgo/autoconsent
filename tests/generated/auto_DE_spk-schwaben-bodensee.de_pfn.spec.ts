import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spk-schwaben-bodensee.de_pfn', ['https://www.spk-schwaben-bodensee.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
