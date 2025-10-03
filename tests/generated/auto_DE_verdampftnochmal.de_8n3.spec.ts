import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_verdampftnochmal.de_8n3', ['https://verdampftnochmal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
