import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_er-sucht-ihn.de_x7s', ['https://er-sucht-ihn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
