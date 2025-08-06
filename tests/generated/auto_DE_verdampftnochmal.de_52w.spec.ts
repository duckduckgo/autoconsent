import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_verdampftnochmal.de_52w', ['https://verdampftnochmal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
