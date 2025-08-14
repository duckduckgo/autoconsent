import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_messerworld.de_yin', ['https://www.messerworld.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
