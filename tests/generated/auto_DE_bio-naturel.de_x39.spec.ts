import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bio-naturel.de_x39', ['https://www.bio-naturel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
