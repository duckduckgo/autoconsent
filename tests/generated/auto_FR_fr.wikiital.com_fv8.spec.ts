import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.wikiital.com_fv8', ['https://fr.wikiital.com/wiki/27_ottobre'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
