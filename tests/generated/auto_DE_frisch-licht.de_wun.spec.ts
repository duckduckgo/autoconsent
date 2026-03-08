import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frisch-licht.de_wun', ['https://frisch-licht.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
