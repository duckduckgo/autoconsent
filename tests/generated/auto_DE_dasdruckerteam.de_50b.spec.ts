import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dasdruckerteam.de_50b', ['https://dasdruckerteam.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
