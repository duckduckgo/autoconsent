import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_champex-linden.de_4qo', ['https://champex-linden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
