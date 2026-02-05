import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nospa.de_seo', ['https://www.nospa.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
