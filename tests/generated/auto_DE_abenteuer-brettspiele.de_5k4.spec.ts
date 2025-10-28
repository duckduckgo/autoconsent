import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_abenteuer-brettspiele.de_5k4', ['https://www.abenteuer-brettspiele.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
