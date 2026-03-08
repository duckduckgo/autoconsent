import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_club.stellantis.de_2ov', ['https://club.stellantis.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
