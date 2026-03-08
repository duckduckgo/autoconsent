import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_documentation.artcena.fr_22j', ['https://documentation.artcena.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
