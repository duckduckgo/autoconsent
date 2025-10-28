import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volkswagen-nutzfahrzeuge.de_sid', ['https://www.volkswagen-nutzfahrzeuge.de/de.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
