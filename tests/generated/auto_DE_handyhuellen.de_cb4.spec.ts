import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_handyhuellen.de_cb4', ['https://www.handyhuellen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
