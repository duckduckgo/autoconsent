import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_club.computerwissen.de_729', ['https://club.computerwissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
