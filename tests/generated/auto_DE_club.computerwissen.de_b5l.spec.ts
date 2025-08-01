import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_club.computerwissen.de_b5l', ['https://club.computerwissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
