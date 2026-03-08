import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_asz.heidelberg.de_iie', ['https://asz.heidelberg.de/start'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
