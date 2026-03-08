import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_amadeus-verlag.de_56o', ['https://amadeus-verlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
