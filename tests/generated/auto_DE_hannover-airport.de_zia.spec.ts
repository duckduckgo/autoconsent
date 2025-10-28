import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hannover-airport.de_zia', ['https://www.hannover-airport.de/informationen-fuer-fluggaeste-und-besucher/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
