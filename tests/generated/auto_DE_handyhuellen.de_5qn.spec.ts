import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_handyhuellen.de_5qn', ['https://www.handyhuellen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
