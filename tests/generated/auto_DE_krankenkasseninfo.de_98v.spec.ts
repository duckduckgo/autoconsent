import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_krankenkasseninfo.de_98v', ['https://www.krankenkasseninfo.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
