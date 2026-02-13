import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gutscheine.de_iel', ['https://www.gutscheine.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
