import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_germany.muji.eu_dle', ['https://germany.muji.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
