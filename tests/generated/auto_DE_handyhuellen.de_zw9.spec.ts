import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_handyhuellen.de_zw9', ['https://www.handyhuellen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
