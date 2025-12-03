import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_corporate.bouyguestelecom.fr_2hg', ['https://www.corporate.bouyguestelecom.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
